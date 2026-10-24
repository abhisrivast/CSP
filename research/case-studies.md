# Case studies for the CSP "Case studies" page

**What 12 feminist movements teach a Fourth Wave movement that turns ideas into research, research into public consciousness, and public consciousness into collective political action**

Research date: 2026-10-24 (the 51st anniversary of Iceland's 1975 Women's Day Off).
Prepared for: Cultural Shock Party (CSP) website build (static site on Netlify). Each of the 12 sections below is written so it can become its own web page.

---

## 0. Read this first: method, limits and how to use this file

### 0.1 How the research was done

**Web search.** The shared WebSearch budget for this run was already used up by other agents before this task started. Zero web searches were available. Every source below was therefore reached by opening known URLs directly:
- Wikipedia articles (read in full through the Wikipedia API), and the citations inside them;
- primary documents: court judgments, government reports, statute pages, UN agency releases and the Citizens' Assembly report;
- NGO and organiser websites;
- news outlets that allowed automated fetching.

**Blocked outlets.** Many major outlets refused automated fetching:
- BBC, The Guardian, AP, Reuters, CNN and NYT;
- DW, Politico, The Hindu, Indian Express and India Today;
- nobelprize.org, OHCHR and WEF.

Where a fact is only available via one of these, I cite the Wikipedia page that cites it and mark confidence **medium**. I never cite a URL I did not open.

**Confidence labels.**

| Label | Meaning |
|---|---|
| **High** | A primary document, or a reliable outlet I opened that states the fact directly. |
| **Medium** | Stated in a Wikipedia article or secondary source I opened, but I could not open the underlying primary source. |
| **Low** | An organiser's own claim, or a figure where sources disagree. |

**Dates.** Every source carries its own publication date where one was visible. "Accessed" means 2026-10-24.

**Images.**
- Licences, authors and dates were read from each Wikimedia Commons file page's metadata (the Commons API returns the licence block of the file page) on 2026-10-24.
- Four file pages were also opened in full to confirm that the metadata matches the page:
  - Belfast 2012 (028);
  - Reykjavík 2005 (5);
  - Delhi 2012 Raisina Hill;
  - Ni Una Menos 2015 (3).
- All four matched.

### 0.2 Important context from the founder research

`research/founder.md` concluded that the founder is very probably based in India (Delhi), not Northern Ireland. "Singhni" in her handle is most likely a Punjabi word, not "NI". That conclusion still needs her confirmation.

This file therefore covers:
- two India cases (Delhi 2012 / Verma, and Pinjra Tod);
- three UK and Ireland cases (Ireland, Northern Ireland and London);
- seven international cases.

The weighting can be rebalanced once her base is confirmed.

### 0.3 Safeguarding and tone notes for the web team

These cases involve rape, femicide, state violence and abortion. On each page:
- add a short content note at the top;
- link to support services relevant to CSP's base country;
- use survivor-centred language.

**Do not name victims beyond what families have made public.** The 2012 Delhi victim's parents publicly asked for her real name, Jyoti Singh, to be used (Wikipedia, citing The Guardian, 16 Feb 2017; medium).

**Iran.** Do not publish photos where protesters inside Iran are identifiable. Use typography, murals or diaspora images instead. Some Commons files below carry a "personality rights" warning; they are flagged.

**Avoid images of minors.** One Las Tesis image on Commons shows a child. It was deliberately excluded.

**CSP wants to be positive.** Each page ends with three lessons written as "what to do", not only "what went wrong".

### 0.4 The 12 cases and why these 12

| # | Case | Region | Years | Main lever | Strongest stage of the CSP pipeline |
|---|---|---|---|---|---|
| 1 | Iceland: Women's Day Off and the strikes since | Nordic Europe | 1975, 2023, 2025 | Mass strike | Research → public ritual (the walkout time) |
| 2 | Ni Una Menos | Argentina / Latin America | 2015– | Mass march + data | Research (femicide counting) → law |
| 3 | Las Tesis, "Un violador en tu camino" | Chile → global | 2019– | Performance art | Ideas (feminist theory) → viral culture |
| 4 | #MeToo | US → global (incl. India) | 2006 / 2017– | Digital testimony | Public consciousness at scale |
| 5 | Repeal the 8th | Ireland | 2012–2019 | Deliberation + referendum | Research/deliberation → vote |
| 6 | Northern Ireland decriminalisation | UK (NI) | 2015–2020 | UN inquiry + courts + Westminster | Research/evidence → institutional pressure |
| 7 | Reclaim These Streets and the Sarah Everard vigil | UK (London) | 2021–2024 | Vigil + legal action | Street action → institutional accountability |
| 8 | Delhi 2012 → Justice Verma Committee → Criminal Law (Amendment) Act 2013 | India | 2012–2024 | Mass protest + public consultation | Consciousness → law reform |
| 9 | Pinjra Tod ("Break the Cage") | India (Delhi campuses) | 2015– | Student organising | Ideas (reframing "safety") → campus rules |
| 10 | Black Protest and Strajk Kobiet | Poland | 2016, 2020–2023 | Strikes → elections | Collective action → electoral power |
| 11 | Woman, Life, Freedom | Iran + diaspora | 2022– | Uprising + global solidarity | Consciousness under repression; documentation |
| 12 | #EndFemicideKE | Kenya | 2024– | Marches + civil-society data | Research (counting femicide) → state response |

**Also considered but not included:**
- Spain's 8M feminist strikes (2018–);
- Mexico's "glitter revolution" (2019);
- Sudan's women in the 2019 revolution;
- the Gulabi Gang (India);
- the 2017 Women's March.

They were left out to keep regional balance and avoid near-duplicates: Spain's strikes overlap with Iceland and Poland, and the Women's March overlaps with #MeToo. They were **not researched in depth for this file**, so do not publish facts about them without a new research pass.

---

## 1. Cross-cutting lessons: the synthesis for the "Case studies" landing page

These eight patterns recur across the 12 cases. Each one maps to CSP's pipeline of ideas → research → public consciousness → collective political action.

1. **Counting is power.** Several movements built the evidence base the state lacked:
   - Argentina's courts began a national femicide registry in 2015 (case 2).
   - Kenyan civil society keeps femicide databases after the government stopped publishing data in March 2025 (case 12).
   - Iceland turned the pay gap into a clock time (case 1).
   - Ireland's Citizens' Assembly took 12,000+ public submissions (case 5).

   *For CSP:* a research desk that publishes method-transparent trackers is the movement's backbone.
2. **Design actions to be copied.** Good formats spread from movement to movement:
   - Las Tesis' 15-minute performance was restaged in 200+ cities within a month (case 3).
   - Poland's 2016 Black Monday was explicitly modelled on Iceland 1975 (cases 1 and 10).
   - Ireland's Strike 4 Repeal was in turn inspired by Poland's Black Protest (case 10, per Wikipedia).

   *For CSP:* publish open "action kits" (format, script, safety plan, artwork) under an open licence.
3. **Positive, short and rooted slogans travel.** Examples are "Ni una menos" and "Woman, Life, Freedom". The second comes from the Kurdish women's movement. Credit origins.
4. **Use every institutional channel.** Movements used:
   - citizens' assemblies (Ireland);
   - UN treaty bodies and courts (Northern Ireland);
   - judicial review of police decisions (London);
   - government consultations (India 2012–13);
   - elections (Poland 2023).
5. **Wins are reversible; build for durability.** Examples:
   - Argentina's women's ministry was dissolved in December 2023.
   - A landmark #MeToo conviction was overturned in New York in April 2024.
   - Poland's 2016 win was undone by a court in 2020.
   - Chile's gender-parity convention produced a draft that voters rejected in 2022.
6. **Inclusion is strategy, not decoration.** Pinjra Tod lost Bahujan, Muslim and tribal members in 2019 over exclusion. Tarana Burke publicly challenged the erasure of Black women's work in #MeToo. Build intersectional leadership early.
7. **Protect your people.** Activists faced repression:
   - prosecution and lawsuits (Poland 2020, Las Tesis 2020);
   - arrests under anti-terror law (Pinjra Tod members, 2020);
   - teargas (Kenya, 2024);
   - mass killing (Iran, 2022 and 2026).

   *For CSP:* legal support, digital security and safeguarding policies are core infrastructure.
8. **Own your memory and your infrastructure.** Examples:
   - Iceland's strikes are anniversaries.
   - Kenya's MASKAN exhibition turned femicide data into public memory (2025).
   - By contrast, Reclaim These Streets' web domain now redirects to a domain-for-sale page (observed 2026-10-24).

   *For CSP:* archive everything; keep domains, data and accounts in the organisation's name.

---

## 2. Suggested page template for each case study

1. **Hero image** (with credit line) + title + one-line summary + content note.
2. **At a glance:** where, when, who, the main lever, headline outcome.
3. **Context** (about 120 words).
4. **Timeline** (5–8 dated events).
5. **How they did it**, in five panels mirroring CSP's mission:
   - Ideas;
   - Research and evidence;
   - Media and culture;
   - Street action;
   - Institutional pressure.
6. **What changed** (numbers).
7. **Limits and critiques.**
8. **Three lessons for CSP.**
9. **Sources** (with dates) + **image credits** (author, licence, link).

---

## Case 1. Iceland: from the 1975 Women's Day Off to the 2023 and 2025 strikes

**One-line summary:** In 1975, about 90% of Iceland's women stopped all paid and unpaid work for one day. They proved how much the country depended on them, and repeated, ever-sharper strikes have kept the pay gap in public view for 50 years.

### Context
Before 1975, Icelandic women who worked outside the home earned less than 60% of what men earned [S1 · medium]. Only three members of parliament (about 5%) were women [S2 · medium].

The UN declared 1975 International Women's Year. A representative of the Icelandic Redstockings movement proposed a strike. Organisers chose the softer name "day off" (Kvennafrídagurinn): it sounded more welcoming, and women could be sacked for striking but not for taking a day off [S1 · medium].

### Timeline
| Date | Event | Source |
|---|---|---|
| 24 Oct 1975 | About 90% of women stop paid work, housework and childcare. Around 25,000 rally in central Reykjavík, in a country of about 220,000. Schools, phone services and newspaper printing are disrupted. | S1, S2 · medium |
| 1976 | Parliament passes a law guaranteeing equal rights, and Iceland sets up a Gender Equality Council and a Gender Equality Act. | S1, S2 · medium |
| 29 Jun 1980 | Vigdís Finnbogadóttir is elected the world's first democratically elected female president. She later credited the strike as the first step. | S2 · medium |
| 2005, 2010, 2016 | Anniversary walkouts at the clock time when women "stop being paid" relative to men: 14:08 (2005), 14:25 (2010), 14:38 (2016). | S1 · medium |
| 2018 | A law takes effect requiring companies to demonstrate equal pay (equal-pay certification), under PM Katrín Jakobsdóttir. | S2, citing NPR 3 Jan 2018 · medium |
| 24 Oct 2023 | First full-day women's strike since 1975, joined by PM Katrín Jakobsdóttir. Organisers say over 100,000 people stopped work, at 21 locations, with the largest outdoor meeting in Iceland's history. | S3 · medium; S4 · low (organiser claim) |
| 24 Oct 2025 | 50th-anniversary full-day strike called by the Kvennaár ("Women's Year") coalition of 50+ organisations, with a rally at Arnarhóll. The call was a personal choice, not a legal strike or public holiday. | S5, S6 · high (plans); turnout not verified |

