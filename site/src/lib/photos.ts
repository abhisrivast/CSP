// Photo registry: every image on the site comes from src/data/photos.json (built by scripts/photos.mjs
// from the licence-checked research manifests). Reference photos by id; never hotlink.
import type { ImageMetadata } from 'astro';
import registry from '../data/photos.json';

export type Tone = 'natural' | 'red' | 'ink' | 'green' | 'pink' | 'marigold';

export type PhotoMeta = {
  id: string; file: string; source: string; width: number; height: number;
  orientation: 'landscape' | 'portrait' | 'square';
  title: string; caption: string; alt: string; author: string;
  licence: string; licenceUrl: string; sourcePage: string; credit: string;
  peopleIdentifiable: boolean; tags: string[]; suggestedUse: string[]; notes: string;
};

const originals = import.meta.glob<ImageMetadata>('/src/assets/photos/*.jpg', { import: 'default' });
const tones = import.meta.glob<ImageMetadata>('/src/assets/photos/tones/*.jpg', { import: 'default' });

export const PHOTOS = registry as PhotoMeta[];
const byId = new Map(PHOTOS.map((p) => [p.id, p]));

export function photoMeta(id: string): PhotoMeta {
  const meta = byId.get(id);
  if (!meta) throw new Error(`Unknown photo id "${id}". See src/data/photos.json.`);
  return meta;
}

export async function getPhoto(id: string, tone: Tone = 'natural') {
  const meta = photoMeta(id);
  const key = tone === 'natural' ? `/src/assets/photos/${meta.file}` : `/src/assets/photos/tones/${id}--${tone}.jpg`;
  const load = tone === 'natural' ? originals[key] : tones[key];
  if (!load) throw new Error(`Missing image file ${key}. Run "npm run photos".`);
  return { src: await load(), meta };
}

/** Photos whose tags or suggested uses match all the given terms (case-insensitive). */
export function findPhotos(...terms: string[]) {
  const t = terms.map((s) => s.toLowerCase());
  return PHOTOS.filter((p) => {
    const hay = [...p.tags, ...p.suggestedUse, p.title, p.caption].join(' ').toLowerCase();
    return t.every((term) => hay.includes(term));
  });
}
