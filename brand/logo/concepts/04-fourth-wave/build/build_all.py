"""Build every master SVG for concept 04 — Fourth Wave.

    python3 build_all.py            # writes ../*.svg
Outputs: mark.svg, mark-small.svg, primary.svg, alt.svg, reverse.svg, mono.svg, textured.svg
"""
import sys, re
sys.path.insert(0, __file__.rsplit('/', 1)[0])
from compose import text, svg, tpart, mpart, PAPER, INK, RED
import mark as M
from brush import loops_bbox, curves_to_d

OUT = '/Users/Abhi/Developer/CSP/brand/logo/concepts/04-fourth-wave/'
SERIF, GROT = 'DMSerifDisplay-400', 'SpaceGrotesk-700'
SERIF_IT = 'DMSerifDisplay-400Italic'
SERIF_CAP, GROT_CAP = 660, 700           # cap heights per 1000 em


def sized(cap, font_cap):
    return round(cap / font_cap * 1000)


def place(font, size, s, x_left=None, x_center=None, baseline=0, ls=0):
    """Outline s so its ink starts at x_left (or is centred on x_center)."""
    probe = text(font, size, s, 0, 0, ls)['bbox']
    if x_center is not None:
        x_left = x_center - probe['w'] / 2
    return text(font, size, s, round(x_left - probe['x1'], 2), baseline, ls)


def name_line(cap, x_left=None, x_center=None, baseline=0, space=1.05):
    """'Cultural' roman + 'Shock' italic, as two outlined parts. Returns (part_a, part_b, bbox)."""
    size = sized(cap, SERIF_CAP)
    sp = (text(SERIF, size, 'Cultural ', 0, 0)['advance'] - text(SERIF, size, 'Cultural', 0, 0)['advance']) * space
    a0 = text(SERIF, size, 'Cultural', 0, 0)['bbox']; b0 = text(SERIF_IT, size, 'Shock', 0, 0)['bbox']
    total = a0['w'] + sp + b0['w'] - (b0['x1'] - 0) * 0  # ink widths + space
    if x_center is not None:
        x_left = x_center - total / 2
    a = text(SERIF, size, 'Cultural', round(x_left - a0['x1'], 2), baseline)
    b = text(SERIF_IT, size, 'Shock', round(a['bbox']['x2'] + sp - b0['x1'], 2), baseline)
    bb = (a['bbox']['x1'], min(a['bbox']['y1'], b['bbox']['y1']), b['bbox']['x2'], max(a['bbox']['y2'], b['bbox']['y2']))
    return a, b, bb


# ------------------------------------------------------------------ primary (horizontal)
P = dict(TX=1095, cap1=365, base1=545, cap2=268, base2=985, ls2=0.32, swash_y=596, swash_sag=22, swash_over=190)


def primary_parts(c_mark=RED, c_text=INK, c_party=RED):
    a, b, bb = name_line(P['cap1'], P['TX'], baseline=P['base1'])
    t2 = place(GROT, sized(P['cap2'], GROT_CAP), 'PARTY', P['TX'] + 8, baseline=P['base2'], ls=P['ls2'])
    x_end = bb[2] + P['swash_over']
    loops = _lockup_cache(round(x_end))
    return [mpart(loops, c_mark), tpart(a, c_text), tpart(b, c_text), tpart(t2, c_party)]


_LC = {}


def _lockup_cache(x_end):
    if x_end not in _LC:
        _LC[x_end] = M.build_lockup(x_end, P['swash_y'], P['swash_sag'])
    return _LC[x_end]


# ------------------------------------------------------------------ alt (stacked)
A = dict(gap1=170, cap1=222, cap2=146, gap2=122, ls2=0.42, xshift=-12)


def alt_parts(c_mark=RED, c_text=INK, c_party=RED):
    loops = _mark('master')
    x0, y0, x1, y1 = loops_bbox(loops)
    cx = (x0 + x1) / 2 + A['xshift']
    b1 = y1 + A['gap1'] + A['cap1']
    a, b, bb = name_line(A['cap1'], x_center=cx, baseline=b1)
    b2 = b1 + A['gap2'] + A['cap2']
    t2 = place(GROT, sized(A['cap2'], GROT_CAP), 'PARTY', x_center=cx, baseline=b2, ls=A['ls2'])
    return [mpart(loops, c_mark), tpart(a, c_text), tpart(b, c_text), tpart(t2, c_party)]


_MC = {}


def _mark(name):
    if name not in _MC:
        _MC[name] = M.build(name)
    return _MC[name]


def square(parts, pad_frac=0.07):
    x0 = min(p[2][0] for p in parts); y0 = min(p[2][1] for p in parts)
    x1 = max(p[2][2] for p in parts); y1 = max(p[2][3] for p in parts)
    side = max(x1 - x0, y1 - y0)
    pad = side * pad_frac
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    return svg(parts, pad=pad, box=(cx - side / 2, cy - side / 2, cx + side / 2, cy + side / 2))


def write(name, s):
    open(OUT + name, 'w').write(s)
    print('wrote', name, len(s) // 1024, 'KB')


if __name__ == '__main__':
    which = sys.argv[1:] or ['mark', 'primary', 'alt', 'reverse', 'mono']
    if 'mark' in which:
        write('mark.svg', square([mpart(_mark('master'), RED)]))
        write('mark-small.svg', square([mpart(_mark('small'), RED)]))
    if 'primary' in which:
        write('primary.svg', svg(primary_parts()))
    if 'alt' in which:
        write('alt.svg', svg(alt_parts()))
    if 'reverse' in which:
        write('reverse.svg', svg(primary_parts(RED, PAPER, PAPER)))
    if 'mono' in which:
        write('mono.svg', svg(primary_parts(INK, INK, INK)))
