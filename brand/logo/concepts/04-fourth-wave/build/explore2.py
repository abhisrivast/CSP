"""Round 2: gestures that carry a real wave (curl / ring) inside the 4."""
import sys, math
import numpy as np
from PIL import Image
sys.path.insert(0, __file__.rsplit('/', 1)[0])
from brush import Canvas

OUT = '/Users/Abhi/Developer/CSP/brand/logo/concepts/04-fourth-wave/work/'
RED = (203, 57, 50); PAPER = (246, 238, 221)


def keys(*kv):
    """Pressure profile from (s, p) keyframes, smoothstep between keys."""
    kv = sorted(kv)
    def f(s):
        if s <= kv[0][0]: return kv[0][1]
        for (s0, p0), (s1, p1) in zip(kv, kv[1:]):
            if s <= s1:
                t = (s - s0) / (s1 - s0); t = t * t * (3 - 2 * t)
                return p0 + (p1 - p0) * t
        return kv[-1][1]
    return f


def circ(cx, cy, r, a0, a1):
    """Cubic approximation of a circular arc (degrees, screen coords, y down) split in <=90 pieces."""
    out = []
    n = max(1, int(math.ceil(abs(a1 - a0) / 90)))
    for i in range(n):
        t0 = math.radians(a0 + (a1 - a0) * i / n); t1 = math.radians(a0 + (a1 - a0) * (i + 1) / n)
        k = 4 / 3 * math.tan((t1 - t0) / 4)
        p0 = (cx + r * math.cos(t0), cy + r * math.sin(t0)); p3 = (cx + r * math.cos(t1), cy + r * math.sin(t1))
        p1 = (p0[0] - k * r * math.sin(t0), p0[1] + k * r * math.cos(t0))
        p2 = (p3[0] + k * r * math.sin(t1), p3[1] - k * r * math.cos(t1))
        out.append((p0, p1, p2, p3))
    return out

S = {}
# A1 single gesture: stem up -> crest over to the left -> ring -> bottom -> crossbar -> swash
S['A1 ring'] = dict(segs=[((650, 930), (650, 700), (650, 500), (650, 330)),
                          ((650, 330), (650, 180), (560, 110), (440, 110)),
                          ((440, 110), (260, 110), (130, 260), (130, 420)),
                          ((130, 420), (130, 560), (230, 650), (380, 650)),
                          ((380, 650), (560, 650), (760, 630), (950, 625))],
                    prof=keys((0, .85), (.05, 1), (.75, 1), (.88, .7), (1, .1)))
# A2 teardrop: sharp crest point top-right, convex swell on the left
S['A2 tear'] = dict(segs=[((650, 930), (650, 650), (650, 380), (650, 95)),
                          ((650, 95), (420, 150), (130, 300), (130, 480)),
                          ((130, 480), (130, 600), (230, 650), (380, 650)),
                          ((380, 650), (560, 650), (760, 630), (950, 625))],
                    prof=keys((0, .85), (.05, 1), (.75, 1), (.88, .7), (1, .1)))
# B lip: rising face, crest pitches right over the stem, thin pointed lip, stem drops
S['B lip'] = dict(segs=[((950, 615), (720, 605), (420, 660), (120, 645)),
                        ((120, 645), (260, 430), (420, 170), (620, 110)),
                        ((620, 110), (770, 70), (860, 170), (790, 250)),
                        ((790, 250), (740, 300), (660, 250), (650, 380)),
                        ((650, 380), (645, 560), (645, 760), (645, 930))],
                  prof=keys((0, .1), (.14, .75), (.22, 1), (.5, 1), (.6, .55), (.66, .45), (.74, .95), (.95, 1), (1, .9)))
# C hokusai: crossbar -> corner -> concave face -> curls back LEFT into a tapered lip; separate stem
S['C hokusai'] = dict(segs=[((950, 615), (720, 605), (420, 660), (110, 645)),
                            ((110, 645), (380, 600), (560, 420), (620, 200)),
                            ((620, 200), (660, 60), (480, 40), (430, 150)),
                            ((430, 150), (410, 200), (440, 240), (480, 230))],
                      prof=keys((0, .1), (.15, .75), (.25, 1), (.75, 1), (.9, .55), (1, .08)),
                      extra=[([((640, 180), (640, 420), (640, 700), (640, 930))], keys((0, .3), (.12, 1), (1, .95)))])
# E ring with a crest flick: stem overshoots above the ring into a tapered spray
S['E flick'] = dict(segs=[((650, 930), (650, 700), (650, 450), (650, 260)),
                          ((650, 260), (650, 150), (600, 100), (520, 100)),
                          ((520, 100), (300, 100), (130, 270), (130, 440)),
                          ((130, 440), (130, 570), (230, 650), (380, 650)),
                          ((380, 650), (560, 650), (760, 630), (950, 625))],
                    prof=keys((0, .85), (.05, 1), (.75, 1), (.88, .7), (1, .1)),
                    extra=[([((650, 330), (660, 220), (700, 120), (770, 60))], keys((0, 1), (.5, .7), (1, .05)))])


def render(spec, w=165, nib=0.62, ang=-0.55, scale=0.8):
    c = Canvas(0, 0, 1000, 1000, scale=scale, ss=2)
    c.stroke(spec['segs'], w, spec['prof'], nib_ratio=nib, nib_angle=ang, wobble=0.03)
    for segs, pf in spec.get('extra', []):
        c.stroke(segs, w, pf, nib_ratio=nib, nib_angle=ang, wobble=0.03, seed=5)
    g = c.gray()
    img = np.zeros(g.shape + (3,), np.float32)
    for k in range(3):
        img[..., k] = PAPER[k] * (1 - g) + RED[k] * g
    return Image.fromarray(img.astype(np.uint8))

if __name__ == "__main__":
    tiles = [(k, render(v)) for k, v in S.items()]
    W = sum(t[1].width for t in tiles); H = tiles[0][1].height
    sheet = Image.new('RGB', (W, H + 140), PAPER)
    x = 0
    for k, im in tiles:
        sheet.paste(im, (x, 0))
        for j, s in enumerate((16, 32, 64)):
            sheet.paste(im.resize((s, s), Image.LANCZOS), (x + 20 + j * 90, H + 20))
        x += im.width
    sheet.save(OUT + 'r2-explore.png')
    print('ok')
