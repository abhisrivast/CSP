"""Round 1: quick raster sketches of candidate Fourth-Wave gestures (no tracing)."""
import sys, math
import numpy as np
from PIL import Image
sys.path.insert(0, __file__.rsplit('/', 1)[0])
from brush import Canvas

OUT = '/Users/Abhi/Developer/CSP/brand/logo/concepts/04-fourth-wave/work/'
RED = (203, 57, 50); PAPER = (246, 238, 221); INK = (34, 31, 29)


def smoothstep(a, b, x):
    t = min(1, max(0, (x - a) / (b - a)))
    return t * t * (3 - 2 * t)


def prof_tail(s, start=0.06, tail=0.22, end_w=0.12):
    # crossbar tail at s=0 (thin flick-in), body, stem end at s=1 (blunt)
    return end_w + (1 - end_w) * smoothstep(0, tail, s) if s < tail else 1 - 0.12 * smoothstep(0.9, 1, s)


V = {}
# V1: plain brush 4 — straight diagonal, sharp apex, crossbar flick
V['v1'] = [((940, 610), (720, 600), (420, 660), (130, 645)),
           ((130, 645), (300, 470), (470, 290), (640, 105)),
           ((640, 105), (640, 380), (640, 650), (640, 930))]
# V2: arch crest — diagonal convex, rounding into the stem (wave back + crest)
V['v2'] = [((940, 610), (720, 600), (420, 660), (120, 645)),
           ((120, 645), (220, 420), (420, 120), (580, 110)),
           ((580, 110), (660, 105), (670, 170), (665, 260)),
           ((665, 260), (662, 480), (660, 700), (660, 930))]
# V3: breaking lip — crest overhangs right of stem then hooks back into the stem
V['v3'] = [((940, 610), (720, 600), (420, 660), (120, 645)),
           ((120, 645), (260, 430), (430, 150), (640, 110)),
           ((640, 110), (780, 85), (820, 200), (720, 230)),
           ((720, 230), (660, 245), (640, 300), (640, 400)),
           ((640, 400), (640, 600), (640, 760), (640, 930))]
# V4: concave wave face — diagonal leaves the corner low and sweeps up steeply (tube)
V['v4'] = [((940, 610), (720, 600), (420, 660), (110, 645)),
           ((110, 645), (360, 600), (560, 420), (640, 105)),
           ((640, 105), (640, 380), (640, 650), (640, 930))]
# V5: wavy horizon — crossbar is a full ~ wave, diagonal straight
V['v5'] = [((950, 600), (850, 560), (780, 690), (640, 650)),
           ((640, 650), (500, 610), (380, 560), (250, 640)),
           ((250, 640), (200, 670), (160, 665), (120, 645)),
           ((120, 645), (300, 470), (470, 290), (640, 105)),
           ((640, 105), (640, 380), (640, 650), (640, 930))]


def render(segs, w=170, nib=0.62, ang=-0.55, wobble=0.03, color=RED, scale=0.8):
    c = Canvas(0, 0, 1000, 1000, scale=scale, ss=2)
    c.stroke(segs, w, prof_tail, nib_ratio=nib, nib_angle=ang, wobble=wobble)
    g = c.gray()
    h, wd = g.shape
    img = np.zeros((h, wd, 3), np.float32)
    for k in range(3):
        img[..., k] = PAPER[k] * (1 - g) + color[k] * g
    return Image.fromarray(img.astype(np.uint8))


tiles = []
for k, segs in V.items():
    im = render(segs)
    tiles.append((k, im))
W = sum(t[1].width for t in tiles); H = tiles[0][1].height
sheet = Image.new('RGB', (W, H + 140), PAPER)
x = 0
for k, im in tiles:
    sheet.paste(im, (x, 0))
    for j, s in enumerate((16, 32, 64)):
        sm = im.resize((s, s), Image.LANCZOS)
        sheet.paste(sm, (x + 20 + j * 90, H + 20))
    x += im.width
sheet.save(OUT + 'r1-explore.png')
print('ok', sheet.size)
