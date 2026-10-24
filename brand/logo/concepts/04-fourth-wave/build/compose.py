"""Compose CSP Fourth Wave lockups from the traced brush mark + outlined type (textpath.mjs)."""
import sys, json, subprocess, functools
sys.path.insert(0, __file__.rsplit('/', 1)[0])
import mark as M
from brush import curves_to_d, loops_bbox, transform_loops

TP = '/Users/Abhi/Developer/CSP/brand/tools/textpath.mjs'
PAPER, INK, RED = '#F6EEDD', '#221F1D', '#CB3932'


@functools.lru_cache(None)
def text(font, size, s, x=0, y=0, ls=0):
    r = subprocess.run(['node', TP, font, str(size), s, '--x', str(x), '--y', str(y), '--ls', str(ls)],
                       capture_output=True, text=True, check=True)
    return json.loads(r.stdout)


def svg(parts, pad=None, pad_frac=0.07, box=None):
    """parts: list of (d, fill, bbox(x0,y0,x1,y1), evenodd). Even padding on all four sides."""
    if box is None:
        x0 = min(p[2][0] for p in parts); y0 = min(p[2][1] for p in parts)
        x1 = max(p[2][2] for p in parts); y1 = max(p[2][3] for p in parts)
    else:
        x0, y0, x1, y1 = box
    if pad is None:
        pad = pad_frac * min(x1 - x0, y1 - y0)
    vb = [x0 - pad, y0 - pad, (x1 - x0) + 2 * pad, (y1 - y0) + 2 * pad]
    vb = ' '.join(f'{v:.1f}'.rstrip('0').rstrip('.') for v in vb)
    body = ''.join(f'<path fill="{f}"{" fill-rule=\"evenodd\"" if eo else ""} d="{d}"/>' for d, f, _, eo in parts)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}">{body}</svg>\n'


def tpart(t, fill):
    b = t['bbox']
    return (t['d'], fill, (b['x1'], b['y1'], b['x2'], b['y2']), False)


def mpart(loops, fill):
    return (curves_to_d(loops), fill, loops_bbox(loops), True)
