// Helpers for the case-study templates (index + detail). Written to cope with any entry that passes the
// caseStudies schema: missing photos, unknown photo ids, empty galleries, long or short summaries.
import type { CollectionEntry } from 'astro:content';
import { PHOTOS, type PhotoMeta, type Tone } from '../../lib/photos';

export type CaseEntry = CollectionEntry<'caseStudies'>;

const byId = new Map(PHOTOS.map((p) => [p.id, p]));

/** Registry entry for a photo id, or undefined (with a build-time warning) when the id is unknown. */
export function photo(id?: string): PhotoMeta | undefined {
  if (!id) return undefined;
  const p = byId.get(id);
  if (!p) console.warn(`[case-studies] unknown photo id "${id}" (not in src/data/photos.json); skipped.`);
  return p;
}

/** Stock (Unsplash/Pexels) photos are illustrative only; Commons/archive photos document a real, captioned event. */
export function isStock(p: PhotoMeta) {
  return p.source === 'stock' || /unsplash|pexels/i.test(`${p.sourcePage} ${p.credit}`);
}

// Registry keys ("case-study:<key>" in suggestedUse) and extra photo ids that document each case itself.
// Exact keys only: substring matching mixed up, for example, a 2022 Reclaim the Night march with Bengal 2024.
const OWN_KEYS: Record<string, string[]> = {
  'delhi-2012-justice-verma': ['delhi-2012'],
  'iceland-womens-strikes': ['iceland-womens-strike'],
  'ni-una-menos': ['ni-una-menos'],
  'poland-strajk-kobiet': ['strajk-kobiet'],
  'repeal-the-8th': ['repeal-the-8th'],
  'woman-life-freedom': ['woman-life-freedom'],
  'reclaim-the-night-bengal-2024': ['rg-kar-2024', 'rg-kar-kolkata-2024'],
};
const OWN_IDS: Record<string, string[]> = {
  'reclaim-the-night-bengal-2024': [
    'in-003-2024-kolkata-we-want-justice-candles', 'in-006-2024-kolkata-dont-stop-till-they-drop-placard',
    'in-008-2024-kolkata-street-meeting-megaphones', 'in-010-2024-kolkata-protest-under-biswa-bangla-gate',
  ],
};

/** True when a photo documents this very case (its own march, vigil or strike), not a related place or event. */
export function isOwn(p: PhotoMeta, caseId: string) {
  if (OWN_IDS[caseId]?.includes(p.id)) return true;
  const keys = p.suggestedUse.filter((u) => u.startsWith('case-study:')).map((u) => u.slice('case-study:'.length));
  if (caseId in OWN_KEYS) return keys.some((k) => OWN_KEYS[caseId].includes(k));
  return keys.some((k) => k.length > 3 && (caseId === k || caseId.startsWith(`${k}-`) || caseId.endsWith(`-${k}`)));
}

/** Stock photos whose registry caption records a real, dated public event (a march, a rally). */
export function isEventStock(p: PhotoMeta) {
  return isStock(p) && /\b(19|20)\d\d\b/.test(p.caption) && /\b(march|rally|protest|strike|walk|vigil|demonstration)\b/i.test(p.caption);
}

/** Generic stock: illustrative only. Never captioned as this movement; marked ◦ and explained once. */
export function isIllustrative(p: PhotoMeta) {
  return isStock(p) && !isEventStock(p);
}

export type Relation = 'own' | 'other' | 'illustrative';
/** How a photo relates to a case: documents it, shows another real place or event, or is illustrative stock. */
export function relation(p: PhotoMeta, caseId: string): Relation {
  if (isIllustrative(p)) return 'illustrative';
  return !isStock(p) && isOwn(p, caseId) ? 'own' : 'other';
}

/** Natural colour for documentary photos (colour is part of the record); the case's duotone for illustrative ones. */
export function heroTone(p: PhotoMeta, tone: Tone): Tone {
  if (!isIllustrative(p)) return 'natural';
  return tone === 'natural' ? 'red' : tone;
}

/** Honest caption: the registry's real what/where/when, or nothing for illustrative stock (marked ◦ instead). */
export function honestCaption(p: PhotoMeta, caseId?: string): string {
  void caseId;
  if (isIllustrative(p)) return '';
  return p.caption;
}

