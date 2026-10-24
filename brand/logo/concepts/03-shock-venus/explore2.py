"""Round 2: refine the zig-cross (bolt jog = Venus crossbar). Point-symmetric about the jog centre."""
import math
from pathlib import Path
from geom import *
from explore import bolt, mark_svg, OUT

def zig(R, W, a, theta, tip_ext=10, one_side=False):
    RO, RI = R + W / 2, R - W / 2
    dy = a / math.tan(math.radians(theta))
    y0 = R
    yc = y0 + dy
    y3 = yc + dy
    pts = [(0, y0), (-a, yc), (a, yc), (0, y3)]
    return [('d', ring_d(0, 0, RO, RI)), ('poly', bolt(pts, W, tip_ext=tip_ext, cut_r=R))]

V = {
 'a3-a44-t25': zig(85, 30, 44, 25),
 'a4-a50-t28': zig(85, 30, 50, 28),
 'a5-a40-t22': zig(85, 30, 40, 22),
 'a6-a46-t25-w34': zig(85, 34, 46, 25),
 'a7-a52-t32': zig(85, 30, 52, 32),
}
files = []
for k, v in V.items():
    p = OUT / f'{k}.svg'; p.write_text(mark_svg(v)); files.append(str(p))
print(','.join(files))
