// Receipts for the numbers and laws quoted in src/content/faq.json, keyed by FAQ id.
// Shown under each answer as "Source: …" so every figure on /faq/ carries its source and date.
export type FaqSource = { label: string; href: string; date: string };

const KCL_2026: FaqSource = {
  label: 'King’s College London and Ipsos, International Women’s Day study',
  href: 'https://www.kcl.ac.uk/news/almost-a-third-of-gen-z-men-agree-a-wife-should-obey-her-husband',
  date: '5 Mar 2026',
};
const IPSOS_2026: FaqSource = {
  label: 'Ipsos, International Women’s Day 2026 global charts (29 countries; India sample urban and online)',
  href: 'https://www.ipsos.com/sites/default/files/ct/news/documents/2026-03/IWD%202026%20Global%20Charts%20FINAL.pdf',
  date: 'Mar 2026',
};
const KCL_2025: FaqSource = {
  label: 'King’s College London and Ipsos, “Gen Z men and women most divided on gender equality”',
  href: 'https://www.kcl.ac.uk/news/gen-z-men-and-women-most-divided-on-gender-equality-global-study-shows',
  date: '5 Mar 2025',
};
const FCRA: FaqSource = {
  label: 'Foreign Contribution (Regulation) Act 2010, section 3 (PRS copy of the Act)',
  href: 'https://prsindia.org/files/bills_acts/acts_parliament/2010/the-foreign-contribution-(regulation)-act,-2010.pdf',
  date: '2010',
};
const DPDP_ACT: FaqSource = {
  label: 'Digital Personal Data Protection Act 2023, section 2(f) and section 9 (MeitY)',
  href: 'https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf',
  date: '11 Aug 2023',
};
const NCW: FaqSource = {
  label: 'National Commission for Women, other useful helplines',
  href: 'https://www.ncw.gov.in/other-useful-helplines/',
  date: 'checked 24 Oct 2026',
};

export const FAQ_SOURCES: Record<string, FaqSource[]> = {
  'who-funds-csp': [FCRA],
  'can-i-donate': [FCRA],
  'can-boys-and-men-join': [KCL_2026],
  'is-feminism-anti-men': [KCL_2025],
  'can-men-be-feminists': [IPSOS_2026],
  'is-gen-z-feminist': [IPSOS_2026, KCL_2026],
  'why-feminism-still-matters-india': [
    { label: 'Telangana Today (PTI), on the World Economic Forum’s Global Gender Gap Index 2026', href: 'https://telanganatoday.com/india-ranks-131st-in-global-gender-gap-index-2026', date: '16 Sep 2026' },
  ],
  'how-old-do-i-need-to-be': [DPDP_ACT],
  'what-happens-to-my-data': [
    DPDP_ACT,
    { label: 'Digital Personal Data Protection Rules 2025, G.S.R. 846(E): main duties from 13 May 2027 (MeitY)', href: 'https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf', date: '13 Nov 2025' },
  ],
  'is-it-safe-to-come-to-an-action': [
    { label: 'ThePrint, on the de-notification of Jantar Mantar as a protest venue', href: 'https://theprint.in/india/amid-daily-protests-govt-denotifies-jantar-mantar-as-protest-venue-which-are-the-3-new-sites/3069058/', date: '12 Oct 2026' },
  ],
  'report-online-abuse': [
    { label: 'MeitY, FAQs on the IT Rules amendment (synthetic media and takedown timelines)', href: 'https://www.meity.gov.in/static/uploads/2025/10/065b6deb585441b5ccdf8be42502a49c.pdf', date: 'in force 20 Feb 2026' },
    { label: 'National Cyber Crime Reporting Portal', href: 'https://cybercrime.gov.in/', date: 'checked 24 Oct 2026' },
  ],
  'helplines-india': [NCW],
  'safeguarding-concern': [
    { label: 'Supreme Court Observer, Reporting child sexual assault under POCSO', href: 'https://www.scobserver.in/supreme-court-observer-law-reports-scolr/reporting-child-sexual-assault/', date: 'accessed 24 Oct 2026' },
  ],
  'womens-reservation-act': [
    { label: 'All India Radio News, on the Lok Sabha vote for one-third reservation', href: 'https://newsonair.gov.in/ls-passes-womens-reservation-bill-providing-one-third-reservation-of-seats-for-women-in-lower-house-and-state-legislative-assemblies', date: '21 Sep 2023' },
    { label: 'ETV Bharat, on the Act’s commencement notification', href: 'https://www.etvbharat.com/en/bharat/women-reservation-act-2023-comes-into-force-notification-enn26041700047', date: '17 Apr 2026' },
  ],
  'unpaid-care-work': [
    { label: 'MoSPI, Time Use Survey (January–December 2024) press note', href: 'https://mospi.gov.in/sites/default/files/press_release/PR_TUS_25022025.pdf', date: '25 Feb 2025' },
  ],
  'hold-institutions-accountable': [
    { label: 'Department of Personnel & Training, RTI portal (RTI Act 2005)', href: 'https://rti.dopt.gov.in/', date: 'checked 24 Oct 2026' },
  ],
  'support-a-survivor': [
    { label: 'The Leaflet, on the Supreme Court’s guidelines in Nipun Saxena v Union of India', href: 'https://theleaflet.in/supreme-court/firs-in-cases-of-rape-cannot-be-put-in-public-domain-to-avoid-disclosing-the-victims-identity-supreme-court-issues-fresh-guidelines', date: '12 Dec 2018' },
  ],
};
