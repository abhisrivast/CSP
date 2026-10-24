# India research: adversarial fact-check

Checked 24 October 2026. This is research, not legal advice.

**Method.** I opened each cited source with WebFetch, or with curl and pdftotext when WebFetch was blocked or the file was a PDF. Primary texts I read directly were the DPDP Act, the DPDP Rules gazette (G.S.R. 846(E)), the MeitY FAQ on the IT Rules amendment and the consolidated IT Rules, the FCRA Act 2010, the PIB FCRA FAQ, the RPwD Act, the POSH Act gazette, the Societies Registration Act (Tripura copy), the ECI s.29A guidelines and the ECI delisting press note.

**Limit.** The shared web-search budget was already used up when this check started, so I could not search for second sources. Second sources come only from pages I could fetch directly by URL. Where I had only one secondary source for a medium-confidence claim, I marked it **unverifiable**. I did not guess.

**Tally (88 claims):** 72 confirmed, 12 corrected (C1–C12), 4 unverifiable (the first four rows of section 2), 0 false. C13–C15 and the last two rows of section 2 are notes on wording or milestones, not separate claims. Ten timeline milestones were spot-checked separately (section 4).

---

## 1. Corrections (fix before printing)

| # | Claim (short) | Problem | Corrected wording |
|---|---|---|---|
| C1 | NFHS-6: spousal violence fell **29.2% → 22.3%** | The Quint gives 29.2% for NFHS-5. The NFHS-5 fact sheet figure is widely quoted as 29.3%, and I did not open the fact sheet. The Quint also leaves out the population, which The News Minute gives as ever-married women aged 18–49. | "In NFHS-6, the share of ever-married women aged 18–49 who reported spousal violence fell from about 29% (NFHS-5) to 22.3%; women's internet use (ages 15–49) rose from 33.3% to 64.3%." |
| C2 | ASER 2024: 36.2% of boys and 26.9% of girls **own a smartphone** | These shares are only among 14–16-year-olds **who can use a smartphone**, not all 14–16-year-olds. Access was 85.5% for boys and 79.4% for girls. | "In ASER 2024 (rural, ages 14–16), among those who can use a smartphone, 36.2% of boys and 26.9% of girls own one." |
| C3 | DataReportal: social media identities 500M, **35.6% female** | 500M is the October 2025 total. The 35.6% female figure is for the **455M identities aged 18+**. These are ad-reach figures, not active users. | "In late 2025, ad reach in India was YouTube 500M, Instagram 481M (29.9% of its adult ad audience female), Snapchat 213M and X 22.2M. There were 500M social media user identities (Oct 2025), and 35.6% of the 455M adult identities were female." |
| C4 | CJP office-bearers were **three men, no women leading faces** | This comes from a Kathmandu Post opinion column of 25 June 2026, which names Saurav Das, Vijeta Dahiya and Ashutosh Ranka and says "All three are men". By August 2026, Wikipedia lists a wider team, including National Secretary Aafreen Nawaz and working-committee members Ratna Singh and Vaishnavi Gaur. As a present-tense claim, it is out of date. | "In June 2026 a Kathmandu Post column noted that all three of the CJP's spokespersons were men, although its manifesto calls for 50% reservation for women in Parliament." Date it and attribute it. |
| C5 | CJP: a Panipat lawyer applied **in May 2026** | The Week (26 May 2026) reports the application but gives no filing date. Wikipedia confirms the CJP is not ECI-registered but does not mention the application. | "The CJP is not registered with the ECI. By 26 May 2026, Panipat lawyer Sudhir Jakhar, who calls himself its national convener, had applied under s.29A to register it in his own name (The Week)." |
| C6 | Jantar Mantar, 2–5 Oct 2026: three women journalists alleged harassment | The source places the allegations at the **3 October** protest and says they are under Crime Branch investigation. | "...more than 700 people were detained on 2 Oct (police figure), and three women journalists alleged that Delhi Police personnel sexually harassed or manhandled them while they covered the 3 Oct protest; the complaints are under investigation." |
| C7 | POSH: 'workplace' includes **any** society, trust or NGO | The Act's s.2(o)(ii) covers a private society, trust or NGO only when it is "carrying on commercial, professional, vocational, educational, entertainmental, industrial, health services or financial activities". The Kerala HC relied on this qualifier to exclude political parties. The 'employee' part is correct: it includes "working on a voluntary basis". | "Under the POSH Act, 'employee' includes people working on a voluntary basis, and 'workplace' includes a private society, trust or NGO carrying on commercial, professional, vocational, educational, entertainment, industrial, health or financial activities." |
| C8 | Data Protection Board: no Chair or Members; Kerala HC told on 7 Oct 2026 it is constituted but not functional | The two sources disagree on when recruitment started. The Privacy Labs says MeitY invited applications on 6 May 2026. India Data Law says the Employment News notice was 6 June 2026 and cites a Lok Sabha answer of 12 Aug 2026. Only India Data Law reports the Kerala HC statement (*C.R. Neelakandan v UoI*, WP(PIL) 15/2026). | "As of October 2026 no Chairperson or Members of the Data Protection Board had been appointed. According to India Data Law, on 7 Oct 2026 the Centre's counsel told the Kerala High Court the Board 'has been constituted' but 'has yet to be made functional', and the court expected it to work within eight weeks." Attribute it. |
| C9 | NCRB 2024: **5,737 dowry-related deaths**, released 6 May 2026 | Two secondary sources (Kerala Kaumudi, FII) agree on 5,737, but NCRB itself was not opened. Kerala Kaumudi describes the count more loosely than the legal "dowry death" (BNS s.80). Only Kerala Kaumudi gives the 6 May release date. 2023's figure (6,156) is not directly comparable. | "Reports on NCRB's *Crime in India 2024* put dowry deaths at 5,737, about 16 a day." Do not print the release date or a year-on-year comparison until NCRB is checked. |
| C10 | Unsplash in-025: a **'JAI BHIM' placard** | The Unsplash description says the poster carries "a slogan saluting B.R. Ambedkar" and "Stop Killing Us". It never uses the words "Jai Bhim". | "in-025 (Unsplash) shows a 2018 Delhi protest demanding an end to manual scavenging; a woman holds a poster saluting B.R. Ambedkar ('Stop Killing Us')." |
| C11 | Wikimedia thumbnails: non-standard widths return **HTTP 400** | The MediaWiki page mentions a **429** response for non-standard hotlinked sizes. My live test returned **400** for a 1600px thumbnail and **200** for a 1280px one. The rule is confirmed, but the status code varies. | "Wikimedia rejects hotlinked thumbnails at non-standard widths (allowed: 20, 40, 60, 120, 250, 330, 500, 960, 1280, 1920, 3840); a 1600px request returned HTTP 400 in testing (the docs also mention 429)." |
| C12 | Reclaim the Night Commons file (4 Sep 2024) | The facts are right. But the file is **CC BY 4.0**, not BY-SA, and it carries a **personality-rights warning**. The image library should record both. | Add: "Licence CC BY 4.0; personality-rights warning applies." |
| C13 | Delimitation Bill 2026 "withdrawn" | LiveLaw says Kiren Rijiju withdrew the Delimitation Bill and the UT Laws (Amendment) Bill. PRS lists the Delimitation Bill's status as "Infructuous" (17 Apr 2026). Both describe the same outcome. | "...were then withdrawn (PRS lists the Delimitation Bill as infructuous)." Either wording is safe. |
| C14 | Chipko milestone: Reni on **26 March 1974** | Wikipedia gives both 25 and 26 March 1974 for the Reni action. 26 March is the more commonly cited date. | Keep 26 March, and add a caveat that some accounts say 25 March. |
| C15 | Aruna Asaf Ali milestone dated 9 Aug 1942 | The cited Mani Bhavan page describes the flag-hoisting but does not give the date. The date is well established elsewhere but was not shown on a source opened here. | Keep the date, and add a second source that states 9 August explicitly. |

