// The Shock Mark: an exclamation mark whose bar is a tapered stencil wedge and whose dot is a
// bridged ring (the circle of the Venus sign). Built analytically — every piece is a stencil island.
//
// v2 (after critique): the wedge tapers to ~30% of its top width and ends in a rounded tip (a classic
// '!' wedge, not a tumbler/cup), its top edge is cut on a slant, the ring is no wider than the wedge's
// top, and the ring bridges sit on the snap-cut axis instead of 12/6 o'clock (no power-symbol reading).
import { stencilRing, poly, clipHalf, bbox } from './lib.mjs';

export const DEFAULT = {
  H: 100,          // overall height
  wt: 27, wb: 17,  // bar width at top / (virtual, unrounded) bottom
  tipR: 0,         // fillet radius at the two bottom corners of the bar (0 = sharp)
  gap: 9,          // bar–ring gap
  D: 31, stroke: 9.5, // ring outer diameter, ring stroke
  lean: 0,         // degrees of italic shear (top moves right)
  topCut: 0,       // degrees: slope of the bar's top edge (rises to the right)
  g: 3.6,          // stencil bridge width (bar cut and ring bridges)
  barBridge: null, // {at: 0..1 from top, angle: deg} or null
  ringBridges: [270, 90], // degrees, SVG convention, measured before lean (270 = up)
  ringDx: 0,       // nudge ring horizontally
};

// Round one corner of a polygon (points list) with radius r; returns the replacement points.
function filletCorner(prev, p, next, r, n = 10) {
  const u1 = norm([prev[0] - p[0], prev[1] - p[1]]), u2 = norm([next[0] - p[0], next[1] - p[1]]);
  const cosT = u1[0] * u2[0] + u1[1] * u2[1];
  const theta = Math.acos(Math.max(-1, Math.min(1, cosT)));          // interior angle
  const t = r / Math.tan(theta / 2);                                    // tangent distance
  const a = [p[0] + u1[0] * t, p[1] + u1[1] * t], b = [p[0] + u2[0] * t, p[1] + u2[1] * t];
  const bis = norm([u1[0] + u2[0], u1[1] + u2[1]]);
  const dc = r / Math.sin(theta / 2);
  const c = [p[0] + bis[0] * dc, p[1] + bis[1] * dc];
  let a0 = Math.atan2(a[1] - c[1], a[0] - c[0]), a1 = Math.atan2(b[1] - c[1], b[0] - c[0]);
  let da = a1 - a0; while (da > Math.PI) da -= 2 * Math.PI; while (da < -Math.PI) da += 2 * Math.PI;
  const out = [];
  for (let k = 0; k <= n; k++) { const q = a0 + da * k / n; out.push([c[0] + r * Math.cos(q), c[1] + r * Math.sin(q)]); }
  return out;
}
const norm = ([x, y]) => { const l = Math.hypot(x, y) || 1; return [x / l, y / l]; };

export function bang(o = {}) {
  o = { ...DEFAULT, ...o };
  const R = o.D / 2, r = R - o.stroke;
  const hb = o.H - o.gap - o.D;           // bar height
  const yc = o.H - R;                      // ring centre
  const s = (o.wt / 2) * Math.tan(o.topCut * Math.PI / 180);
  let bar = [[-o.wt / 2, s], [o.wt / 2, -s], [o.wb / 2, hb], [-o.wb / 2, hb]];
  // keep the highest point of the bar at y = 0
  const top = Math.min(s, -s); bar = bar.map(([x, y], i) => [x, i < 2 ? y - top : y]);
  if (o.tipR > 0) {
    const r2 = Math.min(o.tipR, o.wb / 2 - 0.01);
    const br = filletCorner(bar[1], bar[2], bar[3], r2), bl = filletCorner(bar[2], bar[3], bar[0], r2);
    bar = [bar[0], bar[1], ...br, ...bl];
  }
  // stencil bridge across the bar
  let barPieces = [bar];
  if (o.barBridge) {
    const { at, angle = 0 } = o.barBridge, phi = angle * Math.PI / 180;
    const n = [-Math.sin(phi), Math.cos(phi)], c0 = [0, hb * at];
    const k = n[0] * c0[0] + n[1] * c0[1];
    barPieces = [clipHalf(bar, n, k - o.g / 2), clipHalf(bar, [-n[0], -n[1]], -(k + o.g / 2))];
  }
  const tl = Math.tan(o.lean * Math.PI / 180);
  const shear = ([x, y]) => [x + (yc - y) * tl, y];
  const barD = barPieces.map(p => poly(p.map(shear)));
  const ringD = stencilRing(o.ringDx, yc, R, r, o.ringBridges.map(a => a + o.lean), o.g);
  const pieces = [...barD, ...ringD];
  return { pieces, bar: barD, ring: ringD, bbox: bbox(pieces), o: { ...o, R, r, hb, yc } };
}
