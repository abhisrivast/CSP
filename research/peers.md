# Peer and reference websites: what to steal, what to avoid

*Research for the Cultural Shock Party (CSP) website: a static site on Netlify's free plan, Gen Z first.*
*Compiled 2026-10-24. Every site was accessed on 2026-10-24 unless another date is given.*

---

## 0. Method, evidence and limits

- **How I looked.** I read each homepage (and a few inner pages) with WebFetch. I also took full-page desktop screenshots (1440 px wide, top 3,000 px) with local headless Chrome. Where WebFetch was blocked, I dumped the rendered DOM with headless Chrome or pulled Internet Archive snapshots with curl. The screenshots are in `research/peers/` and are listed in §9.
- **Blocked sites.** Cloudflare challenges blocked the live pages for *The Funambulist*, the *Women's Equality Party* and *Feministiskt initiativ / Feministerna*.
  - The Funambulist rendered once I set a normal browser user-agent.
  - For WEP and Feministerna I used Wayback snapshots, dated 2024-12-28 and 2026-10-17. Their **live** sites today are unverified.
- **Ni Una Menos.** `niunamenos.org.ar` does **not resolve** (NXDOMAIN, checked twice on 2026-10-24). I used a Wayback snapshot from 2019-12-18 instead (see §2.13).
- **WebFetch summarises.** It returns a small model's summary of the page, not the raw text. Exact wording quoted below was checked against raw HTML or DOM dumps where I could: The Funambulist, Feministerna, WEP, Ni Una Menos, the Sunrise pop-up markup, and the activist and GSA READMEs. Other wording is paraphrased.
- **Web-search budget.** The shared search budget for this run ran out partway through. So the 2025–2026 design-direction section (§4) rests on what I observed on the peer sites, plus a few pages I fetched directly. I did not do a fresh survey of trend articles. A follow-up search pass could add more trade-press sources.
- **Confidence labels.** **High** means I saw it directly (screenshot, raw HTML or primary page). **Medium** means a WebFetch summary of a primary page, or a reputable secondary source. **Low** means inference.

---

## 1. TL;DR: the ten things that matter most

1. **Forensic Architecture is the model for "research as evidence"** (high).
   - Every investigation has a running number (e.g. `1.123`).
   - Each has a metadata table: date of incident, location, forums, commissioned by, methodologies, additional funding, collaborators.
   - A red "Updated 08 Oct 2026" stamp shows when it changed.
   - Satellite images carry labels, and captions sit in the margin.
   - CSP should copy this for its reports and case studies.
2. **The Funambulist is the model for "political journal"** (high).
   - Huge issue numbers sit on the covers (68, 67, 66 …), with yellow "Open Access" tags.
   - Its Geo-Index is a list of places separated by hairline rules.
   - It is bilingual (EN/FR) and says it is about 90% funded by readers.
   - Its slogan, *"We register our political utility in slowness"*, suits a movement that wants depth rather than hot takes.
3. **March For Our Lives and Sunrise are the models for "protest poster on the web"** (high).
   - MFOL: tilted photos held on with tape, caution-tape banners, a highlighter swipe across the headline, stickers saying "TAKE ACTION" and "PEOPLE POWER", and a paper texture.
   - Sunrise: its demands shown as stencilled placards on a yellow paper ground.
   - Both show the **risk** too. MFOL leads with a donation interstitial and a merch banner. Sunrise's homepage markup still holds a November 2020 election pop-up and a broken form shortcode, `[ninja_form id=2]`.
4. **Engagement ladders beat "Get involved" pages** (high). MFOL sorts actions into "On Your Couch / At Your Campus / In Your Community". XR brings newcomers in through recurring talks: "Intro to XR", "The World We Want" and "Get Involved". The GSA Participation Playbook (Play 7, "multi-tiered paths") gives the theory behind this.
5. **The two feminist parties CSP is most often compared to are not a template** (high, from primary and Wayback sources).
   - **The UK Women's Equality Party dissolved on 17 November 2024.** Its last snapshot was a NationBuilder site with a dead Twitter embed and a Google+ link.
   - **Sweden's Feministiskt initiativ has renamed itself *Feministerna*.** In 2026 it ran for the Riksdag inside the *Enad Röst* coalition rather than under its own name. Its menus still list "Partistyrelse 2023-2025" and "Framtidskommission 2019-2021", and its manifesto sits on Google Drive.
6. **Ni Una Menos is a warning about public memory** (high).
   - In 2019 its site held a rich archive: the organisation's charter, manifestos, 8M maps and a library.
   - Today `niunamenos.org.ar` does not resolve.
   - The old `niunamenos.com.ar` was listed "Buy this domain" in a 2022 snapshot. In October 2026 it is an **online-casino affiliate site** using the movement's name.
   - CSP's mission includes public memory, so domain renewal, archiving and Git history are part of the product, not an afterthought.
7. **Gen-Z-native brands are maximalist but earn it with receipts** (high).
   - Gen-Z for Change has a scrapbook collage hero (keyboard keys, glitter stars, pixel cursors, placards).
   - Each initiative then reports its own outcomes (e.g. "44,000 emails", "$2,400,000 raised").
   - Feminism in India adds a **Feminist Glossary**, a "Feminist Joy" column and a "Positive Stories" category. That kind of positive framing fits CSP.