---

## 2. Unverifiable (do not print as fact yet)

| Claim | Why |
|---|---|
| **MCMC pre-certification:** 7 days for "any person or unregistered parties", 3 days for registered parties and candidates; covers social media | The cited district article (Punjab Kesari, Thoothukudi) gives **"recognised"** parties 3 days, and **independent candidates** and unrecognised organisations 7 days. That does not match the claim. I recall ECI's standing order as 3 days for registered parties and contesting candidates and 7 days for others, but I could not open that order. Social-media coverage is confirmed. Cite ECI's own MCMC order before printing. |
| **Income-tax Act 2025 mapping:** 80G → s.133, 80GGC → s.137 | Only one secondary blog (TaxClue) says this, and it warns that the new sections are not always identical to the old ones. I did not check it against the Act text or a CBDT mapping table. |
| **PLFS Annual Report 2025: female LFPR 40%** | Only a Vision IAS summary says this, and it does not say whether the figure is usual status or CWS. Check the MoSPI report and label the measure. |
| **#MeToo milestone (15 Oct 2017, Milano / Burke)** | The cited CNN page returned HTTP 451 and could not be opened. The facts are widely known, but they were not verified here. |
| **"Sarojini Naidu in 1928" excluded as PD-US-expired only** | That file page was not opened. Only the in-046 half of this claim is confirmed (section 3). |
| **"in-046 needs a caution given the ex-Congress allegation"** | This is an editorial judgment, not a fact. The facts under it are confirmed: Naidu was INC president in 1925 and joined the 1930 Salt March. |

