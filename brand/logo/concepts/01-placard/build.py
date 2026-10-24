"""Compose the Placard concept SVGs from marker lettering + cut-cardboard geometry.

    python3 build.py            # writes all master SVGs into this folder
    python3 build.py --variants # writes exploration variants into work2/

v2 system (after critique):
  primary.svg  header lockup: S-placard plate + CULTURAL SHOCK PARTY on one line (holds at 28px tall)
  alt.svg      campaign lockup: the stacked placard on a longer, tilted stake (posters, banners, >= 64px)
  mark.svg     S placard, no stake, red S with an ink keyline on cardboard
  mark-favicon.svg  16-32px cut: cream poster-board with a cardboard rim, heavier S at ~80% board height
"""
import math
import random
import sys
from pathlib import Path

import numpy as np

from marker import Line, Nib, clean_ring, orient, poly_d, simplify_closed, stroke, sweep, transform

HERE = Path(__file__).resolve().parent
PAPER, INK, RED, CRIMSON = '#F6EEDD', '#221F1D', '#CB3932', '#A9233A'
CARD, CARD_D = '#B49073', '#966C52'

# --------------------------------------------------------------------------- cardboard

def _perp(p0, p1):
    d = np.asarray(p1, float) - np.asarray(p0, float)
    L = np.linalg.norm(d)
    return d / L, np.array([d[1], -d[0]]) / L, L


def cut_edge(p0, p1, rnd, nseg=4, amp=2.0):
    """Box-cutter edge: a few straight runs with slight kinks (excludes p1)."""
    t, n, L = _perp(p0, p1)
    cuts = sorted(rnd.uniform(0.12, 0.88) for _ in range(nseg - 1))
    pts = [np.asarray(p0, float)]
    for c in cuts:
        pts.append(np.asarray(p0) + t * L * c + n * rnd.uniform(-amp, amp))
    return pts


def _noise1d(rnd, L, terms):
    ws = [(rnd.uniform(0.75, 1.3) * wl, amp, rnd.uniform(0, 6.283)) for wl, amp in terms]
    return lambda x: sum(a * math.sin(2 * math.pi * x / w + p) for w, a, p in ws)


def torn_edge(p0, p1, rnd, step=3.5, amp=2.0, bites=2, bite_depth=6.0):
    """Hand-torn edge (excludes p1). Layered smooth noise for the overall drift, then an
    irregular grain: tooth spacing varies ~5x and tooth height 2-3x, with the odd fibre
    standing proud, so it reads as torn board rather than a fixed-period sawtooth."""
    t, n, L = _perp(p0, p1)
    f = _noise1d(rnd, L, [(90, amp), (31, amp * 0.5), (12, amp * 0.22)])
    bite_at = [(rnd.uniform(0.12, 0.88), rnd.uniform(18, 34)) for _ in range(bites)]
    pts = []
    s = 0.0
    run = 0  # calm stretches alternate with ragged ones
    calm = False
    while s < L:
        if run <= 0:
            calm = rnd.random() < 0.35
            run = rnd.randint(3, 9)
        run -= 1
        b = sum(bite_depth * math.exp(-((s - c * L) / wdt) ** 2) for c, wdt in bite_at)
        taper = min(1.0, s / 14, (L - s) / 14)
        h = amp * (0.25 if calm else rnd.choice((0.45, 0.7, 1.0, 1.0, 1.4, 2.1)))
        g = rnd.uniform(-1, 1) * h
        if not calm and rnd.random() < 0.07:
            g += amp * rnd.uniform(1.3, 2.6)  # a fibre standing proud of the tear
        off = (f(s) + g) * taper - b
        pts.append(np.asarray(p0) + t * s + n * off)
        s += step * (rnd.uniform(1.2, 2.4) if calm else rnd.uniform(0.4, 1.5))
    return pts, f


