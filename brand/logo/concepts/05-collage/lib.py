"""Geometry helpers for the 05-collage concept.

Outlined type comes from brand/tools/textpath.mjs (real glyph outlines + kerning);
everything here is plain affine maths on path data plus seeded "scissor-cut" polygons.
"""
import json, math, os, random, re, subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
TOOLS = '/Users/Abhi/Developer/CSP/brand/tools'
CACHE = os.path.join(HERE, 'work', 'glyph-cache.json')

PAL = {
    'paper': '#F6EEDD', 'ink': '#221F1D', 'red': '#CB3932', 'crimson': '#A9233A',
    'plum': '#602048', 'green': '#36B024', 'blue': '#1F92B2', 'marigold': '#F1B362',
    'card': '#B49073', 'card2': '#966C52',
}

# --------------------------------------------------------------------------- glyphs
_cache = None


def _load():
    global _cache
    if _cache is None:
        _cache = json.load(open(CACHE)) if os.path.exists(CACHE) else {}
    return _cache


def glyphs(font, text, ls=0.0, size=100):
    c = _load()
    key = f'{font}|{size}|{ls}|{text}'
    if key not in c:
        out = subprocess.run(['node', f'{TOOLS}/textpath.mjs', font, str(size), text, '--ls', str(ls)],
                             capture_output=True, text=True, check=True).stdout
        c[key] = json.loads(out)
        os.makedirs(os.path.dirname(CACHE), exist_ok=True)
        json.dump(c, open(CACHE, 'w'))
    return c[key]


TOK = re.compile(r'[MLQCZ]|-?\d*\.?\d+')


def parse(d):
    """-> list of contours; contour = list of (cmd, [(x,y),...])"""
    toks = TOK.findall(d)
    i, cur, out = 0, None, []
    n = {'M': 1, 'L': 1, 'Q': 2, 'C': 3, 'Z': 0}
    while i < len(toks):
        t = toks[i]; i += 1
        if t == 'Z':
            if cur:
                cur.append(('Z', [])); out.append(cur); cur = None
            continue
        k = n[t]
        pts = []
        for _ in range(k):
            pts.append((float(toks[i]), float(toks[i + 1]))); i += 2
        if t == 'M':
            if cur:
                out.append(cur)
            cur = [('M', pts)]
        else:
            cur.append((t, pts))
    if cur:
        out.append(cur)
    return out


def bbox_contours(cs):
    xs, ys = [], []
    for c in cs:
        for _, pts in c:
            for x, y in pts:
                xs.append(x); ys.append(y)
    return min(xs), min(ys), max(xs), max(ys)


def mapc(cs, fn):
    return [[(cmd, [fn(x, y) for x, y in pts]) for cmd, pts in c] for c in cs]


def fmt(v):
    s = f'{v:.2f}'.rstrip('0').rstrip('.')
    return '0' if s in ('-0', '') else s


def to_d(cs):
    parts = []
    for c in cs:
        for cmd, pts in c:
            parts.append(cmd + ' '.join(f'{fmt(x)} {fmt(y)}' for x, y in pts))
    return ''.join(parts)


def contour_area(c):
    """signed area from on-curve points (good enough for orientation)."""
    pts = [p[-1] for cmd, p in c if p]
    a = 0
    for i in range(len(pts)):
        x1, y1 = pts[i]; x2, y2 = pts[(i + 1) % len(pts)]
        a += x1 * y2 - x2 * y1
    return a / 2


def reverse_contour(c):
    """reverse direction of a contour made of M/L/Q/C/Z."""
    start = c[0][1][0]
    segs = []  # (cmd, from, ctrl..., to)
    prev = start
    for cmd, pts in c[1:]:
        if cmd == 'Z':
            continue
        segs.append((cmd, prev, pts[:-1], pts[-1]))
        prev = pts[-1]
    if prev != start:
        segs.append(('L', prev, [], start))
    out = [('M', [start])]
    for cmd, frm, ctrl, to in reversed(segs):
        out.append((cmd, list(reversed(ctrl)) + [frm]))
    out.append(('Z', []))
    return out


