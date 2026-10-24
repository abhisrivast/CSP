// Renders SVG files to PNG with headless Chrome so designs can be checked visually.
//
//   node render.mjs <in.svg> <out.png> [--width 800] [--bg #F6EEDD]
//   node render.mjs <in.svg> <out.png> --sheet     # contact sheet: cream / ink / red grounds + 16–128px sizes
//   node render.mjs <a.svg,b.svg,...> <out.png> --grid [--bg #F6EEDD]   # several files side by side
//
// In --sheet mode the small row is sized by height (header/favicon realism).
// Safe to run concurrently: each call uses its own throwaway Chrome profile.
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const [inArg, outArg, ...rest] = process.argv.slice(2);
if (!inArg || !outArg) { console.error('usage: node render.mjs <in.svg[,more.svg]> <out.png> [--width n] [--bg color] [--sheet|--grid]'); process.exit(1); }
const opt = { width: 800, bg: '#F6EEDD', sheet: false, grid: false };
for (let i = 0; i < rest.length; i++) {
  const k = rest[i].replace(/^--/, '');
  if (k === 'sheet' || k === 'grid') opt[k] = true; else opt[k] = rest[++i];
}

const files = inArg.split(',').map(f => resolve(f));
const ratio = f => {
  const svg = readFileSync(f, 'utf8');
  const vb = svg.match(/viewBox="\s*([-\d.]+)[\s,]+([-\d.]+)[\s,]+([-\d.]+)[\s,]+([-\d.]+)/);
  if (vb) return Number(vb[4]) / Number(vb[3]);
  const w = svg.match(/<svg[^>]*\swidth="([\d.]+)/), h = svg.match(/<svg[^>]*\sheight="([\d.]+)/);
  return w && h ? Number(h[1]) / Number(w[1]) : 1;
};
const img = (f, style) => `<img src="file://${f}" style="display:block;${style}">`;

let html, W, H;
const base = `*{margin:0;box-sizing:border-box}body{font:12px/1.3 -apple-system,Helvetica,sans-serif;color:#555}`;
if (opt.sheet) {
  const f = files[0], r = ratio(f);
  const big = 520, pad = 40;
  const cell = (bg) => `<div style="background:${bg};padding:${pad}px;width:${big + 2 * pad}px">${img(f, `width:${big}px;height:${big * r}px`)}</div>`;
  const sizes = [16, 24, 32, 48, 64, 128];
  const small = (bg) => `<div style="background:${bg};padding:24px;display:flex;gap:28px;align-items:flex-end">${sizes.map(s => `<div>${img(f, `height:${s}px;width:${s / r}px`)}<div style="margin-top:6px;color:#888">${s}px</div></div>`).join('')}</div>`;
  W = 3 * (big + 2 * pad);
  html = `<style>${base}</style><div style="display:flex">${cell('#F6EEDD')}${cell('#221F1D')}${cell('#CB3932')}</div>
  <div style="display:flex">${['#F6EEDD', '#FFFFFF', '#221F1D'].map(small).join('')}</div>`;
  H = Math.ceil(big * r + 2 * pad) + 200;
} else if (opt.grid) {
  const cw = 420, pad = 30;
  W = files.length * (cw + 2 * pad);
  const maxR = Math.max(...files.map(ratio));
  H = Math.ceil(cw * maxR + 2 * pad + 24);
  html = `<style>${base}</style><div style="display:flex;background:${opt.bg}">${files.map(f => `<div style="padding:${pad}px;width:${cw + 2 * pad}px">${img(f, `width:${cw}px;height:${cw * ratio(f)}px`)}<div style="margin-top:8px">${f.split('/').pop()}</div></div>`).join('')}</div>`;
} else {
  const w = Number(opt.width), pad = Math.round(w * 0.06), r = ratio(files[0]);
  W = w + 2 * pad; H = Math.ceil(w * r + 2 * pad);
  html = `<style>${base}body{background:${opt.bg}}</style><div style="padding:${pad}px">${img(files[0], `width:${w}px;height:${w * r}px`)}</div>`;
}

const dir = mkdtempSync(join(tmpdir(), 'csp-render-'));
const page = join(dir, 'page.html');
writeFileSync(page, `<!doctype html><meta charset="utf-8">${html}`);
try {
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run',
    '--no-default-browser-check', '--allow-file-access-from-files', '--force-device-scale-factor=1',
    `--user-data-dir=${join(dir, 'profile')}`, `--window-size=${W},${H}`, '--virtual-time-budget=1500',
    `--screenshot=${resolve(outArg)}`, `file://${page}`], { stdio: 'pipe', timeout: 60000 });
  console.log(`wrote ${resolve(outArg)} (${W}x${H})`);
} finally {
  rmSync(dir, { recursive: true, force: true });
}
