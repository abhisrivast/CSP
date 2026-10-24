"""Brush-stroke engine for the Fourth Wave mark.

A stroke = a centreline (chain of cubic Beziers) + a pressure profile + an elliptical nib.
We stamp the nib along the centreline into a supersampled raster (true union, clean corners),
optionally carve dry-brush bristle gaps into the tail, then trace the result back to vector
(marching squares -> corner split -> Schneider cubic fitting). Output: flat SVG path data.
"""
from __future__ import annotations
import math
import numpy as np
from PIL import Image, ImageDraw

# ---------------------------------------------------------------- geometry helpers

def bez(p0, p1, p2, p3, t):
    t = np.asarray(t)[:, None]
    mt = 1 - t
    return (mt ** 3) * p0 + 3 * mt * mt * t * p1 + 3 * mt * t * t * p2 + t ** 3 * p3


def sample_chain(segs, step=0.5):
    """segs: list of 4-tuples of (x,y). Returns dense polyline (N,2) evenly spaced by arclength."""
    pts = []
    for s in segs:
        p = [np.array(q, float) for q in s]
        tt = np.linspace(0, 1, 400)
        pts.append(bez(*p, tt) if not pts else bez(*p, tt)[1:])
    pts = np.vstack(pts)
    d = np.r_[0, np.cumsum(np.hypot(*np.diff(pts, axis=0).T))]
    L = d[-1]
    n = max(2, int(L / step))
    u = np.linspace(0, L, n)
    x = np.interp(u, d, pts[:, 0]); y = np.interp(u, d, pts[:, 1])
    return np.c_[x, y], L


def tangents(pts, win=3):
    d = np.zeros_like(pts)
    d[win:-win] = pts[2 * win:] - pts[:-2 * win]
    d[:win] = pts[win] - pts[0]
    d[-win:] = pts[-1] - pts[-1 - win]
    n = np.hypot(*d.T)[:, None]
    n[n == 0] = 1
    return d / n

# ---------------------------------------------------------------- raster stamping

def ellipse_poly(cx, cy, a, b, ang, n=28):
    th = np.linspace(0, 2 * math.pi, n, endpoint=False)
    ca, sa = math.cos(ang), math.sin(ang)
    x = a * np.cos(th); y = b * np.sin(th)
    return list(zip(cx + x * ca - y * sa, cy + x * sa + y * ca))


