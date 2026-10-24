"""05-collage — Cut & Paste. Composes every master SVG from outlined type + seeded scissor-cut paper.

    python3 build.py            # writes primary/alt/mark/reverse/mono/textured .svg into this folder
"""
import os, sys, math, copy
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from lib import *

P = PAL
OUT = HERE

# ------------------------------------------------------------------ design parameters (iterate here)
CFG = dict(
    print_font='Anton-400',          # cut-out newspaper headline voice
    hand_font='Knewave-400',        # painted-placard brush voice (overlap-free outlines → clean knock-outs)
    print_ls=0.045,
    hand_ls=0.03,
    party_strip=P['ink'],            # PARTY tape colour
    gap=0.07,                        # mono knock-out gap between layers (x cap)
    clear=0.12,                      # min clearance of covered letters from an overlapping edge (x cap)
    mark=dict(clear=0.05, tiles=[
        dict(ch='C', hand=False, sf='red', tf='paper', a=-4.0, x=0.225, y=0.265, w=0.43, h=0.50, cap=0.35,
             ox=-0.072, oy=-0.005, seed=5, slant=(0.03, -0.02)),
        dict(ch='S', hand=True, sf='card', tf='ink', a=3.5, x=0.50, y=0.50, w=0.44, h=0.52, cap=0.335,
             ox=-0.062, oy=-0.04, seed=8, edges=('tear', 'cut', 'cut', 'tear'), slant=(0.02, 0.02)),
        dict(ch='P', hand=False, sf='party_strip', tf='paper', a=-3.0, x=0.785, y=0.74, w=0.43, h=0.50, cap=0.35,
             ox=0.012, oy=0.0, seed=9, slant=(-0.02, 0.03)),
    ]),
    mark_scale=1.4,                 # mark height vs one-line wordmark height in the primary
)


# ------------------------------------------------------------------ pieces
def split_glyphs(font, text, ls, cs_raw):
    """assign each contour to a glyph index using cumulative advances."""
    edges = [0.0]
    for i in range(1, len(text)):
        edges.append(glyphs(font, text[:i], ls)['advance'] + ls * 100)
    groups = [[] for _ in text]
    for c in cs_raw:
        x1, _, x2, _ = bbox_contours([c])
        cx = (x1 + x2) / 2
        k = max(i for i, e in enumerate(edges) if cx >= e - 1e-6) if cx >= 0 else 0
        groups[k].append(c)
    return groups


def hand_word(font, text, cap, ls, seed, rot_amp=3.0, base_amp=0.035, size_amp=0.03):
    """word with tiny per-letter wobble (rotation / baseline / size) so it reads as hand-lettered."""
    rng = random.Random(seed)
    g = glyphs(font, text, ls)
    raw = parse(g['d'])
    groups = split_glyphs(font, text, ls, raw)
    out = []
    x1, y1, x2, y2 = bbox_contours(raw)
    for grp in groups:
        if not grp:
            continue
        gx1, gy1, gx2, gy2 = bbox_contours(grp)
        cx, cy = (gx1 + gx2) / 2, (gy1 + gy2) / 2
        a = rng.uniform(-rot_amp, rot_amp)
        dy = rng.uniform(-base_amp, base_amp) * (y2 - y1)
        s = 1 + rng.uniform(-size_amp, size_amp)
        out += mapc(grp, lambda x, y, cx=cx, cy=cy, a=a, dy=dy, s=s:
                    (lambda q: (q[0] + cx, q[1] + cy + dy))(rot((x - cx) * s, (y - cy) * s, a)))
    bx1, by1, bx2, by2 = bbox_contours(out)
    sc = cap / (by2 - by1)
    mx, my = (bx1 + bx2) / 2, (by1 + by2) / 2
    out = mapc(out, lambda x, y: ((x - mx) * sc, (y - my) * sc))
    return out, (bx2 - bx1) * sc, cap