---

## 3. Confirmed

### DPDP Act and Rules
- **DPDP Rules: G.S.R. 846(E) dated 13 Nov 2025.** The Gazette (No. 760, Thursday 13 Nov 2025) says: Rules 1, 2 and 17–21 commence on publication; "Rule 4 shall come into force one year after"; Rules 3, 5–16, 22 and 23 commence "eighteen months after". Sources: Gazette PDF and HLC. Note that PIB says the Rules were notified on **14 Nov** 2025, and one law-firm alert gives 14 Nov 2026 and 14 May 2027. Print **13 Nov 2026** and **13 May 2027** (gazette date), and expect some sources to say 14.
- **No amendment shortening the runway gazetted as of 8 Oct 2026.** The Privacy Labs says this: MeitY's January 2026 proposal for a 12-month runway had not been gazetted. This is one source on a negative claim, so re-check the eGazette before publishing.
- **Definitions.** Act text: 'person' includes "an association of persons or a body of individuals, whether incorporated or not" (s.2(s)(v)); 'child' means under 18 (s.2(f)); s.9(3) bars "tracking or behavioural monitoring of children or targeted advertising directed at children".
- **No special categories of sensitive data.** Confirmed by HLC. In the Act, sensitivity appears only as a factor in the Significant Data Fiduciary definition.
- **Penalties (Act Schedule):** ₹250 crore (security safeguards), ₹200 crore (breach notice), ₹200 crore (children), ₹150 crore (Significant Data Fiduciary), ₹10,000 (s.15 duties), ₹50 crore (residual). The voluntary-undertaking item has no fixed cap.

### IT Rules 2026
- **G.S.R. 120(E), 10 Feb 2026, in force 20 Feb 2026.** The MeitY FAQ confirms every timeline in the claim: 3 hours for court or government orders (was 36); 7 days for grievances (was 15); 36 hours for Rule 3(1)(b) removal requests (was 72); 2 hours for intimate-image, impersonation and morphed content (was 24); user notice at least once every three months.
- **Synthetic media.** Business Today and the MeitY FAQ both confirm prominent labelling, provenance metadata and identifiers, tamper protection, and that AI non-consensual intimate imagery is prohibited.

### ECI, CJP and protests
- **s.29A registration** (ECI guidelines PDF): application within 30 days of formation; ₹10,000 demand draft; at least 100 members with electoral-roll extracts and affidavits; constitution with the s.29A(5) clause; contest within 5 years; delisting after 6 years of not contesting.
- **Delisting.** ECI Press Note ECI/PN/307/2025 (19 Sep 2025): 334 parties delisted on 9 Aug and 474 on 18 Sep, a total of **808**, and **359** more identified.
- **Wikipedia on the CJP:** "satirical political movement" whose name parodies the BJP; launched online 16 May 2026; indefinite Jantar Mantar protest from 20 Jun 2026.
- **Dharmendra Pradhan resigned 25 Jul 2026.** The cited aaj.tv page would not load (connection reset). Wikipedia confirms the date.
- **Jantar Mantar de-notified.** ThePrint, 12 Oct 2026: MHA via a Delhi Police standing order; sites Ramlila Ground, Burari Ground and CBD Ground. One source.
- **At least 5,000 detained, 10–13 Oct 2026, protests against the SIR.** BehanBox, one source. It notes Delhi Police has released no complete list. Attribute the figure.
- **FII documented** sexist, homophobic and transphobic slurs at CJP protests (3 Aug 2026).
- **Commons category** '2026 Delhi Jantar Mantar protests' sits under Cockroach Janta Party, Hunger strikes in India and National Eligibility cum Entrance Tests.