def placard_shape(w, h, seed=7, torn=True, strip_depth=11.0, corner=6.0, detail=1.0, chamfer=13.0):
    """Outer polygon (clockwise from top-left) and optional torn-edge strip."""
    rnd = random.Random(seed)
    j = lambda: rnd.uniform(-corner, corner) * detail
    tl = np.array([0 + j(), 0 + j()])
    tr = np.array([w + j(), 0 + j()])
    br = np.array([w + j(), h + j()])
    bl = np.array([0 + j(), h + j()])
    # chamfer the bottom-right corner (a hurried diagonal cut)
    ch = chamfer * detail
    br_a = br + np.array([0, -ch])
    br_b = br + np.array([-ch * 1.2, 0])
    if torn:
        top, tf = torn_edge(tl, tr, rnd, amp=2.0 * detail, bites=2, bite_depth=6 * detail)
    else:
        top = cut_edge(tl, tr, rnd, 4, 1.6 * detail)
    right = cut_edge(tr, br_a, rnd, 3, 1.8 * detail)
    bottom = cut_edge(br_b, bl, rnd, 4, 1.8 * detail)
    left = cut_edge(bl, tl, rnd, 3, 1.8 * detail)
    outer = np.array(top + right + [br_a] + bottom + left)
    strip = None
    if torn and strip_depth:
        # exposed liner along the tear: a thin, broken band just inside the edge
        edge = np.array(top + [tr])
        g = _noise1d(rnd, w, [(60, 1.0), (17, 0.6)])
        sx = np.r_[0, np.cumsum(np.linalg.norm(np.diff(edge, axis=0), axis=1))]
        depth = np.array([max(0.0, g(x) + 0.25) * strip_depth for x in sx])
        inner = edge + np.stack([np.zeros(len(edge)), depth], 1)
        strip = np.concatenate([edge, inner[::-1]])
    return outer, strip


def inside(poly, pts):
    """Even-odd point-in-polygon for many points."""
    x, y = pts[:, 0][:, None], pts[:, 1][:, None]
    a = poly; b = np.roll(poly, -1, 0)
    cond = ((a[:, 1] > y) != (b[:, 1] > y))
    with np.errstate(divide='ignore', invalid='ignore'):
        xi = a[:, 0] + (y - a[:, 1]) * (b[:, 0] - a[:, 0]) / (b[:, 1] - a[:, 1])
    return (np.sum(cond & (x < xi), 1) % 2) == 1


def inset(poly, d):
    """Inward offset of a simple (near-convex) polygon by d via vertex normals."""
    P = orient(np.asarray(poly, float), True)
    out = []
    n = len(P)
    for i in range(n):
        a, b, c = P[i - 1], P[i], P[(i + 1) % n]
        t1 = (b - a) / np.linalg.norm(b - a); t2 = (c - b) / np.linalg.norm(c - b)
        n1 = np.array([-t1[1], t1[0]]); n2 = np.array([-t2[1], t2[0]])
        m = n1 + n2
        m /= max(np.linalg.norm(m), 1e-9)
        cosang = max(np.dot(m, n1), 0.35)
        out.append(b + m * d / cosang)
    return np.array(out)

# --------------------------------------------------------------------------- svg

def bbox(polys):
    a = np.concatenate(polys)
    return a.min(0), a.max(0)


def svg(layers, pad_frac=0.07, square=False, title='Cultural Shock Party', extra_attr=''):
    """layers: list of (fill, [polys], fill_rule). Tight viewBox with even padding."""
    allp = [p for _, ps, *_ in layers for p in ps]
    lo, hi = bbox(allp)
    w, h = hi - lo
    if square:
        s = max(w, h)
        c = (lo + hi) / 2
        lo, hi = c - s / 2, c + s / 2
        w = h = s
    # even padding on all four sides, sized from the shorter side so wide lockups stay tight
    pad = pad_frac * min(w, h)
    vb = (lo[0] - pad, lo[1] - pad, w + 2 * pad, h + 2 * pad)
    parts = []
    for layer in layers:
        fill, ps = layer[0], layer[1]
        rule = layer[2] if len(layer) > 2 else None
        if not ps:
            continue
        d = ' '.join(poly_d(p - [vb[0], vb[1]]) for p in ps)
        r = f' fill-rule="{rule}"' if rule else ''
        parts.append(f'<path fill="{fill}"{r} d="{d}"/>')
    vbs = f'0 0 {vb[2]:.1f} {vb[3]:.1f}'
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vbs}" role="img"{extra_attr}>'
            f'<title>{title}</title>' + ''.join(parts) + '</svg>\n')


def rot_all(polys, deg, origin):
    return [transform(p, rot=deg, origin=origin) for p in polys]


def write(name, s, folder=HERE):
    (folder / name).write_text(s)
    print('wrote', folder / name)

# --------------------------------------------------------------------------- lettering helpers