def piece(text, font, cap, sf, tf, a=0.0, x=0.0, y=0.0, padx=0.42, pady=0.3, ls=0.0, seed=1,
          slant=(0.08, -0.06), edges=('cut',) * 4, hand=False, kinks=(2, 2, 1, 1), tear=0.03,
          offx=0.0, offy=0.0, w=None, h=None, cut=0.012):
    if hand:
        cs, tw, th = hand_word(font, text, cap, ls, seed + 100)
    else:
        cs, tw, th = word(font, text, cap, ls)
    sw = w if w else tw + 2 * padx * cap
    sh = h if h else th + 2 * pady * cap
    base = strip(sw, sh, seed, slant=slant, edges=edges, kinks=kinks, tear=tear, cut=cut)
    pc = dict(text=text, cap=cap, sf=sf, tf=tf, a=a, x=x, y=y, base=base,
              local=mapc(cs, lambda gx, gy: (gx + offx * cap, gy + offy * cap)))
    return moved(pc, 0, 0)


def moved(pc, dx, dy):
    pc = dict(pc)
    pc['x'] += dx; pc['y'] += dy
    pc['poly'] = xpts(pc['base'], pc['x'], pc['y'], pc['a'])
    pc['glyph'] = place(pc['local'], 1, pc['x'], pc['y'], pc['a'])
    return pc


def _inside_convex(pt, poly):
    s = 1 if signed_area(poly) > 0 else -1
    for i in range(len(poly)):
        a, b = poly[i], poly[(i + 1) % len(poly)]
        c = (b[0] - a[0]) * (pt[1] - a[1]) - (b[1] - a[1]) * (pt[0] - a[0])
        if c * s < 0:
            return False
    return True


def covered(lower, upper, clear):
    """True if any glyph point of `lower` is within `clear` of upper's paper."""
    zone = offset_convex(hull(upper['poly']), clear)
    for c in lower['glyph']:
        for _, pts in c:
            for p in pts:
                if _inside_convex(p, zone):
                    return True
    return False


def overlaps(a, b):
    ha, hb = hull(a['poly']), hull(b['poly'])
    return any(_inside_convex(p, hb) for p in a['poly']) or any(_inside_convex(p, ha) for p in b['poly'])


def fit(fixed, pc, dx, dy, below=None, above=None, clear=None, step=1.0, extra=0.0):
    """slide pc along (dx,dy) until no covered letters; `below`: pieces under pc, `above`: over pc."""
    clear = (clear if clear is not None else CFG['clear'])
    L = math.hypot(dx, dy); ux, uy = dx / L, dy / L
    below = below or []; above = above or []
    for i in range(4000):
        bad = any(covered(b, pc, clear * min(b['cap'], pc['cap'])) for b in below) or \
              any(covered(pc, a, clear * min(a['cap'], pc['cap'])) for a in above)
        if not bad:
            break
        pc = moved(pc, ux * step, uy * step)
    return moved(pc, ux * extra, uy * extra)


# ------------------------------------------------------------------ compositions
def stack_pieces(cfg=CFG, scale=1.0):
    """CULTURAL / SHOCK / PARTY collage pile (alt lockup)."""
    pf, hf = cfg['print_font'], cfg['hand_font']
    _, w1, _ = word(pf, 'CULTURAL', 100, cfg['print_ls'])
    _, w2, _ = word(hf, 'SHOCK', 100, cfg['hand_ls'])
    _, w3, _ = word(pf, 'PARTY', 100, cfg['print_ls'])
    T = 600 * scale
    c2 = T / w2 * 100                # SHOCK sets the measure
    c1 = T * 0.80 / w1 * 100
    c3 = T * 0.56 / w3 * 100
    cul = piece('CULTURAL', pf, c1, P['red'], P['paper'], a=-3.0, x=-0.07 * T, y=0, ls=cfg['print_ls'],
                seed=11, padx=0.36, pady=0.26, slant=(0.10, -0.05))
    sho = piece('SHOCK', hf, c2, P['card'], P['ink'], a=2.2, x=0.0, y=c1 * 0.3, ls=cfg['hand_ls'],
                seed=27, padx=0.16, pady=0.15, hand=True, edges=('tear', 'cut', 'tear', 'cut'),
                slant=(0.05, 0.08), tear=0.022)
    sho = fit([cul], sho, 0, 1, below=[cul])
    par = piece('PARTY', pf, c3, cfg['party_strip'], P['paper'], a=-2.4, x=0.17 * T, y=sho['y'], ls=cfg['print_ls'],
                seed=35, padx=0.34, pady=0.24, slant=(-0.10, 0.12))
    par = fit([cul, sho], par, 0, 1, above=[sho])
    return [cul, par, sho]          # paint order: SHOCK scrap on top


