"""Geometry helpers for the Shock Venus mark (03-shock-venus).

Everything is built as filled outlines (no strokes) so the master SVGs are pure flat vector.
Coordinates: SVG space (y grows downward). Ring centre at (0, 0).
"""
import json
import math
import subprocess
from pathlib import Path

TOOLS = Path('/Users/Abhi/Developer/CSP/brand/tools')

PAL = {
    'paper': '#F6EEDD', 'ink': '#221F1D', 'red': '#CB3932', 'crimson': '#A9233A',
    'plum': '#602048', 'green': '#36B024', 'blue': '#1F92B2', 'marigold': '#F1B362',
    'card': '#B49073', 'card2': '#966C52',
}


def f(n):
    """Compact number formatting for path data."""
    s = f'{n:.2f}'.rstrip('0').rstrip('.')
    return '0' if s in ('-0', '') else s


def sub(a, b):
    return (a[0] - b[0], a[1] - b[1])


def add(a, b):
    return (a[0] + b[0], a[1] + b[1])


def mul(a, k):
    return (a[0] * k, a[1] * k)


def norm(a):
    l = math.hypot(*a)
    return (a[0] / l, a[1] / l)


def perp(a):
    # left normal in SVG space (rotate +90 on screen = (−y, x) flips due to y-down; keep consistent)
    return (-a[1], a[0])


def line_intersect(p, r, q, s):
    """Intersect p + t r with q + u s."""
    cross = r[0] * s[1] - r[1] * s[0]
    if abs(cross) < 1e-12:
        raise ValueError('parallel')
    qp = sub(q, p)
    t = (qp[0] * s[1] - qp[1] * s[0]) / cross
    return add(p, mul(r, t))


def line_circle(p, r, radius, pick='min'):
    """Intersect ray p + t r with circle |x| = radius centred at origin; return point for min/max t."""
    a = r[0] ** 2 + r[1] ** 2
    b = 2 * (p[0] * r[0] + p[1] * r[1])
    c = p[0] ** 2 + p[1] ** 2 - radius ** 2
    disc = b * b - 4 * a * c
    if disc < 0:
        raise ValueError('no intersection')
    ts = [(-b - math.sqrt(disc)) / (2 * a), (-b + math.sqrt(disc)) / (2 * a)]
    t = min(ts) if pick == 'min' else max(ts)
    return add(p, mul(r, t))


def offset_polyline(pts, w):
    """Return (left, right) offset point lists of a polyline with mitre joins.
    w is a single stroke width or a list with one width per segment (optical compensation)."""
    segs = [(pts[i], norm(sub(pts[i + 1], pts[i]))) for i in range(len(pts) - 1)]
    ws = list(w) if isinstance(w, (list, tuple)) else [w] * len(segs)
    left, right = [], []
    for side, out in ((1, left), (-1, right)):
        for i, (p, d) in enumerate(segs):
            n = mul(perp(d), side * ws[i] / 2)
            if i == 0:
                out.append(add(p, n))
            else:
                pp, pd = segs[i - 1]
                pn = mul(perp(pd), side * ws[i - 1] / 2)
                out.append(line_intersect(add(pp, pn), pd, add(p, n), d))
        p, d = segs[-1]
        out.append(add(pts[-1], mul(perp(d), side * ws[-1] / 2)))
    return left, right


def poly_d(pts):
    return 'M' + ' L'.join(f'{f(x)} {f(y)}' for x, y in pts) + ' Z'


def signed_area(pts):
    return 0.5 * sum(pts[i][0] * pts[(i + 1) % len(pts)][1] - pts[(i + 1) % len(pts)][0] * pts[i][1]
                     for i in range(len(pts)))


def cw(pts):
    """Clockwise on screen (positive signed area in y-down space)."""
    return pts if signed_area(pts) > 0 else pts[::-1]


def ring_d(cx, cy, ro, ri):
    """Annulus as one path: outer clockwise, inner counter-clockwise (nonzero-safe)."""
    return (f'M{f(cx)} {f(cy - ro)} A{f(ro)} {f(ro)} 0 1 1 {f(cx)} {f(cy + ro)} '
            f'A{f(ro)} {f(ro)} 0 1 1 {f(cx)} {f(cy - ro)} Z '
            f'M{f(cx)} {f(cy - ri)} A{f(ri)} {f(ri)} 0 1 0 {f(cx)} {f(cy + ri)} '
            f'A{f(ri)} {f(ri)} 0 1 0 {f(cx)} {f(cy - ri)} Z')


def arc_d(cx, cy, r, a0, a1, w, cap='butt'):
    """Open ring segment from angle a0 to a1 (degrees, clockwise on screen, 0 = +x) as filled outline."""
    ro, ri = r + w / 2, r - w / 2
    def pt(rad, a):
        return (cx + rad * math.cos(math.radians(a)), cy + rad * math.sin(math.radians(a)))
    sweep = (a1 - a0) % 360
    large = 1 if sweep > 180 else 0
    p0, p1 = pt(ro, a0), pt(ro, a1)
    q1, q0 = pt(ri, a1), pt(ri, a0)
    return (f'M{f(p0[0])} {f(p0[1])} A{f(ro)} {f(ro)} 0 {large} 1 {f(p1[0])} {f(p1[1])} '
            f'L{f(q1[0])} {f(q1[1])} A{f(ri)} {f(ri)} 0 {large} 0 {f(q0[0])} {f(q0[1])} Z')


def text(font, size, s, x=0, y=0, ls=0):
    out = subprocess.run(['node', str(TOOLS / 'textpath.mjs'), font, str(size), s,
                          '--x', str(x), '--y', str(y), '--ls', str(ls)],
                         capture_output=True, text=True, check=True)
    return json.loads(out.stdout)


def svg(vb, body, extra=''):
    vb = ' '.join(f(n) for n in vb)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}"{extra}>\n{body}\n</svg>\n'
