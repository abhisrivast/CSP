// Shared helpers for concept 06 — The Shock Mark.
// Type is outlined by calling the brand toolkit's textpath.mjs; geometry is built analytically
// so every master SVG is plain filled <path> data.
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

export const TOOLS = '/Users/Abhi/Developer/CSP/brand/tools';
export const C = {
  paper: '#F6EEDD', ink: '#221F1D', red: '#CB3932', crimson: '#A9233A', plum: '#602048',
  green: '#36B024', blue: '#1F92B2', marigold: '#F1B362', card: '#B49073', cardDark: '#966C52',
};

const cache = new Map();
// Outline a line of text with textpath.mjs. Returns {d, bbox, advance, ...}.
export function tp(font, size, text, { x = 0, y = 0, ls = 0 } = {}) {
  const key = [font, size, text, x, y, ls].join('|');
  if (cache.has(key)) return cache.get(key);
  const out = execFileSync('node', [`${TOOLS}/textpath.mjs`, font, String(size), text,
    '--x', String(x), '--y', String(y), '--ls', String(ls)], { encoding: 'utf8' });
  const j = JSON.parse(out);
  cache.set(key, j);
  return j;
}

// ---------- path data parsing / transforming ----------
// Parses absolute path data (M L H V Q C A Z as emitted by opentype.js and by our own builders).
export function parse(d) {
  const toks = d.match(/[MLHVQCAZmlhvqcaz]|-?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?/g) || [];
  const segs = []; let i = 0, cmd = null;
  const n = () => Number(toks[i++]);
  const arity = { M: 2, L: 2, H: 1, V: 1, Q: 4, C: 6, A: 7, Z: 0 };
  while (i < toks.length) {
    if (/[A-Za-z]/.test(toks[i])) { cmd = toks[i++]; if (cmd !== cmd.toUpperCase()) throw new Error('relative cmd ' + cmd); }
    if (cmd === 'Z') { segs.push(['Z']); continue; }
    const a = []; for (let k = 0; k < arity[cmd]; k++) a.push(n());
    segs.push([cmd, ...a]);
    if (cmd === 'M') cmd = 'L';
  }
  return segs;
}
const f2 = v => { const s = (Math.round(v * 100) / 100).toFixed(2).replace(/\.?0+$/, ''); return s === '-0' ? '0' : s; };
export function serialize(segs) {
  return segs.map(([c, ...a]) => c + a.map(f2).join(' ')).join('');
}
// Affine transform [a b c d e f] (x' = a x + c y + e, y' = b x + d y + f). Arcs only under similarity.
export function xform(d, m) {
  const [a, b, c, dd, e, f] = m;
  const P = (x, y) => [a * x + c * y + e, b * x + dd * y + f];
  const sc = Math.sqrt(Math.abs(a * dd - b * c));
  const rot = Math.atan2(b, a) * 180 / Math.PI;
  let cur = [0, 0];
  const out = parse(d).map(s => {
    const [cmd, ...v] = s;
    if (cmd === 'Z') return s;
    if (cmd === 'H') { const p = P(v[0], cur[1]); cur = [v[0], cur[1]]; return ['L', ...p]; }
    if (cmd === 'V') { const p = P(cur[0], v[0]); cur = [cur[0], v[0]]; return ['L', ...p]; }
    if (cmd === 'A') { cur = [v[5], v[6]]; return ['A', v[0] * sc, v[1] * sc, v[2] + rot, v[3], v[4], ...P(v[5], v[6])]; }
    const pts = []; for (let k = 0; k < v.length; k += 2) pts.push(...P(v[k], v[k + 1]));
    cur = [v[v.length - 2], v[v.length - 1]];
    return [cmd, ...pts];
  });
  return serialize(out);
}
export const T = (dx, dy) => [1, 0, 0, 1, dx, dy];
export const S = (s, ox = 0, oy = 0) => [s, 0, 0, s, ox - s * ox, oy - s * oy];
export const R = (deg, ox = 0, oy = 0) => {
  const t = deg * Math.PI / 180, co = Math.cos(t), si = Math.sin(t);
  return [co, si, -si, co, ox - co * ox + si * oy, oy - si * ox - co * oy];
};
export const mul = (m1, m2) => { // m1 ∘ m2 (apply m2 first)
  const [a, b, c, d, e, f] = m1, [A, B, Cc, D, E, F] = m2;
  return [a * A + c * B, b * A + d * B, a * Cc + c * D, b * Cc + d * D, a * E + c * F + e, b * E + d * F + f];
};