def underline(x0, x1, y, nib, rise=-6, sag=3, seed=0, press=(1.08, 0.85)):
    rnd = random.Random(seed)
    xm = (x0 + x1) / 2
    pts = [(x0, y + rnd.uniform(-1, 1)), (xm, y + rise / 2 + sag), (x1, y + rise)]
    sk = stroke(('S', pts))
    return orient(clean_ring(sweep(sk, nib, press)))


VENUS_TEXT = 'SHVCK'      # 'V' = the Venus O (O ring + short cross stub below the baseline)
KERN = {'VC': 0.12, 'OC': 0.12, 'HV': 0.0, 'RT': -0.035, 'CU': 0.0}

# --------------------------------------------------------------------------- campaign placard (alt.svg)

P = dict(
    nib=(11.4, 7.0, -32, 3.6), nib_big=1.12,
    caps=(100, 150, 112), cf=(0.86, 0.9, 0.88), seeds=(11, 5, 23),
    # gap after CULTURAL, after SHOCK(+venus stub +underline)
    line_gap=(48, 162), line_rot=(-0.6, 0.5, -0.9), line_dx=(-4, 6, -2),
    shock=RED, shock_ul=RED,
    ul='single',              # 'double' | 'single' | 'none' | 'bar'
    ul_y=97,                  # underline drop below the SHOCK baseline (clears the venus stub)
    pad=(64, 60, 66, 70), tilt=-3.0, text_tilt=0.8,
    stick=True, stick_w=52, stick_len=200, stick_rot=4.5, stick_dx=18,
    torn=True, strip=True, card_seed=7, wobble=1.8, jit=1.0, track=1.05,
    key=4.5,                  # ink keyline round the red on cardboard (red/cardboard alone is ~1.7:1)
)


def text_block(p):
    nib = Nib(*p['nib'])
    nibB = nib.scaled(p['nib_big'])
    texts = ('CULTURAL', VENUS_TEXT, 'PARTY')
    nibs = (nib, nibB, nib.scaled(1.06))
    lines = [Line(t, c, n, cf=cf, seed=s, wobble=p['wobble'], jit=p['jit'], track=p['track'], kern=KERN)
             for t, c, n, cf, s in zip(texts, p['caps'], nibs, p['cf'], p['seeds'])]
    # widths measured on cap rows only (the venus stub must not change centring)
    widths = [L.width for L in lines]
    W = max(widths)
    out = {'ink': [], 'shock': [], 'ul': [], 'key': []}
    y = 0
    for i, L in enumerate(lines):
        dx = (W - L.width) / 2 - L.x1 + p['line_dx'][i]
        ps = L.polys(dx=dx, dy=y, rot=p['line_rot'][i])
        if i == 1:
            out['shock'] += ps
            if p.get('key'):
                out['key'] += L.polys(dx=dx, dy=y, rot=p['line_rot'][i], key=p['key'])
            bx0, bx1 = dx + L.x1, dx + L.x2
            base = y + L.cap
            if p['ul'] == 'double':
                out['ul'] = [underline(bx0 - 16, bx1 + 26, base + p['ul_y'], nibB.scaled(0.9), rise=-12, sag=8,
                                       seed=3, press=(1.12, 0.72)),
                             underline(bx0 + 30, bx1 - 44, base + p['ul_y'] + 28, nibB.scaled(0.82), rise=3, sag=-3,
                                       seed=4, press=(1.08, 0.62))]
            elif p['ul'] == 'single':
                un = nibB.scaled(0.92)
                ul_args = (bx0 - 14, bx1 + 22, base + p['ul_y'])
                out['ul'] = [underline(*ul_args, un, rise=-12, sag=7, seed=3, press=(1.12, 0.72))]
                if p.get('key'):
                    kn = Nib(un.a + p['key'], un.b + p['key'], un.angle, un.n)
                    out['key'] += [underline(*ul_args, kn, rise=-12, sag=7, seed=3, press=(1.12, 0.72))]
            y += L.cap + p['line_gap'][1]
        else:
            out['ink'] += ps
            y += L.cap + p['line_gap'][0]
    return out, lines


def stake(cx, top, bot, sw, rot, origin, seed=9):
    s = np.array([[cx - sw / 2, top], [cx + sw / 2, top], [cx + sw / 2 + 1.5, bot - 4],
                  [cx + sw / 2 - 3, bot + 2], [cx - sw / 2 + 4, bot - 1], [cx - sw / 2 - 1, bot - 6]])
    return transform(s, rot=rot, origin=origin)