def orient(cs, sign):
    """Make outer contours (largest |area| sign group) have orientation `sign`;
    flips every contour if the outer ones are the wrong way (keeps counters opposite)."""
    if not cs:
        return cs
    big = max(cs, key=lambda c: abs(contour_area(c)))
    if (contour_area(big) > 0) != (sign > 0):
        return [reverse_contour(c) for c in cs]
    return cs


# --------------------------------------------------------------------------- transforms
def rot(x, y, a, cx=0, cy=0):
    r = math.radians(a)
    dx, dy = x - cx, y - cy
    return cx + dx * math.cos(r) - dy * math.sin(r), cy + dx * math.sin(r) + dy * math.cos(r)


def place(cs, s=1.0, tx=0, ty=0, a=0, sx=None):
    """scale (s, optional separate sx), rotate a° about origin, then translate."""
    sx = s if sx is None else sx

    def f(x, y):
        x, y = x * sx, y * s
        x, y = rot(x, y, a)
        return x + tx, y + ty
    return mapc(cs, f)


def word(font, text, cap, ls=0.0, sx=1.0):
    """Outlined word centred on origin (by bbox), scaled so bbox height == cap."""
    g = glyphs(font, text, ls)
    cs = parse(g['d'])
    x1, y1, x2, y2 = bbox_contours(cs)
    s = cap / (y2 - y1)
    cx, cy = (x1 + x2) / 2, (y1 + y2) / 2
    cs = mapc(cs, lambda x, y: ((x - cx) * s * sx, (y - cy) * s))
    return cs, (x2 - x1) * s * sx, cap


# --------------------------------------------------------------------------- paper
def poly_d(pts):
    return 'M' + 'L'.join(f'{fmt(x)} {fmt(y)}' for x, y in pts) + 'Z'


def poly_contour(pts):
    return [('M', [pts[0]])] + [('L', [p]) for p in pts[1:]] + [('Z', [])]


def _edge(p0, p1, rng, n, amp, kind):
    """points strictly between p0 and p1 (exclusive of p0, inclusive of p1)."""
    (x0, y0), (x1, y1) = p0, p1
    L = math.hypot(x1 - x0, y1 - y0)
    nx, ny = -(y1 - y0) / L, (x1 - x0) / L
    pts = []
    if kind == 'tear':
        steps = max(3, int(L / n))
        for i in range(1, steps):
            t = i / steps + rng.uniform(-0.3, 0.3) / steps
            o = rng.uniform(-amp, amp)
            pts.append((x0 + (x1 - x0) * t + nx * o, y0 + (y1 - y0) * t + ny * o))
    else:  # scissor: a few long straight cuts with tiny kinks
        ts = sorted(rng.uniform(0.18, 0.82) for _ in range(n))
        for t in ts:
            o = rng.uniform(-amp, amp)
            pts.append((x0 + (x1 - x0) * t + nx * o, y0 + (y1 - y0) * t + ny * o))
    pts.append(p1)
    return pts


def strip(w, h, seed, cut=0.012, slant=(0.0, 0.0), kinks=(2, 2, 1, 1),
          edges=('cut', 'cut', 'cut', 'cut'), tear=0.03, corner=0.01):
    """Scissor-cut paper strip centred on origin.
    slant: horizontal offset (fraction of h) of the top corners vs bottom at left/right ends,
    i.e. angled scissor cuts at the ends. edges: top, right, bottom, left ('cut' or 'tear')."""
    rng = random.Random(seed)
    hw, hh = w / 2, h / 2
    j = lambda: rng.uniform(-corner, corner) * h
    sl, sr = slant
    tl = (-hw + sl * h + j(), -hh + j())
    tr = (hw + sr * h + j(), -hh + j())
    br = (hw - sr * h + j(), hh + j())
    bl = (-hw - sl * h + j(), hh + j())
    corners = [tl, tr, br, bl]
    pts = [tl]
    for i in range(4):
        p0, p1 = corners[i], corners[(i + 1) % 4]
        kind = edges[i]
        amp = (tear if kind == 'tear' else cut) * h
        step = h * 0.06
        pts += _edge(p0, p1, rng, step if kind == 'tear' else kinks[i], amp, kind)
    return pts[:-1]


