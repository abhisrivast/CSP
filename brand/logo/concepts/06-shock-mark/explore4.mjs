// Iteration: seal variants.
import { execFileSync } from 'node:child_process';
import { seal, toSvg } from './build.mjs';
import { write, TOOLS } from './lib.mjs';
const dir = new URL('./work/', import.meta.url).pathname;
const V = {
  s4_ls17: seal({ ls: 0.17 }),
  s5_ls17_big: seal({ ls: 0.17, markH: 110, innerGap: 5 }),
  s6_ls2: seal({ ls: 0.2, textCap: 16.5, markH: 110 }),
};
const files = [];
for (const [k, L] of Object.entries(V)) {
  console.log(k, 'top', (L.spanTop * 57.3).toFixed(0), 'bot', (L.spanBot * 57.3).toFixed(0), 'gap', (L.gap * 57.3).toFixed(0));
  const f = `${dir}S_${k}.svg`; write(f, toSvg(L, 'colour', { pad: 12 })); files.push(f);
}
execFileSync('node', [`${TOOLS}/render.mjs`, files.join(','), `${dir}S_grid.png`, '--grid']);
