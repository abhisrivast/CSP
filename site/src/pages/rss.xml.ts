import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../data/site';

// RSS 2.0 <author> must be an email address, so authors go in <dc:creator>. atom:link rel="self" makes the feed valid.
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = async ({ site }) => {
  const articles = (await getCollection('articles')).sort((a, b) => +b.data.date - +a.data.date);
  const self = new URL('/rss.xml', site).href;
  return rss({
    title: `${SITE.name}: Resources`,
    description: `Guides, explainers, toolkits and essays from ${SITE.name}, a ${SITE.descriptor}.`,
    site: site!,
    xmlns: { atom: 'http://www.w3.org/2005/Atom', dc: 'http://purl.org/dc/elements/1.1/' },
    items: articles.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.date,
      link: `/resources/${a.id}/`,
      categories: [a.data.kind, a.data.cluster],
      customData: `<dc:creator>${esc(a.data.author ?? SITE.name)}</dc:creator>`,
    })),
    customData: `<language>${SITE.lang.toLowerCase()}</language><atom:link href="${self}" rel="self" type="application/rss+xml"/>`,
  });
};
