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

/** True when the registry tags a photo for this very case study ("case-study:<id>"-style suggested use). */
export function isOwn(p: PhotoMeta, caseId: string) {
  return p.suggestedUse.some((u) => {
    if (!u.startsWith('case-study:')) return false;
    const k = u.slice('case-study:'.length);
    return k.length > 3 && (caseId.includes(k) || k.includes(caseId));
  });
}

/** Natural colour for documentary photos (colour is part of the record); the case's duotone for illustrative ones. */
export function heroTone(p: PhotoMeta, tone: Tone): Tone {
  if (!isStock(p)) return 'natural';
  return tone === 'natural' ? 'red' : tone;
}

/** Honest caption: the registry's real what/where/when for documentary photos; a generic line for stock. */
export function honestCaption(p: PhotoMeta, caseId?: string): string {
  if (isStock(p)) return 'Illustrative photo. It does not show this movement or a specific event.';
  // Registry captions are true (what, where, when), so a photo from another event explains itself.
  void caseId;
  return p.caption;
}

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

/** Hero photo: heroPhoto, else the first valid gallery photo. */
export function heroOf(c: CaseEntry): PhotoMeta | undefined {
  return photo(c.data.heroPhoto) ?? c.data.gallery.map((id) => byId.get(id)).find(Boolean);
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
