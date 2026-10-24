// Data for the homepage. Every figure is a receipt with a source and date (docs/STRATEGY.md §4);
// every photo id comes from src/data/photos.json. Real-event photos keep their real what/where/when;
// stock photos (Unsplash/Pexels) are used as illustration only and never captioned as a specific event.
import type { Tone } from '../../lib/photos';

export const SRC = {
  air: 'https://newsonair.gov.in/ls-passes-womens-reservation-bill-providing-one-third-reservation-of-seats-for-women-in-lower-house-and-state-legislative-assemblies',
  dataful: 'https://insights.dataful.in/articles/women-in-lok-sabha-at-138-slow-gains-persistent-gaps',
  tus: 'https://mospi.gov.in/sites/default/files/press_release/PR_TUS_25022025.pdf',
  who: 'https://www.who.int/news/item/19-11-2025-lifetime-toll--840-million-women-faced-partner-or-sexual-violence',
  ipsos: 'https://www.ipsos.com/sites/default/files/ct/news/documents/2026-03/IWD%202026%20Global%20Charts%20FINAL.pdf',
  kcl: 'https://www.kcl.ac.uk/news/almost-a-third-of-gen-z-men-agree-a-wife-should-obey-her-husband',
};

/* ---------- hero collage (4 real-event photos; the first is the LCP image) ---------- */
export type HeroPhoto = { id: string; tone: Tone; alt: string; key: string; position?: string };
export const HERO_PHOTOS: HeroPhoto[] = [
  {
    id: 'in-030-2015-jantar-mantar-art-students-bilingual-placards', tone: 'red', position: '50% 40%',
    alt: 'Art students shout and hold up hand-painted placards in Hindi and English, “Fight for us, fight for all”, at a rally at Jantar Mantar, New Delhi.',
    key: 'College of Art students rally at Jantar Mantar, New Delhi, 2 September 2015',
  },
  {
    id: 'in-020-2021-tikri-women-farmers-tractor-trolley', tone: 'marigold',
    alt: 'Women in bright dupattas ride a painted tractor trolley, arms raised.',
    key: 'Women ride to the Tikri border farmers’ protest for Working Women’s Day, 8 March 2021',
  },
  {
    id: '2005-reykjavik-womens-strike-shout', tone: 'ink', position: '60% 50%',
    alt: 'A young woman shouts with joy beneath hand-painted placards.',
    key: 'The women’s strike in Reykjavík, Iceland, 24 October 2005',
  },
  {
    id: 'in-036-2019-bhubaneswar-pride-ek-ladki-ko-dekha-placard', tone: 'pink', position: '55% 45%',
    alt: 'A smiling marcher holds a hand-painted placard reading “Ek Ladki Ko Dekha To Aisa Laga”.',
    key: 'Bhubaneswar Pride Parade, Odisha, 4 August 2019',
  },
];

/* ---------- the engine: one illustrative photo per stage ---------- */
export const ENGINE_PHOTOS: { id: string; tone: Tone; alt: string; position?: string }[] = [
  { id: 'in-052-west-bengal-woman-eyes-over-bengali-book', tone: 'marigold', alt: 'A woman looks up over the top of an open Bengali book.' },
  { id: 'in-053-greater-noida-student-studying-in-library', tone: 'ink', alt: 'A student works through her notes at a library table.', position: '50% 45%' },
  { id: 'in-039-2019-kolkata-pride-workshop-love-knows-no-gender', tone: 'pink', alt: 'A hand paints the words “Love knows no gender” on a poster.' },
  { id: '2024-lisbon-feminist-strike-b', tone: 'red', alt: 'Women chant behind a banner at a feminist march at night.' },
];

