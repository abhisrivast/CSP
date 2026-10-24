// Builds every deliverable for concept 06 — The Shock Mark — and renders it.   (v2, after critique)
//   node build.mjs            # SVGs + renders
//   node build.mjs --no-render
//
// v2 changes: classic '!' wedge (tapered to ~32% of its top, rounded tip, slanted top cut) instead of
// the tumbler-like trapezoid; ring no wider than the wedge top and bridged at 3/9 o'clock (no gap under
// the bar, so no power-symbol reading); bridges widened to 4.2 units on a 27-unit ring; redrawn stencil L and
// K (no more 'CUI.TURAI.' / 'I<'); plate is now the official mark (mark.svg); new one-line header
// lockup; new formal descriptor lockup; seal carries the name only (no unapproved tagline).
import { execFileSync } from 'node:child_process';
import { unlinkSync, existsSync } from 'node:fs';
import { bang } from './mark.mjs';
import { sword } from './type.mjs';
import { C, tp, parse, serialize, xform, T, S, mul, bbox, stencilRing, svgDoc, padBox, write, TOOLS } from './lib.mjs';

const OUT = new URL('./', import.meta.url).pathname;
const render = !process.argv.includes('--no-render');
export const CAP = 0.8;          // cap height / em for Big Shoulders
const NAME = 'Cultural Shock Party';

// ---------------- the mark ----------------
export const MARK = {
  H: 100, wt: 28, wb: 9, tipR: 3.6, topCut: 9,          // wedge: 28 -> 9 wide, rounded tip, 9° top cut
  gap: 7.6, D: 27, stroke: 7.0,                          // ring: 0.96x the wedge top, gap -15%
  g: 4.2,                                                // bridge width (bar cut and ring bridges)
  barBridge: { at: 0.6, angle: -24 },                    // the rising snap cut
  ringBridges: [0, 180],                                 // 3 and 9 o'clock: never a gap under the bar
};

// Place the mark so its total height is h, top at y = top, left edge at x.
export function placeMark(markOpts, { x = 0, top = 0, h }) {
  const m = bang(markOpts);
  const s = h / m.o.H;
  const M = mul(T(x - m.bbox.x1 * s, top - m.bbox.y1 * s), S(s));
  const pieces = m.pieces.map(d => xform(d, M));
  return { pieces, bbox: bbox(pieces), s };
}

// Set words on one baseline; words: [[text, role]]. x0 = left ink edge of the first word.
function setLine(words, size, x0, y, ls) {
  const items = [];
  let x = x0 - sword(words[0][0], size, { ls }).bbox.x1;
  for (const [t, role] of words) {
    items.push({ d: sword(t, size, { x, y, ls }).d, role });
    x += sword(t + ' ', size, { ls }).advance + ls * size;
  }
  return items;
}

// ---------------- primary: mark + CULTURAL / SHOCK PARTY (two lines, ink over red) ----------------
export function primary({ size = 100, ls = 0.02, lead = 0.15, gapK = 0.27, markOpts = MARK } = {}) {
  const cap = size * CAP, H = cap * 2 + cap * lead;
  const mk = placeMark(markOpts, { x: 0, top: -H * 0.004, h: H * 1.006 });
  const items = mk.pieces.map(d => ({ d, role: 'mark' }));
  const gx = mk.bbox.x2 + cap * gapK;
  items.push(...setLine([['CULTURAL', 'word']], size, gx, cap, ls));
  items.push(...setLine([['SHOCK', 'accent'], ['PARTY', 'word']], size, gx, H, ls));
  return { items, bbox: bbox(items.map(i => i.d)), cap, gx, H };
}

// ---------------- header: ! CULTURAL SHOCK PARTY on one baseline ----------------
export function header({ size = 100, ls = 0.02, k = 1.3, gapK = 0.3, markOpts = MARK } = {}) {
  const cap = size * CAP, h = cap * k;
  const mk = placeMark(markOpts, { x: 0, top: -cap / 2 - h / 2, h });
  const items = mk.pieces.map(d => ({ d, role: 'mark' }));
  items.push(...setLine([['CULTURAL', 'word'], ['SHOCK', 'accent'], ['PARTY', 'word']], size, mk.bbox.x2 + cap * gapK, 0, ls));
  return { items, bbox: bbox(items.map(i => i.d)), cap };
}

