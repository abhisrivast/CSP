# Cultural Shock Party — website strategy & build brief

Status: v1, 24 Oct 2026. Read this whole file before writing a single page. It is the contract between
everyone building the site. Research behind every decision lives in `/research/*.md`.

---

## 1. The big idea

**A movement that looks like a cultural intervention, reads like a political journal, and works like an
organising platform.** Radical in expression, rigorous in substance, accessible in action.

- **Loud where we argue** (home hero, manifesto, campaigns, section openers): oversized condensed type,
  duotone documentary photos, placards, stamps, torn paper, receipts.
- **Calm where people read, understand or act** (articles, case studies, FAQ, forms): serif long-form,
  generous measure, strong rules, sources, no decoration behind text.

**Name, decoded.** A *cultural shock* is the jolt that changes what a society treats as normal. CSP is a
*positive* shock: the badge shows a woman breaking a chain above a crowd — awakening, not anger.

**Positioning line (use as the default H1/tagline):** *We're building the Fourth Wave.*
**Mission (verbatim, never paraphrase in schema/meta):** Cultural Shock Party is a political-cultural feminist
movement building the intellectual, political and organisational infrastructure of the Fourth Wave of
Feminism: turning ideas into research, research into public consciousness, and public consciousness into
collective political action.

**The engine (our theory of change, the spine of Home and What we do):**
`01 Ideas → 02 Research → 03 Public consciousness → 04 Collective action` (component: `Engine.astro`).

**Where we are:** founded 2026, in India (most likely New Delhi — CONFIRM), for a global generation. Write in
**Indian English** (organise, programme, centre, labour; lakh/crore allowed with numerals, e.g. 4,48,211).
CSP is new: never claim achievements, members, events, partners or press that do not exist. Honest framing:
*"We're new. Here's what we're building first — and the receipts as we go."*

## 2. Audiences (research/audience.md)

| Who | Age (Oct 2026) | What they need from the site | Primary CTA |
|---|---|---|---|
| **Gen Z** (primary) | ~14–30 | A movement that takes them seriously, shows real faces, proves claims, starts small | Join / sign the manifesto / share |
| **Gen Alpha** | under ~13 (all under-18s are children in law) | Learning, not sign-ups. Plain words. Safety. | Read & learn (no data) |
| **Millennials** | ~31–46 | Parents, teachers, professionals, funders, accountability allies | Newsletter, toolkits, partner |

Facts that shape the site (all sourced in research/audience.md):
- 18–24s trust **creators/people more than brands** (Reuters Institute 2026) → real faces, named authors, founder voice.
- **Doom drives them away**: 42% of 18–24s avoid news because it hurts their mood → *hope first, receipts always*.
- **Passive by default** (65% of 8–17s mostly watch) → micro-actions first (save, share, quiz), then bigger rungs.
- India: 68% of an urban online Ipsos sample call themselves feminist (men 65%, women 71%) yet 52% agree "a wife
  should always obey her husband" → lead with **behaviours and rights**, not the label alone.
- TikTok is banned in India (since 2020): the social layer is **Instagram Reels, YouTube Shorts, WhatsApp, Threads, X**.
- Gen Z men are not the enemy: 69% of Gen Z men globally reject "a wife should always obey" (Ipsos/KCL 2026).
  The problem is the **manosphere industry**, not boys.

## 3. Voice

