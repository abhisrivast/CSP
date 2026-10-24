# CSP website: licensed stock photo library (Unsplash + Pexels)

*Research date: 2026-10-24. Every source page was opened on that date.*
*Files:* previews (about 1600 px wide) are in `research/images/stock/` (102 JPGs, about 40 MB). The machine-readable manifest is `research/images-stock.json`.

## 1. Summary

- **102 keepers** against a target of 70: 73 from Unsplash and 29 from Pexels. There are 55 landscape, 43 portrait and 4 square images. All of them are at least **2,500 px on the long edge at source**. The shortest is Pexels 13231504 at 2500x1666. The longest is the Library of Congress 1963 scan at 15316x10204.
- **Licences used:** Unsplash License (72), Pexels License (29), and one image whose page says "Dual License: Public Domain & Unsplash License" (Smithsonian "Votes for Women" button). Nothing is under an NC or ND licence. No Unsplash+ or premium images are included: every Unsplash keeper's page reads "Free to use under the Unsplash License" and is not marked Unsplash+. No editorial-only images and none with unconfirmed licences.
- **About 300 candidates were screened.** Thumbnails were checked first on contact sheets. 123 were then downloaded at 1600 px and looked at in detail. Each keeper's source page was opened to confirm the licence, the photographer, and any location and date. Captions use only what the source page says. Where the page gives no location, the caption says "location not stated".
- **People:** 45 keepers show identifiable adults and 57 show none (crowds from behind, hands, signs, objects, textures). I excluded images where an identifiable minor is the subject. The next item lists the other exclusions.
- **Excluded on content grounds:**
  - candidate or party signage (for example "I'm with her", "Trump/Pence must go", a party-name placard, a red-star party-style placard)
  - prominent logos of other organisations (union flags on Westminster Bridge, animal-rights stickers on a megaphone, a "Steren" megaphone, a broadcaster microphone)
  - a sign spelling out "Klan" slurs
  - posed corporate "empowerment" stock
  - an image whose description calls it a "vector illustration"
- **Strongest coverage:** placards and hand-made signs, Latin American 8M marches, Black women at protests, South Asian women (protest, organising and research), suffrage and public-memory archives, and textures.
- **Biggest gaps:** feminist street politics in **Northern Ireland and Ireland** (searches for Repeal, Belfast protest, Dublin protest and Ireland protest turned up no usable feminist march). **India's 2024–2026 women's-safety protests**, the **South Asian diaspora in the UK**, **non-binary and disabled people**, **digital-culture or creator scenes**, and **zines** are also thin. See section 5.

## 2. Method and verification

1. **Search.** I used the Unsplash JSON search endpoint (`unsplash.com/napi/search/photos?...`). It redirects plain `curl` to a bot-challenge page (`/.within.website`, HTTP 307), so I did **not** try to get around it. I read it through WebFetch instead, and **skipped every result with `premium` or `plus` = true**. Pexels search pages also return 403 to `curl`, so they were read through WebFetch too. The image CDNs (`images.unsplash.com`, `images.pexels.com`) are open to `curl`.
   - Queries: women's march (2 pages), feminist protest, protest placard, megaphone protest, international women's day, India women protest, Black women protest, raised fist crowd, women suffrage, student protest, protest banner crowd, handmade protest sign, women mural, zine, Belfast mural, library reading woman, community meeting women, workshop group discussion, young women friends city, research notes desk, solidarity hands, filming protest phone, paper texture, torn paper, cardboard texture, Dublin protest, London protest women, street art feminist, Kolkata protest, 8M feminist march, making protest signs, South Asian women friends, Reclaim the Night, woman speaking at a rally, Repeal Ireland, Belfast protest.
   - Pexels queries: feminist protest, women protest, international women's day march, India protest, protest sign, Black women protest, zine, women workshop discussion, Indian women group, megaphone woman, student protest, library study, diverse young women friends, Ireland protest, women rally London.
2. **Visual review.** Every candidate went onto 600 px contact sheets. 123 shortlisted images were downloaded at 1600 px and viewed again in side-by-side sets. Busy crowd scenes were zoomed to read every sign.
3. **Licence and metadata check.** I opened each keeper's own photo page. For Unsplash I checked the licence line, the Unsplash+ status, location, publish date, camera and description. For Pexels I checked the "Free"/License link, photographer, location, original dimensions, upload date and camera. No page carried an AI-generated label. Most Unsplash keepers have camera data. Some texture shots don't (noted in the manifest).
4. **URL check.** Every `download_url` in the manifest returned HTTP 200 or 206 from the CDN on 2026-10-24.

Confidence: **high** for licence and photographer, because both were read from each photo page. **Medium** for captions where the source text is thin (I quote it rather than add to it). **Low** where noted: the Belfast "Welcome" mural page lists its location as "Adelaide SA, Australia" but describes Belfast. Verify that one before naming a place.

## 3. Licence terms (as read 2026-10-24)

| Licence | What it allows | What it forbids | Source |
|---|---|---|---|
| **Unsplash License** | "All images can be downloaded and used for free"; commercial and non-commercial use; "No permission needed"; attribution not required but appreciated | Selling images without significant modification; compiling images to replicate a similar or competing service. **Unsplash+ images fall under a separate licence and are excluded here.** | https://unsplash.com/license |
| **Pexels License** | "All photos and videos on Pexels can be downloaded and used for free"; "Attribution is not required"; modification allowed | "Identifiable people may not appear in a bad light or in a way that is offensive"; "Don't imply endorsement of your product by people or brands on the imagery"; no selling unaltered copies; no redistribution on other stock or wallpaper platforms; no use as part of a trademark or business name | https://www.pexels.com/license/ |
| **Public Domain + Unsplash (dual)** | Smithsonian object photo; the page states "Dual License: Public Domain & Unsplash License" | none | https://unsplash.com/photos/f4mjDFiL3uQ |

