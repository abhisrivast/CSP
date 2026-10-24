// The eight cross-cutting lessons for the /case-studies/ landing page, paraphrased from
// research/case-studies.md §1 (plus peers.md §2.13 for the Ni Una Menos domain, and
// research/india-fact-check.md for Vishaka, 13 Aug 1997). `cases` are case-study ids; links to ids that do
// not exist yet are dropped by the page.
export type CrossLesson = {
  title: string;
  text: string;
  forCsp: string;
  cases: string[];
  photo: string;
  tone: 'red' | 'ink' | 'green' | 'pink' | 'marigold';
};

export const CROSS_LESSONS: CrossLesson[] = [
  {
    title: 'Count what the state won’t',
    text: 'The strongest movements built the evidence their governments lacked. Argentina’s Supreme Court started a national femicide register in 2015, the year Ni Una Menos first marched and demanded official numbers. Kenyan groups kept counting after official data stopped in March 2025. Iceland turned its pay gap into a time of day.',
    forCsp: 'A Receipts Desk that publishes its trackers and its methods is the backbone of the movement.',
    cases: ['ni-una-menos', 'end-femicide-kenya', 'iceland-womens-strikes', 'repeal-the-8th'],
    photo: 'in-054-older-woman-writing-in-ledger-shop',
    tone: 'marigold',
  },
  {
    title: 'Design actions people can copy',
    text: 'Good formats jump borders. Las Tesis’ street performance was restaged in more than 200 cities within a month (Al Jazeera, 20 Dec 2019). Poland’s 2016 Black Monday was modelled on Iceland’s 1975 day off, and Ireland’s Strike 4 Repeal took its cue from Poland.',
    forCsp: 'Publish open action kits: the format, the script, a safety plan and the artwork, free to reuse.',
    cases: ['las-tesis', 'iceland-womens-strikes', 'poland-strajk-kobiet', 'repeal-the-8th'],
    photo: '2016-lodz-black-march-a',
    tone: 'red',
  },
  {
    title: 'Short, hopeful, rooted slogans travel',
    text: '“Ni una menos” (not one [woman] less) comes from a 1995 line by the Mexican poet Susana Chávez. “Woman, Life, Freedom” comes from the Kurdish women’s movement. Both are short, both say what people are for, and both carry their history with them.',
    forCsp: 'Say what we want in a few words, and always credit where a slogan came from.',
    cases: ['ni-una-menos', 'woman-life-freedom'],
    photo: '026-zurich-ni-una-menos-graffiti',
    tone: 'pink',
  },
  {
    title: 'Use every door into the system',
    text: 'Movements won through whatever channel was open: a government consultation in Delhi (2012–13), Supreme Court guidelines after Vishaka (1997), a citizens’ assembly in Ireland, UN treaty bodies and courts for Northern Ireland, judicial review of the police in London, and the ballot box in Poland (2023).',
    forCsp: 'Map where power actually sits before choosing tactics.',
    cases: ['delhi-2012-justice-verma', 'bhanwari-devi-vishaka-posh', 'repeal-the-8th', 'northern-ireland-abortion', 'reclaim-these-streets', 'poland-strajk-kobiet'],
    photo: '2012-delhi-raisina-hill-protest-crowd',
    tone: 'ink',
  },
  {
    title: 'Wins can be undone, so build them to last',
    text: 'Argentina’s women’s ministry was dissolved in December 2023. A landmark #MeToo conviction was overturned in New York in April 2024. Poland’s 2016 victory was reversed by a court ruling in 2020. Chile’s voters rejected the parity convention’s draft constitution in 2022.',
    forCsp: 'Write gains into law, keep watching them, and report every year on whether they still hold.',
    cases: ['ni-una-menos', 'metoo', 'poland-strajk-kobiet', 'las-tesis'],
    photo: '2020-poznan-revolution-is-a-woman',
    tone: 'green',
  },
  {
    title: 'Inclusion is strategy, not decoration',
    text: 'In February 2019, Bahujan, Muslim and tribal members left Pinjra Tod, citing upper-caste dominance and tokenism. Tarana Burke, who began “me too” in 2006, publicly challenged the erasure of Black women’s work once the hashtag went global.',
    forCsp: 'Build leadership across caste, class, religion, region and gender identity from the first day.',
    cases: ['pinjra-tod', 'metoo'],
    photo: '2018-london-feminists-unite-against-racism',
    tone: 'red',
  },
  {
    title: 'Protect your people',
    text: 'Organisers have faced police complaints and prosecutions (Chile and Poland, 2020), arrests under anti-terror law (Pinjra Tod members, 2020), teargas on peaceful marches (Kenya, 2024) and deadly crackdowns (Iran, 2022 and 2026). Courage is not a safety plan.',
    forCsp: 'Legal support, digital security and safeguarding are core infrastructure, budgeted from the start.',
    cases: ['pinjra-tod', 'las-tesis', 'poland-strajk-kobiet', 'end-femicide-kenya', 'woman-life-freedom'],
    photo: '086-clasped-hands-overhead',
    tone: 'ink',
  },
  {
    title: 'Own your memory and your tools',
    text: 'Iceland’s strikes come back on the same date, decade after decade. Kenya’s MASKAN exhibition turned femicide data into public memory in 2025. By contrast, Ni Una Menos’ old web address now serves a casino page, and Reclaim These Streets’ domain points to a for-sale page (both checked 24 Oct 2026).',
    forCsp: 'Archive everything, and keep domains, data and accounts in the movement’s name.',
    cases: ['iceland-womens-strikes', 'end-femicide-kenya', 'ni-una-menos', 'reclaim-these-streets'],
    photo: '2026-la-plata-ni-una-menos-a',
    tone: 'pink',
  },
];