/* ---------- why now: four receipts, hope first ---------- */
export const RECEIPTS = [
  {
    figure: '454–2', tone: 'red' as const, tilt: -1.2,
    label: 'Lok Sabha vote, 20 September 2023, to reserve one-third of seats in the Lok Sabha and state assemblies for women.',
    note: 'Almost everyone agreed. Now it has to start.',
    source: 'All India Radio News', href: SRC.air, date: 'Sep 2023',
  },
  {
    figure: '13.6%', tone: 'paper' as const, tilt: 0.8,
    label: 'of the MPs elected to the Lok Sabha in 2024 were women: 74 of 543.',
    note: 'The reservation law has been in force since 16 April 2026 (Law Ministry notification), but no seat is reserved until constituencies are redrawn after Census 2027.',
    source: 'Dataful, from Election Commission data', href: SRC.dataful, date: '2024',
  },
  {
    figure: '289', tone: 'marigold' as const, tilt: -0.6,
    label: 'minutes a day women spend on unpaid housework, among those aged 6 and over who do it. Men: 88.',
    note: 'Care is work. Count it, share it, fund it.',
    source: 'MoSPI, Time Use Survey 2024', href: SRC.tus, date: 'Feb 2025',
  },
  {
    figure: '840m', tone: 'ink' as const, tilt: 1.1,
    label: 'women worldwide, nearly 1 in 3, have faced partner or sexual violence in their lifetime.',
    note: 'Barely changed since 2000. Safety is a right, not a curfew.',
    source: 'World Health Organization', href: SRC.who, date: 'Nov 2025',
  },
];

/* ---------- the photo wall: real movements, 1913–2026 ---------- */
export type WallTile = { id: string; tone: Tone; alt: string; chip: string; size?: 'big' | 'wide' | 'tall'; position?: string };
export const WALL: WallTile[] = [
  { id: 'in-002-2024-kolkata-rg-kar-women-chanting-handprint', tone: 'red', size: 'big', chip: 'Kolkata · 2024', alt: 'Women chant in a Kolkata street at a protest for justice for a doctor killed at work, August 2024.' },
  { id: '1913-washington-inez-milholland-horse', tone: 'ink', chip: 'Washington · 1913', alt: 'Lawyer Inez Milholland in a white cape on a white horse at the suffrage parade in Washington, D.C., 3 March 1913.', position: '50% 40%' },
  { id: 'in-040-2019-delhi-queer-pride-bilingual-banner', tone: 'green', chip: 'Delhi · 2019', alt: 'Marchers behind a bilingual Delhi Queer Pride banner and rainbow balloons, New Delhi, November 2019.' },
  { id: '2018-cordoba-ni-una-menos', tone: 'red', chip: 'Córdoba · 2018', alt: 'Marchers carry lit-up letters spelling “Aborto legal” at a Ni Una Menos march at night in Córdoba, Argentina, June 2018.' },
  { id: 'in-013-2009-bengaluru-take-back-the-night-placards', tone: 'pink', chip: 'Bengaluru · 2009', alt: 'Women hold hand-made posters reading “Stop violence against women” at a Take Back the Night march in Bengaluru, March 2009.' },
  { id: 'in-018-2019-kerala-womens-wall-angamaly-panorama', tone: 'marigold', size: 'wide', chip: 'Kerala · 2019', alt: 'A chain of women in saris stretches along a row of shops for Kerala’s Women’s Wall, January 2019.' },
  { id: '2016-warsaw-black-monday-nowy-swiat', tone: 'ink', chip: 'Warsaw · 2016', alt: 'A street full of protesters under umbrellas at dusk during Poland’s Black Protest, Warsaw, October 2016.' },
  { id: '2020-krakow-strajk-kobiet', tone: 'pink', size: 'tall', chip: 'Kraków · 2020', alt: 'Masked protesters with a red lightning-bolt sign and a placard reading “Girls just wanna have fundamental rights”, Kraków, October 2020.' },
  { id: 'in-021-2020-tikri-women-making-rotis-langar', tone: 'pink', chip: 'Tikri · 2020', alt: 'Women sit together making rotis for a community kitchen at the farmers’ protest at the Tikri border, December 2020.' },
  { id: '1970-washington-womens-strike-for-equality', tone: 'red', chip: 'Washington · 1970', alt: 'Women march down a wide avenue with banners reading “Women demand equality” during the Women’s Strike for Equality, August 1970.' },
  { id: 'in-016-2020-delhi-shaheen-bagh-paper-boat-heart', tone: 'ink', chip: 'Delhi · 2020', alt: 'Hundreds of paper boats laid out in the shape of a heart on a road in New Delhi, January 2020.' },
  { id: '2018-dublin-castle-repeal-result-a', tone: 'green', size: 'big', chip: 'Dublin · 2018', alt: 'Smiling women in “Repeal” jumpers at Dublin Castle after Ireland’s abortion referendum result, May 2018.' },
  { id: 'in-044-2020-pakistan-aurat-march-urdu-placards', tone: 'marigold', chip: 'Aurat March · 2020', alt: 'Marchers hold Urdu placards, one reading “Education is a woman’s finest jewel”, at Pakistan’s Aurat March, March 2020.' },
  { id: '2026-la-plata-ni-una-menos-a', tone: 'ink', chip: 'La Plata · 2026', alt: 'A cardboard sign reading “If justice is sexist, let memory be feminist” in Spanish at the Ni Una Menos march, La Plata, June 2026.' },
  { id: 'in-031-2016-mumbai-csmt-lit-purple-international-womens-day', tone: 'pink', chip: 'Mumbai · 2016', alt: 'Mumbai’s Chhatrapati Shivaji Maharaj Terminus lit purple and pink at night for International Women’s Day, March 2016.' },
  { id: '1913-nuwss-pilgrims-en-route-london', tone: 'green', chip: 'England · 1913', alt: 'Four women suffrage pilgrims in sashes and hats stand beside a horse and cart on their walk to London, 1913.' },
  { id: 'in-029-2026-jantar-mantar-protest-trans-amendment-bill', tone: 'red', size: 'wide', chip: 'Jantar Mantar · 2026', alt: 'A crowd under the trees at Jantar Mantar, New Delhi, protesting the Trans Amendment Bill, March 2026.' },
  { id: '2017-london-womens-march-strong-women', tone: 'pink', chip: 'London · 2017', alt: 'A woman holds a placard: “Here’s to strong women. May we know them, may we be them, may we raise them.” London, January 2017.', position: '62% 40%' },
  { id: 'in-022-2021-tikri-iwd-stage-woman-addressing-crowd', tone: 'ink', size: 'big', chip: 'Tikri · 2021', alt: 'Seen from behind, a woman on a stage raises her arms to a huge crowd at the Tikri border on the eve of International Women’s Day, March 2021.' },
  { id: '2026-chicago-iwd-march-h', tone: 'red', chip: 'Chicago · 2026', alt: 'A speaker using a wheelchair, with her service dog, addresses the International Women’s Day march in Chicago, March 2026.' },
  { id: 'in-008-2024-kolkata-street-meeting-megaphones', tone: 'green', chip: 'Kolkata · 2024', alt: 'People, many of them women, sit in rows on a Kolkata street for a protest meeting and street play, October 2024.' },
  { id: '2023-london-woman-life-freedom', tone: 'marigold', size: 'wide', chip: 'London · 2023', alt: 'Marchers carry “Woman, Life, Freedom” placards and a megaphone through central London, March 2023.' },
  { id: '2017-santa-fe-8m-nosotras-paramos', tone: 'green', chip: 'Santa Fe · 2017', alt: 'Marchers behind a large purple Ni Una Menos banner on the International Women’s Strike, Santa Fe, Argentina, March 2017.' },
  { id: '2025-mexico-city-8m-placards-a', tone: 'marigold', chip: 'Mexico City · 2025', alt: 'Hundreds of hand-made placards laid out on the ground of the Zócalo on 8 March 2025, Mexico City.' },
];