def line_pieces(cfg=CFG, cap=100):
    """one-line wordmark: CULTURAL · SHOCK · PARTY on a row of strips."""
    pf, hf = cfg['print_font'], cfg['hand_font']
    cul = piece('CULTURAL', pf, cap, P['red'], P['paper'], a=-2.6, x=0, y=0, ls=cfg['print_ls'],
                seed=11, padx=0.30, pady=0.24, slant=(0.10, -0.05))
    sho = piece('SHOCK', hf, cap * 1.18, P['card'], P['ink'], a=2.0, x=cul['poly'][1][0] + cap * 1.4, y=-cap * 0.02,
                ls=cfg['hand_ls'], seed=27, padx=0.17, pady=0.17, hand=True,
                edges=('tear', 'cut', 'tear', 'cut'), slant=(0.05, 0.08), tear=0.022)
    sho = fit([cul], sho, 1, 0, below=[cul], step=0.5, clear=0.16)
    par = piece('PARTY', pf, cap, cfg['party_strip'], P['paper'], a=-2.0, x=sho['x'] + cap * 2.4, y=-cap * 0.04,
                ls=cfg['print_ls'], seed=35, padx=0.30, pady=0.24, slant=(0.0, 0.12))
    par = fit([sho], par, 1, 0, above=[sho], step=0.5, clear=0.16)
    return [cul, par, sho]


def mark_pieces(cfg=CFG, S=300, key='mark'):
    """stacked cut-paper CSP tiles: three scraps cascading down-right inside a square, same colour
    order as the stacked wordmark (red / cardboard / ink). Letters sit off-centre on their scraps so
    the scrap pasted on top never touches them (checked below)."""
    pf, hf = cfg['print_font'], cfg['hand_font']
    M = cfg[key]
    pcs = []
    for t in M['tiles']:
        font = hf if t['hand'] else pf
        cap = t['cap'] * S
        pc = piece(t['ch'], font, cap, P[t['sf']] if t['sf'] in P else cfg[t['sf']], P[t['tf']],
                   a=t['a'], x=t['x'] * S, y=t['y'] * S, seed=t['seed'], w=t['w'] * S, h=t['h'] * S,
                   slant=t.get('slant', (0.02, -0.02)), kinks=(1, 1, 1, 1), edges=t.get('edges', ('cut',) * 4),
                   tear=0.022, offx=t.get('ox', 0) * S / cap, offy=t.get('oy', 0) * S / cap)
        pcs.append(pc)
    for i in range(len(pcs) - 1):
        if covered(pcs[i], pcs[i + 1], M['clear'] * pcs[i]['cap']):
            print(f'  ! mark: letter {pcs[i]["text"]} touched by scrap {pcs[i + 1]["text"]}', file=sys.stderr)
    return pcs


def scaled(pcs, k):
    out = []
    for pc in pcs:
        pc = dict(pc)
        pc['poly'] = [(x * k, y * k) for x, y in pc['poly']]
        pc['glyph'] = mapc(pc['glyph'], lambda x, y: (x * k, y * k))
        pc['cap'] *= k
        out.append(pc)
    return out


def shift(pcs, dx, dy):
    out = []
    for pc in pcs:
        pc = dict(pc)
        pc['poly'] = [(x + dx, y + dy) for x, y in pc['poly']]
        pc['glyph'] = mapc(pc['glyph'], lambda x, y: (x + dx, y + dy))
        out.append(pc)
    return out


def ext(pcs):
    xs = [q[0] for pc in pcs for q in pc['poly']]; ys = [q[1] for pc in pcs for q in pc['poly']]
    return min(xs), min(ys), max(xs), max(ys)


def lockup_pieces(cfg=CFG):
    """primary: mark tiles + one-line wordmark."""
    line = line_pieces(cfg)
    lx1, ly1, lx2, ly2 = ext(line)
    H = ly2 - ly1
    mk = mark_pieces(cfg)
    mx1, my1, mx2, my2 = ext(mk)
    mk = scaled(mk, H * cfg['mark_scale'] / (my2 - my1))
    mx1, my1, mx2, my2 = ext(mk)
    mk = shift(mk, lx1 - mx2 - H * cfg.get('mark_gap', 0.28), (ly1 + ly2) / 2 - (my1 + my2) / 2)
    return mk + line


