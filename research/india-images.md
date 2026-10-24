# India and South Asia photo library for culturalshockparty.com

Research date: 2026-10-24. This is a library of 62 licensed photographs. The files are in `research/images/india/` and the manifest is `research/images-india.json`. Every image was downloaded, opened and looked at before it was kept. Captions come from the source page metadata (the Commons file description, or the Unsplash or Pexels photo page). Where I have inferred something, the caption says so.

Related files: `founder.md` covers the independence and ex-Congress issue. `audience.md` §8 covers safeguarding and consent for images. This file does not repeat them.

---

## 0. Headline

1. **62 keepers.**
   - By source: 41 from Wikimedia Commons, 19 from Unsplash, 2 from Pexels.
   - By licence: 26 CC BY-SA 4.0, 3 CC BY-SA 3.0, 3 CC BY-SA 2.0, 2 CC BY 4.0, 1 CC BY 2.0, 5 CC0, 1 public domain, 19 Unsplash License, 2 Pexels License.
   - Nothing is NC/ND, premium/Plus, AI-generated or watermarked.
   - Every image is at least 1600px on the long edge, except in-023 (1615px).
2. **The strongest documentary sets:**
   - **RG Kar / Reclaim the Night, Kolkata 2024:** 10 images.
   - **Women at the 2020–21 farmers' protest:** 3 images.
   - **Pride with hand-made placards in Hindi and English:** 10 images.
   - **Shaheen Bagh, 2020:** 3 images.
   - **Women's Wall, Kerala 2019:** 2 images.
   - **Delhi, December 2012:** 2 images.
3. **Best hero candidates:**
   - **in-022:** Tikri stage on International Women's Day 2021. Black and white, with the speaker's back to the camera.
   - **in-009:** nurses holding candles, Kolkata 2024.
   - **in-021:** women making rotis for the langar at Tikri, 2020.
   - **in-010:** crowd under the Biswa Bangla Gate, black and white, CC0.
   - **in-042:** young women under a rainbow flag, Kolkata.
   - **in-030:** art students with bilingual placards at Jantar Mantar, 2015.
   - **in-047:** India Gate under a pink sky.
   - **in-028:** a woman showing her inked finger after voting, Assam 2026.
4. **Independence risk, handled.** I dropped every 2026 Jantar Mantar image from the NEET-leak protests. Commons files those under "2026 Delhi Jantar Mantar protests", which is cross-categorised with the **Cockroach Janta Party**. Wikipedia describes that movement as one that "parodies the ruling BJP" (see §5). The only historic Congress-adjacent image, in-046 (Gandhi and Sarojini Naidu, 1930), carries a usage caution.
5. **Gaps** (details in §3):
   - Pinjra Tod, Gulabi Gang and Kudumbashree: no usable images.
   - The 2023 wrestlers' protest: only images with organisational placards, or weak ones.
   - Women in Indian politics: no non-partisan images.
   - The October 2026 Jantar Mantar protests: nothing on Commons yet.
   - Candid, non-stock portraits of Gen Z women: few.
   - Disabled women: none.
   - North-east India: only one image (Meira Paibi sculptures).

---

## 1. Method and limits

**Sources and endpoints**
- **Wikimedia Commons** (MediaWiki API):
  - `list=categorymembers` over 40 categories, with up to 2 levels of subcategories. Examples: `Demonstrations and protests against the Delhi gang rape case`, `2024 Kolkata rape and murder protests`, `Shaheen Bagh protests`, `Vanitha Mathil`, `2023 Indian wrestlers' protest`, `International Women's Day in India`, `Meira Paibi`, `Dalit women`, `2020–2021 Indian farmers' protest`, the Pride categories for Delhi, Bengaluru, Kolkata, Bhubaneswar, Lucknow, Bhopal and Chennai, `Jantar Mantar (Delhi)`, `India Gate`, `Self Employed Women's Association`, `Chipko Andolan`, `Female students of India`, `Savitribai Phule` and `Sarojini Naidu`.
  - `list=search` over 46 file searches, for example "Gulabi Gang", "Pinjra Tod", "women farmers protest Tikri", "women voting India inked finger", "Aurat March" and "Jantar Mantar protest".
  - Metadata came from `prop=imageinfo&iiprop=url|extmetadata|size|mime`.
