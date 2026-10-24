// Share-card copy for fixed pages. Collections (articles, case studies) get cards automatically.
// Pages reference their card as image={`/og/${slug}.png`}.
export const OG_PAGES: Record<string, { title: string; label?: string; note?: string }> = {
  default: { title: "We're building the Fourth Wave", label: 'Fourth Wave feminist movement' },
  about: { title: 'About Cultural Shock Party', label: 'Who we are' },
  'rubby-singh': { title: 'Rubby Singh, founder', label: 'Our founder' },
  manifesto: { title: 'The Fourth Wave Manifesto', label: 'What we believe', note: 'Sign it. Rewrite it with us.' },
  'what-we-do': { title: 'From ideas to power', label: 'What we do' },
  memory: { title: 'The struggles that brought us here', label: 'Public memory', note: 'Nobody starts from zero.' },
  'case-studies': { title: 'What movements teach us', label: 'Case studies' },
  resources: { title: 'Guides, explainers & toolkits', label: 'Resources' },
  glossary: { title: 'The feminist glossary', label: 'Resources', note: 'Plain words, no jargon.' },
  faq: { title: 'Straight answers', label: 'FAQ' },
  join: { title: 'Join the movement', label: 'Start where you are', note: 'Bring a friend. Yes, boys too.' },
  contact: { title: 'Talk to us', label: 'Contact' },
};
