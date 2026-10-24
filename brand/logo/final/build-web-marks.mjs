// Builds the web wordmark + favicon from the finalised badge's lettering style (Caveat Brush) and colours.
//   node build-web-marks.mjs   (run from brand/logo/final)
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
const tp = (font, size, text, x = 0, y = 0, ls = 0) =>
  JSON.parse(execFileSync('node', ['../../tools/textpath.mjs', font, String(size), text, '--x', String(x), '--y', String(y), '--ls', String(ls)]).toString());
const C = { paper: '#F3ECDC', ink: '#1D1C18', red: '#CD2E2B', green: '#34493C' };
const F = 'CaveatBrush-400';

// Wordmark: CULTURAL (ink) SHOCK (red) PARTY (ink), one line
const size = 100, gap = 0.18 * size;
const a = tp(F, size, 'CULTURAL', 0, 0, 0.01);
const b = tp(F, size, 'SHOCK', a.advance + gap, 0, 0.01);
const c = tp(F, size, 'PARTY', a.advance + gap + b.advance + gap, 0, 0.01);
const x1 = Math.min(a.bbox.x1, b.bbox.x1), x2 = Math.max(c.bbox.x2, b.bbox.x2);
const y1 = Math.min(a.bbox.y1, b.bbox.y1, c.bbox.y1), y2 = Math.max(a.bbox.y2, b.bbox.y2, c.bbox.y2);
const pad = 9, vb = [x1 - pad, y1 - pad, x2 - x1 + 2 * pad, y2 - y1 + 2 * pad].map(n => +n.toFixed(1)).join(' ');
const wm = (ink, red) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" role="img" aria-label="Cultural Shock Party"><g stroke-width="5" stroke-linejoin="round"><path fill="${ink}" stroke="${ink}" d="${a.d}"/><path fill="${red}" stroke="${red}" d="${b.d}"/><path fill="${ink}" stroke="${ink}" d="${c.d}"/></g></svg>\n`;
writeFileSync('wordmark.svg', wm(C.ink, C.red));
writeFileSync('wordmark-reverse.svg', wm(C.paper, '#E8473F'));
writeFileSync('wordmark-mono.svg', wm('currentColor', 'currentColor'));

// Stacked wordmark: CULTURAL / SHOCK / PARTY centred
const s1 = tp(F, 100, 'CULTURAL', 0, 0, 0.01), s2 = tp(F, 150, 'SHOCK', 0, 0, 0.0), s3 = tp(F, 100, 'PARTY', 0, 0, 0.01);
const W = Math.max(s1.bbox.w, s2.bbox.w, s3.bbox.w);
const line = (t, y, x0) => tp(F, t.size, t.text, x0, y, t.ls);
const L1 = line({ size: 100, text: 'CULTURAL', ls: 0.01 }, 0, (W - s1.bbox.w) / 2 - s1.bbox.x1);
const L2 = line({ size: 150, text: 'SHOCK', ls: 0 }, 128, (W - s2.bbox.w) / 2 - s2.bbox.x1);
const L3 = line({ size: 100, text: 'PARTY', ls: 0.01 }, 218, (W - s3.bbox.w) / 2 - s3.bbox.x1);
const sy1 = L1.bbox.y1, sy2 = L3.bbox.y2;
writeFileSync('wordmark-stacked.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-pad} ${(sy1 - pad).toFixed(1)} ${(W + 2 * pad).toFixed(1)} ${(sy2 - sy1 + 2 * pad).toFixed(1)}" role="img" aria-label="Cultural Shock Party"><g stroke-width="5" stroke-linejoin="round"><path fill="${C.ink}" stroke="${C.ink}" d="${L1.d}"/><path fill="${C.red}" stroke="${C.red}" d="${L2.d}"/><path fill="${C.ink}" stroke="${C.ink}" d="${L3.d}"/></g></svg>\n`);

// Favicon: badge echo — green ring, paper gap, red disc, paper "CSP"
const m = tp(F, 33, 'CSP', 0, 0, -0.03);
const mx = 32 - (m.bbox.x1 + m.bbox.w / 2), my = 32 - (m.bbox.y1 + m.bbox.h / 2);
const mm = tp(F, 33, 'CSP', mx, my, -0.03);
writeFileSync('favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="31" fill="${C.green}"/><circle cx="32" cy="32" r="27" fill="${C.paper}"/><circle cx="32" cy="32" r="24.5" fill="${C.red}"/><path fill="${C.paper}" stroke="${C.paper}" stroke-width="1.6" stroke-linejoin="round" d="${mm.d}"/></svg>\n`);
console.log('ok', vb);
