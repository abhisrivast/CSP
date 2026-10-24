import sys
sys.path.insert(0, __file__.rsplit('/', 1)[0])
from compose import *
W = '/Users/Abhi/Developer/CSP/brand/logo/concepts/04-fourth-wave/work/'
SERIF, GROT = 'DMSerifDisplay-400', 'SpaceGrotesk-700'


def fit_ls(font, size, s, target_w):
    """letter-spacing (em) so that the outlined word spans target_w."""
    a = text(font, size, s, 0, 0, 0)['bbox']['w']
    n = len(s) - 1
    return round((target_w - a) / (n * size), 4)


def L1(mode='justify', TX=1090, cap1=365, cap2=235, tag=''):
    s1 = round(cap1 / 660 * 1000)
    probe = text(SERIF, s1, 'Cultural Shock')
    t1 = text(SERIF, s1, 'Cultural Shock', TX - probe['bbox']['x1'], 545)
    s2 = round(cap2 / 700 * 1000)
    if mode == 'justify':
        ls = fit_ls(GROT, s2, 'PARTY', t1['bbox']['w'] - 8)
    else:
        ls = 0.32
    p2 = text(GROT, s2, 'PARTY', 0, 0, ls)
    t2 = text(GROT, s2, 'PARTY', TX - p2['bbox']['x1'] + 8, 985, ls)
    x_end = t1['bbox']['x2'] + 190
    loops = M.build_lockup(x_end, 584, 24)
    parts = [mpart(loops, RED), tpart(t1, INK), tpart(t2, RED)]
    open(W + f'L1{tag}.svg', 'w').write(svg(parts))


L1('justify', tag='-just')
L1('left', cap2=255, tag='-left')
print('ok')