def xpts(pts, tx=0, ty=0, a=0):
    return [(lambda q: (q[0] + tx, q[1] + ty))(rot(x, y, a)) for x, y in pts]


# --------------------------------------------------------------------------- convex clipping (for knock-out gaps)
def _clip_half(poly, a, b, keep_left=True):
    """Sutherland–Hodgman against the line a->b. keep_left: keep points with cross>=0."""
    def side(p):
        c = (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0])
        return c if keep_left else -c

    def inter(p, q):
        sp, sq = side(p), side(q)
        t = sp / (sp - sq)
        return (p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t)
    out = []
    for i in range(len(poly)):
        p, q = poly[i], poly[(i + 1) % len(poly)]
        ip, iq = side(p) >= 0, side(q) >= 0
        if ip and iq:
            out.append(q)
        elif ip and not iq:
            out.append(inter(p, q))
        elif not ip and iq:
            out.append(inter(p, q)); out.append(q)
    return out


def signed_area(pts):
    return sum(pts[i][0] * pts[(i + 1) % len(pts)][1] - pts[(i + 1) % len(pts)][0] * pts[i][1]
               for i in range(len(pts))) / 2


def hull(pts):
    pts = sorted(set(pts))
    if len(pts) <= 2:
        return pts

    def cr(o, a, b):
        return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])
    lo, up = [], []
    for p in pts:
        while len(lo) >= 2 and cr(lo[-2], lo[-1], p) <= 0:
            lo.pop()
        lo.append(p)
    for p in reversed(pts):
        while len(up) >= 2 and cr(up[-2], up[-1], p) <= 0:
            up.pop()
        up.append(p)
    return lo[:-1] + up[:-1]


def offset_convex(pts, d):
    """outward offset of a convex polygon (miter)."""
    if signed_area(pts) < 0:
        pts = pts[::-1]
    n = len(pts)
    lines = []
    for i in range(n):
        a, b = pts[i], pts[(i + 1) % n]
        L = math.hypot(b[0] - a[0], b[1] - a[1])
        nx, ny = (b[1] - a[1]) / L, -(b[0] - a[0]) / L  # outward for CCW in y-down? handled by test below
        lines.append((a, b, nx, ny))
    # pick normal direction that points away from centroid
    cx = sum(p[0] for p in pts) / n; cy = sum(p[1] for p in pts) / n
    out = []
    shifted = []
    for a, b, nx, ny in lines:
        mx, my = (a[0] + b[0]) / 2, (a[1] + b[1]) / 2
        if (mx - cx) * nx + (my - cy) * ny < 0:
            nx, ny = -nx, -ny
        shifted.append(((a[0] + nx * d, a[1] + ny * d), (b[0] + nx * d, b[1] + ny * d)))
    for i in range(n):
        (p1, p2), (p3, p4) = shifted[i - 1], shifted[i]
        x1, y1 = p1; x2, y2 = p2; x3, y3 = p3; x4, y4 = p4
        den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)
        if abs(den) < 1e-9:
            out.append(p3); continue
        t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den
        out.append((x1 + t * (x2 - x1), y1 + t * (y2 - y1)))
    return out


def subtract_convex(subject, cutter):
    """subject − convex cutter, as a list of disjoint polygons (same orientation)."""
    c = cutter if signed_area(cutter) > 0 else cutter[::-1]
    pieces, rest = [], subject[:]
    n = len(c)
    for i in range(n):
        a, b = c[i], c[(i + 1) % n]
        outside = _clip_half(rest, a, b, keep_left=False)
        if len(outside) >= 3 and abs(signed_area(outside)) > 1e-3:
            pieces.append(outside)
        rest = _clip_half(rest, a, b, keep_left=True)
        if len(rest) < 3:
            break
    s = 1 if signed_area(subject) > 0 else -1
    return [p if (signed_area(p) > 0) == (s > 0) else p[::-1] for p in pieces]


def subtract_many(subject_polys, cutter):
    out = []
    for p in subject_polys:
        out += subtract_convex(p, cutter)
    return out
