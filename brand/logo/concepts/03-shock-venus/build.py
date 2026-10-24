"""Build script for concept 03-shock-venus.

The mark: a heavy monoline Venus ring whose cross is replaced by a single lightning zigzag. The bolt's
horizontal jog *is* the Venus crossbar; the last leg tapers to a strike point. Two strokes by hand:
a circle, then a zigzag.

    python3 build.py            # writes all master SVGs into this folder
    python3 build.py explore    # also writes lockup studies into explore/
"""
import math
import re
import sys
from pathlib import Path
from geom import PAL, f, sub, add, mul, norm, offset_polyline, line_circle, cw, poly_d, ring_d, text, svg

HERE = Path(__file__).parent
EXP = HERE / 'explore'
INK, RED, PAPER = PAL['ink'], PAL['red'], PAL['paper']

# ---------------------------------------------------------------- mark geometry (ring outer radius = 100)
M = dict(
    R=78,          # ring centreline radius
    W=44,          # ring stroke
    Wd=44,         # bolt diagonal stroke (perpendicular)
    Wj=41,         # bolt jog stroke (horizontals read heavier: slightly thinner)
    a=None,        # half-length of the jog (centreline); None = solved so the jog's points reach `spike`
    spike=101,     # x of the jog's mitre points: flush with the ring (100) + 1% overshoot for sharp points
    theta=33,      # diagonal angle from vertical (degrees); both diagonals parallel (point symmetry)
    x0=10,         # top of the bolt sits slightly right of axis so its footprint centres on the ring
    tip=12,        # extra length of the strike point
    rf=12,         # fillet radius where the bolt grows out of the ring (one stroke, not two parts glued)
)


def fillet_patch(edge_pt, d, n_out, RO, rf):
    """Concave fillet filling the crotch between a straight bolt edge and the ring's outer circle."""
    C = line_circle(edge_pt, d, RO, 'max')                    # where the edge leaves the ring
    lp = add(edge_pt, mul(n_out, rf))
    cands = []
    for pick in ('min', 'max'):
        try:
            cands.append(line_circle(lp, d, RO + rf, pick))
        except ValueError:
            pass
    ctr = min(cands, key=lambda q: math.hypot(q[0] - C[0], q[1] - C[1]))
    Tl = sub(ctr, mul(n_out, rf))
    Tr = mul(ctr, RO / (RO + rf))
    pts = [Tl, C, Tr]
    area = sum(pts[i][0] * pts[(i + 1) % 3][1] - pts[(i + 1) % 3][0] * pts[i][1] for i in range(3))
    if area < 0:
        pts = pts[::-1]
    a0 = math.atan2(pts[2][1] - ctr[1], pts[2][0] - ctr[0])
    a1 = math.atan2(pts[0][1] - ctr[1], pts[0][0] - ctr[0])
    dl = (a1 - a0 + math.pi) % (2 * math.pi) - math.pi
    sweep = 1 if dl > 0 else 0
    return (f'M{f(pts[0][0])} {f(pts[0][1])} L{f(pts[1][0])} {f(pts[1][1])} L{f(pts[2][0])} {f(pts[2][1])} '
            f'A{f(rf)} {f(rf)} 0 0 {sweep} {f(pts[0][0])} {f(pts[0][1])} Z')


def bolt_spine(m):
    dy = m['a'] / math.tan(math.radians(m['theta']))
    yc = m['R'] + dy
    return [(m['x0'], m['R']), (-m['a'], yc), (m['a'], yc), (-m['x0'], yc + dy)]


def solve_jog(m):
    """Jog half-length that puts the mitre points of the jog at x = +/- spike."""
    lo, hi = 20.0, 90.0
    for _ in range(60):
        mid = (lo + hi) / 2
        l, r = offset_polyline(bolt_spine({**m, 'a': mid}), [m['Wd'], m['Wj'], m['Wd']])
        lo, hi = (mid, hi) if max(p[0] for p in l + r) < m['spike'] else (lo, mid)
    return (lo + hi) / 2