// Approximate bbox of path data by sampling curves (good enough for padding).
export function bbox(ds) {
  let x1 = Infinity, y1 = Infinity, x2 = -Infinity, y2 = -Infinity;
  const add = (x, y) => { x1 = Math.min(x1, x); y1 = Math.min(y1, y); x2 = Math.max(x2, x); y2 = Math.max(y2, y); };
  for (const d of [].concat(ds)) {
    let cur = [0, 0], start = [0, 0];
    for (const [cmd, ...v] of parse(d)) {
      if (cmd === 'M') { cur = [v[0], v[1]]; start = cur; add(...cur); }
      else if (cmd === 'L') { cur = [v[0], v[1]]; add(...cur); }
      else if (cmd === 'Q') { for (let t = 0; t <= 1; t += 0.05) { const u = 1 - t; add(u * u * cur[0] + 2 * u * t * v[0] + t * t * v[2], u * u * cur[1] + 2 * u * t * v[1] + t * t * v[3]); } cur = [v[2], v[3]]; }
      else if (cmd === 'C') { for (let t = 0; t <= 1; t += 0.05) { const u = 1 - t; add(u ** 3 * cur[0] + 3 * u * u * t * v[0] + 3 * u * t * t * v[2] + t ** 3 * v[4], u ** 3 * cur[1] + 3 * u * u * t * v[1] + 3 * u * t * t * v[3] + t ** 3 * v[5]); } cur = [v[4], v[5]]; }
      else if (cmd === 'A') { // sample the arc through its centre parametrisation
        const pts = arcPoints(cur, v); pts.forEach(p => add(...p)); cur = [v[5], v[6]];
      } else if (cmd === 'Z') cur = start;
    }
  }
  return { x1, y1, x2, y2, w: x2 - x1, h: y2 - y1 };
}
function arcPoints([x0, y0], [rx, ry, , large, sweep, x, y]) {
  // circles only (rx == ry, no rotation) — that is all we emit.
  const r = rx, mx = (x0 + x) / 2, my = (y0 + y) / 2, dx = x - x0, dy = y - y0, q = Math.hypot(dx, dy);
  const h = Math.sqrt(Math.max(0, r * r - (q / 2) ** 2));
  const sgn = (large === sweep) ? -1 : 1;
  const cx = mx + sgn * h * (-dy / q), cy = my + sgn * h * (dx / q);
  let a0 = Math.atan2(y0 - cy, x0 - cx), a1 = Math.atan2(y - cy, x - cx);
  if (sweep && a1 < a0) a1 += 2 * Math.PI; if (!sweep && a1 > a0) a1 -= 2 * Math.PI;
  const pts = []; for (let k = 0; k <= 48; k++) { const t = a0 + (a1 - a0) * k / 48; pts.push([cx + r * Math.cos(t), cy + r * Math.sin(t)]); }
  return pts;
}

// ---------- geometry ----------
const pt = (cx, cy, r, a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
// Ring with constant-width stencil bridges. Angles in degrees, SVG convention (0 = +x, 90 = down).
export function stencilRing(cx, cy, R, r, bridges, g) {
  const angs = bridges.map(a => a * Math.PI / 180).sort((a, b) => a - b);
  if (!angs.length) return [`M${f2(cx + R)} ${f2(cy)}A${f2(R)} ${f2(R)} 0 1 1 ${f2(cx - R)} ${f2(cy)}A${f2(R)} ${f2(R)} 0 1 1 ${f2(cx + R)} ${f2(cy)}Z` +
    `M${f2(cx + r)} ${f2(cy)}A${f2(r)} ${f2(r)} 0 1 0 ${f2(cx - r)} ${f2(cy)}A${f2(r)} ${f2(r)} 0 1 0 ${f2(cx + r)} ${f2(cy)}Z`];
  const dO = Math.asin(g / 2 / R), dI = Math.asin(g / 2 / r);
  const pieces = [];
  for (let k = 0; k < angs.length; k++) {
    const a1 = angs[k], a2 = k + 1 < angs.length ? angs[k + 1] : angs[0] + 2 * Math.PI;
    const o1 = pt(cx, cy, R, a1 + dO), o2 = pt(cx, cy, R, a2 - dO);
    const i2 = pt(cx, cy, r, a2 - dI), i1 = pt(cx, cy, r, a1 + dI);
    const largeO = (a2 - dO) - (a1 + dO) > Math.PI ? 1 : 0, largeI = (a2 - dI) - (a1 + dI) > Math.PI ? 1 : 0;
    pieces.push(`M${f2(o1[0])} ${f2(o1[1])}A${f2(R)} ${f2(R)} 0 ${largeO} 1 ${f2(o2[0])} ${f2(o2[1])}L${f2(i2[0])} ${f2(i2[1])}` +
      `A${f2(r)} ${f2(r)} 0 ${largeI} 0 ${f2(i1[0])} ${f2(i1[1])}Z`);
  }
  return pieces;
}
export const poly = pts => 'M' + pts.map(p => f2(p[0]) + ' ' + f2(p[1])).join('L') + 'Z';
export const circle = (cx, cy, r) => stencilRing(cx, cy, r, 0.0001, [], 0)[0].split('Z')[0] + 'Z';

// Clip a convex polygon (list of points) by the half-plane n·p <= c.
export function clipHalf(pts, n, c) {
  const out = [];
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i], q = pts[(i + 1) % pts.length];
    const dp = n[0] * p[0] + n[1] * p[1] - c, dq = n[0] * q[0] + n[1] * q[1] - c;
    if (dp <= 0) out.push(p);
    if ((dp < 0 && dq > 0) || (dp > 0 && dq < 0)) { const t = dp / (dp - dq); out.push([p[0] + t * (q[0] - p[0]), p[1] + t * (q[1] - p[1])]); }
  }
  return out;
}

// ---------- SVG ----------
export function svgDoc(vb, body, { title = 'Cultural Shock Party' } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb.map(f2).join(' ')}" role="img" aria-label="${title}">\n  <title>${title}</title>\n${body}\n</svg>\n`;
}
export const P = (d, fill) => `  <path fill="${fill}" d="${d}"/>`;
// Even padding on all four sides (absolute units); square=true centres the art in a square box first.
export function padBox(b, pad, { square = false } = {}) {
  let { x1, y1, w, h } = b;
  if (square) { const s = Math.max(w, h); x1 -= (s - w) / 2; y1 -= (s - h) / 2; w = h = s; }
  return [x1 - pad, y1 - pad, w + 2 * pad, h + 2 * pad];
}
export const write = (file, s) => writeFileSync(file, s);