def placard_geometry(p=P):
    blk, lines = text_block(p)
    allp = blk['ink'] + blk['shock'] + blk['ul']
    lo, hi = bbox(allp)
    pl, pt, pr, pb = p['pad']
    w = (hi[0] - lo[0]) + pl + pr
    h = (hi[1] - lo[1]) + pt + pb
    outer, strip = placard_shape(w, h, seed=p['card_seed'], torn=p['torn'],
                                 strip_depth=4.5 if p['strip'] else 0)
    off = np.array([lo[0] - pl, lo[1] - pt])
    outer = outer + off
    strip = strip + off if strip is not None else None
    c = (lo + hi) / 2
    # text sits slightly off the placard's axis, as if lettered by hand
    for k in ('ink', 'shock', 'ul', 'key'):
        blk[k] = rot_all(blk[k], p['text_tilt'], c)
    sticks = []
    if p['stick']:
        cx = c[0] + p['stick_dx']
        top = lo[1] + (hi[1] - lo[1]) * 0.45
        bot = hi[1] + pb + p['stick_len']
        sticks = [stake(cx, top, bot, p['stick_w'], p['stick_rot'], (cx, hi[1] + pb))]
    layers = dict(stick=sticks, card=[outer], strip=[strip] if strip is not None else [],
                  key=blk['key'], ink=blk['ink'], shock=blk['shock'], ul=blk['ul'])
    for k in layers:
        layers[k] = rot_all(layers[k], p['tilt'], c)
    return layers


def placard_svg(p=P, board='card'):
    g = placard_geometry(p)
    if board == 'card':
        layers = [(CARD_D, g['stick']), (CARD, g['card']), (PAPER, g['strip']), (INK, g['key'] + g['ink']),
                  (p['shock'], g['shock']), (p['shock_ul'], g['ul'])]
    else:  # cream poster-board for ink grounds (red already reads ~4.4:1 on cream: no keyline)
        layers = [(CARD, g['stick']), (PAPER, g['card']), (CARD, g['strip']), (INK, g['ink']),
                  (p['shock'], g['shock']), (p['shock_ul'], g['ul'])]
    return svg(layers)


def placard_knockout_svg(p=P):
    """One-ink stamp/stencil: solid ink board + stake with every letter cut out."""
    from knockout import difference
    g = placard_geometry(dict(p, strip=False))
    solid = g['card'] + g['stick']
    holes = g['ink'] + g['shock'] + g['ul']
    rings = difference(solid, holes)
    return svg([(INK, rings, 'evenodd')])

# --------------------------------------------------------------------------- S placard mark

M = dict(nib=(12.6, 8.4, -32, 3.6), cap=100, cf=0.78, seed=31, wobble=1.0, jit=0.5,
         s_color=RED, keyline=4.8, board=CARD, rim=None, pad=(46, 26, 44, 28), tilt=-4.0,
         torn=True, strip=False, card_seed=12, detail=0.6, chamfer=13.0)


def s_glyph(m):
    nib = Nib(*m['nib'])
    L = Line('S', m['cap'], nib, cf=m['cf'], seed=m['seed'], wobble=m['wobble'], jit=m['jit'])
    g, gx = L.items[0]
    s_polys = [orient(q + [gx, 0]) for q in g.polys]
    key = []
    if m['keyline']:
        # same skeleton, nib grown by the keyline width: an ink outline the sign-writer adds round the red
        kn = Nib(nib.a + m['keyline'], nib.b + m['keyline'], nib.angle, nib.n)
        for sk in g.skel:
            key.append(orient(clean_ring(sweep(sk + [gx, 0], kn.rotated(0), (1.05, 0.95)))))
    return s_polys, key


def mark_geometry(m=M):
    s_polys, key = s_glyph(m)
    lo, hi = bbox(s_polys + key)
    pl, pt, pr, pb = m['pad']
    w = hi[0] - lo[0] + pl + pr
    h = hi[1] - lo[1] + pt + pb
    outer, strip = placard_shape(w, h, seed=m['card_seed'], torn=m['torn'],
                                 strip_depth=7 if m['strip'] else 0, corner=5, detail=m['detail'],
                                 chamfer=m['chamfer'])
    off = np.array([lo[0] - pl, lo[1] - pt])
    outer = outer + off
    strip = [strip + off] if strip is not None else []
    rim = []
    if m.get('rim'):
        rim = [outer]
        # inner board edge: inset then smoothed, so the tear's small teeth do not echo inside the rim
        outer = simplify_closed(inset(outer, m['rim']), 2.5)
    c = (lo + hi) / 2
    layers = dict(rim=rim, card=[outer], strip=strip, key=key, s=s_polys)
    for k in layers:
        layers[k] = rot_all(layers[k], m['tilt'], c)
    return layers


