// JSON-LD builders. Every page emits one @graph: the site-wide Organization + WebSite nodes,
// plus whatever page-specific nodes it passes in.
import { FOUNDER, SITE, liveSocials } from '../data/site';

export const abs = (path: string) => new URL(path, SITE.url).href;

const ORG_ID = abs('/#org');
const SITE_ID = abs('/#website');
export const FOUNDER_ID = abs(`/about/${FOUNDER.slug}/#person`);

export function orgNode() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: abs('/'),
    logo: { '@type': 'ImageObject', url: abs('/brand/csp-badge-512.jpg'), width: 512, height: 512 },
    image: abs('/brand/csp-badge-512.jpg'),
    description: SITE.mission,
    slogan: SITE.shortMission,
    foundingDate: String(SITE.foundingYear),
    founder: { '@id': FOUNDER_ID },
    areaServed: SITE.base, // CONFIRM
    knowsAbout: ['Fourth-wave feminism', 'Feminist politics', 'Gender equality', 'Public memory', 'Political research', 'Collective action'],
    // Omitted while CSP has no confirmed social accounts (an empty sameAs says nothing).
    ...(liveSocials().length ? { sameAs: liveSocials().map((s) => s.href) } : {}),
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: abs('/'),
    name: SITE.name,
    alternateName: `${SITE.name} (${SITE.shortName})`,
    description: `${SITE.name}: ${SITE.descriptor}.`,
    inLanguage: SITE.lang,
    publisher: { '@id': ORG_ID },
  };
}

export function founderNode() {
  return {
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: FOUNDER.name,
    jobTitle: FOUNDER.role,
    worksFor: { '@id': ORG_ID },
    url: abs(`/about/${FOUNDER.slug}/`),
    description: FOUNDER.shortBio,
    sameAs: FOUNDER.sameAs,
  };
}

export function bookNode() {
  const b = FOUNDER.book;
  return {
    '@type': 'Book',
    '@id': abs(`/about/${FOUNDER.slug}/#book`),
    name: b.title,
    author: { '@id': FOUNDER_ID },
    publisher: { '@type': 'Organization', name: b.publisher },
    datePublished: b.published,
    bookFormat: 'https://schema.org/Hardcover',
    numberOfPages: b.pages,
    isbn: b.isbn13,
    sameAs: [b.url],
  };
}

export function webPageNode(opts: { path: string; title: string; description: string; type?: string; image?: string; breadcrumb?: boolean; dateModified?: string }) {
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': abs(opts.path) + '#page',
    url: abs(opts.path),
    name: opts.title,
    description: opts.description,
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: SITE.lang,
    ...(opts.image ? { primaryImageOfPage: { '@type': 'ImageObject', url: abs(opts.image) } } : {}),
    ...(opts.breadcrumb ? { breadcrumb: { '@id': abs(opts.path) + '#breadcrumb' } } : {}),
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
  };
}

export function breadcrumbNode(path: string, items: { name: string; href: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': abs(path) + '#breadcrumb',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.href) })),
  };
}

export function articleNode(opts: {
  path: string; title: string; description: string; image?: string; datePublished: string; dateModified?: string;
  authorName?: string; section?: string; keywords?: string[]; type?: 'Article' | 'BlogPosting' | 'Report';
}) {
  const author = !opts.authorName || opts.authorName === FOUNDER.name
    ? { '@id': FOUNDER_ID }
    : opts.authorName === SITE.name ? { '@id': ORG_ID } : { '@type': 'Person', name: opts.authorName };
  return {
    '@type': opts.type ?? 'Article',
    '@id': abs(opts.path) + '#article',
    mainEntityOfPage: { '@id': abs(opts.path) + '#page' },
    headline: opts.title,
    description: opts.description,
    ...(opts.image ? { image: [abs(opts.image)] } : {}),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author,
    publisher: { '@id': ORG_ID },
    inLanguage: SITE.lang,
    ...(opts.section ? { articleSection: opts.section } : {}),
    ...(opts.keywords?.length ? { keywords: opts.keywords.join(', ') } : {}),
  };
}

export function faqNode(path: string, items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    '@id': abs(path) + '#faq',
    mainEntity: items.map((it) => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a } })),
  };
}

export function definedTermSetNode(path: string, name: string, terms: { term: string; definition: string; id: string }[]) {
  return {
    '@type': 'DefinedTermSet',
    '@id': abs(path) + '#terms',
    name,
    hasDefinedTerm: terms.map((t) => ({ '@type': 'DefinedTerm', '@id': abs(path) + '#' + t.id, name: t.term, description: t.definition, inDefinedTermSet: abs(path) + '#terms' })),
  };
}

export function graph(nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': [orgNode(), websiteNode(), ...nodes] };
}
