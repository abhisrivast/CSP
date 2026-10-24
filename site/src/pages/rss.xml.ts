import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../data/site';

export const GET: APIRoute = async ({ site }) => {
  const articles = (await getCollection('articles')).sort((a, b) => +b.data.date - +a.data.date);
  return rss({
    title: `${SITE.name}: Resources`,
    description: `Guides, explainers, toolkits and essays from ${SITE.name}, a ${SITE.descriptor}.`,
    site: site!,
    items: articles.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.date,
      link: `/resources/${a.id}/`,
      categories: [a.data.kind, a.data.cluster],
      author: a.data.author,
    })),
    customData: `<language>${SITE.lang.toLowerCase()}</language>`,
  });
};
