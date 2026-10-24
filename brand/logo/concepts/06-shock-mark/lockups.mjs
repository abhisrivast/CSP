// Lockup builders. Each returns { items: [{d, role}], bbox } where role is 'mark' | 'word' | 'accent'.
import { bang } from './mark.mjs';
import { tp, xform, T, S, mul, bbox } from './lib.mjs';

export const WORD_FONT = 'BigShouldersStencilDisplay-900';
export const CAP = 0.8; // cap height / em for Big Shoulders

// Place a mark so its total height is h and its ring bottom sits at baseline y (x = left edge).
export function placeMark(markOpts, { x, baseline, h, overshoot = 0 }) {
  const m = bang(markOpts);
  const s = (h + overshoot) / m.o.H;
  const mx = mul(T(x - m.bbox.x1 * s, baseline + overshoot - m.o.H * s), S(s));
  const pieces = m.pieces.map(d => xform(d, mx));
  return { pieces, bbox: bbox(pieces), m, s };
}

export function word(text, size, { x = 0, y = 0, ls = 0.02, font = WORD_FONT } = {}) {
  const j = tp(font, size, text, { x, y, ls });
  return j;
}

// L1 — horizontal, one line: mark + CULTURAL SHOCK PARTY
export function horizontal({ markOpts, size = 100, markScale = 1.0, gapK = 0.34, ls = 0.02, shockRed = false } = {}) {
  const cap = size * CAP;
  const mh = cap * markScale;
  const mk = placeMark(markOpts, { x: 0, baseline: 0, h: mh, overshoot: cap * 0.012 });
  const gx = mk.bbox.x2 + cap * gapK;
  const items = mk.pieces.map(d => ({ d, role: 'mark' }));
  if (shockRed) {
    const a = word('CULTURAL ', size, { ls }), b = word('SHOCK', size, { ls }), c = word(' PARTY', size, { ls });
    const w1 = tp(WORD_FONT, size, 'CULTURAL ', { ls }).advance + ls * size;
    const x1 = gx - a.bbox.x1;
    items.push({ d: word('CULTURAL', size, { x: x1, ls }).d, role: 'word' });
    const xs = x1 + w1; items.push({ d: word('SHOCK', size, { x: xs, ls }).d, role: 'accent' });
    const w2 = tp(WORD_FONT, size, 'SHOCK ', { ls }).advance + ls * size;
    items.push({ d: word('PARTY', size, { x: xs + w2, ls }).d, role: 'word' });
  } else {
    const w0 = word('CULTURAL SHOCK PARTY', size, { ls });
    items.push({ d: word('CULTURAL SHOCK PARTY', size, { x: gx - w0.bbox.x1, ls }).d, role: 'word' });
  }
  return { items, bbox: bbox(items.map(i => i.d)) };
}

// L2 — stacked, three justified lines with a tall mark at left.
export function stacked3({ markOpts, width = 600, gapK = 0.08, lead = 0.075, ls = 0.02, accent = 'SHOCK' } = {}) {
  const lines = ['CULTURAL', 'SHOCK', 'PARTY'];
  // size each line so its ink width equals `width`
  const sized = lines.map(t => { const j = word(t, 100, { ls }); const sz = 100 * width / j.bbox.w; return { t, sz }; });
  let y = 0; const items = []; const rows = [];
  sized.forEach(({ t, sz }, i) => {
    const cap = sz * CAP; y += cap; const j = word(t, sz, { ls, y });
    rows.push({ t, j, y, cap }); y += width * lead;
  });
  const totalH = rows[rows.length - 1].y;
  const mk = placeMark(markOpts, { x: 0, baseline: totalH, h: totalH, overshoot: totalH * 0.006 });
  items.push(...mk.pieces.map(d => ({ d, role: 'mark' })));
  const gx = mk.bbox.x2 + width * gapK;
  rows.forEach(({ t, j, y }) => {
    const sz = sized.find(s => s.t === t).sz;
    const jj = word(t, sz, { ls, y, x: gx - j.bbox.x1 });
    items.push({ d: jj.d, role: t === accent ? 'accent' : 'word' });
  });
  return { items, bbox: bbox(items.map(i => i.d)) };
}

// L3 — two lines: CULTURAL SHOCK / PARTY (justified), mark spans both
export function stacked2({ markOpts, width = 600, gapK = 0.07, lead = 0.06, ls = 0.02, accent = null } = {}) {
  const lines = ['CULTURAL SHOCK', 'PARTY'];
  const sized = lines.map(t => { const j = word(t, 100, { ls }); return { t, sz: 100 * width / j.bbox.w }; });
  let y = 0; const rows = [];
  sized.forEach(({ t, sz }) => { const cap = sz * CAP; y += cap; rows.push({ t, sz, y }); y += width * lead; });
  const totalH = rows[rows.length - 1].y;
  const mk = placeMark(markOpts, { x: 0, baseline: totalH, h: totalH, overshoot: totalH * 0.006 });
  const items = mk.pieces.map(d => ({ d, role: 'mark' }));
  const gx = mk.bbox.x2 + width * gapK;
  rows.forEach(({ t, sz, y }) => {
    const j0 = word(t, sz, { ls, y });
    items.push({ d: word(t, sz, { ls, y, x: gx - j0.bbox.x1 }).d, role: t === accent ? 'accent' : 'word' });
  });
  return { items, bbox: bbox(items.map(i => i.d)) };
}