class Canvas:
    """Supersampled binary canvas in design units. scale = raster px per design unit."""

    def __init__(self, x0, y0, x1, y1, scale=2.0, ss=3):
        self.x0, self.y0, self.scale, self.ss = x0, y0, scale, ss
        self.W = int(math.ceil((x1 - x0) * scale)) + 8
        self.H = int(math.ceil((y1 - y0) * scale)) + 8
        self.img = Image.new('L', (self.W * ss, self.H * ss), 0)
        self.dr = ImageDraw.Draw(self.img)

    def P(self, x, y):
        k = self.scale * self.ss
        return ((x - self.x0) * k + 4 * self.ss, (y - self.y0) * k + 4 * self.ss)

    def poly(self, pts, fill=255):
        self.dr.polygon([self.P(x, y) for x, y in pts], fill=fill)

    def stroke(self, segs, width, profile, nib_ratio=0.6, nib_angle=-0.55, wobble=0.0, seed=1,
               step=0.6):
        """profile(s) -> pressure multiplier, s in [0,1] by arclength."""
        pts, L = sample_chain(segs, step)
        rng = np.random.default_rng(seed)
        n = len(pts)
        s = np.linspace(0, 1, n)
        # low-frequency width wobble (hand pressure)
        if wobble:
            k = np.zeros(n)
            for f, a in ((2.3, 1), (5.1, .6), (11.7, .3)):
                k += a * np.sin(2 * math.pi * f * s + rng.uniform(0, 6.28))
            wob = 1 + wobble * k / 1.9
        else:
            wob = np.ones(n)
        for i in range(n):
            w = width * profile(s[i]) * wob[i]
            if w <= 0.2:
                continue
            a = w / 2
            b = a * nib_ratio
            self.poly(ellipse_poly(pts[i, 0], pts[i, 1], a, b, nib_angle), 255)
        return pts, L

    def carve_bristles(self, pts, width, profile, s_dry, s_fade, offsets, gapw, seed=3, nib_ratio=0.6):
        """Carve dry-brush gaps between arclength s_dry (driest, gaps widest) and s_fade (gaps vanish).
        offsets: list of (fraction of half-width across the stroke, length factor 0..1).
        gapw(t) -> gap width in design units, t=0 at s_dry .. 1 at s_fade."""
        n = len(pts)
        T = tangents(pts, 4)
        N = np.c_[-T[:, 1], T[:, 0]]
        i_dry = int(round(s_dry * (n - 1))); i_fade = int(round(s_fade * (n - 1)))
        step = 1 if i_fade > i_dry else -1
        span = abs(i_fade - i_dry)
        for off, lf in offsets:
            stop = i_dry + step * int(span * lf)
            for i in range(i_dry, stop, step * 2):
                t = abs(i - i_dry) / max(1, span * lf)
                hw = width * profile(i / (n - 1)) / 2
                c = pts[i] + N[i] * off * hw
                g = gapw(t)
                if g <= 0.05:
                    continue
                self.poly(ellipse_poly(c[0], c[1], max(g * 2.0, 1.2), g / 2,
                                       math.atan2(T[i, 1], T[i, 0]), 12), 0)

    def gray(self):
        im = self.img.reduce(self.ss)
        return np.asarray(im, dtype=np.float32) / 255.0

    def to_path(self, tol=0.35, corner_deg=38, smooth=1.0):
        g = self.gray()
        loops = marching_squares(g, 0.5)
        out = []
        for lp in loops:
            if len(lp) < 8:
                continue
            area = poly_area(lp)
            if abs(area) < 6:  # px^2 specks
                continue
            curves = fit_closed(lp, tol, corner_deg, smooth)
            # back to design units
            k = 1 / self.scale
            curves = [[((x - 4) * k + self.x0, (y - 4) * k + self.y0) for x, y in c] for c in curves]
            out.append(curves)
        return out

# ---------------------------------------------------------------- tracing

def poly_area(p):
    p = np.asarray(p)
    x, y = p[:, 0], p[:, 1]
    return 0.5 * (np.dot(x, np.roll(y, -1)) - np.dot(y, np.roll(x, -1)))


def marching_squares(g, iso=0.5):
    """Closed iso-contours of a 2D field (row=y, col=x). Returns list of (N,2) arrays in (x,y) px."""
    g = np.pad(g, 1, constant_values=0)
    H, W = g.shape
    b = g > iso
    tl = b[:-1, :-1]; tr = b[:-1, 1:]; br = b[1:, 1:]; bl = b[1:, :-1]
    case = tl * 8 + tr * 4 + br * 2 + bl * 1
    ys, xs = np.nonzero((case != 0) & (case != 15))

    def interp(y0, x0, y1, x1):
        v0, v1 = g[y0, x0], g[y1, x1]
        t = (iso - v0) / (v1 - v0) if v1 != v0 else 0.5
        return (x0 + t * (x1 - x0) - 1, y0 + t * (y1 - y0) - 1)

    # edges keyed: ('h', y, x) = edge between (y,x)-(y,x+1); ('v', y, x) = (y,x)-(y+1,x)
    nxt = {}
    # segment table: oriented so that inside (True) is on the right when walking in image coords
    T = {1: [('L', 'B')], 2: [('B', 'R')], 3: [('L', 'R')], 4: [('R', 'T')], 5: None,
         6: [('B', 'T')], 7: [('L', 'T')], 8: [('T', 'L')], 9: [('T', 'B')], 10: None,
         11: [('T', 'R')], 12: [('R', 'L')], 13: [('R', 'B')], 14: [('B', 'L')]}
    for y, x in zip(ys, xs):
        c = case[y, x]
        key = {'T': ('h', y, x), 'B': ('h', y + 1, x), 'L': ('v', y, x), 'R': ('v', y, x + 1)}
        segs = T[c]
        if segs is None:
            centre = (g[y, x] + g[y, x + 1] + g[y + 1, x] + g[y + 1, x + 1]) / 4 > iso
            if c == 5:   # tr & bl inside
                segs = [('L', 'T'), ('R', 'B')] if centre else [('L', 'B'), ('R', 'T')]
            else:        # tl & br inside
                segs = [('T', 'R'), ('B', 'L')] if centre else [('T', 'L'), ('B', 'R')]
        for a, bb in segs:
            nxt[key[a]] = key[bb]
    loops = []
    seen = set()
    for start in list(nxt.keys()):
        if start in seen:
            continue
        lp = []
        e = start
        while e not in seen:
            seen.add(e)
            kind, y, x = e
            lp.append(interp(y, x, y, x + 1) if kind == 'h' else interp(y, x, y + 1, x))
            e = nxt.get(e)
            if e is None:
                break
        if len(lp) > 2:
            loops.append(np.array(lp))
    return loops

