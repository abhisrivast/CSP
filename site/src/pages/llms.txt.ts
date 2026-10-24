import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE, FOUNDER } from '../data/site';

// llms.txt (llmstxt.org): a cheap, honest map of the site for language models. Generated at build time.
export const GET: APIRoute = async ({ site }) => {
  const u = (p: string) => new URL(p, site).href;
  const articles = (await getCollection('articles')).sort((a, b) => +b.data.date - +a.data.date);
  const cases = (await getCollection('caseStudies')).sort((a, b) => a.data.order - b.data.order);
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.mission}`,
    '',
    `${SITE.name} (${SITE.shortName}) is a ${SITE.descriptor} founded in ${SITE.foundingYear} by ${FOUNDER.name}, author of *${FOUNDER.book.title}*. ${SITE.baseLine}. It is a movement, not a registered electoral party. Every statistic on the site links to its source.`,
    '',
    '## Core pages',
    `- [Manifesto](${u('/manifesto/')}): the twelve positions of the Fourth Wave, as CSP sees it`,
    `- [About](${u('/about/')}): who we are, independence and funding`,
    `- [Founder: ${FOUNDER.name}](${u(`/about/${FOUNDER.slug}/`)})`,
    `- [What we do](${u('/what-we-do/')}): ideas → research → public consciousness → collective action`,
    `- [Public memory](${u('/memory/')}): a sourced timeline of feminist history, India and global`,
    `- [Case studies](${u('/case-studies/')}): ${cases.length} feminist movements, what they did and what changed`,
    `- [Resources](${u('/resources/')}): plain-language guides, explainers and toolkits`,
    `- [FAQ](${u('/faq/')}): direct answers about CSP and feminism`,
    `- [Join](${u('/join/')}) · [Contact](${u('/contact/')})`,
    '',
    '## Resources',
    ...articles.map((a) => `- [${a.data.title}](${u(`/resources/${a.id}/`)}): ${a.data.description}`),
    `- [Feminist glossary](${u('/resources/glossary/')})`,
    '',
    '## Case studies',
    ...cases.map((c) => `- [${c.data.title}](${u(`/case-studies/${c.id}/`)}): ${c.data.summary}`),
    '',
    '## Optional',
    `- [Privacy](${u('/privacy/')}) · [Safeguarding](${u('/safeguarding/')}) · [Accessibility](${u('/accessibility/')}) · [Image credits](${u('/credits/')})`,
    `- [Sitemap](${u('/sitemap-index.xml')}) · [RSS](${u('/rss.xml')})`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