def mark_layers(g, m, ground='paper'):
    rim_c = CARD_D
    return [(rim_c, g['rim']), (m['board'], g['card']), (PAPER if m['board'] == CARD else CARD, g['strip']),
            (INK, g['key']), (m['s_color'], g['s'])]


def mark_svg(m=M, pad=0.06):
    g = mark_geometry(m)
    return svg(mark_layers(g, m), square=True, pad_frac=pad)


def mark_knockout_polys(m=M):
    """Solid ink board with the S cut out (traced boolean: the swept S outline overlaps itself)."""
    from knockout import difference
    g = mark_geometry(dict(m, keyline=0, rim=None, strip=False))
    return difference(g['card'], g['s'], res=6.0)

# --------------------------------------------------------------------------- header lockup (primary.svg)

H = dict(nib=(11.6, 7.4, -32, 3.6), cap=100, cf=0.86, seed=41, wobble=1.5, jit=0.8, track=1.08, word=0.40,
         cap_ratio=0.64, gap=0.40, lift=0.04, mark=None)
HM = dict(M, tilt=-3.0)   # the plate as used inside the header lockup (a touch less tilt = less height)


def wordmark(h=H):
    nib = Nib(*h['nib'])
    L = Line('CULTURAL ' + VENUS_TEXT + ' PARTY', h['cap'], nib, cf=h['cf'], seed=h['seed'], wobble=h['wobble'],
             jit=h['jit'], track=h['track'], word=h['word'], kern=KERN)
    ink_p, red_p = [], []
    for gi, (g, gx) in enumerate(L.items):
        dst = red_p if 8 <= gi <= 12 else ink_p
        dst += [orient(p + [gx, 0]) for p in g.polys]
    return ink_p, red_p


def header_geometry(h=H, m=None):
    m = m or h.get('mark') or HM
    mg = mark_geometry(m)
    card = mg['rim'][0] if mg['rim'] else mg['card'][0]
    clo, chi = card.min(0), card.max(0)
    ch = chi[1] - clo[1]
    ink_p, red_p = wordmark(h)
    k = ch * h['cap_ratio'] / h['cap']
    ink_p = [p * k for p in ink_p]; red_p = [p * k for p in red_p]
    wl, wh = bbox(ink_p + red_p)
    cap_mid = h['cap'] * k / 2
    dx = chi[0] + h['gap'] * h['cap'] * k - wl[0]
    # caps centred on the plate, lifted a little so the venus stub does not hang far below it
    dy = (clo[1] + chi[1]) / 2 - cap_mid - h['lift'] * ch
    sh = lambda ps: [p + [dx, dy] for p in ps]
    return dict(mg, ink=sh(ink_p), red=sh(red_p))


def header_svg(h=H, ground='paper', m=None):
    m = m or h.get('mark') or HM
    g = header_geometry(h, m)
    if ground == 'paper':
        return svg(mark_layers(g, m) + [(INK, g['ink']), (RED, g['red'])])
    if ground == 'ink':
        return svg(mark_layers(g, m) + [(PAPER, g['ink']), (RED, g['red'])])
    raise ValueError(ground)


def header_mono_svg(h=H, m=None):
    """One ink: solid placard with the S cut out, ink wordmark (stamps, stencils, newsprint)."""
    m = m or h.get('mark') or HM
    m2 = dict(m, keyline=0, rim=None, strip=False)
    g = header_geometry(h, m2)
    from knockout import difference
    plate = difference(g['card'], g['s'], res=6.0)
    return svg([(INK, plate, 'evenodd'), (INK, g['ink'] + g['red'])])

# --------------------------------------------------------------------------- textured poster