**What this means for a political movement.** These licences cover copyright only. They are **not model releases**. Many keepers show real protesters, and CSP is a political organisation. So:

1. Never caption or present people in these photos as CSP members, supporters or endorsers.
2. Prefer the 57 no-identifiable-people images for logo-adjacent, Join, donation and manifesto spots.
3. Use identifiable-people images in editorial contexts (case studies, blog, "the movement worldwide"), with the factual captions from the manifest.
4. Always print the credit line, even though it isn't required. It is good practice and ready-made in `attribution_text`.

## 4. Coverage by theme

Files are numbered `001`–`102`. Numbers below refer to the file prefix. An image can appear under more than one theme.

| Theme | Count | Keepers (file #) | Notes |
|---|---|---|---|
| **UK, Ireland & Northern Ireland** | 13 | 002, 003 (London Women's Day Walk 2025); 004 Glasgow 2020; 005 London "Queers & Feminists Demand Climate Justice"; 006 London trans-rights protest 2022; 007 Birmingham BLM 2021; 008 Glasgow 2026 megaphone; 009 Dublin 2019 "Our lives in your hands"; 010 West Belfast Peace Wall mural; 011 Belfast "Welcome" mural (location conflict); 083 Leeds Central Library; 093 LSE Library "Votes for Women" banner; 094 Birmingham Museums suffragette banner | Good UK street hero (002). **NI has murals only, with no feminist street politics. Ireland has a single image (009).** |
| **Marches, banners & big crowds** | 12 | 001 Zurich Feminist Strike 2019; 002; 012; 013; 016; 018; 022; 023; 034 DC abortion-justice panorama; 042; 051; 053 | Hero-grade wide frames: 001, 002, 034 (crop right side), 053 |
| **Placards & hand-made signs** | 30+ | 003, 014, 015, 017, 021, 024, 025, 030–033, 035–041, 043, 047–049, 056–060, 061–063, 065, 084 | The richest theme. Positive or affirming messages: 014 "Que no se te olvide que eres fuerte y valiosa", 021, 031, 032, 039, 048, 084 |
| **Latin America / Spanish-language 8M** | 10 | 012–021 (Mexico City, Querétaro, Puebla, Costa Rica, Cartagena; 012, 013 and 017 have no location on their pages) | Joyful and purple. Strong for the "Fourth Wave is global" message |
| **Megaphones & voice** | 6 | 008, 019, 044, 045, 046, (055 as voice) | 044 (DC 2020) is a joyful-defiant hero candidate |
| **Black women** | 15 | 007, 044, 046, 047, 048, 049, 050, 051, 052, 053, 060, 081, 082, 087, 089 | Mostly US, plus Birmingham UK. 050 shows elder Black women. 053 is the 1963 archive |
| **South Asian women** | 12 | 061–072 (Delhi labour and guest-teacher marches 2022; New Delhi Gen-Z protest scene 2026; Delhi 2018 "Jai Bhim" anti-manual-scavenging protest; Hingoli women's circle; Kolkata-tagged Pride; New Delhi library reader; women's meeting) | Good mix of protest, organising and research. **None from the 2024 women's-safety protests and none from the UK diaspora** |
| **East / Southeast Asian women** | 2 | 056, 057 (Women's March Kuala Lumpur 2019) | Thin |
| **Intergenerational & older women** | 6 | 013 (mother with baby), 016 "Por mi mamá, por mí", 050, 055 "I am old woman, hear me roar" (Brisbane 2021), 075 (older facilitator), 072 | 055 is a standout portrait |
| **Public memory & archives** | 8 | 010, 027 Barcelona "feministes i rebels!" mural, 053 March on Washington 1963 (LoC), 092 Amsterdam suffrage street propaganda, 093, 094, 095 Smithsonian button, 089 | 053 is 15k px. Excellent for the Manifesto or History pages |
| **Murals & street art** | 9 | 010, 011, 020, 026 "Ni una menos" (Zürich 2026), 027, 029 "Feminists Resist", 089 Flint mural, 090, 091 pavement stencils | 026 has generous space for headline text |
| **Research, reading & libraries** | 8 | 059 "Defend Acad Freedom", 060 "Armed with a mind", 071, 079, 080, 081, 082, 083 | Mix of documentary (071) and staged (081) |
| **Workshops, organising & community** | 6 | 066, 072, 073 sticky-note workshop, 074 banner-making, 075 flipchart workshop, 076 art workshop | Mostly generic. Real organising imagery from CSP itself would beat these |
| **Zines, collage & making** | 4 | 074, 077 zines, 078 collage pinboard, 084 crochet "does it bring you joy" | **Thin. Only one real zine photo** |
| **Solidarity hands** | 4 | 009, 085, 086, 087 | No faces, so safe anywhere |
| **Digital witness / media** | 3 | 028 Kyiv "Women lives matter" with TV camera; 054 phone filming, Sydney 2020; 042 raised phones | **Thin** |
| **Queer & trans inclusion** | 3 | 005, 006, 068 | No explicitly non-binary-identified subjects |
| **Friends / joy portraits** | 5 | 069, 070, 088, (084), (055) | 088 is posed stock (RDNE). Use sparingly |
| **Textures** | 7 + 3 | 096 cardboard, 097 crumpled paper, 098 kraft, 099 torn posters, 100 torn strips, 101 lined paper, 102 poster wall; plus 020, 026, 029 usable as graphic backgrounds | Enough for a "placard / zine" visual system |

**Hero shortlist** (wide or high-res, on-message):
- 002 London "Feminist Strike for Liberation" 2025: best UK hero.
- 001 Zurich Feminist Strike 2019.
- 053 March on Washington 1963: public memory.
- 055 Brisbane "I am old woman, hear me roar".
- 032 floral "Feminist" sign: a positive tone, good for mobile.
- 044 DC megaphone chant 2020.
- 030 "Protect Women's Rights" (B&W, portrait).
- 012 purple flags (portrait).
- 034 DC panorama, but only after cropping out the party placard and the "Vote" sign on the right.

**Crop or caution flags** (also in each `quality_notes`):
- 003: a lingerie-shop sign at the top. Crop the top quarter.
- 034: a placard with a party name and a "Don't Texas Virginia – Vote" sign right of centre.
- 033 and 038: mild expletives on the signs.
- 011: the location metadata conflicts with the description.
- 064: the source is a PNG, and a police barricade and litter are in frame.
- 088: posed stock.
- 102 and 078: contain third-party printed ephemera. Use them as blurred textures only.
- 015: the slogan is about femicide. Give it context.
- Small product logos appear on 035 (sportswear), 044/045 (megaphone brand), 046 (sunscreen bottle) and 059 (cap). All are small, but check them at hero size.
- 075 was uploaded by the UK charity Centre for Ageing Better, but its page gives no location. Don't caption it as UK.

## 5. Gaps and how to fill them

1. **Northern Ireland and Ireland feminist action.** No Unsplash or Pexels search returned a usable Repeal the 8th, Reclaim the Night Belfast, Rally for Choice or Stormont image. Look on **Wikimedia Commons** next, filtering for CC0, PD, CC BY or CC BY-SA and checking each file page. Better still, commission or shoot CSP's own events, and ask local photographers for CC BY images.
2. **India 2024–2026.** The search "kolkata protest" returned festival crowds. There was nothing from the women's-safety protests (for example "Reclaim the Night" in Kolkata). Again, try Wikimedia Commons under CC licences and verify each file page.
3. **The South Asian diaspora in the UK and Black women in Ireland and NI** are not represented. Only Birmingham BLM (007) covers the UK side.
4. **Non-binary people, disabled people and Gen Alpha** are missing. I excluded minors by rule. One candidate, a woman in a wheelchair protesting in Vancouver (Pexels 14136494), was found but not reviewed. It is worth checking next.
5. **Digital culture and creators:** people filming, streaming, making reels, or podcasting at events. Only 054 and 028 cover this.
6. **Institutional accountability settings** have no clean images: Stormont, the Dáil/Leinster House, Westminster, the Lok Sabha, courts. The Westminster candidate was dropped because of union flags.
7. **Zines and DIY print culture:** only 077 is a real zine photo. More self-shot, flat-lay photos of CSP's own zines would be the best fix.
8. **Recency:** 24 of 102 keepers were published in 2025–2026. Most are from 2019–2022. Signage from US abortion-rights protests (2021–2023) is common. Balance it with UK, Ireland and India material as it becomes available.

## 6. Practical notes for the build

- **Download:** use each manifest `download_url`.
  - Unsplash: `urls.raw` + `&w=2400&q=80&fm=jpg`. `original_url` without the `w` parameter gives full resolution.
  - Pexels: `images.pexels.com/photos/<id>/pexels-photo-<id>.jpeg` is the original. `web_url_2400` is a 2400 px compressed version.
  - Self-host the files on Netlify (both licences allow copying). Also generate WebP or AVIF at 640, 1024, 1600 and 2400 px.
- **Credits:** print `attribution_text` on a /credits page and in figure captions. Keep `source_page` in the CMS so each credit links back.
- **Captions:** use `caption`, which is factual and taken from the source. **Never** add "CSP supporters", invented dates, or invented places.
- **Alt text:** start from `title` plus the main visible sign text in `caption`.
- **Re-verification:** licences can change. Re-check the source pages before launch and keep this file's date (2026-10-24) as the verification record.

## 7. Full index of keepers

The table below is generated from `images-stock.json`. In the People column, Y means identifiable people are visible.

| # | File | Title | Credit | Licence | Source page | Size | People | Suggested use |
|---|---|---|---|---|---|---|---|---|
| 001 | `001-zurich-feminist-strike-2019.jpg` | Feminist Strike banner, Zurich | Photo by Claudio Schwarz on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/x2PhIZuKqTI) | 7952x5304 | Y | hero, section-banner, case-study:street-politics |
| 002 | `002-london-feminist-strike-for-liberation-2025.jpg` | Feminist Strike for Liberation, London | Photo by Serra Utkum İkiz on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/o8V9a-z4R5U) | 4288x3216 | Y | hero, section-banner, case-study:street-politics |
| 003 | `003-london-women-strike-sign-2025.jpg` | Women Strike for Liberation sign, London | Photo by Serra Utkum İkiz on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/T-nyielscPM) | 3216x4288 | N | card, gallery, portrait |
| 004 | `004-glasgow-feminist-protest-2020.jpg` | Feminist protest, Glasgow | Photo by Ipanemah Corella on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/people-protesting-on-the-street-3929141/) | 5321x4000 | Y | section-banner, card, gallery, case-study:street-politics |
| 005 | `005-london-queers-feminists-climate-justice.jpg` | Queers & Feminists Demand Climate Justice, London | Photo by Yelena Odintsova on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/crowd-holding-climate-change-protest-banner-10204142/) | 3024x4032 | Y | card, gallery, portrait, case-study:street-politics |
| 006 | `006-london-trans-rights-protest-2022.jpg` | Trans Rights Protest, London | Photo by Karollyne Videira Hubert on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/ikeHaXyiMwI) | 5760x3840 | Y | card, gallery |
| 007 | `007-birmingham-black-lives-matter-2021.jpg` | Black Lives Matter protest, Birmingham | Photo by Luke Mears on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/a-group-of-people-protesting-on-the-street-10082839/) | 2773x4160 | Y | card, gallery, portrait |
| 008 | `008-glasgow-megaphone-crowd-2026.jpg` | Megaphone above the crowd, Glasgow | Photo by Ross Sneddon on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/3VbZbV6a9U0) | 3758x5637 | N | card, section-banner, portrait |
| 009 | `009-dublin-hands-our-lives-in-your-hands.jpg` | 'Our lives in your hands', Dublin | Photo by Paddy O Sullivan on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/person-wearing-blue-long-sleeved-shirt-while-raising-hands-2369217/) | 6000x4000 | N | card, section-banner, gallery |
| 010 | `010-belfast-peace-wall-mural.jpg` | Peace Day mural on the Peace Wall, West Belfast | Photo by K. Mitch Hodge on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/hw0vL2Eg_Xk) | 4086x2553 | N | section-banner, case-study:public-memory |
| 011 | `011-belfast-welcome-mural-corner.jpg` | 'Welcome to Belfast' murals | Photo by Chloë Forbes-Kindlen on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/-6i28u0NijY) | 4244x2824 | Y | section-banner, card |
| 012 | `012-purple-flags-feminist-rally.jpg` | Purple flags at a feminist rally | Photo by Norma Gabriela Galván on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/people-holding-purple-and-white-banner-12627278/) | 3648x5472 | Y | hero, section-banner, gallery |
| 013 | `013-march-of-women-purple-flags.jpg` | March of Women | Photo by Anya Juárez Tenorio on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/march-of-women-16110854/) | 4000x2667 | Y | section-banner, card, gallery |
| 014 | `014-mexico-city-8m-fuerte-y-valiosa.jpg` | 'Que no se te olvide que eres fuerte y valiosa', Mexico City | Photo by Noemí Jiménez on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/feminist-protest-in-mexico-city-march-for-equality-31228093/) | 3456x5184 | N | card, portrait, gallery |
| 015 | `015-mexico-city-si-falto-manana.jpg` | 'Si falto mañana, quemen todo', Mexico City | Photo by Viridiana Rivera on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/young-woman-with-a-banner-if-im-missing-tomorrow-burn-everything-at-a-rally-on-womens-day-15903624/) | 2861x4291 | Y | card, portrait, gallery |
| 016 | `016-mexico-city-por-mi-mama-por-mi.jpg` | 'Por mi mamá, por mí', Mexico City | Photo by Beca Pérez on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/iv0duRl1ve8) | 3556x2000 | Y | section-banner, card, gallery |
| 017 | `017-vivas-y-libres-8m-sign.jpg` | 'Vivas y libres #8M' sign | Photo by sury Onaly on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/international-women-s-day-protest-with-sign-31136651/) | 2400x3000 | N | card, portrait, gallery |
| 018 | `018-queretaro-8m-march-2024.jpg` | 8M march, Querétaro | Photo by Michelle Celedon on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/_MQ6ae6ThK0) | 4496x3000 | Y | section-banner, card, gallery |
| 019 | `019-puebla-woman-megaphone-bw.jpg` | Woman with megaphone, Puebla | Photo by Arturo Rodríguez Ortega on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/brunette-woman-sitting-holding-megaphone-25212997/) | 2869x4303 | Y | portrait, card |
| 020 | `020-costa-rica-8m-vivas-nos-queremos.jpg` | 'Vivas nos queremos' chalk, Costa Rica | Photo by Andrea Chacón on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/9u11Sb2mMKc) | 4096x2731 | N | section-banner, card, texture |
| 021 | `021-cartagena-aqui-mandan-las-mujeres.jpg` | 'Aquí las que mandan son las mujeres', Cartagena | Photo by Sergio Aguirre on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/PcwbaKnD1z4) | 3972x5962 | N | card, portrait, gallery |
| 022 | `022-berlin-8-march-2020-yes-means-yes.jpg` | Women's march, Berlin, 8 March 2020 | Photo by Raquel García on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/Hdi1EvBiRfI) | 3604x2193 | Y | card, gallery |
| 023 | `023-stockholm-the-future-is-female.jpg` | 'The Future is Female', Stockholm | Photo by Lindsey LaMont on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/hUWINRMPvsc) | 5472x3648 | N | card, section-banner, gallery |
| 024 | `024-le-feminisme-na-jamais-tue-bw.jpg` | 'Le féminisme n'a jamais tué personne' | Photo by Jean Marc Bonnel on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/young-woman-with-feminist-banner-16098103/) | 3054x3713 | Y | portrait, card |
| 025 | `025-educate-your-son-sign-2026.jpg` | 'Educate your son!!!' | Photo by Andie K on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/mr2UtzcjHtA) | 4024x6024 | N | card, portrait, gallery |
| 026 | `026-zurich-ni-una-menos-graffiti.jpg` | 'Ni una menos' graffiti, Zürich | Photo by Dave Meckler on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/ON_W3CJ9ZNU) | 8256x5504 | N | section-banner, texture, card |
| 027 | `027-barcelona-feministes-i-rebels-mural.jpg` | 'Feministes i rebels!' mural, Barcelona | Photo by Red Dot on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/qRg7gxhDaR0) | 4032x3024 | N | section-banner, card, case-study:public-memory |
| 028 | `028-kyiv-women-lives-matter-bw.jpg` | 'Women lives matter', Kyiv | Photo by Rad Pozniakov on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/eBYQfYGE8js) | 3130x2075 | Y | card, gallery, case-study:digital-witness |
| 029 | `029-feminists-resist-wheatpaste.jpg` | 'Feminists Resist' wheatpaste | Photo by Claudio Schwarz on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/xg79IrCrSA8) | 5304x7952 | N | card, texture, portrait |
| 030 | `030-dc-protect-womens-rights-bw.jpg` | 'Protect Women's Rights', Washington DC | Photo by Gayatri Malhotra on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/eIGgOPbMDgA) | 3806x5709 | N | portrait, card, hero |
| 031 | `031-dc-never-underestimate-the-power-of-women.jpg` | 'Never underestimate the power of women!' | Photo by Gayatri Malhotra on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/D3qHSJj_TtA) | 5490x3660 | Y | card, section-banner, gallery |
| 032 | `032-dc-floral-feminist-sign.jpg` | Floral 'Feminist' sign | Photo by Gayatri Malhotra on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/efx6cLlkB7Y) | 3635x5453 | N | hero, portrait, card |
| 033 | `033-dc-doing-feminist-shit-sign.jpg` | 'I can't talk right now, I'm doing feminist shit' | Photo by Gayatri Malhotra on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/FRk2RM2YSDg) | 3621x5431 | N | card, portrait, gallery |
| 034 | `034-dc-rally-for-abortion-justice-2021.jpg` | Rally for Abortion Justice, Washington DC | Photo by Gayatri Malhotra on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/gIao33Ki3jQ) | 5687x3791 | Y | hero, section-banner, case-study:reproductive-rights |
| 035 | `035-supreme-court-men-should-not-make-laws.jpg` | 'Men should not be making laws about women's bodies' | Photo by Gayatri Malhotra on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/7V_NdrgZYEM) | 4000x6000 | N | card, portrait |
| 036 | `036-denver-womens-rights-are-human-rights.jpg` | 'Women's rights are human rights', Denver | Photo by Colin Lloyd on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/tQI4mhH60PE) | 3388x5090 | N | card, portrait, gallery |
| 037 | `037-dc-womens-march-smash-the-patriarchy-2019.jpg` | 'Smash the Patriarchy', DC Women's March | Photo by chloe s. on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/XwrDrY9hjrI) | 3024x4032 | N | card, portrait |
| 038 | `038-young-pretty-feminist-sign.jpg` | 'Young, pretty & feminist' sign | Photo by Barbara Burgess on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/FJ4AN2J1MVg) | 6720x4800 | N | card, gallery |
| 039 | `039-voting-is-my-superpower-sign.jpg` | 'Voting is my superpower' | Photo by Barbara Burgess on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/3uiVo7ala9k) | 4800x6720 | N | card, portrait, case-study:institutional-accountability |
| 040 | `040-my-body-my-choice-bw.jpg` | 'My body, my choice' | Photo by Lauren Mitchell on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/wh2TS_gxhpw) | 4024x6048 | N | card, portrait, case-study:reproductive-rights |
| 041 | `041-nyc-we-wont-go-back-no-bans-on-our-bodies.jpg` | 'We won't go back - No bans on our bodies', New York | Photo by Emma Guliani on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/women-on-feminism-related-protest-12328572/) | 4000x6000 | N | card, portrait, gallery, case-study:reproductive-rights |
| 042 | `042-whatever-youre-not-changing-bw.jpg` | 'Whatever you're not changing, you are choosing' | Photo by Corey Young on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/LB9dklK0xb0) | 7952x5304 | Y | section-banner, card |
| 043 | `043-denver-call-out-injustice.jpg` | 'Call out injustice every single time', Denver | Photo by Colin Lloyd on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/Gs9vSQGD_K4) | 3600x5408 | N | card, portrait |
| 044 | `044-dc-megaphone-chant-2020.jpg` | Chanting with a megaphone, Washington DC | Photo by Clay Banks on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/_2Y4C5ZnYs4) | 3600x2880 | Y | hero, card, portrait |
| 045 | `045-denver-raised-fists-megaphone.jpg` | Raised fists and megaphone, Denver | Photo by Colin Lloyd on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/gcfvs__17dw) | 3712x5568 | N | card, portrait, gallery |
| 046 | `046-megaphone-speaker-never-again.jpg` | Young woman speaking through a megaphone | Photo by Alfo Medeiros on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/a-woman-in-black-shirt-using-a-megaphone-12149144/) | 4657x3099 | Y | card, portrait, gallery |
| 047 | `047-listen-to-black-women.jpg` | 'Listen to black women' | Photo by Sacha Verheij on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/-m3hjcTjgV8) | 2848x4272 | Y | card, portrait |
| 048 | `048-thank-you-black-women.jpg` | 'Thank You Black Women' | Photo by Gayatri Malhotra on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/gwUDjZkV0mU) | 3855x5783 | N | card, portrait |
| 049 | `049-dc-i-wake-up-black.jpg` | 'I wake up Black', Washington DC | Photo by Clay Banks on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/QWHBdUQYv18) | 2668x3600 | Y | card, portrait |
| 050 | `050-elder-black-women-raised-fist-bw.jpg` | Women with raised fist (B&W) | Photo by Alfo Medeiros on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/women-on-a-protest-12139248/) | 6048x4024 | Y | card, gallery, portrait |
| 051 | `051-brooklyn-bridge-raised-fists.jpg` | Raised fists on Brooklyn Bridge | Photo by Life Matters on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/protesters-with-arms-raised-4613902/) | 4955x3303 | N | section-banner, card, gallery |
| 052 | `052-dc-raised-fists-bw.jpg` | Raised fists (B&W), Washington DC | Photo by Gayatri Malhotra on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/WzfqobnrSVc) | 4000x6000 | N | card, portrait, texture |
| 053 | `053-march-on-washington-1963.jpg` | Civil rights march on Washington, 1963 | Warren K. Leffler, 1963 (U.S. News & World Report Collection, Library of Congress), via Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/WzPxmB_tRlw) | 15316x10204 | Y | hero, section-banner, case-study:public-memory |
| 054 | `054-sydney-phone-filming-protest-bw.jpg` | Filming the protest, Sydney | Photo by Jacky Zeng on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/BwewoWsWlXI) | 5184x3456 | N | section-banner, card, case-study:digital-witness |
| 055 | `055-brisbane-i-am-old-woman-hear-me-roar.jpg` | 'I am old woman, hear me roar', Brisbane | Photo by Stewart Munro on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/-8cmjgekFLY) | 4495x6742 | Y | portrait, card, hero |
| 056 | `056-kuala-lumpur-we-will-not-be-silenced.jpg` | 'We will not be silenced', Kuala Lumpur | Photo by Michelle Ding on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/LXUR8IWa0i0) | 6000x4000 | Y | card, section-banner, gallery |
| 057 | `057-kuala-lumpur-boys-held-accountable.jpg` | 'Boys will be held accountable', Kuala Lumpur | Photo by Michelle Ding on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/VEpNYUq0vJg) | 6000x4000 | N | card, gallery, case-study:institutional-accountability |
| 058 | `058-women-life-freedom-vancouver.jpg` | 'Women Life Freedom' placard, Vancouver | Photo by Sima Ghaffarzadeh on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/a-person-holding-women-life-freedom-placard-14136491/) | 5184x3456 | N | card, section-banner, gallery |
| 059 | `059-defend-academic-freedom-philippines-bw.jpg` | 'Defend Acad Freedom' sign | Photo by Mico Medel on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/activist-holds-sign-defending-academic-freedom-39659750/) | 4869x3245 | N | card, gallery, case-study:research-to-action |
| 060 | `060-armed-with-a-mind-sign.jpg` | 'Armed with a mind' | Photo by PNW Production on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/a-poster-holding-a-poster-8377277/) | 6048x4024 | N | card, section-banner |
| 061 | `061-india-equal-pay-for-equal-work.jpg` | 'Equal pay for equal work' march | Photo by Rahul Sapra on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/close-up-photo-of-a-woman-holding-a-placard-11572418/) | 3983x3984 | Y | card, section-banner, case-study:labour-rights |
| 062 | `062-india-we-want-job-security.jpg` | 'We want job security', India | Photo by Rahul Sapra on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/close-up-photo-of-a-woman-holding-a-placard-11572425/) | 3936x3935 | Y | card, portrait, gallery, case-study:labour-rights |
| 063 | `063-india-we-want-policy-bw.jpg` | 'We want policy' (B&W) | Photo by Rahul Sapra on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/grayscale-photo-of-people-holding-placards-13612790/) | 3810x3810 | Y | card, gallery, case-study:institutional-accountability |
| 064 | `064-new-delhi-gen-z-protest-scene-2026.jpg` | Gen-Z protest scene, New Delhi | Photo by Shantum Singh on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/gen-z-protest-scene-in-new-delhi-india-38727133/) | 6960x4640 | Y | card, section-banner, gallery |
| 065 | `065-delhi-jai-bhim-protest-2018.jpg` | 'Jai Bhim', Delhi 2018 | Photo by Wandering Indian on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/vIfL4bvN-Ng) | 2516x3887 | Y | card, portrait, case-study:south-asia |
| 066 | `066-hingoli-women-circle.jpg` | Women's circle, Hingoli, Maharashtra | Photo by amol sonar on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/1KntWz6Hpgc) | 6720x4480 | Y | section-banner, card, case-study:south-asia |
| 067 | `067-group-of-women-in-saris.jpg` | Women in saris, group portrait | Photo by Ian Taylor on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/H5AFlvEEkp4) | 5616x3744 | Y | card, gallery |
| 068 | `068-kolkata-pride-march-joy.jpg` | Pride march joy (tags: Kolkata) | Photo by Dibakar Roy on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/DP2CNN63xBA) | 5400x3600 | Y | card, gallery |
| 069 | `069-two-young-women-friends-delhi.jpg` | Two young women, friends | Photo by Ashwini Chaudhary(Monty) on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/k83qsiDlAb8) | 5176x4000 | Y | portrait, card |
| 070 | `070-women-hijab-and-saree-street.jpg` | Women in hijab and saree | Photo by Rina Islam on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/a-group-of-women-wearing-hijab-and-saree-while-standing-on-the-street-13231504/) | 2500x1666 | Y | card, gallery |
| 071 | `071-new-delhi-library-reader.jpg` | Student reading in a library, New Delhi | Photo by Shantanu Kumar on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/student-reading-a-book-16504588/) | 6000x4000 | Y | card, section-banner, case-study:research-to-action |
| 072 | `072-womens-meeting-in-a-room.jpg` | Women's meeting | Photo by Frederick Shaw on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/fvDYzuV3J94) | 6080x4053 | Y | card, section-banner, case-study:research-to-action |
| 073 | `073-sticky-notes-workshop-milan.jpg` | Idea-generation workshop, Milan | Photo by FORTYTWO on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/MDu-53qRVr4) | 6016x4016 | N | card, section-banner |
| 074 | `074-making-a-protest-banner-milan.jpg` | Making a banner, Milan | Photo by Edoardo Ceriani on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/KkOt_xCY9Z8) | 2670x4000 | N | card, portrait, texture |
| 075 | `075-community-workshop-flipchart.jpg` | Community workshop with flipchart | Photo by Centre for Ageing Better on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/people-brainstorming-in-office-13804489/) | 5472x3648 | Y | card, section-banner |
| 076 | `076-two-women-art-workshop.jpg` | Two women in an art workshop | Photo by Karola G on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/two-women-in-an-art-workshop-7283199/) | 6720x4480 | Y | card, gallery |
| 077 | `077-zines-on-a-table.jpg` | Zines and notebooks on a table | Photo by tommao wang on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/hhajZMO_tOg) | 3650x5476 | N | card, texture |
| 078 | `078-collage-pinboard.jpg` | Collage pinboard | Photo by Brooke Balentine on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/A-tyzwJLUCg) | 5385x8074 | N | texture, card, section-banner |
| 079 | `079-notes-fountain-pen.jpg` | Notetaking | Photo by David Travis on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/5bYxXawHOQg) | 4608x3072 | N | card, section-banner |
| 080 | `080-writing-in-notebook-desk.jpg` | Writing in a notebook | Photo by Thought Catalog on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/505eectW54k) | 6000x4000 | N | card, section-banner |
| 081 | `081-library-card-catalogue-reader.jpg` | Reading among the card catalogues | Photo by Tima Miroshnichenko on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/woman-studying-at-a-table-with-books-6549372/) | 3998x5997 | Y | portrait, card, case-study:research-to-action |
| 082 | `082-reading-in-a-book-lined-room.jpg` | Young woman reading in a library | Photo by Emmanuel Black on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/q6LuY58jbqY) | 4237x5296 | Y | portrait, card |
| 083 | `083-leeds-central-library-interior.jpg` | Leeds Central Library | Photo by Michael D Beckwith on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/historic-interior-of-leeds-central-library-37423357/) | 5184x3456 | N | section-banner, card |
| 084 | `084-crochet-does-it-bring-you-joy.jpg` | 'But, does it bring you joy?' crochet sign | Photo by George Pagan III on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/4NrHBxhHYps) | 3024x4032 | N | card, portrait |
| 085 | `085-stacked-hands-sweaters.jpg` | Hands piled together | Photo by Hannah Busing on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/Zyx1bK9mqmA) | 5040x3360 | N | card, section-banner |
| 086 | `086-clasped-hands-overhead.jpg` | Hands holding hands | Photo by Marlis Trio Akbar on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/eMB60hNHFL8) | 6000x4000 | N | card, section-banner, texture |
| 087 | `087-hands-star-against-sky.jpg` | Hands form a star | Photo by Iwaria Inc. on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/1Wr4U5yRw2M) | 3712x5568 | N | portrait, card |
| 088 | `088-three-women-hijabs-embrace.jpg` | Three women in hijabs embrace | Photo by RDNE Stock project on Pexels | Pexels License | [Pexels](https://www.pexels.com/photo/close-up-photo-of-beautiful-women-wearing-hijabs-4911567/) | 4775x3183 | Y | card, portrait |
| 089 | `089-flint-mural-woman-portrait.jpg` | Mural of a woman, Flint | Photo by Bruno Guerrero on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/V5wNi8HdOQU) | 5909x3939 | N | section-banner, card |
| 090 | `090-mural-womens-faces-roses.jpg` | Mural of women's faces and roses | Photo by Concha Mayo on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/mERI2bNDQxY) | 3510x2430 | N | section-banner, texture, card |
| 091 | `091-pavement-feminist-stencils.jpg` | Feminist stencils on the pavement | Photo by Andie K on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/96gQo5C7UHE) | 3402x4536 | N | card, texture, portrait |
| 092 | `092-amsterdam-suffrage-street-propaganda.jpg` | Suffrage street propaganda, Amsterdam | Amsterdam City Archives on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/cJaFBzuU2K0) | 3906x2596 | Y | section-banner, card, case-study:public-memory |
| 093 | `093-lse-votes-for-women-banner.jpg` | 'Votes for Women' banner (LSE Library) | LSE Library on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/dsz58CLdAwo) | 5000x3230 | N | card, section-banner, case-study:public-memory |
| 094 | `094-birmingham-suffragette-banner.jpg` | Suffragette banner, 1910-1920 | Birmingham Museums Trust on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/d8BJrklJkxA) | 3403x4000 | N | portrait, card, case-study:public-memory |
| 095 | `095-votes-for-women-button-smithsonian.jpg` | 'Votes for Women' button | Smithsonian (Public Domain), via Unsplash | PD + Unsplash | [Unsplash](https://unsplash.com/photos/f4mjDFiL3uQ) | 6599x6380 | N | card, texture |
| 096 | `096-corrugated-cardboard-texture.jpg` | Corrugated cardboard texture | Photo by Umut Hasanoglu on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/l29EA7qvSoI) | 3000x4000 | N | texture |
| 097 | `097-crumpled-paper-texture.jpg` | Crumpled paper texture | Photo by SJ Objio on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/XFWiZTa2Ub0) | 4000x6000 | N | texture |
| 098 | `098-kraft-paper-texture.jpg` | Kraft paper texture | Photo by Ayush Design on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/pukRGyLufQI) | 6144x3429 | N | texture, section-banner |
| 099 | `099-torn-posters-texture.jpg` | Torn posters texture | Photo by Marija Zaric on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/JHmaQ4T9d8c) | 6000x4000 | N | texture, section-banner |
| 100 | `100-torn-paper-strips-texture.jpg` | Torn paper strips | Photo by David Maier on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/nSHEKTHRm0U) | 4719x5467 | N | texture |
| 101 | `101-crumpled-lined-paper-texture.jpg` | Crumpled lined paper texture | Photo by Umut Hasanoglu on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/UD_Fs520aDA) | 6120x8160 | N | texture |
| 102 | `102-torn-poster-wall-texture.jpg` | Weathered poster wall | Photo by Annie Spratt on Unsplash | Unsplash License | [Unsplash](https://unsplash.com/photos/0ahLNMHj-Cs) | 6000x3985 | N | texture, section-banner |

## 8. Reviewed but not kept (selected)

These were previewed at 1600 px and set aside. **ALT** means usable in a pinch after a crop or retouch. **MAYBE** means weak fit or missing context. **DROP** means an exclusion rule applies. About 175 more candidates were rejected at the thumbnail stage: off-topic, posed corporate stock, partisan or brand signage, or minors as the subject.

| Verdict | Candidate | Reason |
|---|---|---|
| ALT | [p:11709406](https://www.pexels.com/photo/grayscale-photo-of-women-protesting-11709406/) | B&W version of similar 'WE WANT JOB SECURITY' march (same series). Keep as alternate only if needed. |
| MAYBE | [u:WH8wlmSHpqc](https://unsplash.com/photos/WH8wlmSHpqc) | Joyful crowd of Bengali women with raised hands at what tags call a festival (Kolkata). Not a protest - use only as 'joy/collective' with neutral caption. |
| MAYBE | [u:gz3y2HBzuTM](https://unsplash.com/photos/gz3y2HBzuTM) | Four South Asian women (one teen?) posed portrait in foliage, soft blue tones; posed family-photo style. Possibly includes a minor (girl in glasses looks young). EXCLUDE (possible minor). |
| ALT | [u:s8PMhLFVRP8](https://unsplash.com/photos/s8PMhLFVRP8) | Marker graffiti 'We teach girls shame' on white hoarding below DANGER HARD HAT AREA sign. Strong but negative tone. Keep as alt/blog. |
| MAYBE | [u:BxIJD3Pbuf8](https://unsplash.com/photos/BxIJD3Pbuf8) | Analog-scan 'FEMINIST PURSUITS' sticker on pole, purple tones. Low-ish resolution 3500px; sticker includes a group URL. Keep as small card only. |
| ALT | [u:kcT-7cirBEw](https://unsplash.com/photos/kcT-7cirBEw) | Young woman reading in library aisle (classic Unsplash). May read as teen; keep ALT. |
| MAYBE | [u:cw-cj_nFa14](https://unsplash.com/photos/cw-cj_nFa14) | Community talk in art space, Santiago (Taller Bloc); woman speaking to seated group. Good but man in suit dominates. Keep as card. |
| DROP | [u:fOeH7Nh2oy0](https://unsplash.com/photos/fOeH7Nh2oy0) | Group of mostly men seated (Random Institute) - off-brief. |
| ALT | [u:LjqARJaJotc](https://unsplash.com/photos/LjqARJaJotc) | Five hands of different skin tones on wood table. Landscape. |
| DROP | [u:vkooEMhS-XA](https://unsplash.com/photos/vkooEMhS-XA) | Hands filming parade (not protest), older man's hands. |
| MAYBE | [p:20081464](https://www.pexels.com/photo/women-holding-a-banner-getting-interviewed-20081464/) | Journalist with CM microphone interviewing women holding banner (Portugal?) - mic has broadcaster logo. DROP for logo. |
| DROP | [u:NtuS_QLw2cI](https://unsplash.com/photos/NtuS_QLw2cI) | Three young white women from behind on shopping street - shop logos (H&M). |
| MAYBE | [u:u2fjknQnCGk](https://unsplash.com/photos/u2fjknQnCGk) | Black women smiling at picnic table in park before a protest, bike foreground (London, Ontario). Nice but cluttered. |
| MAYBE | [u:Evo4wmtRaPI](https://unsplash.com/photos/Evo4wmtRaPI) | Huge LA march crowd under freeway bridge with police on top; signs too small to read. Probably LA Women's March 2017? caption unknown. Use as generic crowd. |
| DROP | [u:t86cJxwmBWc](https://unsplash.com/photos/t86cJxwmBWc) | BLM DC night; KKK-word sign prominent - exclude (hateful words). |
| DROP | [u:zD641gHJqnY](https://unsplash.com/photos/zD641gHJqnY) | Westminster Bridge 2023 march with union (UP/NEU) flags - org logos. |
| DROP | [p:36623327](https://www.pexels.com/photo/crowd-gathering-at-belfast-city-hall-36623327/) | Belfast City Hall crowd; Black child on shoulders is the visual subject - identifiable minor. |
| DROP | [p:35701642](https://www.pexels.com/photo/black-and-white-urban-protest-in-dublin-35701642/) | Dublin B&W march with megaphone; Palestinian flags and placards - off-brief/partisan risk. |
| DROP | [p:35701676](https://www.pexels.com/photo/black-and-white-urban-protest-scene-in-dublin-35701676/) | Dublin B&W drummer; same march. |
| DROP | [u:i7n5o3VOXO0](https://unsplash.com/photos/i7n5o3VOXO0) | Belfast anti-racism rally - multiple org/union/antifa logos and flags. |
| DROP | [u:OHrQC2u12Z4](https://unsplash.com/photos/OHrQC2u12Z4) | same - PCS union flag, banners. |
| DROP | [u:kCtwtlPJgsI](https://unsplash.com/photos/kCtwtlPJgsI) | same. |
| DROP | [u:L7HtfLa1jcA](https://unsplash.com/photos/L7HtfLa1jcA) | Huge Denver night crowd from above, lots of signs incl 'Fuck ICE' and 'Stop...'; immigration-politics specific and expletives. Drop. |
| MAYBE | [u:Ky28rl77re0](https://unsplash.com/photos/Ky28rl77re0) | Excited young crowd raising hands at outdoor event (not clearly protest). Mostly men; one woman shouting. Drop for brief (no context). |
| DROP | [u:2LEKXzFNitA](https://unsplash.com/photos/2LEKXzFNitA) | BLM DC kneeling crowd with 'NO JUSTICE NO PEACE' sign; 'Trump/Pence must go' orange shirts visible - partisan. Drop. |
| DROP | [p:40166043](https://www.pexels.com/photo/public-university-protest-at-night-with-sign-40166043/) | Night march 'VIVA AS UNIVERSIDADES PUBLICAS' with red star (resembles a party symbol) and a placard bearing a politician portrait - partisan risk. |
| DROP | [u:DoA2duXyzRM](https://unsplash.com/photos/DoA2duXyzRM) | Woman with megaphone at London Fashion Week anti-fur protest - megaphone covered with animal-rights group stickers/logos. |
| ALT | [p:16110531](https://www.pexels.com/photo/woman-screaming-through-a-loudspeaker-at-a-demonstration-16110531/) | Mexico City 8M: woman with glitter make-up shouts into megaphone, purple banners. Excellent but 'Steren' brand name printed large on megaphone - excluded from keepers for brand prominence (usable only if retouched/cropped). |
| DROP | [u:Ta1EsT-vUuY](https://unsplash.com/photos/Ta1EsT-vUuY) | Fridays for Future 2023 megaphone - organisation stickers on megaphone; climate-specific. |
