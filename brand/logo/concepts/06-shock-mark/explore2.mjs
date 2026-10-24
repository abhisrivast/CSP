// Lockup exploration: renders candidate lockups one under another.
import { execFileSync } from 'node:child_process';
import { horizontal, stacked3, stacked2, horizontalPlate, twoLine, twoTier } from './lockups.mjs';
import { C, P, svgDoc, padBox, write, TOOLS } from './lib.mjs';

const dir = new URL('./work/', import.meta.url).pathname;
const knife = { D: 33, stroke: 8.2, topCut: 8, barBridge: { at: 0.3, angle: 8 } };
const clean = { D: 33, stroke: 8.2, barBridge: { at: 0.3 } };
const col = { mark: C.red, word: C.ink, accent: C.red };
const tests = {
  hp1: horizontalPlate({ markOpts: knife }),
  hp2: horizontalPlate({ markOpts: knife, shockRed: false, ratio: 0.78 }),
  tl: twoLine({ markOpts: knife }),
  tt: twoTier({ markOpts: knife }),
};
const files = [];
for (const [k, L] of Object.entries(tests)) {
  const pad = Math.min(L.bbox.w, L.bbox.h) * 0.12;
  const f = `${dir}L_${k}.svg`;
  write(f, svgDoc(padBox(L.bbox, pad), L.items.map(i => (i.evenodd ? P(i.d, col[i.role]).replace('<path ', '<path fill-rule="evenodd" ') : P(i.d, col[i.role]))).join('\n')));
  execFileSync('node', [`${TOOLS}/render.mjs`, f, `${dir}L_${k}.png`, '--width', '900'], { stdio: 'inherit' });
  files.push(`${dir}L_${k}.png`);
}
execFileSync('magick', [...files, '-append', `${dir}L_h.png`]);
