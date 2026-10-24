"""Round 1 exploration: several ways to fuse the Venus sign with a bolt. Writes explore/*.svg."""
import math
from pathlib import Path
from geom import *

OUT = Path(__file__).parent / 'explore'
OUT.mkdir(exist_ok=True)
INK, RED = PAL['ink'], PAL['red']

R, W = 85, 30          # ring centreline radius, stroke
RO, RI = R + W / 2, R - W / 2


def bolt(pts, w, tip_ext=0.0, cut_r=R):
    """Monoline zigzag through pts; top end cut on the ring centreline, last segment tapered to a point."""
    left, right = offset_polyline(pts, w)
    d0 = norm(sub(pts[1], pts[0]))
    cl = line_circle(left[0], d0, cut_r, 'max')
    cr = line_circle(right[0], d0, cut_r, 'max')
    dl = norm(sub(pts[-1], pts[-2]))
    tip = add(pts[-1], mul(dl, tip_ext))
    poly = [cl] + left[1:-1] + [tip] + right[1:-1][::-1] + [cr]
    return cw(poly)


def mark_svg(paths, pad=0.07):
    xs, ys = [], []
    for kind, data in paths:
        if kind == 'poly':
            xs += [p[0] for p in data]; ys += [p[1] for p in data]
    xs += [-RO, RO]; ys += [-RO]
    x0, x1, y0, y1 = min(xs), max(xs), min(ys), max(ys)
    side = max(x1 - x0, y1 - y0)
    p = side * pad
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    vb = (cx - side / 2 - p, cy - side / 2 - p, side + 2 * p, side + 2 * p)
    body = []
    for kind, data in paths:
        body.append(f'<path fill="{INK}" d="{data if kind == "d" else poly_d(data)}"/>')
    return svg(vb, '\n'.join(body))


variants = {}

# A — bolt replaces the whole cross: its horizontal jog IS the crossbar (point-symmetric zigzag)
a, yc = 58, 182
variants['A-zigcross'] = [('d', ring_d(0, 0, RO, RI)),
                          ('poly', bolt([(14, R), (-a, yc), (a, yc), (-14, 268)], W, tip_ext=14))]

# A2 — steeper diagonals, narrower jog
a, yc = 44, 196
variants['A2-steep'] = [('d', ring_d(0, 0, RO, RI)),
                        ('poly', bolt([(12, R), (-a, yc), (a, yc), (-12, 300)], W, tip_ext=12))]

# B — vertical stem + true crossbar, the tail below the bar kinks into a strike
stem = bolt([(0, R), (0, 205), (34, 232), (-6, 300)], W, tip_ext=10)
bar = [(-62, 170 - W / 2), (62, 170 - W / 2), (62, 170 + W / 2), (-62, 170 + W / 2)]
variants['B-tail'] = [('d', ring_d(0, 0, RO, RI)), ('poly', stem), ('poly', bar)]

# C — ring broken open at the bottom; the strike leaves from the right lip (power + rupture)
gap = 34  # degrees
ring_open = arc_d(0, 0, R, 90 + gap / 2, 90 - gap / 2 + 360, W)
sx = R * math.cos(math.radians(90 - gap / 2))
sy = R * math.sin(math.radians(90 - gap / 2))
a, yc = 56, 186
variants['C-open'] = [('d', ring_open),
                      ('poly', bolt([(sx - 4, sy - 6), (-a, yc), (a, yc), (-14, 272)], W, tip_ext=14))]

# D — ring cracked: small offset break at upper right + zig cross below
ring_crack = arc_d(0, 0, R, -38, -52 + 360, W)
a, yc = 58, 182
variants['D-crack'] = [('d', ring_crack),
                       ('poly', bolt([(14, R), (-a, yc), (a, yc), (-14, 268)], W, tip_ext=14))]

files = []
for name, paths in variants.items():
    p = OUT / f'{name}.svg'
    p.write_text(mark_svg(paths))
    files.append(str(p))
print(','.join(files))