### How they did it
- **Ideas:** Women's work, paid and unpaid, holds up the economy. The frame was demonstration, not grievance.
- **Research and evidence:** The pay gap, expressed as a time of day, turned a statistic into a public ritual that anyone can read [S1 · medium].
- **Media and culture:** Organisers got radio, TV and newspapers to run stories on discrimination and low pay before the day [S1 · medium].
- **Street action:** A general stoppage, a central rally, and later walkouts timed to the pay gap.
- **Institutional pressure:** The 2025 coalition gave the government until 24 October 2025 to turn its demands into law [S5 · high]. Its demands covered:
  - pay transparency and revaluing women's jobs;
  - preschool places after parental leave;
  - training for judges and police on gender-based violence;
  - criminalising misogynist hate speech.

### What changed (numbers)
- Equal-rights legislation followed within a year (1976) [S1 · medium].
- Women in parliament rose from 3 (about 5%) in 1975 to 28 (44%) by 2015 [S2 · medium].
- Iceland ranked **1st of 148 economies** in the WEF Global Gender Gap Report 2025, with a score of 0.926 [S7 · medium].

### Limits and critiques
- **Progress is slow.** Women's Rights Association figures cited by Wikipedia say the 2016 walkout time implied only about 30 minutes of progress in 11 years [S2 · medium].
- **Problems persist.** The 2025 call cited rising reports of gender-based violence, a widening pay gap and unequal housework [S5 · low, organiser framing].
- **The legal workaround has costs.** Calling it a "day off" protected workers but kept the action outside labour law, so each woman bears the individual risk [S6 · high].

### Three lessons for CSP
1. **Make the ask joinable.** Name actions so anyone can join safely (a "day off", not a "strike"), and make the barrier to entry one decision.
2. **Turn your research into a ritual.** Publish an annual "CSP clock" or "data day" that converts one hard statistic (pay, safety, representation) into a time, a place and an action.
3. **Build a coalition and keep the calendar.** Fifty-plus unions, NGOs and student groups, returning on the same date for 50 years, turns an event into public memory.

### Sources
- **[S1]** Wikipedia, "1975 Icelandic women's strike", accessed 2026-10-24. It cites BBC News (Kirstie Brewer, 23 Oct 2015), The Guardian (18 Oct 2005) and the Swarthmore Global Nonviolent Action Database.
  https://en.wikipedia.org/wiki/1975_Icelandic_women%27s_strike
- **[S2]** Wikipedia, "Women in Iceland", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Women_in_Iceland
- **[S3]** Wikipedia, "Katrín Jakobsdóttir", accessed 2026-10-24. It cites The Guardian, 23 Oct 2023: "Iceland's first full-day women's strike in 48 years".
  https://en.wikipedia.org/wiki/Katr%C3%ADn_Jakobsd%C3%B3ttir
- **[S4]** Kvennaár 2025, English page. Page metadata is dated 2025-11-05, but the content was written before the 2025 strike; it refers to "last year" (2023, the only strike between 2018 and 2025 per Icelandic Wikipedia).
  https://kvennaar.is/english/
