"""Hand-lettered marker caps for the CSP placard concept.

Each letter is a skeleton (the line a person draws with a marker). The skeleton is
sampled, warped by a smooth per-letter "hand" field, and swept with a slightly
elliptical chisel nib to produce filled outline polygons. All outlines of one colour
share the same winding direction so overlapping strokes union under the default
nonzero fill rule: the SVG stays pure filled paths.
"""
import math
import random

import numpy as np

# --------------------------------------------------------------------------- geometry

def _line(p0, p1, step=0.8):
    p0, p1 = np.asarray(p0, float), np.asarray(p1, float)
    n = max(2, int(np.linalg.norm(p1 - p0) / step) + 1)
    t = np.linspace(0, 1, n)[:, None]
    return p0 + (p1 - p0) * t


def _arc(cx, cy, rx, ry, t0, t1, step=0.8):
    t0, t1 = math.radians(t0), math.radians(t1)
    approx = abs(t1 - t0) * (rx + ry) / 2
    n = max(3, int(approx / step) + 1)
    t = np.linspace(t0, t1, n)
    return np.stack([cx + rx * np.cos(t), cy + ry * np.sin(t)], 1)


def _spline(pts, step=0.8):
    """Centripetal Catmull-Rom through pts (endpoints mirrored)."""
    P = [np.asarray(p, float) for p in pts]
    P = [2 * P[0] - P[1]] + P + [2 * P[-1] - P[-2]]
    out = []
    for i in range(1, len(P) - 2):
        p0, p1, p2, p3 = P[i - 1], P[i], P[i + 1], P[i + 2]
        def tj(ti, a, b):
            return ti + max(np.linalg.norm(b - a), 1e-6) ** 0.5
        t0 = 0; t1 = tj(t0, p0, p1); t2 = tj(t1, p1, p2); t3 = tj(t2, p2, p3)
        n = max(4, int(np.linalg.norm(p2 - p1) / step) + 1)
        for t in np.linspace(t1, t2, n)[: -1 if i < len(P) - 3 else None]:
            a1 = (t1 - t) / (t1 - t0) * p0 + (t - t0) / (t1 - t0) * p1
            a2 = (t2 - t) / (t2 - t1) * p1 + (t - t1) / (t2 - t1) * p2
            a3 = (t3 - t) / (t3 - t2) * p2 + (t - t2) / (t3 - t2) * p3
            b1 = (t2 - t) / (t2 - t0) * a1 + (t - t0) / (t2 - t0) * a2
            b2 = (t3 - t) / (t3 - t1) * a2 + (t - t1) / (t3 - t1) * a3
            out.append((t2 - t) / (t2 - t1) * b1 + (t - t1) / (t2 - t1) * b2)
    return np.array(out)


def stroke(*pieces):
    """Concatenate pieces: ('L', p0, p1) | ('A', cx, cy, rx, ry, t0, t1) | ('S', [pts])."""
    segs = []
    for pc in pieces:
        kind = pc[0]
        if kind == 'L':
            s = _line(pc[1], pc[2])
        elif kind == 'A':
            s = _arc(*pc[1:])
        elif kind == 'S':
            s = _spline(pc[1])
        else:
            raise ValueError(kind)
        if segs:
            s = s[1:]
        segs.append(s)
    return np.concatenate(segs)


def signed_area(poly):
    x, y = poly[:, 0], poly[:, 1]
    return 0.5 * float(np.sum(x * np.roll(y, -1) - np.roll(x, -1) * y))


def orient(poly, positive=True):
    a = signed_area(poly)
    if (a > 0) != positive:
        return poly[::-1]
    return poly


def rdp(pts, eps):
    """Ramer-Douglas-Peucker on an open polyline."""
    if len(pts) < 3:
        return pts
    a, b = pts[0], pts[-1]
    ab = b - a
    L = np.linalg.norm(ab)
    if L < 1e-9:
        d = np.linalg.norm(pts - a, axis=1)
    else:
        d = np.abs(np.cross(ab, pts - a)) / L
    i = int(np.argmax(d))
    if d[i] > eps:
        left = rdp(pts[: i + 1], eps)
        right = rdp(pts[i:], eps)
        return np.concatenate([left[:-1], right])
    return np.array([a, b])


def simplify_closed(poly, eps):
    # split at the two farthest points so RDP works on a closed ring
    i = 0
    j = int(np.argmax(np.linalg.norm(poly - poly[0], axis=1)))
    a = rdp(poly[i: j + 1], eps)
    b = rdp(np.concatenate([poly[j:], poly[:1]]), eps)
    return np.concatenate([a[:-1], b[:-1]])


