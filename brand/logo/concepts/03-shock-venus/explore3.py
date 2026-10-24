"""Round 3: heavier monoline for street/stencil punch + 16px robustness."""
import math
from pathlib import Path
from geom import *
from explore import bolt, OUT

def mark_svg(paths, RO, pad=0.07):
    xs, ys = [-RO, RO], [-RO]
    for kind, data in paths:
        if kind == 'poly':
            xs += [p[0] for p in data]; ys += [p[1] for p in data]
    x0, x1, y0, y1 = min(xs), max(xs), min(ys), max(ys)
    side = max(x1 - x0, y1 - y0); p = side * pad
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    vb = (cx - side / 2 - p, cy - side / 2 - p, side + 2 * p, side + 2 * p)
    body = '\n'.join(f'<path fill="{PAL["ink"]}" d="{d if k == "d" else poly_d(d)}"/>' for k, d in paths)
    return svg(vb, body)

def zig(R, W, a, theta, tip_ext=10, x0=0):
    RO, RI = R + W / 2, R - W / 2
    dy = a / math.tan(math.radians(theta))
    yc = R + dy
    pts = [(x0, R), (-a, yc), (a, yc), (-x0, yc + dy)]
    return [('d', ring_d(0, 0, RO, RI)), ('poly', bolt(pts, W, tip_ext=tip_ext, cut_r=R))], RO

V = {
 'b1-w40-a52-t32': zig(80, 40, 52, 32),
 'b2-w38-a56-t34': zig(81, 38, 56, 34),
 'b3-w40-a50-t28': zig(80, 40, 50, 28, tip_ext=16),
 'b4-w40-a54-t32-x8': zig(80, 40, 54, 32, x0=8),
 'b5-w36-a60-t36': zig(82, 36, 60, 36),
}
files = []
for k, (v, RO) in V.items():
    p = OUT / f'{k}.svg'; p.write_text(mark_svg(v, RO)); files.append(str(p))
print(','.join(files))
