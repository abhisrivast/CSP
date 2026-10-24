// v2 one-line header lockup exploration.
import { execFileSync } from 'node:child_process';
import { bang } from './mark.mjs';
import { sword } from './type.mjs';
import { C, xform, T, S, mul, bbox, svgDoc, padBox, write, TOOLS } from './lib.mjs';
const W = new URL('./work/r2/', import.meta.url).pathname;
export const MK = { H: 100, wt: 28, wb: 9, tipR: 3.6, gap: 7.6, D: 27, stroke: 7.2, g: 4.4, topCut: 9, barBridge: { at: 0.6, angle: -24 }, ringBridges: [-24] };
const CAP = 0.8;
function line(words, size, x0, y, ls = 0.02) { // words: [[text, fill]]
  const out = []; let x = x0;
  const first = sword(words[0][0], size, { ls });
  x -= first.bbox.x1;
  for (const [t, fill] of words) { out.push({ d: sword(t, size, { x, y, ls }).d, fill }); x += sword(t + ' ', size, { ls }).advance + ls * size; }
  return out;
}
function oneLine({ k = 1, mode = 'bang', gapK = 0.3, markOpts = MK, dy = 0 }) {
  const size = 100, cap = size * CAP, items = [];
  const m = bang(markOpts);
  let x2;
  if (mode === 'bang') {
    const h = cap * k, s = h / m.o.H;
    const top = -cap / 2 - h / 2 + dy * cap;
    const M = mul(T(-m.bbox.x1 * s, top), S(s));
    m.pieces.forEach(d => items.push({ d: xform(d, M), fill: C.red }));
    x2 = (m.bbox.x2 - m.bbox.x1) * s;
  } else {
    const h = cap * k, inset = 0.13, s = h * (1 - 2 * inset) / m.o.H, top = -cap / 2 - h / 2;
    const cx = h / 2 - ((m.bbox.x1 + m.bbox.x2) / 2) * s;
    const holes = m.pieces.map(d => xform(d, mul(T(cx, top + h * inset), S(s))));
    items.push({ d: `M0 ${top}H${h}V${top + h}H0Z` + holes.join(''), fill: C.red, eo: true });
    x2 = h;
  }
  items.push(...line([['CULTURAL', C.ink], ['SHOCK', C.red], ['PARTY', C.ink]], size, x2 + cap * gapK, 0));
  return items;
}
const V = { b10: { k: 1.0 }, b125: { k: 1.25 }, b14: { k: 1.4, gapK: 0.32 }, p10: { k: 1.0, mode: 'plate', gapK: 0.25 }, p13: { k: 1.3, mode: 'plate', gapK: 0.25 } };
const files = [];
for (const [n, o] of Object.entries(V)) {
  const items = oneLine(o);
  const b = bbox(items.map(i => i.d));
  const body = items.map(i => `  <path${i.eo ? ' fill-rule="evenodd"' : ''} fill="${i.fill}" d="${i.d}"/>`).join('\n');
  write(W + `h_${n}.svg`, svgDoc(padBox(b, b.h * 0.12), body));
  files.push(W + `h_${n}.svg`);
}
for (const f of files) execFileSync('node', [`${TOOLS}/render.mjs`, f, f.replace('.svg', '-sheet.png'), '--sheet']);
