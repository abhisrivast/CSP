// Iteration 3a: ring size vs line grid in the primary lockup.
import { execFileSync } from 'node:child_process';
import { primary, MARK, toSvg } from './build.mjs';
import { write, TOOLS } from './lib.mjs';
const dir = new URL('./work/', import.meta.url).pathname;
const H = 2.16; // mark height in caps
const V = {
  r33: primary({ justify: false }),
  r40: primary({ justify: false, markOpts: { ...MARK, D: 40, stroke: 9.6, wt: 29, wb: 17 } }),
  r46: primary({ justify: false, markOpts: { ...MARK, D: 100 / H, stroke: 10.4, wt: 30, wb: 17, gap: 100 * 0.16 / H } }),
  r33_tight: primary({ justify: false, gapK: 0.24, lead: 0.15 }),
};
const files = [];
for (const [k, L] of Object.entries(V)) { const f = `${dir}R_${k}.svg`; write(f, toSvg(L, 'colour', { pad: L.cap * 0.42 })); files.push(f); }
execFileSync('node', [`${TOOLS}/render.mjs`, files.slice(0, 2).join(','), `${dir}R_1.png`, '--grid']);
execFileSync('node', [`${TOOLS}/render.mjs`, files.slice(2).join(','), `${dir}R_2.png`, '--grid']);
execFileSync('magick', [`${dir}R_1.png`, `${dir}R_2.png`, '-append', `${dir}R_grid.png`]);