/* ---------- programmes (names fixed: STRATEGY §6; anchors on /what-we-do/) ---------- */
export const PROGRAMMES = [
  { id: 'lab', num: '01', name: 'The Fourth Wave Lab', stage: 'Ideas', line: 'Essays, manifestos and political theory: what should this wave demand?', photo: 'in-056-woman-in-blue-sari-reading-outdoors', tone: 'ink' as Tone, alt: 'A woman in a blue sari reads a book outdoors among trees.' },
  { id: 'receipts-desk', num: '02', name: 'The Receipts Desk', stage: 'Research', line: 'Evidence, data and investigations that test ideas against real lives and institutions.', photo: 'in-054-older-woman-writing-in-ledger-shop', tone: 'marigold' as Tone, alt: 'An older woman in a sari writes figures in a ledger at her shop counter.', position: '50% 30%' },
  { id: 'memory-project', num: '03', name: 'The Memory Project', stage: 'Public consciousness', line: 'A living archive and timeline of the struggles that brought us here, so they are never lost again.', photo: 'in-015-2020-delhi-shaheen-bagh-fatima-sheikh-savitribai-phul', tone: 'green' as Tone, alt: 'A pavement library named after Fatima Sheikh and Savitribai Phule, with posters reading “Let’s read”.' },
  { id: 'culture-studio', num: '04', name: 'The Culture Studio', stage: 'Public consciousness', line: 'Explainers, zines, posters, reels and art that move findings from reports into group chats.', photo: 'in-038-2019-kolkata-pride-workshop-my-body-my-choice', tone: 'pink' as Tone, alt: 'A hand-drawn poster reading “My body, my choice” held up at a poster-making workshop.' },
  { id: 'the-street', num: '05', name: 'The Street', stage: 'Collective action', line: 'Teach-ins, reading circles, marches and joyful, peaceful, lawful public action.', photo: '2024-paris-8m-drums', tone: 'red' as Tone, alt: 'A women’s drum corps plays in the street at an International Women’s Day march.' },
  { id: 'accountability-watch', num: '06', name: 'The Accountability Watch', stage: 'Collective action', line: 'Promise trackers, letters and public records that make institutions answer.', photo: 'in-062-delhi-women-hindi-placard-apna-vada-pura-karo', tone: 'ink' as Tone, alt: 'Women march with a placard in Hindi and English: “We want policy. Keep your promise.”', position: '62% 40%' },
];

