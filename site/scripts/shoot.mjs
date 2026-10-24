// Visual + accessibility QA against the built site (dist/), using the locally installed Chrome.
//
//   node scripts/shoot.mjs [paths...] [--widths 390,1440] [--out qa/shots] [--axe] [--viewport] [--base http://localhost:4321]
//
// With --base, shoots a running server (e.g. the shared dev server); otherwise serves dist/ on a random local port, takes full-page screenshots per path and width, and with --axe
// runs axe-core (WCAG 2.2 AA rules) and writes qa/axe.json. Paths default to every page in the sitemap.
import { createServer } from 'node:http';
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(SITE, 'dist');
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : d; };
const widths = opt('widths', '390,1440').split(',').map(Number);
const out = join(SITE, opt('out', 'qa/shots'));
const runAxe = args.includes('--axe');
const full = !args.includes('--viewport');
const base = opt('base', null);
let paths = args.filter((a, i) => !a.startsWith('--') && !(i > 0 && args[i - 1].startsWith('--') && !['--axe', '--viewport'].includes(args[i - 1])));
if (!paths.length) {
  const sm = readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8');
  paths = [...sm.matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g)].map((m) => m[1]);
}

const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.woff2': 'font/woff2', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain', '.webmanifest': 'application/manifest+json' };
const server = base ? null : createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let f = join(DIST, p);
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, 'index.html');
  if (!existsSync(f)) { res.writeHead(404); return res.end(readFileSync(join(DIST, '404.html'), 'utf8').toString?.() ?? 'not found'); }
  res.writeHead(200, { 'Content-Type': TYPES[extname(f)] ?? 'application/octet-stream' });
  res.end(readFileSync(f));
});
server?.listen(0);
const origin = base ?? `http://localhost:${server.address().port}`;

mkdirSync(out, { recursive: true });
const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--hide-scrollbars'] });
const axeSrc = runAxe ? readFileSync(createRequire(import.meta.url).resolve('axe-core/axe.min.js'), 'utf8') : '';
const axeResults = {};
const weights = {};
for (const path of paths) {
  for (const w of widths) {
    const page = await browser.newPage();
    await page.setViewport({ width: w, height: w < 600 ? 844 : 900, deviceScaleFactor: 1, isMobile: w < 600, hasTouch: w < 600 });
    let bytes = 0;
    page.on('response', async (r) => { try { bytes += (await r.buffer()).length; } catch {} });
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
    await page.goto(`${origin}${path}`, { waitUntil: 'networkidle0', timeout: 90000 });
    // trigger lazy images, then return to top
    await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); } window.scrollTo(0, 0); });
    await new Promise((r) => setTimeout(r, 300));
    const name = (path.replace(/^\/|\/$/g, '').replace(/\//g, '__') || 'home') + `@${w}`;
    // horizontal overflow: list the widest offenders so they can be fixed at the source
    const overflow = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      if (document.documentElement.scrollWidth <= vw + 1) return [];
      return [...document.querySelectorAll('body *')]
        .filter((el) => { const r = el.getBoundingClientRect(); return r.right > vw + 1 && r.width > 0 && getComputedStyle(el).position !== 'fixed'; })
        .slice(0, 8).map((el) => `${el.tagName.toLowerCase()}.${[...el.classList].join('.')} → ${Math.round(el.getBoundingClientRect().right)}px`);
    });
    await page.screenshot({ path: join(out, `${name}.png`), fullPage: full });
    weights[name] = { kb: Math.round(bytes / 1024), errors, overflow };
    if (overflow.length) console.log(`  ⚠ ${name} overflows: ${overflow.join(' | ')}`);
    if (runAxe && w === widths[0]) {
      await page.addScriptTag({ content: axeSrc });
      const r = await page.evaluate(async () => await window.axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'best-practice'] }));
      axeResults[path] = r.violations.map((v) => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.slice(0, 6).map((n) => n.target.join(' ')) }));
    }
    await page.close();
    console.log(`${name}: ${weights[name].kb} KB transferred (uncompressed)${errors.length ? `, ${errors.length} console errors` : ''}`);
  }
}
writeFileSync(join(out, 'weights.json'), JSON.stringify(weights, null, 1));
if (runAxe) {
  writeFileSync(join(out, 'axe.json'), JSON.stringify(axeResults, null, 1));
  const n = Object.values(axeResults).flat().length;
  console.log(`axe: ${n} violation types across ${Object.keys(axeResults).length} pages → ${join(out, 'axe.json')}`);
}
await browser.close();
server?.close();