### FCRA, tax and entity law
- **FCRA s.3(1)(e)–(g)** and the definitions ('political party' includes an unregistered body that has set up candidates; 'foreign source' includes a citizen of a foreign country). Checked against the Act text.
- **INSAF v UoI.** LiveLaw, 6 Mar 2020: Rules 3(v) and 3(vi) read down to organisations "which have connection with active politics or take part in party politics".
- **FCRA Bill 2026 introduced 25 Mar 2026; Amendment Rules notified 22 Jun 2026.** PIB FAQ of 22 Jul 2026. The Rules cover purpose and State on the certificate, ₹10 lakh of foreign contribution used over the prior two years for renewal, and ultimate-donor plus website and social-media disclosure.
- **NRI contributions (Delhi HC, Arvind Khanna, Justice Suresh Kait).** LiveLaw, 1 Dec 2015. The court said it is "advisable to obtain his passport details". One source, and the judgment date is not given.
- **Income-tax Act 2025 in force 1 Apr 2026; Rules 2026 notified 20 Mar 2026.** TaxGuru, one source.
- **Societies Registration Act s.20** includes "the diffusion of political education". Checked against the Act text.

### POSH, POCSO, helplines, accessibility
- **SC, 15 Sep 2025 (*Yogamaya v State of Kerala*).** The SLP was dismissed, leaving in place the Kerala HC holding that political parties are not POSH workplaces.
- **Nipun Saxena v UoI** (judgment dated 11 Dec 2018): no publishing a victim's name or facts that could identify her, even remotely; rape and POCSO FIRs not to be put in the public domain.
- **NCW helplines:** 14490 (NCW 24×7), 112, 181, 1098, 1930.
- **RPwD Act.** Checked against the Act text: 'private establishment' includes society, association, trust and organisation; s.46 (service providers must comply within 2 years of the rules); s.89 (up to ₹10,000 for a first contravention; ₹50,000–₹5 lakh after that).
- **Draft RPwD (Amendment) Rules 2026, S.O. 3962(E) of 16 Jul 2026** (published 20 Jul): IS 17802 and Accessibility Conformance Reports; still a draft. IndiaLaw, one source.

### Women's reservation, census, law
- **131st Amendment Bill failed 17 Apr 2026:** 298 for, 230 against, 528 present and voting. The Delimitation and UT Laws Bills were withdrawn. Sources: LiveLaw, plus PRS for the bill status.
- **106th Amendment in force from 16 Apr 2026** (Law Ministry gazette). Reservation still needs delimitation after the next census. Sources: ETV Bharat and LiveLaw.
- **PRS:** delimitation is unlikely before 2029, so no women's reservation in the 2029 Lok Sabha election.
- **Assent on Thursday 28 Sep 2023.** Onmanorama says "Thursday" and is dated 29 Sep. 28 Sep 2023 was a Thursday.
- **Census 2027:** population enumeration in Feb 2027; reference date 1 Mar 2027 (1 Oct 2026 for snow-bound areas).
- **BNS s.63** keeps the marital exception for wives aged 18 or over. SC Observer says the batch is listed for final hearing on **18 November** before CJI Surya Kant's bench. The year 2026 is inferred from context.
- **Justice Verma Committee:** constituted 23 Dec 2012; reported 23 Jan 2013; recommended removing the marital-rape exception.
- **Brij Bhushan Sharan Singh and Vinod Tomar acquitted** (Monday 3 Aug 2026). The wrestlers will appeal.
- **Karnataka HC upheld the Menstrual Leave Policy 2025 under Article 21** (*Chandravva Hanamant Gokavi v State of Karnataka*). The DLA Piper note is dated 22 Apr 2026. The exact ruling date is not given.
- **SC dismissed the PIL for a national menstrual leave policy** (Onmanorama, 14 Mar 2026; CJI Surya Kant and Justice Bagchi). One source.

