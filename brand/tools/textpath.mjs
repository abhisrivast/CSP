// Converts a line of text to SVG path data with real font outlines + kerning.
//
//   node textpath.mjs <font.ttf | FontFileName> <sizePx> "<text>" [--x 0] [--y 0] [--ls 0] [--svg out.svg] [--fill #000]
//
// --ls is extra letter-spacing in em (e.g. 0.05). Font can be a bare file name from ../fonts.
// Prints JSON: { d, bbox: {x1,y1,x2,y2,w,h}, advance, ascender, descender, unitsPerEm }.
// With --svg, also writes a standalone preview SVG cropped to the bbox.
import opentype from 'opentype.js';
import { existsSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const FONTS = join(dirname(fileURLToPath(import.meta.url)), '..', 'fonts');
const [fontArg, sizeArg, text, ...rest] = process.argv.slice(2);
if (!fontArg || !sizeArg || text === undefined) {
  console.error('usage: node textpath.mjs <font> <sizePx> "<text>" [--x n] [--y n] [--ls em] [--svg out.svg] [--fill color]');
  process.exit(1);
}
const opt = { x: 0, y: 0, ls: 0, svg: null, fill: '#000' };
for (let i = 0; i < rest.length; i += 2) opt[rest[i].replace(/^--/, '')] = rest[i + 1];
const fontPath = existsSync(fontArg) ? fontArg : join(FONTS, fontArg.endsWith('.ttf') ? fontArg : fontArg + '.ttf');
const font = opentype.loadSync(fontPath);
const size = Number(sizeArg);
const ls = Number(opt.ls) * size;

// Lay glyphs out one by one so letter-spacing composes with kerning.
const glyphs = font.stringToGlyphs(text);
const scale = size / font.unitsPerEm;
let x = Number(opt.x);
const y = Number(opt.y);
const path = new opentype.Path();
glyphs.forEach((g, i) => {
  path.extend(g.getPath(x, y, size));
  let adv = g.advanceWidth * scale;
  if (i < glyphs.length - 1) adv += font.getKerningValue(g, glyphs[i + 1]) * scale + ls;
  x += adv;
});
const d = path.toPathData(2);
const b = path.getBoundingBox();
const bbox = { x1: +b.x1.toFixed(2), y1: +b.y1.toFixed(2), x2: +b.x2.toFixed(2), y2: +b.y2.toFixed(2),
  w: +(b.x2 - b.x1).toFixed(2), h: +(b.y2 - b.y1).toFixed(2) };
const out = { d, bbox, advance: +(x - Number(opt.x)).toFixed(2),
  ascender: +(font.ascender * scale).toFixed(2), descender: +(font.descender * scale).toFixed(2),
  unitsPerEm: font.unitsPerEm };

if (opt.svg) {
  const pad = size * 0.1;
  const vb = [bbox.x1 - pad, bbox.y1 - pad, bbox.w + 2 * pad, bbox.h + 2 * pad].map(n => +n.toFixed(2));
  writeFileSync(opt.svg, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb.join(' ')}"><path fill="${opt.fill}" d="${d}"/></svg>\n`);
}
console.log(JSON.stringify(out));