8. **The NGO template is easy to spot.** It usually comes as a set:
   - a hero carousel (Fawcett, XR), and three line-icons for "Who we are / What we do / Get involved" (Amnesty);
   - "Read more" on every card, and embedded Instagram feeds (Sunrise, Our Streets Now);
   - impact stats with no source (MFOL's school-shooting figure), and blob-shaped heroes with halftone dots (Decidim);
   - a consent wall naming "1753 partners" (Dazed).
9. **Transparency is itself a design device.**
   - FA lists funding ("Additional funding: None").
   - XR links its 2024 and 2025 financial reports in the footer.
   - activist.org states that its data is hosted in Iceland with FlokiNET, plus its licence (AGPL-3.0) and its governance.
   - The Funambulist publishes its funding model and keeps about 80% of its back issues open access.
10. **Slop is now a named, widely noticed problem.** "Slop" was the 2025 Word of the Year for Merriam-Webster and the American Dialect Society (medium confidence: reported by Wikipedia's *AI slop* article; I could not open the Merriam-Webster page, which returned 403). For a movement that sells **credibility**, looking hand-made and fully sourced is part of the strategy, not just a style.

---

## 2. Site-by-site analysis

Each entry covers: **IA/navigation**, **homepage narrative**, **signature visual devices**, **how it moves readers to action**, **how it presents research and evidence**, **what feels dated or NGO-template**, and **steal / avoid**.

### Group A: Journals, investigations and media

#### 2.1 The Funambulist (thefunambulist.net)
*Paris-based, bilingual print and online magazine on "the politics of space and bodies", running since 2015. Screenshots: `funambulist.png`, `funambulist_magazine.png`, `funambulist_geoindex.png`.*

- **IA.** Pill-shaped nav: Magazine · Podcast · Editorials · Network · Shop · **Subscribe** (yellow pill), plus an EN/FR switch, search, account and cart.
  - The Magazine section splits into Past Issues · Geo-Index · Stockists · Subscribe.
  - The footer adds Podcast (Shows, Episodes) and Editorials (Latest Articles, Categories). (high, from DOM dump)
- **Homepage narrative.** One full-bleed documentary photo: an issue held up over a street demonstration. A one-sentence mission is set in heavy caps over it. Below is a dense mission text covering:
  - anticolonial, antiracist, queer and feminist struggles;
  - "slowness" instead of reacting to news cycles;
  - its funding: about **90% funded by subscribers and readers**, with about **80% of issues** placed in open access once out of print;
  - a bimonthly EN/FR publishing rhythm. (high, from DOM dump)
- **Signature devices.**
  - Very large grotesque headings ("MAGAZINE", "GEO-INDEX").
  - **Issue numbers set huge on each cover** (68 = *Masculinities and Coloniality*, the current issue; 65 = *Fifty Years After Soweto*).
  - A yellow **"Open Access" tag** on free issues (e.g. 64, *The No-State Solution*).
  - The Geo-Index is a plain three-column table with hairline rules (place → articles), grouped by continent.
  - The palette is black on white with one yellow accent. (high, screenshots)
- **Action.** Subscribe (monthly or yearly), shop, newsletter. There is no "donate" language: support is framed as *subscription*. (high)
- **Evidence and research.** Knowledge is organised by **issue number** and **geography** rather than by "blog". It also prints an ISSN for the online edition (2402-5895). (high)
- **Dated or template?** Neither. The weak spots are the cart and account icons. The /geo-index URL returns 404; the working one is /magazine/geo-index. (high)
- **Steal.**
  - Number everything (issues, reports, dossiers) and set the number huge.
  - Use an index by place: CSP could index UK · NI · Ireland · India · Global.
  - Publish your funding model.
  - Make "open access" a visible tag.
  - Frame slowness and depth as a political choice.
- **Avoid.** Its very long mission paragraph on the homepage. CSP's Gen Z audience needs one line, then a path.

#### 2.2 Forensic Architecture (forensic-architecture.org)
*Goldsmiths-based research agency. Screenshots: `forensic.png` (index) and `fa_investigation.png` (investigation 1.121, "Airstrikes on Minab Primary School").*

- **IA.** Very lean: Investigations · Programme · About · **Support us** (red) · Search. The investigations index can be viewed as All, or filtered **By Category** (13, e.g. Airstrikes, Borders, Land Rights, Police Violence), **By Methodology** (about 20, e.g. Geolocation, Photogrammetry, Situated Testimony, Shadow Analysis) or **By Location**, or as a **Map**. It can be sorted by relevance, title or date. (high, from DOM dump)
- **Homepage narrative.** There is no hero. The homepage *is* the evidence index. A yellow **dispatch strip** across the top carries labelled, dated items:
  - STRIKE: support for industrial action at Goldsmiths;
  - NEW ANALYSIS: bodies under the rubble in Gaza;
  - EXHIBITION: Berlin, 6 Jun 2026 – 30 Apr 2027;
  - NEW INVESTIGATION;
  - READ: *Ungrounding*, published May 2026;
  - KEEP UP WITH US: Substack. (high)
- **Signature devices.**
  - **Running investigation numbers** (`1.123`, `1.122`, `1.109`; supported projects get `SP.3`).
  - Each card carries a **metadata table** (Date of incident · Location · Forums · Commissioned by / In partnership with) and a red **"Updated 08 Oct 2026"** stamp.
  - Inside an investigation, a ruled table at the top lists: Date of incident, Location, **Publication date**, Commissioned by, **Additional funding**, Collaborators, **Methodologies**, Forums, Exhibitions, Media & Resources.
  - Then come sub-tabs (Investigation · Updates · Team · Press · Related) and a caption in the left margin.
  - Section headings sit in red outline boxes ("The 3D Model"). Satellite images are **annotated** with labels such as "Painted walls", "Assembly lines" and "Feb 2018".
  - Red is used sparingly, for "Play Video" and update stamps. (high)
- **Action.** "Support us" is the only persistent ask. Following happens via Substack. Action is *institutional*: work presented to forums such as the UN, courts and the media. (high)
- **Evidence and research.** Best in class. Method, funding, partners and update history are first-class data, not footnotes. (high)
- **Dated or template?** None. On mobile, dense metadata tables need care. (low)
- **Steal (top priority).**
  - Numbered dossiers.
  - Metadata tables listing method, sources, funding, partners and date.
  - "Updated" stamps.
  - Filtering by method, topic and place.
  - Annotated images.
  - A dispatch strip of dated items.
- **Avoid.** The graphic content and forensic gravity fit FA but would undercut CSP's *positive* brief. Pair evidence with wins and joy (see Pattern 6).

#### 2.3 Dazed (dazeddigital.com)
*UK youth-culture magazine. Screenshot: `dazed.png` (partly covered by the consent dialog).*

- **IA.** Dazed Club · Latest · Fashion · Beauty · Art & Photography · Film & TV · Music · Life & Culture · Dazed 100. There are also series (Dazed 100, Fashion Week, Lightbox, Dazed Archive, Archive Pull, *Dazed Guides To…*) and links to Latest Issue and Archive. (medium, WebFetch)
- **Homepage narrative.** A split hero: a photograph beside a big headline and standfirst ("Are we all being fooled by the Victoria's Secret rebrand?"). Then the newsletter, then "Latest", section blocks, the magazine, and Trending. (high)
- **Signature devices.**
  - A *question-led* cultural-critique headline.
  - The newsletter is named and has a voice: **"Escape the algorithm! Get The Drop"**.
  - A franchise list (Dazed 100) that invites nominations. (high, screenshot)
- **Action.** Newsletter, buy a copy, the Dazed Club app, and "Put yourself forward" for the Dazed 100 (2027 nominations). (medium)
- **Evidence and research.** Not its job.
- **Dated or template?** The consent dialog names **"1753 partners"**, which is adtech-driven. The page shows no dates on its cards. (high, screenshot)
- **Steal.**
  - A named, anti-algorithm newsletter.
  - An annual "list" franchise. For CSP this could be a "Fourth Wave 100" of organisers, which also brings in nominations.
  - Question-led headlines that critique culture.
- **Avoid.** The adtech consent wall and undated cards.

#### 2.4 Ms. Magazine (msmagazine.com)
*US feminist magazine founded in 1972. Screenshot: `msmag.png`.*

- **IA.**
  - A **Trending** bar of topics (FEMINIST 250, Older Women, Pipeline to Predators, Epstein, Birth Control, Maternal Health …).
  - Yellow **DONATE / JOIN / RENEW** stack.
  - Primary nav: News & Opinion · Politics · Health · Culture · Ms. Studios · Women & Democracy · Series · Explore by Topic · Store. (high)
- **Homepage narrative.** News-led. The lead item is a 2026 US midterms voting guide (22 Oct 2026) with hotline numbers. Then come a sidebar of headlines, the weekly digest, a podcast, membership, National, Global, and *Feminist Daily Newswire*. (high)
- **Signature devices.** The tagline **"More Than A Magazine, A Movement"**, magenta and yellow, condensed headline type, and a campaign banner in the header slot. (high)
- **Action.** Donate, join, renew, become a member, gift subscription, newsletter, podcast subscribe, plus voter-protection hotlines. (high)
- **Evidence and research.** Polls are reported as news ("Four in Five Voters Fear…", 14 Oct 2026). There is a multi-part investigation (*The Pipeline to Predators*, part 1 on 2 Oct 2026). (medium)
- **Dated or template?** It looks like a WordPress news theme: sidebar, banner-ad slots, stacked buttons. It works but has no distinct identity beyond colour. (medium, judgement)
- **Steal.** The "more than a magazine, a movement" positioning (CSP is the inverse: a movement with a journal). Named series and investigations in parts. Practical service content in election weeks.
- **Avoid.** Banner-ad shaped slots, a sidebar on mobile, and three stacked money asks above the fold.

#### 2.5 Feminism in India, FII (feminisminindia.com), *Gen-Z-leaning, India*
*Screenshot: `fii.png`.*

- **IA.** Stories (Culture / Society / Health / **Intersectionality** with sub-tags such as Caste, Disability, Masculinity) · **Research** · **Campaigns** (#GBVinMedia, #DigitalHifazat, #IndianWomenInHistory, FII Wiki Project) · **Feminist Glossary** · Multimedia · **FII Hindi** · Donate. (medium, WebFetch; high for the visible top nav)
- **Homepage narrative.** Starts with a top strip linking to its Feminist Glossary, framed as plain-language definitions. Then a lead essay (23 Oct 2026), a dated list, the newsletter, Culture, and **Special Series** ("Feminist Joy" column, "Being Feminist" column, #IndianWomenInHistory). (high)
- **Signature devices.** A red "//" slash device on buttons, an illustrated character beside the newsletter, and **reading time and date on every card** ("5 min read | Oct 21, 2026"). (high)
- **Action.** Donate ("keep FII paywall free"), newsletter, submission guidelines, re-publish our articles, partner. (medium)
- **Evidence and research.** A separate Research section and a "Fact Checked Stories" tag. (medium)
- **Dated or template?** The homepage is a very long scroll of category blocks (19 sections). (medium)
- **Steal.**
  - **Glossary** as onboarding for Gen Z and Gen Alpha.
  - "Feminist Joy" and "Positive Stories" as positive editorial pillars.
  - Reading time and date on every card.
  - A sister-language edition (Hindi). For CSP that could be Punjabi, Hindi or Irish, depending on base.
  - A "re-publish our articles" licence.
- **Avoid.** Endless category blocks. Curate instead.

### Group B: Participation platforms and playbooks

#### 2.6 Decidim (decidim.org)
*Barcelona-born open-source participatory democracy software. Screenshot: `decidim.png`.*

- **IA.** Product (First steps, Features, Modules, Documentation) · In use (Installations, Case studies) · About us · Community (Metadecidim, Partners) · News · **Demo** · language picker (12+ languages). (medium)
- **Homepage narrative.** The claim is a digital platform for participation and community governance, "free/libre open source". Then a logo wall ("More than 500 organizations": Barcelona, European Commission, NYC, Helsinki, Brasil Participativo), feature rows, case studies, testimonials and a donate CTA. (high, screenshot and WebFetch)
- **Signature devices.** A black-and-white photo inside a **red blob** with halftone dots and a wireframe grid. Product UI is drawn as annotated illustrations (a voting button, a meeting card with "50 slots remaining"). The tagline under the logo reads "free open-source democracy". (high)
- **Action.** Get started, demo, read case studies, join the community, donate. (medium)
- **Evidence and research.** Case studies with places and years (e.g. Barcelona participatory budgets 2020–2023). (medium)
- **Dated or template?** The **blob-plus-halftone hero** is a 2019–2022 SaaS cliché. The repeated testimonials are a template tell. (medium, judgement; the repetition was reported by WebFetch)
- **Steal.** The **participation vocabulary**: processes, proposals, meetings, accountability and results, and especially its "assessment and monitoring" step. That maps onto CSP's "institutional accountability". The UI illustrations show what participation looks like.
- **Avoid.** Blob heroes, logo walls and SaaS tone.

#### 2.7 activist.org and github.com/activist-org/activist
*An open-source activism platform. Screenshot: `activist.png`. Repo created 2021-01-22; last push 2026-10-22 (GitHub API); AGPL-3.0; 764 stars and 630 forks.*

- **Landing page.** Headline "Where we start." The subhead says it is a platform for growing movements and organising actions, and that it is free, open-source, privacy-focused and community-governed. There is a **Request access** button (so it is not open sign-up), a Roadmap link and a Theme (light/dark) toggle. Three sections (Get active / Get organized / Grow your organization) each have **hand-drawn fist illustrations**, then "Open: our code and processes" with GitHub star and fork counts. (high, screenshot)
- **README principles** (high, raw README):
  - Free, open-source, privacy-focused, "governed by our community".
  - It aims to *"put platform health before platform growth"*.
  - New organisations join only if an organisation already on the platform vouches for them.
  - It is **hosted in Iceland with FlokiNET**.
  - Accessibility is "at the center".
  - Its designs are in a public Figma file.
- **Planned features worth borrowing for CSP's static site:**
  - Events split into **Learn** (seminars, meetings, panels) and **Action** (protests, volunteering, canvassing).
  - Event pages that turn into **flyers and posters linked by QR codes**.
  - **Legal notes on event pages** warning participants of risks.
  - Resources that are private by default.
  - Onboarding built on Matrix.
- **Dated or template?** The orange rounded buttons read as generic. "Request access" adds friction. (medium, judgement)
- **Steal.**
  - The Learn and Action split for events.
  - Event pages that print as posters, with QR codes.
  - Legal and safety notes for street actions ("know your rights").
  - Publishing hosting, privacy and governance as values.
- **Avoid.** A gated "request access" as the main CTA for a movement that wants to grow.

#### 2.8 GSA Participation Playbook (github.com/GSA/participation-playbook)
*US federal "Public Participation Playbook". Repo created 2015-02-04; last commit 2015-02-09 (GitHub API); CC0. It is old (2015) but its principles still hold. Author: Justin Herman, GSA (medium).*

Twelve plays in five phases (high, raw README headings):

| Phase | Play | Use for CSP |
|---|---|---|
| Establish goals | 1. Clearly define and communicate your objectives | Each campaign page states its goal, timeline and "what success looks like". |
| Understand the playing field | 2. Understand your participants and stakeholder groups | Personas: Gen Z student, Gen Alpha (plus parents and teachers), Millennial professional. |
| | 3. Understand and communicate the benefit of participation | Say what happens to a sign-up or survey answer, and when you will report back. |
| | 4. Empower participants through public/private partnership | A partners page with clear rules on logos and messaging. |
| Design participation | 5. Select appropriate design format | Mobile-first, plus offline (printable) and SMS/WhatsApp options. |
| | 6. Design for inclusiveness | Plain language, accessibility, multilingual, low-bandwidth. |
| | 7. Provide multi-tiered paths to participation | An engagement ladder (Pattern 3). |
| | 8. Provide effective and timely notifications | Newsletter plus a dated dispatch strip. |
| | 9. Encourage community building through responsive outreach | Publish summaries of what you heard; name contacts. |
| | 10. Protect citizen privacy | Minimal data, anonymous input allowed, clear retention. |
| Facilitate | 11. Use data to drive decision making | Set and publish KPIs. |
| Evaluate and report | 12. Transparently report outcomes and performance | A "Receipts" or wins ledger and accountability reports (Patterns 1 and 6). |

### Group C: Movements and campaigns

#### 2.9 Sunrise Movement (sunrisemovement.org)
*US youth climate movement. Screenshot: `sunrise.png`.*

- **IA.** About Sunrise (Objective, Problem, Theory of Change, Principles, **Our Wins**, **Movement Timeline**) · Our Demands · Our Campaigns · The Latest (News, **Toolkits**, Impact) · **Take Action / Join Us / Donate** as three outlined buttons. (high)
- **Homepage narrative.**
  - "WE ARE THE CLIMATE REVOLUTION": a sign-up card with **email and mobile (SMS) opt-in**, over a protest photo.
  - Then "Our vision is simple", which includes "lives filled with joy".
  - Then **Our Demands** as four placards, Campaigns, an Instagram feed, and Movement posts. (high)
- **Signature devices.** **Placards as UI**: each demand is a stencilled, distressed poster (shield, banner and sunburst shapes) on a yellow, paper-textured ground. A heavy rounded display face and saturated yellow, maroon and black. (high)
- **Principles.** Eleven numbered principles, ending with "We are full of determination, fire, and hope". (medium)
- **Action.** Email and SMS capture in the hero, Join, Donate, Take Action, toolkits. (high)
- **Evidence and research.** "Our Wins" and a "Movement Timeline" exist in the nav. The homepage does not show evidence. (medium)
- **Dated or template?**
  - The latest movement post shown is dated 30 Mar 2026, which is slow.
  - The **homepage markup still contains a 2020 pop-up** inviting people to a "Wednesday 11/4" post-election call (4 Nov 2020) that mentions Joe Biden.
  - A "Sign Up for Pledge" pop-up contains an **unrendered `[ninja_form id=2]` shortcode** (high, raw HTML).
  - The embedded Instagram grid adds weight and tracking.
- **Steal.** Demands as placards, Wins and Timeline as nav items, numbered principles, joy in the vision statement, toolkits.
- **Avoid.** Stale CMS leftovers. The fix is a build-time "expires" date on every promo; see Pattern 9. Also avoid embedded social feeds.

#### 2.10 March For Our Lives (marchforourlives.org)
*US youth gun-safety movement founded by students in 2018. Screenshot: `mfol.png`.*

- **IA.**
  - Our Work (Disrupt Power, Confront Apathy, Mobilize Youth, Cultivate Leaders) · Impact · About Us (incl. **Strategic Plan 2026-2030**, **Policy Agenda**) · Resources (**The Machine**, **The Living Record**, **250 Years of Guns**) · Get Updates · Merch.
  - **Take Action** menu: Action Hub, Become a Member, Voter Resources, Run With Team MFOL.
  - A **Donate** widget with an amount and a one-time/monthly choice. (high)
- **Homepage narrative.**
  - It opens with a full-width donate interstitial ("POWER THE MOVEMENT"), then a lime merch banner.
  - The hero is "JOIN THE FIGHT / END GUN VIOLENCE", with a yellow **highlighter swipe** over "gun violence".
  - Then an email sign-up, four pillar cards, one big statistic, **flip cards of wins** (federal law, state laws, litigation, youth turnout), a quote, three **action paths** and **text-to-join**. (high)
- **Signature devices.**
  - Tilted photos with **masking tape**, **caution-tape banners** repeating "END GUN VIOLENCE", a hand-drawn arrow.
  - **Sticker badges** ("TAKE ACTION", "PEOPLE POWER", a crowd icon) and monospace nav text.
  - Grey paper texture and electric blue, lime and orange. (high)
- **Action.** Donate (several placements), email, SMS, membership, voter registration, merch, marathon fundraising. The action ladder reads **On Your Couch · At Your Campus · In Your Community**. (high)
- **Evidence and research.** Wins are presented with names of laws. The headline statistic ("more than 398,000 students" have experienced gun violence at school since Columbine) **has no citation on the page**. The Living Record is a story archive where contributors choose **private, anonymous or public** sharing. (medium)
- **Dated or template?** Commerce comes first: donate and merch before the mission. The flip cards hide content behind interaction. (medium, judgement)
- **Steal.**
  - The **highlighter swipe**, taped photos, caution-tape bands and stickers. Use sparingly, as one gesture per screen.
  - The action ladder named by **where you are**.
  - A wins ledger.
  - A story archive with **consent levels**.
  - A public multi-year strategic plan.
- **Avoid.** A donation interstitial before the mission, uncited stats, and flip cards.

#### 2.11 Extinction Rebellion UK (extinctionrebellion.uk)
*Screenshot: `xr.png`.*

- **IA.** Get Involved (Join an Action, Find Your Community, Volunteer, Donate) · About (Emergency on Planet Earth, **Citizens' Assembly**, FAQs, Contact) · News (Actions, Arts & Culture, Assemblies) · Press · **Donate** (yellow, with an animated hand-drawn arrow) · Search · **Change Font**. There is also a "Not in the UK? Visit the Global Website" link. (high)
- **Homepage narrative.**
  - A carousel hero: a public survey "Finding common ground on water", open 19 Oct – 19 Nov.
  - "We're campaigning right now", with four cards: Love & Rage (14 Sep 2026), the Disobey Talk Series, Don't Pay for Dirty Water, and a BBC mass Ofcom complaint.
  - "Our ongoing talks", then "Take action near you", a news sign-up and a footer. (high)
- **Signature devices.**
  - XR's illustrated cards: woodcut-style birds and turtles over gradients.
  - The hourglass symbol, and condensed caps headings.
  - Flat blue and mint section grounds. (high)
- **Action.** **Onboarding through talks**: "Intro to XR", "The World We Want", "Get Involved". Also local groups, events and the news sign-up. (high)
- **Evidence and research.** Light on the homepage. The footer links **2024 and 2025 financial reports**. (medium)
- **Dated or template?** The carousel captured mid-transition with overlapping text. The four generic cards with outlined buttons are template-like. The cookie notice is unusually plain-spoken (it promises no sensitive data), which is good. (high, screenshot)
- **Steal.**
  - "Change Font", an accessibility and dyslexia-friendly toggle.
  - A **talks-as-onboarding** series.
  - Financial reports in the footer.
  - A "campaigning right now" block with dates.
  - A link to the global or other national sites (CSP could link UK · Ireland · India chapters).
- **Avoid.** Carousels, and card grids with identical outlined buttons.

#### 2.12 Gen-Z for Change (genzforchange.org), *Gen-Z-native, US*
*Started as "TikTok for Biden" in 2020 (medium, Wikipedia via search). Screenshot: `genzforchange.png`.*

- **IA.** Who We Are · Our Values · Initiatives · Press · Endorsements, plus sticker-style buttons for XEC (Gen-Z X El Cambio), **Donate** and **Vote**. (high)
- **Homepage narrative.** Starts with a **collage hero**, then a one-paragraph mission ("social media, advocacy, and code"). Then **Our Reach** stat tiles: 1.9M+ followers, 450+ creator network, 500M+ viewer reach, 445M+ actions taken through its tools. Then initiatives (FIGHT/PODER, Gen-Z for Palestine, SAFER, Labor Over Likes), each with **its own outcome numbers**. (high, screenshot; WebFetch could not read the JS-rendered stat tiles)
- **Signature devices.**
  - A maximalist scrapbook: scanned keycaps spelling GEN-Z / FOR CHANGE, glitter stars, Y2K pixel-hand cursors.
  - Cut-out photos of young activists, hand-lettered placards, rainbow and heart stickers, and a grid-paper ground.
  - Initiative images are mocked up as laptops and phones in collage. (high)
- **Action.** Donate (ActBlue), Vote (vote.org), tool-based actions (email Congress, toolkits). (medium)
- **Evidence and research.** Outcome metrics per initiative (e.g. "44 videos … over 3 million views", "$7,000+ raised", "44,000 emails"). The sources are self-reported. (medium)
- **Dated or template?** The stat tiles are generic SaaS. A "Who We've Worked With" heading has no content. The footer reads © 2025. (medium)
- **Steal.**
  - **Collage built from real movement photos and scanned objects**. This is the honest, anti-slop version of maximalism.
  - Every initiative reports a concrete outcome.
  - Tools as actions: a pre-written email or a WhatsApp share.
- **Avoid.** Vanity reach numbers, empty sections, and collage on every page. Keep it to heroes and campaign launches.

#### 2.13 Ni Una Menos (Argentina): a case study in lost public memory
*Wayback screenshot: `niunamenos_wayback-2019-12-18.png`.*

- **Status on 2026-10-24.**
  - `niunamenos.org.ar` returns **NXDOMAIN**, so there is no website (high).
  - `niunamenos.com.ar`, the domain of the 2015–2018 site, now serves a page titled "Mejores Casinos Online en Argentina | Top para octubre 2026". Its Wayback snapshot of 2022-05-21 reads "Buy this domain" (high).
  - The movement itself is alive: the first march was on 3 June 2015, and the 10th-anniversary mobilisation in Buenos Aires was moved to 4 June 2025 to march with retirees (medium, es.wikipedia and Los Andes 2025 via search). Its main symbols are the hashtag and the colour **violet**; the green abortion-rights handkerchief is associated with it too (medium, es.wikipedia).
- **IA in Dec 2019** (high, Wayback):
  - **Quiénes Somos**: Carta orgánica, 3J, 19O, 8M.
  - **Manifiestos**.
  - **Redes**: La Internacional, **Mapa 8M**, Marchas mundo, Red Federal.
  - **Herramientas**: **Biblioteca**, ESI (sex education), Prensa.
  - **Nos mueve el deseo**: Asambleas, Acciones.
  - **Estamos para nosotras**: Líneas aborto, Números útiles.
  - **Audiovisual**.
- **Signature devices (2019).**
  - A hot-pink masthead in heavy condensed caps.
  - A **newspaper masthead** feature: "HIJAS DEL PARO", with "Feminismo popular", "Tirada bimestral" and "1° de mayo – Argentina" set as a dateline.
  - Black-and-white protest photos with **pink category flags** (ACCIONES, MANIFIESTOS, BIBLIOTECA, AMISTADES POLÍTICAS).
  - Hashtag walls set as type. (high)
- **The 2018 .com.ar site** had "5 puntos para comprometerse" (5 points to commit to), "Dónde pedir ayuda" (where to get help), the law (Ley 26485) and "Dijeron / Ilustraron Ni Una Menos" (galleries of who said and drew it). (high, Wayback)
- **Steal.**
  - Assembly-made **manifestos as a section**.
  - A **library**.
  - **Help lines** ("Estamos para nosotras").
  - A map of actions worldwide.
  - The newspaper-masthead device for a periodical.
  - Pink category flags as wayfinding.
- **Avoid (critical).** Letting the domain lapse. A movement's archive is its memory, and squatters will reuse a famous name. See Pattern 8.

#### 2.14 Young Women's Movement, Scotland (youngwomenscot.org), *UK, youth-led charity*
*Screenshot: `ywm.png`.*

- **IA.**
  - **Our programmes**: Young Women **Lead** / **Demand** / **Know** / **Remember**, Girls With Goals, 30 Under 30.
  - **Research and policy**: Research hub, Policy hub.
  - **Get involved**: Be informed / Take part / Support us.
  - **Voices**, Who we are, Collaborate with us, **Topics**, Donate. (medium)
- **Homepage narrative.**
  - The headline "WE ARE THE YOUNG WOMEN'S MOVEMENT" is set in heavy italic underlined caps on a mint-green angular ground.
  - Then a ticker of highlights: newsletter, a **digital-violence research survey**, the **Young Women Remember** archive, a Guide to AI, events, and *Status of Young Women in Scotland 2024/2025*.
  - Dated news follows (e.g. 03 Sep 26: response to Programme for Government 26-31). (high)
- **Signature devices.** Verb-named programmes, tilted photo cards with coloured offset frames, and a yellow consent banner in the brand voice. (high)
- **Evidence and research.** An annual *Status of Young Women in Scotland* report, and an invitation to "Participate in our research". (medium)
- **Public memory.** *Young Women Remember* collects 100 years of activism stories. It is funded by the National Lottery Heritage Fund. (medium)
- **Steal.**
  - **Verb-named programmes.** CSP could use Research · Remember · Mobilise · Hold to account.
  - An **annual flagship report** ("State of the Fourth Wave").
  - A public research survey as a call to action.
  - An oral-history archive.
- **Avoid.** A video or blank hero that renders as empty colour (the screenshot showed a large blank area).

### Group D: Feminist parties, NGOs and human-rights organisations

#### 2.15 UK Women's Equality Party (womensequality.org.uk): **dissolved**
*Wayback screenshot: `wep_wayback-2024-12-28.png`. The live site is behind a Cloudflare challenge, so its current state is unknown.*

- **Status.** Members voted to dissolve the party on **17 November 2024**; it closed on 31 December 2024 (high: Equality Party post of 11 Dec 2024; Wikipedia).
  - Reasons given: financial pressure and a changed political and media landscape.
  - It had about 5,600 paying members in October 2024 (medium, Wikipedia).
  - Successors include the **Equality Party** (led by Cllr Kay Wesley), the All In Party and the Alliance for Women's Equality (medium).
  - At the 2024 general election it ran 4 candidates for 1,275 votes in total (medium, Wikipedia).
- **Last site (Dec 2024)** (high):
  - Built on **NationBuilder**, with "Sign in with Facebook/Twitter".
  - Nav: Our Objectives (Equal Representation, Equal Pay & Opportunity, Equal Parenting and Caregiving, Equal Education, Equal Media Treatment, End Violence Against Women) · About us · Get involved · Campaigns · Events · Volunteer · Elections · Shop.
- **Signature devices.** The **"WE" monogram**, also used as wordplay throughout ("WE are pushing…", "WE seek…"). A suffrage palette of green, purple and white. A mosaic of photos inside the letterforms. (high)
- **Dated or template?** An empty Twitter embed and a Google+ link (a dead network) in Dec 2024. The latest-news cards are just "Executive Committee Statement". There is a large empty purple block. (high, screenshot)
- **Steal.**
  - Wordplay built into the name ("WE"). CSP's equivalent is "SHOCK" used as a verb; see the brand brief.
  - Six objectives with plain names. CSP's manifesto could have a similar count.
- **Avoid.** Hosted-CMS sprawl and dead social embeds. Strategically, note that the "single-issue women's party" model failed in the UK, which supports CSP's movement-first framing.

#### 2.16 Feministiskt initiativ, now **Feministerna** (Sweden)
*Wayback screenshot: `fi_feministerna_wayback-2026-10-17.png` (feministerna.se). The live feministisktinitiativ.se and feministerna.se are behind Cloudflare.*

- **Status.** The site says the party has **recently changed its name from Feministiskt initiativ to Feministerna** (high, Wayback 2026-10-17).
  - In the **2026 Riksdag election** it ran as part of the coalition **Enad Röst**: socialist, feminist, antifascist and decolonial parties and movements (high).
  - In local elections it ran as Feministerna Gullspång, in coalitions in Malmö and Stockholm, and as Enad Röst in Uppsala (high).
  - Wikipedia says it stood only locally in Gullspång and kept one seat there (medium; source dated 25 Sep 2026). The site and Wikipedia agree that it did not run nationally under its own name.
  - Co-leaders listed since 2023 are Agnes Lundgren and Luis Lineo (medium, Wikipedia).
- **IA (Oct 2026 snapshot).** Vår politik (Partiprogram, "Innan, under, efter våldet", Debatt) · Stöd F! (Bli medlem) · Engagera dig i F! · Enad Röst · Partiledare · Om Fi (Ideologi, Organisation, **Partistyrelse 2023-2025**, **Framtidskommission 2019-2021**, Stadgar) · Kontakt · Nyheter. The June 2025 snapshot still listed "Statsbudget 2018" and "Feministisk pandemipolitik". (high)
- **Homepage narrative.** A name-change notice, the Enad Röst election instructions (how to write the name on a blank ballot), then the slogan **"Vi skriker! Vi drömmer! Vi bygger en annan värld!"** ("We scream! We dream! We build another world!"). It quotes Audre Lorde. The **three legs**: *aktivism, folkbildning* (popular education) and *parlamentarism*. The full manifesto is a **Google Drive link**. (high)
- **Signature devices.** The "F!" exclamation logo, hot pink with a faint triangle pattern, and the tab title "Framtiden är rosa" (the future is pink). The site was built around 2014. (high)
- **Steal.**
  - The **three-leg model** (activism · popular education · parliament). It maps directly onto CSP's "research → consciousness → action".
  - A short, chantable slogan.
  - Practical voting instructions.
- **Avoid.** A manifesto on Google Drive, stale nav labels, and a brand-name change the website cannot keep up with. All of these show a site with no owner.

#### 2.17 Fawcett Society (fawcettsociety.org.uk)
*UK charity for gender equality, campaigning for over 150 years. Screenshot: `fawcett.png`.*

- **IA.**
  - Utility bar: Log in, Basket, Become a member, Donate, Shop.
  - Main nav: About · **Research & Campaigning** (Reports & publications, Briefings, Current projects, Past projects, **Equal Pay Day**, Shifting Power) · Get Involved (Membership, Events, Local Groups, Legacy, Fundraise…) · News & Views. (medium)
- **Homepage narrative.** A four-slide carousel (Join Fawcett), four tagged cards (News, Blogs, Events, Research & Campaigning), an archive suffrage photo with a membership appeal, then the newsletter and support links. (high)
- **Signature devices.**
  - **Duotone photography** in lime and purple.
  - **Torn-paper edges** around the black hero.
  - Lime label tags and condensed caps.
  - Historic suffrage-march photography. (high)
- **Action.** Membership first, then donate, volunteer (Future Fawcett), fundraise, legacy. (high)
- **Evidence and research.** Report listings show title, summary, published and **updated** dates, and author. The latest report is *Can We Afford to Automate Gender Inequality?* (10 Mar 2026, updated 21 Apr 2026); the one before it is dated 26 Sep 2024. The homepage shows no dates or data. (medium)
- **Dated or template?** The carousel, "Read more" everywhere, and a footer reading © 2025. WebFetch reported promotional copy still mentioning Brexit "on the horizon". (medium)
- **Steal.** Duotone with a sharp contemporary accent colour, archive photography as lineage, a **flagship day** (Equal Pay Day), and "updated" dates on reports.
- **Avoid.** Carousels, a dateless homepage, and charity-shop IA (basket and legacy in the top bar).

#### 2.18 Amnesty International (amnesty.org/en)
*Screenshot: `amnesty.png`.*

- **IA.** Seven-language bar · Who We Are · What We Do · Countries · Get Involved (Take Action, Become a member, online course) · Latest (News, Campaigns, Education, **Research**, Impact) · **Donate Now** (yellow). (high)
- **Homepage narrative.** A news-led hero: El Fasher, Sudan, one year on. Then "Take action now and make a difference" (four petition cards with topic labels and yellow **ACT NOW** buttons), a mission banner ("10 million people in over 150 countries and territories"), latest news, three icon blocks, trending topics. (high)
- **Signature devices.** Yellow and black. Headlines set in **condensed caps on black boxes**, one box per line, over the photo. A single-photo petition card with a topic label. (high)
- **Action.** Petitions first, then donate, join, volunteer, take a course. (high)
- **Evidence and research.** A search of 32,429 documents, filterable by country, type and topic. Documents carry **index numbers** (e.g. `ior40/1592/2026`, `afr57/1175/2026`), but these appear only in URLs. (medium)
- **Dated or template?** The **three line-icons for "Who we are / What we do / Get involved"** are a textbook NGO-template block. The research lists hide metadata. (high, screenshot)
- **Steal.**
  - The **boxed caps headline over a photo**, which works for urgent dispatches.
  - The **document index number** system, shown visibly (unlike Amnesty).
  - Petition cards that show the topic and one verb.
- **Avoid.** Icon trios, and metadata hidden in URLs.

#### 2.19 Our Streets Now (ourstreetsnow.org), *UK, minor note*
*Screenshot: `ourstreetsnow.png`.*

- **What it is.** A UK campaign against public sexual harassment, now focused on schools, sport and higher education. It has three pillar tiles (Education / Visibility / Advocacy) and a pink duotone hero. (high)
- **Problems.** The newsletter block shows an unconfigured-form message (medium, WebFetch). The homepage shows no dates, so I **could not verify activity in 2024–2026**.
- **Lesson.** Broken forms and undated pages make a campaign look dormant even if it is not.

---

## 3. Cross-cutting synthesis

### 3.1 Navigation and IA lessons

| Lesson | Evidence |
|---|---|
| **Five to seven top items, plus one persistent primary button.** Peers with the clearest IA keep the top level short and put money or joining in a single coloured button. | FA (4 items + Support us), The Funambulist (6 pills + Subscribe), Sunrise (4 + 3 buttons) |
| **Index research by number, method, topic and place, not "Blog".** | FA filters; Funambulist Geo-Index; Amnesty index numbers |
| **Name the engagement ladder by context or time, not by "Volunteer / Donate".** | MFOL Couch / Campus / Community; XR talks; GSA Play 7 |
| **Make the manifesto and demands first-class pages.** | Sunrise Demands and Principles; Ni Una Menos Manifiestos and Carta orgánica; Feministerna (counter-example: Google Drive) |
| **Wins and timeline belong in the nav.** | Sunrise (Our Wins, Movement Timeline); MFOL Impact |
| **A glossary or explainer layer for newcomers.** | FII Feminist Glossary; FII "Feminism 101" tag |
| **Help and safety content for the people you mobilise.** | Ni Una Menos "Estamos para nosotras" (help lines); activist.org legal notes on events |

**Suggested CSP top level** (my synthesis; low–medium confidence, to test with users):

- **Manifesto · Research · Case studies · Act · Memory · Journal · About**, plus a persistent **Join** button.
- FAQ and Contact go in the footer.
- "What we do" becomes *Act* (the ladder plus events) and the research layers.
- "Blog/Resources" becomes *Journal*, with the Glossary and toolkits inside it.

### 3.2 How peers move readers to action (ranked by fit for CSP)

1. **A context ladder.** Five minutes on your phone, then an evening on campus or at work, then a season on the street. MFOL and XR do this.
2. **One clear sign-up in the hero, email first** (SMS or WhatsApp optional). Sunrise and MFOL do this.
3. **Tool actions**: a pre-written email, a share card, a printable placard. Gen-Z for Change and activist.org do this.
4. **Talks and onboarding sessions.** XR does this.
5. **Membership as belonging**, with money second. Fawcett, Ms. and The Funambulist frame support as membership or subscription.
6. **Donations.** These suit a static site only via an external processor, and should never come before the mission (MFOL is the counter-example).

### 3.3 How peers present research and evidence

- **Best:** FA's ruled metadata tables, method tags, funding disclosure, "Updated" stamps and annotated imagery.
- **Good:** The Funambulist's issue numbers and open-access tags. Fawcett's published and updated dates with an author.
- **Weak:** Amnesty's hidden index numbers. MFOL's uncited statistic. Gen-Z for Change's self-reported reach.
- **What CSP should do:** combine FA's metadata with The Funambulist's numbering, and add a **"Sources & method" drawer on every claim**.

### 3.4 What reads as dated or "NGO-template"

These are seen across the peers above:

- Hero carousels, and icon trios.
- "Read more" on every card, and stat tiles with no source.
- Logo walls, and blob or halftone heroes.
- Embedded Instagram or Twitter feeds (often empty or dead).
- Pop-ups left over from earlier campaigns, and unrendered shortcodes.
- Stale years in the nav ("Partistyrelse 2023-2025", "Statsbudget 2018").
- PDFs and Google Drive links for core texts, and adtech consent walls.
- Undated cards, and a donation interstitial before the mission.

---

## 4. 2025–2026 design directions that avoid "AI slop"

**Context (medium confidence).** "Slop" was named 2025 Word of the Year by Merriam-Webster and the American Dialect Society; ADS announced on 10 Jan 2026. Wikipedia's *AI slop* article reports this, along with brand backlash against AI-generated ads (e.g. Coca-Cola 2024, McDonald's Netherlands). For CSP, a hand-made look with sources shown is part of its **credibility**, not just a style.

**Slop and template tells to ban from CSP's site:**

- Purple-to-blue mesh gradients and glassmorphism cards.
- Emoji or line-icon trios, and bento grids of vague claims ("Empowering voices. Building futures.").
- AI-generated "diverse crowd" stock imagery, and abstract 3D blobs.
- Undated "impact" counters, auto-playing carousels, and three-column "Our values" cards.
- Lorem-ish mission copy, and generic system-UI layouts.

**Techniques that suit a protest-poster plus political-journal identity**, each with a peer example and a static/Netlify note. CSP's brand palette is paper `#F6EEDD`, ink `#221F1D`, protest red `#CB3932`, with crimson, plum, green, blue and marigold as accents (from `brand/logo/BRIEF.md`).

| # | Technique | Where it's done well | How to build it statically |
|---|---|---|---|
| T1 | **Oversized type over documentary photography**: one message per screen, condensed caps, photos of *real* CSP actions | Amnesty (boxed caps), The Funambulist (caps over a march), MFOL | CSS `clamp()` type; text on solid ink boxes, not on bare photos, for contrast; AVIF/WebP `srcset` |
| T2 | **Duotone photography** in red and ink, or plum and marigold | Fawcett (lime and purple), Our Streets Now (pink) | Pre-render at build with `sharp`, or use an SVG `feColorMatrix` filter; keep the original photo linked for the record |
| T3 | **Paper grounds**: cream paper, subtle grain, newsprint for journal pages | MFOL (grey paper), Sunrise (yellow paper) | A tiny tiled noise PNG/SVG at low opacity; no heavy texture behind body text |
| T4 | **Strong rules and ruled tables**: hairlines between index rows, thick rules above sections | The Funambulist Geo-Index, FA metadata tables | `border-block` rules; CSS grid tables that stack into definition lists on mobile |
| T5 | **Numbered reports, issues and dossiers** (`CSP·R·001`), with the number set huge | FA (`1.123`), The Funambulist (68), Amnesty index numbers | Front-matter `number`, `published`, `updated`; an auto-generated index page |
| T6 | **Evidence annotations**: labelled photos, maps and documents; circled phrases; callout lines | FA (satellite labels such as "Painted walls"), Decidim (circled UI) | Inline SVG overlays positioned in %, with `<figure>` and `<figcaption>`; must work without JS |
| T7 | **Marginalia and sidenotes**: captions and source notes in the margin; inline on mobile | FA (left-margin caption) | CSS grid with a margin column; footnotes turn into `<details>` on small screens |
| T8 | **Timelines** for public memory: dated, sourced, filterable by place | Sunrise (Movement Timeline), YWM (Young Women Remember) | One JSON or Markdown file per event, built into a vertical timeline; anchor link per event |
| T9 | **Pull quotes** set like placard lettering, always attributed and dated | MFOL (Trevon Bosley quote), FII columns | A `<blockquote>` with a big quote mark; never unattributed |
| T10 | **Stickers and placards** as wayfinding (category flags, "Open Access", "Updated", "Act now") rather than decoration | MFOL stickers, Ni Una Menos pink flags, Funambulist "Open Access", Sunrise placard demands | SVG stickers with a slight rotation; scans of **real** handmade placards from CSP actions |
| T11 | **Highlighter strike and swipe** on one key phrase | MFOL ("gun violence") | An SVG path behind the text; respect `prefers-reduced-motion` if animated |
| T12 | **Dispatch strip or ticker**: labelled, dated one-liners (ACTION · NEW REPORT · WIN · EVENT) | FA's yellow top bar | Generated at build from front matter with `expires:`; static by default; marquee only if motion is allowed |
| T13 | **Collage from movement material**: cut-out photos, scanned flyers, tape | Gen-Z for Change, MFOL | Use only on campaign-launch heroes; credit every photographer |
| T14 | **Newspaper masthead** for the periodical or journal, with dateline, issue number and frequency | Ni Una Menos "Hijas del Paro", Dazed issues | A masthead component for the Journal section |
| T15 | **Type with politics**: women-designed and multi-script typefaces | Inspired by *All Work is Women's Work*, a feminist archival book set only in women-designed faces (It's Nice That, 22 Oct 2026) | Fraunces (Undercase Type: Phaedra Charles and Flavia Zimbardi), already in `brand/fonts`. Tiro Devanagari Hindi (team incl. Fiona Ross). Anek Gurmukhi/Devanagari and Mukta (Ek Type). Designers from Google Fonts metadata, availability checked via the Google Fonts CSS API (high). |

**Motion and accessibility guardrails**:

- `prefers-reduced-motion` on everything that moves.
- No meaning carried by colour alone.
- XR-style **"Change font"** toggle for a dyslexia-friendly or larger face.
- Contrast checks for red text on paper.
- Alt text that describes the protest scene, not "image".

---

## 5. Ranked: 15 concrete patterns for CSP

Ranked on four criteria: (a) impact on the mission chain *ideas → research → public consciousness → collective action*; (b) distinctiveness against the NGO template; (c) fit for Gen Z, then Gen Alpha, then Millennials; (d) how easy it is on a static site on Netlify's free plan.

1. **Numbered research dossiers with an evidence table.**
   - Each report or case study gets a number (`CSP·R·001`) and a ruled metadata table: date, place, question, **method**, sources, partners, **who funded it** ("Additional funding: none"), **published / updated** stamp, and a corrections log.
   - Index the dossiers by topic, method and place.
   - *Peers:* Forensic Architecture, The Funambulist, Amnesty index numbers.
   - *Static:* Markdown front matter generates the index; Pagefind for static search (verified as a fully static, serverless library).
2. **A poster-grade hero: one sentence, huge, over real duotone photography.**
   - Condensed caps in ink boxes on a red/ink duotone photo of an actual CSP action.
   - One primary CTA (Join) and one secondary (Read the Manifesto).
   - No carousel.
   - *Peers:* Amnesty, MFOL, The Funambulist.
3. **An engagement ladder named by where you are.**
   - "On your phone (5 min) · At school, uni or work (an evening) · On the street (a season) · In the institutions (accountability)".
   - Each rung has one concrete, dated action.
   - *Peers:* MFOL, XR talks, GSA Play 7.
4. **The manifesto as a numbered, citable HTML page.**
   - Short numbered clauses (Sunrise has 11 principles; WEP had six objectives), each with an anchor link, a share card and a "read the research behind this" link.
   - Never a PDF or Google Drive file (Feministerna is the counter-example).
   - Add the "three legs" framing: research · popular education · street and institutions.
   - *Peers:* Sunrise, Ni Una Menos, Feministerna.
5. **Annotated evidence figures and marginalia.**
   - Photos, documents, charts and screenshots carry SVG labels, circled phrases and margin source notes, so they read as **receipts** for a Gen Z audience that checks claims.
   - *Peers:* FA, Decidim's annotated UI.
6. **A wins ledger ("Receipts").** This is CSP's *positive* signature.
   - A dated, sourced list of wins, small and large: a council motion passed, a school policy changed, a report cited, a march turnout.
   - Each win links to its evidence.
   - It balances outrage with hope.
   - *Peers:* MFOL win cards, Sunrise "Our Wins", Gen-Z for Change outcome numbers, FII "Feminist Joy" and "Positive Stories".
7. **Ruled index pages by place and topic.**
   - Plain-text tables with hairline rules: UK · Northern Ireland · Ireland · India · Global → reports, case studies, actions.
   - This is cheap, fast, accessible and very "journal".
   - *Peers:* The Funambulist Geo-Index, FA by location.
8. **A public-memory timeline and archive, with consent levels and stewardship.**
   - A timeline of feminist waves and CSP's own actions, plus a story archive where contributors choose private, anonymous or public.
   - Commit to stewardship:
     - auto-renew the domain and register the obvious typo and country variants;
     - keep the site in Git;
     - mirror reports to the Internet Archive or Zenodo;
     - publish a "how we preserve this" note.
   - *Peers:* MFOL Living Record, YWM Young Women Remember; Ni Una Menos is the cautionary case.
9. **A dated dispatch strip, with expiry dates.**
   - A thin strip (ACTION · NEW DOSSIER · WIN · EVENT), each item dated.
   - Promos carry an `expires:` field so the build drops them automatically. That is the fix for Sunrise's 2020 pop-up.
   - *Peers:* FA top bar; Sunrise is the cautionary case.
10. **Stickers and placards as a wayfinding system.**
    - A small set of rotated SVG stickers for states and categories: OPEN ACCESS, UPDATED, ACT NOW, WIN, IN THE STREET, IN THE INSTITUTIONS.
    - Scans of real handmade placards illustrate the demands.
    - One sticker per card, at most.
    - *Peers:* MFOL, Sunrise placards, Ni Una Menos flags, Funambulist tags.
11. **A Feminist Glossary and "Fourth Wave 101" explainers.**
    - Plain-language definitions linked from every report and manifesto clause. This brings in Gen Alpha and newcomers.
    - *Peers:* FII Feminist Glossary, GSA Play 6 (plain language).
12. **A transparency and privacy footer as a brand statement.**
    - Who funds CSP, the latest accounts, where the site is hosted, what is tracked (ideally nothing: cookieless analytics, so no consent wall), an imprint and the licence (e.g. CC BY for reports, with re-publish terms).
    - *Peers:* XR financial reports, FA funding field, activist.org hosting and privacy, The Funambulist's funding model, FII "re-publish our articles"; Dazed's 1,753-partner wall is the counter-example.
13. **Event pages that print as posters, typed as Learn or Action.**
    - Every event has a type (Learn: talk, reading group; Action: march, vigil, council meeting).
    - It has an ICS download, a "know your rights / safety" note for street actions, and a **printable A3/A4 poster with a QR code** made from the same data.
    - *Peers:* the activist.org README, XR talks.
14. **A bilingual and multi-script type system, with women-designed faces.**
    - Plan the type stack for English plus Irish (fadas), Hindi (Devanagari) and Punjabi (Gurmukhi), depending on the confirmed base.
    - Prefer women-designed or women-led-foundry faces where possible (Fraunces) and Indian foundries for Indic scripts (Ek Type's Anek family and Mukta).
    - Publish one translated edition of each flagship text.
    - *Peers:* The Funambulist EN/FR, FII Hindi, the *All Work is Women's Work* type policy.
15. **One named newsletter with a voice, email-first, no embedded feeds.**
    - Something like "Escape the algorithm" (Dazed's "The Drop"), with a CSP name (e.g. *The Shock*). Add WhatsApp or SMS later.
    - Link to TikTok and Instagram, but don't embed their feeds. Embeds go stale, add tracking and slow the page.
    - *Peers:* Dazed; Sunrise and WEP embeds are the counter-examples.

**Honourable mentions (not ranked):**

- Verb-named programmes (YWM's Lead / Demand / Know / Remember).
- An annual "Fourth Wave 100" nominations franchise (Dazed 100).
- A yearly flagship report ("State of the Fourth Wave", after YWM's *Status of Young Women*).
- A flagship day (Fawcett's Equal Pay Day).
- An XR-style "Change font" accessibility toggle.

---

## 6. Avoid list (one line each)

- Hero carousels (Fawcett, XR).
- Three-icon "Who we are / What we do / Get involved" blocks (Amnesty).
- Blob and halftone SaaS heroes, and logo walls (Decidim).
- Stats with no source on the page (MFOL); vanity reach counters (Gen-Z for Change).
- Donation interstitials and merch banners before the mission (MFOL).
- Embedded Instagram or Twitter feeds and dead networks (Sunrise, WEP's Google+ link and empty Twitter embed).
- Leftover pop-ups and unrendered shortcodes (Sunrise).
- Stale years in nav labels, and manifestos on Google Drive (Feministerna).
- Undated homepages and cards (Fawcett, Dazed, Our Streets Now).
- Adtech consent walls (Dazed).
- Gated "request access" as the main CTA (activist.org).
- Letting the domain lapse (Ni Una Menos).
- AI-generated imagery of protests or people. It is a credibility risk for a research movement.

---

## 7. What this means for CSP's planned pages

| Page | Lead pattern(s) | Notes |
|---|---|---|
| Home | 2, 9, 3, 6 | Poster hero, then dispatch strip, then ladder, then latest dossier, then wins, then newsletter |
| Manifesto | 4, 11 | Numbered clauses with anchors; glossary links |
| About | 12, 8 | Founder, team, funding, the "three legs", timeline excerpt |
| What we do / Act | 3, 13 | Ladder, events (Learn / Action), toolkits, printable posters |
| Case studies | 1, 5, 7 | FA-style metadata, annotated figures, index by place |
| Blog / Resources → Journal | 14, 11, 15 | Masthead, issue numbers, glossary, re-publish licence |
| FAQ | 11 | Plain language; include safety and "is CSP a party?" |
| Join | 3, 15 | One form (Netlify Forms; check free-tier submission limits), optional SMS/WhatsApp later |
| Contact | 12 | Press, partnerships, safeguarding contact |

---

## 8. Open questions for the founder

1. **Country base.** Northern Ireland, England, Ireland or India? It decides languages (Irish, Punjabi, Hindi), the place index, legal and imprint wording, and which donation processor to use.
2. **"Party".** Does CSP intend to register with the Electoral Commission (UK), or stay a movement? WEP's dissolution and Feministerna's move into a coalition both suggest the movement-first route is safer. The answer changes the imprint and donation rules.
3. **Photography.** Does CSP have its own documentary photos of actions and placards? Patterns 2, 10 and 13 depend on real material, not stock or AI.
4. **Research output.** Are dossiers or reports already in hand (for issue `001`), or should the launch use a "Research agenda" page instead?
5. **Channels.** Email only at launch, or email plus WhatsApp community or SMS?
6. **Transparency.** Is CSP comfortable publishing its funding sources and accounts in the footer?
7. **Tone.** How far should the collage and sticker maximalism go (Gen-Z for Change is the extreme) against the restrained journal look (FA, The Funambulist)? My recommendation: maximal on campaign heroes, restrained on research.

---

## 9. Sources (accessed 2026-10-24 unless stated)

**Primary pages (live):**

- https://thefunambulist.net/ and /magazine and /magazine/geo-index (rendered with headless Chrome; the site is behind Cloudflare). High.
- https://forensic-architecture.org/ and /investigation/airstrikes-on-minab (publication date 16 Jul 2026). High.
- https://www.dazeddigital.com/ (High: screenshot; Medium: WebFetch).
- https://msmagazine.com/ (items dated 14–23 Oct 2026). High.
- https://decidim.org/ (© 2026). High/Medium.
- https://www.amnesty.org/en/ and https://www.amnesty.org/en/research/ (items Oct 2026). High/Medium.
- https://activist.org/ (screenshot). High.
- https://github.com/activist-org/activist and the raw README (last push 2026-10-22 via GitHub API). High.
- https://github.com/GSA/participation-playbook and the raw README (created 2015-02-04; last commit 2015-02-09). High.
- https://www.sunrisemovement.org/ (latest post 30 Mar 2026; the 2020 pop-up was confirmed in the raw HTML) and /principles/. High/Medium.
- https://marchforourlives.org/ and /the-living-record/. High/Medium.
- https://extinctionrebellion.uk/ (items Sep–Nov 2026). High.
- https://www.fawcettsociety.org.uk/ and /reports-publications (latest report 10 Mar 2026). High/Medium.
- https://genzforchange.org/ (© 2025). High (screenshot).
- https://www.youngwomenscot.org/ (items May–Sep 2026). High/Medium.
- https://feminisminindia.com/ (items Oct 2026). High/Medium.
- https://www.ourstreetsnow.org/ (undated). Medium.
- https://niunamenos.com.ar/ (casino affiliate page, title references October 2026). High.
- DNS lookup: `niunamenos.org.ar` returned NXDOMAIN on 2026-10-24. High.

**Archived pages (Internet Archive):**

- https://web.archive.org/web/20261017131223/https://feministerna.se/ (2026-10-17). High.
- https://web.archive.org/web/20250617065933/https://feministisktinitiativ.se/ (2025-06-17). High.
- https://web.archive.org/web/20241228031750/https://www.womensequality.org.uk/ (2024-12-28). High.
- https://web.archive.org/web/20191218165142/http://niunamenos.org.ar/ (2019-12-18). High.
- https://web.archive.org/web/20180602015315/http://niunamenos.com.ar/ (2018-06-02). High.
- https://web.archive.org/web/20220521182431/http://niunamenos.com.ar/ ("Buy this domain", 2022-05-21). High.

**Secondary sources:**

- https://en.wikipedia.org/wiki/Women%27s_Equality_Party (dissolution 17 Nov 2024; 2024 results). Medium.
- https://equalityparty.org.uk/2024/12/11/equality-party-launched-by-former-members-of-wep/ (11 Dec 2024; updated 29 Mar 2025). High for the vote date.
- https://en.wikipedia.org/wiki/Feminist_Initiative_(Sweden) (rename; 2026 local result, citing a 25 Sep 2026 source). Medium.
- https://es.wikipedia.org/wiki/Ni_una_menos (origins 2015; slogan by Susana Chávez, 1995; violet). Medium.
- https://www.losandes.com.ar/sociedad/a-10-anos-del-primer-ni-una-menos-el-colectivo-sale-la-calle-mendoza-y-el-pais-n5950139 (29 May 2025; seen only as a search result, the fetch returned 403). Low–Medium.
- https://en.wikipedia.org/wiki/AI_slop ("slop" as 2025 Word of the Year for Merriam-Webster and ADS; ADS announced 10 Jan 2026). Medium.
- https://www.unwomen.org/en/news-stories/feature-story/2025/03/gen-z-ero-tolerance-for-inequality-how-youth-are-driving-change-for-womens-rights-in-2025 (11 Mar 2025; youth activists vow to keep going despite backlash). Medium.
- https://www.itsnicethat.com/articles/hanka-van-der-voet-all-work-is-womens-work-publishing-project-221026 (22 Oct 2026; set only in women-designed typefaces). Medium.
- https://pagefind.app/ (static search library). High.
- Google Fonts metadata, https://fonts.google.com/metadata/fonts (font designers), and the CSS API (availability). High.

**Could not verify:**

- The live state of womensequality.org.uk, feministisktinitiativ.se and feministerna.se (Cloudflare).
- Ni Una Menos's current official social handles. The handle `@niunamenosar` that I fetched had 74 followers and posts from 2020, so it is probably not the official account.
- The Merriam-Webster page itself (403).
- 2025–2026 trade-press design-trend articles (search budget ran out).

**Screenshots** (in `/Users/Abhi/Developer/CSP/research/peers/`, desktop 1440 px, top 3,000 px):

- **Live sites:** activist.png, amnesty.png, dazed.png, decidim.png, fawcett.png, fii.png, forensic.png, funambulist.png, genzforchange.png, mfol.png, msmag.png, ourstreetsnow.png, sunrise.png, xr.png, ywm.png
- **Inner pages:** fa_investigation.png, funambulist_magazine.png, funambulist_geoindex.png
- **Wayback snapshots:** fi_feministerna_wayback-2026-10-17.png, niunamenos_wayback-2019-12-18.png, wep_wayback-2024-12-28.png