# ---------------------------------------------------------------- Schneider fitting

def _bz(ctrl, t):
    p0, p1, p2, p3 = ctrl
    t = t[:, None]
    mt = 1 - t
    return mt ** 3 * p0 + 3 * mt ** 2 * t * p1 + 3 * mt * t ** 2 * p2 + t ** 3 * p3


def _bzd(ctrl, t):
    p0, p1, p2, p3 = ctrl
    t = t[:, None]; mt = 1 - t
    return 3 * mt ** 2 * (p1 - p0) + 6 * mt * t * (p2 - p1) + 3 * t ** 2 * (p3 - p2)


def _bzdd(ctrl, t):
    p0, p1, p2, p3 = ctrl
    t = t[:, None]
    return 6 * (1 - t) * (p2 - 2 * p1 + p0) + 6 * t * (p3 - 2 * p2 + p1)


def _gen(pts, u, t1, t2):
    p0, p3 = pts[0], pts[-1]
    A1 = t1[None, :] * (3 * (1 - u) ** 2 * u)[:, None]
    A2 = t2[None, :] * (3 * (1 - u) * u ** 2)[:, None]
    C = np.array([[np.sum(A1 * A1), np.sum(A1 * A2)], [np.sum(A1 * A2), np.sum(A2 * A2)]])
    base = _bz((p0, p0, p3, p3), u)
    tmp = pts - base
    X = np.array([np.sum(A1 * tmp), np.sum(A2 * tmp)])
    det = C[0, 0] * C[1, 1] - C[0, 1] * C[1, 0]
    seg = np.linalg.norm(p3 - p0)
    if abs(det) > 1e-12:
        a1 = (X[0] * C[1, 1] - X[1] * C[0, 1]) / det
        a2 = (C[0, 0] * X[1] - C[1, 0] * X[0]) / det
    else:
        a1 = a2 = seg / 3
    eps = 1e-6 * seg
    if a1 < eps or a2 < eps or a1 > seg * 2 or a2 > seg * 2:
        a1 = a2 = seg / 3
    return (p0, p0 + t1 * a1, p3 + t2 * a2, p3)


def _reparam(ctrl, pts, u):
    d = _bz(ctrl, u) - pts
    d1 = _bzd(ctrl, u); d2 = _bzdd(ctrl, u)
    num = np.sum(d * d1, 1)
    den = np.sum(d1 * d1, 1) + np.sum(d * d2, 1)
    with np.errstate(divide='ignore', invalid='ignore'):
        nu = np.where(np.abs(den) > 1e-12, u - num / den, u)
    return np.clip(nu, 0, 1)


def _maxerr(ctrl, pts, u):
    d = np.sum((_bz(ctrl, u) - pts) ** 2, 1)
    i = int(np.argmax(d))
    return d[i], i


def _chord(pts):
    d = np.r_[0, np.cumsum(np.hypot(*np.diff(pts, axis=0).T))]
    return d / d[-1] if d[-1] > 0 else np.linspace(0, 1, len(pts))


def _unit(v):
    n = np.linalg.norm(v)
    return v / n if n > 1e-12 else v


