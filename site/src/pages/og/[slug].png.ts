import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { ogPng, type OgInput } from '../../lib/og';
import { OG_PAGES } from '../../data/og';

export const getStaticPaths = (async () => {
  const articles = await getCollection('articles');
  const cases = await getCollection('caseStudies');
  return [
    ...Object.entries(OG_PAGES).map(([slug, p]) => ({ params: { slug }, props: p })),
    ...articles.map((a) => ({ params: { slug: `resources-${a.id}` }, props: { title: a.data.title, label: a.data.kind } })),
    ...cases.map((c) => ({ params: { slug: `case-${c.id}` }, props: { title: c.data.title, label: `Case study · ${c.data.place}` } })),
  ];
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) =>
  new Response(new Uint8Array(await ogPng(props as OgInput)), { headers: { 'Content-Type': 'image/png' } });