### Statistics
- **NCRB 2024** (secondary: CEDA Ashoka and FII agree): 4,41,534 crimes against women; rate 64.6 per lakh women; 1,20,227 cases of cruelty by husband or relatives; 29,536 rapes; Delhi 130.7. NCRB itself was not opened.
- **PLFS, Sep 2026:** female LFPR (CWS, 15+) 34.6% overall, 38.9% rural, 25.9% urban (DD News).
- **WEF GGGR 2026:** rank 131 of 145; score 64.5%; economic participation 41.2%; political empowerment ranked 67th. Telangana Today and Free Press Journal agree.
- **74 women MPs in 2024, down from 78 in 2019** (Scroll).
- **ADR (8 Mar 2026):** 390 of 4,123 MLAs (9%); 800 of 8,360 Lok Sabha candidates (9.6%).
- **Time Use Survey 2024:** 289 vs 88 minutes a day (unpaid domestic work, ages 6+); 140 vs 74 minutes (caregiving, ages 15–59).
- **Pew:** about nine in ten agree a wife must always obey her husband; 80% say men have more right to jobs when jobs are scarce. Fieldwork 17 Nov 2019 to 23 Mar 2020.
- **CSDS-KAS:** 6,122 respondents aged 15–34; 57% of young men and 40% of young women held patriarchal views.
- **Reuters DNR 2026, India:** 58% use YouTube for news; trust 39% (Reuters labels this "trust in news overall", which it measures as trusting most news most of the time); 52% avoid news; mainly English-speaking sample, not nationally representative.
- **IAMAI-Kantar:** 886M users in 2024; 47% women; 98% accessed Indic-language content. One source; the report itself was not opened.
- **Hindi is the mother tongue of 43.63% of Indians** (Census 2011).
- **About 14 lakh women panchayat members, 46% of the total.** President's Secretariat release, read directly.
- **MeitY on TikTok:** on 22 Aug 2025 (reported 23 Aug) the government said "no order has been issued to lift the ban".

### SEO
- **Google hreflang:** ISO 639-1 language codes, optional ISO 15924 script and ISO 3166-1 region codes. Google states that it "doesn't use hreflang or the HTML lang attribute to detect the language of a page".

### History and timeline claims
- **Phule school at Bhide Wada, January 1848, with Sagunabai.** The Leaflet does not name Sagunabai or give a month. Wikipedia gives "January 1848 … along with Sagunabai". The Leaflet confirms the SC memorial order (2 Nov 2023, inferred from "Thursday").
- **Fatima Sheikh dispute.** Alt News: Dilip Mandal's posts of 9 and 11 Jan 2025; Savitribai's letter of Oct 1856; M.G. Mali's books of 1980 and 1988; Alt News admits the records are thin.
- **Mathura.** *Tuka Ram v State of Maharashtra* was decided on 15 Sep 1978 (Indian Kanoon). Wikipedia wrongly says 1979.
- **Shah Bano:** 23 Apr 1985, s.125 CrPC.
- **Vishaka:** 13 Aug 1997; "alleged brutal gang rape of social worker"; quotes CEDAW Article 11 and the general recommendations.
- **Reclaim the Night:** 11:55 pm on 14 Aug 2024; body found 9 Aug; initiated by Rimjhim Sinha.
- **CEDAW:** adopted in New York 18 Dec 1979; in force 3 Sep 1981; India signed 30 Jul 1980 and ratified 9 Jul 1993.
- **IWD.** UN page: 19 March 1911; 'Bread and Peace' on the last Sunday of February 1917, which was 8 March in the Gregorian calendar; the UN has marked 8 March since 1975. A separate "recognised 1977" line refers to the 1977 GA resolution.
- **Iceland (NPR):** seventh strike since 1975 and the first full-day strike since then; more than 90% of women struck in 1975.
- **Ni Una Menos:** 3 Jun 2015, about 200,000 people in Buenos Aires (one source).
- **International Year of the Woman Farmer 2026:** FAO item of 2 May 2024. The resolution was adopted the same day by consensus.

