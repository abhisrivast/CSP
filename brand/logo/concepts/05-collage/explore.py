"""Iteration 0: type/colour exploration for the strip stack. Writes work/x-*.svg"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from lib import *

W = os.path.join(HERE, 'work')


def piece(text, font, cap, strip_fill, text_fill, a, x, y, padx=0.42, pady=0.30, ls=0.0,
          seed=1, slant=(0.08, -0.06), edges=('cut',) * 4, sx=1.0):
    cs, w, h = word(font, text, cap, ls, sx)
    sw, sh = w + 2 * padx * cap, h + 2 * pady * cap
    poly = xpts(strip(sw, sh, seed, slant=slant, edges=edges), x, y, a)
    glyph = place(cs, 1, x, y, a)
    return dict(poly=poly, glyph=glyph, sf=strip_fill, tf=text_fill)


def svg(pieces, padf=0.06, extra=''):
    xs = [p[0] for pc in pieces for p in pc['poly']]
    ys = [p[1] for pc in pieces for p in pc['poly']]
    x1, x2, y1, y2 = min(xs), max(xs), min(ys), max(ys)
    pad = padf * max(x2 - x1, y2 - y1)
    vb = (x1 - pad, y1 - pad, x2 - x1 + 2 * pad, y2 - y1 + 2 * pad)
    body = ''
    for pc in pieces:
        body += f'<path fill="{pc["sf"]}" d="{poly_d(pc["poly"])}"/>'
        body += f'<path fill="{pc["tf"]}" d="{to_d(pc["glyph"])}"/>'
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{" ".join(fmt(v) for v in vb)}">'
            f'{body}{extra}</svg>\n')


P = PAL
combos = {
    'a-archivo-marker': ('ArchivoBlack-400', 'PermanentMarker-400', 'ArchivoBlack-400', P['ink']),
    'b-anton-marker': ('Anton-400', 'PermanentMarker-400', 'Anton-400', P['ink']),
    'c-archivo-anton': ('ArchivoBlack-400', 'Anton-400', 'ArchivoBlack-400', P['blue']),
    'd-space-sedgwick': ('SpaceGrotesk-700', 'SedgwickAveDisplay-400', 'Fraunces-900Italic', P['blue']),
    'e-archivo-marker-blue': ('ArchivoBlack-400', 'PermanentMarker-400', 'ArchivoBlack-400', P['blue']),
    'f-bigshoulders-marker-green': ('BigShouldersDisplay-900', 'PermanentMarker-400', 'BigShouldersDisplay-900', P['green']),
}
files = []
for name, (f1, f2, f3, pfill) in combos.items():
    # size words so the stack reads as a block: measure widths at cap 100
    _, w1, _ = word(f1, 'CULTURAL', 100, 0.06)
    _, w2, _ = word(f2, 'SHOCK', 100, 0.02)
    _, w3, _ = word(f3, 'PARTY', 100, 0.06)
    target = 620
    c1 = min(100, target * 0.78 / w1 * 100)
    c2 = target / w2 * 100
    c3 = target * 0.62 / w3 * 100
    pcs = [
        piece('CULTURAL', f1, c1, P['red'], P['paper'], -3.2, -20, 0, ls=0.06, seed=11),
        piece('PARTY', f3, c3, pfill, P['paper'], -2.0, 120, c1 * 0.8 + c2 * 1.05 + c3 * 0.55, ls=0.06, seed=33,
              slant=(-0.1, 0.12)),
        piece('SHOCK', f2, c2, P['card'], P['ink'], 2.4, 0, c1 * 0.55 + c2 * 0.62, ls=0.02, seed=22,
              edges=('tear', 'cut', 'cut', 'tear'), padx=0.22, pady=0.16),
    ]
    f = os.path.join(W, f'x-{name}.svg')
    open(f, 'w').write(svg(pcs))
    files.append(f)
print(','.join(files))
