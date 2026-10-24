// Photo picks for the homepage sections that draw on the collections (case files, journal). Every pick skips the
// photos the homepage already shows (homePhotoIds) and the picks made before it, so no picture appears twice.
import { getCollection } from 'astro:content';
import { cardPicOf, photo, sortCases, type CaseEntry, type Poster } from '../cases/case-utils';
import { cardPhotoOf, type Article } from '../resources/lib';
import type { Tone } from '../../lib/photos';
import { CASE_PHOTO, FEATURED_CASES, JOURNAL, homePhotoIds } from './home';

export type CasePick = { c: CaseEntry; photo?: string; tone: Tone; alt?: string; note?: string; poster?: Poster };
export type JournalPick = { a: Article; photo?: string; tone: Tone };

const duo = (t: Tone): Tone => (t === 'natural' ? 'red' : t);

/** A plain typographic poster from the case title, for a case with neither a usable photo nor a poster of its own. */
function titlePoster(c: CaseEntry): Poster {
  const head = c.data.title.split(/[:,]/)[0].trim();
  const lines: string[] = [];
  for (const w of head.split(/\s+/)) {
    const last = lines[lines.length - 1];
    if (last && (last + ' ' + w).length <= 11) lines[lines.length - 1] = `${last} ${w}`;
    else lines.push(w);
  }
  return { lines, ground: 'ink', credit: '' };
}

export async function casePicks(used = homePhotoIds()): Promise<{ cases: CaseEntry[]; picks: CasePick[] }> {
  const cases = sortCases(await getCollection('caseStudies'));
  const featured = FEATURED_CASES.map((id) => cases.find((c) => c.id === id)).filter((c): c is CaseEntry => !!c);
  const picks = featured.map((c, i): CasePick => {
    const own = CASE_PHOTO[c.id];
    if (own && photo(own.id) && !used.has(own.id)) {
      used.add(own.id);
      return { c, photo: own.id, tone: own.tone, alt: own.alt, note: own.note };
    }
    const pic = cardPicOf(c, used, i);
    if (pic.photo && !used.has(pic.photo.id)) {
      used.add(pic.photo.id);
      return { c, photo: pic.photo.id, tone: duo(c.data.tone), note: pic.note };
    }
    return { c, tone: duo(c.data.tone), poster: pic.poster ?? titlePoster(c) };
  });
  return { cases, picks };
}

export async function journalPicks(): Promise<{ total: number; picks: JournalPick[] }> {
  const used = homePhotoIds();
  (await casePicks(used)); // adds the case-file photos to `used`
  const all = await getCollection('articles');
  const picks = JOURNAL.flatMap((j): JournalPick[] => {
    const a = all.find((x) => x.id === j.id);
    if (!a) return [];
    const id = cardPhotoOf(a, used, j.seed);
    if (id) used.add(id);
    return [{ a, photo: id, tone: j.tone }];
  });
  return { total: all.length, picks };
}
