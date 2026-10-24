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
  return [...aud];
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