/** Short caption for an illustrative photo that sits on its own, outside the photo wall. */
export const ILLUSTRATIVE_NOTE = '◦ Illustrative stock photo: not this movement or a specific event.';

const MONTHS = 'January|February|March|April|May|June|July|August|September|October|November|December';
/** The date a documentary photo was taken, read from its registry caption ("24 October 2005" → "24 Oct 2005"). */
export function photoDate(p: PhotoMeta): string | undefined {
  if (isStock(p)) return undefined;
  const full = p.caption.match(new RegExp(`\\b(\\d{1,2}) (${MONTHS}) (\\d{4})\\b`));
  if (full) return `${full[1]} ${full[2].slice(0, 3)} ${full[3]}`;
  const month = p.caption.match(new RegExp(`\\b(${MONTHS}) (\\d{4})\\b`));
  if (month) return `${month[1]} ${month[2]}`;
  return p.caption.match(/\b(1[89]\d\d|20\d\d)\b/)?.[1];
}

/**
 * Hero photo: `heroPhoto` only. With no `heroPhoto` the case gets a typographic poster (see POSTERS) instead of
 * borrowing a gallery photo, so another movement's picture never sits under this movement's name and place.
 */
export function heroOf(c: CaseEntry): PhotoMeta | undefined {
  return photo(c.data.heroPhoto);
}

/** Valid gallery photos, without the hero and without duplicates. */
export function galleryOf(c: CaseEntry, heroId?: string): PhotoMeta[] {
  const seen = new Set<string>(heroId ? [heroId] : []);
  return c.data.gallery
    .map((id) => photo(id))
    .filter((p): p is PhotoMeta => !!p && !seen.has(p.id) && (seen.add(p.id), true));
}

/** Cases in reading order: `order` first (India first per the content plan), then start year, then title. */
export function sortCases(list: CaseEntry[]) {
  return [...list].sort((a, b) => a.data.order - b.data.order || a.data.start - b.data.start || a.data.title.localeCompare(b.data.title));
}

/** "06" for CASE 06. Uses `order` when it is set; falls back to the position in the sorted list. */
export function caseNo(c: CaseEntry, sorted: CaseEntry[]) {
  const n = c.data.order < 99 ? c.data.order : sorted.findIndex((x) => x.id === c.id) + 1;
  return String(n).padStart(2, '0');
}

export const isIndia = (c: CaseEntry) => c.data.region === 'India';
export const slug = (s: string) => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Main lever = the first tag that is not just the region or a place name, sentence-cased. */
export function lever(c: CaseEntry) {
  const where = `${c.data.region} ${c.data.place}`.toLowerCase();
  const t = c.data.tags.find((tag) => !where.includes(tag.toLowerCase())) ?? c.data.tags[0];
  return t ? t.charAt(0).toUpperCase() + t.slice(1) : undefined;
}

/** "Reykjavík, Iceland" style short place for card labels. */
export function shortPlace(c: CaseEntry) {
  // "Warsaw and hundreds of towns across Poland" → "Across Poland": the card label stays one short line.
  const across = c.data.place.split(',')[0].match(/\bacross (.+)$/i);
  if (across) return `Across ${across[1].trim()}`;
  const seg = c.data.place.split(',').map((x) => x.trim()).filter(Boolean);
  const two = seg.slice(0, 2).join(', ');
  return seg.length >= 2 && two.length <= 26 ? two : seg[0] ?? c.data.region;
}

/** Year a photo was taken (from its caption), for matching photos to timeline events. */
export function photoYear(p: PhotoMeta) {
  return photoDate(p)?.match(/\d{4}/)?.[0];
}

export function fmtDate(d: Date) {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
}
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

/** Meta description of 140–160 characters, answer-first, built from the summary. */
export function metaDescription(c: CaseEntry) {
  const clean = (s: string) => s.replace(/\s+/g, ' ').trim();
  let s = clean(c.data.summary);
  if (s.length > 160) {
    const sentences = s.match(/[^.!?]+[.!?]+["”’)]?(?=\s|$)/g) ?? [];
    let out = '';
    for (const sen of sentences) {
      const next = clean(out + ' ' + sen);
      if (next.length <= 160) out = next; else break;
    }
    if (out.length >= 100) s = out;
    else {
      const cut = s.slice(0, 157);
      s = cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:–—-]+$/, '') + '…';
    }
  }
  const extras = [` Case study: ${c.data.place}, ${c.data.years}.`, ' Timeline, receipts and lessons.', ' A sourced case study.', ' Sourced and dated.'];
  for (const e of extras) {
    if (s.length >= 140) break;
    if ((s + e).length <= 160) s += e;
  }
  return s;
}

