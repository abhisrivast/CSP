import sys
from build import mark, write, INK, EXP
files = []
for name, m in [('f0', dict(rf=0)), ('f10', dict(rf=10)), ('f18', dict(rf=18)), ('f14-x4', dict(rf=14, x0=4)), ('f14-x11', dict(rf=14, x0=11))]:
    d, bb = mark(m)
    p = EXP / f'mk-{name}.svg'
    write(p, [(d, INK)], bb, square=True)
    files.append(str(p))
print(','.join(files))
