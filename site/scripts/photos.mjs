// Pulls the licensed photo library from the research manifests into the site.
//
//   node scripts/photos.mjs            download missing originals + rebuild src/data/photos.json
//   node scripts/photos.mjs --tones    also (re)generate duotone variants (runs in prebuild)
//
// Originals: src/assets/photos/<id>.jpg (≤2000px, metadata stripped: no EXIF/GPS).
// Tones:     src/assets/photos/tones/<id>--<tone>.jpg (gitignored, regenerated on every build).
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const RESEARCH = join(SITE, '..', 'research');
const OUT = join(SITE, 'src/assets/photos');
const TONES_OUT = join(OUT, 'tones');
const REGISTRY = join(SITE, 'src/data/photos.json');
const UA = 'CSPWebsiteBuild/1.0 (https://culturalshockparty.com; website build script)';

// Poster-style 3-stop duotones: shadow → saturated mid → highlight, from the badge + poster palette.
export const TONES = {
  red: ['#2B0A0E', '#CD2E2B', '#FADBD0'],
  ink: ['#1D1C18', '#7A736A', '#F3ECDC'],
  green: ['#0F1C14', '#3B6B4C', '#DCEBD2'],
  pink: ['#4A1620', '#DD7A73', '#FCE6DF'],
  marigold: ['#33200E', '#D9902F', '#FBE9C4'],
};

const ALLOWED = /^(cc0|cc[- ]?0|public domain|pdm|pd\b|cc by( |-)?(sa)?|cc-by(-sa)?|unsplash|pexels|no known copyright restrictions)/i;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);

function loadManifests() {
  const files = readdirSync(RESEARCH).filter((f) => /^images-.*\.json$/.test(f));
  const all = [];
  for (const f of files) {
    const source = f.replace(/^images-|\.json$/g, '');
    const data = JSON.parse(readFileSync(join(RESEARCH, f), 'utf8'));
    for (const e of Array.isArray(data) ? data : data.images ?? []) all.push({ ...e, _source: source });
  }
  return all;
}

