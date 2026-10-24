// Labelled contact sheets of the photo library so designers can pick images by eye.
//   node scripts/contact-sheets.mjs   → qa/photo-contact-sheet-<source>-<n>.png (ids printed under each tile)
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const photos = JSON.parse(readFileSync(join(SITE, 'src/data/photos.json'), 'utf8'));
const out = join(SITE, 'qa');
mkdirSync(out, { recursive: true });
const PER = 42;
for (const source of [...new Set(photos.map((p) => p.source))]) {
  const list = photos.filter((p) => p.source === source);
  for (let i = 0; i * PER < list.length; i++) {
    const chunk = list.slice(i * PER, (i + 1) * PER);
    const args = ['montage', '-background', '#F3ECDC', '-fill', '#1D1C18', '-pointsize', '12', '-font', 'Helvetica'];
    for (const p of chunk) args.push('-label', p.id.slice(0, 38), join(SITE, 'src/assets/photos', p.file));
    const file = join(out, `photo-contact-sheet-${source}-${i + 1}.png`);
    args.push('-tile', '6x', '-geometry', '250x170+8+8', file);
    execFileSync('magick', args);
    console.log('wrote', file, `(${chunk.length})`);
  }
}