def mark(m=None):
    """Return (path d, bbox) for the mark with ring centre at the origin."""
    m = {**M, **(m or {})}
    if m['a'] is None:
        m['a'] = solve_jog(m)
    R, W = m['R'], m['W']
    RO, RI = R + W / 2, R - W / 2
    pts = bolt_spine(m)
    left, right = offset_polyline(pts, [m['Wd'], m['Wj'], m['Wd']])
    d0 = norm(sub(pts[1], pts[0]))
    cl = line_circle(left[0], d0, R, 'max')       # cut the top of the bolt on the ring centreline
    cr = line_circle(right[0], d0, R, 'max')
    tipp = add(pts[-1], mul(norm(sub(pts[-1], pts[-2])), m['tip']))
    bolt = cw([cl] + left[1:-1] + [tipp] + right[1:-1][::-1] + [cr])
    xs = [p[0] for p in bolt] + [-RO, RO]
    ys = [p[1] for p in bolt] + [-RO]
    fil = ''
    if m['rf'] > 0:
        n = (-d0[1], d0[0])
        # only the right-hand junction is a concave crotch; the left one is a convex shoulder and stays crisp
        fil = ' ' + fillet_patch(right[0], d0, mul(n, -1), RO, m['rf'])
    # one compound path; bolt wound clockwise like the outer ring so the overlap stays filled (nonzero)
    return ring_d(0, 0, RO, RI) + ' ' + poly_d(bolt) + fil, (min(xs), min(ys), max(xs), max(ys))


def xform(d, s, tx, ty):
    """Scale + translate absolute M/L/A/Z path data (what mark() emits) without using transforms."""
    toks = re.findall(r'[MLAZ]|-?\d*\.?\d+', d)
    out, i, cmd = [], 0, None
    while i < len(toks):
        t = toks[i]
        if t in 'MLAZ':
            cmd = t; out.append(t); i += 1
            continue
        if cmd in ('M', 'L'):
            out.append(f'{f(float(toks[i]) * s + tx)} {f(float(toks[i + 1]) * s + ty)}'); i += 2
        elif cmd == 'A':
            rx, ry, rot, la, sw, x, y = toks[i:i + 7]; i += 7
            out.append(f'{f(float(rx) * s)} {f(float(ry) * s)} {rot} {la} {sw} '
                       f'{f(float(x) * s + tx)} {f(float(y) * s + ty)}')
    return re.sub(r'([MLAZ]) ', r'\1', ' '.join(out))


def placed_mark(height, x, y_top, m=None):
    """Mark scaled to a given bbox height, bbox top-left at (x, y_top)."""
    d, bb = mark(m)
    s = height / (bb[3] - bb[1])
    tx, ty = x - bb[0] * s, y_top - bb[1] * s
    return xform(d, s, tx, ty), (x, y_top, x + (bb[2] - bb[0]) * s, y_top + height), s


# ---------------------------------------------------------------- type (outlined via tools/textpath.mjs)
FONT = 'ArchivoBlack-400'
CAP = 0.688      # cap height / em
SPACE = 0.333    # space advance / em


def line(parts, cap, x, y, ls=0.0, space=1.0):
    """parts: [(text, colour)] on one baseline, cap height = cap. Returns ([(d, colour)], bbox)."""
    size = cap / CAP
    out, cx, bbs = [], x, []
    for i, (s, col) in enumerate(parts):
        t = text(FONT, size, s, x=cx, y=y, ls=ls)
        out.append((t['d'], col))
        b = t['bbox']; bbs.append((b['x1'], b['y1'], b['x2'], b['y2']))
        cx += t['advance'] + (size * (SPACE * space + ls) if i < len(parts) - 1 else 0)
    return out, union(bbs)


def union(bbs):
    return (min(b[0] for b in bbs), min(b[1] for b in bbs), max(b[2] for b in bbs), max(b[3] for b in bbs))


def ink_width(parts, cap, ls=0.0, space=1.0):
    _, bb = line(parts, cap, 0, 0, ls, space)
    return bb[2] - bb[0], bb[0]


# ---------------------------------------------------------------- output
def write(path, items, bb, pad=0.07, square=False, title='Cultural Shock Party'):
    """items: [(d, colour)]; bb: content bbox. Even padding = pad x shorter side (x side when square)."""
    x0, y0, x1, y1 = bb
    w, h = x1 - x0, y1 - y0
    if square:
        side = max(w, h); p = side * pad
        cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
        vb = (cx - side / 2 - p, cy - side / 2 - p, side + 2 * p, side + 2 * p)
    else:
        p = min(w, h) * pad
        vb = (x0 - p, y0 - p, w + 2 * p, h + 2 * p)
    groups = {}
    for d, col in items:
        groups.setdefault(col, []).append(d)
    body = '\n'.join(f'<path fill="{col}" d="{" ".join(ds)}"/>' for col, ds in groups.items())
    Path(path).write_text(svg(vb, f'<title>{title}</title>\n{body}'))
    return vb


def recolour(items, mapping):
    return [(d, mapping.get(c, c)) for d, c in items]


# ---------------------------------------------------------------- lockups
def ring_centre_x(height, m=None):
    """Distance from the mark bbox left edge to the ring centre, for a mark of the given height."""
    d, bb = mark(m)
    return (0 - bb[0]) * height / (bb[3] - bb[1])


