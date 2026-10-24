// Stencil wordmark type for concept 06 (v2).
// Big Shoulders Stencil Display 900, laid out glyph by glyph with opentype.js (real advances + kerning),
// with two redrawn capitals:
//   L — the stock L has its foot cut off the stem, so CULTURAL read 'CUI.TURAI.' at header size.
//       Redrawn from the solid Big Shoulders Display 900 L with the stencil bridge cut horizontally
//       through the stem, ~38% up, so the foot stays joined to the stem (the cut echoes the T's cut).
//   K — the stock K cuts the stem off the arms, so it read 'I<'. Redrawn with the stem joined to the
//       upper arm; the only bridge separates the leg, parallel to the arm (as in the stock leg cut).
// Both fonts share metrics, so the custom glyphs drop into the stock advances.
import opentype from '/Users/Abhi/Developer/CSP/brand/tools/node_modules/opentype.js/dist/opentype.module.js';
import { readFileSync } from 'node:fs';
import { parse, serialize, bbox } from './lib.mjs';

const FONTS = '/Users/Abhi/Developer/CSP/brand/fonts/';
const fonts = new Map();
const load = name => { if (!fonts.has(name)) fonts.set(name, (() => { const b = readFileSync(FONTS + name + '.ttf'); return opentype.parse(b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength)); })()); return fonts.get(name); };
export const STENCIL = 'BigShouldersStencilDisplay-900';

// Custom glyph outlines at size 1000 (px), baseline y = 0, y up = negative (same frame as textpath.mjs).
const CUT = 50;                // the font's own bridge width at size 1000
const L_CUT = 0.38 * 800;      // height of the L's stem cut (cap height 800)
const CUSTOM = {
  L: [
    `M40 -800L190 -800L190 ${-(L_CUT + CUT / 2)}L40 ${-(L_CUT + CUT / 2)}Z`,
    `M40 ${-(L_CUT - CUT / 2)}L190 ${-(L_CUT - CUT / 2)}L190 -132L387 -132L387 0L40 0Z`,
  ].join(''),
  // stem + upper arm in one piece, leg separated by the stock (arm-parallel) cut
  K: 'M193 0L40 0L40 -800L200 -800L198 -606L171 -427L198 -427L246 -606L318 -800L482 -800L193 -120L193 0Z' +
     'M488 0L336 0L279 -202L367 -413L488 0Z',
};

function scaleD(d, s, dx, dy) {
  return serialize(parse(d).map(([c, ...v]) => c === 'Z' ? ['Z'] : [c, ...v.map((n, i) => (i % 2 ? n * s + dy : n * s + dx))]));
}

// Lay out text; returns {d, bbox, advance} like textpath.mjs. ls = extra letter-spacing in em.
export function sword(text, size, { x = 0, y = 0, ls = 0.02, font = STENCIL, custom = true } = {}) {
  const f = load(font);
  const glyphs = f.stringToGlyphs(text);
  const sc = size / f.unitsPerEm;
  let cx = x; const parts = [];
  glyphs.forEach((g, i) => {
    const ch = text[i];
    if (custom && font === STENCIL && CUSTOM[ch]) parts.push(scaleD(CUSTOM[ch], size / 1000, cx, y));
    else { const p = g.getPath(cx, y, size).toPathData(2); if (p) parts.push(p); }
    let adv = g.advanceWidth * sc;
    if (i < glyphs.length - 1) adv += f.getKerningValue(g, glyphs[i + 1]) * sc + ls * size;
    cx += adv;
  });
  const d = parts.join('');
  return { d, bbox: d ? bbox(d) : { x1: x, y1: y, x2: x, y2: y, w: 0, h: 0 }, advance: cx - x };
}