- **Unsplash:** 20 searches on the `napi/search/photos` JSON endpoint. I took photo details (author, location, EXIF, `premium`/`plus` flags) from `napi/photos/<id>` and dropped every `premium`/`plus` (Getty/Unsplash+) result.
- **Pexels:** one search page ("indian women protest") and four photo pages, read with WebFetch.

**Funnel**
- **Commons:** 5,181 files harvested. 3,672 passed the licence, size (1600px long edge or more) and type filters.
- **Commons screened:** I viewed 1,452 thumbnails in labelled contact sheets. These were all the movement and theme categories plus the supplementary searches. I sampled the large India Gate (1,127) and Jantar Mantar observatory (676) sets through Unsplash instead.
- **Second look:** 103 Commons candidates were downloaded at about 1920px and re-checked in larger grids, with crops of the bottom corners to look for watermarks.
- **Unsplash:** 97 candidates screened and 34 downloaded at 2400px.
- **Pexels:** 14 screened.

**Exclusion rules applied**
- **Licences:** only CC0, PD, CC BY, CC BY-SA, Unsplash License and Pexels License. That excluded 189 GODL-India files, plus EdictGov-India, GFDL-only, FAL and "No restrictions" files.
- **No identifiable minors as subjects.**
- **No partisan or candidate signage**, and no prominent party flags or organisational logos.
- **No graphic violence or victims.** I dropped every victim-portrait shrine from the RG Kar set and all of the Bangladesh 2024 street-violence set.
- **No AI images, no watermarks, nothing under 1600px.**

