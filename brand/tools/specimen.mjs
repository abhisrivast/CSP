// Renders every font in ../fonts as a specimen strip so designers can pick faces by eye.
//   node specimen.mjs <out-prefix> ["sample text"]   → <out-prefix>-1.png, -2.png …
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const FONTS = join(dirname(fileURLToPath(import.meta.url)), '..', 'fonts');
const [prefix, sample = 'Cultural Shock Party  CSP'] = process.argv.slice(2);
const files = readdirSync(FONTS).filter(f => f.endsWith('.ttf')).sort();
const PER = 26, ROW = 64, W = 1400;
for (let p = 0; p * PER < files.length; p++) {
  const chunk = files.slice(p * PER, (p + 1) * PER);
  const faces = chunk.map((f, i) => `@font-face{font-family:f${i};src:url(file://${join(FONTS, f)})}`).join('');
  const rows = chunk.map((f, i) => `<div class=r><span class=n>${f.replace('.ttf', '')}</span><span style="font-family:f${i}" class=s>${sample}</span></div>`).join('');
  const html = `<!doctype html><meta charset=utf-8><style>${faces}*{margin:0}body{background:#F6EEDD}.r{display:flex;align-items:center;height:${ROW}px;border-bottom:1px solid #e2d8c4;padding:0 20px}.n{width:300px;font:13px/1 Helvetica;color:#7a6f60}.s{font-size:40px;color:#221F1D;white-space:nowrap}</style>${rows}`;
  const dir = mkdtempSync(join(tmpdir(), 'csp-spec-'));
  writeFileSync(join(dir, 'p.html'), html);
  const out = resolve(`${prefix}-${p + 1}.png`);
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files',
    '--force-device-scale-factor=1', `--user-data-dir=${join(dir, 'prof')}`, `--window-size=${W},${chunk.length * ROW}`,
    '--virtual-time-budget=2000', `--screenshot=${out}`, `file://${join(dir, 'p.html')}`], { stdio: 'pipe' });
  rmSync(dir, { recursive: true, force: true });
  console.log('wrote', out);
}