**Hope first, receipts always.** Plain words (reading age ~12–14 on public pages; explain every term the first
time). Warm, witty, never sneering. "We" plus named humans. Constitutional and rights-based when political
(the founder's own register: Constitution, fundamental rights, dignity). Values are clear; party politics plural:
criticise laws, systems and institutions — never voters, never "men" as a class. Never tell girls to be
careful; tell systems and bystanders to change.

Signature lines (use, remix, don't overuse):
- "We're building the Fourth Wave." · "The next wave is ours to build." · "Hope first. Receipts always."
- "Most of us already want this. Let's make it normal." · "Here are the receipts."
- "Bring a friend. Yes, boys too." · "Start where you are." · "Send it to the group chat."
- "Ideas into research. Research into public consciousness. Public consciousness into collective political action."

A *little* Hinglish/Hindi is welcome where it is natural and translated (e.g. a placard "हम सब" / "all of us",
the glossary's Hindi terms). Never fake slang. Devanagari renders in the system font (no extra download).

**Banned (AI slop and NGO template):** "empower(ing) voices", "building a brighter future", "together we can",
"join us on this journey", "in today's world", "unlock", "harness", "leverage", "delve", "tapestry",
"landscape" (as a metaphor), "game-changer", "at the intersection of", rhetorical triplets of abstractions,
emoji, line-icon trios, unsourced counters, "Lorem", "Learn more"/"Read more" as link text (say what it is).

## 4. Facts policy (non-negotiable)

1. **Every number on the site is a `Receipt`** (figure, label, source, link, date) or carries an inline source
   and date. Use figures from `research/*.md` marked High/Medium-High, and prefer figures confirmed in
   `research/fact-check.md` / `research/india-fact-check.md` (apply their corrections). If a figure is not in
   the research files, leave it out.
2. **No invented** quotes, testimonials, members, events, wins, partners, press, or founder biography. Quotes
   only from named public figures with a source link, or from the CSP collective itself (attributed to
   "Cultural Shock Party"). Never put words in Rubby Singh's mouth.
3. Founder facts: only research/founder.md §7 "SAFE TO PUBLISH". Everything else is a `CONFIRM` item.
4. **CONFIRM items**: write the best safe version in the page, and add a line to `/CONTENT-TODO.md`
   (file, what to confirm, suggested wording). Never show "[CONFIRM]" or placeholders in rendered pages.
5. Legal/safety content (helplines, laws, rights at protests, data law) must cite an official source and say it
   is information, not legal advice.
6. Not partisan: no party names in a positive or negative frame except as historical fact. CSP is described as
   independent — CONFIRM — and as "a movement", not a registered political party (do not use schema
   `PoliticalParty`; do not imply standing in elections).
7. Copyright: paraphrase sources; at most one short quote per page from any one source; never paste blurbs.

## 5. Site map, URLs and SEO targets

Title format: `<Page title> | Cultural Shock Party` (Head adds the suffix). Meta descriptions 140–160 chars,
answer-first. One H1 per page, containing the page's main query where natural. Always pair the name with
"Fourth Wave feminist movement" on brand pages (name collisions: "culture shock", "CSP").

| URL | H1 idea | Primary queries | Schema (pageType + extras) |
|---|---|---|---|
| `/` | We're building the Fourth Wave | cultural shock party; fourth wave feminist movement India | WebPage + Org + WebSite |
| `/about/` | About Cultural Shock Party | cultural shock party; who founded CSP | AboutPage |
| `/about/rubby-singh/` | Rubby Singh, founder | rubby singh; garbhadosh author | ProfilePage + Person + Book |
| `/manifesto/` | The Fourth Wave Manifesto | fourth wave feminism manifesto; cultural shock party manifesto | Article |
| `/what-we-do/` | From ideas to power | feminist research India; feminist movement programmes | WebPage |
| `/memory/` | Public memory: the struggles that brought us here | indian feminist history timeline; feminist movement history india | CollectionPage |
| `/case-studies/` | What movements teach us | feminist movements examples; successful women's movements | CollectionPage |
| `/case-studies/<id>/` | <Movement name> | <movement> explained / timeline / outcome | Article |
| `/resources/` | Resources: guides, explainers, toolkits | feminism resources india; feminist toolkit | CollectionPage |
| `/resources/<id>/` | article title | per article cluster | Article/BlogPosting |
| `/resources/glossary/` | Feminist glossary | feminism terms meaning; intersectionality meaning | DefinedTermSet |
| `/faq/` | FAQ: straight answers | is cultural shock party a political party; can men be feminists | FAQPage |
| `/join/` | Join the movement | how to join a feminist movement india | WebPage |
| `/contact/` | Contact us | cultural shock party contact | ContactPage |
| `/privacy/` `/safeguarding/` `/accessibility/` `/credits/` `/thanks/` `/404` | — | — | WebPage (thanks, 404: noindex) |

Internal linking: every article links up to its pillar and across to 2–3 siblings; every page ends with a
next step (JoinBand or a specific link); descriptive anchor text only.

## 6. What we do — programmes (names are fixed; use them everywhere)

Each maps onto the engine. Status for all: **Now building (2026)** — show it honestly with a `Stamp`.

| # | Programme | Engine stage | One line |
|---|---|---|---|
| 01 | **The Fourth Wave Lab** | Ideas | Essays, manifestos and political theory: what should this wave demand? |
| 02 | **The Receipts Desk** | Research | Evidence, data and investigations that test ideas against real lives and institutions. |
| 03 | **The Memory Project** | Public consciousness | A living archive and timeline of the struggles that brought us here — so they are never lost again. |
| 04 | **The Culture Studio** | Public consciousness | Explainers, zines, posters, reels and art that move findings from reports into group chats. |
| 05 | **The Street** | Collective action | Teach-ins, reading circles, marches and joyful, peaceful, lawful public action. |
| 06 | **The Accountability Watch** | Collective action | Promise trackers, letters and public records that make institutions answer. |

Engagement ladder (Join page + Home): **On your phone (5 min) → In the group chat → At school, college or work →
On the street → In the institutions.** Roles: Reader → Sharer → Signer → Member → Organiser → Lead.

## 7. Manifesto — positions (the Manifesto page writes these out; keep numbering and titles)

Draft v1.0 "for consultation" — readers can sign it and suggest edits (CONFIRM founder sign-off).
1. **Feminism is a political project.** Not a mood, a brand or a month. It needs ideas, institutions, memory and power.
2. **Hope first. Receipts always.** We argue from evidence and we celebrate every win.
3. **Nobody is free until everybody is.** Gender never travels alone: caste, class, religion, region, language,
   disability, sexuality and gender identity shape every life. Our feminism is intersectional or it is nothing.
4. **Safety is a right, not a curfew.** Stop telling girls to stay home. Fix streets, transport, campuses,
   workplaces, police and platforms.
5. **Care is work.** Women in India spend 289 minutes a day on unpaid domestic work; men, 88 (MoSPI TUS 2024).
   Count it, share it, fund it.
6. **Our bodies, our data, our decisions.** Bodily autonomy offline and online: consent, reproductive rights,
   and an end to deepfake and image-based abuse.
7. **A third is the floor, not the ceiling.** Parliament voted 454–2 for one-third reservation in 2023.
   Implement it — and keep going.
8. **Memory is power.** From Savitribai Phule and Fatima Sheikh to the women of 2024's "Reclaim the Night", we
   remember, so no one has to start from zero.
9. **Culture is where politics starts.** Memes, films, music, books and group chats shape what feels normal.
   We make culture on purpose.
10. **Boys and men are invited.** The manosphere is an industry selling loneliness. We offer something better:
    friendship, equality, freedom from rigid masculinity.
11. **Institutions must answer.** The Constitution promises equality (Articles 14 and 15) and dignity
    (Article 21). We hold every institution to it, in public, with records.
12. **We organise in public, with joy.** Peaceful, lawful, creative, collective. Shock the culture, not people.

## 8. Design system (site/src — read the components before building)

Tokens: `src/styles/tokens.css`. Globals/utilities: `src/styles/global.css`. **Do not edit shared
components/styles**; if you need something new, create it under `src/components/<your-area>/`. If a shared
component has a bug, note it in your final report.

Colour use: paper ground; ink and green sections for rhythm; red-ink (#B3261E) for text/links/buttons; protest
red (#CD2E2B) only for large type and fills; pink/marigold as surfaces and stickers. Never put body text on a
photo or on busy collage — use a solid paper/ink panel.

Type: Archivo Variable (display: `font-stretch: 62%`, 900, uppercase via `.h-hero/.h1/.h2`; labels via
`.label`), Newsreader (long-form `.prose`, pull quotes, `.serif-display`), Caveat Brush (`.hand`, annotations
and placards only — never paragraphs).

Grounds: `.ground-ink`, `.ground-green`, `.ground-red`, `.ground-pink`, `.ground-deep`, `.ground-light`, `+ .grain`.
Layout: `.wrap`, `.wrap--narrow`, `.section`, `.section--tight`, `.grid-12`, `.stack`, `.measure`.
Buttons: `.btn` (red), `.btn--ink`, `.btn--paper`, `.btn--ghost`, `.btn--sm`, `.link-arrow`.

Components (props in each file's frontmatter):
- `layouts/Base.astro` — every page. Pass Head props: title, description, pageType, breadcrumbs, schema, image…
- `blocks/PageHero.astro` — inner-page hero; headline overlaps a duotone photo.
- `ui/SectionHead.astro` — "01 / LABEL" + big title + lead.
- `media/Photo.astro` — **the only way to show a photo** (`id` from `src/data/photos.json`; `tone`
  natural|red|ink|green|pink|marigold; `aspect`, `tape`, `tilt`, `frame`, `caption`, `priority` for the LCP image).
- `ui/Receipt.astro` — sourced stat card. `ui/PullQuote.astro`. `ui/Placard.astro` (placard/sticker/round/tape).
  `ui/Stamp.astro`. `ui/Annotation.astro` (handwritten note + arrow, for evidence annotations).
  `ui/Ticker.astro` (static slogan strip). `ui/TornEdge.astro` (torn-paper section transition).
  `ui/Breadcrumbs.astro`. `ui/Faq.astro` (details/summary, answer-first).
- `blocks/Engine.astro` (the 4 stages). `blocks/Timeline.astro`. `blocks/Card.astro` (editorial card).
  `blocks/JoinBand.astro`. `blocks/ShareBar.astro`. `blocks/Sources.astro`. `blocks/NewsletterForm.astro`.
- `lib/schema.ts` — JSON-LD node builders (articleNode, faqNode, breadcrumbs via Head, founderNode, bookNode,
  definedTermSetNode). `lib/photos.ts` — `getPhoto`, `findPhotos`, `PHOTOS`.
- Content collections: `src/content.config.ts` (caseStudies, articles, faq, memory, glossary) — schemas are fixed.

**Signature moves to use across the site** (pick 2–3 per page, never all): oversized headline overlapping a
documentary photo; numbered sections; receipts; evidence annotations (`Annotation` on photos/figures);
timelines; pull quotes; strong horizontal rules; placards/stickers as wayfinding (max one per card); stamps
("NOW BUILDING", "SOURCED", "CASE 04"); torn-paper transitions between grounds; duotone photo walls.

**Photos — "loads of pictures", done honestly:**
- Use many: heroes, cards, galleries, photo walls, timeline thumbnails. Pick by tags in `src/data/photos.json`;
  look at the image (Read the file in `src/assets/photos/`) before using it. A contact sheet is at
  `qa/photo-contact-sheet-*.png`.
- Duotone (red/ink/green/pink/marigold) for heroes, cards and walls — it unifies stock and archive into one
  poster language. Keep **natural** colour for documentary/archival photos inside case studies and memory where
  colour is part of the record.
- Captions must be true (from the registry); never re-caption a stock photo as a specific real event. Stock
  photos are illustrative: caption them generically or not at all (`caption={false}`); real-event photos keep
  their real what/where/when.
- Never imply CSP was at an event in a photo. Never use a photo to depict a "member" or a testimony.
- Alt text describes the scene in plain words (not "image of").

**Motion:** restrained. Hover lifts, small tilts, focus states. No scroll-jacking, no autoplay, no marquee,
no parallax, no cursor effects. Everything respects `prefers-reduced-motion`.

**Mobile first:** design at 360–390px first. No horizontal overflow at 360px (the QA script reports it).
Touch targets ≥ 44px. The sticky "Join" button exists on mobile; leave room at the bottom of pages.

## 9. Performance budget (Netlify free = 300 credits/month; 20 credits per GB)

- Zero client JS unless essential (share copy button, menu). No frameworks, no embeds, no third-party scripts.
- Above the fold ≤ 350 KB (compressed) on mobile; full home page ≤ 1.8 MB; inner pages ≤ 1.2 MB.
- Only one `priority` photo per page (the LCP hero). Everything else lazy (Photo does this).
- Pass realistic `sizes` and `widths` to Photo (cards: `widths={[360,560,800]}`; thumbnails `[240,360,480]`).

## 10. Accessibility (WCAG 2.2 AA)

Semantic landmarks; one H1; logical heading order; labelled forms; visible focus; text contrast ≥ 4.5:1
(pairs in tokens.css are pre-checked — don't invent new text colours); no meaning by colour alone; alt text;
link text that makes sense out of context; `lang="hi"` on any Hindi span.

## 11. Forms & data (India DPDP Act + UK GDPR principles — research/compliance.md, india-compliance.md)

Netlify Forms, `data-netlify="true"`, honeypot `bot-field`, unique `name`, action → `/thanks/`.
Ask **age band first**; under-18s are routed to learning resources (no sign-up without parental consent).
Collect the minimum (first name optional, email, city/state optional). Explicit unticked consent checkbox
naming the purpose. Link `/privacy/`. Never ask for caste, religion, address, phone, school or photos.

## 12. QA loop (for every builder)

The shared dev server runs at **http://localhost:4321** (do not start another; do not run `astro build`).
Screenshot your pages: `node scripts/shoot.mjs /your/path/ --widths 390,1440 --base http://localhost:4321 --out qa/<your-area>`
then LOOK at the PNGs with the Read tool. Fix overflow warnings, contrast and spacing. Iterate until it looks
like a best-in-class editorial site, not a template. Check console errors the script reports.

---

## 13. India rules (research/india-compliance.md — read §0, §2.10, §4.3, §5.3, §6.2, §7.2, §10, §11)

- **No Donate button, no payment links.** FCRA bars "organisations of a political nature" from foreign
  contributions and CSP has not decided its funding model. Funding copy says: CSP is currently volunteer-run
  and does not yet accept donations (CONFIRM); when it does, it will publish who funds it.
- **No public user-generated content** (comments, uploads, public testimonies). Stories are submitted privately
  and published only editorially, with consent and anonymisation (keeps CSP outside intermediary duties).
- **Survivors and children are never identified** (BNS s.72; POCSO s.23). In case studies, name a victim only
  where the family has made the name public (e.g. Jyoti Singh, Delhi 2012 — see case-studies.md §0.3).
- **Forms (DPDP-aligned now, ahead of 13 May 2027):** notice in plain language at the point of collection —
  what we collect, why, how long, who sees it, how to withdraw or delete; unticked consent box; age band first.
  Use the consent wording drafts in india-compliance.md §11.2.
- **Helpline block** (use exactly, with "check before you call" date note and source link):
  Emergency **112** · National Women Helpline **181** · NCW 24×7 Women Helpline **14490** (women over 18) ·
  Cyber crime **1930** and cybercrime.gov.in · Child Helpline **1098** · Tele-MANAS mental health **14416**.
  Source: https://www.ncw.gov.in/other-useful-helplines/ (and india-compliance.md §7.2).
- **Defamation care:** accountability content criticises institutions with documents; never alleges crimes
  against named private individuals.
- **Protest content:** information, not legal advice; point to official notices. Note (ThePrint, 12 Oct 2026)
  that Delhi Police de-notified Jantar Mantar as a protest site and named Ramlila, Burari and CBD Grounds — say
  "check the current Delhi Police order before you plan" rather than giving a permanent rule.
- Apply every correction in `research/india-fact-check.md` §1 and `research/fact-check.md` (when present).
  Do not print anything listed as "unverifiable".

## 14. Content plan (slugs are fixed; other pages link to these)

### Case studies — `src/content/case-studies/<id>.md` (15; India first via `order`)
| order | id | Title | Research |
|---|---|---|---|
| 1 | `delhi-2012-justice-verma` | Delhi 2012: from protest to the Justice Verma Committee | case-studies.md Case 8 |
| 2 | `bhanwari-devi-vishaka-posh` | Bhanwari Devi, Vishaka and the POSH Act | india-memory.md + new research |
| 3 | `sewa-self-employed-women` | SEWA: organising India's self-employed women | india-memory.md + new research |
| 4 | `pinjra-tod` | Pinjra Tod: break the cage | case-studies.md Case 9 |
| 5 | `reclaim-the-night-bengal-2024` | Reclaim the Night: Bengal, August 2024 | india-memory.md + new research |
| 6 | `iceland-womens-strikes` | Iceland's women's strikes, 1975 to now | Case 1 |
| 7 | `ni-una-menos` | Ni Una Menos | Case 2 |
| 8 | `las-tesis` | Las Tesis: "A Rapist in Your Path" | Case 3 |
| 9 | `metoo` | #MeToo, from 2006 to a global reckoning | Case 4 |
| 10 | `repeal-the-8th` | Repeal the 8th, Ireland | Case 5 |
| 11 | `northern-ireland-abortion` | Northern Ireland: decriminalising abortion | Case 6 |
| 12 | `reclaim-these-streets` | Reclaim These Streets, London | Case 7 |
| 13 | `poland-strajk-kobiet` | Poland: Black Protest and Strajk Kobiet | Case 10 |
| 14 | `woman-life-freedom` | Woman, Life, Freedom | Case 11 |
| 15 | `end-femicide-kenya` | #EndFemicideKE, Kenya | Case 12 |

Template: content note → hero (credited) → at a glance (place, years, lever, outcome) → context → timeline →
"How they did it" in CSP's four stages → what changed (Receipts) → limits & critiques → three lessons for CSP
→ sources. Number them on the page as `CASE 01…15` (FA-style dossier metadata table).

### Articles — `src/content/articles/<id>.md` (12)
| id | Title (working) | kind | cluster |
|---|---|---|---|
| `what-is-fourth-wave-feminism` | What is the Fourth Wave of Feminism? A plain-language guide | Guide | fourth-wave |
| `intersectional-feminism-explained` | Intersectional feminism, explained (with Indian examples) | Explainer | intersectionality |
| `feminism-myths-and-receipts` | Ten myths about feminism, and the receipts | Explainer | positive-feminism |
| `boys-men-and-the-manosphere` | Boys, men and the manosphere: a guide for allies | Guide | allies |
| `womens-reservation-act-explained` | The Women's Reservation Act: what passed, what's stalled, what's next | Explainer | representation |
| `care-is-work` | Care is work: India's 289-minute gap | Data | care-economy |
| `safe-online-toolkit` | Safe online: deepfakes, doxxing and image-based abuse (India) | Toolkit | digital-safety |
| `how-to-join-or-start-a-feminist-group` | How to join a feminist movement, or start one at your college | Guide | join-and-act |
| `protest-safety-india` | How to show up safely: a guide to peaceful protest in India | Toolkit | join-and-act |
| `indian-feminists-history-forgot` | 12 Indian feminists your textbooks skipped | History | public-memory |
| `fourth-wave-reading-list` | The Fourth Wave reading (and watching) list | Reading list | fourth-wave |
| `is-gen-z-feminist` | Is Gen Z feminist? What the data actually says | Data | gen-z |

Every article: `tldr` (2–5 bullets), answer-first opening paragraph, question-style H2s, Receipts for numbers,
`sources` list, 2–4 `related` ids, a closing "What you can do" section and a JoinBand. 900–1,800 words.
Dates: `date: 2026-10-24`.