def poly_d(poly, eps=0.12, nd=1):
    p = simplify_closed(poly, eps) if eps else poly
    f = f'{{:.{nd}f}}'
    s = 'M' + ' '.join(f'{f.format(x)} {f.format(y)}' for x, y in p) + 'Z'
    return s.replace('.0 ', ' ').replace('-0 ', '0 ')


def transform(pts, rot=0.0, scale=1.0, tx=0.0, ty=0.0, origin=(0, 0)):
    th = math.radians(rot)
    c, s = math.cos(th), math.sin(th)
    o = np.asarray(origin, float)
    q = (pts - o) * scale
    q = np.stack([q[:, 0] * c - q[:, 1] * s, q[:, 0] * s + q[:, 1] * c], 1)
    return q + o + np.array([tx, ty])

# --------------------------------------------------------------------------- nib

class Nib:
    """Chisel marker nib: a rounded-rectangle (superellipse) with broad half-width a,
    thin half-width b, broad edge at `angle` degrees (y-down screen coordinates)."""

    def __init__(self, a, b, angle=-32, n=2.8, m=72):
        self.a, self.b, self.angle, self.n = a, b, angle, n
        t = np.linspace(0, 2 * math.pi, m, endpoint=False)
        c, s = np.cos(t), np.sin(t)
        x = a * np.sign(c) * np.abs(c) ** (2 / n)
        y = b * np.sign(s) * np.abs(s) ** (2 / n)
        th = math.radians(angle)
        R = np.array([[math.cos(th), -math.sin(th)], [math.sin(th), math.cos(th)]])
        self.V = np.stack([x, y], 1) @ R.T  # CCW-ish vertex ring

    def idx(self, d):
        return np.argmax(d @ self.V.T, axis=-1)

    def scaled(self, k):
        return Nib(self.a * k, self.b * k, self.angle, self.n, len(self.V))

    def rotated(self, d):
        return Nib(self.a, self.b, self.angle + d, self.n, len(self.V))


def sweep(P, nib, press=(1.0, 1.0)):
    """Outline polygon of skeleton P swept by nib. press = nib scale at start/end
    (a marker lands a touch heavier than it lifts)."""
    P = np.asarray(P, float)
    T = np.gradient(P, axis=0)
    T /= np.maximum(np.linalg.norm(T, axis=1, keepdims=True), 1e-9)
    Nl = np.stack([T[:, 1], -T[:, 0]], 1)
    seg = np.r_[0, np.cumsum(np.linalg.norm(np.diff(P, axis=0), axis=1))]
    u = seg / max(seg[-1], 1e-9)
    k = (press[0] + (press[1] - press[0]) * u)[:, None]
    V = nib.V
    M = len(V)
    left = P + k * V[nib.idx(Nl)]
    right = P + k * V[nib.idx(-Nl)]

    def cap(p, kk, n_from, through):
        i0, i1, it = nib.idx(n_from), nib.idx(-n_from), nib.idx(through)
        fwd = [(i0 + j) % M for j in range((i1 - i0) % M + 1)]
        if it not in fwd:
            fwd = [(i0 - j) % M for j in range((i0 - i1) % M + 1)]
        return p + kk * V[fwd]

    end = cap(P[-1], k[-1], Nl[-1], T[-1])
    start = cap(P[0], k[0], -Nl[0], -T[0])
    return np.concatenate([left, end, right[::-1], start])


def _intersections(P):
    """All proper intersections between non-adjacent edges of closed ring P.
    Returns list of (i, j, point) with i < j."""
    A = P; B = np.roll(P, -1, axis=0); D = B - A
    n = len(P)
    res = []
    for i0 in range(0, n, 256):
        Ai = A[i0:i0 + 256, None, :]; Di = D[i0:i0 + 256, None, :]
        Aj = A[None, :, :]; Dj = D[None, :, :]
        den = Di[..., 0] * Dj[..., 1] - Di[..., 1] * Dj[..., 0]
        AJ = Aj - Ai
        with np.errstate(divide='ignore', invalid='ignore'):
            t = (AJ[..., 0] * Dj[..., 1] - AJ[..., 1] * Dj[..., 0]) / den
            u = (AJ[..., 0] * Di[..., 1] - AJ[..., 1] * Di[..., 0]) / den
        ii = np.arange(i0, min(i0 + 256, n))[:, None]
        jj = np.arange(n)[None, :]
        adj = (jj <= ii + 1) | ((ii == 0) & (jj == n - 1))
        ok = (np.abs(den) > 1e-12) & (t > 1e-9) & (t < 1 - 1e-9) & (u > 1e-9) & (u < 1 - 1e-9) & ~adj
        for a, b in zip(*np.nonzero(ok)):
            i, j = a + i0, b
            res.append((i, j, A[i] + D[i] * t[a, b]))
    return res