# ------------------------------------------------------------------ render
def recolour(pcs, mode):
    pcs = [dict(pc) for pc in pcs]
    if mode == 'reverse':
        for pc in pcs:
            if pc['sf'] == P['ink']:
                pc['sf'], pc['tf'] = P['paper'], P['ink']
    return pcs


def viewbox(pcs, pad=None, padf=0.06, square=False):
    xs = [q[0] for pc in pcs for q in pc['poly']]; ys = [q[1] for pc in pcs for q in pc['poly']]
    x1, x2, y1, y2 = min(xs), max(xs), min(ys), max(ys)
    w, h = x2 - x1, y2 - y1
    if square:
        m = max(w, h); cx, cy = (x1 + x2) / 2, (y1 + y2) / 2
        x1, x2, y1, y2 = cx - m / 2, cx + m / 2, cy - m / 2, cy + m / 2
        w = h = m
    p = pad if pad is not None else padf * max(w, h)
    return (x1 - p, y1 - p, w + 2 * p, h + 2 * p)


def svg_color(pcs, vb, title):
    body = ''
    for pc in pcs:
        body += f'<path fill="{pc["sf"]}" d="{poly_d(pc["poly"])}"/>'
        body += f'<path fill="{pc["tf"]}" d="{to_d(pc["glyph"])}"/>'
    return wrap(body, vb, title)


def svg_mono(pcs, vb, title, colour=P['ink'], gap=None):
    """single colour: every scrap solid, every letter a true knock-out, and upper scraps cut a thin
    gap out of the ones beneath so the layering survives in one ink."""
    gap = CFG['gap'] if gap is None else gap
    body = ''
    for i, pc in enumerate(pcs):
        polys = [pc['poly']]
        for up in pcs[i + 1:]:
            if overlaps(pc, up):
                polys = subtract_many(polys, offset_convex(hull(up['poly']), gap * min(pc['cap'], up['cap'])))
        d = ''.join(poly_d(p) for p in polys) + to_d(pc['glyph'])
        body += f'<path fill="{colour}" fill-rule="evenodd" d="{d}"/>'
    return wrap(body, vb, title)


def wrap(body, vb, title):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{" ".join(fmt(v) for v in vb)}">'
            f'<title>{title}</title>{body}</svg>\n')


def write(name, s):
    open(os.path.join(OUT, name), 'w').write(s)


def build(cfg=CFG, prefix=''):
    T = 'Cultural Shock Party'
    lk = lockup_pieces(cfg)
    vb = viewbox(lk, pad=None, padf=0)  # tight
    pad = 0.10 * vb[3]
    vb = viewbox(lk, pad=pad)
    write(prefix + 'primary.svg', svg_color(lk, vb, T))
    write(prefix + 'reverse.svg', svg_color(recolour(lk, 'reverse'), vb, T))
    write(prefix + 'mono.svg', svg_mono(lk, vb, T))

    st = stack_pieces(cfg)
    write(prefix + 'alt.svg', svg_color(st, viewbox(st, padf=0.07), T))
    # variant: mark beside the pile
    sx1, sy1, sx2, sy2 = ext(st)
    mk = mark_pieces(cfg); mx1, my1, mx2, my2 = ext(mk)
    mk = scaled(mk, (sy2 - sy1) * 0.62 / (my2 - my1)); mx1, my1, mx2, my2 = ext(mk)
    mk = shift(mk, sx1 - mx2 - (sy2 - sy1) * 0.1, sy1 - my1)
    write(prefix + 'work/alt-b.svg', svg_color(mk + st, viewbox(mk + st, padf=0.07), T))
    m = mark_pieces(cfg)
    write(prefix + 'mark.svg', svg_color(m, viewbox(m, padf=0.06, square=True), 'CSP'))
    write(prefix + 'mark-mono.svg', svg_mono(m, viewbox(m, padf=0.06, square=True), 'CSP'))
    write(prefix + 'textured.svg', textured(cfg))


