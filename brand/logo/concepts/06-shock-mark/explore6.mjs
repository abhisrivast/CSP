// v2 mark exploration: wedge taper / tip / top cut / ring size / bridge orientation.
import { execFileSync } from 'node:child_process';
import { bang } from './mark.mjs';
import { C, svgDoc, padBox, write, TOOLS } from './lib.mjs';
const W = new URL('./work/r2/', import.meta.url).pathname;
const base = { H: 100, wt: 28, wb: 9, tipR: 3.6, gap: 7.6, D: 27, stroke: 8.2, g: 4.4, topCut: 9, barBridge: { at: 0.6, angle: -24 } };
const V = {
  l_39_70: { ...base, stroke: 7.0, ringBridges: [0, 180] },
  m_low_60_120: { ...base, stroke: 7.4, ringBridges: [55, 125] },
  n_one_snap70: { ...base, stroke: 7.0, ringBridges: [-24] },
  o_39_76_g4: { ...base, stroke: 7.6, g: 4.0, ringBridges: [0, 180] },
  p_one_bottom: { ...base, stroke: 7.4, ringBridges: [90] },
  q_snap_up_only: { ...base, stroke: 7.4, ringBridges: [-24, 204] },
};
const files = [];
for (const [k, o] of Object.entries(V)) {
  const m = bang(o);
  const body = m.pieces.map(d => `  <path fill="${C.red}" d="${d}"/>`).join('\n');
  write(W + `m_${k}.svg`, svgDoc(padBox(m.bbox, 7, { square: true }), body));
  files.push(W + `m_${k}.svg`);
}
execFileSync('node', [`${TOOLS}/render.mjs`, files.join(','), W + 'm_grid3.png', '--grid']);