def clean_ring(P, max_iter=60, max_area=600.0):
    """Remove small reversed (swallowtail) loops from a stroke outline ring.
    Large reversed loops are real counters (e.g. the inside of an O) and stay."""
    P = np.asarray(P, float)
    sign = np.sign(signed_area(P))
    skip = set()
    for _ in range(max_iter):
        hits = [h for h in _intersections(P) if (round(h[2][0], 3), round(h[2][1], 3)) not in skip]
        if not hits:
            break
        hits.sort(key=lambda h: min(h[1] - h[0], len(P) - (h[1] - h[0])))
        i, j, x = hits[0]
        if j - i <= len(P) - (j - i):
            loop = np.concatenate([[x], P[i + 1: j + 1]])
            if np.sign(signed_area(loop)) != sign and abs(signed_area(loop)) < max_area:
                P = np.concatenate([P[: i + 1], [x], P[j + 1:]])
                continue
        else:
            loop = np.concatenate([[x], P[j + 1:], P[: i + 1]])
            if np.sign(signed_area(loop)) != sign and abs(signed_area(loop)) < max_area:
                P = np.concatenate([[x], P[i + 1: j + 1]])
                continue
        skip.add((round(x[0], 3), round(x[1], 3)))
    return P


# --------------------------------------------------------------------------- letters
# Skeletons on a 100-unit cap height: y=0 cap line, y=100 baseline (y down).
# cf condenses widths (stroke weight is not scaled).

VENUS = dict(stem=44, bar=25, half=18)


def glyph_skeleton(ch, cf=1.0):
    W = lambda w: w * cf
    if ch == 'C':
        # stadium-ish C: arcs keep a curvature radius the nib can follow (no inner cusps)
        w = W(70); rx = w / 2; ry = min(51, 1.32 * rx)
        if ry >= 50.5:
            return [stroke(('A', w / 2, 50, rx, 51, -44, -316))], w
        yt, yb = -1 + ry, 101 - ry
        return [stroke(('A', w / 2, yt, rx, ry, -32, -180), ('L', (0, yt), (0, yb)),
                       ('A', w / 2, yb, rx, ry, 180, 32))], w
    if ch == 'U':
        w = W(64)
        return [stroke(('L', (0, 0), (0, 60)), ('A', w / 2, 60, w / 2, 41, 180, 0), ('L', (w, 60), (w, 0)))], w
    if ch == 'L':
        w = W(52)
        return [stroke(('L', (0, 0), (0, 100))), stroke(('L', (0, 100), (w, 100)))], w
    if ch == 'T':
        w = W(66)
        return [stroke(('L', (0, 1), (w, 0))), stroke(('L', (w / 2, 7), (w / 2, 100)))], w
    if ch == 'R':
        # stem drawn upward and straight on into the bowl (one stroke, no capped join at the top);
        # the bowl's return ends inside the stem, the leg starts inside the return
        w = W(60); bx = 0.52 * w; rx = w - bx; f = 7
        return [stroke(('L', (0, 100), (0, f)), ('A', f, f, f, f, 180, 270), ('L', (f, 0), (bx, 0)),
                       ('A', bx, 26, rx, 26, -90, 90), ('L', (bx, 52), (3, 52))),
                stroke(('L', (0.42 * w, 56), (w * 1.02, 100)))], w
    if ch == 'P':
        w = W(58); bx = 0.5 * w; rx = w - bx; f = 7
        return [stroke(('L', (0, 100), (0, f)), ('A', f, f, f, f, 180, 270), ('L', (f, 0), (bx, 0)),
                       ('A', bx, 28, rx, 28, -90, 90), ('L', (bx, 56), (3, 56)))], w
    if ch == 'A':
        w = W(74)
        # left leg overshoots the apex a touch, as a quick hand-drawn A does
        ox, oy = (w / 2) / math.hypot(w / 2, 100) * 4, -100 / math.hypot(w / 2, 100) * 4
        return [stroke(('L', (0, 100), (w / 2 + ox, oy + 1))), stroke(('L', (w / 2, 1), (w, 100))),
                stroke(('L', (0.21 * w, 66), (0.79 * w, 66)))], w
    if ch == 'S':
        w = W(60)
        pts = [(0.95, 15), (0.55, -1), (0.10, 12), (0.10, 36), (0.50, 50), (0.92, 66), (0.90, 90),
               (0.48, 101), (0.02, 86)]
        return [stroke(('S', [(x * w, y) for x, y in pts]))], w
    if ch == 'H':
        w = W(62)
        return [stroke(('L', (0, 0), (0, 100))), stroke(('L', (w, 0), (w, 100))),
                stroke(('L', (0, 49), (w, 49)))], w
    if ch == 'O':
        w = W(78); rx = w / 2; ry = min(51, 1.36 * rx)
        if ry >= 50.5:
            return [stroke(('A', w / 2, 50, w / 2, 51, -100, 266))], w
        yt, yb = -1 + ry, 101 - ry
        return [stroke(('A', w / 2, yt, rx, ry, -100, -180), ('L', (0, yt), (0, yb)),
                       ('A', w / 2, yb, rx, ry, 180, 0), ('L', (w, yb), (w, yt)),
                       ('A', w / 2, yt, rx, ry, 0, -95))], w
    if ch == 'V':
        # Venus O: the O of SHOCK with a short cross stub below the baseline (drawable in 3 strokes)
        ring, w = glyph_skeleton('O', cf)
        cx = w / 2
        L, bar, hw = VENUS['stem'], VENUS['bar'], VENUS['half']
        return ring + [stroke(('L', (cx, 97), (cx, 101 + L))),
                       stroke(('L', (cx - hw, 101 + bar), (cx + hw, 101 + bar)))], w
    if ch == 'K':
        # arm ends inside the stem; the leg springs from inside the arm (no capped nubs at the joint)
        w = W(62)
        a0, a1 = np.array([w * 0.95, 0.0]), np.array([3.0, 60.0])
        j = a0 + (a1 - a0) * 0.62
        return [stroke(('L', (0, 0), (0, 100))), stroke(('L', tuple(a0), tuple(a1))),
                stroke(('L', (j[0] + 2, j[1] + 3), (w, 100)))], w
    if ch == 'Y':
        w = W(70)
        return [stroke(('L', (0, 0), (w / 2, 54))), stroke(('L', (w, 0), (w / 2, 54))),
                stroke(('L', (w / 2, 54), (w / 2, 100)))], w
    raise KeyError(ch)


