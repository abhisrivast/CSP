// Iteration sandbox: renders mark variants side by side.
import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { bang } from './mark.mjs';
import { C, P, svgDoc, padBox, write, TOOLS } from './lib.mjs';

const dir = new URL('./work/', import.meta.url).pathname; mkdirSync(dir, { recursive: true });
const base = { D: 33, stroke: 8.2 };
const variants = {
  M1_diagUp: { ...base, barBridge: { at: 0.6, angle: -24 } },
  M2_diagDown: { ...base, barBridge: { at: 0.6, angle: 24 } },
  M3_plain: { ...base, wt: 26, wb: 18 },
  M5_straight: { ...base, wt: 22, wb: 22, barBridge: { at: 0.6, angle: -24 } },
  M6_diagUp_lo: { ...base, wt: 28, wb: 16, barBridge: { at: 0.68, angle: -30 } },
  M7_flatlow: { ...base, barBridge: { at: 0.72, angle: 0 } },
};
const files = [];
for (const [k, v] of Object.entries(variants)) {
  const m = bang(v);
  const vb = padBox(m.bbox, 8, { square: true });
  const f = `${dir}v_${k}.svg`;
  write(f, svgDoc(vb, m.pieces.map(d => P(d, C.red)).join('\n')));
  files.push(f);
}
execFileSync('node', [`${TOOLS}/render.mjs`, files.join(','), `${dir}explore_marks.png`, '--grid'], { stdio: 'inherit' });