/* ---------- public memory strip: ids from src/content/memory.json ---------- */
export type StripItem = { id: string; photo?: string; note?: string; card?: { big: string; small: string; lang?: string }; ground?: 'pink' | 'marigold' | 'ink' | 'green' | 'red' };
export const STRIP: StripItem[] = [
  { id: 'phule-school-1848', photo: 'in-023-2018-asha-kowtal-dalit-womens-rights-microphone', note: 'Her portrait at a Dalit women’s rights event, 2018' },
  { id: 'salt-satyagraha-1930', photo: 'in-046-1930-salt-march-gandhi-sarojini-naidu', note: 'Gandhi and Sarojini Naidu on the Salt March, 1930' },
  { id: 'iceland-strikes-1975-2023', card: { big: '90%', small: 'of Iceland’s women stopped work for a day in 1975' }, ground: 'marigold' },
  { id: 'local-reservation-1993', card: { big: '14 lakh', small: 'women elected to panchayats by January 2025, 46% of members' }, ground: 'green' },
  { id: 'vishaka-1997', card: { big: 'Vishaka', small: 'India’s first binding rules against sexual harassment at work' }, ground: 'pink' },
  { id: 'delhi-protests-2012', photo: 'in-011-2012-delhi-raisina-hill-stop-molestation', note: 'Raisina Hill, New Delhi, 22 December 2012' },
  { id: 'womens-reservation-act-2023', card: { big: '⅓', small: 'of seats in the Lok Sabha and state assemblies: reserved for women in law, not yet in practice' }, ground: 'red' },
  { id: 'reclaim-the-night-2024', photo: 'in-010-2024-kolkata-protest-under-biswa-bangla-gate', note: 'New Town, Kolkata, 14 August 2024' },
];

/* ---------- start where you are (STRATEGY §6 ladder), one concrete action per rung ---------- */
export const RUNGS = [
  { where: 'On your phone', meta: '5 minutes', action: 'Read one plain-language guide: what the Fourth Wave is, and why it started.', href: '/resources/what-is-fourth-wave-feminism/', link: 'Read the guide', photo: '054-sydney-phone-filming-protest-bw', tone: 'ink' as Tone, alt: 'Hands hold up a phone to film a street protest.' },
  { where: 'In the group chat', meta: 'Share', action: 'Send one myth-buster, with its receipt, to the chat that needs it most.', href: '/resources/feminism-myths-and-receipts/', link: 'Ten myths, ten receipts', photo: '088-three-women-hijabs-embrace', tone: 'pink' as Tone, alt: 'Three young women in colourful hijabs hug and laugh.' },
  { where: 'At school, college or work', meta: 'Organise', action: 'Start a reading circle with three friends. One reading, one hour, once a month.', href: '/resources/how-to-join-or-start-a-feminist-group/', link: 'How to start a group', photo: 'in-033-2014-varanasi-bhu-women-medical-students', tone: 'green' as Tone, alt: 'Women students in white coats walk together across a campus, seen from behind.' },
  { where: 'On the street', meta: 'Show up', action: 'Go to something peaceful and lawful, with a friend and a plan.', href: '/resources/protest-safety-india/', link: 'The safety guide', photo: 'in-061-delhi-women-equal-pay-for-equal-work-placard', tone: 'red' as Tone, alt: 'A woman holds a hand-lettered placard: “Equal pay for equal work”.' },
  { where: 'In the institutions', meta: 'Hold to account', action: 'Write to your MP about the seats for women that are law but not yet real.', href: '/resources/womens-reservation-act-explained/', link: 'The reservation explainer', photo: 'in-028-2026-assam-woman-inked-finger-after-voting', tone: 'marigold' as Tone, alt: 'A smiling woman shows the ink mark on her finger after voting.', position: '50% 35%' },
];

