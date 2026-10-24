"""The Fourth Wave mark: a brush '4' whose rising stroke breaks into a wave crest.

Stroke 1 (the wave): swash tail on the right -> crossbar (the sea line) -> corner -> concave wave face
-> crest -> barrel curl -> tapered lip tip.   Stroke 2: the stem (the falling face of the wave).

build(variant) returns traced vector loops (list of list-of-cubics) in a 1000-unit design space.
"""
import sys, math, json
sys.path.insert(0, __file__.rsplit('/', 1)[0])
from brush import Canvas, curves_to_d, loops_bbox


def keys(*kv):
    kv = sorted(kv)
    def f(s):
        if s <= kv[0][0]: return kv[0][1]
        for (s0, p0), (s1, p1) in zip(kv, kv[1:]):
            if s <= s1:
                t = (s - s0) / (s1 - s0); t = t * t * (3 - 2 * t)
                return p0 + (p1 - p0) * t
        return kv[-1][1]
    return f


VARIANTS = {}

# --- master (large / lockup) -----------------------------------------------------------
VARIANTS['master'] = dict(
    width=170, nib_ratio=0.5, nib_angle=-0.55, wobble=0.028,
    wave=[((965, 598), (760, 612), (430, 652), (112, 648)),
          ((112, 648), (320, 585), (510, 420), (575, 220)),
          ((575, 220), (615, 75), (800, 10), (895, 120)),
          ((895, 120), (965, 205), (915, 330), (815, 325)),
          ((815, 325), (745, 320), (730, 250), (770, 225))],
    wave_p=keys((0, .07), (.14, .7), (.22, 1), (.36, 1), (.395, .84), (.45, 1), (.66, 1), (.82, .78), (.93, .42), (1, .05)),
    stem=[((712, 84), (664, 140), (647, 230), (647, 330)),
          ((647, 330), (646, 550), (646, 750), (646, 935))],
    stem_p=keys((0, .55), (.08, 1), (1, 1)),
    bristles=True,
)

# --- small-size cut (favicon / avatar): heavier, curl opened, no dry detail ------------
VARIANTS['small'] = dict(
    width=196, nib_ratio=0.62, nib_angle=-0.55, wobble=0.0,
    wave=[((960, 612), (760, 615), (430, 652), (70, 655)),
          ((70, 655), (250, 545), (470, 385), (555, 220)),
          ((555, 220), (610, 80), (800, 15), (895, 125)),
          ((895, 125), (965, 210), (920, 345), (820, 345)),
          ((820, 345), (770, 345), (745, 300), (770, 268))],
    wave_p=keys((0, .25), (.1, .85), (.18, 1), (.36, 1), (.39, .88), (.44, 1), (.72, 1), (.88, .8), (1, .4)),
    stem=[((712, 90), (664, 145), (650, 230), (650, 330)),
          ((650, 330), (650, 550), (650, 750), (650, 930))],
    stem_p=keys((0, .55), (.08, 1), (1, 1)),
    bristles=False,
)


def build(name='master', scale=2.4, tol=0.3):
    v = VARIANTS[name]
    c = Canvas(-40, -60, 1040, 1020, scale=scale, ss=3)
    kw = dict(nib_ratio=v['nib_ratio'], nib_angle=v['nib_angle'], wobble=v['wobble'])
    wpts, _ = c.stroke(v['wave'], v['width'], v['wave_p'], seed=11, **kw)
    kw2 = dict(kw, wobble=v['wobble'] * 0.5)
    spts, _ = c.stroke(v['stem'], v['width'], v['stem_p'], seed=7, **kw2)
    if v['bristles']:
        # dry swash tail (start of the wave stroke, right-hand end of the crossbar)
        c.carve_bristles(wpts, v['width'], v['wave_p'], 0.0, 0.16,
                         [(-0.42, 1.0), (0.05, 0.62), (0.48, 0.85)],
                         lambda t: 9.5 * (1 - t) ** 1.6, nib_ratio=v['nib_ratio'])
    return c.to_path(tol=tol, corner_deg=40, smooth=1.0)


def square_svg(loops, fill, pad_frac=0.07):
    x0, y0, x1, y1 = loops_bbox(loops)
    w, h = x1 - x0, y1 - y0
    side = max(w, h) * (1 + 2 * pad_frac)
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    vb = [round(cx - side / 2, 1), round(cy - side / 2, 1), round(side, 1), round(side, 1)]
    d = curves_to_d(loops)
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{" ".join(map(str, vb))}">'
            f'<path fill="{fill}" fill-rule="evenodd" d="{d}"/></svg>\n')


if __name__ == '__main__':
    name = sys.argv[1] if len(sys.argv) > 1 else 'master'
    out = sys.argv[2]
    loops = build(name)
    open(out, 'w').write(square_svg(loops, '#CB3932'))
    n = sum(len(c) for c in loops)
    print(out, 'loops', len(loops), 'curves', n, 'bbox', [round(v) for v in loops_bbox(loops)])


# ---------------------------------------------------------------- lockup variant (long swash)
import numpy as _np


def seg_keys(segs, *kv):
    """Pressure keys addressed by segment position: u = segment index + local t (approx by arclength)."""
    from brush import sample_chain
    L = []
    for s in segs:
        _, l = sample_chain([s], 2.0)
        L.append(l)
    cum = _np.r_[0, _np.cumsum(L)]
    tot = cum[-1]
    conv = []
    for u, p in kv:
        i = min(int(u), len(segs) - 1)
        conv.append(((cum[i] + (u - i) * L[i]) / tot, p))
    return keys(*conv)


def lockup_strokes(x_end, y_end=592, sag=30, width=170):
    v = VARIANTS['master']
    wave = [((622, 626), (520, 640), (380, 652), (112, 648))] + v['wave'][1:]
    wave_p = seg_keys(wave, (0, 1), (.93, 1), (1.0, .84), (1.12, 1), (2.6, 1), (3.5, .78), (4.2, .42), (5, .05))
    L = x_end - 560
    swash = [((560, 630), (560 + L * .3, 630 + sag), (560 + L * .62, y_end - sag * .6), (x_end, y_end))]
    sw_p = keys((0, 1), (.05, .9), (.2, .56), (.32, .5), (.74, .46), (.93, .24), (1, .05))
    return wave, wave_p, swash, sw_p


def build_lockup(x_end, y_end=592, sag=30, scale=1.6, tol=0.3):
    v = VARIANTS['master']
    wave, wave_p, swash, sw_p = lockup_strokes(x_end, y_end, sag)
    c = Canvas(-40, -60, x_end + 60, 1020, scale=scale, ss=3)
    kw = dict(nib_ratio=v['nib_ratio'], nib_angle=v['nib_angle'], wobble=v['wobble'])
    c.stroke(wave, v['width'], wave_p, seed=11, **kw)
    c.stroke(v['stem'], v['width'], v['stem_p'], seed=7, **dict(kw, wobble=v['wobble'] * .5))
    spts, _ = c.stroke(swash, v['width'], sw_p, seed=5, **dict(kw, wobble=0.075), step=0.8)
    c.carve_bristles(spts, v['width'], sw_p, 1.0, 0.8,
                     [(-0.5, 1.0), (-0.1, 0.55), (0.3, 0.8), (0.62, 0.45)],
                     lambda t: 7.5 * (1 - t) ** 1.5, nib_ratio=v['nib_ratio'])
    return c.to_path(tol=tol, corner_deg=40, smooth=1.0)
