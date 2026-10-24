"""Round 3: refine the 'breaking-lip 4' (B) family."""
import sys
import numpy as np
from PIL import Image
sys.path.insert(0, __file__.rsplit('/', 1)[0])
from brush import Canvas
from explore2 import keys, render as _r, RED, PAPER, OUT

S = {}
CROSS = ((955, 612), (720, 600), (420, 662), (112, 648))
# B1: bigger crest, thin return into stem
S['B1'] = dict(segs=[CROSS,
                     ((112, 648), (250, 440), (420, 170), (620, 100)),
                     ((620, 100), (760, 55), (880, 150), (840, 245)),
                     ((840, 245), (815, 300), (740, 290), (690, 300)),
                     ((690, 300), (655, 310), (645, 360), (645, 440)),
                     ((645, 440), (645, 600), (645, 780), (645, 935))],
               prof=keys((0, .08), (.13, .7), (.2, 1), (.5, 1), (.62, .8), (.68, .45), (.74, .55), (.82, 1), (.97, 1), (1, .85)))
# B3: concave wave face (steepening), crest pitching
S['B3'] = dict(segs=[CROSS,
                     ((112, 648), (330, 600), (500, 380), (580, 180)),
                     ((580, 180), (630, 70), (800, 40), (860, 150)),
                     ((860, 150), (900, 230), (820, 300), (730, 270)),
                     ((730, 270), (670, 255), (645, 330), (645, 440)),
                     ((645, 440), (645, 600), (645, 780), (645, 935))],
               prof=keys((0, .08), (.13, .7), (.2, 1), (.5, 1), (.62, .8), (.69, .4), (.75, .6), (.83, 1), (.97, 1), (1, .85)))
# B4: dramatic overhang, lip hangs low on the right, tube visible
S['B4'] = dict(segs=[CROSS,
                     ((112, 648), (250, 430), (430, 150), (650, 95)),
                     ((650, 95), (800, 60), (900, 170), (880, 290)),
                     ((880, 290), (872, 335), (840, 350), (815, 330)),
                     ((815, 330), (760, 280), (680, 250), (655, 360)),
                     ((655, 360), (645, 420), (645, 700), (645, 935))],
               prof=keys((0, .08), (.13, .7), (.2, 1), (.5, 1), (.6, .75), (.66, .35), (.71, .45), (.8, 1), (.97, 1), (1, .85)))
# B2: two strokes — wave (crossbar + face + crest + free lip tip) and a separate stem
S['B2'] = dict(segs=[CROSS,
                     ((112, 648), (250, 440), (430, 160), (640, 100)),
                     ((640, 100), (790, 60), (900, 170), (850, 260)),
                     ((850, 260), (820, 310), (760, 300), (745, 260))],
               prof=keys((0, .08), (.15, .7), (.24, 1), (.7, 1), (.86, .6), (1, .06)),
               extra=[([((648, 230), (648, 450), (648, 700), (648, 935))], keys((0, .25), (.15, 1), (.97, 1), (1, .85)))])

def render(spec, nib=0.5):
    return _r(spec, w=170, nib=nib, ang=-0.55)

tiles = [(k, render(v)) for k, v in S.items()]
W = sum(t[1].width for t in tiles); H = tiles[0][1].height
sheet = Image.new('RGB', (W, H + 140), PAPER)
x = 0
for k, im in tiles:
    sheet.paste(im, (x, 0))
    for j, s in enumerate((16, 32, 64)):
        sheet.paste(im.resize((s, s), Image.LANCZOS), (x + 20 + j * 90, H + 20))
    x += im.width
sheet.save(OUT + 'r3-explore.png')
print('ok')