// ---------------- descriptor: primary + feminist claim (letterhead, press, ballot-adjacent) ----------------
export const DESCRIPTOR = 'feminist politics for the Fourth Wave';   // draft copy, for client approval
export function descriptor({ text = DESCRIPTOR, gapK = 0.34 } = {}) {
  const P = primary();
  const textR = Math.max(...P.items.filter(i => i.role !== 'mark').map(i => bbox(i.d).x2));
  const w = textR - P.gx;                                  // justify to the wordmark's text column
  const probe = tp('SpaceGrotesk-500', 100, text);
  const sz = 100 * w / probe.bbox.w;
  const capD = sz * 0.70;
  const y = P.H + P.cap * gapK + capD;
  const j = tp('SpaceGrotesk-500', sz, text, { x: P.gx - probe.bbox.x1 * sz / 100, y });
  const items = [...P.items, { d: j.d, role: 'word' }];
  return { items, bbox: bbox(items.map(i => i.d)), ratio: capD / P.cap };
}

// ---------------- poster stack: tall mark + CULTURAL / SHOCK / PARTY justified ----------------
export function poster({ width = 600, gapK = 0.075, lead = 0.07, ls = 0.02, accent = 'SHOCK', markOpts = MARK } = {}) {
  const lines = ['CULTURAL', 'SHOCK', 'PARTY'];
  const sized = lines.map(t => ({ t, sz: 100 * width / sword(t, 100, { ls }).bbox.w }));
  let y = 0; const rows = [];
  sized.forEach(({ t, sz }) => { y += sz * CAP; rows.push({ t, sz, y }); y += width * lead; });
  const H = rows[rows.length - 1].y;
  const mk = placeMark(markOpts, { x: 0, top: -H * 0.003, h: H * 1.005 });
  const items = mk.pieces.map(d => ({ d, role: 'mark' }));
  const gx = mk.bbox.x2 + width * gapK;
  rows.forEach(({ t, sz, y }) => items.push(...setLine([[t, t === accent ? 'accent' : 'word']], sz, gx, y, ls)));
  return { items, bbox: bbox(items.map(i => i.d)) };
}

// ---------------- seal: name around the mark ----------------
// Bend straight path data around a circle. dir=+1: top arc, clockwise, letters point outward.
// dir=-1: bottom arc, read upright, letters point inward. x=0 maps to angle a0 (radians).
function bend(d, { rb, a0, dir }) {
  const map = (x, y) => {
    const a = a0 + dir * x / rb, rho = rb - dir * y;
    return [rho * Math.cos(a), rho * Math.sin(a)];
  };
  const out = []; let cur = [0, 0], start = [0, 0];
  for (const [cmd, ...v] of parse(d)) {
    if (cmd === 'M') { cur = [v[0], v[1]]; start = cur; out.push(['M', ...map(...cur)]); }
    else if (cmd === 'L' || cmd === 'Z') {
      const tgt = cmd === 'L' ? [v[0], v[1]] : start;
      const n = Math.max(1, Math.ceil(Math.hypot(tgt[0] - cur[0], tgt[1] - cur[1]) / (rb * 0.02)));
      for (let k = 1; k <= n; k++) out.push(['L', ...map(cur[0] + (tgt[0] - cur[0]) * k / n, cur[1] + (tgt[1] - cur[1]) * k / n)]);
      if (cmd === 'Z') out.push(['Z']);
      cur = tgt;
    } else if (cmd === 'Q') { out.push(['Q', ...map(v[0], v[1]), ...map(v[2], v[3])]); cur = [v[2], v[3]]; }
    else if (cmd === 'C') { out.push(['C', ...map(v[0], v[1]), ...map(v[2], v[3]), ...map(v[4], v[5])]); cur = [v[4], v[5]]; }
  }
  return serialize(out);
}

