// Iteration 2: primary lockup typesetting variants.
import { execFileSync } from 'node:child_process';
import { primary, MARK } from './build.mjs';
import { placeMark, word, WORD_FONT, CAP } from './lockups.mjs';
import { C, tp, bbox, svgDoc, padBox, write, TOOLS } from './lib.mjs';
const dir = new URL('./work/', import.meta.url).pathname;
const col = { mark: C.red, word: C.ink, accent: C.red };
// kicker: small tracked CULTURAL over big SHOCK PARTY, same measure
function kicker({ size = 100, ls = 0.02, kls = 0.3, lead = 0.2, gapK = 0.3, accent = 'SHOCK' } = {}) {
  const cap = size * CAP; const l2 = word('SHOCK PARTY', size, { ls });
  // find kicker size so tracked CULTURAL matches l2 width
  let ks = 60; for (let k = 0; k < 30; k++) { const w = word('CULTURAL', ks, { ls: kls }).bbox.w; ks *= l2.bbox.w / w; }
  const kcap = ks * CAP, H = kcap + cap * lead + cap;
  const mk = placeMark(MARK, { x: 0, baseline: H, h: H, overshoot: H * 0.006 });
  const items = mk.pieces.map(d => ({ d, role: 'mark' }));
  const gx = mk.bbox.x2 + cap * gapK;
  const k0 = word('CULTURAL', ks, { ls: kls });
  items.push({ d: word('CULTURAL', ks, { ls: kls, x: gx - k0.bbox.x1, y: kcap }).d, role: 'word' });
  let x = gx - l2.bbox.x1;
  for (const w of ['SHOCK', 'PARTY']) { items.push({ d: word(w, size, { ls, x, y: H }).d, role: w === accent ? 'accent' : 'word' }); x += tp(WORD_FONT, size, w + ' ', { ls }).advance + ls * size; }
  return { items, bbox: bbox(items.map(i => i.d)), cap };
}
const V = {
  a_justified: primary(),
  b_ragged: primary({ justify: false }),
  c_kicker: kicker(),
  d_justified_ink: primary({ accent: null }),
};
const files = [];
for (const [k, L] of Object.entries(V)) {
  const f = `${dir}P_${k}.svg`;
  write(f, svgDoc(padBox(L.bbox, L.cap * 0.42), L.items.map(i => `  <path fill="${col[i.role]}" d="${i.d}"/>`).join('\n')));
  files.push(f);
}
execFileSync('node', [`${TOOLS}/render.mjs`, files.slice(0, 2).join(','), `${dir}P_grid1.png`, '--grid']);
execFileSync('node', [`${TOOLS}/render.mjs`, files.slice(2).join(','), `${dir}P_grid2.png`, '--grid']);
execFileSync('magick', [`${dir}P_grid1.png`, `${dir}P_grid2.png`, '-append', `${dir}P_grid.png`]);