**Tooling limits (stated for transparency)**
- **Unsplash:** a direct `curl` to `unsplash.com/napi` returned HTTP 307 to `/.within.website` ("Authorization required"), which is a bot-protection challenge. I did not try to get past it. WebFetch returned the JSON. Images were then downloaded from the public `images.unsplash.com` CDN.
- **Wikimedia thumbnail sizes:** Wikimedia now rejects hotlinked thumbnails at non-standard widths. The allowed widths are 20, 40, 60, 120, 250, 330, 500, 960, 1280, 1920 and 3840 ([mediawiki.org Common thumbnail sizes](https://www.mediawiki.org/wiki/Common_thumbnail_sizes), last edited 20 Oct 2026, confidence H). The `download_url` values are therefore 1920px (landscape) or 1280px (portrait) thumbnails, and 1600px URLs will fail. Several downloads hit HTTP 429 rate limits and were retried.
- **Web-search budget:** it ran out near the end of the task. The context checks in §5 were done by fetching Wikipedia and Wikidata pages directly.

---

## 2. Coverage by theme

| Theme | IDs | Count | Notes |
|---|---|---|---|
| **RG Kar / Reclaim the Night, Kolkata (Aug–Oct 2024)** | in-001 to in-010 | 10 | Night crowd (Howrah), chanting women, "We Want Justice" vigil (CC0), pink graffiti gate, "WE DEMAND JUSTICE" spray paint, "Don't stop till they drop" (CC0), rickshaw puller with a Hindi placard, street meeting with megaphones, nurses with candles, Biswa Bangla Gate crowd (CC0). Content warning recommended. |
| **Delhi, December 2012** | in-011, in-012 | 2 | Raisina Hill / Rajpath, 22 Dec 2012, photographed by Nilanjana Roy (per Commons). 2592px originals. |
| **Take Back the Night, Bengaluru 2009** | in-013 | 1 | Early Indian "reclaim the street" action on International Women's Day (IWD). |
| **Shaheen Bagh (Jan 2020)** | in-014 to in-016 | 3 | Sit-in under tarps; Fatima Sheikh–Savitribai Phule street library; paper-boat heart (CC0). |
| **Women's Wall, Kerala (1 Jan 2019)** | in-017, in-018 | 2 | CC0 roadside chain and an Angamaly panorama. |
| **Meira Paibi (Manipur)** | in-019 | 1 | Sculptures only, no documentary photos. |
| **Women at the farmers' protest (2020–21)** | in-020 to in-022 | 3 | Tikri: tractor trolley on 8 March 2021, langar rotis, IWD stage (hero). |
| **Dalit feminism / anti-caste** | in-023 to in-025, in-035 | 4 | Asha Kowtal (named), Rajni Tilak (named), "JAI BHIM" placard (Delhi 2018), Pride placard naming casteism. |
| **Self-help groups / community meetings** | in-026, in-027, in-008 | 3 | Rural SHG meeting (2008), SHG circle in Cuddalore (2017), Kolkata street meeting (2024). |
| **Voting / democracy** | in-028 | 1 | Assam 2026, inked finger, no party symbols. |
| **Jantar Mantar protests** | in-029, in-030 | 2 | Trans Amendment Bill protest (29 Mar 2026, panorama); art students' bilingual placards (2015). |
| **International Women's Day** | in-031, in-020, in-022, in-013, in-044 | 5 | Mumbai CSMT lit purple (2016), plus the IWD protest images. |
| **Campus / students / Gen Z** | in-032, in-033, in-053, in-060, in-030, in-042 | 6 | Graduates, BHU medical students (backs), library study, students laughing (stock-like). |
| **Pride / queer** | in-034 to in-043 | 10 | Bhubaneswar 2018–19, Kolkata poster workshop 2019 ("मेरा GENDER में BENDER है", "My Body My Choice"), Delhi Queer Pride 2019, Kolkata pride (Unsplash, Dibakar Roy). |
| **South Asia context** | in-044, in-045 | 2 | Aurat March, Pakistan 2020 (Urdu placards); Bangladesh 2024 student protest. Context use only. |
| **Historic lineage** | in-046 | 1 | Gandhi and Sarojini Naidu, Salt March 1930 (PD). Use with caution. |
| **Delhi landmarks / streets** | in-047 to in-051 | 5 | India Gate ×2, Jantar Mantar observatory ×2, autos heading toward Rashtrapati Bhavan. |
| **Reading / writing** | in-052 to in-056, in-015 | 6 | Bengali book, library, ledger, reading on a kerb, reading in a sari, plus the Shaheen Bagh library. |
| **Everyday women / work** | in-057 to in-059, in-054 | 4 | Portraits, Haryana village women, Kerala woman farmer. |
| **Equal pay / workers** | in-061, in-062, in-007 | 3 | Pexels Delhi equal-pay protest (25 Dec 2021); rickshaw puller. |
| **Placards in Hindi** | in-007, in-030, in-037, in-040, in-062, in-036 (romanised), in-015 (Hindi/Urdu) | 7 | Met: Hindi and bilingual placards are well covered. |

**Timeline tags available:** 1930, 2009, 2012, 2015, 2016, 2018, 2019, 2020, 2021, 2024 and 2026. Other dated images (2008, 2014, 2017) can be used as needed.

**Orientation:** 49 landscape, 10 portrait and 3 square. **Identifiable people:** 50 of 62.

---

## 3. Gaps and what to do about them

| Gap | What I found | Suggested fix |
|---|---|---|
| **Pinjra Tod** (Delhi hostel-curfew campaign) | 4 Commons search hits; none passed the licence and size filters. | Ask the collective for photos with written permission, or commission illustration. |
| **Gulabi Gang** | One "hit" was unrelated (rural women in Madhya Pradesh). | Skip, or use typographic or illustrated treatment. |
| **Kudumbashree** (Kerala) | The category has 3 files, all too small or off-topic. | Contact Kudumbashree's state mission for press images, or use the SHG images (in-026, in-027). |
| **Indian wrestlers' protest 2023** | Only 5 files. The best (6 May 2023) shows prominent NFIW and AIMSS placards. NFIW and AIMSS are women's organisations; the placards fall under the "other organisations' logos" rule. The rest are weak crowd shots. | Leave out, or crop heavily. Treat as a text-only timeline entry. |
| **Women in Indian politics** (non-partisan) | Commons has politician portraits and party-rally photos (for example Al Jazeera's 2009 "Congress rally" set). All were excluded as partisan. | Use in-028 (voter) and the historic lineage instead; for legislators, use neutral illustration or data visualisation. |
| **October 2026 Jantar Mantar protests** | The Commons category covers June–July 2026 (NEET / CJP). I found nothing dated October 2026. | If CSP took part, commission its own photos with consent. |
| **Savitribai Phule / Fatima Sheikh portraits** | The Commons `Savitribai Phule` category holds memorial sites and statues. No high-resolution historic portrait passed. | Use in-015 (the library named after them) or a commissioned illustration. |
| **Gen Z women, candid and non-stock** | Unsplash has many posed or fashion portraits. Real youth-movement images exist mainly from Kolkata (Dibakar Roy) and Bangladesh. | Commission a consented CSP shoot at the first event. This is the biggest gap for the hero brand look. |
| **Disabled women; trans women outside Pride; Muslim women outside Shaheen Bagh; Adivasi women activists; North-east** | Thin or none. | Reach out to community photographers and get consent. |
| **Placards in Hindi, protest typography** | Met. | No action needed. |
| **Community meetings in urban youth settings** | Mostly rural SHG images. | Commission. |

---

## 4. Shortlists for the planned pages

| Page / use | Top picks | Why |
|---|---|---|
| **Home hero** | in-022, in-009, in-042, in-047 | Anonymous speaker before a vast crowd (in-022); warm, dignified candlelight (in-009); joy and youth (in-042); neutral Delhi landmark (in-047). |
| **About / Manifesto banners** | in-017, in-018 (thin), in-029 (thin), in-031, in-043 (texture) | Collective action, panoramic shapes, text-safe areas. |
| **What we do** (research, consciousness, action) | Research: in-053, in-052, in-015. Consciousness: in-030, in-037. Action: in-008, in-027, in-028. | Maps onto the mission chain: ideas → research → public consciousness → collective action. |
| **Case studies** | rg-kar-2024 (in-001 to in-010), farmers-protest-2020-21 (in-020 to in-022), shaheen-bagh-2020 (in-014 to in-016), womens-wall-2019 (in-017, in-018), delhi-2012 (in-011, in-012), pride-india (in-034, in-040, in-041), dalit-feminism (in-023, in-025), trans-rights-2026 (in-029), meira-paibi (in-019) | One lead image plus 1–3 supporting images each. |
| **Blog / Resources** | in-052, in-053, in-055, in-056, in-054 | Reading and writing, calm. |
| **Join** | in-039, in-037, in-060, in-061 | Making placards, peers, equal pay. |
| **Textures / backgrounds** | in-004, in-005, in-016, in-043, in-049, in-031 | Graffiti, paper boats, motion blur, plaster, purple light. Put text on solid "paper" panels, not directly on the busy texture (audience.md §7). |

---

## 5. Context checks that shaped the selection

| Claim | Source (date) | Confidence |
|---|---|---|
| The Commons category "2026 Delhi Jantar Mantar protests" is cross-categorised under *Cockroach Janta Party*, *Hunger strikes in India* and *National Eligibility cum Entrance Tests*. | [Commons category wikitext via API](https://commons.wikimedia.org/wiki/Category:2026_Delhi_Jantar_Mantar_protests) (fetched 2026-10-24) | H |
| The Cockroach Janta Party is "an Indian satirical political movement" (Wikidata Q139857349). Wikipedia says it parodies the ruling BJP, launched online on 16 May 2026, and ran an indefinite NEET-leak protest at Jantar Mantar from 20 June 2026. On 21 October 2026 its co-conveners were released after undertaking not to call protests at Jantar Mantar. | [Wikipedia: Cockroach Janta Party](https://en.wikipedia.org/wiki/Cockroach_Janta_Party) and [Wikidata Q139857349](https://www.wikidata.org/wiki/Q139857349) (both fetched 2026-10-24) | M (Wikipedia, fast-moving article) |
| Kerala Women Wall: "Women chain formed on 1 January 2019 at Kerala". | [Wikidata Q60317447](https://www.wikidata.org/wiki/Q60317447) (fetched 2026-10-24) | H |
| Sarojini Naidu was Indian National Congress president in 1925 and joined the 1930 Salt March. | [Wikipedia: Sarojini Naidu](https://en.wikipedia.org/wiki/Sarojini_Naidu) (fetched 2026-10-24) | H |
| The RG Kar case was the rape and murder of an on-duty doctor on 9 August 2024. The 4 September 2024 "Reclaim the Night" protest is described as non-political. | [Commons file description, in-001](https://commons.wikimedia.org/wiki/File:Reclaim_The_Night_-_Raat_Dakhal_Karo_-_Protest_Demonstration_Against_9th_August_2024_On_Duty_Doctor_Rape-Murder_Incident_Of_RG_Kar_Medical_College_And_Hospital_Kolkata_-_Howrah_2024-09-04_08590.jpg) (photo 4 Sep 2024) | M (uploader's description) |

---

## 6. Licence and attribution rules for the build

- **CC BY / CC BY-SA**
  - Credit the creator, link the licence, link the source, and say if you changed the image.
  - The credit must not imply that the licensor endorses you.
  - If you "remix, transform, or build on" a BY-SA image, your adaptation must carry the same or a compatible licence.
  - Publicity, privacy or moral rights may need separate permission.
  - Source: [CC BY-SA 4.0 deed](https://creativecommons.org/licenses/by-sa/4.0/) (fetched 2026-10-24, H).
  - Practical consequence: duotone, colour-graded or cropped versions of BY-SA photos should be published as CC BY-SA, with a credits line saying "cropped / colour-graded".
- **Commons personality-rights flag.** Seven keepers carry the flag: in-001, in-006, in-007, in-009, in-010, in-026 and in-032. The people shown may have rights that "legally restrict certain re-uses" without their consent ([Template:Personality rights](https://commons.wikimedia.org/wiki/Template:Personality_rights), fetched 2026-10-24, H). Use them editorially, as documentation of a public event. Never use them to suggest that the people support CSP.
- **Unsplash License.** Free commercial and non-commercial use; attribution is not required but is appreciated. You may not sell unmodified copies or build a competing image service ([unsplash.com/license](https://unsplash.com/license), fetched 2026-10-24, no version or date shown, H). There is no model release, so the same endorsement caution applies.
- **Pexels License.** Free use; attribution not required. Prohibited: showing identifiable people "in a bad or offensive light", implying endorsement, selling unaltered copies, redistributing on stock sites, and use as a trademark ([pexels.com/license](https://www.pexels.com/license/), fetched 2026-10-24, H).
- **Public domain.** in-046 is tagged PD-old-70 and PD-1996 on Commons. I **excluded** "Sarojini Naidu in 1928" because Commons tags it only `PD-US-expired`, which is a US-only status, so its worldwide public-domain status is unverified.
- **Credits page.** Generate it from `images-india.json` (`attribution_text`, `source_page`, `licence_url`). Put a short credit in each figure caption for BY / BY-SA images.

---

## 7. Safeguarding and editorial cautions (per image, also in the manifest)

- **RG Kar images (in-001 to in-010).** Add a content note: "Images from protests after the rape and murder of a doctor in Kolkata, August 2024."
  - No victim imagery is included. Victim-portrait shrines (`Doctor's Movement…`, `Porshi Photographer` series) were excluded.
  - in-003 and in-010 are CC0 and the safest to reuse freely.
- **Minors.** in-023 has a partly visible child at the bottom edge; crop it before use.
  - Excluded for prominent minors: c0496 (child at a Reclaim the Night protest), c0509, d0147/d0148 (children at a Delhi liquor-shop protest), Unsplash A4-_RXUrRnk (a girl with a banner), and similar.
- **Brands and logos.**
  - in-035: a Levi's billboard sits in the far background; crop it.
  - in-038: an organiser's roll-up banner is partly visible.
  - in-044: a "W: wage gap" placard carries a small logo.
  - Excluded for brand or organisational logos:
    - Unsplash fiLBwCD126w (a large "Bombay Dyeing" shutter);
    - BHQ_loIV8Q0 (Longines/Omega signage in Connaught Place);
    - c0010/c0011 (a CITU union banner);
    - c0615 (NFIW/AIMSS placards);
    - c3161/c3175 (farmers' organisation sashes and banners);
    - c1207 (Awadh Queer Pride logo banner);
    - c1909 (a student-organisation logo on a NEET-protest banner);
    - Pexels 11980097 (Delhi Vocational Trainers Association and Skill India banner).
- **Partisan context.**
  - Excluded:
    - c1906 (a "Dharmendra Pradhan must resign" placard);
    - d0145 ("Disrupt the Status Quo", from the CJP-linked 21 July 2026 protest, next to a satirical political couplet);
    - Al Jazeera's 2009 Congress and MNS rally photos.
  - Kept with caution: in-014 to in-016 (Shaheen Bagh was an anti-CAA/NRC protest), in-017 and in-018 (Women's Wall), in-045 (Bangladesh 2024) and in-046 (Gandhi and Naidu). Caption them as history of women-led action, not as CSP positions.
- **Named people.** in-023 (Asha Kowtal) and in-024 (Rajni Tilak) are named activists. Use them editorially and accurately, and ideally contact Asha Kowtal for consent.
- **Location inferences.**
  - in-041 to in-043: "Kolkata pride" comes from Unsplash tags, not the photographer's description.
  - in-045: Bangladesh is inferred from the flags and the Bengali "কোটা প্রথা" (quota system) placard.
  - in-061: Delhi is inferred from the same-day series.
  - Each caption says this where it applies.
- **Image hygiene.** Strip EXIF/GPS at build time (for example `magick -strip`, or Astro's image pipeline). Generate AVIF/WebP at 640, 960, 1280 and 1920 widths. Write alt text from the `caption` field, shortened.

---

## 8. Manifest schema

`research/images-india.json` is an array of 62 objects with these fields:

`id`, `local_file`, `source_page`, `download_url`, `licence`, `licence_url`, `author`, `attribution_text`, `title`, `caption`, `people_identifiable`, `orientation`, `tags[]`, `suggested_use[]`, `quality_notes`

It also has two convenience fields: `provider` (Wikimedia Commons, Unsplash or Pexels) and `source_key` (the internal screening ID).

`suggested_use` values are `hero`, `section-banner`, `card`, `gallery`, `portrait`, `texture`, `timeline:<year>` and `case-study:<slug>`. The case-study slugs are:

- `rg-kar-2024`
- `delhi-2012`
- `shaheen-bagh-2020`
- `womens-wall-2019`
- `farmers-protest-2020-21`
- `dalit-feminism`
- `self-help-groups`
- `meira-paibi`
- `pride-india`
- `trans-rights-2026`

---

## 9. Sources (all opened 2026-10-24)

- Wikimedia Commons API (categories, file metadata, wikitext): https://commons.wikimedia.org/w/api.php. Each image's `source_page` in the manifest is its Commons file page.
- Unsplash JSON endpoints: `https://unsplash.com/napi/search/photos?query=…` and `https://unsplash.com/napi/photos/<id>`. Each image's `source_page` is its Unsplash photo page.
- Pexels photo pages, listed in the manifest. Pexels search page: https://www.pexels.com/search/indian%20women%20protest/
- MediaWiki, Common thumbnail sizes (last edited 20 Oct 2026): https://www.mediawiki.org/wiki/Common_thumbnail_sizes
- CC BY-SA 4.0 deed: https://creativecommons.org/licenses/by-sa/4.0/
- Commons Template:Personality rights: https://commons.wikimedia.org/wiki/Template:Personality_rights
- Unsplash License: https://unsplash.com/license
- Pexels License: https://www.pexels.com/license/
- Wikipedia, Cockroach Janta Party: https://en.wikipedia.org/wiki/Cockroach_Janta_Party
- Wikipedia, Sarojini Naidu: https://en.wikipedia.org/wiki/Sarojini_Naidu
- Wikidata entities Q141174897, Q139857349, Q130259234, Q118190494 and Q60317447, via https://www.wikidata.org/w/api.php