def hand_field(seed, amp=1.6, wl=110):
    """Smooth 2D displacement field: makes lines a touch un-ruled, consistently per letter."""
    rnd = random.Random(seed)
    waves = []
    for _ in range(3):
        k = 2 * math.pi / (wl * rnd.uniform(0.7, 1.4))
        ang = rnd.uniform(0, math.pi)
        waves.append((k * math.cos(ang), k * math.sin(ang), rnd.uniform(0, 6.28), rnd.uniform(0, 6.28)))

    def f(P):
        dx = np.zeros(len(P)); dy = np.zeros(len(P))
        for kx, ky, p1, p2 in waves:
            ph = P[:, 0] * kx + P[:, 1] * ky
            dx += np.sin(ph + p1); dy += np.sin(ph + p2)
        return P + np.stack([dx, dy], 1) * (amp / 3)
    return f


class Glyph:
    def __init__(self, ch, cap=100.0, nib=None, cf=1.0, seed=0, rot=None, dy=None, sc=None,
                 wobble=1.6, jit=1.0, press=(1.05, 0.95), wl=110, nib_jit=9.0):
        rnd = random.Random(seed * 131 + ord(ch))
        strokes, w = glyph_skeleton(ch, cf)
        k = cap / 100.0
        field = hand_field(rnd.randint(0, 1 << 30), amp=wobble, wl=wl)
        rot = rnd.uniform(-1.8, 1.8) * jit if rot is None else rot
        dy = rnd.uniform(-1.6, 1.6) * jit if dy is None else dy
        sc = 1 + rnd.uniform(-0.025, 0.025) * jit if sc is None else sc
        self.ch, self.w = ch, w * k
        self.skel = []
        for s in strokes:
            s = field(s)
            s = transform(s, rot=rot, scale=sc, ty=dy, origin=(w / 2, 100))
            self.skel.append(s * k)
        self.nib = nib
        self.polys = []
        self.stroke_nibs = []
        for s in self.skel:
            nb = nib.rotated(rnd.uniform(-nib_jit, nib_jit)) if nib_jit else nib
            pr = (press[0] * rnd.uniform(0.97, 1.04), press[1] * rnd.uniform(0.95, 1.03))
            self.stroke_nibs.append((nb, pr))
            self.polys.append(orient(clean_ring(sweep(s, nb, pr), max_area=3 * nib.a * nib.b)))
        allp = np.concatenate(self.polys)
        self.x1, self.y1 = allp.min(0)
        self.x2, self.y2 = allp.max(0)
        self.cap = cap

    def key_polys(self, grow):
        """Keyline: the same strokes swept with each nib grown by `grow` (a sign-writer's outline)."""
        out = []
        for s, (nb, pr) in zip(self.skel, self.stroke_nibs):
            kn = Nib(nb.a + grow, nb.b + grow, nb.angle, nb.n, len(nb.V))
            out.append(orient(clean_ring(sweep(s, kn, pr), max_area=3 * kn.a * kn.b)))
        return out

    def profile(self, rows):
        """min/max ink x for each row band (from dense outline points)."""
        allp = np.concatenate(self.polys)
        lo = np.full(len(rows) - 1, np.nan); hi = np.full(len(rows) - 1, np.nan)
        idx = np.digitize(allp[:, 1], rows) - 1
        for i in range(len(rows) - 1):
            m = idx == i
            if m.any():
                lo[i] = allp[m, 0].min(); hi[i] = allp[m, 0].max()
        return lo, hi


