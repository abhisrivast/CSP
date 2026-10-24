// Helpers shared by the Resources hub, the article template and the glossary.
// Robust to any article that validates against the `articles` schema in src/content.config.ts.
import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'articles'>;
export type Kind = Article['data']['kind'];

/** Editorial order of the Journal (docs/STRATEGY.md §14). Unknown ids follow, newest first. */
export const ISSUE_ORDER = [
  'what-is-fourth-wave-feminism',
  'intersectional-feminism-explained',
  'feminism-myths-and-receipts',
  'boys-men-and-the-manosphere',
  'womens-reservation-act-explained',
  'care-is-work',
  'safe-online-toolkit',
  'how-to-join-or-start-a-feminist-group',
  'protest-safety-india',
  'indian-feminists-history-forgot',
  'fourth-wave-reading-list',
  'is-gen-z-feminist',
];

export const PILLAR_ID = 'what-is-fourth-wave-feminism';

export const KINDS: Kind[] = ['Guide', 'Explainer', 'Toolkit', 'Data', 'History', 'Essay', 'Reading list'];
export const KIND_PLURAL: Record<string, string> = {
  Guide: 'Guides', Explainer: 'Explainers', Toolkit: 'Toolkits', Data: 'Data stories', History: 'History', Essay: 'Essays', 'Reading list': 'Reading lists',
};
export const KIND_NOUN: Record<string, string> = {
  Guide: 'guide', Explainer: 'explainer', Toolkit: 'toolkit', Data: 'story', History: 'story', Essay: 'essay', 'Reading list': 'list',
};
export const kindSlug = (k: string) => k.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export const AUDIENCES = [
  { key: 'teens', value: '13–17', label: "I'm 13–17" },
  { key: 'young', value: '18–25', label: "I'm 18–25" },
  { key: 'grownups', value: 'Parents & teachers', label: 'Parents & teachers' },
  { key: 'allies', value: 'Allies', label: 'Allies' },
] as const;

/** Filter keys an article answers to. "Everyone" matches every audience filter. */
export function audienceKeys(aud: readonly string[]): string[] {
  if (!aud.length || aud.includes('Everyone')) return AUDIENCES.map((a) => a.key);
  return AUDIENCES.filter((a) => aud.includes(a.value)).map((a) => a.key);
}

/** Human audience line for chips: "13–17", "Parents & teachers"… */
export function audienceLabels(aud: readonly string[]): string[] {
  if (!aud.length || aud.includes('Everyone')) return ['Everyone'];
  // Same order on every page: youngest readers first, then grown-ups, then allies.
  const rank = (a: string) => { const i = AUDIENCES.findIndex((x) => x.value === a); return i === -1 ? 99 : i; };
  return [...aud].sort((a, b) => rank(a) - rank(b));
}