export function seal({ R = 100, ring = 4.6, textCap = 21, textGap = 6, innerGap = 6, inner = 2.4, ls = 0.16,
  top = 'CULTURAL SHOCK', bottom = 'PARTY', bottomLs = 0.3, markH = 104, bulletR = 3.6, markOpts = MARK, g = 3.2 } = {}) {
  const items = [];
  const tOuter = R - ring - textGap, tInner = tOuter - textCap, midR = (tOuter + tInner) / 2;
  const size = textCap / CAP;
  const jt = sword(top, size, { ls }), jb = sword(bottom, size, { ls: bottomLs });
  const spanTop = jt.bbox.w / midR, spanBot = jb.bbox.w / midR;
  const gap = (2 * Math.PI - spanTop - spanBot) / 2;
  const topStart = -Math.PI / 2 - spanTop / 2;
  const bulletA = [topStart + spanTop + gap / 2, topStart - gap / 2];
  // outer ring bridged at the bullets so the plate holds together as a stencil
  stencilRing(0, 0, R, R - ring, bulletA.map(a => a * 180 / Math.PI), g).forEach(d => items.push({ d, role: 'ring' }));
  const dt = sword(top, size, { ls, x: -jt.bbox.x1 });
  items.push({ d: bend(dt.d, { rb: tInner, a0: -Math.PI / 2 - (jt.bbox.w / 2) / tInner, dir: 1 }), role: 'word' });
  const db = sword(bottom, size, { ls: bottomLs, x: -jb.bbox.x1 });
  items.push({ d: bend(db.d, { rb: tOuter, a0: Math.PI / 2 + (jb.bbox.w / 2) / tOuter, dir: -1 }), role: 'word' });
  for (const a of bulletA) {
    const cx = midR * Math.cos(a), cy = midR * Math.sin(a);
    items.push({ d: `M${(cx + bulletR).toFixed(2)} ${cy.toFixed(2)}A${bulletR} ${bulletR} 0 1 1 ${(cx - bulletR).toFixed(2)} ${cy.toFixed(2)}A${bulletR} ${bulletR} 0 1 1 ${(cx + bulletR).toFixed(2)} ${cy.toFixed(2)}Z`, role: 'accent' });
  }
  // inner ring: bridged on the same radial lines as the outer ring (never at 12 o'clock over the bar)
  const ri = tInner - innerGap;
  stencilRing(0, 0, ri, ri - inner, bulletA.map(a => a * 180 / Math.PI), g).forEach(d => items.push({ d, role: 'ring' }));
  const mk = placeMark(markOpts, { x: 0, top: 0, h: markH });
  const cxm = (mk.bbox.x1 + mk.bbox.x2) / 2, cym = (mk.bbox.y1 + mk.bbox.y2) / 2;
  mk.pieces.forEach(d => items.push({ d: xform(d, T(-cxm, -cym)), role: 'mark' }));
  return { items, bbox: { x1: -R, y1: -R, x2: R, y2: R, w: 2 * R, h: 2 * R } };
}

// ---------------- mark alone (positive), and the stencil plate (official mark) ----------------
export function markAlone(markOpts = MARK) {
  const m = bang(markOpts);
  return { items: m.pieces.map(d => ({ d, role: 'mark' })), bbox: m.bbox };
}
export function plate(markOpts = MARK, { h = 100, inset = 0.135 } = {}) {
  const m = bang(markOpts);
  const s = h * (1 - 2 * inset) / m.o.H;
  // optical centring: centre the wedge's top width (the widest, heaviest part), not the bbox
  const cx = h / 2 - ((m.bbox.x1 + m.bbox.x2) / 2) * s, cy = h * inset;
  const holes = m.pieces.map(d => xform(d, mul(T(cx, cy), S(s))));
  return { items: [{ d: `M0 0H${h}V${h}H0Z` + holes.join(''), role: 'plate', evenodd: true }], bbox: { x1: 0, y1: 0, x2: h, y2: h, w: h, h } };
}

