"""Round 4: concave wave face + curl, single vs two strokes."""
import sys
from PIL import Image
sys.path.insert(0, __file__.rsplit('/', 1)[0])
from explore2 import keys, render as _r, PAPER, OUT

S = {}
CROSS = ((955, 612), (720, 600), (420, 662), (112, 648))
STEM = lambda top=150: [((646, top), (646, 400), (646, 700), (646, 935))]
STEMP = keys((0, .7), (.06, 1), (.93, 1), (1, .55))
# H1 concave face + free spiral curl; stem separate (starts inside crest ink)
S['H1'] = dict(segs=[CROSS,
                     ((112, 648), (330, 610), (500, 400), (575, 200)),
                     ((575, 200), (625, 75), (790, 25), (875, 120)),
                     ((875, 120), (935, 190), (900, 290), (820, 290)),
                     ((820, 290), (770, 290), (750, 245), (775, 215))],
               prof=keys((0, .08), (.14, .7), (.22, 1), (.66, 1), (.82, .75), (.93, .4), (1, .05)),
               extra=[(STEM(170), STEMP)])
# H3 straighter face, tighter curl, stem tucked under crest
S['H3'] = dict(segs=[CROSS,
                     ((112, 648), (270, 450), (430, 180), (620, 105)),
                     ((620, 105), (770, 50), (905, 150), (870, 255)),
                     ((870, 255), (845, 320), (770, 320), (760, 265)),
                     ((760, 265), (755, 235), (775, 220), (795, 225))],
               prof=keys((0, .08), (.14, .7), (.22, 1), (.68, 1), (.84, .7), (.94, .4), (1, .05)),
               extra=[(STEM(160), STEMP)])
# H2 single gesture: concave face, crest, lip pitched down, return hidden in the stem top
S['H2'] = dict(segs=[CROSS,
                     ((112, 648), (330, 610), (500, 400), (575, 200)),
                     ((575, 200), (625, 75), (790, 25), (875, 120)),
                     ((875, 120), (935, 190), (905, 300), (820, 300)),
                     ((820, 300), (740, 300), (700, 230), (660, 260)),
                     ((660, 260), (646, 280), (646, 330), (646, 420)),
                     ((646, 420), (646, 600), (646, 780), (646, 935))],
               prof=keys((0, .08), (.13, .7), (.2, 1), (.52, 1), (.62, .8), (.69, .38), (.74, .42), (.8, 1), (.97, 1), (1, .6)))
# H4: H1 but crossbar is a cleaner, flatter swash and curl bigger (barrel)
S['H4'] = dict(segs=[((960, 625), (760, 615), (430, 650), (112, 648)),
                     ((112, 648), (360, 630), (520, 420), (575, 220)),
                     ((575, 220), (615, 75), (800, 10), (895, 120)),
                     ((895, 120), (965, 205), (915, 330), (815, 325)),
                     ((815, 325), (745, 320), (730, 250), (770, 225))],
               prof=keys((0, .08), (.14, .7), (.22, 1), (.66, 1), (.82, .78), (.93, .42), (1, .05)),
               extra=[(STEM(190), STEMP)])

if __name__ == '__main__':
    tiles = [(k, _r(v, w=170, nib=0.5, ang=-0.55)) for k, v in S.items()]
    W = sum(t[1].width for t in tiles); H = tiles[0][1].height
    sheet = Image.new('RGB', (W, H + 140), PAPER)
    x = 0
    for k, im in tiles:
        sheet.paste(im, (x, 0))
        for j, s in enumerate((16, 32, 64)):
            sheet.paste(im.resize((s, s), Image.LANCZOS), (x + 20 + j * 90, H + 20))
        x += im.width
    sheet.save(OUT + 'r4-explore.png')
    print('ok')
