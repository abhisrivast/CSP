import sys
sys.path.insert(0, __file__.rsplit('/', 1)[0])
import build_all as B
from compose import text, svg, tpart, mpart, INK, RED
P = B.P
s1 = B.sized(P['cap1'], B.SERIF_CAP)
a = B.place(B.SERIF, s1, 'Cultural', P['TX'], baseline=P['base1'])
sp = text(B.SERIF, s1, 'Cultural ', 0, 0)['advance'] - text(B.SERIF, s1, 'Cultural', 0, 0)['advance']
b = B.place('DMSerifDisplay-400Italic', s1, 'Shock', a['bbox']['x2'] + sp * 1.05, baseline=P['base1'])
t2 = B.place(B.GROT, B.sized(P['cap2'], B.GROT_CAP), 'PARTY', P['TX'] + 8, baseline=P['base2'], ls=P['ls2'])
loops = B.M.build_lockup(round(b['bbox']['x2'] + P['swash_over']), P['swash_y'], P['swash_sag'])
open('/Users/Abhi/Developer/CSP/brand/logo/concepts/04-fourth-wave/work/p-italic.svg', 'w').write(
    svg([mpart(loops, RED), tpart(a, INK), tpart(b, INK), tpart(t2, RED)]))
