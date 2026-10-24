// Helpers for /credits/: tidy display titles, short licence labels, licence families and groups,
// all derived from the photo register (src/data/photos.json). Nothing here changes the register.
import type { PhotoMeta } from '../../lib/photos';

/** A readable title: drop file extensions, underscores and trailing Flickr ids. The full credit keeps the original. */
export function displayTitle(p: PhotoMeta) {
  let raw = p.title || p.caption || p.id;
  // Unsplash/Pexels URL slugs ("a-woman-holding-a-book-6xtHVV68E7U", "women-holding-signs-11531803") become words.
  if (/^[A-Za-z0-9]+(-[A-Za-z0-9]+){3,}$/.test(raw)) {
    if (/-\d{6,}$/.test(raw)) raw = raw.replace(/-\d{6,}$/, '');           // Pexels: numeric id
    else if (raw.charAt(raw.length - 12) === '-') raw = raw.slice(0, -12);  // Unsplash: 11-character id
    raw = raw.replace(/-/g, ' ');
    raw = raw.charAt(0).toUpperCase() + raw.slice(1);
  }
  const t = raw
    .replace(/\.(jpe?g|png|tiff?)$/i, '')
    .replace(/_/g, ' ')
    .replace(/\s*\(\d{8,}\)\s*$/, '')
    .replace(/\s+-\s+Original$/, '')
    .replace(/\s+(LCCN|LOC)\s*\d{7,}$/, '')     // Library of Congress catalogue numbers
    .replace(/^-(?=[A-Z])/, '#')                 // Commons filenames can’t hold "#": "-SayHerName" was "#SayHerName"
    .replace(/(^|[\s(])"/g, '$1\u201c').replace(/"/g, '\u201d')
    .replace(/(^|[\s(])'/g, '$1\u2018').replace(/'/g, '\u2019')
    .replace(/\s+/g, ' ')
    .trim();
  return t.replace(/\.$/, '');
}

/** The credit line without a repeated quoted title and without bare licence URLs (the licence is linked separately). */
export function displayCredit(p: PhotoMeta) {
  let c = p.credit.replace(/\s*\(https?:\/\/[^)]+\)/g, '');
  c = c.replace(/^“[^”]*”\s*(—\s*)?/, '');
  c = c.replace(/^by\s+/, 'By ');
  return c.trim().replace(/^Photo:\s*/, '');
}

/** Short licence label for the licence link. */
export function licenceLabel(p: PhotoMeta) {
  const l = p.licence;
  const cc = l.match(/^CC (BY(?:-SA)?) ([\d.]+)( dk)?/);
  if (cc) return `CC ${cc[1]} ${cc[2]}${cc[3] ? ' DK' : ''}`;
  if (/^CC0/.test(l)) return 'CC0';
  if (/^Public Domain \+ Unsplash/i.test(l)) return 'Public domain';
  if (/Unsplash/.test(l)) return 'Unsplash License';
  if (/Pexels/.test(l)) return 'Pexels License';
  if (/^No known copyright restrictions/i.test(l)) return 'No known restrictions';
  return 'Public domain';
}

export type Family = { key: string; label: string; href: string; note: string };
export const FAMILIES: Family[] = [
  { key: 'by-sa', label: 'CC BY-SA', href: 'https://creativecommons.org/licenses/by-sa/4.0/', note: 'Credit the author; share adaptations alike' },
  { key: 'by', label: 'CC BY', href: 'https://creativecommons.org/licenses/by/4.0/', note: 'Credit the author' },
  { key: 'pd', label: 'CC0 & public domain', href: 'https://creativecommons.org/publicdomain/zero/1.0/', note: 'Free of copyright, credited anyway' },
  { key: 'unsplash', label: 'Unsplash License', href: 'https://unsplash.com/license', note: 'Free to use; we credit anyway' },
  { key: 'pexels', label: 'Pexels License', href: 'https://www.pexels.com/license/', note: 'Free to use; we credit anyway' },
];

export function familyOf(p: PhotoMeta) {
  const l = licenceLabel(p);
  if (l.startsWith('CC BY-SA')) return 'by-sa';
  if (l.startsWith('CC BY')) return 'by';
  if (l === 'Unsplash License') return 'unsplash';
  if (l === 'Pexels License') return 'pexels';
  return 'pd';
}

export function hostLabel(p: PhotoMeta) {
  try {
    const h = new URL(p.sourcePage).host;
    if (h.includes('wikimedia')) return 'Wikimedia Commons';
    if (h.includes('unsplash')) return 'Unsplash';
    if (h.includes('pexels')) return 'Pexels';
    return h.replace(/^www\./, '');
  } catch {
    return 'source';
  }
}

export type CreditGroup = { id: string; title: string; lead: string; subs: { id: string; title: string; items: PhotoMeta[] }[] };

const byId = (a: PhotoMeta, b: PhotoMeta) => a.id.localeCompare(b.id, 'en', { numeric: true });

export function buildGroups(all: PhotoMeta[]): CreditGroup[] {
  const commons = all.filter((p) => p.source === 'commons').sort(byId);
  const india = all.filter((p) => p.source === 'india').sort(byId);
  const stock = all.filter((p) => p.source === 'stock').sort(byId);
  const other = all.filter((p) => !['commons', 'india', 'stock'].includes(p.source)).sort(byId);
  const year = (p: PhotoMeta) => Number(p.id.match(/^(\d{4})-/)?.[1] ?? NaN);
  const eras: [string, string, (y: number) => boolean][] = [
    ['era-1900', '1900s to 1920s: the suffrage years', (y) => y >= 1900 && y < 1930],
    ['era-1950', '1950s to 1970s', (y) => y >= 1950 && y < 1980],
    ['era-2000', '2000s', (y) => y >= 2000 && y < 2010],
    ['era-2010', '2010s', (y) => y >= 2010 && y < 2020],
    ['era-2020', '2020s', (y) => y >= 2020],
  ];
  const groups: CreditGroup[] = [
    {
      id: 'archive', title: 'Archive and documentary',
      lead: 'Real events, with the real what, where and when, from Wikimedia Commons and public archives. Arranged by decade.',
      subs: [
        ...eras.map(([id, title, test]) => ({ id, title, items: commons.filter((p) => test(year(p))) })),
        { id: 'era-undated', title: 'Posters, objects and undated photos', items: commons.filter((p) => Number.isNaN(year(p))) },
      ],
    },
    {
      id: 'india', title: 'India and South Asia',
      lead: 'Documentary photos of real Indian and South Asian events from Wikimedia Commons, and illustrative photos from Unsplash and Pexels.',
      subs: [
        { id: 'india-documentary', title: 'Documentary (Wikimedia Commons)', items: india.filter((p) => hostLabel(p) === 'Wikimedia Commons') },
        { id: 'india-illustrative', title: 'Illustrative (Unsplash and Pexels)', items: india.filter((p) => hostLabel(p) !== 'Wikimedia Commons') },
      ],
    },
    {
      id: 'stock', title: 'Illustrative stock',
      lead: 'Protest, street and everyday photos from Unsplash and Pexels, plus a few museum objects. They illustrate ideas; they never show CSP or a specific CSP event.',
      subs: [
        { id: 'stock-unsplash', title: 'Unsplash', items: stock.filter((p) => hostLabel(p) === 'Unsplash') },
        { id: 'stock-pexels', title: 'Pexels', items: stock.filter((p) => hostLabel(p) === 'Pexels') },
        { id: 'stock-other', title: 'Other sources', items: stock.filter((p) => !['Unsplash', 'Pexels'].includes(hostLabel(p))) },
      ],
    },
  ];
  if (other.length) groups.push({ id: 'other', title: 'Other', lead: 'Photos from other sources.', subs: [{ id: 'other-all', title: 'All', items: other }] });
  return groups.map((g) => ({ ...g, subs: g.subs.filter((s) => s.items.length) })).filter((g) => g.subs.length);
}