def fit_cubic(pts, t1, t2, err, depth=0):
    if len(pts) == 2 or depth > 12:
        seg = np.linalg.norm(pts[-1] - pts[0]) / 3
        return [(pts[0], pts[0] + t1 * seg, pts[-1] + t2 * seg, pts[-1])]
    u = _chord(pts)
    ctrl = _gen(pts, u, t1, t2)
    e, si = _maxerr(ctrl, pts, u)
    if e < err:
        return [ctrl]
    if e < err * 16:
        for _ in range(12):
            u = _reparam(ctrl, pts, u)
            ctrl = _gen(pts, u, t1, t2)
            e, si = _maxerr(ctrl, pts, u)
            if e < err:
                return [ctrl]
    si = min(max(si, 1), len(pts) - 2)
    tc = _unit(pts[si - 1] - pts[si + 1])
    return fit_cubic(pts[:si + 1], t1, tc, err, depth + 1) + fit_cubic(pts[si:], -tc, t2, err, depth + 1)


def fit_closed(lp, tol=0.35, corner_deg=38, smooth=1.0):
    """lp: closed polyline (N,2) px. Returns list of cubic ctrl tuples, forming a closed loop."""
    p = np.asarray(lp, float)
    n = len(p)
    # light circular smoothing to kill marching-squares stair noise
    if smooth > 0:
        k = int(max(1, round(smooth * 2)))
        ker = np.exp(-0.5 * (np.arange(-k, k + 1) / max(smooth, 1e-3)) ** 2); ker /= ker.sum()
        ps = np.zeros_like(p)
        for j, w in zip(range(-k, k + 1), ker):
            ps += w * np.roll(p, -j, axis=0)
    else:
        ps = p
    # corner detection on the raw loop: turning angle over a window
    w = 4
    a = np.roll(p, w, 0); c = np.roll(p, -w, 0)
    v1 = p - a; v2 = c - p
    ang = np.degrees(np.abs(np.arctan2(v1[:, 0] * v2[:, 1] - v1[:, 1] * v2[:, 0], np.sum(v1 * v2, 1))))
    cand = np.nonzero(ang > corner_deg)[0]
    corners = []
    if len(cand):
        # keep local maxima, min spacing
        order = cand[np.argsort(-ang[cand])]
        taken = np.zeros(n, bool)
        for i in order:
            lo, hi = i - 2 * w, i + 2 * w
            idx = np.arange(lo, hi + 1) % n
            if taken[idx].any():
                continue
            taken[i] = True
            corners.append(i)
        corners.sort()
    # at corners, use raw positions (no rounding)
    for i in corners:
        ps[i] = p[i]
    err = tol * tol
    curves = []
    if not corners:
        # split at index 0 with smooth tangent
        P = np.vstack([ps, ps[:1]])
        t = _unit(ps[1] - ps[-1])
        curves = fit_cubic(P, t, -t, err)
    else:
        m = len(corners)
        for j in range(m):
            i0, i1 = corners[j], corners[(j + 1) % m]
            idx = np.arange(i0, i1 + (n if i1 <= i0 else 0) + 1) % n
            P = ps[idx]
            if len(P) < 2:
                continue
            t1 = _unit(P[min(2, len(P) - 1)] - P[0])
            t2 = _unit(P[max(-3, -len(P))] - P[-1])
            curves += fit_cubic(P, t1, t2, err)
    return curves


def curves_to_d(loops, prec=1):
    f = lambda v: (f"{v:.{prec}f}".rstrip('0').rstrip('.') if prec else f"{round(v)}")
    out = []
    for curves in loops:
        if not curves:
            continue
        x, y = curves[0][0]
        s = [f"M{f(x)} {f(y)}"]
        for c in curves:
            s.append("C" + " ".join(f"{f(px)} {f(py)}" for px, py in c[1:]))
        s.append("Z")
        out.append("".join(s))
    return "".join(out)


def transform_loops(loops, sx, tx, ty, sy=None):
    sy = sx if sy is None else sy
    return [[[(x * sx + tx, y * sy + ty) for x, y in c] for c in curves] for curves in loops]


def loops_bbox(loops):
    xs, ys = [], []
    t = np.linspace(0, 1, 24)
    for curves in loops:
        for c in curves:
            q = _bz(tuple(np.array(v) for v in c), t)
            xs.append(q[:, 0]); ys.append(q[:, 1])
    xs = np.concatenate(xs); ys = np.concatenate(ys)
    return float(xs.min()), float(ys.min()), float(xs.max()), float(ys.max())