### Images and licences
- **CC BY-SA 4.0:** credit, licence link, note of changes, no implied endorsement, ShareAlike under the same or a compatible licence; publicity, privacy and moral rights are not covered.
- **Unsplash and Pexels licences:** the claims match the licence pages.
- **Personality-rights template wording** is confirmed. `images-india.json` has exactly seven files with the warning: in-001, in-006, in-007, in-009, in-010, in-026 and in-032.
- **in-028:** Dimoria, Sonapur, Assam, 9 Apr 2026, CC BY-SA 4.0, no party symbols mentioned.
- **in-029:** Jantar Mantar protest against the Trans Amendment Bill, 29 Mar 2026, CC BY-SA 4.0.
- **in-061 and in-062:** Rahul Sapra, taken 25 Dec 2021. Frame 11980097 is captioned "Vocational trainers protest for equal pay in Delhi".
- **in-046** (Gandhi and Naidu, Agence Meurisse, 23 Apr 1930): public domain in its home country (author died more than 70 years ago) and PD-1996.
- **Wikidata Q60317447** (Kerala Women Wall): a human chain on 1 Jan 2019.
- **FII's waves explainer** is "Partner Content" (sponsored) and uses only US and global examples.

---

## 4. Timeline spot-check (`india-memory.json`, 10 milestones)

| Milestone | Checked against | Verdict |
|---|---|---|
| seneca-falls-1848 | NPS: 19–20 Jul 1848, Wesleyan Chapel, 68 women and 32 men signed, drafted by Stanton and the M'Clintocks | Confirmed |
| new-zealand-suffrage-1893 | DigitalNZ: signed 19 Sep 1893 by Lord Glasgow, 31,872 signatures, Sheppard and WCTU | Confirmed |
| aruna-asaf-ali-1942 | Mani Bhavan: flag hoisted at Gowalia Tank, lathi charge and tear gas | Confirmed. The page does not state 9 August; add a source that does (C15) |
| udhr-hansa-mehta-1948 | UN: Mehta is "widely credited" with "all human beings" | Confirmed. The entry already keeps the UN's hedge |
| sewa-1972 | SEWA: registered as a trade union on 12 Apr 1972, Ahmedabad, Ela Bhatt | Confirmed |
| chipko-1973 | Wikipedia: Mandal 24 Apr 1973; Gaura Devi led 27 women at Reni | Confirmed. The Reni date is 25 or 26 Mar 1974 (C14) |
| beijing-1995 | UN: 4–15 Sep 1995, 189 countries unanimously, 12 critical areas | Confirmed |
| pwdva-2006 | UN Women database: in force 26 Oct 2006; physical, sexual, verbal, emotional and economic abuse | Confirmed |
| pelicot-2024 | Boston Globe: 19 Dec 2024, Avignon, all 51 accused convicted | Confirmed |
| woman-life-freedom-2022 | RFE/RL: died 16 Sep 2022 aged 22; the UN mission found that physical violence in custody led to her "unlawful death" | Confirmed |

I also cross-checked these milestones against the claims above: phule-school-1848, first-iwd-1911, mathura-1983, cedaw-1979, shah-bano-1985, vishaka-1997, delhi-protests-2012, womens-reservation-act-2023, reclaim-the-night-2024, reservation-in-force-2026, local-reservation-1993 and woman-farmer-2026. Their dates and figures match the verified sources. **metoo-2017** could not be checked because the CNN page returned HTTP 451.

---

## 5. Notes for the site build

- **Laws (DPDP, IT Rules, FCRA, RPwD).** These claims rest on primary texts and are safe to print. Use the gazette date, 13 Nov 2025, for the DPDP Rules.
- **Statistics on secondary sources only.** The NCRB, NFHS-6 and PLFS annual figures should carry "as reported by" wording until the official tables are opened.
- **Fast-moving October 2026 events.** Attribute detentions, de-notification, CJP leadership and the Data Protection Board status to their source and date them.
- **Search budget.** No new web searches were possible. If you want second sources for the unverifiable items, the next run needs a fresh search budget.