// Fetch a sensible size instead of multi-megabyte originals: Commons standard thumb width 1920, Unsplash/Pexels w=2000.
function sized(url) {
  const m = url.match(/^https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/(?!thumb\/)([0-9a-f])\/([0-9a-f]{2})\/([^/?#]+)$/);
  if (m && /\.(jpe?g|png|tiff?)$/i.test(m[3])) return `https://upload.wikimedia.org/wikipedia/commons/thumb/${m[1]}/${m[2]}/${m[3]}/1920px-${m[3]}${/\.tiff?$/i.test(m[3]) ? '.jpg' : ''}`;
  const t = url.match(/^(https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/.+\/)\d+px-([^/]+)$/);
  if (t) return `${t[1]}1920px-${t[2]}`;
  if (/images\.unsplash\.com/.test(url)) { const u = new URL(url); u.searchParams.set('w', '2000'); u.searchParams.set('q', '82'); u.searchParams.set('fm', 'jpg'); return u.href; }
  if (/images\.pexels\.com/.test(url)) { const u = new URL(url); u.searchParams.set('w', '2000'); u.searchParams.set('auto', 'compress'); return u.href; }
  return url;
}

async function download(url, dest) {
  let res = await fetch(sized(url), { headers: { 'User-Agent': UA }, redirect: 'follow', signal: AbortSignal.timeout(45000) });
  if (!res.ok && sized(url) !== url) res = await fetch(url, { headers: { 'User-Agent': UA }, redirect: 'follow', signal: AbortSignal.timeout(90000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await sharp(buf).rotate().resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true }).toFile(dest);
}

async function syncOriginals() {
  mkdirSync(OUT, { recursive: true });
  const previous = existsSync(REGISTRY) ? JSON.parse(readFileSync(REGISTRY, 'utf8')) : [];
  const byId = new Map(previous.map((p) => [p.id, p]));
  const entries = loadManifests();
  let added = 0, skipped = [];
  const seen = new Set();
  for (const e of entries) {
    const licence = String(e.licence ?? e.license ?? '');
    const chosen = licence.split(/\(/)[0];
    if (!ALLOWED.test(licence) || /\bnc\b|\bnd\b|non-?commercial|no-?deriv/i.test(chosen)) { skipped.push(`${e.id}: licence "${licence}"`); continue; }
    // Readable ids from the researcher's file name ("1913-washington-inez-milholland-horse"); prefix on collision.
    const base = slug((e.local_file ?? e.id).split('/').pop().replace(/\.[a-z]+$/i, ''));
    const id = seen.has(base) ? slug(`${e._source}-${base}`) : base;
    seen.add(id);
    const file = `${id}.jpg`;
    const dest = join(OUT, file);
    if (!existsSync(dest)) {
      try {
        await download(e.download_url, dest);
        added++;
        if (added % 10 === 0) console.log(`  …${added} downloaded`);
        await new Promise((r) => setTimeout(r, 350)); // be polite to Commons/Unsplash
      } catch (err) {
        // Fall back to the researcher's local preview if the high-res URL fails.
        const local = e.local_file && join(RESEARCH, '..', e.local_file.replace(/^.*?research\//, 'research/'));
        console.log(`  fallback to preview for ${id}: ${err.message}`);
        if (local && existsSync(local)) {
          await sharp(local).rotate().resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toFile(dest);
          added++;
        } else { skipped.push(`${id}: download failed (${err.message})`); continue; }
      }
    }
    const meta = await sharp(dest).metadata();
    // Captions, alt text, credits and notes are edited by hand in the registry (cataloguing notes moved to `notes`,
    // no duplicated "Photo:" prefix), so a rebuild keeps the registry's copy and only fills them for new photos.
    const prev = byId.get(id);
    byId.set(id, {
      id, file, source: e._source,
      width: meta.width, height: meta.height,
      orientation: meta.width >= meta.height ? (meta.width / meta.height > 1.2 ? 'landscape' : 'square') : 'portrait',
      title: e.title ?? '', caption: prev?.caption ?? e.caption ?? '', alt: prev?.alt ?? e.alt ?? e.source_alt ?? e.caption ?? e.title ?? '',
      author: e.author ?? '', licence, licenceUrl: e.licence_url ?? e.license_url ?? '',
      sourcePage: e.source_page ?? '', credit: prev?.credit ?? String(e.attribution_text ?? `${e.author ?? 'Unknown'} / ${licence}`).replace(/^Photo:\s*/i, ''),
      peopleIdentifiable: !!e.people_identifiable, tags: e.tags ?? [], suggestedUse: e.suggested_use ?? [],
      notes: prev?.notes ?? e.quality_notes ?? '',
    });
  }
  const list = [...byId.values()].sort((a, b) => a.id.localeCompare(b.id));
  writeFileSync(REGISTRY, JSON.stringify(list, null, 1) + '\n');
  console.log(`photos: ${list.length} in registry, ${added} downloaded, ${skipped.length} skipped`);
  if (skipped.length) console.log('  skipped:\n   ' + skipped.join('\n   '));
  return list;
}

async function makeTones(list) {
  mkdirSync(TONES_OUT, { recursive: true });
  const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  // 256-entry LUT per tone, interpolating the three stops (mid at 0.5)
  const luts = Object.fromEntries(Object.entries(TONES).map(([tone, stops]) => {
    const [a, m, b] = stops.map(hex);
    const lut = new Uint8Array(256 * 3);
    for (let g = 0; g < 256; g++) {
      const t = g / 255, [p, q, u] = t < 0.5 ? [a, m, t * 2] : [m, b, (t - 0.5) * 2];
      for (let c = 0; c < 3; c++) lut[g * 3 + c] = Math.round(p[c] + (q[c] - p[c]) * u);
    }
    return [tone, lut];
  }));
  let made = 0;
  for (const p of list) {
    const pending = Object.keys(TONES).filter((tone) => !existsSync(join(TONES_OUT, `${p.id}--${tone}.jpg`)));
    if (!pending.length) continue;
    const { data, info } = await sharp(join(OUT, p.file))
      .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true, fastShrinkOnLoad: true })
      .removeAlpha().greyscale().normalise({ lower: 1, upper: 99 }).raw().toBuffer({ resolveWithObject: true });
    const px = info.width * info.height, step = info.channels;
    for (const tone of pending) {
      const lut = luts[tone], out = Buffer.alloc(px * 3);
      for (let i = 0; i < px; i++) { const g = data[i * step]; out[i * 3] = lut[g * 3]; out[i * 3 + 1] = lut[g * 3 + 1]; out[i * 3 + 2] = lut[g * 3 + 2]; }
      await sharp(out, { raw: { width: info.width, height: info.height, channels: 3 } })
        .jpeg({ quality: 84 }).toFile(join(TONES_OUT, `${p.id}--${tone}.jpg`)); // plain libjpeg: ~4× faster than mozjpeg; Astro re-encodes anyway
      made++;
    }
  }
  console.log(`tones: ${made} generated`);
}

const args = process.argv.slice(2);
const list = args.includes('--tones-only') ? JSON.parse(readFileSync(REGISTRY, 'utf8')) : await syncOriginals();
if (args.includes('--tones') || args.includes('--tones-only')) await makeTones(list);
