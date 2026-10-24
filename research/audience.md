# Audience research: Gen Z, Gen Alpha and Millennials on feminism, politics and activism

**For:** Cultural Shock Party (CSP) website build (static site on Netlify)
**Compiled:** 24 October 2026
**Scope:** Gen Z (primary), Gen Alpha (secondary, under 18, so safeguarding applies), Millennials (third). Covers the UK including Northern Ireland, Ireland, India and global data.

**How to read this file**

- Each factual claim has a source and a publication or fieldwork date. Sources are listed in full in section 11.
- Confidence labels:
  - **[H] High:** I opened the primary source and read the figure directly.
  - **[M] Medium:** the figure comes from a reputable primary page or summary I opened, but I could not read the full methodology, or I read the value off a chart.
  - **[L] Low:** a single secondary source, a very small sample, platform self-reporting, or a think-tank or advocacy poll.
- Anything I could not open or check is listed in section 12, "Unverified leads". It is not used as evidence anywhere else.
- Research limits: the shared web-search budget ran out partway through. After that I worked only from primary URLs already found (PDFs and official pages). A few topics are thinner than intended as a result: Substack usage, dark-mode adoption, nationally representative Indian Gen Z gender data, and Northern Ireland's Executive Office figures on violence against women and girls (VAWG). These are flagged where they come up.
- Generation definitions vary. Ipsos uses Gen Z = born 1996–2012 and Millennials = 1980–1995 [H, Ipsos IWD 2026 PDF]. KCL's release uses Gen Z = 1997–2012 [H]. On those definitions Gen Alpha is born from about 2013, so in October 2026 its oldest members are roughly 13. **Every Gen Alpha visitor to the CSP site is a child.**

---

## 0. TL;DR: the 14 findings that should shape the site

1. **Young people split by gender on feminism, but most young men are not anti-feminist.** Across 29 countries, 54% of Gen Z women call themselves feminists, against 36% of Gen Z men (Ipsos/KCL, fieldwork Dec 2025–Jan 2026) [H]. The 2025 wave found the Gen Z gap (21 points) to be the largest of any generation [H]. Even so, 69% of Gen Z men do *not* agree that "a wife should always obey her husband" (31% agree) [H].
2. **Country baselines differ a lot.** Feminist self-identification is 37% in Great Britain (men 28%, women 46%), 45% in Ireland (men 33%, women 56%) and 68% in India (men 65%, women 71%), all ages [H]. Ipsos says the India sample is urban and online, so it does not represent India as a whole [H]. India also has the third-highest agreement that "a wife should always obey her husband" (52%, against a 20% average) [H]. The feminist label and traditional norms sit side by side there.
3. **Restrictive norms hurt young men too, and that gives CSP a positive way in.** 30% of Gen Z men say men shouldn't say "I love you" to friends, and 43% say young men should try to be physically tough (Ipsos/KCL 2026) [H]. Nearly two-thirds of young men (63%) regularly watch "masculinity influencers", and 27% of those viewers report feelings of worthlessness (Movember 2025) [M].
4. **People overestimate how traditional everyone else is.** In Great Britain, only 14% personally think women should do most of the childcare, but 43% think society expects it (Ipsos/KCL 2026) [H]. CSP's content can say "you're not alone, most people already agree."
5. **UK girls are changing their lives to stay safe, and they want boys and decision-makers to change.** 68% of girls aged 11–21 changed their behaviour in the past year to avoid sexual harassment. 76% of 11–16s want more discussion with boys at school about sexism. 70% say politicians aren't committed to tackling it (Girlguiding 2025, n=2,640, including 347 in Northern Ireland) [H].
6. **They trust people more than brands.** Among 18–24s who get news on social and video platforms, 51% pay more attention to individual creators and 39% to news brands (Reuters Institute, March 2026) [H]. **The site needs real faces, with Rubby first and named members after her.**
7. **They reach news through social platforms, and Instagram leads.** 52% of 18–24s say social media, video networks or AI chatbots are their *main* news source. Instagram is the top social platform for news in that age group, at 42% (Digital News Report 2026) [H]. In the US, 43% of 18–29s regularly get news on Instagram and 39% on TikTok (Pew, Aug 2026) [H].
8. **They mostly watch rather than post.** 65% of UK social media users aged 8–17 are "passive": they like, follow, read or watch (Ofcom, May 2026) [H]. **CTAs have to start very small** (save, share, take a quiz) and build up.
9. **Doom content drives them away.** 42% of 18–24s sometimes or often avoid news, mainly because it hurts their mood. "Makes me feel better about the world" is the job they think news does worst (Reuters Institute 2026) [H]. A *positive* tone fits the evidence. It is not a soft option.
10. **Politics: they believe in democracy but distrust politicians.** Young UK people aged 14–17 describe politicians as "performative" but trust elections. TikTok and YouTube are where they most often see political content (Deltapoll for the UK government, Sept 2026) [M]. 63% of 16–29s say "democracy in the UK is in trouble" (UK Youth Poll, Mar 2025) [M].
11. **The 2025 "Gen Z protests" were organised on Discord.** Nepal's protesters used a Discord server of over 100,000 members to coordinate and to pick an interim prime minister (Sept 2025) [M]. Morocco's GenZ 212 grew a Discord server of over 250,000 members [M]. In the UK, 59% of Discord's adult visitors are aged 18–34 and 65% are men (Ofcom, Dec 2025) [H].
12. **Raw, human and analogue beats polish.** Instagram's head predicted a "more raw aesthetic" as AI makes polish cheap (Jan 2026) [M]. TikTok's 2026 forecast leads with "Reali-TEA", meaning real life over fantasy [L]. More than a quarter of Gen Z and Millennial Pinterest users are rediscovering handwriting and letter-writing [L].
13. **Mobile-first is a given, and accessible design stands out.** UK 18–24s spend 6h20m a day online, 81% of it on smartphones (Ofcom, Dec 2025) [H]. 95.9% of the top million home pages fail WCAG, and 83.9% have low-contrast text (WebAIM, Feb 2026 data) [H]. An accessible site will be unusual.
14. **Gen Alpha will soon be hard to reach on social media in the UK.** The UK plans to ban under-16s from Snapchat, TikTok, YouTube (main app), Instagram, Facebook, X, Reddit and Threads by spring 2027. WhatsApp is excluded (announced 15 June 2026) [M]. Australia's under-16 ban has applied since 10 December 2025 [M]. **For under-16s, the website, printable materials, schools and parents become the main channels.**

---

## 1. Who the audience is, and why geography matters

