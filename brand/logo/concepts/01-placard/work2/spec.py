import sys; sys.path.insert(0, '..')
from pathlib import Path
from marker import Line, Nib, orient
from build import svg, INK, RED, bbox
import numpy as np
nib = Nib(11.4, 7.0, -32, 3.6)
out = []
y = 0
lines = [('CULTURAL', INK, 0.86, 11), ('SHVCK', RED, 0.9, 5), ('SHOCK', RED, 0.9, 5), ('PARTY', INK, 0.88, 23)]
layers = []
for t, col, cf, seed in lines:
    kern = {'VC': 0.12, 'OC': 0.12, 'RT': -0.035}
    L = Line(t, 100, nib, cf=cf, seed=seed, wobble=1.8, track=1.05, kern=kern)
    ps = L.polys(dx=-L.x1, dy=y)
    layers.append((col, ps))
    y += 180
Path('spec.svg').write_text(svg(layers, pad_frac=0.05))