/** Related cases: most shared tags, then same region, then nearest in the reading order. */
export function relatedCases(c: CaseEntry, all: CaseEntry[], exclude: string[] = [], n = 3) {
  const tags = new Set(c.data.tags.map((t) => t.toLowerCase()));
  return all
    .filter((x) => x.id !== c.id && !exclude.includes(x.id))
    .map((x) => ({
      x,
      score: x.data.tags.filter((t) => tags.has(t.toLowerCase())).length * 3 + (x.data.region === c.data.region ? 2 : 0) - Math.abs(x.data.order - c.data.order) / 100,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((r) => r.x);
}

export type BodySection = { heading: string; id: string; html: string; body: string; kind: 'prose' | 'why' };

/**
 * Splits the rendered markdown body into: an optional leading content note (a first paragraph that is
 * entirely italic), any intro HTML before the first H2, and one block per H2 section.
 */
export function splitBody(html: string) {
  let note: string | undefined;
  const at = html.search(/<h2[\s>]/i);
  let intro = at === -1 ? html : html.slice(0, at);
  const rest = at === -1 ? '' : html.slice(at);
  const m = intro.match(/^\s*<p>\s*<em>([\s\S]*?)<\/em>\s*\.?\s*<\/p>/i);
  if (m) {
    note = m[1].trim().replace(/^(content note|content warning|trigger warning|cw)\s*[:.–—-]\s*/i, '');
    note = note.charAt(0).toUpperCase() + note.slice(1);
    intro = intro.slice(m[0].length);
  }
  const sections: BodySection[] = rest
    ? rest.split(/(?=<h2[\s>])/i).filter((s) => s.trim()).map((chunk) => {
        const hm = chunk.match(/^<h2([^>]*)>([\s\S]*?)<\/h2>/i);
        const heading = hm ? hm[2].replace(/<[^>]+>/g, '').trim() : '';
        const id = hm?.[1].match(/id="([^"]+)"/)?.[1] ?? slug(heading);
        return { heading, id, html: chunk, body: hm ? chunk.slice(hm[0].length) : chunk, kind: /why it matters/i.test(heading) ? 'why' : 'prose' };
      })
    : [];
  return { note, intro: intro.trim(), sections };
}

/** Strip tags for plain-text uses (aria labels, share text). */
export const plain = (s: string) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

// ---------------------------------------------------------------------------------------------------------------
// Typographic posters: cases with no licensed photo of their own get their words set in type, on the hero and on
// cards, instead of a picture from another place. Text is either the movement's own words (sourced on the page)
// or a plain CSP line, credited as such.
// Lines use *asterisks* for the accent colour. `wide` re-breaks the lines for the wide desktop hero.
export type Poster = { lines: string[]; wide?: string[]; lang?: string; gloss?: string; credit: string; ground: 'ink' | 'red' | 'green' };
export const POSTERS: Record<string, Poster> = {
  'end-femicide-kenya': {
    lines: ['Stop', '*killing*', 'women'], wide: ['Stop *killing*', 'women'], ground: 'ink',
    credit: 'Placard words from the Nairobi march of 1 June 2026 (Africanews), set in type by CSP. No licensed photo of the Kenyan marches is available to us yet.',
  },
  'las-tesis': {
    lines: ['*Un violador*', 'en tu camino'], lang: 'es', gloss: 'A rapist in your path', ground: 'red',
    credit: 'Title of the LASTESIS performance, first staged in Valparaíso on 20 November 2019, set in type by CSP. No licensed photo of the performance is available to us yet.',
  },
  metoo: {
    lines: ['*#MeToo*'], gloss: 'Two words, since 2006', ground: 'ink',
    credit: 'The phrase Tarana Burke began using in 2006, set in type by CSP.',
  },
  'bhanwari-devi-vishaka-posh': {
    lines: ['One village', 'worker.', '*Every*', '*workplace.*'], wide: ['One village', 'worker.', '*Every workplace.*'], ground: 'green',
    credit: 'A Cultural Shock Party line, set in type. No licensed photo of Bhanwari Devi is available to us.',
  },
};
export const posterOf = (c: CaseEntry): Poster | undefined => (heroOf(c) ? undefined : POSTERS[c.id]);

/** Photos of a case's own place (a building, a museum piece), not of another movement's event. */
const PLACE_PHOTOS: Record<string, string[]> = {
  'northern-ireland-abortion': [
    'belfast-city-hall-international-womens-day-window', '1914-lisburn-lilian-metge-hunger-strike-medal', '011-belfast-welcome-mural-corner',
  ],
};

/**
 * Photos that may sit beside the story text: this movement's own photos, its own places, and illustrative stock
 * (marked ◦). Photos of other movements' events go to the photo wall, under a heading that says so.
 */
export function railEligible(p: PhotoMeta, caseId: string) {
  const r = relation(p, caseId);
  return r !== 'other' || !!PLACE_PHOTOS[caseId]?.includes(p.id);
}

/** Hand-written hero notes for heroes that show a related place or moment, not the movement itself. */
export const HERO_NOTES: Record<string, string> = {
  'pinjra-tod': 'Delhi, Sept 2015: not a Pinjra Tod event',
  'sewa-self-employed-women': 'A self-help group, 2008: not SEWA',
  'reclaim-these-streets': 'London, 2022: a Kill the Bill protest',
  'northern-ireland-abortion': 'Belfast City Hall, 2018',
};

/** Short "where, when" for a documentary photo used on another case's card. */
const PLACE_LABELS: Record<string, string> = {
  'in-027-2017-cuddalore-women-self-help-group-circle': 'a self-help group, Cuddalore, 2017',
  'in-013-2009-bengaluru-take-back-the-night-placards': 'Take Back the Night, Bengaluru, 2009',
  'in-030-2015-jantar-mantar-art-students-bilingual-placards': 'Delhi students, Sept 2015',
  'belfast-city-hall-international-womens-day-window': 'Belfast City Hall, 2018',
  '2022-london-courage-calls-kill-the-bill': 'Kill the Bill protest, London, 2022',
  'in-026-2008-rural-women-self-help-group-meeting': 'a self-help group, 2008',
  'in-033-2014-varanasi-bhu-women-medical-students': 'students at BHU, Varanasi, 2014',
  '2011-london-million-women-rise': 'Million Women Rise, London, 2011',
};

/** Card photos per case: pictures other than the hero, rotated by the page showing the card (see cardPicOf). */
const CARD_PHOTOS: Record<string, string[]> = {
  'delhi-2012-justice-verma': ['in-011-2012-delhi-raisina-hill-stop-molestation', '2012-delhi-protest-placards'],
  'sewa-self-employed-women': ['in-027-2017-cuddalore-women-self-help-group-circle'],
  'pinjra-tod': ['in-013-2009-bengaluru-take-back-the-night-placards', 'in-033-2014-varanasi-bhu-women-medical-students'],
  'reclaim-the-night-bengal-2024': ['in-009-2024-kolkata-nurses-candle-vigil', 'in-002-2024-kolkata-rg-kar-women-chanting-handprint'],
  'iceland-womens-strikes': ['2005-reykjavik-womens-strike-megaphone', '2005-reykjavik-womens-strike-intergenerational', '2005-reykjavik-womens-strike-shout'],
  'ni-una-menos': ['2018-cordoba-ni-una-menos', '2026-la-plata-ni-una-menos-c', '2026-la-plata-ni-una-menos-d'],
  'repeal-the-8th': ['2018-dublin-castle-repeal-result-a', '2018-dublin-castle-repeal-result-d', '2018-dublin-castle-repeal-result-c'],
  'northern-ireland-abortion': ['belfast-city-hall-international-womens-day-window'],
  'reclaim-these-streets': ['2022-london-courage-calls-kill-the-bill', '2011-london-million-women-rise'],
  'poland-strajk-kobiet': ['2020-krakow-strajk-kobiet', '2020-poznan-revolution-is-a-woman', '2016-lodz-black-march-b'],
  'woman-life-freedom': ['2021-vienna-jin-jiyan-azadi-mural', '2022-richmond-hill-woman-life-freedom-sign', '2022-ottawa-iran-solidarity-a'],
};

export type CardPic = { photo?: PhotoMeta; note?: string; poster?: Poster };
/**
 * What a case's card shows: its card photo (else the second gallery photo, else the hero), skipping any photo id in
 * `avoid` (photos already on the current page). Cases without a photo of their own show their poster. A documentary
 * photo of another place carries a small "Photo: <where>" note on the card.
 */
export function cardPicOf(c: CaseEntry, avoid: Set<string> = new Set(), seed = 0): CardPic {
  const poster = posterOf(c);
  if (poster) return { poster };
  const hero = heroOf(c);
  const own = CARD_PHOTOS[c.id] ?? [];
  const start = own.length ? seed % own.length : 0;
  const rotated = [...own.slice(start), ...own.slice(0, start)].map((id) => photo(id));
  const pool = [...rotated, ...galleryOf(c, hero?.id).slice(1), hero, ...galleryOf(c, hero?.id).slice(0, 1)]
    .filter((p): p is PhotoMeta => !!p && !isIllustrative(p));
  const pick = pool.find((p) => !avoid.has(p.id)) ?? pool[0];
  if (!pick) return { poster: POSTERS[c.id] };
  const note = isOwn(pick, c.id) ? undefined : PLACE_LABELS[pick.id] ?? shortCaption(pick);
  return { photo: pick, note };
}

/** "Barcelona, 2025"-style fallback from a caption: the clause holding the date. */
function shortCaption(p: PhotoMeta) {
  const y = photoYear(p);
  const m = p.caption.match(/,\s*([A-Z][^,.;()]+?),\s*(?:[A-Z][a-z]+,\s*)?(?:\d{1,2}\s+)?(?:[A-Z][a-z]+\s+)?(?:19|20)\d\d/);
  return [m?.[1], y].filter(Boolean).join(', ') || 'another place and time';
}

// Topic clusters: each case links to Journal articles and back to its milestone on /memory/.
export const CASE_ARTICLES: Record<string, string[]> = {
  'delhi-2012-justice-verma': ['protest-safety-india', 'what-is-fourth-wave-feminism'],
  'reclaim-the-night-bengal-2024': ['protest-safety-india', 'safe-online-toolkit'],
  metoo: ['safe-online-toolkit', 'what-is-fourth-wave-feminism'],
  'pinjra-tod': ['how-to-join-or-start-a-feminist-group', 'protest-safety-india'],
  'sewa-self-employed-women': ['care-is-work', 'how-to-join-or-start-a-feminist-group'],
  'iceland-womens-strikes': ['care-is-work', 'feminism-myths-and-receipts'],
  'bhanwari-devi-vishaka-posh': ['indian-feminists-history-forgot', 'safe-online-toolkit'],
  'repeal-the-8th': ['feminism-myths-and-receipts', 'how-to-join-or-start-a-feminist-group'],
  'northern-ireland-abortion': ['feminism-myths-and-receipts', 'intersectional-feminism-explained'],
  'poland-strajk-kobiet': ['feminism-myths-and-receipts', 'is-gen-z-feminist'],
  'reclaim-these-streets': ['protest-safety-india', 'what-is-fourth-wave-feminism'],
  'woman-life-freedom': ['what-is-fourth-wave-feminism', 'intersectional-feminism-explained'],
  'ni-una-menos': ['what-is-fourth-wave-feminism', 'how-to-join-or-start-a-feminist-group'],
  'las-tesis': ['what-is-fourth-wave-feminism', 'fourth-wave-reading-list'],
  'end-femicide-kenya': ['what-is-fourth-wave-feminism', 'is-gen-z-feminist'],
};
export const CASE_MEMORY: Record<string, string> = {
  'delhi-2012-justice-verma': 'delhi-protests-2012',
  'bhanwari-devi-vishaka-posh': 'vishaka-1997',
  'sewa-self-employed-women': 'sewa-1972',
  'pinjra-tod': 'pinjra-tod-2015',
  'reclaim-the-night-bengal-2024': 'reclaim-the-night-2024',
  'iceland-womens-strikes': 'iceland-strikes-1975-2023',
  'ni-una-menos': 'ni-una-menos-2015',
  metoo: 'metoo-2017',
  'woman-life-freedom': 'woman-life-freedom-2022',
};

/** Shorter <title>s where the full title would push past ~60 characters with the site suffix. H1s keep the full title. */
export const SEO_TITLES: Record<string, string> = {
  'delhi-2012-justice-verma': 'Delhi 2012 and the Justice Verma Committee',
  'sewa-self-employed-women': 'SEWA: organising self-employed women',
};