def lockup_two_line(mark_col=RED, shock_col=RED, word_col=INK, cap=100, lead=0.46, gap=0.56,
                    top_ov=0.035, bot_ov=0.13, ls=0.015, space=0.9, m=None):
    """Primary, horizontal: the mark spans a two-line wordmark  CULTURAL / SHOCK PARTY.
    The ring sits against line 1, the bolt strikes down beside SHOCK. The ring overshoots the cap
    line slightly (round form) and the strike point overshoots the baseline more (pointed form)."""
    y1 = cap                       # baseline line 1 (cap top at 0)
    y2 = y1 + cap * (1 + lead)     # baseline line 2
    mtop, mbot = -cap * top_ov, y2 + cap * bot_ov
    md, mbb, s = placed_mark(mbot - mtop, 0, mtop, m)
    tx = mbb[2] + cap * gap
    p1 = [('CULTURAL', word_col)]
    p2 = [('SHOCK', shock_col), ('PARTY', word_col)]
    _, b1 = line(p1, cap, tx, y1, ls, space)
    _, b2 = line(p2, cap, tx, y2, ls, space)
    dx = tx - min(b1[0], b2[0])            # align on the ink edge, not the side bearing
    l1, b1 = line(p1, cap, tx + dx, y1, ls, space)
    l2, b2 = line(p2, cap, tx + dx, y2, ls, space)
    return [(md, mark_col)] + l1 + l2, union([mbb, b1, b2])


def lockup_stack(mark_col=RED, shock_col=RED, word_col=INK, cap=100, lead=0.30, mark_k=1.15, gap=0.9, m=None,
                 ls1=0.06, lsS=0.02):
    """Alternate, stacked: mark centred over a justified block  CULTURAL / SHOCK / PARTY  (poster form)."""
    w1, _ = ink_width([('CULTURAL', word_col)], cap, ls1)          # line 1 sets the measure
    wS, _ = ink_width([('SHOCK', shock_col)], 100, lsS)
    capS = 100 * w1 / wS                                            # SHOCK scaled to the measure
    lo, hi = -0.05, 0.3                                             # PARTY: same cap as SHOCK, tracked to fit
    for _ in range(40):
        mid = (lo + hi) / 2
        wP, _ = ink_width([('PARTY', word_col)], capS, mid)
        lo, hi = (mid, hi) if wP < w1 else (lo, mid)
    lsP = (lo + hi) / 2
    block_h = cap + 2 * capS + 2 * lead * cap
    mh = block_h * mark_k
    md, mbb, s = placed_mark(mh, -ring_centre_x(mh, m), 0, m)       # centre on the ring, not the bbox
    y1 = mh + cap * gap + cap
    y2 = y1 + cap * lead + capS
    y3 = y2 + cap * lead + capS
    def centred(parts, c, y, ls):
        w, x1 = ink_width(parts, c, ls)
        return line(parts, c, -w / 2 - x1, y, ls)
    l1, b1 = centred([('CULTURAL', word_col)], cap, y1, ls1)
    l2, b2 = centred([('SHOCK', shock_col)], capS, y2, lsS)
    l3, b3 = centred([('PARTY', word_col)], capS, y3, lsP)
    return [(md, mark_col)] + l1 + l2 + l3, union([mbb, b1, b2, b3])


def explore():
    EXP.mkdir(exist_ok=True)
    files = []
    for name, fn, kw in [
        ('L2-red-red', lockup_two_line, dict()),
        ('S3-red-red', lockup_stack, dict()),
        ('S3-k12', lockup_stack, dict(mark_k=1.2, gap=0.9)),
    ]:
        items, bb = fn(**kw)
        p = EXP / f'{name}.svg'
        write(p, items, bb)
        files.append(str(p))
    print(','.join(files))


MASTER = ['primary.svg', 'alt.svg', 'mark.svg', 'reverse.svg', 'mono.svg']


def build_all():
    items, bb = lockup_two_line()
    write(HERE / 'primary.svg', items, bb)
    write(HERE / 'reverse.svg', recolour(items, {INK: PAPER}), bb)
    write(HERE / 'mono.svg', recolour(items, {RED: INK}), bb)
    items, bb = lockup_stack()
    write(HERE / 'alt.svg', items, bb)
    d, bb = mark()
    write(HERE / 'mark.svg', [(d, RED)], bb, square=True, pad=0.08, title='Cultural Shock Party — mark')
    print('wrote', ', '.join(MASTER))


if __name__ == '__main__':
    if 'explore' in sys.argv:
        explore()
    else:
        build_all()