def textured(cfg=CFG, W=1080):
    """poster / social tile: the pile on crumpled paper with two duotone scraps behind it and
    print wear. SVG filters are allowed here only."""
    st = stack_pieces(cfg)
    x1, y1, x2, y2 = ext(st)
    k = W * 0.74 / (x2 - x1)
    st = scaled(st, k); x1, y1, x2, y2 = ext(st)
    st = shift(st, W / 2 - (x1 + x2) / 2, W / 2 - (y1 + y2) / 2 + W * 0.01)
    x1, y1, x2, y2 = ext(st)
    # accent scraps (duotone panels from the poster), half hidden behind the pile
    green = xpts(strip(W * 0.34, W * 0.22, 71, slant=(0.1, -0.05), kinks=(2, 1, 2, 1)), x1 + W * 0.07, y1 + W * 0.05, -7)
    blue = xpts(strip(W * 0.36, W * 0.22, 72, slant=(-0.06, 0.1), kinks=(2, 1, 2, 1)), x2 - W * 0.13, y2 - W * 0.07, 5)
    sho = st[2]
    # two marigold tape tabs holding the cardboard scrap
    sp = sho['poly']
    tl = min(sp, key=lambda q: q[0] + q[1]); tr = min(sp, key=lambda q: -q[0] + q[1])
    tape = [xpts(strip(W * 0.11, W * 0.035, 80 + i, kinks=(1, 1, 1, 1), edges=('cut', 'tear', 'cut', 'tear'),
                       tear=0.08), p[0] + dx, p[1] + W * 0.004, a)
            for i, (p, dx, a) in enumerate([(tl, W * 0.025, -38), (tr, -W * 0.025, 34)])]
    art = (f'<path fill="{P["green"]}" d="{poly_d(green)}"/><path fill="{P["blue"]}" d="{poly_d(blue)}"/>'
           + ''.join(f'<path fill="{pc["sf"]}" d="{poly_d(pc["poly"])}"/><path fill="{pc["tf"]}" d="{to_d(pc["glyph"])}"/>'
                     for pc in st)
           + ''.join(f'<path fill="{P["marigold"]}" fill-opacity="0.85" d="{poly_d(t)}"/>' for t in tape))
    defs = f'''<defs>
<filter id="crumple" x="0" y="0" width="100%" height="100%">
  <feTurbulence type="fractalNoise" baseFrequency="0.006 0.009" numOctaves="4" seed="4" result="n"/>
  <feDiffuseLighting in="n" lighting-color="#ffffff" surfaceScale="2.2" result="l">
    <feDistantLight azimuth="235" elevation="58"/>
  </feDiffuseLighting>
  <feColorMatrix in="l" type="matrix" values="0 0 0 0 0.13  0 0 0 0 0.12  0 0 0 0 0.11  -0.55 0 0 0 0.5"/>
</filter>
<filter id="wear" x="-3%" y="-3%" width="106%" height="106%">
  <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="9" result="lo"/>
  <feDisplacementMap in="SourceGraphic" in2="lo" scale="3.5" xChannelSelector="R" yChannelSelector="G" result="rough"/>
  <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="2" seed="3" result="hi"/>
  <feColorMatrix in="hi" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -16 0 0 0 11.2" result="speck"/>
  <feComposite in="rough" in2="speck" operator="in"/>
</filter>
</defs>'''
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {W}"><title>Cultural Shock Party</title>{defs}'
            f'<rect width="{W}" height="{W}" fill="{P["paper"]}"/>'
            f'<rect width="{W}" height="{W}" filter="url(#crumple)"/>'
            f'<g filter="url(#wear)">{art}</g></svg>\n')


if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == 'colours':
        for k in ('ink', 'blue', 'green', 'crimson'):
            c = dict(CFG, party_strip=P[k])
            st = stack_pieces(c)
            write(f'work/party-{k}.svg', svg_color(st, viewbox(st, padf=0.07), k))
            lk = lockup_pieces(c)
            write(f'work/line-{k}.svg', svg_color(lk, viewbox(lk, pad=0.1 * (ext(lk)[3] - ext(lk)[1])), k))
    else:
        build()
