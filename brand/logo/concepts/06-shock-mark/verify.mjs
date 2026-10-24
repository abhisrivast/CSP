// Hard-rule + padding checks for the master SVGs.
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { C, TOOLS } from './lib.mjs';
const dir = new URL('./', import.meta.url).pathname;
const masters = ['primary.svg', 'alt.svg', 'mark.svg', 'reverse.svg', 'mono.svg', 'mark-positive.svg', 'header.svg', 'descriptor.svg', 'poster.svg'];
const palette = new Set(Object.values(C).map(c => c.toUpperCase()));
for (const f of masters) {
  const s = readFileSync(dir + f, 'utf8');
  const bad = ['<text', '<image', 'filter', 'font-family', 'href', '<mask', 'mask=', '<use', 'clipPath', 'style', 'stroke', 'url('].filter(k => s.includes(k));
  const hasTitle = s.includes('<title>');
  const fills = [...new Set([...s.matchAll(/fill="([^"]+)"/g)].map(m => m[1].toUpperCase()))];
  const off = fills.filter(c => !palette.has(c));
  const vb = s.match(/viewBox="([^"]+)"/)[1].split(' ').map(Number);
  // measure ink bbox by rasterising on a contrasting ground
  const bg = f === 'reverse.svg' ? '#00FF00' : '#00FF00';
  const W = 2000, png = `/tmp/csp06_${f}.png`;
  execFileSync('node', [`${TOOLS}/render.mjs`, dir + f, png, '--width', String(W), '--bg', bg]);
  const pad = Math.round(W * 0.06);
  const g = execFileSync('magick', [png, '-fuzz', '8%', '-trim', '-format', '%w %h %X %Y', 'info:'], { encoding: 'utf8' }).trim().split(' ').map(Number);
  const scale = W / vb[2], Hpx = vb[3] * scale;
  const L = g[2] - pad, Tp = g[3] - pad, Rr = W - (L + g[0]), B = Hpx - (Tp + g[1]);
  const u = v => (v / scale).toFixed(1);
  console.log(`${f.padEnd(17)} ${Math.round(s.length/1024)}KB title:${hasTitle} forbidden:[${bad}] offPalette:[${off}] fills:${fills.length} pad L/T/R/B (viewBox units) ${u(L)} ${u(Tp)} ${u(Rr)} ${u(B)}  vb ${vb.map(n => n.toFixed(1)).join(' ')}`);
}
