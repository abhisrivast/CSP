// Single source of truth for organisation facts, navigation and social profiles.
// Anything marked CONFIRM is listed in /CONTENT-TODO.md and must be checked with the founder before launch.

export const SITE = {
  name: 'Cultural Shock Party',
  shortName: 'CSP',
  url: 'https://culturalshockparty.com',
  // Always pair the name with a descriptor: "culture shock" and "CSP" are crowded search terms.
  descriptor: 'Fourth Wave feminist movement',
  tagline: 'Building the Fourth Wave of Feminism',
  mission:
    'Cultural Shock Party is a political-cultural feminist movement building the intellectual, political and organisational infrastructure of the Fourth Wave of Feminism: turning ideas into research, research into public consciousness, and public consciousness into collective political action.',
  shortMission: 'Ideas into research. Research into public consciousness. Public consciousness into collective political action.',
  // CONFIRM: base and reach wording with the founder.
  base: 'India',
  baseLine: 'Founded in India, for a global generation',
  locale: 'en_IN',
  lang: 'en-IN',
  foundingYear: 2026,
  themeColor: '#CD2E2B',
} as const;

export const FOUNDER = {
  name: 'Rubby Singh',
  role: 'Founder',
  slug: 'rubby-singh',
  // Verified public facts only (research/founder.md, section 7).
  shortBio:
    'Rubby Singh is the founder of Cultural Shock Party. A social worker and book reviewer, she is the author of Garbhadosh: The Fault In Our Wombs (2026), a novel about how the idea of a "defective womb" and everyday patriarchy shape girls’ lives, and the awakening that undoes it.',
  // Only the profiles research/founder.md §7 lists as safe to publish. CONFIRM: consent to list them in schema sameAs.
  // Do not add other profiles (e.g. LinkedIn) until the founder confirms them in writing.
  sameAs: [
    'https://www.instagram.com/happytappysinghni/',
    'https://www.threads.com/@happytappysinghni',
  ],
  book: {
    title: 'Garbhadosh: The Fault In Our Wombs',
    publisher: 'Adhyyan Books',
    published: '2026-03-04',
    pages: 192,
    isbn13: '9789371642620',
    url: 'https://www.amazon.in/dp/9371642629',
  },
} as const;

export type NavItem = { label: string; href: string; hint?: string };

export const NAV: NavItem[] = [
  { label: 'About', href: '/about/', hint: 'Who we are' },
  { label: 'Manifesto', href: '/manifesto/', hint: 'What we believe' },
  { label: 'What we do', href: '/what-we-do/', hint: 'Ideas to action' },
  { label: 'Case studies', href: '/case-studies/', hint: 'Lessons from movements' },
  { label: 'Resources', href: '/resources/', hint: 'Blog, guides, toolkits' },
  { label: 'FAQ', href: '/faq/', hint: 'Straight answers' },
  { label: 'Contact', href: '/contact/', hint: 'Talk to us' },
];

export const FOOTER_NAV: { title: string; items: NavItem[] }[] = [
  {
    title: 'Explore',
    items: [
      { label: 'Manifesto', href: '/manifesto/' },
      { label: 'What we do', href: '/what-we-do/' },
      { label: 'Public memory', href: '/memory/' },
      { label: 'Case studies', href: '/case-studies/' },
      { label: 'Resources', href: '/resources/' },
    ],
  },
  {
    title: 'Take part',
    items: [
      { label: 'Join the movement', href: '/join/' },
      { label: 'FAQ', href: '/faq/' },
      { label: 'Contact', href: '/contact/' },
      { label: 'About us', href: '/about/' },
      { label: 'Our founder', href: '/about/rubby-singh/' },
    ],
  },
  {
    title: 'Trust',
    items: [
      { label: 'Independence & funding', href: '/about/#independence' },
      { label: 'Privacy', href: '/privacy/' },
      { label: 'Safeguarding', href: '/safeguarding/' },
      { label: 'Accessibility', href: '/accessibility/' },
      { label: 'Image credits', href: '/credits/' },
    ],
  },
];

// CONFIRM: only list accounts CSP owns. research/founder.md found @culturalshockparty on Instagram
// with 0 posts and an unknown owner, so it stays switched off until confirmed.
export const SOCIALS: { label: string; href: string; handle: string; live: boolean }[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/culturalshockparty/', handle: '@culturalshockparty', live: false },
];
export const liveSocials = () => SOCIALS.filter((s) => s.live);