- **[S5]** Kvennaár, "Um Kvennaár" (organiser list: 55 distinct organisations, including ASÍ, BSRB, Stígamót, Samtökin '78 and UN Women Iceland), accessed 2026-10-24.
  https://kvennaar.is/um-kvennaar/
- **[S6]** Kvennaár, "Kvennaverkfall 2025", published 23 Oct 2025.
  https://kvennaar.is/kvennaverkfall-2025/
- **[S7]** Wikipedia, "Global Gender Gap Report" (2025 table), citing WEF GGGR 2025, accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Global_Gender_Gap_Report
- Supporting: Icelandic Wikipedia, "Kvennafrídagurinn". It lists strikes in 1975, 1985, 2005, 2010, 2016, 2018, 2023 and 2025.
  https://is.wikipedia.org/wiki/Kvennafr%C3%ADdagurinn

### Candidate images (Wikimedia Commons)
| File page | Licence | Author / credit | Notes |
|---|---|---|---|
| https://commons.wikimedia.org/wiki/File:Kvinnostrejk_i_Reykjavik_(5).jpg | CC BY 2.5 DK | Johannes Jansson/norden.org | 24 Oct 2005 anniversary strike, Austurvöllur. The file page notes the holder later moved to stricter terms, but CC licences are non-revocable. |
| https://commons.wikimedia.org/wiki/File:Kvinnostrejk_i_Reykjavik_(1).jpg | CC BY 2.5 DK | Magnus Fröderberg/norden.org | 2005 strike crowd with placards. |
| https://commons.wikimedia.org/wiki/File:Vigdis_Finnbogadottir_(1985).jpg | CC BY-SA 3.0 NL | Rob Croes for Anefo | President Vigdís, 1985. |
| https://commons.wikimedia.org/wiki/File:S%C3%8DS-6658.jpg | Public domain | Þorleifur Þorleifsson | 7 Jul 1915 procession celebrating women's suffrage. Useful for "long history". |

No 1975 or 2023 strike photos with a free licence were found in the Commons categories checked. For the hero image, ask Kvennaár or the Women's History Archives (Kvennasögusafn) for permission.

---

## Case 2. Ni Una Menos ("Not one [woman] less"), Argentina and Latin America, 2015–

**One-line summary:** A tweet-driven march against femicide in June 2015 grew into a continental movement. It pushed Argentina to count femicides officially, train every public official in gender issues, and legalise abortion.

### Context
Argentina had no official femicide statistics before 2015. The best national count was an NGO media tally (La Casa del Encuentro's observatory) [S1 · medium]. The slogan descends from a 1995 phrase by Mexican poet Susana Chávez, protesting the killings of women in Ciudad Juárez; Chávez was herself murdered in 2011 [S1 · medium].

A collective of journalists, writers, artists and academics named a 26 March 2015 reading marathon "Ni una menos". The murder of 14-year-old Chiara Páez in May 2015 then triggered the first mass march [S1 · medium].

### Timeline
| Date | Event | Source |
|---|---|---|
| 26 Mar 2015 | Reading marathon against femicide in Buenos Aires. The name "Ni una menos" is coined for it (proposed by Vanina Escales). | S1 · medium |
| 3 Jun 2015 | First march, centred on the Congress plaza, with marches in about 80 cities. Crowd estimates for Buenos Aires vary: about 200,000 (English Wikipedia) to 300,000+ (Spanish Wikipedia). | S1, S2 · low (estimates vary) |
| 2015 | The Supreme Court's Women's Office starts the national judicial femicide registry (RNFJA). | S3 · high |
| 19 Oct 2016 | First national women's strike: a 1-hour stoppage (13:00–14:00), "Black Wednesday", after the murder of 16-year-old Lucía Pérez. Ni Una Menos and about 50 organisations take part, and it spreads to other countries. | S1 · medium |
| 8 Mar 2017 | First International Women's Strike, co-convened across countries. | S1 · medium |
| 4 Jun–8 Aug 2018 | A march of about 150,000 under the banner "Without legal abortion there is no Ni Una Menos". The abortion bill fails in the Senate on 8 Aug 2018. | S1 · medium; S8 · high |
| 19 Dec 2018 / 10 Jan 2019 | Ley Micaela (Law 27.499) passes the Chamber of Deputies 171–1 and is promulgated. It makes gender and gender-based violence training mandatory for all staff of all three branches of government. | S6 · medium |
| 30 Dec 2020 | Law 27.610 legalises abortion on request up to 14 weeks. It was published 15 Jan 2021. | S4 · high |
| 10 Dec 2023 – 6 Jun 2024 | The new government dissolves the Ministry of Women, Genders and Diversity (Decree 8/2023). Its successor under-secretariat is itself closed in June 2024. The 3 Jun 2024 march protests the cuts. | S7 · medium; S1 · medium |

### How they did it
- **Ideas:** Femicide named as political violence, with one unifying slogan. Later the frame widened: activists tied abortion to gender violence and social justice, since poor women suffer most from illegal abortion [S5 · high].
- **Research and evidence:** The movement demanded official counts, and the courts' registry now publishes yearly data. The 2017 report counted:
  - 251 direct victims;
  - 1.1 per 100,000 women;
  - 59% killed by a partner or ex-partner;
  - 71% killed in the victim's own home [S3b · high].
- **Media and culture:** Hashtags and artists' illustrations; a cartoon by Liniers became an early icon of the movement [S2 · medium].
- **Street action:** Annual 3 June marches; strikes (2016 onwards); the green scarf of the abortion campaign [S2 · medium; S8 · high].
- **Institutional pressure:** Laws named after victims (Ley Micaela) and legislative lobbying through the 2018 and 2020 debates.

### What changed (numbers)
- An official, court-run femicide registry has run since 2015 [S3 · high].
- **Law 27.499 (Ley Micaela, 2019)** mandates gender training across the state [S6 · medium].
- **Law 27.610 (2020)** gave legal abortion up to 14 weeks [S4 · high].
- From Dec 2019 to Dec 2022, the women's ministry reported:
  - over 357,000 calls handled on the 144 gender-violence line;
  - about 15,000 officials trained under Ley Micaela [S7 · medium, ministry's own figures].
- The movement spread to Uruguay, Mexico, Peru, Bolivia, Colombia and Venezuela, and on to Spain and Italy [S1 · medium].

### Limits and critiques
- **Institutional gains proved reversible:**
  - the women's ministry was dissolved in December 2023 [S7 · medium];
  - independent analysts had already flagged that it under-spent its budget in 2021 [S7 · medium].
- **Mission drift.** Some argue the movement drifted from femicide to abortion, which triggered conservative backlash, for example in Peru [S2 · low-medium].
- **Source quality.** The English Wikipedia article carries a January 2026 warning that parts are AI-generated. Rely on the Spanish article and the primary sources.

### Three lessons for CSP
1. **Count, and make the state count.** A movement demand for official data (the registry) outlasted changes of government. CSP's research arm should publish its own tracker *and* campaign for an official one.
2. **One slogan, many issues.** A single, memorable frame built an organisational base that could later be pointed at new goals [S5].
3. **Protect gains in law, not only in institutions.** Ministries can be abolished by decree. Laws and court-run registries proved more durable.

### Sources
- **[S1]** Spanish Wikipedia, "Ni una menos", accessed 2026-10-24.
  https://es.wikipedia.org/wiki/Ni_una_menos
- **[S2]** English Wikipedia, "Ni una menos" (flagged as partly AI-generated, Jan 2026), accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Ni_una_menos
- **[S3]** Supreme Court of Argentina, Women's Office: Registro Nacional de Femicidios de la Justicia Argentina (registry since 2015), accessed 2026-10-24.
  https://www.csjn.gov.ar/omrecopilacion/omfemicidio/homefemicidio.html
- **[S3b]** CSJN, "Resumen del Informe del Registro de Femicidios… Año 2017" (PDF).
  https://www.csjn.gov.ar/omrecopilacion/docs/resumen2017fem.pdf
- **[S4]** Argentina.gob.ar, Law 27.610 (sanctioned 30 Dec 2020; published 15 Jan 2021).
  https://www.argentina.gob.ar/normativa/nacional/ley-27610-346231/texto
- **[S5]** Daby, M. and Moseley, M. W., "Feminist Mobilization and the Abortion Debate in Latin America: Lessons from Argentina", *Politics & Gender* 18(2), June 2022 (online 9 Feb 2021).
  https://www.cambridge.org/core/journals/politics-and-gender/article/abs/feminist-mobilization-and-the-abortion-debate-in-latin-america-lessons-from-argentina/B803CB168E8DF6798CC1CC0089072A7D
- **[S6]** Spanish Wikipedia, "Ley Micaela", accessed 2026-10-24.
  https://es.wikipedia.org/wiki/Ley_Micaela
- **[S7]** Spanish Wikipedia, "Ministerio de las Mujeres, Géneros y Diversidad", accessed 2026-10-24.
  https://es.wikipedia.org/wiki/Ministerio_de_las_Mujeres,_G%C3%A9neros_y_Diversidad
- **[S8]** Amnesty International, "Why we continue to march towards legal abortion in Argentina", 8 Aug 2019.
  https://www.amnesty.org/en/latest/impact/2019/08/the-green-wave/

### Candidate images
| File page | Licence | Author | Notes |
|---|---|---|---|
| https://commons.wikimedia.org/wiki/File:Marcha_Ni_una_menos_3.JPG | CC BY-SA 4.0 | Jaluj | First march, Buenos Aires, 3 Jun 2015. |
| https://commons.wikimedia.org/wiki/File:-NiUnaMenos_(IV)_(19183339619).jpg | CC BY 2.0 | Rodrigo Paredes | 3 Jun 2015. High resolution. |
| https://commons.wikimedia.org/wiki/File:Senadoras_por_NiUnaMenos.jpg | Public domain | Senado de la Nación Argentina | Women senators supporting the 19 Oct 2016 action. Good for the "institutional" panel. |
| https://commons.wikimedia.org/wiki/File:Panoramica_Ni_una_menos_2018.jpg | CC BY 4.0 | Prensa Obrera | Aerial view, 4 Jun 2018. Low resolution (640×480). |

---

## Case 3. Las Tesis, "Un violador en tu camino" (A Rapist in Your Path), Chile, 2019–

**One-line summary:** Four Valparaíso artists turned feminist theory into a 15-minute street performance. Within a month it had been staged in 200+ cities on every continent except Antarctica.

### Context
LASTESIS is a feminist performance collective formed in 2018 in Valparaíso. Its name refers to staging the *theses* of feminist thinkers. Its first piece drew on Silvia Federici and its second on anthropologist Rita Segato's work on rape [S2 · medium].

The piece debuted during Chile's October 2019 social uprising. Chile's National Human Rights Institute had then documented 194 cases of sexual violence by state agents in the protest context [S3 · high]. Wikipedia lists three members; Front Line Defenders refers to the investigation of four members [S2, S6].

### Timeline
| Date | Event | Source |
|---|---|---|
| 2018 | LASTESIS forms in Valparaíso. | S2 · medium |
| 20 Nov 2019 | First public performance, in front of a police station in Valparaíso. | S1, S2 · medium |
| 25 Nov 2019 | Performed in Santiago, including outside the Supreme Court, on the International Day for the Elimination of Violence against Women. | S4 · high |
| By 20 Dec 2019 | Staged in 200+ cities on every continent except Antarctica, and in 40+ countries, tracked on a crowd-sourced OpenStreetMap map backed by GeoChicas. | S3 · high |
| Dec 2019 | Women MPs perform it inside Turkey's parliament after police detain performers in Istanbul. | S1 · medium |
| 4 Mar 2020 | Both chambers of Chile's Congress approve gender parity for electing the Constitutional Convention. | S5 · high |
| 22 Sep 2020 | Named in the TIME100. The TIME tribute (by Nadya Tolokonnikova) says the piece had been performed in 52+ countries. | S4 · high |
| Jun 2020 – 6 Jan 2021 | Police file complaints after a video made with Pussy Riot. The case against the collective is dismissed. Front Line Defenders gives the dismissal date as 6 Jan 2021; Wikipedia gives 4 Jan. | S6 · high; S2 · medium |
| 4 Sep 2022 | The parity convention's draft constitution is rejected by 62% to 38%. | S7 · medium |

### How they did it
- **Ideas:** Rape culture as a structural, state-backed system, not individual blame. The collective explicitly translates feminist theory into accessible form [S2].
- **Research and evidence:** Built on Segato's research. The collective also cited Chilean data that only about 8% of resolved sexual-assault cases in 2018 ended in a conviction [S2 · medium].
- **Media and culture:** A short, simple choreography and chant, blindfolds and "party" clothes, all designed to be filmed and copied [S1 · medium].
- **Street action:** Open replication; anyone could restage it.
- **Institutional pressure:** Indirect. Scholars and Wikipedia link the performance's momentum to the gender-parity reform [S2 · medium; S5 · high for the reform itself].

### What changed (numbers)
- 200+ cities by 20 Dec 2019 [S3 · high], and 400+ locations in 50+ countries by 2021 per GeoChicas [S1 · medium].
- **World-first gender parity** rule for electing a constitutional body, approved 4 Mar 2020 [S5 · high].
- Awards: the TIME100 (2020) [S4 · high]; Chile's Jaime Castillo Velasco human rights award and the Design Museum's Design of the Year (digital category) (2020) [S2 · medium].

### Limits and critiques
- **Virality is not legislation.** The parity convention's draft constitution was rejected in 2022 [S7 · medium].
- **Legal harassment** of the artists [S6 · high].
- **Translation loses specificity.** The English version drops the verse critiquing Chile's police anthem [S1 · medium].

### Three lessons for CSP
1. **Translate ideas into formats people can perform.** Turn one piece of CSP research into a 5–15 minute, copyable action: chant, choreography, poster or reel.
2. **Design for replication, and track it.** Publish an open kit (steps, audio, safety advice, licence) and a public map of where it has been done, as GeoChicas did.
3. **Joy is a tactic, and so is legal readiness.** LASTESIS frames collective celebration as part of resistance [S2]. Pair it with a legal-support plan for artists and organisers.

### Sources
- **[S1]** Wikipedia, "A Rapist in Your Path", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/A_Rapist_in_Your_Path
- **[S2]** Wikipedia, "LasTesis", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/LasTesis
- **[S3]** Al Jazeera (Sandra Cuffe), "Chile's 'A rapist in your path' chant hits 200 cities: Map", 20 Dec 2019.
  https://www.aljazeera.com/news/2019/12/20/chiles-a-rapist-in-your-path-chant-hits-200-cities-map
- **[S4]** TIME, "LASTESIS: The 100 Most Influential People of 2020", 22 Sep 2020.
  https://time.com/collection/100-most-influential-people-2020/5888485/lastesis/
- **[S5]** Oxford Human Rights Hub (Javiera Arce-Riffo), "Gender Parity in the Chilean Constitutional Convention", 4 Apr 2020.
  https://ohrh.law.ox.ac.uk/gender-parity-in-the-chilean-constitutional-convention-what-does-it-mean-for-chilean-democracy/
- **[S6]** Front Line Defenders, "LasTesis Collective" (case dismissed 6 Jan 2021).
  https://www.frontlinedefenders.org/en/organization/lastesis-collective
- **[S7]** Wikipedia, "Constitutional Convention (Chile)", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Constitutional_Convention_(Chile)

### Candidate images
| File page | Licence | Author | Notes |
|---|---|---|---|
| https://commons.wikimedia.org/wiki/File:El_violador_eres_t%C3%BA,_Santiago_20191219_36.jpg | CC BY-SA 4.0 | Carlos Figueroa Rojas | Santiago, 19 Dec 2019. 6000×4000. |
| https://commons.wikimedia.org/wiki/File:LASTESIS.jpg | CC BY-SA 4.0 | Sibila.epistolar | The collective, 2020. |
| https://commons.wikimedia.org/wiki/File:Un_violador_en_tu_camino_Lima,_Per%C3%BA.png | CC BY 3.0 | Wayka | Lima, 2 Dec 2019. Shows the spread of the piece. |
| https://commons.wikimedia.org/wiki/File:Un_violador_en_tu_camino,_performance_Oaxaca_2019.jpg | CC BY-SA 4.0 | Katmacktruth | Oaxaca, Mexico, 29 Nov 2019. |

Excluded: the Concepción 8M 2020 image, because it features a minor.

---

## Case 4. #MeToo: from Tarana Burke's 2006 youth work to a global reckoning (2017–)

**One-line summary:** A phrase that a Black community organiser began using in 2006 became, in October 2017, a hashtag used millions of times in at least 85 countries. It made the scale of sexual harassment undeniable, but turning that into lasting justice has been uneven.

### Context
Tarana Burke founded "me too" in 2006 to connect survivors, especially young women of colour, with support and healing resources [S1 · high; S2 · medium]. In October 2017, after investigative reports on Harvey Weinstein, actor Alyssa Milano invited people to reply "me too" [S2 · medium].

### Timeline
| Date | Event | Source |
|---|---|---|
| 2006 | Tarana Burke founds me too. | S1 · high |
| Early Oct 2017 | Investigative reports expose allegations against Harvey Weinstein. | S2 · medium |
| 15 Oct 2017 | Milano's tweet. She reported 32,000 replies in 24 hours. | S2 · medium; S4 · high |
| 16–17 Oct 2017 | On Facebook: 12 million+ posts, comments and reactions by 4.7 million people in under 24 hours. 45% of US users had friends who posted. | S3 · high |
| 6 Dec 2017 | TIME names "The Silence Breakers" Person of the Year. The hashtag had been used in at least 85 countries. | S4 · high |
| 30 Sep 2018 | #MeToo used 19 million+ times on Twitter in under a year, averaging 55,319 a day. | S5 · high |
| 26 Sep 2018 | Actor Tanushree Dutta's interview catalyses #MeToo in India. | S6 · medium |
| 2020 → 25 Apr 2024 → 11 Jun 2025 | Weinstein is convicted in New York (2020). The convictions are overturned by the NY Court of Appeals (2024). At the 2025 retrial he is found guilty on one count, not guilty on another, and the jury deadlocks on a third. | S7 · medium; S8 · high |

### How they did it
- **Ideas:** Empathy and solidarity among survivors ("you are not alone"), then accountability for powerful men.
- **Research and evidence:** Investigative journalism. Testimony at scale also became data: Pew coded 19 million tweets [S5].
- **Media and culture:** A two-word, replicable act of disclosure, amplified by celebrities [S2, S4].
- **Street action:** Secondary; the movement fed into Women's Marches (2018 images below).
- **Institutional pressure:** Workplace policies, campaigns against forced arbitration and non-disclosure agreements, and criminal cases [S2 · medium].

### What changed (numbers)
- 19 million+ uses on Twitter in under a year [S5 · high], and 12 million+ Facebook interactions in the first 24 hours [S3 · high].
- 44% of members of the US Congress mentioned sexual misconduct in official Facebook posts in late 2017 [S5 · high].
- The movement spread to India (2018) and beyond [S6 · medium].
- Riot Games agreed to pay $100 million to settle a gender discrimination class action (2021) [S2 · medium].

### Limits and critiques
- **Erasure.** Burke publicly criticised the erasure of Black women's foundational work, while welcoming the wider movement [S2 · medium].
- **Celebrity and English bias** [S5 · high]:
  - 15% of tweets in peak periods were about celebrities or entertainment;
  - 71% were in English.
- **Legal fragility:**
  - a landmark New York conviction was overturned in 2024 [S7 · medium];
  - the rape charge in the case was dropped in June 2026 after two retrials ended without verdicts [S7 · medium].

### Three lessons for CSP
1. **Credit the originators.** Always name and resource the grassroots founders, especially women of colour and Dalit, Adivasi and Bahujan organisers in an Indian context.
2. **Treat testimony as research, with consent.** Aggregate stories into anonymised data and policy demands, with trauma-informed safeguards and legal advice before publishing allegations.
3. **Build the "after the hashtag" infrastructure.** That means survivor support, legal pathways and institutional asks. Public attention peaks fast; accountability takes years and can be reversed.

### Sources
- **[S1]** me too. Movement, "History & Inception", accessed 2026-10-24.
  https://metoomvmt.org/get-to-know-us/history-inception/
- **[S2]** Wikipedia, "MeToo movement", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/MeToo_movement
- **[S3]** CBS News/AP, "More than 12M 'Me Too' Facebook posts, comments, reactions in 24 hours", 17 Oct 2017.
  https://www.cbsnews.com/news/metoo-more-than-12-million-facebook-posts-comments-reactions-24-hours/
- **[S4]** TIME (Edward Felsenthal), "The Silence Breakers", 6 Dec 2017.
  https://time.com/time-person-of-the-year-2017-silence-breakers/
- **[S5]** Pew Research Center (Monica Anderson and Skye Toor), "How social media users have discussed sexual harassment since #MeToo went viral", 11 Oct 2018.
  https://www.pewresearch.org/short-reads/2018/10/11/how-social-media-users-have-discussed-sexual-harassment-since-metoo-went-viral/
- **[S6]** Wikipedia, "MeToo movement in India", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/MeToo_movement_in_India
- **[S7]** Wikipedia, "Harvey Weinstein sexual abuse cases", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Harvey_Weinstein_sexual_abuse_cases
- **[S8]** ABC News, "Split verdict reached in Harvey Weinstein sex crimes retrial", 11 Jun 2025.
  https://abcnews.com/US/harvey-weinstein-verdict-sex-crimes-retrial/story?id=122432273

### Candidate images
| File page | Licence | Author | Notes |
|---|---|---|---|
| https://commons.wikimedia.org/wiki/File:Can_You_Hear_Me_Now%3F_-MeToo_(39787332552).jpg | CC BY 2.0 | Alec Perkins | Placard at the 2018 NYC Women's March. |
| https://commons.wikimedia.org/wiki/File:Tarana_Burke_at_BGSU.jpg | CC BY-SA 4.0 | Mbrickn | Tarana Burke speaking, 30 Apr 2019. |
| https://commons.wikimedia.org/wiki/File:MeToo_discussion_at_Dhaka_Lit_Fest_2017.jpg | CC BY-SA 4.0 | Nurunnaby Chowdhury (Hasive) | South Asia angle, Nov 2017. |
| https://commons.wikimedia.org/wiki/File:Me-too_sign.jpg | CC0 | surdumihail | Simple sign. No attribution legally required, but credit anyway. |

---

## Case 5. Repeal the 8th, Ireland (2012–2019)

**One-line summary:** After decades of a near-total constitutional ban, Ireland combined a randomly selected Citizens' Assembly with a grassroots, coalition-led campaign. In May 2018, 66.4% voted to repeal the Eighth Amendment.

### Context
The Eighth Amendment, adopted in 1983, gave "the unborn" an equal right to life with the mother [S1 · medium].

Several events built pressure for change [S1 · medium]:
- the 1992 X case;
- the 2010 European Court of Human Rights judgment in *A, B and C v Ireland*;
- the 2012 death of Savita Halappanavar after miscarriage, when she was refused an abortion.

The pressure produced only the narrow Protection of Life During Pregnancy Act 2013 [S1 · medium].

### Timeline
| Date | Event | Source |
|---|---|---|
| 17 Nov 2012 | Mass rally in Dublin after Savita Halappanavar's death. | Commons file description (image below) · medium |
| 15 Oct 2016 – Apr 2017 | The Citizens' Assembly meets. It has 100 citizen members chosen at random (the procurement text refers to 99 plus substitutes), with no politicians, chaired by Supreme Court judge Mary Laffoy. | S3 · high; S1 · medium |
| 29 Jun 2017 | The Assembly reports. 87% say Article 40.3.3° should not be retained in full, and 64% recommend that termination without restriction as to reasons should be lawful. Over 12,000 public submissions were received. | S2 · high |
| 9–27 Mar 2018 | The referendum bill is introduced and passes the Oireachtas. | S1 · medium |
| 25 May 2018 | Referendum: Yes 1,429,981 (66.40%), No 723,632 (33.60%). Turnout was 64.13% (2,159,655 votes), the highest for any Irish constitutional referendum to that date. | S1 · medium-high; majority cross-checked with S4 |
| 18 Sep 2018 | President Higgins signs the Thirty-sixth Amendment. The majority was 706,349 votes. | S4 · high |
| 20 Dec 2018 → Jan 2019 | The Health (Regulation of Termination of Pregnancy) Act is signed (Dáil 90–15, Seanad 27–5). Services begin in the new year. | S1 · medium; S4 · high |
| 2024 | 10,852 terminations are notified under the 2018 Act (10,033 in 2023). | S5 · high; S6 · medium |

### How they did it
- **Ideas:** Trust women; abortion as healthcare. Campaign leaders framed the result as a grassroots, people-powered win [S1 · medium].
- **Research and evidence:** The Assembly's expert advisory group, 12,000+ submissions and 17 advocacy groups heard [S2 · high]. Results by region ranged from 57.5% Yes (Connacht-Ulster) to 75.5% (Dublin) [S1 · medium].
- **Media and culture:** The #HomeToVote diaspora campaign; personal testimony; Savita's parents called for a Yes vote [S1 · medium].
- **Street action:** Canvassing, marches and Strike 4 Repeal (inspired by Poland's Black Protest) [Case 10, S1].
- **Institutional pressure:** Together for Yes [S1 · medium]:
  - led by the Abortion Rights Campaign, the Coalition to Repeal the Eighth and the National Women's Council;
  - joined by the ICCL, IFPA, the Union of Students in Ireland, SIPTU and Inclusion Ireland, among others.

### What changed (numbers)
- A constitutional repeal and a new law. 10,852 notified terminations in Ireland in 2024 [S5 · high].
- Every region voted Yes; Donegal was the only constituency to vote No (51.87%) [S1 · medium].

### Limits and critiques
- **Access remains unequal.** Wikipedia's synthesis of NGO research reports [S6 · medium]:
  - only about 1 in 10 GPs contracted to provide abortion care;
  - providers concentrated in cities;
  - a requirement for a PPS number that excludes some migrants, students and undocumented people.
- **A third of voters voted No**, and later fights moved to safe-access zones and implementation [S1, S6 · medium].
- **Deliberation is costly and slow.** The Assembly cost about €1.5 million to June 2018 [S3 · high].

### Three lessons for CSP
1. **Deliberation builds legitimacy.** Run a CSP "People's Assembly" or citizens' jury on one question. Use random selection, expert briefings and published submissions, then take the report to legislators.
2. **Stories and coalitions win votes.** Pair personal testimony with an umbrella coalition of mainstream organisations (unions, students, disability and civil-liberties groups) and a diaspora strategy.
3. **Winning the vote is half the job.** Publish an annual "implementation scorecard" from official data (here, the yearly notifications report) and map access gaps.

### Sources
- **[S1]** Wikipedia, "Thirty-sixth Amendment of the Constitution of Ireland" (infobox sourced to refcom.ie), accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Thirty-sixth_Amendment_of_the_Constitution_of_Ireland
- **[S2]** The Citizens' Assembly, *First Report and Recommendations: The Eighth Amendment of the Constitution*, 29 Jun 2017 (PDF).
  https://citizensassembly.ie/wp-content/uploads/2023/02/FirstReport_EIGHTAMENDMENT.pdf
- **[S3]** The Citizens' Assembly, "2016–2018 Citizens' Assembly", accessed 2026-10-24.
  https://citizensassembly.ie/previous-assemblies/2016-2018-citizens-assembly/
- **[S4]** RTÉ News, "Eighth Amendment repealed after bill signed into law", 18 Sep 2018.
  https://www.rte.ie/news/ireland/2018/0918/994438-cabinet/
- **[S5]** Department of Health (Ireland), Annual Report on notifications under the Health (Regulation of Termination of Pregnancy) Act 2018, covering 2024 (published Jul 2025 per Wikipedia).
  https://assets.gov.ie/static/documents/Annual_Report_on_the_Health_Regulation_of_Termination_of_Pregnancy_Act_2018-_2024.pdf
- **[S6]** Wikipedia, "Abortion in the Republic of Ireland", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Abortion_in_the_Republic_of_Ireland

### Candidate images
| File page | Licence | Author | Notes |
|---|---|---|---|
| https://commons.wikimedia.org/wiki/File:REPEAL_YES05.jpg | CC BY-SA 4.0 | Katenolan1979 | Dublin Castle after the result, 26 May 2018. |
| https://commons.wikimedia.org/wiki/File:Abortion_Referendum_Campaign_Posters_in_Dublin,_May_2018_(40281031690).jpg | CC BY 2.0 | Sonse | Campaign posters, May 2018. |
| https://commons.wikimedia.org/wiki/File:Dublin_Savita_Halappanavar_Rally_56.jpg | CC BY-SA 2.0 | William Murphy | Rally, 17 Nov 2012. |
| https://commons.wikimedia.org/wiki/File:Rock_of_Cashel_with_Tipp_for_Choice_Repeal_banner.jpg | CC BY-SA 4.0 | TippForChoice | Rural and local organising, 2017. |

---

## Case 6. Northern Ireland: decriminalising abortion (2015–2020)

**One-line summary:** Northern Ireland's 1861-era ban fell after years of litigation, a UN inquiry and one Westminster amendment. Activists turned human-rights findings into law while the devolved government was suspended.

### Context
The Abortion Act 1967 never applied in Northern Ireland, so the Offences Against the Person Act 1861 still criminalised almost all abortions [S2 · medium]. Only 12 terminations were recorded in NI in 2017–18, 8 in 2018–19 and 22 in 2019–20 [S2 · medium]. The Northern Ireland Executive was suspended from 2017 to 2020 [S2 · medium].

Alliance for Choice is NI's abortion-rights campaign. It now runs abortion-access information, doula support and safe-access-zone information [S4 · high].

### Timeline
| Date | Event | Source |
|---|---|---|
| Nov 2015 → Jun 2017 | Belfast High Court declares the law incompatible with Article 8 ECHR (fatal foetal abnormality, rape and incest). The Court of Appeal quashes the declaration in 2017. | S2 · medium |
| 23 Feb 2018 | The UN CEDAW Committee publishes its inquiry report on the UK (CEDAW/C/OP.8/GBR/1), recommending liberalisation of NI law. | S2 · medium |
| 7 Jun 2018 | UK Supreme Court, *[2018] UKSC 27*. A majority finds the law incompatible with Article 8 in cases of rape, incest and fatal foetal abnormality. A different majority finds the NI Human Rights Commission lacked standing, so no formal declaration is made. | S1 · high |
| 24 Jul 2019 | The Northern Ireland (Executive Formation etc) Act 2019 is enacted with Stella Creasy MP's amendment. If no Executive is formed by 21 Oct 2019, the Secretary of State must implement the CEDAW recommendations. | S2, S3 · medium |
| 3 Oct 2019 | Belfast High Court (Keegan J) rules the old law incompatible with human-rights law. No formal declaration is made, given the coming Act. | S3 · medium |
| 21–22 Oct 2019 | No Executive is formed by the deadline, and abortion is decriminalised. | S3 · medium |
| 31 Mar 2020 | The Abortion (NI) Regulations 2020 take effect. They are replaced by the No. 2 Regulations on 14 May 2020. | S2 · medium |
| By 2024 | Services are available in all five health trusts. Alliance for Choice lists safe access zones at eight NI healthcare sites. | S2 · medium; S4 · high |

### How they did it
- **Ideas:** Abortion as a human-rights and equality issue; "Legalise, not criminalise" and "Extend the 1967 Act" (placards in 2012 Belfast photos, below).
- **Research and evidence:** Strategic litigation and the UN CEDAW inquiry produced authoritative findings of rights violations [S1, S2].
- **Media and culture:** Marches and contingents in Belfast (2012 images); testimony from women who travelled to England.
- **Street action:** Long-running marches; today, practical support (doulas, clinic information) [S4 · high].
- **Institutional pressure:** Courts; the UN; lobbying MPs at Westminster during the Stormont suspension, producing a single decisive amendment [S2, S3].

### What changed (numbers)
- From about 8–22 recorded terminations a year before 2020 [S2 · medium] to services in all five trusts by 2024 [S2 · medium].
- Decriminalisation in October 2019, and a regulated legal framework from March 2020 [S2, S3 · medium].

### Limits and critiques
- **Democratic legitimacy was contested.** The DUP said the change undermined devolution [S3 · medium]. The restored Assembly voted 46–40 against the provision covering non-fatal disabilities, and a bill to remove that ground was defeated 45–43 in Dec 2021 [S2 · medium].
- **Services lagged behind the law.** Wikipedia, citing a Guardian report of 4 May 2022, records that services were close to non-existent two years after legalisation [S2 · medium].
- **The change was externally driven.** The legal change came from Westminster rather than a local vote, which leaves the reform politically exposed.

### Three lessons for CSP
1. **International human-rights machinery is a research tool.** Treaty-body inquiries (CEDAW), UN reporting and strategic litigation create evidence that legislators cannot ignore. CSP should file shadow reports.
2. **Find the lever where power actually sits.** Here it was one well-drafted amendment in another parliament. Map decision-makers before choosing tactics.
3. **After the law, organise for access.** Track commissioning, clinics and safe-access zones, and keep services information public (as Alliance for Choice does).

### Sources
- **[S1]** UK Supreme Court, *In the matter of an application by the NI Human Rights Commission for Judicial Review* [2018] UKSC 27, judgment of 7 Jun 2018 (PDF).
  https://supremecourt.uk/uploads/uksc_2017_0131_judgment_a9f7324d56.pdf
- **[S2]** Wikipedia, "Abortion in the United Kingdom" (NI sections), accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Abortion_in_the_United_Kingdom
- **[S3]** Wikipedia, "Northern Ireland (Executive Formation etc) Act 2019", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Northern_Ireland_(Executive_Formation_etc)_Act_2019
- **[S4]** Alliance for Choice homepage, accessed 2026-10-24.
  https://www.alliance4choice.com/

Note: the CEDAW inquiry document (symbol CEDAW/C/OP.8/GBR/1) could not be opened in full; only its UN document page loaded. Its contents are cited via [S2].

### Candidate images
| File page | Licence | Author | Notes |
|---|---|---|---|
| https://commons.wikimedia.org/wiki/File:Anti-Austerity_March,_Belfast,_October_2012_(028).JPG | CC BY-SA 3.0 (or GFDL) | Ardfern | Pro-choice contingent, Royal Avenue, Belfast, 20 Oct 2012. Banner reads "Our Bodies – Our Lives – Our Right To Decide"; placards say "Extend the 1967 Act". Verified visually and on the file page. Identifiable people. |
| https://commons.wikimedia.org/wiki/File:Anti-Austerity_March,_Belfast,_October_2012_(027).JPG | CC BY-SA 3.0 | Ardfern | Same march; placards include "Legalise not criminalise" and "I'm pro-choice". Identifiable people. |
| https://commons.wikimedia.org/wiki/File:Official_portrait_of_Stella_Creasy.jpg | CC BY 3.0 | Chris McAndrew | MP whose amendment changed the law. Commons flags personality rights. |

---

## Case 7. Reclaim These Streets and the Sarah Everard vigil, London (2021–2024)

**One-line summary:** When police blocked a vigil for a woman murdered by a serving officer, four organisers took the Met to court and won. The case became a precedent for the right to protest and fed into wider accountability for police misogyny.

### Context
On the evening of 3 March 2021, Sarah Everard (33) was kidnapped in south London by off-duty Metropolitan Police officer Wayne Couzens, who raped and murdered her [S2 · medium].

The group Reclaim These Streets (RTS) was founded by Jessica Leigh, Anna Birley, Henna Shah and Jamie Klingler. It planned vigils for 13 March. The Met warned that, under COVID rules, organisers risked fixed-penalty notices [S1 · medium].

### Timeline
| Date | Event | Source |
|---|---|---|
| 3 Mar 2021 | Sarah Everard kidnapped and murdered. | S2 · medium |
| 12–13 Mar 2021 | RTS loses an urgent court bid and cancels the vigil. Crowds gather at Clapham Common anyway; police make four arrests. Vigils go ahead in other UK cities. | S1, S2 · medium |
| Mar 2021 | Money raised in Sarah Everard's memory (£525,000 per a Guardian headline cited by Wikipedia) is directed to grassroots charities. | S2 · medium |
| 30 Sep 2021 | Couzens receives a whole-life order. | S2 · medium |
| 11 Mar 2022 | High Court (Warby LJ, Holgate J) rules six pre-vigil Met decisions unlawful. The Met failed to consider whether attending was a reasonable excuse given the organisers' Article 10 and 11 rights. | S3 · high |
| Apr 2022 | The Met is refused permission to appeal. The Police, Crime, Sentencing and Courts Act 2022, criticised for restricting protest, passes Parliament on 26 Apr 2022. | S1, S6 · medium |
| 20–21 Mar 2023 | The Casey Review finds the Met institutionally racist, misogynistic and homophobic. | S5 · medium |
| 29 Feb 2024 | Angiolini Inquiry Part 1 reports and makes 16 recommendations. It concludes: "Couzens should never have been a police officer." | S4 · high |

### How they did it
- **Ideas:** Women's right to public space and the right to protest. The group's stated aim was to use law, education and community action so that women no longer need to message friends to say they got home safely [S1 · medium].
- **Research and evidence:** The legal case built a documentary record of police decision-making [S3].
- **Media and culture:** The vigil as a moment of national grief; flowers, candles and memorial art (images below).
- **Street action:** The vigil, which was then cancelled by organisers, and a crowd that gathered regardless [S1, S2].
- **Institutional pressure:** Judicial review [S3]. The case fed a wider accountability wave (Casey, Angiolini) [S4, S5].

### What changed (numbers)
- Six Met decisions declared unlawful, setting a precedent on protest rights [S3 · high].
- A public inquiry with 16 recommendations [S4 · high; S2 · medium].
- A national police inspectorate report urged that violence against women be prioritised like terrorism (Sept 2021; Wikipedia citing Sky News) [S2 · medium].

### Limits and critiques
- **Liberal vs radical tactics.** A gal-dem opinion piece (15 Mar 2021) criticised RTS for cancelling instead of defying police, and for framing a vigil rather than a protest. It contrasted RTS with Sisters Uncut [S1 · medium].
- **Government response.** The state's answer included more policing powers and CCTV funding, which critics saw as the wrong response to a crime by a police officer [S2, S6 · medium].
- **Organisational fragility.** On 2026-10-24, reclaimthesestreets.com redirected to a HugeDomains "domain for sale" page [S7 · high, observed].

### Three lessons for CSP
1. **Litigate to defend the space for action.** Build a relationship with human-rights lawyers before you need them, and budget for crowdfunded legal action.
2. **Pair grief with demands and keep the infrastructure.** Own domains and accounts in the organisation's name and archive campaigns. Memorials are powerful, but the ask must be concrete.
3. **Offer an alternative to "more policing".** When the state answers with surveillance, CSP should publish its own evidence-based safety agenda (lighting, transport, prevention, accountability). Pinjra Tod (case 9) shows how.

### Sources
- **[S1]** Wikipedia, "Reclaim These Streets", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Reclaim_These_Streets
- **[S2]** Wikipedia, "Murder of Sarah Everard", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Murder_of_Sarah_Everard
- **[S3]** Law Gazette, "Police acted unlawfully over Everard vigil, court rules", 11 Mar 2022. It covers *Leigh & Ors v Commissioner of Police of the Metropolis* [2022] EWHC 527 (Admin).
  https://www.lawgazette.co.uk/news/police-acted-unlawfully-over-everard-vigil-court-rules/5111836.article
- **[S4]** *The Angiolini Inquiry – Part 1 Report*, ordered printed 29 Feb 2024 (PDF).
  https://iipcv-prod.s3.eu-west-2.amazonaws.com/E02740018_Angiolini-Inquiry.pdf
- **[S5]** Wikipedia, "Louise Casey, Baroness Casey of Blackstock" (Casey Review, Mar 2023), accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Louise_Casey,_Baroness_Casey_of_Blackstock
- **[S6]** Wikipedia, "Police, Crime, Sentencing and Courts Act 2022", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Police,_Crime,_Sentencing_and_Courts_Act_2022
- **[S7]** Observed redirect: https://reclaimthesestreets.com/ → hugedomains.com domain-profile page (checked 2026-10-24).

### Candidate images
| File page | Licence | Author | Notes |
|---|---|---|---|
| https://commons.wikimedia.org/wiki/File:Flowers_at_Sarah_Everard_Vigil_in_Sheffield.jpg | CC BY 2.0 | Tim Dennell | Vigil in Sheffield, 13 Mar 2021. |
| https://commons.wikimedia.org/wiki/File:Tree_of_Remembrance,_Trinity_Square,_Sutton_SM1.jpg | CC BY-SA 4.0 | Samia Tossio | Yarn-bombed memorial tree (24 Sep 2021). Good for the "public memory" theme. |
| https://commons.wikimedia.org/wiki/File:Vigilcandle3.jpg | CC BY-SA 4.0 | Melissa Highton | Vigil candle, 13 Mar 2021. Low resolution. |
| https://commons.wikimedia.org/wiki/File:Elish_Angiolini_2021.jpg | OGL v3 | UK Government | Inquiry chair. |

---

## Case 8. India: Delhi 2012 → the Justice Verma Committee → the Criminal Law (Amendment) Act 2013

**One-line summary:** Mass protests after the December 2012 gang rape and murder of Jyoti Singh in Delhi forced a month-long public consultation (about 80,000 submissions) and India's biggest sexual-offences law reform in decades. Key recommendations, including criminalising marital rape, are still unmet.

### Context
On 16 December 2012, a 22-year-old physiotherapy intern, Jyoti Singh, and her friend were attacked on a moving bus in south Delhi. She died of her injuries. Her parents later asked that her real name be used [S1 · medium].

Student-led protests filled Raisina Hill and India Gate. On 22 December, police used water cannon and teargas [Commons file description, image below · medium].

### Timeline
| Date | Event | Source |
|---|---|---|
| 16 Dec 2012 | The attack in Munirka, Delhi. | S1 · medium |
| 22–23 Dec 2012 | The government appoints a three-member committee: Justice J. S. Verma (former Chief Justice), Justice Leila Seth and Gopal Subramanium. Wikipedia gives 22 Dec; PRS gives 23 Dec. | S3 · high; S1 · medium |
| 23 Jan 2013 | The Verma Committee reports within a month, after considering about 80,000 suggestions. It identifies failures of governance and policing as the root cause. | S3 · high (date); S1, S2 · medium (80,000) |
| 3 Feb 2013 | An ordinance gives effect to many recommendations. The Law Minister claims 90% were adopted. | S2 · medium |
| 19 and 21 Mar 2013 | The Criminal Law (Amendment) Bill passes the Lok Sabha and then the Rajya Sabha. Presidential assent follows on 2 Apr 2013. | S4 · high; S2 · medium |
| Sep 2013 → 20 Mar 2020 | Four adult defendants are convicted and sentenced to death; they are executed in March 2020. | S1 · medium |
| Jul 2024 | The Bharatiya Nyaya Sanhita replaces the IPC but keeps the marital rape exception. | S6 · medium |
| 14 Aug 2024 | After the rape and murder of a trainee doctor at RG Kar Medical College, Kolkata, "Reclaim the Night" protests are held in Kolkata and other cities. The accused is convicted on 18 Jan 2025. | S7 · medium |

### How they did it
- **Ideas:** Women's safety as a failure of governance, not of women's behaviour. The committee recommended a rights-based approach, police reform and no death penalty [S3 · high].
- **Research and evidence:** A rapid public consultation (about 80,000 suggestions from the public and from jurists) [S1, S2 · medium].
- **Media and culture:** Candlelight vigils in many cities (Kolkata and Bangalore images exist on Commons).
- **Street action:** Spontaneous student-led protests at the seat of government [S1].
- **Institutional pressure:** Women's groups protested the ordinance for leaving out key recommendations [S2 · medium].

### What changed (numbers)
- **New offences** [S2 · medium]:
  - acid attack (IPC 326A/B);
  - stalking (354D);
  - voyeurism and sexual harassment;
  - a broadened definition of rape;
  - a new section 376A for rape causing death or a vegetative state.
- **The Nirbhaya Fund,** a ₹1,000 crore corpus announced in the 2013 Union Budget [S5 · medium].
- **Recorded rapes:** NCRB recorded 31,677 rape cases in 2021 (an average of 86 a day); 89% were by persons known to the victim [S8 · medium]. Higher recorded numbers may reflect more reporting as well as more crime; interpret with care.

### Limits and critiques
- **Recommendations left out** [S2, S3, S6]:
  - criminalising marital rape (still excepted under the BNS, 2024);
  - removing the need for official sanction to prosecute armed-forces personnel (AFSPA).
- **The death penalty was expanded** (376A), against the committee's advice [S2, S3].
- **The "protection" framing** of the 2012 response was later challenged by student feminists (see case 9).

### Three lessons for CSP
1. **Be ready when a consultation window opens.** Keep model submissions, data briefs and expert lists on file. In 2012–13, roughly 80,000 inputs reached a committee in one month.
2. **Track the gap between recommendation and law.** Publish a public scorecard of the Verma recommendations: adopted, diluted or ignored. Marital rape is the obvious headline.
3. **Hold the rights-based line.** Resist "quick fixes" (the death penalty, curfews) and keep the committee's diagnosis of governance and police failure at the centre.

### Sources
- **[S1]** Wikipedia, "2012 Delhi gang rape and murder", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/2012_Delhi_gang_rape_and_murder
- **[S2]** Wikipedia, "Criminal Law (Amendment) Act, 2013", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Criminal_Law_(Amendment)_Act,_2013
- **[S3]** PRS Legislative Research, "Justice Verma Committee Report Summary", accessed 2026-10-24. The summary PDF is dated 25 Jan 2013.
  https://prsindia.org/policy/report-summaries/justice-verma-committee-report-summary
- **[S4]** PRS Legislative Research, Bill Track: The Criminal Law (Amendment) Bill, 2013, accessed 2026-10-24.
  https://prsindia.org/billtrack/the-criminal-law-amendment-bill-2013
- **[S5]** Wikipedia, "Nirbhaya Fund", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Nirbhaya_Fund
- **[S6]** Wikipedia, "Bharatiya Nyaya Sanhita, 2023", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Bharatiya_Nyaya_Sanhita
- **[S7]** Wikipedia, "2024 Kolkata rape and murder", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/2024_Kolkata_rape_and_murder
- **[S8]** Wikipedia, "Rape in India" (citing NCRB 2021), accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Rape_in_India

### Candidate images
| File page | Licence | Author | Notes |
|---|---|---|---|
| https://commons.wikimedia.org/wiki/File:Delhi_protests-students,_Raisina_Hill.jpg | CC BY-SA 3.0 | Nilroy (Nilanjana Roy) | Student protest, Raisina Hill, 22 Dec 2012. Verified on the file page. |
| https://commons.wikimedia.org/wiki/File:Silent_Protest_at_India_Gate.jpg | CC BY 2.0 | ramesh_lalwani | India Gate, 21 Dec 2012. Commons flags personality rights. |
| https://commons.wikimedia.org/wiki/File:Candlelight_Rally_Against_Rape_-_Sector-V_-_Salt_Lake_City_-_Kolkata_2012-12-29_2107.JPG | CC BY 3.0 | Biswarup Ganguly | Kolkata vigil, 29 Dec 2012. |
| https://commons.wikimedia.org/wiki/File:Justice_J_S_Verma,_Jagadish_Sharan_Verma.jpg | CC BY 3.0 | Bellarybrother | Justice J. S. Verma (2011). |

Do not use the Commons composite of the convicts.

---

## Case 9. Pinjra Tod ("Break the Cage"), Delhi student women, 2015–

**One-line summary:** Women students in Delhi rejected curfews imposed "for their safety". Their organising won equal hostel rules at some campuses and pushed the Delhi Commission for Women to act against discriminatory hostel rules. It also shows the costs of exclusion and state repression.

### Context
In August 2015, Jamia Millia Islamia stopped allowing women students to request late returns after 8 pm, and the Delhi Commission for Women (DCW) challenged this [S1 · medium]. Women students across Delhi formed Pinjra Tod in September 2015 [S2 · high].

The group's demands [S1 · medium]:
- end curfews on women;
- affordable housing;
- regulated paying-guest (PG) accommodation;
- elected sexual-harassment committees in universities.

### Timeline
| Date | Event | Source |
|---|---|---|
| Aug–Sep 2015 | The Jamia notice and the DCW challenge; the collective forms, and graffiti of birds escaping cages appears on North Campus. | S1 · medium; S2 · high |
| 8–10 Oct 2015 | Night march in North Campus; a petition goes to the DCW. | S1 · medium |
| 24 Oct 2015 | "FYI Smriti Irani" protest at the HRD ministry: hostel rulebooks are presented as evidence. | S1 · medium |
| 28 Nov 2015 | Hostel timings change at RMLNLU, Lucknow, reported as a Pinjra Tod victory. | S4 · medium (headline only) |
| 16 Dec 2015 | "Bus Teri Meri, Chal Saheli": women ride buses after dark in eight cities on the third anniversary of the Delhi bus attack. | S2 · high |
| 2–7 May 2016 | UGC publishes sexual-harassment regulations for higher education. The DCW issues notices to 23 universities acting on Pinjra Tod's report. | S1 · medium |
| 18 Feb 2019 | Nine Bahujan, tribal and Muslim members publicly leave, citing upper-caste dominance and tokenism. | S3 · high |
| 23 May 2020 → Jun 2021 | Members Devangana Kalita and Natasha Narwal are arrested in connection with the 2020 Delhi riots case. They are granted bail by the Delhi High Court in June 2021. | S1, S5 · medium |

### How they did it
- **Ideas:** Reframed "safety" as freedom and mobility, not confinement. They rejected a CCTV-and-police model of safety and argued that more women in public space makes it safer [S1 · medium; S2 · high].
- **Research and evidence:** Collected hostel rulebooks as evidence of discrimination, and filed a report to the DCW [S1 · medium].
- **Media and culture:** Graffiti, posters, Facebook and theatre [S1 · medium; S2 · high].
- **Street action:** Night marches and the "reclaim the night" bus rides [S2 · high].
- **Institutional pressure:** Petitions to the DCW, UGC regulations and campus-by-campus negotiation [S1 · medium].

### What changed (numbers)
- DCW notices to **23 universities** (May 2016) [S1 · medium].
- Curfew changes at some institutions, for example RMLNLU (2015) and Delhi Technological University (2017) [S1, S4 · medium].
- The model spread to campuses including NIT Calicut, IIT Roorkee and Punjabi University [S1 · medium].

### Limits and critiques
- **Inclusion.** Former members criticised exclusion in decision-making, token inclusion and the absence of caste from the collective's principles [S3 · high].
- **Repression.** Activists were arrested and spent about a year in custody before bail [S1, S5 · medium].
- **No images.** No freely licensed images of Pinjra Tod were found on Commons.

### Three lessons for CSP
1. **Reframe the problem.** "Safety without cages": challenge protectionist rules with evidence (rulebooks, curfew audits) and a positive vision of women in public space. This is very close to CSP's "positive movement" aim.
2. **Use the institutions you already have.** Women's commissions, regulators (UGC) and campus committees can be pressed with documented complaints.
3. **Build intersectional leadership and a legal-support fund from day one.** Caste, religion and class inclusion is the difference between growing and splitting. Activists need lawyers on call.

### Sources
- **[S1]** Wikipedia, "Pinjra Tod", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Pinjra_Tod
- **[S2]** Scroll.in, "Three years after Delhi rape, women across India take bus rides after dark to assert their rights", 17 Dec 2015.
  https://scroll.in/article/776327/three-years-after-delhi-rape-women-across-india-take-bus-rides-after-dark-to-assert-their-rights
- **[S3]** The Wire (LiveWire), "Why Some Bahujan, Muslim and Tribal Students are Quitting Pinjra Tod", 18 Feb 2019.
  https://livewire.thewire.in/gender-and-sexuality/pinjra-tod-your-time-is-up-why-bahujan-tribal-and-muslim-women-are-quitting-the-collective/
- **[S4]** Bar & Bench, "#PinjraTod movement sees a victory (of sorts) at RMLNLU after change in hostel timings", 28 Nov 2015. Only the headline loaded.
  https://barandbench.com/pinjratod-movement-sees-a-victory-of-sorts-at-rmlnlu-after-change-in-hostel-timings/
- **[S5]** Wikipedia, "Asif Iqbal Tanha" (bail in June 2021 for Kalita, Narwal and Tanha), accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Asif_Iqbal_Tanha

### Candidate images
No Pinjra Tod images were found on Commons. The two below are related Indian "reclaim public space" images. Label them as illustrative, or ask the collective for permission to use its own photos and artwork.

| File page | Licence | Author | Notes |
|---|---|---|---|
| https://commons.wikimedia.org/wiki/File:Blank_Noise_project%27s_intervention_on_Majestic_bus_stand,_against_Eve_Teasing.jpg | CC BY 2.0 | flickr.com/photos/rahima | Blank Noise street intervention, Bangalore (dated 2003). Related lineage. |
| https://commons.wikimedia.org/wiki/File:Reclaim_The_Night_-_Raat_Dakhal_Karo_-_Protest_Demonstration_Against_9th_August_2024_On_Duty_Doctor_Rape-Murder_Incident_Of_RG_Kar_Medical_College_And_Hospital_Kolkata_-_Howrah_2024-09-04_08590.jpg | CC BY 4.0 | Biswarup Ganguly | "Raat Dakhal Karo" (Reclaim the Night), 4 Sep 2024. Commons flags personality rights. |

---

## Case 10. Poland: Black Protest (2016) and Strajk Kobiet (2020–2023)

**One-line summary:** Polish women defeated a total abortion ban in 2016 with a strike modelled on Iceland's. They lost to a court ruling in 2020 despite the largest protests since 1989, and then helped turn record youth turnout into a change of government in 2023.

### Context
Poland's 1993 law allowed abortion only for risk to the woman's life or health, crime (rape or incest), or foetal impairment [S3 · medium]. Foetal impairment was by far the most common legal ground: 1,074 of the 1,110 legal abortions in 2019 [S3 · medium]. By 2020, 14 of the Constitutional Tribunal's 15 judges had been appointed by the Sejm since Law and Justice (PiS) returned to power in 2015 [S3 · medium].

### Timeline
| Date | Event | Source |
|---|---|---|
| 22 Sep 2016 | The Razem party's "Black Protest"; people post selfies in black (#czarnyprotest). | S1 · medium |
| 3 Oct 2016 | "Black Monday" women's strike, modelled on Iceland 1975. Police estimate 98,000 people at 143 demonstrations; 90% were in towns under 50,000. | S1, S2 · medium |
| 6 Oct 2016 | The Sejm rejects the "Stop Abortion" total-ban bill. | S2 · medium |
| 22 Oct 2020 | The Constitutional Tribunal (11–2) rules the foetal-impairment ground unconstitutional; protests begin the same evening. | S3 · medium |
| 28 Oct 2020 | National strike ("I'm not going to work"). Police say about 430,000 people attended 410 protests, the biggest since the fall of communism. Prosecutors are told to pursue organisers. | S4 · high |
| 27 Jan 2021 | The ruling is published and takes effect. | S1 · medium |
| 15 Oct 2023 | Parliamentary election: turnout 74%; 18–29 turnout 68.8% (up from 46.4% in 2019); PiS support among 18–29s 14.9%. A record 136 women MPs (29.6%) are elected. The opposition forms a government. | S5, S6 · high; S7 · medium |
| Jul 2024 | A liberalising abortion bill is defeated 218–215 in the Sejm. Wikipedia describes it as abortion on request in the first trimester; check its scope before publishing. | S1 · medium |

### How they did it
- **Ideas:** Women's right to decide; state and church out of private life. The 2020 demands widened to the rule of law, health funding and secular schooling [S3 · medium].
- **Research and evidence:** Ministry of Health statistics exposed how much the ruling removed (about 97% of legal abortions) [S3 · medium].
- **Media and culture:** Black clothing, umbrellas, coat hangers and the red lightning-bolt symbol [S1, S3 · medium].
- **Street action:** Strikes, road blockades and protests in small towns [S2, S3, S4].
- **Institutional pressure:** Parliament in 2016 and the ballot box in 2023 [S2, S5, S6].

### What changed (numbers)
- **2016:** the total ban was defeated within three days of the strike [S2 · medium].
- **2020:** about 430,000 people at 410 protests in a single day [S4 · high].
- **2023:** youth turnout up 22 points, and a record 136 women in the Sejm [S5, S6 · high].

### Limits and critiques
- **The law is still restrictive.** The 2021 restriction remains. Reform stalled in the governing coalition (2024), and the president elected in 2025, Karol Nawrocki, opposes liberalisation [S1 · medium].
- **Lives lost.** Several women died of septic shock after doctors delayed treatment, prompting 70+ "Not one more" protests [S1 · medium].
- **Repression.** Organisers were prosecuted; Women's Strike leaders were indicted in 2021 [S3 · medium; S4 · high].

### Three lessons for CSP
1. **Have a rapid-defence plan.** A pre-agreed format (colour, symbol, strike day) can mobilise hundreds of thousands within days, as in 2016.
2. **Turn street energy into votes.** Run youth voter-registration drives, candidate pledges and "why vote" content. The 2023 youth surge was the movement's biggest institutional win.
3. **Organise beyond the capital.** Nine in ten of the 2016 protests were in small towns. Give local organisers kits and autonomy.

### Sources
- **[S1]** Wikipedia, "Abortion in Poland", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Abortion_in_Poland
- **[S2]** Polish Wikipedia, "Aborcja w Polsce" (Czarny protest section), accessed 2026-10-24.
  https://pl.wikipedia.org/wiki/Aborcja_w_Polsce
- **[S3]** Wikipedia, "2020–2021 women's strike protests in Poland", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/2020%E2%80%932021_women%27s_strike_protests_in_Poland
- **[S4]** Notes from Poland, "Polish prosecutors seek charges against organisers of abortion protests…", 29 Oct 2020.
  https://notesfrompoland.com/2020/10/29/polish-prosecutors-seeks-charges-against-organisers-of-abortion-protests-for-endangering-public/
- **[S5]** Euronews, "No country for old men: how young voters helped swing the elections in Poland", 18 Oct 2023.
  https://www.euronews.com/2023/10/18/no-country-for-old-men-how-young-voters-helped-swing-the-elections-in-poland
- **[S6]** Notes from Poland, "Record number of female MPs in Poland's parliament after elections", 19 Oct 2023.
  https://notesfrompoland.com/2023/10/19/record-number-of-female-mps-in-polands-parliament-after-elections/
- **[S7]** Wikipedia, "2023 Polish parliamentary election" (women's turnout 74.7% vs men's 73.1%), accessed 2026-10-24.
  https://en.wikipedia.org/wiki/2023_Polish_parliamentary_election

### Candidate images
| File page | Licence | Author | Notes |
|---|---|---|---|
| https://commons.wikimedia.org/wiki/File:Black_Monday_2016-10-03_Wroc%C5%82aw,_Rynek,_Hour_K_-_big_banner_1.jpg | CC BY-SA 4.0 | SpiderMum | Black Monday, Wrocław, 3 Oct 2016. Commons flags personality rights. |
| https://commons.wikimedia.org/wiki/File:Protest_in_Gdansk_against_Poland%27s_new_abortion_laws_24.10.2020.jpg | CC BY-SA 4.0 | LukaszKatlewa | Gdańsk Shipyard, 24 Oct 2020. Strong symbolism: the Solidarity birthplace. |
| https://commons.wikimedia.org/wiki/File:Protest_in_Torun_against_abortion_restriction_24_Oct_2020.jpg | CC BY-SA 4.0 | Xlenka | Toruń, 24 Oct 2020. |
| https://commons.wikimedia.org/wiki/File:Student_protest_against_abortion_restriction_in_Wroc%C5%82aw,_28.10.2020.jpg | CC BY-SA 4.0 | Evidamii019 | Student protest, 28 Oct 2020. Gen Z angle. |

Avoid the Commons "Strajk Kobiet graffiti" file, which contains profanity.

---

## Case 11. Woman, Life, Freedom (Zan, Zendegi, Azadi), Iran and the diaspora, 2022–

**One-line summary:** The death in custody of 22-year-old Jina Mahsa Amini in September 2022 sparked a women-led uprising under a Kurdish slogan. It won global recognition and a UN accountability mechanism, at the price of hundreds of lives.

### Context
Jina Mahsa Amini, a Kurdish Iranian woman, was arrested by the "Guidance Patrol" (morality police) for allegedly improper hijab and died on 16 Sep 2022 [S1 · medium]. The slogan "Jin, Jiyan, Azadî" comes from the Kurdish women's movement of the late 20th century [S2 · medium].

### Timeline
| Date | Event | Source |
|---|---|---|
| 13–16 Sep 2022 | Arrest and death of Jina Mahsa Amini; protests spread from Saqqez and Kurdistan across Iran. The government restricts the internet. | S1 · medium |
| Nov 2022 | The UN Human Rights Council creates an independent Fact-Finding Mission (Resolution S-35/1), chaired by Sara Hossain. | S6 · medium |
| Feb–Mar 2023 | Authorities say about 22,000 arrested protesters were pardoned; most detainees were freed after a pardon by the Supreme Leader. | S1 · medium; S3 · high |
| Sep 2023 | At least 551 protesters killed, including 68 minors (Iran Human Rights, 15 Sep 2023). Al Jazeera reports more than 500 killed, including at least 70 minors, and 7 protest-related executions. | S1 · medium; S3 · high |
| 21 Sep 2023 / Sep 2024 | Parliament approves the "Hijab and Chastity" bill, and the Guardian Council approves it in Sep 2024. It is later suspended by the Supreme National Security Council. | S5 · high; S9 · medium |
| Oct 2023 | Imprisoned activist Narges Mohammadi wins the Nobel Peace Prize. The European Parliament's Sakharov Prize goes to Jina Mahsa Amini and the Woman, Life, Freedom movement. | S7, S8 · medium |
| Feb 2024 / Mar 2025 | The UN Fact-Finding Mission finds violations amounting to crimes against humanity, including gender persecution. | S6 · medium |
| 16 Sep 2026 | An Amnesty report (about 1,000 pages) finds crimes against humanity in the 2022 crackdown. It identifies 377 dead, including 56 children, and names 87 officials. It says the crackdown on the early-2026 protests followed the same pattern on a deadlier scale. | S4 · high |

### How they did it
- **Ideas:** A positive, three-word affirmation (woman, life, freedom), not a list of grievances. It linked bodily autonomy to political freedom [S2].
- **Research and evidence:** Rights groups' casualty counts (IHRNGO, HRA), UN fact-finding and Amnesty documentation [S1, S4, S6].
- **Media and culture:** Hair-cutting, removing headscarves, typography and murals; the slogan circulated in many languages (images below).
- **Street action:** Nationwide protests across universities, schools and streets; large diaspora rallies [S1, S3].
- **Institutional pressure:** UN mechanisms, prizes and sanctions campaigns abroad [S6, S7, S8].

### What changed (numbers)
- A UN accountability mechanism, extended to April 2026 and in January 2026 to the 2026 crackdown [S6 · medium].
- Nobel and Sakharov recognition in 2023 [S7, S8 · medium].
- **Defiance continued under pressure.** Mandatory hijab remained law, with smart cameras and the morality police redeployed by September 2023 [S3 · high]. The new hijab law was later suspended rather than enforced [S9 · medium].

### Limits and critiques
- **Brutal repression.** Hundreds were killed, and there were executions and death sentences, including against women activists [S1, S3, S4; HRW S5].
- **No structural change in law** on women's rights as of 2024 [S5 · high]:
  - Iran has no domestic violence law;
  - married women need their husband's permission for a passport.
- **The numbers disagree** (551 vs more than 500 vs 377 identified). This is a reminder to publish ranges and methods.

### Three lessons for CSP
1. **Choose a positive, rooted slogan and credit its origin.** "Woman, Life, Freedom" travelled because it was short and affirmative, and it came from an existing women's movement. That fits CSP's positive positioning.
2. **Document for accountability.** Build evidence-preservation habits (dated, sourced, backed up) and partner with human-rights organisations. Publish ranges when counts disagree.
3. **Show solidarity without causing harm.** Never publish identifiable images of people at risk. Use art, typography and diaspora images, and amplify Iranian women's own voices and organisations.

### Sources
- **[S1]** Wikipedia, "Mahsa Amini protests", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Mahsa_Amini_protests
- **[S2]** Wikipedia, "Woman, Life, Freedom", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Woman,_Life,_Freedom
- **[S3]** Al Jazeera, "Iran: One year after the death of Mahsa Amini", 16 Sep 2023.
  https://www.aljazeera.com/news/2023/9/16/iran-one-year-after-the-death-of-mahsa-amini
- **[S4]** France 24/AFP, "Amnesty says Iran committed 'crimes against humanity' in crackdown on 2022 protests", 16 Sep 2026.
  https://www.france24.com/en/live-news/20260916-amnesty-says-iran-committed-crimes-against-humanity-in-crackdown-on-2022-protests
- **[S5]** Human Rights Watch, *World Report 2025*: Iran chapter, published Jan 2025.
  https://www.hrw.org/world-report/2025/country-chapters/iran
- **[S6]** Wikipedia, "Independent International Fact-Finding Mission on the Islamic Republic of Iran", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Independent_International_Fact-Finding_Mission_on_the_Islamic_Republic_of_Iran
- **[S7]** Wikipedia, "Narges Mohammadi", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Narges_Mohammadi
- **[S8]** Wikipedia, "Sakharov Prize" (2023 laureate), accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Sakharov_Prize
- **[S9]** Wikipedia, "Hijab and chastity bill", accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Hijab_and_chastity_bill

### Candidate images
Use art and typography. Avoid identifiable protesters inside Iran.

| File page | Licence | Author | Notes |
|---|---|---|---|
| https://commons.wikimedia.org/wiki/File:Jin_Jiyan_Azadi_by_Btoy,_Schwendergasse,_Vienna.jpg | CC BY-SA 4.0 | Herzi Pinki | Mural, Vienna (Jan 2021). The underlying mural is by the artist Btoy, so credit both. |
| https://commons.wikimedia.org/wiki/File:%D8%B2%D9%86_%D8%B2%D9%86%D8%AF%DA%AF%DB%8C_%D8%A2%D8%B2%D8%A7%D8%AF%DB%8C.jpg | CC BY-SA 4.0 | Farzan44 | Persian typography of the slogan, 21 Sep 2022. |
| https://commons.wikimedia.org/wiki/File:Iran_solidairty_protests_22_October_2022_in_Berlin_19.jpg | CC BY-SA 4.0 | Amir Sarabadani | Diaspora rally, Berlin, 22 Oct 2022. Check for identifiable faces before use. |
| https://commons.wikimedia.org/wiki/File:Woman_life_freedom_Richmondhill.jpg | CC BY-SA 4.0 | Pirehelokan | Sign in Kurdish and English, 1 Oct 2022. |

---

## Case 12. #EndFemicideKE, Kenya, 2024–

**One-line summary:** A spate of killings of women in January 2024 brought thousands onto Kenya's streets in what Africanews called the country's largest anti-femicide demonstration. Civil-society data projects then forced the state to name gender-based violence a national security issue. Turning that into law and data transparency is unfinished.

### Context
Globally, about 85,000 women and girls were intentionally killed in 2023. 60% (51,100) were killed by partners or family, about 140 a day, and Africa had the highest rates [S7 · high].

Kenya has no adequate official data system for femicide [S1 · high]. Femicide is not legally recognised as a distinct crime [S9 headline · high; S6 · high].

### Timeline
| Date | Event | Source |
|---|---|---|
| Late Jan 2024 | Thousands march in cities and towns across Kenya, organised by a coalition of organisations. Africanews calls it the largest anti-femicide demonstration ever held in the country. | S4 · high; S1 · high |
| 14 Feb 2024 | "Dark Valentine": hundreds dressed in black hold a vigil in Nairobi. Police and media had reported 16+ femicides since the start of 2024. | S4 · high |
| 5 Sep 2024 | Olympic marathoner Rebecca Cheptegei dies after her partner set her on fire. | S10 · high |
| Sep–Nov 2024 | Police record 97 femicide cases in three months (Deputy IG Eliud Lagat). | S3 · high |
| 25 Nov and 10 Dec 2024 | Police use teargas on anti-femicide marches in Nairobi. | S8 · medium; S13 · high (headline) |
| 19 Dec 2024 | The government calls GBV the biggest security issue, creates a police femicide unit, and the Cabinet approves a presidential working group. It cites 100 women killed in four months and 7,107 SGBV reports since September 2023. | S5 · high |
| Jan 2025 | A 42-member technical working group on GBV is set up. It is criticised for diluting the focus on femicide and for excluding the EndFemicideKE coalition. | S1 · high |
| Aug 2025 → 2026 | Usikimye's MASKAN exhibition on femicide (Nairobi, 7–21 Aug 2025). Civil society counts at least 220 femicides in 2025, 129 in the first quarter. The government stopped publishing consolidated data after March 2025. New protests follow in May–June 2026. | Commons file page · high; S6 · high; S11 · high |

### How they did it
- **Ideas:** Name femicide as a distinct political crime, not a "domestic matter". Demand recognition in law and a national database [S1, S6].
- **Research and evidence:** Civil-society counts fill the gap:
  - Africa Data Hub with Africa Uncensored ("Silencing Women": 1,069 female murders recorded, 842 of which meet the UNODC femicide definition, Jan 2016 – Dec 2025, from court records and media) [S2 · high];
  - Femicide Count Kenya [S12];
  - Heinrich Böll Foundation mapping [S6].
- **Media and culture:** Vigils, black dress, naming the dead and the MASKAN exhibition (public memory).
- **Street action:** Multi-city marches (January 2024), vigils, and marches in November–December 2024 and June 2026 [S4, S5, S11].
- **Institutional pressure:** Pressed the presidency and police for recognition, a unit and a task force [S5, S1]. A 40-day ultimatum came in May 2026 [S11 · high].

### What changed (numbers)
- **Official recognition** of GBV as the top security issue (December 2024), a dedicated police unit, and a presidential working group [S5 · high].
- A second specialised police unit was formed on 23 May 2026 after new protests [S11 · high].
- **Data infrastructure** is now held by civil society. ADH has 842 femicides on record; Böll recorded at least 220 in 2025 [S2, S6 · high].

### Limits and critiques
- **Task force critique** (Prof. Awino Okech, SOAS) [S1 · high]:
  - the group is too large and costly;
  - its focus is diluted;
  - leading femicide campaigners are absent;
  - teargas against peaceful marchers undermined trust.
- **The state stopped publishing femicide data** after March 2025 [S6 · high].
- **Femicide is still not a legal category** in Kenya (as of Dec 2025) [S9 · high].

### Three lessons for CSP
1. **Build the database the state will not.** Publish a transparent femicide or GBV tracker with a clear definition (UNODC), sources and update dates, and partner with journalists, as ADH did with Africa Uncensored.
2. **Name, count, commemorate.** Vigils, exhibitions and "say their names" walls turn statistics into public memory that sustains a movement between peaks.
3. **Track the state's promises in public.** Keep a dashboard of every commitment (task forces, units, laws), its date and its status. Demand an annual public report, as Okech recommends.

### Sources
- **[S1]** The Conversation (Awino Okech), "Femicide in Kenya: William Ruto has set up a task force – feminist scholar explains its flaws", 29 Jan 2025.
  http://theconversation.com/femicide-in-kenya-william-ruto-has-set-up-a-task-force-feminist-scholar-explains-its-flaws-248313
- **[S2]** Africa Data Hub, "Silencing Women: Femicide Kenya" (with Odipodev and Africa Uncensored), accessed 2026-10-24.
  https://www.africadatahub.org/femicide-kenya
- **[S3]** Daily Nation (Kamau Maichuhie), "4,000 cases monthly: The hidden face of Kenya's GBV tragedy", 12 Nov 2024.
  https://nation.africa/kenya/news/gender/4-000-cases-monthly-the-hidden-face-of-kenya-s-gbv-tragedy-4816576
- **[S4]** Africanews, "Kenya: 'Dark Valentine' in Nairobi as hundreds protest the rise in femicides", 15 Feb 2024.
  https://www.africanews.com/2024/02/15/kenya-dark-valentine-in-nairobi-as-hundreds-protest-the-rise-in-femicides/
- **[S5]** Africanews, "Kenya's response to gender violence: a plan for women's protection", 20 Dec 2024.
  https://www.africanews.com/2024/12/20/kenyas-response-to-gender-violence-a-plan-for-womens-protection/
- **[S6]** Heinrich Böll Stiftung Nairobi (Faiba Kombo), "She Did Not Die by Accident: Mapping Femicide in Kenya (2025)", 27 Jan 2026.
  https://ke.boell.org/en/2026/01/27/she-did-not-die-accident-mapping-femicide-kenya-2025
- **[S7]** UN Women, "One woman or girl is killed every 10 minutes by their intimate partner or family member", 25 Nov 2024.
  https://www.unwomen.org/en/news-stories/press-release/2024/11/one-woman-or-girl-is-killed-every-10-minutes-by-their-intimate-partner-or-family-member
- **[S8]** Wikipedia, "Femicide" (Kenya section; 10 Dec 2024 teargas, citing Reuters), accessed 2026-10-24.
  https://en.wikipedia.org/wiki/Femicide
- **[S9]** Africanews, "Femicide not officially recognised in Kenya despite rising cases", 13 Dec 2025.
  https://www.africanews.com/2025/12/13/femicide-not-officially-recognised-in-kenya-despite-rising-cases/
- **[S10]** Africanews, "Ugandan Olympic athlete dies after being severely burned by her partner…", 5 Sep 2024.
  https://www.africanews.com/2024/09/05/ugandan-olympic-athlete-dies-after-being-severely-burned-by-her-partner-over-a-land-disput/
- **[S11]** Africanews, "Kenyan activists protest rising cases of gender-based violence, femicide", 1 Jun 2026.
  https://www.africanews.com/2026/06/01/kenyan-activists-protest-rising-cases-of-gender-based-violence-femicide/
- **[S12]** Femicide Count Kenya (homepage; methodology and counts not shown on the homepage), accessed 2026-10-24.
  https://femicidecount.org/
- **[S13]** Africanews, "femicide" tag page. It lists "Kenyan police use teargas to disperse anti-femicide protesters in Nairobi", 25 Nov 2024. Accessed 2026-10-24.
  https://www.africanews.com/tag/femicide/

### Candidate images
| File page | Licence | Author | Notes |
|---|---|---|---|
| https://commons.wikimedia.org/wiki/File:MASKAN_exhibition_01.jpg | CC BY-SA 4.0 | WhoseKnowledge? (exhibition by Usikimye; curator Thayu Kilili) | MASKAN femicide exhibition, Creatives Garage, Nairobi, Aug 2025. Uploaded for #VisibleWikiWomen. |
| https://commons.wikimedia.org/wiki/File:MASKAN_exhibition_03.jpg | CC BY-SA 4.0 | WhoseKnowledge? | Same exhibition. |

No freely licensed photos of the 2024 Kenyan marches were found in the Commons categories checked. Ask Usikimye, FIDA-Kenya or photographers directly for permission.

---

## 3. Image licensing: practical notes for the web build

**Credit line format.** Use: *Photo: [Author], [licence short name with link], via Wikimedia Commons*. Link to the file page, not the raw image. Example:
"Photo: Johannes Jansson/norden.org, CC BY 2.5 DK, via Wikimedia Commons".

**What each licence requires:**
- **CC BY-SA:** text overlays, crops or colour treatments are adaptations. Those adapted images must be shared under the same licence. It does not make the whole website CC BY-SA. Keep a note in the image credits and avoid heavy edits.
- **CC BY 2.0 / 3.0 / 4.0:** attribution only.
- **CC0 and public domain:** no conditions, but credit anyway.
- **OGL v3 (UK Government):** attribute the source.

**Personality rights.** Files flagged include:
- the Stella Creasy portrait;
- Silent Protest at India Gate;
- Black Monday Wrocław;
- the Kolkata 2024 "Reclaim the Night" photo.

Do not use these to imply endorsement of CSP.

**Murals and artworks** (for example the Jin Jiyan Azadi mural in Vienna) involve a second creator. Credit both.

**Missing free images.** For hero images where no free licence exists (Pinjra Tod, the 2023 Iceland strike, the 2024 Kenya marches), ask the organisations for written permission, or commission illustrations. That also fits CSP's "digital culture" pillar.

---

## 4. Gaps and verification still needed before publishing

**Web search.** None was available in this run. A follow-up pass with search should confirm:
- Iceland 2023: the official turnout figure (organisers say over 100,000) and an independent media report;
- the 2025 strike's turnout and results;
- the Iceland equal-pay certification law: its exact title and start date (the NPR page timed out);
- the Ni Una Menos 3 June 2015 crowd size (estimates range from about 200,000 to over 300,000);
- the CEDAW inquiry's exact findings (the document would not load), and the date of NI's safe-access-zones law;
- Kenya: the exact date of the January 2024 marches (widely reported as 27 Jan 2024 but not verified here), the working group's chair and final report, and any femicide bill;
- Poland, July 2024: the exact scope of the bill defeated 218–215;
- the India / Verma Committee "80,000 suggestions" figure (Wikipedia only), against the report itself (the PRS full-report link returned 404).

**Blocked outlets.** BBC, Guardian, Reuters, AP and Indian dailies could not be opened. Cross-check headline figures there before publication if the CSP team has access.

**Also considered, not researched.** Do not publish facts about these without new research:
- Spain 8M;
- Mexico 2019;
- Sudan 2019;
- the Gulabi Gang;
- the 2017 Women's March.