/** Words in an MDX/Markdown body, ignoring imports, JSX tags and markdown syntax. */
export function wordCount(body = ''): number {
  // Keep the words inside component props (timelines, receipts) but drop tag names, keys and URLs.
  const text = body
    .replace(/^\s*(import|export)\s.+$/gm, ' ')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/<\/?[A-Za-z][\w.]*/g, ' ')
    .replace(/\b[a-zA-Z]+(?==|:\s)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`|~{}\[\]()=<\/"'-]+/g, ' ');
  return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

export function readingMinutes(a: Article): number {
  return a.data.readingMinutes ?? Math.max(2, Math.round(wordCount(a.body) / 220));
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const fmtDate = (d: Date) => `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

/** Split a long title into a display part and a softer tail: "What is X? A guide" → ["What is X?", "A guide"]. */
export function splitTitle(title: string): [string, string | null] {
  const q = title.indexOf('? ');
  if (q > 8 && q < title.length - 4) return [title.slice(0, q + 1), title.slice(q + 2)];
  const c = title.indexOf(': ');
  if (c > 8 && c < title.length - 4) return [title.slice(0, c + 1), title.slice(c + 2)];
  const p = title.match(/^(.{8,}?)\s\((.+)\)$/);
  if (p) return [p[1], p[2]];
  return [title, null];
}

export async function getArticles(): Promise<Article[]> {
  const all = await getCollection('articles');
  const rank = (id: string) => {
    const i = ISSUE_ORDER.indexOf(id);
    return i === -1 ? 999 : i;
  };
  return all.sort((a, b) => rank(a.id) - rank(b.id) || +b.data.date - +a.data.date || a.data.title.localeCompare(b.data.title));
}

/** Related reads: the article's own `related` ids first, then same cluster, then the issue order. Always up to `n`. */
export function relatedFor(a: Article, all: Article[], n = 3): Article[] {
  const out: Article[] = [];
  const push = (x?: Article) => { if (x && x.id !== a.id && !out.includes(x) && out.length < n) out.push(x); };
  a.data.related.forEach((id) => push(all.find((x) => x.id === id)));
  all.filter((x) => x.data.cluster === a.data.cluster).forEach(push);
  if (a.id !== PILLAR_ID) push(all.find((x) => x.id === PILLAR_ID));
  all.forEach(push);
  return out;
}

/**
 * Card photos: each article's cards use pictures other than its hero, so the same few images do not close every
 * page. Each article has a small pool; the page showing the card picks a different starting point in it (seed),
 * so a much-linked article does not show the same picture everywhere. Ids come from src/data/photos.json.
 */
export const CARD_PHOTOS: Record<string, string[]> = {
  'what-is-fourth-wave-feminism': ['2024-lisbon-feminist-strike-d', '018-queretaro-8m-march-2024', '2026-chicago-iwd-march-d'],
  'intersectional-feminism-explained': ['2018-london-feminists-unite-against-racism', '2015-new-york-say-her-name-a', 'in-029-2026-jantar-mantar-protest-trans-amendment-bill'],
  'feminism-myths-and-receipts': ['060-armed-with-a-mind-sign', '023-stockholm-the-future-is-female', '042-whatever-youre-not-changing-bw'],
  'boys-men-and-the-manosphere': ['025-educate-your-son-sign-2026', '085-stacked-hands-sweaters', '057-kuala-lumpur-boys-held-accountable'],
  'womens-reservation-act-explained': ['063-india-we-want-policy-bw', 'in-031-2016-mumbai-csmt-lit-purple-international-womens-day', 'in-058-haryana-four-village-women-on-road'],
  'care-is-work': ['in-020-2021-tikri-women-farmers-tractor-trolley', 'in-059-kerala-woman-farmer-watering-field'],
  'safe-online-toolkit': ['080-writing-in-notebook-desk', '088-three-women-hijabs-embrace', '2025-vienna-no-means-no-graffiti'],
  'how-to-join-or-start-a-feminist-group': ['073-sticky-notes-workshop-milan', '076-two-women-art-workshop'],
  'protest-safety-india': ['in-050-delhi-jantar-mantar-red-instrument', 'in-041-kolkata-pride-woman-teal-sari-rainbow-flag', '2026-chicago-iwd-march-h'],
  'indian-feminists-history-forgot': ['in-019-manipur-meira-paibi-torch-bearer-sculptures', 'jai-jagat-half-the-world-sticker', 'in-017-2019-kerala-womens-wall-roadside'],
  'fourth-wave-reading-list': ['082-reading-in-a-book-lined-room', 'art-feminism-india-editathon-bookshop', 'in-056-woman-in-blue-sari-reading-outdoors'],
  'is-gen-z-feminist': ['038-young-pretty-feminist-sign', '068-kolkata-pride-march-joy', '2024-paris-8m-mon-corps-mon-choix'],
};

/** A small stable number from a string, used to vary card pictures from page to page. */
export function seedOf(s: string): number {
  let h = 0;
  for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h;
}

/** Photo ids an article shows in its body (MDX <Photo id="…" />). */
export function bodyPhotoIds(a: Article): string[] {
  return [...(a.body ?? '').matchAll(/<Photo[^>]*\sid=["']([^"']+)["']/g)].map((m) => m[1]);
}

/** Every photo id on an article page: hero plus body. */
export function pagePhotoIds(a: Article): Set<string> {
  return new Set([a.data.heroPhoto, ...bodyPhotoIds(a)].filter(Boolean) as string[]);
}

/**
 * The photo for an article's card: one from its card pool (starting at `seed`), else its hero, else a body photo,
 * skipping ids in `avoid` (photos already on the current page). Undefined only when every candidate is in use.
 */
export function cardPhotoOf(a: Article, avoid: Set<string> = new Set(), seed = 0): string | undefined {
  const own = CARD_PHOTOS[a.id] ?? [];
  const start = own.length ? seed % own.length : 0;
  const rotated = [...own.slice(start), ...own.slice(0, start)];
  const pool = [...rotated, a.data.heroPhoto, ...bodyPhotoIds(a)].filter(Boolean) as string[];
  return pool.find((id) => !avoid.has(id));
}

/** Shorter <title>s for search results (Head adds " | Cultural Shock Party"). H1 and schema keep the full title. */
export const SEO_TITLES: Record<string, string> = {
  'what-is-fourth-wave-feminism': 'What is Fourth Wave feminism?',
  'intersectional-feminism-explained': 'Intersectional feminism, explained',
  'womens-reservation-act-explained': "Women's Reservation Act, explained",
  'how-to-join-or-start-a-feminist-group': 'How to join or start a feminist group',
  'protest-safety-india': 'Protest safety in India: a guide',
  'safe-online-toolkit': 'Safe online: deepfakes and image abuse',
  'fourth-wave-reading-list': 'Fourth Wave reading list: 30 picks',
  'indian-feminists-history-forgot': '12 Indian feminists textbooks skipped',
  'boys-men-and-the-manosphere': 'Boys, men and the manosphere',
  'is-gen-z-feminist': 'Is Gen Z feminist? What the data says',
  'feminism-myths-and-receipts': '10 feminism myths, and the receipts',
};
