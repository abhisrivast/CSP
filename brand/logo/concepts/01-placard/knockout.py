"""Boolean difference for flat logo geometry without a geometry library.

difference(solids, holes) rasterises (solid union) minus (hole union) at `res` px per unit with
4x supersampling, traces the 0.5 iso-line with marching squares (linear interpolation), and
returns closed rings ready for one evenodd <path>. Used for one-ink knock-out versions where
overlapping marker strokes make a plain winding-rule cut-out impossible.
"""
import numpy as np

from marker import simplify_closed


def _fill_nonzero(mask, P, value):
    """Scanline fill of polygon P (pixel coords) into mask with the NONZERO rule
    (PIL's polygon fill is even-odd, which punches holes where a stroke outline overlaps itself)."""
    H, W = mask.shape
    A = np.asarray(P, float); B = np.roll(A, -1, 0)
    y0, y1 = A[:, 1], B[:, 1]
    dirs = np.where(y1 > y0, 1, -1)
    ymin, ymax = np.minimum(y0, y1), np.maximum(y0, y1)
    r0 = np.ceil(ymin - 0.5).astype(int)
    r1 = np.ceil(ymax - 0.5).astype(int)
    cnt = np.maximum(r1 - r0, 0)
    keep = cnt > 0
    if not keep.any():
        return
    e = np.repeat(np.nonzero(keep)[0], cnt[keep])
    starts = np.repeat(np.cumsum(cnt[keep]) - cnt[keep], cnt[keep])
    rows = np.repeat(r0[keep], cnt[keep]) + (np.arange(len(e)) - starts)
    yc = rows + 0.5
    t = (yc - y0[e]) / (y1[e] - y0[e])
    xc = A[e, 0] + t * (B[e, 0] - A[e, 0])
    d = dirs[e]
    o = np.lexsort((xc, rows))
    rows, xc, d = rows[o], xc[o], d[o]
    w = np.cumsum(d)
    ins = (w[:-1] != 0) & (rows[:-1] == rows[1:])
    rr = rows[:-1][ins]
    rlo, rhi = max(int(rr.min()), 0) if len(rr) else 0, min(int(rr.max()) + 1, H) if len(rr) else 0
    if rhi <= rlo:
        return
    c0 = np.clip(np.ceil(xc[:-1][ins] - 0.5).astype(int), 0, W)
    c1 = np.clip(np.ceil(xc[1:][ins] - 0.5).astype(int), 0, W)
    clo, chi = int(c0.min()), int(c1.max())
    ok = (rr >= rlo) & (rr < rhi)
    diff = np.zeros((rhi - rlo, chi - clo + 1), np.int32)
    np.add.at(diff, (rr[ok] - rlo, c0[ok] - clo), 1)
    np.add.at(diff, (rr[ok] - rlo, c1[ok] - clo), -1)
    cover = np.cumsum(diff, axis=1)[:, :chi - clo] > 0
    sub = mask[rlo:rhi, clo:chi]
    sub[cover] = value


def _raster(solids, holes, res, ss=4, pad=6):
    allp = np.concatenate(solids)
    lo = allp.min(0) - pad / res
    hi = allp.max(0) + pad / res
    W = int(np.ceil((hi[0] - lo[0]) * res)) + 1
    H = int(np.ceil((hi[1] - lo[1]) * res)) + 1
    mask = np.zeros((H * ss, W * ss), np.uint8)
    for p in solids:
        _fill_nonzero(mask, (p - lo) * res * ss, 1)
    for p in holes:
        _fill_nonzero(mask, (p - lo) * res * ss, 0)
    F = mask.reshape(H, ss, W, ss).mean(axis=(1, 3))
    return F, lo


# segments per marching-squares case; edges: T, R, B, L
_CASES = {1: [('L', 'B')], 2: [('B', 'R')], 3: [('L', 'R')], 4: [('T', 'R')], 6: [('T', 'B')],
          7: [('L', 'T')], 8: [('L', 'T')], 9: [('T', 'B')], 11: [('T', 'R')], 12: [('L', 'R')],
          13: [('B', 'R')], 14: [('L', 'B')]}


def _trace(F, level=0.5):
    tl = F[:-1, :-1] > level; tr = F[:-1, 1:] > level
    br = F[1:, 1:] > level; bl = F[1:, :-1] > level
    case = tl * 8 + tr * 4 + br * 2 + bl * 1
    ii, jj = np.nonzero((case != 0) & (case != 15))

    def key(e, i, j):
        return {'T': ('h', i, j), 'B': ('h', i + 1, j), 'L': ('v', i, j), 'R': ('v', i, j + 1)}[e]

    segs = []
    for i, j in zip(ii.tolist(), jj.tolist()):
        c = int(case[i, j])
        if c in (5, 10):
            centre = F[i:i + 2, j:j + 2].mean() > level
            if c == 5:
                pairs = [('L', 'T'), ('B', 'R')] if centre else [('T', 'R'), ('L', 'B')]
            else:
                pairs = [('T', 'R'), ('L', 'B')] if centre else [('L', 'T'), ('B', 'R')]
        else:
            pairs = _CASES[c]
        for a, b in pairs:
            segs.append((key(a, i, j), key(b, i, j)))

    adj = {}
    for n, (a, b) in enumerate(segs):
        adj.setdefault(a, []).append(n)
        adj.setdefault(b, []).append(n)

    def pos(k):
        kind, i, j = k
        if kind == 'h':
            v0, v1 = F[i, j], F[i, j + 1]
            t = (level - v0) / (v1 - v0)
            return (j + t, i)
        v0, v1 = F[i, j], F[i + 1, j]
        t = (level - v0) / (v1 - v0)
        return (j, i + t)

    used = np.zeros(len(segs), bool)
    rings = []
    for s0 in range(len(segs)):
        if used[s0]:
            continue
        used[s0] = True
        start, cur = segs[s0]
        ring = [start]
        while cur != start:
            ring.append(cur)
            nxt = [n for n in adj[cur] if not used[n]]
            if not nxt:
                break
            n = nxt[0]
            used[n] = True
            a, b = segs[n]
            cur = b if a == cur else a
        if len(ring) > 3:
            rings.append(np.array([pos(k) for k in ring], float))
    return rings


def difference(solids, holes, res=2.5, eps=0.12, min_area=4.0):
    F, lo = _raster(solids, holes, res)
    out = []
    for r in _trace(F):
        q = (r + 0.5) / res + lo
        a = 0.5 * abs(np.sum(q[:, 0] * np.roll(q[:, 1], -1) - np.roll(q[:, 0], -1) * q[:, 1]))
        if a < min_area:
            continue
        out.append(simplify_closed(q, eps))
    return out
