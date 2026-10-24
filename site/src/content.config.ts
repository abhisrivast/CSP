// Content collections. Editors (and later a git-based CMS) change these files, never page templates.
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const tone = z.enum(['natural', 'red', 'ink', 'green', 'pink', 'marigold']);
const source = z.object({
  label: z.string(),
  href: z.string().url(),
  publisher: z.string().optional(),
  date: z.string().optional(),
  note: z.string().optional(),
});
const stat = z.object({
  figure: z.string(),
  label: z.string(),
  source: z.string(),
  href: z.string().url(),
  date: z.string(),
});

const caseStudies = defineCollection({
  loader: glob({ base: './src/content/case-studies', pattern: '*.md' }),
  schema: z.object({
    title: z.string(),                       // "Ni Una Menos"
    dek: z.string(),                         // one-line standfirst
    summary: z.string(),                     // answer-first 1–2 sentences (quoted by answer engines)
    place: z.string(),                       // "Buenos Aires, Argentina"
    region: z.enum(['India', 'South Asia', 'Latin America', 'Europe', 'Middle East', 'Africa', 'North America', 'Global']),
    years: z.string(),                       // "2015–present"
    start: z.number(),                       // sort key
    order: z.number().default(99),
    heroPhoto: z.string().optional(),        // photo registry id
    tone: tone.default('red'),
    gallery: z.array(z.string()).default([]),
    timeline: z.array(z.object({ date: z.string(), title: z.string(), text: z.string().optional() })),
    numbers: z.array(stat).default([]),
    stages: z.object({                       // what the movement did, mapped onto CSP's engine
      ideas: z.string(), research: z.string(), consciousness: z.string(), action: z.string(),
    }),
    lessons: z.array(z.object({ title: z.string(), text: z.string() })),
    limits: z.string(),                      // critiques and what didn't work
    tags: z.array(z.string()).default([]),
    sources: z.array(source).min(3),
    updated: z.coerce.date(),
  }),
});

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    kind: z.enum(['Explainer', 'Essay', 'Guide', 'Toolkit', 'Reading list', 'Data', 'History']),
    cluster: z.string(),                     // SEO topic cluster, e.g. "fourth-wave", "join-and-act"
    audience: z.array(z.enum(['13–17', '18–25', 'Parents & teachers', 'Allies', 'Everyone'])).default(['Everyone']),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('Cultural Shock Party'),
    heroPhoto: z.string().optional(),
    tone: tone.default('red'),
    tldr: z.array(z.string()).min(2).max(5), // "In 30 seconds" bullets, shown first
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    sources: z.array(source).default([]),
    related: z.array(z.string()).default([]), // other article ids
    featured: z.boolean().default(false),
    readingMinutes: z.number().optional(),
  }),
});

const faq = defineCollection({
  loader: file('src/content/faq.json'),
  schema: z.object({
    id: z.string(),
    group: z.enum(['About CSP', 'Joining and taking part', 'Feminism basics', 'Safety, data and trust', 'Issues and action']),
    q: z.string(),
    a: z.string(),                           // first sentence answers directly; plain text, no HTML
    more: z.string().optional(),             // optional second paragraph
    link: z.object({ label: z.string(), href: z.string() }).optional(),
    order: z.number().default(99),
  }),
});

const memory = defineCollection({
  loader: file('src/content/memory.json'),
  schema: z.object({
    id: z.string(),
    date: z.string(),                        // display date
    year: z.number(),
    title: z.string(),
    text: z.string(),                        // what happened, plain language
    why: z.string(),                         // why it matters for the Fourth Wave
    place: z.string().optional(),
    region: z.enum(['India', 'Global']),
    tag: z.string().optional(),              // Education, Law, Street, Culture, Work, Vote…
    photo: z.string().optional(),
    sources: z.array(source).min(1),
  }),
});

const glossary = defineCollection({
  loader: file('src/content/glossary.json'),
  schema: z.object({
    id: z.string(),
    term: z.string(),
    definition: z.string(),                  // one or two plain-language sentences
    example: z.string().optional(),
    hindi: z.string().optional(),            // Hindi term where common, e.g. "नारीवाद"
    see: z.array(z.string()).default([]),
    source: source.optional(),
  }),
});

export const collections = { caseStudies, articles, faq, memory, glossary };