/* ---------- homepage picks from the collections ---------- */
export const FEATURED_CASES = ['delhi-2012-justice-verma', 'sewa-self-employed-women', 'iceland-womens-strikes'];
// Optional picks for the featured case files. `note` says where and when the photo was taken, and says so
// plainly when it is not the movement itself. A case missing here (or whose pick is already on the page) falls back
// to the case card rules in components/cases/case-utils.ts (card photo, or the case’s typographic poster).
export const CASE_PHOTO: Record<string, { id: string; tone: Tone; alt: string; note: string }> = {
  'delhi-2012-justice-verma': { id: '2012-delhi-raisina-hill-protest-crowd', tone: 'red', note: 'Raisina Hill, New Delhi, 22 Dec 2012', alt: 'Thousands of students fill Raisina Hill in New Delhi in December 2012, an Indian flag above the crowd.' },
  'sewa-self-employed-women': { id: 'in-026-2008-rural-women-self-help-group-meeting', tone: 'green', note: 'a self-help group, 2008, not SEWA', alt: 'Rural women in bright saris sit together and laugh at a self-help group meeting.' },
  'iceland-womens-strikes': { id: '2005-reykjavik-womens-strike-signs', tone: 'marigold', note: 'Reykjavík, 24 Oct 2005', alt: 'Women wave hand-made placards at the women’s strike in Reykjavík, 2005.' },
};
// Journal cards use each article’s card pool (resources/lib.ts CARD_PHOTOS), not its hero, so the homepage does
// not repeat the article’s own opening picture. `seed` picks the starting photo in that pool.
export const JOURNAL = [
  { id: 'what-is-fourth-wave-feminism', tone: 'red' as Tone, seed: 1 },
  { id: 'feminism-myths-and-receipts', tone: 'ink' as Tone, seed: 0 },
  { id: 'intersectional-feminism-explained', tone: 'marigold' as Tone, seed: 0 },
  { id: 'safe-online-toolkit', tone: 'pink' as Tone, seed: 1 },
];
/* ---------- single photos placed inline in sections ---------- */
export const DECODE_PHOTO = { id: '2022-ithaca-womans-place-revolution-graffiti', tone: 'marigold' as Tone, alt: 'A yellow stencil on a pavement reads “A woman’s place is in the revolution”.' };
export const ALLIES_PHOTOS = [
  { id: 'in-060-new-delhi-college-students-laughing-together', tone: 'green' as Tone, alt: 'Young women and men laugh together around a table while they study.' },
  { id: '085-stacked-hands-sweaters', tone: 'ink' as Tone, alt: 'Friends in colourful jumpers stack their hands together in a circle.' },
];

/** Every photo the homepage places itself, so the collection-driven sections (case files, journal) can avoid repeats. */
export function homePhotoIds(): Set<string> {
  return new Set([
    ...HERO_PHOTOS.map((p) => p.id),
    DECODE_PHOTO.id,
    ...ENGINE_PHOTOS.map((p) => p.id),
    ...WALL.map((p) => p.id),
    ...PROGRAMMES.map((p) => p.photo),
    ...STRIP.flatMap((s) => (s.photo ? [s.photo] : [])),
    ...RUNGS.map((r) => r.photo),
    ...ALLIES_PHOTOS.map((p) => p.id),
  ]);
}

export const FAQ_IDS = ['is-csp-a-political-party', 'do-i-have-to-protest', 'who-funds-csp'];