| Segment | Ages in Oct 2026 (Ipsos definitions) | Role for CSP | Key constraint |
|---|---|---|---|
| Gen Z | ~14–30 | Core members, creators, organisers, street presence | Split by gender; distrust brands and politicians |
| Gen Alpha | under ~13 (the youngest "teens" are Gen Z by Ipsos's cut-off; many readers aged 13–17 are late Gen Z) | Future members; reached through schools and parents | Children: data protection and the UK under-16 ban |
| Millennials | ~31–46 | Parents of Gen Alpha, teachers, funders, professionals, "accountability" allies | Time-poor; Facebook and WhatsApp still matter |

**Practical point:** treat everyone under 18 as a protected group, whatever their generation label. The UK Children's Code defines a child as anyone under 18 [H, ICO]. So does India's DPDP Act [H, ELP summary of s.2(f)].

**Country base is unconfirmed.** If CSP is based in Northern Ireland, four sets of rules overlap: UK law (ICO, Online Safety Act), Northern Ireland's own data (the ARK Young Life and Times survey), audiences in the Republic of Ireland (where the digital age of consent is 16), and diaspora audiences in India (DPDP Act). See section 8.

---

## 2. Attitudes to feminism and gender equality, by gender

### 2.1 The global Gen Z gender divide (Ipsos and King's College London, International Women's Day studies)

**2026 wave.** Fieldwork 24 Dec 2025–9 Jan 2026; 23,268 online adults; 29 countries; published 5 March 2026. Sources: [Ipsos charts PDF] and [KCL release]. All [H].

| Statement (% agree) | Gen Z men | Gen Z women | Boomer men | Boomer women |
|---|---|---|---|---|
| I define myself as a feminist | 36% | 54% | (all men 31%) | (all women 44%) |
| We've gone so far promoting women's equality that we're discriminating against men | 57% | 38% | — | — |
| A wife should always obey her husband | 31% | 18% | 13% | 6% |
| A husband should have the final word on important decisions | 33% | — | 17% | — |
| A woman should not appear too independent or self-sufficient | 24% | 15% | 12% | 9% |
| A "real woman" should never initiate sex | 21% | 12% | 7% | 7% |
| Men are expected to do too much to support equality | 59% | 41% (KCL wording) | 45% | 30% |
| Men should not say "I love you" to their friends | 30% | 21% | 20% | — |
| Young men should try to be physically tough, even if not naturally big | 43% | 28% | — | (all 32%) |
| Men who do childcare are less masculine | 21% | 14% | 8% | — |
| Women with successful careers are more attractive to men | 41% | — | 27% (both genders) | 27% |

Some items, including "I love you" and "physically tough", were not asked in India [H].

**Country cut, feminist self-identification, all ages (2026)** [H]:

| | All | Men | Women |
|---|---|---|---|
| 29-country average | 39% | 31% | 44% |
| Great Britain | 37% | 28% | 46% |
| Ireland | 45% | 33% | 56% |
| India | 68% | 65% | 71% |

**"A wife should always obey her husband", all ages (2026)** [H]: average 20%; **India 52%**; Ireland 17%; Great Britain 13%.

**The perception gap (2026)** [H]:
- In Great Britain, 14% personally think women should do most of the childcare, but 43% think society expects it. 15% personally think men should be the main earners, but 38% think society expects it.
- Across all 29 countries: 17% vs 35% on childcare, 24% vs 40% on main earners, 21% vs 31% on men having the final word at home.

**Young men's outlook (2026)** [H]. Asked whether young men today will have a better life than men of their parents' generation:
- 29-country average: 40% better, down 5 points from 2025.
- Great Britain: 31% better, 31% worse.
- Ireland: 42% better.
- India: 40% better.
- For young *women* the "better" figures are higher: average 55%, Great Britain 51%, Ireland 60%, India 41%.

**Sample caveat** [H, Ipsos methodology]: the samples for India and Ireland, among others, are "more urban, more educated, and/or more affluent" than the general population. India's sample covers urban socio-economic classes A, B and C in metros and tier 1–3 towns.

**2025 wave.** Published 5 March 2025; ~24,000 people; 30 countries. Source: [KCL 2025 release]. All [H].
- Feminist self-identification: Gen Z women 53% vs Gen Z men 32%. That 21-point gap was the largest of any generation (Millennials 16, Boomers 11, Gen X 8).
- "Men are expected to do too much": Gen Z men 60% vs Gen Z women 38%.
- "Gone too far / discriminating against men": 57% vs 36%.
- 59% of Gen Z perceive tension between men and women.
- Great Britain ranked 26th of 30 on perceived gender tension (40%).
- **68% across the 30 countries say gender equality is important to them personally, including 62% of men.** This is useful positive framing.
- Great Britain trend: feminist self-identification fell to 38%, and among British men from 38% to 28%. Agreement that a stay-at-home father is "less of a man" fell sharply, to 11% overall.

### 2.2 United Kingdom, including Northern Ireland: girls' experience (Girlguiding 2025)

Girls' Attitudes Survey 2025, "A girl's world: sexism, misogyny and the power of sisterhood". Run by CHILDWISE. 2,640 girls and young women aged 7–21, including **347 in Northern Ireland**. Fieldwork Feb–May 2025; the PDF is dated September 2025. Source: [Girlguiding Ulster PDF]. All [H].

**Safety and self-protection**
- 68% of 11–21s changed their everyday behaviour in the last year to avoid sexual harassment.
- 56% don't feel safe on public transport alone (45% in 2022).
- 48% always avoid going out in the dark.
- 10% of 11–16s have missed school to avoid sexual harassment.
- 54% of 11–16s agree girls must be careful about appearing too self-confident in front of boys, for fear of abuse.

**Speaking up, and the sisterhood**
- 70% have supported another girl who experienced sexism or misogyny.
- They are more likely to challenge sexism in person (30%) than online (24%).
- 32% of 11–16s have stopped themselves challenging sexism for fear of being seen as "too sensitive". This rises to 49% of 17–18s.

**What girls want**
- 76% of 11–16s want more discussion and education with **boys** at school about the impact of sexism and misogyny.
- 72% want more discussion about consent.
- 70% say politicians aren't showing enough commitment to tackling misogyny and sexism.
- Girls' own words include "Stop gaslighting [us] when we report problems" and calls for better role models for boys.

**Wellbeing and online life**
- 26% of 7–10s feel sad most days or every day (10% in 2015).
- 36% of 11–21s often feel depressed after social media, yet 62% say being online helps their friendships.
- 79% think they can access too much harmful content online.
- 41% keep a private account alongside a public one.
- About a third avoid sharing photos of their face. For girls of colour the figure is 45%, against 28% for white girls.

**Ambition**
- 64% of 7–21s want to be leaders in their chosen job (53% in 2018).
- 56% have a woman role model outside their family, rising to 82% of 17–21s.
- The groups facing the most: girls of colour, disabled, neurodivergent and LGBTQ+ girls report more harassment and more self-protective behaviour.

**Implication:** CSP's site should never put the burden on girls. In Girlguiding's words, girls "want others' behaviours to change rather than carrying the burden themselves."

### 2.3 Northern Ireland, 16-year-olds (ARK Young Life and Times 2025)

2,129 respondents who turned 16 between January and March 2025: 57% female, 41% male, 2% another gender identity. Summary PDF dated August 2025. Source: [YLT 2025 summary].

- **Respect means "being taken seriously, even if you are young" (91%)** and "listening to other people's ideas" (94%) [H]. This is a direct tone-of-voice cue.
- Females are more likely than males to spend more than 6 hours a day on social media (35% vs 23%) [H].
- Females are more likely to report someone trying to build a relationship to manipulate them (16% vs 9%) and being stalked online (22% vs 16%) [H].
- 46% experienced none of the harmful social media behaviours listed [H].
- Most-used apps: Snapchat, TikTok and Instagram, roughly 88%, 86% and 81%. YouTube and WhatsApp are each about 71% [M: values read from the chart].
- Other context: 68% have a sense of belonging to Northern Ireland, and 76% think religion will always make a difference to how people in Northern Ireland feel about each other [H]. **Avoid sectarian coding** (colours, symbols, flags) in visuals.
- The Executive Office published "Ending VAWG: experiences and attitudes of 16 year olds in NI in 2024" on 13 March 2025, but I could not get its PDF to open. No figures from it are used here.

### 2.4 United States (useful global signal)

NBC News Stay Tuned poll (SurveyMonkey), 11–20 April 2025. 18–29 subgroup n=2,230; published 27 April 2025. All [H].
- Trump approval: young men 45%, young women 24%.
- Democrat identification: 52% of Gen Z women vs about a third of Gen Z men.
- Top issue: the economy for young men (31%); threats to democracy for young women (22%). Abortion is the top issue for 16% of young women and 4% of young men.
- DEI programmes are "helpful": 85% of young women vs 63% of young men.

### 2.5 Masculinity influencers, and a cultural moment to build on

- **Movember, "Young Men's Health in a Digital World" (2025):** 3,000+ men aged 16–25 in the UK, US and Australia [M]. 63% regularly watch men and masculinity influencers, 43% find them motivating and 27% report feelings of worthlessness. Viewers were more likely to report worse mental health and more risk-taking.
- **UK Youth Poll 2025** (John Smith Centre / Focaldata, 16–29, 31 March 2025) [M]:
  - 67% say "toxic masculinity" is becoming more common.
  - Young men lean more to the right than young women, but most of both sit in the centre ground.
  - 67% support banning social media for under-16s.
- **"Adolescence" (Netflix, 13 March 2025):** a drama about a 13-year-old shaped by the "manosphere". It had 96.7m views in its first three weeks. The UK Prime Minister backed showing it in schools, and it was made free to view in UK secondary schools [M, Wikipedia]. It is a widely recognised shared reference for "boys online" conversations in the UK and Ireland.

### 2.6 India

- **Ipsos 2026, urban online sample:** 68% call themselves feminists, men nearly as much as women (65% vs 71%). But 52% agree a wife should always obey her husband [H]. **The label is popular and the norms lag behind.** For India-facing content, lead with concrete behaviours and rights rather than the word "feminism" alone.
- **Lokniti-CSDS Youth and Politics Survey** (22–25 Jan 2024; n=1,290 students aged 18–22; 52.6% female) [H]. This is an older, non-national student sample.
  - 91.9% say young people should follow what is going on in the country.
  - 78.7% are very or somewhat interested in politics.
  - 51.2% were *not* registered to vote.
- **Not found:** a nationally representative 2024–2026 survey of Indian Gen Z gender attitudes broken down by gender. This is a gap (see section 12).

---

## 3. Political engagement and trust

### 3.1 United Kingdom, including Northern Ireland

**Votes at 16 research** (Deltapoll for MHCLG). Ages 14–17; survey of 3,500+ plus 32 focus groups; published 24 September 2026. Source: [gov.uk executive summary]. All [M].
- Trust in politicians is generally low, described in focus groups as "performative or unresponsive". Trust in elections is comparatively robust.
- The top sources of political information are parents and other adults at home, TV, and social media. Political content is most often seen on **TikTok and YouTube**.
- Strong majorities want schools to teach more about voting, but fewer than half say their school helped them feel ready.
- About a third have taken part in school debates or mock elections.
- **Northern Ireland:** views on whether Votes at 16 would increase their voice were more evenly divided than in England. Only 76–78% of NI 14–17s held an accepted form of voter ID.
- Background: the UK government is legislating for votes at 16. A search snippet dated the bill's introduction to 12 February 2026, but I did not open a primary source on the bill or its progress. Treat the timing as unverified.

**Other UK polling**
- **Democracy:** 49% of 16–21s were dissatisfied with how UK democracy works and 29% satisfied (Royal Holloway IP-PAD, n=1,000, 4 July 2024) [M]. 63% of 16–29s say UK democracy is "in trouble", although they back democracy over dictatorship two to one (UK Youth Poll 2025) [M].
- **Girls and politicians:** 70% of girls aged 11–21 say politicians aren't committed to tackling misogyny (Girlguiding 2025) [H].

### 3.2 Ireland

- Trust in news: 42%, down 9 points on 2025. News avoidance: 47%, up 6 points (Digital News Report 2026, Ireland) [H].
- Gender attitudes from Ipsos 2026: see 2.1.
- I found no Irish Gen Z political-trust survey from 2025–2026 that I could open (see section 12).

### 3.3 Global

- **Edelman Trust Barometer 2026** (18 Jan 2026) [M, Semafor]:
  - 70% are unwilling or hesitant to trust people with different values or opinions ("insularity").
  - 32% think the next generation will be better off.
  - Confidence in the next generation fell by double digits in countries including India.
  - Business is still trusted more than government, media and NGOs.
  - Sample sizes differ between sources (about 34,000 to 37,500 across 28 countries).
- **Deloitte Gen Z and Millennial Survey 2026** (published 13 May 2026; 22,595 people in 44 countries; fieldwork 24 Nov 2025–15 Jan 2026) [H]:
  - Cost of living is the top concern for the fifth year running.
  - 55% of Gen Z have delayed major life decisions because of money.
  - 58% report digital fatigue.
- **Deloitte 2025** (published 14 May 2025) [H]:
  - 48% of Gen Z don't feel financially secure.
  - 89% say a sense of purpose matters for job satisfaction and wellbeing.
- **The 2025 Gen Z protest wave:**
  - **Nepal (Sept 2025):** began after a ban on 26 social platforms and anger at "Nepo Kids". Discord was the main coordination hub, with over 100,000 members. On 10 September, Sushila Karki was chosen as interim PM through a Discord poll. At least 76 people died [M, Wikipedia].
  - **Morocco, GenZ 212:** leaderless and decentralised. Discord (over 250,000 members) was its "digital backbone", and it published evening podcasts on YouTube. Its demands focused on health and education (Carnegie, 24 Oct 2025) [M].
- **What this means for CSP:** Gen Z's politics is often anti-corruption, focused on material needs, wary of leaders and built on platforms. CSP's "institutional accountability" pillar fits this. A personality cult does not.

---

## 4. Platform habits

### 4.1 Platform-by-platform evidence

| Platform | Key evidence | Confidence |
|---|---|---|
| **Instagram** | Top social platform for news among 18–24s globally (42%, DNR 2026). US 18–29s: 43% regularly get news there (Pew, Aug 2026). UK: Instagram is where 18–24s most often say they last met a potential online harm (24%) (Ofcom 2025). | H |
| **TikTok** | 47% of 18–24s use it weekly for any purpose (9 markets, 2025). 22% use it for news (2025). Most-used news source for UK 12–15s who access news (42%), though only 45% of those users trust news there (Ofcom 2026). UK users aged 18–34 spend 49 minutes a day on it (Ofcom 2025). | H |
| **YouTube** | Top platform for 18–24s for any purpose (66%, all DNR markets 2025). The most-used service among UK 8–17s (66% of 8–14s, 70% of 15–17s). Top news platform in India (55%, English-speaking online sample). | H |
| **WhatsApp** | 53% of 18–24s use it weekly (all markets, 2025). Reaches 90% of UK online adults (May 2025). Used by 58% of UK 8–14s and 68% of 15–17s. 46% use it for news in India, where 53% name it the biggest misinformation threat. **Excluded from the UK's planned under-16 ban.** | H / M for the ban |
| **Snapchat** | Mostly used for messaging among children (Ofcom 2026). US teens: girls 61%, boys 49% (Pew 2025). The top app for Northern Ireland 16-year-olds (YLT 2025). | H / M |
| **Discord** | UK: 59% of visitors are 18–34 and 65% are men. 14% of 18–34s visit daily. The organising backbone of the Nepal and Morocco movements. Discord was *not* on Australia's under-16 restricted list. | H / M |
| **Reddit** | Reaches 71–77% of UK 18–24s (May 2025, Ipsos iris; Ofcom's text and chart give different figures), but only about 4 minutes a day per user. Time spent is weighted towards men. | H |
| **X** | News use among 18–24s fell to 15% (DNR 2026). X is the only top-10 UK social service where men predominate (60% of visitors), and its UK reach fell from 45% to 39% of online adults (Ofcom 2025). | H |
| **Pinterest** | The strongest female skew of the UK top-10 social services: 69% of visitors are women (Ofcom 2025). A natural home for posters, zines and "save this" visuals. | H |
| **Podcasts** | 59% of 18–24s listen to some podcast each month, but only 18% to news podcasts (2024 data). Morocco's GenZ 212 used evening podcasts posted to YouTube. | H / M |
| **AI chatbots** | 15–16% of young people use them weekly for news (Reuters 2026; DNR 2026). 56% of UK 8–17s use AI (Ofcom 2026). 64% of US teens use chatbots (Pew 2025). | H |
| **Substack / newsletters** | **No reliable 2024–2026 youth usage data found.** Treat as a Millennial and professional channel until proven otherwise. | — |
| **WhatsApp Channels** (broadcast) | **No usage data found**, beyond overall WhatsApp reach. | — |

### 4.2 Habits behind the numbers

- **Social-first, not online-first.** Young people now reach news mainly through social platforms rather than news sites (Reuters Institute, 2026) [H].
  - Only 64% of 18–24s consume news daily, against 87% of over-55s.
  - Only 35% are very or extremely interested in news, against 52% of over-55s.
  - Young people are more likely to *watch* or *listen*: 73% of 18–24s watched a short-form news video weekly in 2024.
- **Time on mobile.** UK 18–24s spend 6h20m a day online, up 19 minutes year on year. 5h05m of that (81%) is on smartphones (Ofcom Online Nation 2025) [H].
- **Gender differences in topics.** Young men are relatively more interested in science, sport and politics news; young women in mental health, crime and entertainment news. Young women are less likely than young men to think people their age are covered fairly (39% vs 47%) [H].
- **Children (Gen Alpha and young Gen Z, UK)** [H, Ofcom 2026]:
  - Smartphone ownership jumps from 56% at age 10 to 83% at age 11.
  - 95% of 8–17s use at least one social or video platform.
  - 65% of social media users aged 8–17 are passive.
  - Roblox is used by 51% of 8–14s.
  - 72% of children game online, and 55% interact at least sometimes with people they have only met online.
  - Nearly three-quarters of 11–17s have seen harmful content online.
- **US teens** (Pew, Dec 2025, n=1,458) [H]:
  - YouTube is used by about 90%, TikTok and Instagram by about 60% each, Facebook by 31% and WhatsApp by 24%.
  - 36% use at least one platform "almost constantly", including 21% on TikTok.

---

## 5. What earns trust and what destroys it

**The evidence**

- **People over institutions.** 51% vs 39% pay more attention to creators than to news brands (18–24s, 2025) [H]. Young people want "the intimacy and authenticity of personality-led content" (Reuters Institute 2026) [H].
- **Neutrality isn't expected on everything.** 32% of 18–24s, against 19% of over-55s, think it "makes no sense" for outlets to be neutral on some issues, such as climate change or racism [H]. CSP can take a clear values stance. Most still favour impartial news in general, though, so **be clear on values and scrupulous on facts.**
- **Low trust in mediated information.** Trust in news is 37% globally, 35% in the UK (2025) and 42% in Ireland (2026). Trust in news seen on social media is 22%, and in AI chatbot answers 20% (DNR 2026) [H].
- **"Performative" is the insult they use for politicians** (Deltapoll 2026) [M]. Girls ask adults to "actually do something about sexism instead of brushing it off" (Girlguiding 2025) [H].
- **Purpose matters, but they judge you on actions.** 89% of Gen Z say purpose matters for job satisfaction and wellbeing (Deloitte 2025) [H].
- **AI erodes trust in images.** Instagram's head lamented the erosion of trust in visual media and backed labels for AI content (Jan 2026) [M]. A quarter of UK teens who felt confident spotting AI-generated content could not identify an AI image in testing (Ofcom 2026) [H].
- **Insularity.** 70% are reluctant to trust people with different values (Edelman 2026) [M]. Expect polarised comment sections. Bridging content has to be designed deliberately.

**Trust rules for CSP** (inferences drawn from the evidence above)

1. **Receipts on every claim.** Every statistic carries its source and date, linked in a footnote. Keep a public "How we know" methodology page.
2. **Real faces, and say who wrote it.** Name the author, use a photo or short video, and carry a "last updated" date.
3. **Show the money and the decisions:** who funds CSP, who decides, and what CSP has actually done. Publish wins *and* failures.
4. **No corporate feminism.** No brand partnerships without published criteria. Show internal evidence before celebrating International Women's Day. Prefer "here's what we did" to "we stand with".
5. **No AI-generated people.** Label any AI-assisted image, and never use one to show a "member".
6. **Keep values partisan and party politics plural.** Criticise policies and institutions, not voters. This is critical for engaging young men.

---

## 6. Formats that turn viewers into participants

**The evidence**

- **Passive by default.** 65% of social media users aged 8–17 mainly like, follow, read or watch (Ofcom 2026) [H]. Among adults, short-form video and creators dominate (Reuters Institute) [H].
- **Saves signal intent, and carousels earn the most saves.**
  - Across brand accounts, carousels have the highest engagement rate (0.55%, against 0.50% for Reels and 0.45% for images) and the most saves at every account size.
  - Reels give smaller accounts (under 50,000 followers) more impressions (Socialinsider, data from Jan 2023–Dec 2024) [M].
  - Another vendor's methodology reverses the ranking, so test it yourself.
- **Offline beats online for courage.** Girls challenge sexism more often in person (30%) than online (24%) [H]. **Offline, collective action makes it safer to speak.**
- **The fear of looking "too sensitive" stops action.** 32–49% hold back for this reason [H]. Give people ready-made scripts and group action so no one acts alone.
- **Community is expected.** TikTok cites Kantar (2025): Millennial and Gen Z users are 1.5 times more likely than Gen X+ to expect brands to have a strong community [L, platform-reported].
- **Schools and family are gateways.** Parents and TV are top political sources for 14–17s, and most want schools to teach politics [M].
- **Structured community spaces work at scale.** Discord gave Nepal's and Morocco's movements channels for logistics, legal help, medical support, fact-checking and decisions [M].

**Recommended engagement ladder** (each rung is a page module and a CTA)

| Rung | Viewer action | Website element | Social pairing |
|---|---|---|---|
| 0. Notice | Watches a 45–90 second explainer | Video plus transcript on every explainer page | Reels, TikTok, Shorts |
| 1. Keep | Saves or downloads | "Save this" carousels; downloadable quote cards; poster PDFs | IG carousel, Pinterest |
| 2. Test yourself | Takes a quiz | "Myth or receipt?" quiz with no email gate | Story stickers |
| 3. Share | Sends to a friend, *including a boy* | Pre-written share text; "send to the group chat" button | WhatsApp, Snapchat |
| 4. Sign | Adds their name to the Manifesto | Manifesto pledge, collecting minimal data and asking age band first | — |
| 5. Learn together | Joins a teach-in or reading circle | Events page with an "accessibility and safety" note | Podcast or live |
| 6. Show up | Attends street action | Action kit, safety guide, buddy system, under-18 rules | Group chats |
| 7. Organise | Starts a chapter or campus or school group | Chapter toolkit, zine template, moderation guide | Discord (18+; see section 8) |
| 8. Hold power to account | Writes to their MLA, TD or MP, or makes an FOI request | Letter generator (no data stored), FOI templates, a public "receipts" tracker | — |

---

## 7. Design and visual preferences

- **Raw and handmade, not slick.**
  - Instagram's Adam Mosseri predicted a shift to a "more raw aesthetic" as AI makes polish cheap (TechCentral, 5 Jan 2026) [M].
  - TikTok Next 2026's lead trend is "Reali-TEA": real life over romanticised content (15 Jan 2026) [L, platform report].
  - Pinterest Predicts 2026: more than a quarter of Gen Z and Millennial users are rediscovering handwriting and letter-sending, and Gen Z is moving from copying trends to curating its own identity (10 Dec 2025) [L, platform-reported].
  - Taken together, these support a zine, collage and handwritten system: scanned paper textures, marker annotations, real photos.
- **Mobile-first is the default.** 81% of UK 18–24 online time is on smartphones [H]. Design at 360–390px first: one-thumb navigation, a sticky "Join" button, no hover-only interactions.
- **Accessibility is a differentiator.** 95.9% of the top million home pages have detectable WCAG 2 failures. The most common are low-contrast text (83.9%), missing alt text (53.1%) and missing form labels (51%) (WebAIM Million 2026, Feb 2026 data) [H]. Collage aesthetics can easily fail contrast: **text must never sit directly on busy collage.** Use solid "paper" panels behind text.
- **Dark mode: no authoritative 2024–2026 youth figure found.** Most cited numbers come from self-selected polls. Recommendation: honour `prefers-color-scheme`, offer a toggle, and test both palettes for contrast.
- **Inclusive representation.** Girls of colour, disabled, neurodivergent and LGBTQ+ girls report more harassment and more self-protection [H]. Show them, but always with consent and with control over how they are shown (see section 8).
- **Neutral for Northern Ireland.** Avoid palettes and symbols with sectarian associations, given that 76% of Northern Ireland 16-year-olds think religion will always divide [H]. *This is an inference; get local design review.*

---

## 8. Gen Alpha (and all under-18s): safeguarding and legal context

### 8.1 Rules that touch a youth-facing campaign website

| Jurisdiction | Rule | Source / date | Confidence |
|---|---|---|---|
| UK | **Children's Code** (Age Appropriate Design Code). Applies to online services "likely to be accessed by children" (under 18), including not-for-profit services that count as "economic activity". 15 standards, including best interests, data minimisation, high-privacy default settings, profiling off by default and no nudge techniques. Information-only sites may fall outside it. **Get a legal view.** | ICO guidance page | H |
| UK | UK GDPR: only children **13+** can consent to an online service themselves. Under 13, a parent must consent. | ICO | H |
| UK | Online Safety Act **Protection of Children Codes** in force since **25 July 2025**. They apply to *user-to-user* and *search* services likely to be accessed by children. A static site without user posts or comments is likely out of scope; adding forums or comments could bring it in. *This is an inference; confirm.* | techUK, 24 Apr 2025 | M |
| UK | **Planned under-16 social media ban by spring 2027.** It would cover Snapchat, TikTok, YouTube (main app), Instagram, Facebook, X, Reddit and Threads, through secondary legislation, enforced by Ofcom. WhatsApp, Signal, YouTube Kids and educational tools are excluded. **Whether and how it applies in Northern Ireland is not stated** in what I read. | Irish News, 15 Jun 2026 | M |
| Ireland | Digital age of consent is **16** (where consent is the legal basis). | Data Protection Commission guidance | H |
| India | A "child" is anyone **under 18**. Verifiable parental consent is required, and tracking, behavioural monitoring and targeted ads aimed at children are banned. The child-consent provisions take effect **14 May 2027**. | ELP (Dec 2025); SAM & Co (Nov 2025) | H |
| Australia | Under-16 minimum age has applied since **10 December 2025** to 10 platforms. Discord, WhatsApp, Roblox, Pinterest and others are excluded. | McCullough Robertson, 10 Dec 2025 | M |

### 8.2 Safeguarding checklist for the Netlify build (design recommendations, not legal advice)

1. **Ask age band first** on every form (Join, pledge, newsletter, contact):
   - Under 13: no sign-up. Show a "Learn with us" path instead (UK).
   - Under 16: no consent-based processing for Ireland unless a parent consents.
   - Under 18: parental consent route for India from May 2027.
   - Under 18, all countries: extra protections. Collect only first name and email or region, and never school, address or photos.
2. **No third-party trackers, ad pixels or embedded social feeds.** Use privacy-friendly or server-side analytics, or none. Keep cookies off by default. No nudge techniques: no fake scarcity, no streaks, no confirm-shaming.
3. **No public user-generated content on the site:** no comments, forums or user uploads. This keeps it simple and likely outside the Online Safety Act's user-to-user scope (confirm).
4. **Images:** written consent for every identifiable person, and parental consent for under-18s. Never show school uniforms, school names or live locations. Offer blurring.
5. **Community spaces** such as Discord or a WhatsApp community: 18+ only at launch, or 16+ with trained moderators and a published code of conduct. No adult-to-minor direct messages. Two adults on every under-18 activity.
6. **Street action:** separate under-18 guidance. Under-16s attend with a parent or guardian. Include a buddy system and a safety brief.
7. **Content warnings and age-appropriate versions** of VAWG material: a "for 11–15s" version and a "for 16+" version.
8. **Safeguarding page:** policy, a named Designated Safeguarding Lead, a reporting form that goes to a monitored inbox, and signposting to helplines in each jurisdiction (verify the contacts before launch).
9. **Channels for under-16s after spring 2027:** the website itself, printable zines and posters for schools and youth clubs, teacher packs, a "for parents" page, YouTube Kids (if relevant), and WhatsApp *broadcast* only via parents.

---

## 9. Implications for the website

### 9.1 Tone-of-voice rules

1. **Hope first, receipts always.** Open with what is possible or already won, then the evidence. Never open with despair. (Young people avoid news because it hurts their mood, and "makes me feel better about the world" is the job they think news does worst.)
2. **Take them seriously.** No talking down, no slang cosplay, no "Hey besties". (91% of Northern Ireland 16-year-olds say respect means being taken seriously even when young.)
3. **Plain words.** Explain every term ("misogyny", "Fourth Wave") the first time it appears. Aim for a reading age of about 12–14 on public pages. (Young news-avoiders cite irrelevance (21%) and difficulty understanding (15%).)
4. **Clear values, plural politics.** Say what CSP believes. Criticise systems, laws and institutions, not voters or "men" as a class.
5. **Put the burden where it belongs.** Never tell girls to be careful; tell systems and bystanders to change.
6. **"We" plus named humans.** Write as people, sign pieces, and show faces.
7. **Warmth and humour are allowed. Sneering is not.** Use "calling in" language for people who are not yet on side.
8. **Every number has a date and a link.**
9. **Inclusive by default.** Girls of colour, disabled, neurodivergent and LGBTQ+ people are part of the "we", in images, examples and access needs.
10. **Show scale and solidarity.** "Most people already agree" framing (the perception gap) and "70% of girls have stood up for another girl."

**Copy examples**
- "Most of us already want this. Let's make it normal."
- "Here are the receipts."
- "Bring a friend. Yes, boys too."

### 9.2 Page structure

- **Home**
  - Hero: a one-line mission, Rubby's face in a 20–30 second captioned video, and two CTAs ("Join the movement", "Take the 60-second quiz").
  - Three belief cards.
  - A "Receipts" strip with real outcomes only.
  - The latest explainer.
  - "For allies" teaser.
  - Newsletter or broadcast sign-up, with age band asked first.
  - Footer links: Safeguarding, Accessibility, Who funds us.
- **About:** the founder story; why a "Fourth Wave"; values; governance and funding transparency; team bios with photos; a "How we work with young people" note.
- **Manifesto:**
  - A short version (about 10 lines, sized for a poster).
  - A long version with footnoted evidence.
  - "Add your name" pledge.
  - Downloads: A4/A3 poster PDF, Instagram 4:5 and 9:16 images, and a translation slot.
- **What we do:** the four pillars as a pipeline (Research → Public consciousness and memory → Digital culture and media → Collective action), plus street politics and institutional accountability. Each pillar ends with "How you can take part".
- **Case studies:** a fixed template: the problem → what we did → receipts (evidence, dates, documents) → what changed → what's next → how to copy it locally. Include lessons from things that didn't work.
- **Blog / Resources:** filterable by audience ("I'm 13–17", "18–25", "Parent or teacher", "Ally"). Formats: explainers, "Myth or receipt?", data cards, toolkits (challenging sexism safely in class or the group chat; writing to an MLA, TD or MP), zines and posters, and a glossary.
- **FAQ:** Is CSP a political party? Is feminism anti-men? Can boys and men join? How old do I need to be? What happens to my data? Who funds you? Is it safe to come to an action? What is the Fourth Wave?
- **Join:** the engagement ladder (section 6) as a visual. The age band question comes first, and the paths split by age. Roles: Reader → Sharer → Signer → Member → Organiser → Lead.
- **Contact:** separate routes for press, partnerships, schools and teachers, and "I have a safeguarding concern".
- **Add:** a **For parents and teachers** page. Millennial parents and teachers are the gatekeepers to Gen Alpha, and schools are trusted sources for political education.

### 9.3 Calls to action

- **Micro:** "Save this", "Send to your group chat", "Take the quiz".
- **Light:** "Add your name to the Manifesto", "Get the monthly receipts" (newsletter).
- **Medium:** "Come to a teach-in", "Download the action kit".
- **Heavy:** "Start a chapter", "Hold them to it" (accountability tracker).
- Rules:
  - Show one primary CTA per screen.
  - Always offer a no-data option, such as a download or a share.
  - Never gate content behind an email for under-18s.

### 9.4 Format specifications

| Format | Spec | Why |
|---|---|---|
| **Quote cards** | 1080×1350 (4:5) and 1080×1920 (9:16). One idea, one stat with source and date in the footer, WCAG AA contrast, alt text published alongside. Name and face of the person quoted, with consent. | Trust in people; receipts culture |
| **Carousels** | 6–10 slides: hook question → 3–6 evidence slides → "what you can do" → CTA plus "save this". Every carousel also published as an accessible HTML page on the site. | Most saves (Socialinsider); accessibility |
| **Short explainers** | 45–90 seconds, vertical, face to camera, burned-in captions, transcript and sources on the site. Series names, e.g. "Receipts in 60". | 73% of 18–24s watch short-form news video weekly; creator trust |
| **Quizzes** | "Myth or receipt?" and "What's your Fourth Wave issue?". Run on the device, store nothing by default, results shareable as an image, no profiling. | Low-commitment first rung; Children's Code |
| **Downloadable posters and zines** | A4/A3 print PDFs, one-sheet 8-page fold-out zine template, lo-fi collage style, Creative Commons licence, "for school noticeboards" versions. | Analogue revival; under-16 reach after 2027 |
| **Audio** | Monthly 20–30 minute conversation (podcast and YouTube), plus short voice-note clips. | 59% of 18–24s listen to podcasts monthly; GenZ 212 precedent |
| **Data cards / "receipts" tracker** | One chart per card, source line, date; a public tracker of promises made by institutions. | Accountability pillar; low trust |

### 9.5 Staying positive without going soft

- Lead with agency, not abstract despair: *what is changing, who changed it, how you can help.* Pair every hard statistic (VAWG, harassment) with an action.
- Use "most people already agree" evidence: 68% globally say gender equality is important to them personally, including 62% of men; the British perception gap on childcare (14% personally vs 43% "society").
- Celebrate the sisterhood: 70% of girls have backed another girl. Feature wins, role models and joy, such as music, art and street festivals.
- Make it visibly hopeful: bright accents on a paper or ink base, handwritten notes, real crowds.

### 9.6 Inviting boys and men in without diluting feminism

**Principles** (inferences grounded in the data in section 2)

1. **Centre women and girls; give boys a defined role.** An "Allies" page and module, not a rebrand. Girls themselves ask for boys to be educated (76% of 11–16s).
2. **Speak to the costs boys pay**, framed as feminism working for them too: "say I love you to your mates", "you don't have to be hard", the wellbeing harms linked to masculinity-influencer content. Keep the focus on equality, not on men's grievance.
3. **Address the majority, not the loudest minority.** 69% of Gen Z men reject "a wife should always obey". Talk to them as the normal majority, and show how the manosphere profits from loneliness.
4. **Give concrete, low-risk behaviours:** call it out in the group chat, walk a friend home, don't share the clip, listen first, ask a girl what would help. Provide scripts.
5. **Acknowledge young men's economic pessimism.** Only 31% in Great Britain think young men will have better lives than their fathers' generation. Then point to shared material fights: cost of living, housing, safety.
6. **Moderate hard; don't mock.** Use calling-in language, have clear red lines (no harassment, no slurs), and don't amplify trolls.
7. **Use male messengers carefully.** Brothers, coaches and teachers chosen by women and girls in the movement, rather than "male feminist" celebrities.
8. **Use shared cultural reference points**, such as "Adolescence" (2025), as conversation starters in school packs.

### 9.7 Notes on Millennials

- Their role: parents and teachers (gatekeepers to Gen Alpha), funders and professionals.
- Channels: Facebook still matters for news even among US 18–29s (40%, Pew 2026). WhatsApp is near-universal in the UK (90% of online adults).
- Give them a "For parents and teachers" page, an "Ally at work" toolkit, and printable school packs.

---

## 10. Open questions for CSP

- **Country base and legal form.** Is CSP a registered political party, a campaign, a charity or a CIC? This affects election-period rules, data processing bases and safeguarding duties.
- **Minimum age for membership** (13? 16? 18?) and whether CSP will run any under-18 activities in person.
- **Language plan:** English only, or also Irish, Hindi or Punjabi?
- **Is "Party" in the name a deliberate signal?** It may need FAQ handling ("Is this a political party?").

---

## 11. Sources (all opened unless marked; dates are publication or fieldwork)

| # | Source | Date | URL | Confidence |
|---|---|---|---|---|
| 1 | Ipsos / KCL GIWL: International Women's Day 2026 global charts | Fieldwork 24 Dec 2025–9 Jan 2026; pub. Mar 2026 | https://www.ipsos.com/sites/default/files/ct/news/documents/2026-03/IWD%202026%20Global%20Charts%20FINAL.pdf | H |
| 2 | KCL: "Almost a third of Gen Z men agree a wife should obey her husband" | 5 Mar 2026 | https://www.kcl.ac.uk/news/almost-a-third-of-gen-z-men-agree-a-wife-should-obey-her-husband | H |
| 3 | KCL: "Gen Z men and women most divided on gender equality" | 5 Mar 2025 | https://www.kcl.ac.uk/news/gen-z-men-and-women-most-divided-on-gender-equality-global-study-shows | H |
| 4 | Roar News (KCL student paper) on 2026 survey | 16 Mar 2026 | https://roarnews.co.uk/2026/kcl-professor-leads-global-survey-revealing-gen-z-mens-views-on-gender-roles/ | M |
| 5 | Girlguiding: Girls' Attitudes Survey 2025 (full PDF, Girlguiding Ulster) | Fieldwork Feb–May 2025; PDF Sept 2025 | https://girlguidingulster.org.uk/assets/uploads/Files/Girls-Attitudes-Survey-2025.pdf | H |
| 6 | ARK: Young Life and Times Survey 2025, summary | Aug 2025 | https://www.ark.ac.uk/ylt/2025/summary25.pdf | H / M (chart values) |
| 7 | NI Executive Office: EVAWG, 16-year-olds 2024 (landing page only) | 13 Mar 2025 | https://www.executiveoffice-ni.gov.uk/publications/ending-violence-against-women-and-girls-experiences-and-attitudes-16-year-olds-northern-ireland-2024 | (no figures used) |
| 8 | Reuters Institute: Understanding Young News Audiences at a Time of Rapid Change (PDF) | Mar 2026 (release 30 Mar 2026) | https://reutersinstitute.politics.ox.ac.uk/sites/default/files/2026-03/Young_people_and_the_news.pdf | H |
| 9 | Oxford DPIR news on the report | 30 Mar 2026 | https://www.politics.ox.ac.uk/news/young-audiences-are-redefining-how-they-consume-news-new-reuters-report-argues | H |
| 10 | Reuters Institute: Digital News Report 2026, executive summary | 16 Jun 2026 | https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2026/dnr-executive-summary | H |
| 11 | DNR 2026: Ireland | Jun 2026 | https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2026/ireland | H |
| 12 | DNR 2025: India | Jun 2025 | https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2025/india | H (English-speaking online sample) |
| 13 | DNR 2025: United Kingdom | Jun 2025 | https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2025/united-kingdom | H |
| 14 | Ofcom: Children and Parents Media Use and Attitudes 2026 (PDF) | 21 May 2026 | https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/media-literacy-research/children/2026-children-and-parents-report/children-and-parents-media-use-and-attitudes-report-2025-6.pdf?v=418231 | H |
| 15 | Ofcom: Children's Media Lives 2026 summary page | 21 May 2026 | https://www.ofcom.org.uk/online-safety/protecting-children/younger-phone-owners-the-rise-of-ai-and-consumption-over-creation-our-latest-look-at-uk-childrens-media-lives | H |
| 16 | Ofcom: Online Nation 2025 (PDF) | 10 Dec 2025 (data May–Jun 2025) | https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/online-research/online-nation/2025/online-nations-report-2025.pdf | H |
| 17 | Pew: Teens, Social Media and AI Chatbots 2025 | 9 Dec 2025 | https://www.pewresearch.org/internet/2025/12/09/teens-social-media-and-ai-chatbots-2025/ | H |
| 18 | Pew: Social Media and News Fact Sheet | 19 Oct 2026 (survey Aug 2026) | https://www.pewresearch.org/journalism/fact-sheet/social-media-and-news-fact-sheet/ | H |
| 19 | NBC News: Gen Z gender gap poll | 27 Apr 2025 | https://www.nbcnews.com/politics/elections/young-men-women-are-taking-poll-gender-gap-staggering-new-levels-rcna202672 | H |
| 20 | Deloitte: 2026 Gen Z and Millennial Survey press release | 13 May 2026 | https://www.deloitte.com/global/en/about/press-room/deloitte-2026-gen-z-and-millennial-survey.html | H |
| 21 | Deloitte: 2025 Gen Z and Millennial Survey press release | 14 May 2025 | https://www.deloitte.com/global/en/about/press-room/deloitte-2025-gen-z-and-millennial-survey.html | H |
| 22 | Semafor on Edelman Trust Barometer 2026 | 18 Jan 2026 | https://www.semafor.com/article/01/18/2026/insularity-threatens-davos-dialog-goal | M |
| 23 | UK government (MHCLG / Deltapoll): Votes at 16 research, executive summary | 24 Sep 2026 | https://www.gov.uk/government/publications/votes-at-16-research/votes-at-16-research-executive-summary | M |
| 24 | University of Glasgow John Smith Centre: UK Youth Poll 2025 | 31 Mar 2025 | https://www.gla.ac.uk/news/headline_1167303_en.html | M |
| 25 | Royal Holloway: IP-PAD Youth Survey UK | 4 Jul 2024 | https://royalholloway.ac.uk/about-us/news/survey-finds-that-nearly-half-of-young-people-are-unhappy-with-uk-democracy | M |
| 26 | Lokniti-CSDS: Youth and Politics Survey 2024 findings | Fieldwork 22–25 Jan 2024 | https://lokniti.org/media/upload_files/Youth%20and%20Politics%20Survey%202024-Survey%20Findings.pdf | H (student sample) |
| 27 | Movember: Young Men's Health in a Digital World | 2025 | https://us.movember.com/movember-institute/masculinities-report | M |
| 28 | Wikipedia: Adolescence (TV series) | accessed 24 Oct 2026 | https://en.wikipedia.org/wiki/Adolescence_(TV_series) | M |
| 29 | Wikipedia: 2025 Nepalese Gen Z protests | accessed 24 Oct 2026 | https://en.wikipedia.org/wiki/2025_Nepalese_Gen_Z_protests | M |
| 30 | Carnegie Endowment: Understanding Morocco's GenZ Uprising | 24 Oct 2025 | https://carnegieendowment.org/middle-east/diwan/2025/10/moroccos-genz-uprising | M |
| 31 | TechCentral.ie on Mosseri's "raw aesthetic" | 5 Jan 2026 | https://www.techcentral.ie/instagram-chief-predicts-more-raw-aesthetics-as-ai-takes-over/ | M |
| 32 | NetInfluencer on TikTok Next 2026 | 15 Jan 2026 | https://www.netinfluencer.com/tiktok-identifies-three-major-behavioral-shifts-for-2026-in-annual-trend-forecast/ | L (platform-reported) |
| 33 | Marketing-Interactive on Pinterest Predicts 2026 | 10 Dec 2025 | https://www.marketing-interactive.com/these-are-the-trends-shaping-gen-z-in-2026-pinterest-predicts-report | L (platform-reported) |
| 34 | YPulse on Pinterest Predicts 2026 | 10 Dec 2025 | https://www.ypulse.com/newsfeed/2025/12/10/gen-z-is-driving-two-thirds-of-pinterests-predicted-trends-for-2026/ | L |
| 35 | WebAIM Million 2026 | Data Feb 2026; page 30 Mar 2026 | https://webaim.org/projects/million/ | H |
| 36 | Socialinsider: 2025 Instagram Benchmarks (PDF) | Feb 2025 (data Jan 2023–Dec 2024) | https://cdn.socialinsider.io/documents/instagram_benchmarks_2025.pdf | M |
| 37 | ICO: Children's code, services covered | current | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/services-covered-by-this-code/ | H |
| 38 | ICO: ISS and consent (age 13) | current | https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/children-and-the-uk-gdpr/what-are-the-rules-about-an-iss-and-consent | H |
| 39 | techUK: Ofcom Protection of Children Codes | 24 Apr 2025 | https://www.techuk.org/insights/news/ofcom-publishes-protection-of-children-codes-of-practice-and-guidance | M |
| 40 | Irish News: UK under-16 social media ban explainer | 15 Jun 2026 | https://www.irishnews.com/news/uk/when-does-the-social-ban-involve-when-will-it-start-and-how-will-it-work-XDYDLN2DZNI5ZGYV66SNWOBUWA/ | M |
| 41 | Irish Data Protection Commission: Children's data and parental consent (PDF) | Apr 2023 | https://www.dataprotection.ie/sites/default/files/uploads/2023-04/DPC_ChildrensData_ParentalConsent.pdf | H |
| 42 | ELP: Processing children's data under the DPDP Act (PDF) | 19 Dec 2025 | https://elplaw.in/wp-content/uploads/2025/12/Processing-of-childrens-personal-data-under-the-DPDP-Act-what-does-it-means-for-businesses.pdf | H |
| 43 | Shardul Amarchand Mangaldas: DPDP enforcement alert (PDF) | Nov 2025 | https://www.amsshardul.com/wp-content/uploads/2025/11/Regulatory-Alert-Enforcement-of-DPDP-Act-and-Notification-of-DPDP-Rules.pdf | H |
| 44 | LiveLaw: DPDP Rules notified | 14 Nov 2025 | https://www.livelaw.in/amp/top-stories/digital-personal-data-protection-rules-2025-notified-309928 | H |
| 45 | McCullough Robertson: Australia's under-16 ban | 10 Dec 2025 | https://mccullough.com.au/2025/12/10/australias-social-media-ban-under-16/ | M |

---

## 12. Unverified leads, not used as evidence above

These appeared in search results, but I could not open or confirm them (blocked by 403 errors, unreadable, or found only second-hand). Check before quoting.

- **Hope not Hate:** a poll said to show 41% of UK young men aged 16–24 support Andrew Tate, against 12% of young women. Only forum reposts were found; date unknown.
- **Plan International:** 2023 State of the World's Girls report on young activists (over 1,000 activists aged 15–24 in 26 countries; 61% faced negative consequences; 9% threatened with physical violence). Also a 2024 "Building Digital Resilience" study with CNN As Equals (600+ girls aged 13–24; 11% face online harm daily or almost daily). The plan-international.org pages returned 403.
- **Edelman Gen Z Labs, "The Great Gen Z Divide" (2025):** said to report Gen Z trusting brands they use at 79% and brands in general at 68%, more than institutions. Page returned 403. Also Edelman 2026's UK insularity figure of 76% (search snippet only).
- **Sprout Social Q3 2025:** said to show 63% of Gen Z more likely to buy from companies that speak out, and over half would boycott companies rolling back DEI. Vendor survey, not opened.
- **NCVO Time Well Spent 2023:** 25% of volunteers aged 18–24 cite career benefits; 34% of non-volunteers cite fear of ongoing commitment; only 30% of 18–24 volunteers are very satisfied. Not opened, and pre-2024.
- **PRRI American Values Survey 2025:** 53% of Gen Z men say young men are struggling more than young women. Secondary source only.
- **Women's Aid (England), Oct 2023:** young people who viewed Tate-style content were five times more likely to see hurting someone as acceptable if you apologise. Secondary source only.
- **Ipsos B&A Ireland, Dec 2024:** 56% of Irish men, and 63% of Millennial men, agree that equality promotion now discriminates against men. Page failed on a certificate error.
- **C-Voter Gen Z India poll:** 49.3% say social media shapes their political opinions; 75.1% rely most on parents for life decisions. The article body didn't load and the date is unknown.
- **Adam Smith Institute (July 2025):** 33% of 18–30s would prefer "an authoritarian system with a strong leader". Think-tank poll, not opened.
- **Electoral Reform Society (Feb 2026):** 65.4% turnout among 18–24s in 2024, citing the British Election Study. Not opened.
- **Gender Pay Gap Bot (@PayGapApp, UK):** replied to companies' International Women's Day posts with their UK pay-gap data. Coverage found was from 2022 or earlier; whether it is still active in 2025–2026 is unknown.
- **Dark-mode adoption figures** (e.g., "82% of Android users"): sources are self-selected polls or poorly attributed.
- **Not found at all:**
  - A 2026 edition of Girlguiding's Girls' Attitudes Survey.
  - Ofcom News Consumption in the UK 2025 figures for 16–24s.
  - Youth usage data for Substack or WhatsApp Channels.
  - A nationally representative 2024–2026 survey of Indian Gen Z gender attitudes.
  - Irish Gen Z-specific polling on feminism.
  - Whether the UK under-16 ban will apply in Northern Ireland.
