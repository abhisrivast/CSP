import { execFileSync } from 'node:child_process';
import { primary, toSvg, MARK, plate } from './build.mjs';
import { write, TOOLS } from './lib.mjs';
const W = new URL('./work/r2/', import.meta.url).pathname;
const V = {
  nick: MARK,
  nick8: { ...MARK, ringBridges: [156] },
  o39: { ...MARK, stroke: 6.6, g: 4.0, ringBridges: [0, 180] },
  o39b: { ...MARK, stroke: 7.2, g: 4.4, ringBridges: [0, 180] },
  nick1: { ...MARK, ringBridges: [-60] },
};
const f = [], g = [];
for (const [n, m] of Object.entries(V)) {
  const P = primary({ markOpts: m });
  write(W + `p_${n}.svg`, toSvg(P, 'colour', { pad: P.cap * 0.42 })); f.push(W + `p_${n}.svg`);
  write(W + `pl_${n}.svg`, toSvg(plate(m), 'colour', { pad: 0 })); g.push(W + `pl_${n}.svg`);
}
execFileSync('node', [`${TOOLS}/render.mjs`, f.join(','), W + 'p_grid.png', '--grid']);
execFileSync('node', [`${TOOLS}/render.mjs`, g.join(','), W + 'pl_grid.png', '--grid']);
