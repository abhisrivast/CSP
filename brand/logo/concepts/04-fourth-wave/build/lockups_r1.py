import sys
sys.path.insert(0, __file__.rsplit('/', 1)[0])
from compose import *
W = '/Users/Abhi/Developer/CSP/brand/logo/concepts/04-fourth-wave/work/'

def L1(serif='DMSerifDisplay-400', grot='SpaceGrotesk-700', party_fill=RED, tag=''):
    TX = 1030
    cap = {'DMSerifDisplay-400': 660, 'Fraunces-700': 700}[serif]
    s1 = 330 / cap * 1000
    probe = text(serif, round(s1), 'Cultural Shock')
    t1 = text(serif, round(s1), 'Cultural Shock', TX - probe['bbox']['x1'], 540)
    s2 = 205 / 700 * 1000
    p2 = text(grot, round(s2), 'PARTY', 0, 0, 0.34)
    t2 = text(grot, round(s2), 'PARTY', TX - p2['bbox']['x1'] + 6, 978, 0.34)
    x_end = t1['bbox']['x2'] + 170
    loops = M.build_lockup(x_end, 588, 26)
    parts = [mpart(loops, RED), tpart(t1, INK), tpart(t2, party_fill)]
    open(W + f'L1{tag}.svg', 'w').write(svg(parts))

def L2(serif='DMSerifDisplay-400', grot='SpaceGrotesk-700', tag=''):
    TX = 1040
    cap = {'DMSerifDisplay-400': 660, 'Fraunces-700': 700}[serif]
    s1 = 440 / cap * 1000
    probe = text(serif, round(s1), 'Cultural Shock')
    t1 = text(serif, round(s1), 'Cultural Shock', TX - probe['bbox']['x1'], 545)
    s2 = 300 / 700 * 1000
    p2 = text(grot, round(s2), 'PARTY', 0, 0, 0.2)
    t2 = text(grot, round(s2), 'PARTY', t1['bbox']['x2'] + 190 - p2['bbox']['x1'], 545, 0.2)
    x_end = t2['bbox']['x2'] + 160
    loops = M.build_lockup(x_end, 590, 26)
    parts = [mpart(loops, RED), tpart(t1, INK), tpart(t2, RED)]
    open(W + f'L2{tag}.svg', 'w').write(svg(parts))

L1(tag='-dm')
L1(serif='Fraunces-700', tag='-fr')
L2(tag='-dm')
print('ok')