// ---------------- colourways ----------------
const WAYS = {
  colour: { mark: C.red, word: C.ink, accent: C.red, ring: C.ink, plate: C.red },
  reverse: { mark: C.red, word: C.paper, accent: C.red, ring: C.paper, plate: C.red },
  mono: { mark: C.ink, word: C.ink, accent: C.ink, ring: C.ink, plate: C.ink },
};
export function toSvg(L, way, { pad, square = false, title = NAME } = {}) {
  const vb = padBox(L.bbox, pad, { square });
  const body = L.items.map(i => `  <path${i.evenodd ? ' fill-rule="evenodd"' : ''} fill="${WAYS[way][i.role]}" d="${i.d}"/>`).join('\n');
  return svgDoc(vb, body, { title });
}

// ---------------- build ----------------
import { fileURLToPath } from 'node:url';
if (process.argv[1] === fileURLToPath(import.meta.url)) build();
function build() {
  const P1 = primary();
  const padP = P1.cap * 0.42;               // ≈ 7% of the lockup height-side, equal on all sides
  write(OUT + 'primary.svg', toSvg(P1, 'colour', { pad: padP }));
  write(OUT + 'reverse.svg', toSvg(P1, 'reverse', { pad: padP }));
  write(OUT + 'mono.svg', toSvg(P1, 'mono', { pad: padP }));
  const HD = header();
  write(OUT + 'header.svg', toSvg(HD, 'colour', { pad: HD.bbox.h * 0.12 }));
  const DS = descriptor();
  write(OUT + 'descriptor.svg', toSvg(DS, 'colour', { pad: padP, title: `${NAME}: ${DESCRIPTOR}` }));
  const SEAL = seal();
  write(OUT + 'alt.svg', toSvg(SEAL, 'colour', { pad: 200 * 0.06, title: `${NAME} seal` }));
  const PL = plate();
  write(OUT + 'mark.svg', toSvg(PL, 'colour', { pad: 0, title: `${NAME} mark` }));
  const MK = markAlone();
  write(OUT + 'mark-positive.svg', toSvg(MK, 'colour', { pad: 100 * 0.07, square: true, title: `${NAME} mark (positive)` }));
  const PO = poster();
  write(OUT + 'poster.svg', toSvg(PO, 'colour', { pad: Math.min(PO.bbox.w, PO.bbox.h) * 0.07 }));
  for (const f of ['mark-plate.svg', 'plate-sheet.png']) if (existsSync(OUT + f)) unlinkSync(OUT + f);
  console.log('primary bbox', P1.bbox, 'descriptor cap ratio', DS.ratio.toFixed(3));

  if (render) {
    const r = (args) => execFileSync('node', [`${TOOLS}/render.mjs`, ...args], { stdio: 'inherit' });
    r([OUT + 'primary.svg', OUT + 'primary.png', '--width', '1000']);
    r([OUT + 'primary.svg', OUT + 'primary-sheet.png', '--sheet']);
    r([OUT + 'mark.svg', OUT + 'mark-sheet.png', '--sheet']);
    r([OUT + 'mark-positive.svg', OUT + 'mark-positive-sheet.png', '--sheet']);
    r([OUT + 'header.svg', OUT + 'header-sheet.png', '--sheet']);
    r([OUT + 'header.svg', OUT + 'header.png', '--width', '1200']);
    r([OUT + 'descriptor.svg', OUT + 'descriptor.png', '--width', '1000']);
    r([OUT + 'alt.svg', OUT + 'alt.png', '--width', '700']);
    r([OUT + 'alt.svg', OUT + 'alt-sheet.png', '--sheet']);
    r([OUT + 'reverse.svg', OUT + 'reverse.png', '--width', '1000', '--bg', C.ink]);
    r([OUT + 'mono.svg', OUT + 'mono.png', '--width', '1000']);
    r([OUT + 'poster.svg', OUT + 'poster.png', '--width', '900']);
  }
}