def pair_offset(A, B, target, minfrac=0.45, clampk=1.7):
    """x offset of B's origin relative to A's origin giving an even optical gap."""
    rows = np.linspace(-0.05 * A.cap, 1.05 * A.cap, 45)
    _, ahi = A.profile(rows)
    blo, _ = B.profile(rows)
    m = ~np.isnan(ahi) & ~np.isnan(blo)
    # rows where one glyph has no ink: use that glyph's overall extreme (open space counts)
    ahi_f = np.where(np.isnan(ahi), A.x2 - 0.0, ahi)
    blo_f = np.where(np.isnan(blo), B.x1 + 0.0, blo)
    use = ~np.isnan(ahi) | ~np.isnan(blo)

    def metric(dx):
        g = blo_f[use] + dx - ahi_f[use]
        return np.mean(np.minimum(g, target * clampk)), (blo[m] + dx - ahi[m]).min() if m.any() else 1e9

    lo, hi = -A.cap * 2, A.cap * 3
    for _ in range(60):
        mid = (lo + hi) / 2
        mean, mn = metric(mid)
        if mean < target or mn < target * minfrac:
            lo = mid
        else:
            hi = mid
    return hi


class Line:
    """A line of marker lettering laid out with optical spacing."""

    def __init__(self, text, cap, nib, cf=1.0, seed=1, track=1.0, word=0.5, jit=1.0, wobble=1.6,
                 kern=None, overrides=None, gkw=None):
        self.glyphs = []
        self.items = []  # (glyph, x)
        x = 0.0
        prev = None
        target = nib.b * 2 * track  # gap ~ one thin stroke width
        kern = kern or {}
        overrides = overrides or {}
        for i, ch in enumerate(text):
            if ch == ' ':
                x += cap * word
                prev = ('space', x)
                continue
            kw = dict(gkw or {}); kw.update(overrides.get(i, {}))
            g = Glyph(ch, cap, nib, cf, seed=seed * 101 + i, jit=jit, wobble=wobble, **kw)
            if prev is None:
                gx = -g.x1
            elif isinstance(prev, tuple):
                pg, px = self.items[-1]
                gx = px + pair_offset(pg, g, target) + cap * word
            else:
                pg, px = self.items[-1]
                gx = px + pair_offset(pg, g, target) + kern.get(pg.ch + ch, 0) * cap
            self.items.append((g, gx))
            prev = g
        self.cap = cap
        allp = np.concatenate([p + [gx, 0] for g, gx in self.items for p in g.polys])
        self.x1, self.y1 = allp.min(0)
        self.x2, self.y2 = allp.max(0)
        self.width = self.x2 - self.x1

    def polys(self, dx=0, dy=0, rot=0, origin=None, key=0):
        out = []
        o = origin if origin is not None else ((self.x1 + self.x2) / 2, self.cap)
        for g, gx in self.items:
            for p in (g.key_polys(key) if key else g.polys):
                q = p + [gx, 0]
                q = transform(q, rot=rot, origin=o) + [dx, dy]
                out.append(orient(q))
        return out