// Stencil plate: a rectangle with the mark cut out of it (evenodd). Height h, width = h*ratio.
// x = left, y = top. The cut "!" is centred, `inset` = fraction of h left above/below the mark.
export function plate(markOpts, { x = 0, y = 0, h = 100, ratio = 1, inset = 0.12, rx = 0 } = {}) {
  const w = h * ratio;
  const mh = h * (1 - 2 * inset);
  const m = bang(markOpts);
  const s = mh / m.o.H;
  const cx = x + w / 2 - ((m.bbox.x1 + m.bbox.x2) / 2) * s, cy = y + h * inset;
  const holes = m.pieces.map(d => xform(d, mul(T(cx, cy), S(s))));
  const r = `M${x} ${y}H${x + w}V${y + h}H${x}Z`;
  return { d: r + holes.join(''), bbox: { x1: x, y1: y, x2: x + w, y2: y + h, w, h }, holes };
}

// Horizontal with a plate symbol at cap height.
export function horizontalPlate({ markOpts, size = 100, gapK = 0.3, ls = 0.02, ratio = 1, plateK = 1, shockRed = false } = {}) {
  const cap = size * CAP, ph = cap * plateK;
  const pl = plate(markOpts, { x: 0, y: -ph + (ph - cap) / 2 * 0, h: ph, ratio });
  const items = [{ d: pl.d, role: 'mark', evenodd: true }];
  const gx = pl.bbox.x2 + cap * gapK;
  const yb = (ph - cap) / 2; // centre text on plate
  const add = (t, x, role) => { const j0 = word(t, size, { ls }); items.push({ d: word(t, size, { ls, x: x - j0.bbox.x1, y: -yb }).d, role }); return x - j0.bbox.x1; };
  if (shockRed) {
    const x0 = add('CULTURAL', gx, 'word');
    const xs = x0 + tp(WORD_FONT, size, 'CULTURAL ', { ls }).advance + ls * size;
    items.push({ d: word('SHOCK', size, { ls, x: xs, y: -yb }).d, role: 'accent' });
    const xp = xs + tp(WORD_FONT, size, 'SHOCK ', { ls }).advance + ls * size;
    items.push({ d: word('PARTY', size, { ls, x: xp, y: -yb }).d, role: 'word' });
  } else add('CULTURAL SHOCK PARTY', gx, 'word');
  return { items, bbox: bbox(items.map(i => i.d)) };
}

// Two ragged lines (CULTURAL / SHOCK PARTY) beside a tall positive mark.
export function twoLine({ markOpts, size = 100, gapK = 0.3, lead = 0.16, ls = 0.02, lines = ['CULTURAL', 'SHOCK PARTY'], accent = 'SHOCK' } = {}) {
  const cap = size * CAP, H = cap * 2 + cap * lead;
  const mk = placeMark(markOpts, { x: 0, baseline: H, h: H, overshoot: H * 0.006 });
  const items = mk.pieces.map(d => ({ d, role: 'mark' }));
  const gx = mk.bbox.x2 + cap * gapK;
  lines.forEach((t, i) => {
    const y = cap + i * (cap + cap * lead);
    let x = gx - word(t, size, { ls }).bbox.x1;
    for (const w of t.split(' ')) {
      items.push({ d: word(w, size, { ls, x, y }).d, role: w === accent ? 'accent' : 'word' });
      x += tp(WORD_FONT, size, w + ' ', { ls }).advance + ls * size;
    }
  });
  return { items, bbox: bbox(items.map(i => i.d)) };
}

// Two tiers: CULTURAL small + tracked over SHOCK PARTY big; tall positive mark spans both.
export function twoTier({ markOpts, size = 100, gapK = 0.28, lead = 0.17, ls = 0.02, topLs = 0.16, accent = 'SHOCK' } = {}) {
  const cap = size * CAP;
  const big = word('SHOCK PARTY', size, { ls });
  // size the top line so its ink width matches the big line
  const t0 = word('CULTURAL', 100, { ls: topLs });
  const ts = 100 * big.bbox.w / t0.bbox.w; const tcap = ts * CAP;
  const H = tcap + cap * lead + cap;
  const mk = placeMark(markOpts, { x: 0, baseline: H, h: H, overshoot: H * 0.006 });
  const items = mk.pieces.map(d => ({ d, role: 'mark' }));
  const gx = mk.bbox.x2 + cap * gapK;
  const tj = word('CULTURAL', ts, { ls: topLs });
  items.push({ d: word('CULTURAL', ts, { ls: topLs, x: gx - tj.bbox.x1, y: tcap }).d, role: 'word' });
  let x = gx - big.bbox.x1;
  for (const w of ['SHOCK', 'PARTY']) {
    items.push({ d: word(w, size, { ls, x, y: H }).d, role: w === accent ? 'accent' : 'word' });
    x += tp(WORD_FONT, size, w + ' ', { ls }).advance + ls * size;
  }
  return { items, bbox: bbox(items.map(i => i.d)) };
}