TEXTURE_DEFS = """<defs>
<filter id="card" x="-5%" y="-5%" width="110%" height="110%" color-interpolation-filters="sRGB">
  <feTurbulence type="fractalNoise" baseFrequency="0.9 0.012" numOctaves="2" seed="4" result="flute"/>
  <feColorMatrix in="flute" type="matrix" values="0 0 0 0 0.35 0 0 0 0 0.24 0 0 0 0 0.17 0 0 0 0.42 -0.15" result="fluteA"/>
  <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="3" seed="9" result="blot"/>
  <feColorMatrix in="blot" type="matrix" values="0 0 0 0 0.45 0 0 0 0 0.33 0 0 0 0 0.24 0 0 0 0.55 -0.27" result="blotA"/>
  <feMerge result="tex"><feMergeNode in="fluteA"/><feMergeNode in="blotA"/></feMerge>
  <feComposite in="tex" in2="SourceGraphic" operator="in" result="texIn"/>
  <feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="texIn"/></feMerge>
</filter>
<filter id="marker" x="-5%" y="-5%" width="110%" height="110%" color-interpolation-filters="sRGB">
  <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" seed="2" result="g"/>
  <feDisplacementMap in="SourceGraphic" in2="g" scale="3.2" xChannelSelector="R" yChannelSelector="G" result="rough"/>
  <feTurbulence type="fractalNoise" baseFrequency="0.05 0.45" numOctaves="2" seed="7" result="streak"/>
  <feColorMatrix in="streak" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 14 -8.6" result="dry"/>
  <feComposite in="rough" in2="dry" operator="out"/>
</filter>
<filter id="paper" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
  <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="4" seed="11" result="c"/>
  <feDiffuseLighting in="c" lighting-color="#FFFFFF" surfaceScale="1.6" result="lit"><feDistantLight azimuth="235" elevation="66"/></feDiffuseLighting>
  <feComposite in="lit" in2="SourceGraphic" operator="in"/>
</filter>
</defs>"""


def textured_svg(p=P):
    """Poster / social tile: paper ground, cardboard grain, dry-marker edges (filters allowed here only)."""
    g = placard_geometry(p)
    allp = [q for k in g for q in g[k]]
    lo, hi = bbox(allp)
    w, h = hi - lo
    S = max(w, h) * 1.22
    c = (lo + hi) / 2
    ox, oy = c[0] - S / 2, c[1] - S / 2
    d = lambda ps: ' '.join(poly_d(q - [ox, oy]) for q in ps)
    parts = [f'<rect width="{S:.0f}" height="{S:.0f}" fill="{PAPER}"/>',
             f'<rect width="{S:.0f}" height="{S:.0f}" fill="{PAPER}" filter="url(#paper)" opacity="0.5" style="mix-blend-mode:multiply"/>',
             f'<g filter="url(#card)"><path fill="{CARD_D}" d="{d(g["stick"])}"/><path fill="{CARD}" d="{d(g["card"])}"/></g>',
             f'<path fill="{PAPER}" d="{d(g["strip"])}"/>',
             f'<g filter="url(#marker)"><path fill="{INK}" d="{d(g["key"] + g["ink"])}"/><path fill="{p["shock"]}" d="{d(g["shock"])}"/>'
             f'<path fill="{p["shock_ul"]}" d="{d(g["ul"])}"/></g>']
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {S:.0f} {S:.0f}" role="img">'
            f'<title>Cultural Shock Party</title>{TEXTURE_DEFS}' + ''.join(parts) + '</svg>\n')

# --------------------------------------------------------------------------- favicon cut

FAV = dict(M, nib=(15.5, 11.0, -32, 3.4), cf=0.80, pad=(25, 13, 25, 11), tilt=-2.5, detail=0.45, chamfer=18,
           jit=0.2, wobble=0.4, keyline=0, board=PAPER, rim=9.5, torn=True, strip=False)


def build_all():
    write('primary.svg', header_svg(H))
    write('reverse.svg', header_svg(H, ground='ink', m=dict(HM, board=PAPER, keyline=0, rim=None)))
    write('mono.svg', header_mono_svg(H))
    write('alt.svg', placard_svg(P))
    write('alt-reverse.svg', placard_svg(P, board='cream'))
    write('alt-mono.svg', placard_knockout_svg(P))
    write('mark.svg', mark_svg(M))
    write('mark-favicon.svg', mark_svg(FAV, pad=0.04))
    write('mark-reverse.svg', mark_svg(dict(M, board=PAPER, keyline=0)))
    write('mark-mono.svg', svg([(INK, mark_knockout_polys(M), 'evenodd')], square=True, pad_frac=0.06))
    write('textured.svg', textured_svg(P))


if __name__ == '__main__':
    work = HERE / 'work2'
    work.mkdir(exist_ok=True)
    if '--variants' in sys.argv:
        import variants
        variants.run(globals(), work)
    else:
        build_all()
