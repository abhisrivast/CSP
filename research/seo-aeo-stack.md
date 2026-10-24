# SEO, AEO/GEO and technical stack: Cultural Shock Party (culturalshockparty.com)

Research date: 2026-10-24. Scope: Part A (how to be found and cited by Google AI Overviews/AI Mode, Bing/Copilot, ChatGPT search, Perplexity, Claude, Gemini), Part B (keyword and topic opportunities plus 40 FAQ questions), Part C (stack facts checked on official pages, and a recommended stack).

**How this was researched.** Every factual claim below links to a page that was opened during this pass. Where a page shows a "last updated" or publication date, it is given. Confidence labels:
- **High**: from the vendor's or standard body's own page.
- **Medium**: from a reputable secondary source, or an official page that was only partly readable.
- **Low**: indicative only.

**Limits of this pass.**
1. The shared web-search budget ran out partway through. Some points could not be re-checked and are marked **UNVERIFIED**: how ChatGPT search and Claude pick their sources, the X/Twitter card specs (the page returned HTTP 402), and Gen Z search-behaviour statistics.
2. No keyword-volume tool was available, so Part B has no search-volume or difficulty numbers. The clusters are based on reasoning and must be checked with real tools after launch (see B.4).
3. culturalshockparty.com is currently a parked domain on Hostinger DNS, with no site live ([culturalshockparty.com](https://culturalshockparty.com/), checked 2026-10-24, high).

---

## 0. TL;DR: decisions that matter most

1. **AEO/GEO is SEO, plus being quotable and being known off-site.**
   - Google's own guide (updated 2026-07-10) says AI Overviews and AI Mode are "rooted in our core Search ranking and quality systems". It says there is no special schema, no llms.txt and no "chunking" requirement ([Google AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).
   - Bing/Microsoft gives the most concrete formatting advice: specific headings, Q&A pairs, 1–2 sentence self-contained answers, tables, and no key facts hidden in tabs, PDFs or images ([Microsoft Advertising blog, 2025-10-08](https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers)).
2. **Write answer-first pages with original evidence.**
   - In the academic GEO study, adding quotations, statistics and cited sources raised a source's visibility in generative answers by up to ~40%. Keyword stuffing did not help ([Aggarwal et al., KDD 2024](https://arxiv.org/abs/2311.09735)).
   - CSP's research mission is its biggest AEO asset. Publish original surveys and datasets with their methodology.
3. **FAQ rich results are gone.** Google limited them to government and health sites in Aug 2023. It then deprecated them entirely: "no longer appear in Google Search starting May 7, 2026" ([Google Search updates log](https://developers.google.com/search/updates)).
   - Still build a strong, visible FAQ for answer engines and Bing.
   - FAQPage JSON-LD is now optional and low priority.
4. **robots.txt: allow every search/answer bot.**
   - Blocking OAI-SearchBot removes you from ChatGPT search answers.
   - Blocking PerplexityBot or Claude-SearchBot reduces visibility in those products.
   - **Google-Extended is not "training only".** It also controls grounding in Gemini Apps, so blocking it can cut Gemini visibility. It does not affect Google Search ([Google crawlers doc, 2026-10-15](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers)).
   - Default recommendation: allow the training bots too, because the movement wants its ideas spread. This is a founder values decision.
5. **llms.txt is cheap but almost nobody reads it.**
   - Google: not needed for Search ([updates log, 2026-06-15](https://developers.google.com/search/updates)).
   - Ahrefs logs: 97% of llms.txt files got zero requests in May 2026 ([PPC Land, 2026-07-02](https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/)).
   - SE Ranking found no correlation with AI citations ([SE Ranking](https://seranking.com/blog/llms-txt/)).
   - Add one as a 15-minute nicety, never as a strategy.
6. **Netlify Free is now 300 credits a month with a hard stop.** When the credits run out, "all web projects are paused" ([Netlify docs, updated 2026-08-12](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/how-credits-work/)).
   - Each production deploy costs 15 credits, bandwidth costs 20 credits/GB, and requests cost 2 credits per 10k.
   - So **every CMS "publish" costs 5% of the monthly budget.** A viral campaign could take the site offline.
   - Batch deploys and keep pages light. Be ready to move to Personal ($9) or Cloudflare Pages (see C.1 and C.9).
7. **Recommended stack:**
   - **Astro (static output) + Markdown content in Git**, with Sveltia CMS as the editor (Decap-compatible, GitHub backend through Netlify's OAuth provider, no Git Gateway).
   - **Netlify Forms** (unlimited on credit plans).
   - **GoatCounter or Cloudflare Web Analytics** for analytics.
   - **Substack or Buttondown** for the newsletter. Substack has no subscriber cap; Buttondown has a 50% non-profit discount.
   - Do not use Netlify Git Gateway for a new build: it is deprecated.
8. **Entity building matters as much as on-page work.**
   - ChatGPT's most-cited domains are Reddit (16.8%), Wikipedia (7.0%), YouTube (2.5%) and LinkedIn (1.1%) ([Ahrefs, 2026-09-02](https://ahrefs.com/blog/most-cited-domains-in-chatgpt/)).
   - Build consistent `sameAs` profiles, a founder Person page, and earned media.
   - Create a Wikidata item only once there is independent coverage.

---

## Part A: Being found and cited (2025–2026 best practice)

### A.1 How each engine finds content and what controls it

| Engine / product | What it relies on (verified) | Control token(s) | Effect of blocking | Source (date) | Conf. |
|---|---|---|---|---|---|
| Google Search, AI Overviews, AI Mode | Pages must be indexed and "eligible to be shown in Google Search with a snippet". No extra requirements. Uses RAG and "query fan-out". | `Googlebot`; `nosnippet`, `data-nosnippet`, `max-snippet`, `noindex`; new site-wide **"Search generative AI control"** in Search Console | Blocking Googlebot removes you from Search. Snippet limits also restrict AI features. Do **not** switch off the Search Console generative AI control. | [AI features (2025-12-10)](https://developers.google.com/search/docs/appearance/ai-features); [AI optimization guide (2026-07-10)](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide); [Control what you share (2026-10-21)](https://developers.google.com/search/docs/crawling-indexing/control-what-you-share) | High |
| Gemini Apps / Vertex grounding | `Google-Extended` controls use for training future Gemini models **and** grounding in Gemini Apps and Grounding with Google Search on Vertex AI. | `Google-Extended` (a robots.txt token only, with no separate user agent) | Does **not** affect Google Search inclusion or ranking. Blocking it limits Gemini training and grounding. | [Google common crawlers (2026-10-15)](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers) | High |
| ChatGPT search | `OAI-SearchBot` is "for search". `GPTBot` is for training. `ChatGPT-User` handles user-initiated fetches ("robots.txt rules may not apply"). | `OAI-SearchBot`, `GPTBot`, `ChatGPT-User`, `OAI-AdsBot` | Sites that opt out of OAI-SearchBot "will not be shown in ChatGPT search answers" (navigational links may still show). Blocking GPTBot only opts out of training. | [OpenAI bots](https://developers.openai.com/api/docs/bots) (undated, read 2026-10-24) | High |
| ChatGPT search: which web index it queries | **UNVERIFIED** in this pass. The OpenAI help article returned HTTP 403. | n/a | n/a | n/a | n/a |
| Microsoft Bing / Copilot | Bing's index powers Copilot. Bing Webmaster Tools has an **AI Performance** report (public preview, 2026-02-10) showing citations, cited pages and sampled "grounding queries". | `Bingbot`; IndexNow | Standard Bing controls apply. | [Bing Webmaster blog (2026-02-10)](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview) | High |
| Perplexity | `PerplexityBot` surfaces and links sites in Perplexity search and "is not used to crawl content for AI foundation models". `Perplexity-User` handles user fetches and "generally ignores robots.txt rules". | `PerplexityBot`, `Perplexity-User` | Blocking PerplexityBot would keep you out of Perplexity results. Changes take up to 24 hours. | [Perplexity bots](https://docs.perplexity.ai/guides/bots) | High |
| Claude (Anthropic) | `ClaudeBot` collects content for training. `Claude-SearchBot` indexes for search quality. `Claude-User` fetches pages when users ask. Respects robots.txt and supports `Crawl-delay`. | `ClaudeBot`, `Claude-SearchBot`, `Claude-User` | Blocking Claude-SearchBot or Claude-User "may reduce visibility". Blocking ClaudeBot signals that future content should be excluded from training. | [Anthropic support (2026-04-07)](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) | High |
| Claude web search: which index it queries | **UNVERIFIED** in this pass. | n/a | n/a | n/a | n/a |
| Apple (Siri, Spotlight, Safari) | `Applebot` powers search features. `Applebot-Extended` "does not crawl webpages". It only controls whether content is used for Apple's AI training. | `Applebot`, `Applebot-Extended` | Pages that disallow Applebot-Extended "can still be included in search results". | [Apple support (2026-09-04)](https://support.apple.com/en-us/119829) | High |
| Common Crawl | `CCBot` builds an open web archive. Others impersonate it; real CCBot uses dedicated IP ranges with reverse DNS. | `CCBot` | Removes you from future Common Crawl snapshots. Many datasets are built from Common Crawl, but the CCBot page itself does not name LLM training. | [CCBot page](https://commoncrawl.org/ccbot) | High (the page does not mention LLM use) |

**Key evidence on how AI picks sources:**

- **Google AI Overviews and rankings.**
  - In July 2025, Ahrefs found 76.1% of AI Overview citations ranked in the top 10 ([Ahrefs, 2025-07-21](https://ahrefs.com/blog/search-rankings-ai-citations/)).
  - A 2026 re-run found only 38% in the top 10, 31.2% at positions 11–100 and 31.0% beyond 100. Ahrefs attributes part of the change to better parsing, and possibly to query fan-out ([SEJ, 2026-03-02](https://www.searchenginejournal.com/google-ai-overview-citations-from-top-ranking-pages-drop-sharply/568637/)). Medium confidence.
  - **Implication:** a new site can be cited for the specific sub-questions that fan-out generates, before it ranks for head terms. Ranking still helps.
- **Copilot citations are concentrated.** One agency analysis of ~19.7k Copilot citations found that a handful of pages took most citations. That is a secondary search-result summary only; low confidence.
- **ChatGPT citations lean on community and reference sites.** By mention share: Reddit 16.8%, Wikipedia 7.0%, Forbes 3.1%, YouTube 2.5%, LinkedIn 1.1%. This is a US-only, one-month snapshot from a vendor ([Ahrefs, 2026-09-02](https://ahrefs.com/blog/most-cited-domains-in-chatgpt/)). Medium confidence.

### A.2 Content structure that gets cited

**What the official sources say:**

- **Google.** Unique, non-commodity content with a "unique point of view" and first-hand insight. Organise content into paragraphs and sections with headings. Use semantic HTML. Add high-quality images and video. Google warns that chunking content into tiny pieces, AI-specific rewriting and mass-producing pages for fan-out queries are unnecessary. Mass-producing pages can breach the scaled-content-abuse policy ([AI optimization guide, 2026-07-10](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide); [Succeeding in AI search, John Mueller, 2025-05-21](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search)). High.
- **Google spam policies** now explicitly "also apply to generative AI responses in Google Search" (2026-05-15) ([updates log](https://developers.google.com/search/updates)). High.
- **Microsoft Bing** ([2025-10-08](https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers)). High.
  - Titles should "clearly summarize what the content delivers", and H1 should match the title.
  - Use specific H2/H3 headings (not "Learn more") and pair direct questions with clear answers.
  - Write "snippable" answers of one to two self-contained sentences. Use lists and tables for steps and comparisons.
  - Anchor claims in measurable facts, not vague words.
  - **Avoid:** long walls of text, answers hidden in tabs or expandable menus, PDFs for core information, and text only in images.
- **Bing AI Performance guidance** ([2026-02-10](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)). High.
  - Use clear headings, tables and FAQ sections.
  - Support claims with examples, data and cited sources.
  - Update regularly and use IndexNow.
  - Keep text, images and video consistent about the same entities.
- **GEO research** ([arXiv 2311.09735 v3, 2024-06-28; KDD 2024](https://arxiv.org/abs/2311.09735); [full text](https://ar5iv.labs.arxiv.org/html/2311.09735)). High for what the paper reports. It is a lab benchmark, so real-world results vary.
  - Best methods vs a 19.5 baseline: Quotation Addition 27.8, Statistics Addition 25.9, Fluency Optimization 25.1, Cite Sources 24.9.
  - Keyword Stuffing scored 17.8, below baseline.
  - "Lower-ranked websites… benefit significantly more". Cite Sources raised visibility +115.1% for sites ranked 5th.

**CSP page template.** These rules are synthesised from the sources above.

1. **H1 plus a one- or two-sentence direct answer** in the first paragraph. Example: "Fourth-wave feminism is the feminist activism that grew from around 2012, organised largely online and focused on…"
2. **A 3–5 bullet "Key points" summary** near the top, written in plain HTML. Do not put it in an accordion.
3. **Question-phrased H2s** that mirror real queries ("When did fourth-wave feminism start?", "What are examples of fourth-wave feminism?"), each answered in its first sentence.
4. **Evidence blocks**: a named statistic with its source and date, a short quotation from a named person (founder, researcher, campaigner) with attribution, and a "Sources" list at the end with outbound links to primary sources.
5. **Original data** wherever possible: CSP surveys, campaign outcome numbers, public-memory archives. Give each a methodology note, a downloadable CSV, and a chart with a text summary underneath (charts are images, so the text must carry the facts).
6. **Comparison tables** where they help (first vs second vs third vs fourth wave; CSP vs other groups by focus).
7. **Visible byline** (real person, linked to a profile page), **"Published" and "Last updated" dates**, and a short "How we made this" note when AI tools were used. Google asks for "Who / How / Why" ([Creating helpful content, 2026-10-05](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)).
8. **No key text inside images, PDFs, carousels or tabs.** Make posters and zines into HTML pages first, with the PDF as an extra.
9. **One canonical URL per topic.** Do not spin out near-duplicate pages for each query variant (Google scaled-content warning).

### A.3 E-E-A-T and founder/author entity signals

- **What Google says about E-E-A-T** ([Creating helpful content, updated 2026-10-05](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)). High.
  - E-E-A-T means experience, expertise, authoritativeness, trust, and "trust is most important".
  - E-E-A-T is not itself a ranking factor, but Google uses signals that line up with it, weighted more on YMYL topics.
  - Use accurate bylines. **Fabricated author profiles (made-up names, AI-generated headshots, false credentials) are deception.**
- **Article/BlogPosting markup** ([Article doc, 2026-09-08](https://developers.google.com/search/docs/appearance/structured-data/article)). High.
  - List each author separately. Use `Person` for people, `author.name` (name only) and `author.url` pointing to a page that uniquely identifies the author. `sameAs` is an accepted alternative.
- **ProfilePage markup** covers "About me" and author or employee pages, with `mainEntity` a Person and `sameAs` to external profiles ([ProfilePage doc, 2026-09-08](https://developers.google.com/search/docs/appearance/structured-data/profile-page)). High.

**CSP actions:**

1. Build a founder page at `/about/rubby-singh/` with ProfilePage + Person JSON-LD. Include:
   - `name` "Rubby Singh", `jobTitle` "Founder", `worksFor` → CSP `@id`, and an `image` (a real photo).
   - `sameAs`: [LinkedIn](https://www.linkedin.com/in/rubby-singh-565697214/) and [Instagram](https://www.instagram.com/happytappysinghni/).
   - A bio in plain text and a list of talks and press.
2. Give every author their own profile page. Blog bylines link to it.
3. Add an editorial standards page (`/about/editorial-standards/`) covering sourcing, corrections and AI-use policy. Link it from the Organization markup with `publishingPrinciples`, and add `ethicsPolicy` if there is a code of conduct. Both properties are inherited by schema.org/NGO ([schema.org/NGO](https://schema.org/NGO)). High.
4. Use the founder's name and the org name **identically** everywhere: site, socials, press kit, Companies House or charity records if any.

### A.4 Structured data worth adding (status as of Oct 2026)

**Google's position.** Structured data is "not required" for generative AI search and there is "no special schema". Keep using it for rich results, and make sure it matches visible content ([AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide); [AI features](https://developers.google.com/search/docs/appearance/ai-features)). Other engines (Bing) explicitly mention FAQ and event schema ([Microsoft, 2025-10-08](https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers)).

| Type | Where on CSP site | Google status (verified) | Why add it anyway | Priority |
|---|---|---|---|---|
| `WebSite` (`name`, `alternateName`, `url`) | Home page only | Supported for site names, home page only ([Site names, 2025-12-10](https://developers.google.com/search/docs/appearance/site-names)). **Sitelinks search box removed** 2024-11-29, so no `SearchAction` is needed ([updates log](https://developers.google.com/search/updates)). | Gets "Cultural Shock Party" shown as the site name. Use `alternateName: ["CSP", "culturalshockparty.com"]`. | P0 |
| `Organization` → **`NGO`** subtype | Home and `/about/` | No required properties; add as many relevant ones as possible. Use the most specific subtype. Place on the home page or one about page ([Organization doc, 2026-09-08](https://developers.google.com/search/docs/appearance/structured-data/organization)). `NGO` is Thing > Organization > NGO ([schema.org/NGO](https://schema.org/NGO)). | Central entity node: `logo`, `sameAs` (all socials), `foundingDate`, `founder` (schema.org property; not in Google's list), `areaServed`, `knowsAbout`, `publishingPrinciples`. | P0 |
| `PoliticalParty` (alternative) | Only if CSP is a **registered** party | Exists on schema.org (Thing > Organization > PoliticalParty); the page showed the dev-version banner ([schema.org/PoliticalParty](https://schema.org/PoliticalParty)). | Only use it if the legal status is true. Otherwise "Party" in markup could mislead. | Decide |
| `Person` + `ProfilePage` | Founder and author pages | Supported ([ProfilePage, 2026-09-08](https://developers.google.com/search/docs/appearance/structured-data/profile-page)) | E-E-A-T and author disambiguation | P0 |
| `BreadcrumbList` | All inner pages | Breadcrumbs show **on desktop only** since 2025-01-22 ([updates log](https://developers.google.com/search/updates)) | Cheap, and makes site structure explicit | P1 |
| `Article` / `BlogPosting` | Blog, Learn and Case-study pages | Supported. Images ≥50k pixels (width × height), in 16:9, 4:3 and 1:1 ([Article doc](https://developers.google.com/search/docs/appearance/structured-data/article)) | Author, dates, headline | P0 |
| `FAQPage` | `/faq/` and inline FAQs | Rich results limited to gov/health sites from 2023-08-08 ([Google blog](https://developers.google.com/search/blog/2023/08/howto-faq-changes)), **deprecated from 2026-05-07, docs removed 2026-06-15** ([updates log](https://developers.google.com/search/updates)) | No Google display. Bing mentions FAQ schema; low cost if generated from the same content. **Visible Q&A is what matters.** | P2 |
| `Event` | `/events/<slug>/` (one event per page) | Requires `name`, `startDate`, `location`. **Physical events only**; virtual-only events are not eligible; multi-event listing pages are not eligible. Available in the UK and India (English) among others; **Ireland is not listed** ([Event doc, 2026-09-08](https://developers.google.com/search/docs/appearance/structured-data/event)) | Marches, talks, workshops | P1 |
| `CollectionPage` / `ItemList` | `/case-studies/`, `/blog/`, `/learn/` hubs | No Google rich result | Semantic hub signals for other parsers | P2 |
| `DefinedTermSet` + `DefinedTerm` | `/learn/glossary/` | No Google rich result. DefinedTermSet is "a glossary, dictionary or enumeration" ([schema.org](https://schema.org/DefinedTermSet), [DefinedTerm](https://schema.org/DefinedTerm)) | Good match for "X meaning" queries. Each term gets an anchor and `@id`. | P2 |
| `Dataset` | `/research/<slug>/` | Google: Dataset markup "is only used by Dataset Search" (2025-11-05 entry, [updates log](https://developers.google.com/search/updates)) | Makes CSP's original research findable in Google Dataset Search | P1 (once research ships) |
| `ClaimReview` (fact-checks) | n/a | Phased out from Search, June–Sept 2025 ([Google blog, 2025-06-12](https://developers.google.com/search/blog/2025/06/simplifying-search-results)) | Skip | n/a |

**JSON-LD skeleton.** One `@graph` on the home page; other pages reference it by `@id`. Placeholders are in `<>`; do not publish them.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://culturalshockparty.com/#website",
      "url": "https://culturalshockparty.com/",
      "name": "Cultural Shock Party",
      "alternateName": ["CSP", "culturalshockparty.com"],
      "publisher": { "@id": "https://culturalshockparty.com/#org" },
      "inLanguage": "en-GB"
    },
    {
      "@type": "NGO",
      "@id": "https://culturalshockparty.com/#org",
      "name": "Cultural Shock Party",
      "alternateName": "CSP",
      "url": "https://culturalshockparty.com/",
      "logo": "https://culturalshockparty.com/brand/logo-512.png",
      "description": "<one-sentence mission, identical to the visible About text>",
      "foundingDate": "<YYYY>",
      "founder": { "@id": "https://culturalshockparty.com/about/rubby-singh/#person" },
      "areaServed": ["<confirm base country>", "Worldwide"],
      "knowsAbout": ["Fourth-wave feminism", "Intersectional feminism", "Feminist political research", "Public memory", "Digital culture"],
      "publishingPrinciples": "https://culturalshockparty.com/about/editorial-standards/",
      "sameAs": ["<Instagram>", "<TikTok>", "<YouTube>", "<LinkedIn page>", "<Wikidata, once it exists>"]
    },
    {
      "@type": "Person",
      "@id": "https://culturalshockparty.com/about/rubby-singh/#person",
      "name": "Rubby Singh",
      "jobTitle": "Founder",
      "worksFor": { "@id": "https://culturalshockparty.com/#org" },
      "url": "https://culturalshockparty.com/about/rubby-singh/",
      "sameAs": [
        "https://www.linkedin.com/in/rubby-singh-565697214/",
        "https://www.instagram.com/happytappysinghni/"
      ]
    }
  ]
}
```

### A.5 llms.txt / llms-full.txt: real adoption status

- **What it is.** Proposed by Jeremy Howard on 2024-09-03 (spec v2, last modified 2026-08-10). It is a Markdown file at `/llms.txt` containing an H1 (the only required part), a blockquote summary, and H2 "file lists" of links. An "Optional" H2 holds secondary links. Pages can also offer `.md` versions, linked with `rel="alternate" type="text/markdown"` ([llmstxt.org](https://llmstxt.org/)). High. The spec page does not define `llms-full.txt`; that is a community convention.
- **Google Search** says llms.txt files "aren't needed for Google Search", and that maintaining them for other services is fine (2026-06-15) ([updates log](https://developers.google.com/search/updates)). The AI optimization guide lists llms.txt among unnecessary tactics ([guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). High.
- **Google is inconsistent across products.** Lighthouse 13.3's experimental "Agentic Browsing" category checks for llms.txt ([SEJ, 2026-05-20](https://www.searchenginejournal.com/googles-llms-txt-guidance-depends-on-which-product-you-ask/575431/)). Medium.
- **Usage evidence** ([PPC Land, 2026-07-02](https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/)). Medium; secondary reporting of vendor studies.
  - Originality.ai counted 36,120 llms.txt files by May 2026 (8.8× in a year); `llms-full.txt` was on 2,463 sites.
  - Ahrefs logs across 137k domains: **97% of llms.txt files received zero requests** in May 2026. GPTBot made 4.51% of the requests that did arrive and ClaudeBot 0.80%.
- **Citation correlation.** SE Ranking analysed ~300k domains (10.13% had llms.txt) and found no correlation with AI citations; removing the variable improved their model ([SE Ranking, dated 2026-10-15 on page](https://seranking.com/blog/llms-txt/)). Medium.
- **Recommendation.** Generate `/llms.txt` at build time from the sitemap (H1 "Cultural Shock Party", a one-line mission, links to Manifesto, About, FAQ, Learn hubs and Research). Skip `llms-full.txt` until there is evidence it matters. **Zero effort beyond that.**

### A.6 robots.txt policy for AI crawlers

Two kinds of bot need to be kept apart:

- **Search and answer bots** decide whether CSP can be cited: Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Applebot. **Always allow these.**
- **Training-only tokens**: GPTBot, ClaudeBot, Applebot-Extended, CCBot. Google-Extended sits in between, because it is training plus Gemini grounding.

**Values recommendation.** CSP's mission is turning ideas into public consciousness, so being part of what models "know" is aligned with that mission. The default is therefore **allow all**. If the founder prefers to withhold training use, block GPTBot, ClaudeBot, Applebot-Extended and CCBot. Think twice about Google-Extended, because blocking it also limits Gemini Apps grounding ([Google](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers)).

**Note:** ChatGPT-User and Perplexity-User generally ignore robots.txt for user-initiated fetches ([OpenAI](https://developers.openai.com/api/docs/bots), [Perplexity](https://docs.perplexity.ai/guides/bots)).

```txt
# culturalshockparty.com/robots.txt
# A bot that matches a named group ignores the * group, so repeat Disallow lines in each group.

User-agent: *
Allow: /
Disallow: /admin/

# Search & answer engines: these decide whether CSP can be cited
User-agent: Googlebot
User-agent: Bingbot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Applebot
Allow: /
Disallow: /admin/

# Model training (and Gemini grounding for Google-Extended).
# Founder decision: default ALLOW. Change to "Disallow: /" to opt out.
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: CCBot
Allow: /
Disallow: /admin/

Sitemap: https://culturalshockparty.com/sitemap-index.xml
```

Also add `<meta name="robots" content="noindex">` on `/admin/`. Grouping several `User-agent` lines over one rule set is standard robots.txt syntax; the RFC was not re-opened in this pass.

### A.7 Entity building (Wikidata, sameAs, Knowledge Panel)

- **Wikidata notability.** An item needs a Wikimedia sitelink, **or** must be "a clearly identifiable conceptual or material entity" described by "serious, publicly available references", **or** must fill a structural need ([Wikidata:Notability](https://www.wikidata.org/wiki/Wikidata:Notability)). High.
  - **Action:** create Wikidata items for CSP (and possibly the founder) **after** there are two or three independent press or academic references.
  - Then add the Wikidata URL to `sameAs`.
  - Do not write a Wikipedia article about your own organisation. This is a recommendation; Wikipedia's COI policy was not re-checked this pass.
- **Knowledge Panel.** When a panel appears, use "Claim this knowledge panel" and verify by signing in to an official profile Google lists (YouTube, Search Console, etc.). Not all panels can be claimed ([Google Knowledge Panel help](https://support.google.com/knowledgepanel/answer/7534902)). High.
  - **Action:** verify the site in Search Console early, and run an official YouTube channel. Both serve as verification routes.
- **Consistent `sameAs`.** Use the same name, logo, one-line description and link to culturalshockparty.com on every profile (Instagram, TikTok, YouTube, LinkedIn page, Threads/Bluesky, Substack). List each profile in the Organization `sameAs`.
- **Off-site presence.** The domains ChatGPT cites most are community, reference and video sites ([Ahrefs, 2026-09-02](https://ahrefs.com/blog/most-cited-domains-in-chatgpt/)). Recommendations:
  - Take part genuinely in relevant subreddits; do not spam.
  - Publish explainer videos on YouTube with transcripts on the site.
  - Keep the founder active on LinkedIn.
  - Pitch original research to UK, Irish and Indian media.
- **Name disambiguation.** "Cultural Shock Party" sits close to the common phrase "culture shock", so pair the name with a descriptor everywhere. Example title tag: "Cultural Shock Party (CSP) | Fourth-wave feminist movement". "Party" may also suggest a registered political party (see open questions).

### A.8 Information architecture, internal linking and topic clusters

The URL plan is hub-and-spoke. Google asks that content be "findable through internal links" ([AI features](https://developers.google.com/search/docs/appearance/ai-features)).

```
/                          Home: mission in one sentence, three pillars, latest research, Join CTA
/manifesto/                Canonical statement of beliefs (quotable, dated, versioned)
/about/                    Who we are, history, structure, funding transparency
/about/rubby-singh/        Founder (ProfilePage + Person)
/about/editorial-standards/
/what-we-do/               Hub → /research/, /street-politics/, /public-memory/, /digital-culture/, /accountability/
/case-studies/             CollectionPage → /case-studies/<campaign>/ (problem → action → outcome → numbers)
/learn/                    Educational hub (pillar pages)
  /learn/fourth-wave-feminism/
  /learn/intersectional-feminism/
  /learn/feminism-and-gen-z/
  /learn/how-to-join-a-feminist-movement/
  /learn/feminist-organisations/   (UK, NI, Ireland, India, global: positive, collaborative directory)
  /learn/glossary/                 (DefinedTermSet; one anchor per term)
/research/                 Original data → /research/<study>/ (Dataset + CSV)
/blog/                     Commentary, news, essays (BlogPosting)
/events/                   Listing → /events/<slug>/ (Event, physical only for Google)
/faq/                      40+ visible Q&As grouped by theme
/join/                     Membership/volunteer form (Netlify Forms) + newsletter
/press/                    Press kit: boilerplate, logos, founder bio and photos, fact sheet
/contact/
```

**Linking rules:**
1. Every blog post links up to one pillar page and across to two or three siblings.
2. Each pillar links down to all its spokes, to the relevant glossary terms, and to Join.
3. Each case study links to the "What we do" pillar it belongs to.
4. Use descriptive anchor text, not "click here". Bing warns against vague labels ([Microsoft](https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers)).

### A.9 Core Web Vitals thresholds

- **Good** is LCP ≤ 2.5 s, INP ≤ 200 ms and CLS ≤ 0.1, measured at the **75th percentile** of page loads, separately for mobile and desktop ([web.dev, updated 2024-10-31](https://web.dev/articles/vitals); [Google Search Central, 2025-12-10](https://developers.google.com/search/docs/appearance/core-web-vitals)). High.
- **INP** "poor" is >500 ms. INP succeeded FID ([web.dev INP](https://web.dev/articles/inp)). High.
- LCP poor (>4 s) and CLS poor (>0.25) are the commonly cited bands but were **not re-verified** in this pass.
- Google: good CWV "aligns with what our core ranking systems seek to reward" ([Search Central](https://developers.google.com/search/docs/appearance/core-web-vitals)).
- **How Astro gets CSP there:**
  - Zero JS by default.
  - Self-hosted, subset WOFF2 fonts with `font-display: swap`.
  - A width and height on every image.
  - Build-time AVIF/WebP with responsive `srcset`.
  - No heavy embeds above the fold; load Instagram and TikTok embeds on click, as a façade.

### A.10 Image SEO

From [Google image SEO, updated 2026-03-02](https://developers.google.com/search/docs/appearance/google-images). High.

- Use real `<img>` elements; "Google doesn't index CSS images".
- Always give `srcset` and `<picture>` a fallback `src`.
- Supported formats: BMP, GIF, JPEG, PNG, WebP, SVG, AVIF.
- Use descriptive filenames and alt text; do not keyword-stuff.
- Place images near relevant text and keep each image at a stable URL.
- Choose a preferred image with `primaryImageOfPage` or `og:image`. Avoid generic logos or images with text as the main image.
- Add an image sitemap if images might not be found otherwise.

**CSP-specific advice:**
- Protest and campaign photos need consent and attribution. This is especially important for minors, given that Gen Alpha is part of the audience.
- Captions should be real sentences (who, what, where, when).
- Any infographic needs its key numbers in the HTML text as well, because Bing warns against text only in images.

### A.11 Open Graph and social cards

- **Open Graph required tags:** `og:title`, `og:type`, `og:image`, `og:url` ([ogp.me](https://ogp.me/)). High.
  - Add `og:description`, `og:site_name`, `og:locale` (e.g. `en_GB`), `og:image:alt`, `og:image:width` and `og:image:height`.
  - For articles, add `article:published_time`, `article:modified_time`, `article:author` and `article:tag`.
- **LinkedIn link previews** need og:title, og:image, og:description and og:url. Images must be at least **1200 × 627 px**, at a recommended **1.91:1** ratio, and at most **5 MB** ([LinkedIn help](https://www.linkedin.com/help/linkedin/answer/a521928)). High.
- **X/Twitter:** use `twitter:card = summary_large_image`. The X developer docs returned HTTP 402, so the exact image specs are **UNVERIFIED**; X falls back to OG tags.
- **Practice:**
  - Generate a 1200×630 branded OG image per page at build time: title, CSP mark, and a high-contrast palette that matches the brand.
  - Test with LinkedIn Post Inspector and Meta's Sharing Debugger before campaigns.
  - Since Gen Z share via Instagram and WhatsApp, also check how previews look in WhatsApp.

### A.12 hreflang (only if multilingual)

From [Google localized versions, updated 2026-09-21](https://developers.google.com/search/docs/specialty/international/localized-versions). High.

- Three equivalent methods: HTML `<link>`, HTTP header, or sitemap.
- Every version must reference itself and all the others. "If two pages don't both point to each other, the tags will be ignored."
- Use `x-default` as the fallback.
- Codes are ISO 639-1 language plus an optional ISO 3166-1 region (e.g. `en-GB`); a country code alone is invalid.
- Google "doesn't use hreflang or the HTML lang attribute to detect the language".

**Recommendation:**
- **Launch in English only, with no hreflang.** Do not create en-GB, en-IE and en-IN copies of the same text; that would be duplicate content with little gain.
- If CSP later translates key pages (for example Irish `ga`, Hindi `hi`, or other languages its communities use), put them under `/ga/` or `/hi/`, add hreflang through `@astrojs/sitemap`'s `i18n` option ([Astro sitemap docs](https://docs.astro.build/en/guides/integrations-guide/sitemap/)), and set `x-default` to English.

### A.13 Measurement

- **Google Search Console.** Verify the domain property. AI Overviews and AI Mode traffic appears inside the "Web" search type ([AI features](https://developers.google.com/search/docs/appearance/ai-features)), and the AI optimization guide points to a "Generative AI performance report" ([guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). Medium on that report's exact availability.
  - Google warns that "No third-party tool has access to our internal ranking or AI systems."
- **Bing Webmaster Tools.** Use the AI Performance report (citations, cited pages, grounding queries) ([Bing, 2026-02-10](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)). Turn on **IndexNow**, which is supported by Bing, Naver, Seznam.cz, Yandex and Yep; Google is not listed ([indexnow.org](https://www.indexnow.org/)).
- **Analytics.** Watch referrers from chatgpt.com, perplexity.ai, copilot.microsoft.com, gemini.google.com and claude.ai in GoatCounter or Cloudflare. **UNVERIFIED:** the exact referrer and UTM conventions each AI product uses.
- **Manual AI checks, monthly.** Ask ChatGPT, Perplexity, Gemini, Copilot and Claude 20 fixed prompts from Part B, and log whether CSP is cited. Answers vary from run to run, so track trends over time rather than single answers.

---

## Part B: Keyword and topic opportunities

### B.1 Competitive reality

- Head terms ("fourth wave feminism", "intersectional feminism") will be dominated by Wikipedia, encyclopaedias, universities and big media. AI Overviews will answer the basic definition.
- **Where a new movement can win:**
  1. Long-tail and fan-out sub-questions: examples, timelines, local angles, "how to" queries.
  2. Gen Z-framed explanations written by Gen Z.
  3. Local queries (Northern Ireland, Ireland, UK, India).
  4. Original data nobody else has.
  5. Its own brand SERP.
- The Wikipedia article on fourth-wave feminism ([Wikipedia](https://en.wikipedia.org/wiki/Fourth-wave_feminism), read 2026-10-24; medium as a tertiary source):
  - Dates the wave to about 2012 and defines it by social-media activism, intersectionality, and opposition to harassment and rape culture.
  - Lists UK examples (Everyday Sexism, UK Feminista, Reclaim the Night) and Indian examples (the 2012 Delhi protests, Pinjra Tod, Blank Noise).
  - Gives **no Irish examples**, and Repeal the 8th is not mentioned. That gap is an opening for CSP content, with careful sourcing.
- **Verified existing organisations** (useful for a positive, collaborative directory page and for outreach):
  - [Women's Resource and Development Agency (WRDA)](https://wrda.net/), Belfast, NI.
  - [National Women's Council of Ireland](https://www.nwci.ie/), Dublin.
  - [Fawcett Society](https://www.fawcettsociety.org.uk/), England and Wales charity.
  - [Jagori](https://www.jagori.org/), New Delhi.
  - All home pages checked 2026-10-24. High that they exist; whether they rank for these queries is **unverified**.

### B.2 Topic clusters

No volume data was available. "Win chance" is a judgement call, to be checked later.

| # | Cluster | Example queries | Intent | Target page | Win chance | How to win |
|---|---|---|---|---|---|---|
| 1 | **Fourth-wave feminism (definitional)** | what is fourth wave feminism; fourth wave feminism examples; when did fourth wave feminism start; fourth wave feminism characteristics; third vs fourth wave feminism; criticisms of fourth wave feminism; is there a fifth wave of feminism; fourth wave feminism social media | Informational | `/learn/fourth-wave-feminism/` + spokes | Low for the head term, **medium–high for the long tail** | Answer-first definition, a timeline table, a waves comparison table, examples with UK/NI/IE/India angles, quotes from activists, and CSP's own "what the fourth wave needs next" stance |
| 2 | **Intersectional feminism** | intersectional feminism meaning; intersectional feminism examples; what does intersectionality mean in simple terms; intersectional feminism vs feminism; why intersectionality matters | Informational | `/learn/intersectional-feminism/` + glossary | Low–medium | Plain-English definition, everyday examples, credit to origin scholarship with primary-source citations, a Gen Z explainer video with transcript |
| 3 | **Gen Z, Gen Alpha and feminism** | feminist movement gen z; is gen z feminist; gen z feminism tiktok; feminism for teenagers; how to explain feminism to kids; online feminism; feminist memes | Informational / identity | `/learn/feminism-and-gen-z/` | **Medium–high** (few authoritative pages written by Gen Z themselves) | Original CSP youth survey (Dataset), quotes from young members, age-appropriate Gen Alpha resources page |
| 4 | **Joining and taking action** | how to join a feminist movement; feminist groups near me; feminist organisations to volunteer with; how to start a feminist society at school / university; how to be a feminist activist; how to organise a protest safely; feminist protest ideas | Transactional / how-to | `/learn/how-to-join-a-feminist-movement/` → `/join/` | **High** (high-intent, practical, low competition) | Step lists, checklists, safety guidance, clear CTAs, local chapters and events with Event schema |
| 5 | **Organisations by place** | feminist organisations Northern Ireland; women's rights groups Belfast; feminist organisations UK; feminist groups Ireland; feminist organisations India; women's rights NGOs India | Navigational / commercial investigation | `/learn/feminist-organisations/` (+ region sections) | **Medium–high** | A generous, regularly updated directory that includes others (positive, collaborative positioning, and linkable). CSP's own entry sits within it, clearly labelled. |
| 6 | **Issues and policy** (needs research) | gender pay gap UK 2026; violence against women and girls Northern Ireland; online misogyny; manosphere explained; period poverty UK/India; women in politics UK/Ireland/India | Informational (YMYL-adjacent) | `/research/*` + `/blog/*` | Medium if there is original data | Original data, primary-source statistics with dates, institutional accountability trackers (e.g. "pledge tracker"), quick updates with IndexNow |
| 7 | **Public memory and history** | feminist history Northern Ireland; Irish women's movement history; Indian feminist movements history; feminist anniversaries this month; forgotten feminist activists | Informational | `/what-we-do/public-memory/` + series | **Medium–high** (under-served locally) | Archive-style pages with dates, people, places and sources; a "this day in feminist history" series |
| 8 | **Positive feminism, men and boys** | is feminism for men; positive feminism; feminism myths; what feminism is not; how men can support feminism | Informational / persuasion | `/learn/feminism-myths/` | Medium | Matches CSP's "positive movement" stance. Calm myth-vs-fact table with cited evidence. |
| 9 | **Digital culture and media** | feminist media literacy; algorithms and misogyny; feminist content creators; how to spot misogynistic content online | Informational | `/what-we-do/digital-culture/` | Medium | Practical guides and toolkits; partner with educators |
| 10 | **Brand and founder (navigational)** | cultural shock party; CSP feminist; cultural shock party manifesto; rubby singh; how to join cultural shock party | Navigational | Home, `/manifesto/`, `/about/rubby-singh/`, `/join/` | **Must win** | WebSite + Organization + Person markup, consistent sameAs, press kit, descriptor in title tags to separate the brand from "culture shock" |

**Fan-out tactic.** For each pillar, list 10–15 sub-questions people (and AI fan-out) ask. Answer each as an H2 on the pillar page; do not make thin separate pages. Google warns against mass-producing fan-out pages ([guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)).

### B.3 Forty question-style queries for the FAQ page

Each answer should be visible, start with a one- or two-sentence direct answer, and link to the deeper page.

**About CSP**
1. What is Cultural Shock Party?
2. Is Cultural Shock Party a political party?
3. Who founded Cultural Shock Party?
4. What does Cultural Shock Party believe? (→ Manifesto)
5. What does "Fourth Wave of Feminism infrastructure" mean in practice?
6. Where is Cultural Shock Party based, and does it work internationally?
7. How is Cultural Shock Party funded?
8. Is Cultural Shock Party affiliated with any political party?
9. What has Cultural Shock Party achieved so far? (→ Case studies)
10. How does Cultural Shock Party use research?

**Joining and taking part**
11. How do I join Cultural Shock Party?
12. Is it free to join?
13. Can I join if I'm under 18?
14. Can men and boys join a feminist movement?
15. Do I have to go to protests to be involved?
16. How can I volunteer my skills (design, research, social media)?
17. How do I start a CSP group at my school, university or in my town?
18. How do I stay safe at a protest?
19. How can my organisation partner with CSP?
20. How do I contact CSP for press or interviews?

**Learning: feminism basics**
21. What is fourth-wave feminism?
22. When did fourth-wave feminism start?
23. What are examples of fourth-wave feminism?
24. How is fourth-wave feminism different from third-wave feminism?
25. Is there a fifth wave of feminism?
26. What is intersectional feminism?
27. What does intersectionality mean in simple terms?
28. Is Gen Z more feminist than previous generations? (answer only with sourced data)
29. Why does feminism still matter in 2026?
30. What are common myths about feminism?

**Issues and action**
31. What is the gender pay gap and why does it exist?
32. What is online misogyny and how can I report it?
33. What is the "manosphere"?
34. How can I hold politicians and institutions accountable on women's rights?
35. How do I write to my MP / MLA / TD / MLA (India) about a women's rights issue?
36. What feminist organisations exist in Northern Ireland?
37. What feminist organisations exist in the UK and Ireland?
38. What feminist organisations exist in India?
39. How can I support survivors of gender-based violence? (signpost helplines; verify numbers per country before publishing)
40. Where can I find reliable data on women's rights?

### B.4 How to validate Part B (after launch)

- Google Search Console Performance report: queries, impressions, position.
- Bing Webmaster Tools: keyword research plus AI Performance grounding queries. These show the machine-generated retrieval phrases Copilot used for CSP's pages ([Bing](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)).
- Google Trends comparisons across UK, Ireland and India. Google Keyword Planner (free with an Ads account) for rough volumes.
- The monthly manual prompt panel from A.13.

---

## Part C: Stack facts (verified on official pages)

### C.1 Netlify Free plan (credit-based since 2025-09-04)

**Plan limits and allowances** ([Credit-based plans, updated 2026-09-01](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/); [Pricing page](https://www.netlify.com/pricing/)). High.

| Item | Free plan |
|---|---|
| Price | $0 "forever" |
| Credits | **300 per month, hard limit.** No credit packs, no auto-recharge, no rollover. |
| What happens at zero | "All web projects are paused." Visitors see "Site not available" ([How credits work, 2026-08-12](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/how-credits-work/)). The page does not say exactly when sites resume (presumably at the next cycle). |
| Team | 1 Team Owner. Unlimited "Reviewer" role. |
| Concurrent builds | 1 |
| Projects | 500 |
| Deploy previews | Unlimited |
| Custom domain + SSL, global CDN | Included |
| Forms | **Free and unlimited submissions** on credit-based plans, with spam protection ([Forms usage, 2026-09-16](https://docs.netlify.com/manage/forms/usage-and-billing/)) |
| Not on Free | Password protection, shared env vars, audit logs, Slack notifications, smart secret detection |
| Netlify's own analytics | Current or past day only |

**Credit costs** ([How credits work, 2026-08-12](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/how-credits-work/); same rates on the [pricing page](https://www.netlify.com/pricing/)). High.

| Usage | Cost |
|---|---|
| Production deploy (successful) | **15 credits.** Failed deploys and rollbacks are free. **Deploy Previews and branch deploys: 0.** |
| Bandwidth | **20 credits per GB.** Covers all HTML, CSS, JS and images served. |
| Web requests | **2 credits per 10,000.** Counts every request, "including requests for HTML pages, images, JavaScript, CSS files, and other static assets", plus redirects and Edge Functions. |
| Compute (Functions, preview servers, DB) | 10 credits per GB-hour |
| AI inference | 180 credits per USD |
| Build minutes | Not metered ("build minutes no longer calculated"); replaced by the per-deploy charge |
| Forms | 0 |

**Note on older figures.** The September 2025 launch changelog listed different rates: bandwidth 10/GB, 1 credit per form submission, and Pro at 5,000 credits ([changelog](https://www.netlify.com/changelog/netlify-pricing-update-introducing-credit-based-plans/)). **The current docs and pricing page (Aug–Sep 2026) supersede these.**

**Paid tiers:**
- **Personal:** $9/month, 1,000 credits, with auto-recharge of 500 credits for $5.
- **Pro:** from $20/month, 3,000 credits by default, unlimited members ([plans doc](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/)). High.

**Legacy accounts** (created before 2025-09-04) keep the legacy Free plan ([Legacy plans, 2026-01-10](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-legacy-plans/legacy-pricing-plans/)). High.
- 100 GB/month bandwidth, 300 build minutes/month, and 125k function invocations per site per month.
- **Only 100 form submissions per site per month.**
- Switching to credit-based is **irreversible**.
- If an existing pre-September-2025 account is available and appropriate to own the site, its bandwidth allowance is far more generous for a content site.

**What 300 credits buys.** This is my arithmetic from the published rates, not a Netlify example. It assumes an optimised Astro page of about 12 requests and 0.4 MB on first view:

| Scenario | Deploys | Page views | Credits | Fits? |
|---|---|---|---|---|
| Steady launch | 8 (×15 = 120) | 10,000 (≈24 req + 80 bw = 104) | ≈224 | Yes |
| Weekly publishing | 4 (60) | 20,000 (≈208) | ≈268 | Just |
| Daily CMS publishing | 30 (450) | any | >300 | **No: paused** |
| Viral campaign | 4 (60) | 50,000 (≈520) | ≈580 | **No: paused** |
| Lighter 0.2 MB pages | 4 (60) | 35,000 (≈224) | ≈284 | Yes |

Bot and crawler traffic is likely counted as well: the docs say "a user or system accesses content".

**Mitigations (recommended):**
1. Have the CMS commit to a `content` branch. Branch deploys cost 0 credits, so editors get free previews. Merge to `main` once or twice a week, so there are only 4–8 production deploys a month.
2. Keep pages light:
   - Build-time AVIF/WebP images.
   - Two font files at most.
   - Video hosted on YouTube, not on Netlify.
   - Analytics and newsletter scripts served from their own domains.
3. Set a calendar check on credit usage. **Upgrade to Personal ($9) before big campaigns**, so auto-recharge prevents a pause at the worst moment.
4. Keep Cloudflare Pages (C.9) as a tested fallback.

### C.2 Astro on Netlify

- **Static Astro needs no adapter.** Build command `astro build` (or `npm run build`), publish directory `dist`. It can be configured in `netlify.toml` under `[build]` ([Astro deploy guide](https://docs.astro.build/en/guides/deploy/netlify/)). High.
- **`@astrojs/netlify`** is only needed for on-demand rendering (server islands, actions, sessions) and for Netlify Image CDN ([Astro Netlify adapter](https://docs.astro.build/en/guides/integrations-guide/netlify/)). High.
  - It is also needed when a static site wants Netlify's Image CDN.
  - **Recommendation:** use Astro's build-time image optimisation instead. CDN transforms would add web requests or compute, which is my inference.
- **`@astrojs/sitemap`** needs `site` in config and outputs `sitemap-index.xml` ([Astro sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)). High.
  - It supports `i18n` for hreflang alternates, `filter`, and `lastmod`/`serialize`.
- **Netlify Forms with Astro.** Plain HTML forms with `data-netlify="true"` (or `netlify`) and a unique `name` are detected at build time ([Netlify Forms setup, 2026-09-16](https://docs.netlify.com/manage/forms/setup/)). High.
  - Enable form detection in the UI.
  - JS-rendered forms need a hidden static copy, or a `form-name` hidden input.
  - AJAX submissions must be URL-encoded; JSON is not accepted.
  - File uploads: 8 MB per request, 30-second timeout.
- **Spam protection** ([Spam filters](https://docs.netlify.com/manage/forms/spam-filters/)). High.
  - Every submission is filtered with Akismet automatically.
  - Add a honeypot with `netlify-honeypot="bot-field"`.
  - Netlify-provided reCAPTCHA 2 is available (`data-netlify-recaptcha="true"`).

### C.3 Next.js on Netlify

- Zero-config deployment via the **OpenNext adapter** (`@netlify/plugin-nextjs`), supporting **Next.js 13.5+**. Netlify recommends not pinning it ([Netlify Next.js docs, 2026-02-04](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/)). High.
- **Function usage.** SSR, ISR, PPR, Route Handlers and Server Actions run as Serverless Functions; Middleware runs as Edge Functions. Even pre-rendered pages: "the first access after a deploy invokes a function" to fetch them from the route cache. High.
  - On a credit plan, this means **compute and request credits on top of bandwidth**.
- Next.js static export (`output: 'export'`) exists, but it is not covered on that Netlify page; **not verified here**.
- **Verdict:** Next.js is fine technically, but it is heavier and costs more credits than Astro for a content site. Use Astro.

### C.4 Sanity Free plan

From [Sanity pricing](https://www.sanity.io/pricing) (2026 page; no effective date shown). High.

- **Seats and roles:** 20 user seats; only Administrator and Viewer roles.
- **Content:** 2 public datasets, 10k documents.
- **API:** 1M API CDN requests/month and 250k non-CDN API requests/month.
- **Assets:** 100 GB bandwidth/month and 100 GB asset storage.
- **History:** 3-day draft history.
- **Paid tier:** Growth is $15 per seat per month.

**Fit for CSP.** It is generous and suits many non-technical editors. However, every publish still has to trigger a Netlify production deploy (15 credits) for a static site. Client-side fetching avoids that, but it hurts crawlability and AEO. Sanity also adds a vendor and a second system. **Not needed at launch.**

### C.5 Git-based CMS options on Netlify Free

| CMS | How auth works on Netlify (verified) | Editors need GitHub accounts? | Needs server/functions? | Cost | Verdict |
|---|---|---|---|---|---|
| **Sveltia CMS** | Supports GitHub, GitLab and Gitea/Forgejo backends. **Does not support Git Gateway** ("officially been deprecated by Netlify"). Default OAuth base URL for GitHub and GitLab is `https://api.netlify.com`, i.e. Netlify's OAuth provider. GitLab also supports PKCE ([Sveltia backends docs](https://sveltiacms.app/en/docs/backends)). Positions itself as a Decap successor with "high compatibility" and "feature complete" ([GitHub](https://github.com/sveltia/sveltia-cms)). | Yes (GitHub with write access) | No (static `/admin/` page) | Free, open source | **Recommended** |
| **Decap CMS** (formerly Netlify CMS) | GitHub backend: "Netlify facilitates basic GitHub authentication" through Netlify's authentication provider. All users need push access ([Decap GitHub backend](https://decapcms.org/docs/github-backend/)). The Decap docs still describe Git Gateway + Identity ([Decap backends](https://decapcms.org/docs/choosing-a-backend/)), but **Netlify marks Git Gateway deprecated** (below). | Yes (GitHub route) | No | Free; Decap Turbo is a paid hosted option | Works; Sveltia is the more maintained option |
| **Keystatic** | GitHub mode needs a GitHub App and the host must "run Node.js for Keystatic's API routes" ([GitHub mode](https://keystatic.com/docs/github-mode)). For Astro "you will need to add an Astro adapter" ([Astro install](https://keystatic.com/docs/installation-astro)). **Keystatic Cloud** is free for up to **3 users per team**, and team members can edit "without their own GitHub accounts". Pro is from $10/month, +$5 per extra user ([Keystatic Cloud](https://keystatic.com/docs/cloud)). | No, with Keystatic Cloud | Yes (`@astrojs/netlify` adapter → functions → small compute credits) | Free ≤3 users | **Best alternative** if editors refuse GitHub accounts |
| **TinaCMS** | TinaCloud Free: 2 users, 2 roles; Team from $24/project/month ([Tina pricing](https://tina.io/pricing)). Self-hosting needs an auth provider, a database adapter (MongoDB/Postgres examples) and a Node serverless backend ([Tina self-hosted](https://tina.io/docs/self-hosted/overview)). | No (TinaCloud) | Yes for self-hosting | Free ≤2 users | Not recommended (too few free seats, more moving parts) |

**Netlify Identity and Git Gateway status (important):**

- **Identity is still available.** Netlify announced a deprecation in early 2025, then reversed it: "Update, February 19, 2026: Netlify Identity will continue as a supported authentication option on Netlify" ([Netlify blog, page updated 2026-10-23](https://www.netlify.com/blog/auth0-extension-identity-changes/)). High.
  - The Identity docs list it on all credit-based plans at no extra cost, with unlimited active users on Free ([Identity overview](https://docs.netlify.com/manage/security/secure-access-to-sites/identity/overview/)). High.
  - A community thread notes that some Netlify docs pages were left inconsistent after the reversal ([Netlify forum, 2026-05-22](https://answers.netlify.com/t/netlify-identity-is-staying-feb-2026-reversal-what-changed-whos-affected-and-how-to-proceed/162733)). Medium.
- **Git Gateway is deprecated.** Its docs say: "This feature is deprecated … new Git Gateway configurations are not recommended … we will no longer fix bugs" ([Git Gateway docs, updated 2026-09-17](https://docs.netlify.com/security/secure-access-to-sites/git-gateway/)). High.
  - So the classic "Decap + Identity + Git Gateway" setup, where editors need no GitHub account, **should not be used for a new build.**
- **Netlify OAuth provider tokens** (GitHub, GitLab, Bitbucket) are **not** marked deprecated. Register an OAuth app with callback `https://api.netlify.com/auth/done`, then install it under Project configuration → Security → OAuth ([OAuth provider tokens, 2026-09-17](https://docs.netlify.com/manage/security/secure-access-to-sites/oauth-provider-tokens/)). High. This is the route Sveltia and Decap's GitHub backend use.

### C.6 Free, privacy-friendly analytics

| Tool | Free tier (verified) | Privacy notes | Source | Conf. |
|---|---|---|---|---|
| **Cloudflare Web Analytics** | Free and works "without changing your DNS or using Cloudflare's proxy" (JS beacon on any host). Soft limit of **10 sites per account**. Dashboard access for the previous six months. Ingestion is unsampled; data is aggregated after 7 days and dashboard queries may sample. | "Does not collect or use your visitors' personal data." Cookie use is not stated on the pages read. | [About](https://developers.cloudflare.com/web-analytics/about/), [FAQ](https://developers.cloudflare.com/web-analytics/faq/) | High |
| **GoatCounter** | Free for "reasonable public usage" (no numeric cap; not millions of pageviews per day). Fine for personal sites and small-to-medium organisations. Export at any time. | Counts unique visits "without cookies or persistently storing any personal data". The site claims no GDPR notice is needed. About 3.5 KB. | [goatcounter.com](https://www.goatcounter.com/) | High (for the vendor's claims) |
| **Umami Cloud Hobby** | $0: up to **100k events/month**, **1 website**, **6-month retention**, no team members. Pro is $20/month. | Privacy-focused, but its privacy terms were not re-read here. | [umami.is/pricing](https://umami.is/pricing) | High |

**Pick: GoatCounter.** It has the simplest privacy story for a values-led audience, needs no cookie banner according to its own claim (have a lawyer confirm this for UK GDPR/PECR and the EU), and is tiny. Use Cloudflare Web Analytics as a second, free source of Core Web Vitals and real-user data if wanted. Both are served from their own domains, so they do not use Netlify credits.

### C.7 Newsletter tools with free tiers

| Tool | Free tier (verified) | Notes | Source | Conf. |
|---|---|---|---|---|
| **Buttondown** | **Free for the first 100 subscribers**; no monthly cap stated (pricing assumes at most one email a day). Includes custom-domain sending and hosted archives. | **50% off for registered non-profits** (501(c)(3) or the equivalent in your country). Privacy-first, Markdown editor. | [buttondown.com/pricing](https://buttondown.com/pricing) | High |
| **MailerLite** | **250 subscribers, 2,500 emails/month**, 2 user seats, 1 landing page, 3 forms, 3 automations (5 steps each). MailerLite logo stays on. | The free plan was cut in 2026; secondary sources date it to 2026-06-16 for new sign-ups and 2026-07-01 for existing accounts (medium). 30% non-profit discount on paid plans. | [mailerlite.com/pricing](https://www.mailerlite.com/pricing) | High (limits) / Medium (dates) |
| **Brevo** | Brevo's own page title says "Free 9,000 emails a month". Secondary sources say **300 emails a day**; campaigns over 300 recipients reach only 300 that day. Brevo branding on emails. | The contact cap conflicts across sources (unlimited vs 100k). Starter is said to start at $9/month (secondary). | [brevo.com newsletter page](https://www.brevo.com/newsletter-software/) (official title); limits from secondary search results | Medium |
| **Substack** | Free to publish. On paid subscriptions "writers keep 90% of their revenue minus credit card fees". | Built-in network discovery suits a Gen Z reach strategy. A custom domain is reportedly a $50 one-time fee (secondary, medium). Less control over branding and data. | [substack.com/going-paid](https://substack.com/going-paid) | High (fee) / Medium (domain) |

**Pick:**
- **Launch with Substack** if reach and zero cost at scale matter most: no free subscriber cap was found, and it has network effects.
- **Or launch with Buttondown** if CSP values control and privacy and qualifies for the non-profit discount.
- **SEO rule either way:** publish the full article on culturalshockparty.com first. The newsletter carries a summary plus a link, so the website stays the canonical, citable source.

### C.8 Domain

The domain is registered and parked on Hostinger DNS ([culturalshockparty.com](https://culturalshockparty.com/)). To go live, either point DNS to Netlify or move DNS to Netlify DNS. Netlify DNS setup was not re-verified in this pass.

### C.9 Fallback host (if Netlify credits become a constraint)

[Cloudflare Pages Free](https://developers.cloudflare.com/pages/platform/limits/) (limits page updated 2026-09-05). High.
- 500 builds/month, 1 concurrent build, 20-minute build timeout.
- 20,000 files per site, 25 MiB per file, 100 custom domains per project.
- "On both free and paid plans, requests to static assets are free and unlimited" ([Pages Functions pricing](https://developers.cloudflare.com/pages/functions/pricing/)).
- Trade-off: no Netlify Forms, so forms would need a third-party service or a Worker.
- An Astro static build deploys to either host unchanged.

---

## C.10 Recommended stack (with reasons)

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro, static output**; content collections in Markdown/MDX | Zero JS by default, so it is easiest to meet CWV. Static HTML is fully crawlable by every AI bot, and many do not run JS well (inference). No adapter or functions means no compute credits. Build-time images. |
| Hosting | **Netlify Free** at launch (as briefed), with credit discipline (C.1). Upgrade to Personal ($9) before major campaigns. Cloudflare Pages is the contingency. | Netlify Forms are free and unlimited, and deploy previews are free. The hard 300-credit cap is the main risk. |
| CMS | **Sveltia CMS** at `/admin/`, GitHub backend through Netlify's OAuth provider, committing to a `content` branch | Free, static, Decap-compatible config, maintained, avoids deprecated Git Gateway. Branch deploys are free previews. **Alternative:** Keystatic + Keystatic Cloud (≤3 users, no GitHub accounts needed; needs an adapter and small function usage). |
| Forms | **Netlify Forms** (Join, Contact, Volunteer) with honeypot + Akismet. Email notifications to the team. | Free and unlimited on credit plans; no backend needed |
| Newsletter | **Substack** (reach) or **Buttondown** (control, non-profit 50%); embed the sign-up on `/join/` | Free at launch; site stays canonical |
| Analytics | **GoatCounter**; optional Cloudflare Web Analytics; **Google Search Console + Bing Webmaster Tools** (with IndexNow) | Privacy-respecting, free, and gives visibility of AI citations |
| SEO plumbing | `@astrojs/sitemap`, RSS, JSON-LD `@graph` component, per-page OG image generation, `robots.txt` (A.6), build-generated `/llms.txt` | Covers Part A |
| Search on site (optional) | A static client-side index such as Pagefind; **not verified in this pass** | Avoids functions |

**Implementation checklist (first sprint):**
1. Create the Netlify team under an org-owned email, not a personal one. Connect the GitHub repo. Set `main` as production and `content` as a branch-deploy branch.
2. Build the Astro skeleton with the IA in A.8. Add the BaseHead component (title, description, canonical, OG/Twitter tags, JSON-LD) and Breadcrumbs.
3. Write the Organization/WebSite/Person graph (A.4). Build the founder page, editorial standards page and press kit.
4. Add `robots.txt`, `sitemap-index.xml`, `/llms.txt`, a 404 page, and `noindex` on `/admin/`.
5. Configure Sveltia CMS (collections: blog, learn, case-studies, research, events, faq, glossary). Create the GitHub OAuth app → Netlify OAuth provider.
6. Set up Netlify Forms (Join, Contact) with a honeypot, and a newsletter embed.
7. Verify GSC and Bing WMT, submit the sitemap, and enable IndexNow pings after each production deploy.
8. Add GoatCounter. Run Lighthouse and CWV checks on mobile (target LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1).
9. Launch content: Manifesto, About, five pillar pages (Part B clusters 1–5), FAQ (B.3), and one original-data piece.

---

## Open questions for the founder/team

1. Which country is the legal and operational base (NI/UK, Ireland, India)? This decides `areaServed`, `en-GB` vs other locales, the GDPR/PECR wording, and the Event-schema eligibility mix (Ireland is not in Google's Event list).
2. Is CSP a **registered political party**, a charity/NGO, a company, or an unincorporated movement? This decides the schema type (NGO vs PoliticalParty), "Party" disambiguation, and funding-transparency text.
3. AI training opt-in: allow GPTBot, ClaudeBot, Google-Extended, Applebot-Extended and CCBot (the recommended default), or opt out of training while keeping search bots?
4. Does anyone have a **pre-September-2025 Netlify account** (legacy plan: 100 GB bandwidth, but only 100 form submissions per month)? Or should a new credit-based org account be created?
5. Will editors accept creating GitHub accounts (Sveltia/Decap)? If not, use Keystatic Cloud (≤3 free users) or reconsider Sanity.
6. Newsletter priority: reach and discovery (Substack) or ownership and privacy (Buttondown)?
7. Which languages do CSP's communities need beyond English (Irish, Hindi, Punjabi, others), if any, and when?
8. Is there budget of about $9/month for Netlify Personal before high-traffic campaigns, to avoid the site pausing?

---

## Source register (all opened 2026-10-24)

| Source | Date shown | Used for | Conf. |
|---|---|---|---|
| [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) | Updated 2025-12-10 | No special requirements, snippet eligibility, controls | High |
| [Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) | Updated 2026-07-10 (published 2026-05-15) | AEO/GEO = SEO; myths; structured data; agents | High |
| [Google blog: Succeeding in AI search (Mueller)](https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search) | 2025-05-21 | Recommendations | High |
| [Google Search documentation updates log](https://developers.google.com/search/updates) | Entries to 2026-10-21 | FAQ deprecation (2026-05-07), llms.txt note, breadcrumbs, sitelinks search box, Dataset | High |
| [Google blog: HowTo/FAQ changes](https://developers.google.com/search/blog/2023/08/howto-faq-changes) | 2023-08-08 | FAQ restriction to gov/health | High |
| [Google blog: Simplifying search results](https://developers.google.com/search/blog/2025/06/simplifying-search-results) | 2025-06-12 (update 2025-09-08) | ClaimReview and other types phased out | High |
| [Google: Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) | Updated 2026-10-05 | E-E-A-T, Who/How/Why, AI disclosure | High |
| [Google common crawlers (Google-Extended)](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers) | Updated 2026-10-15 | Google-Extended scope | High |
| [Google: Control what you share](https://developers.google.com/search/docs/crawling-indexing/control-what-you-share) | Updated 2026-10-21 | Search generative AI control | High |
| [Google: Organization markup](https://developers.google.com/search/docs/appearance/structured-data/organization) | Updated 2026-09-08 | Org properties | High |
| [Google: Site names](https://developers.google.com/search/docs/appearance/site-names) | Updated 2025-12-10 | WebSite markup | High |
| [Google: Article markup](https://developers.google.com/search/docs/appearance/structured-data/article) | Updated 2026-09-08 | Author best practices | High |
| [Google: Event markup](https://developers.google.com/search/docs/appearance/structured-data/event) | Updated 2026-09-08 | Event eligibility, regions | High |
| [Google: ProfilePage markup](https://developers.google.com/search/docs/appearance/structured-data/profile-page) | Updated 2026-09-08 | Founder/author pages | High |
| [Google: Image SEO](https://developers.google.com/search/docs/appearance/google-images) | Updated 2026-03-02 | Image practices | High |
| [Google: Localized versions (hreflang)](https://developers.google.com/search/docs/specialty/international/localized-versions) | Updated 2026-09-21 | hreflang rules | High |
| [Google: Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals) | Updated 2025-12-10 | Thresholds | High |
| [Google Knowledge Panel help](https://support.google.com/knowledgepanel/answer/7534902) | Undated | Claiming panels | High |
| [web.dev: Web Vitals](https://web.dev/articles/vitals) / [INP](https://web.dev/articles/inp) | Updated 2024-10-31 | Thresholds | High |
| [OpenAI crawlers](https://developers.openai.com/api/docs/bots) | Undated | OAI-SearchBot, GPTBot, ChatGPT-User, OAI-AdsBot | High |
| [Anthropic crawlers](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) | 2026-04-07 | ClaudeBot, Claude-SearchBot, Claude-User | High |
| [Perplexity crawlers](https://docs.perplexity.ai/guides/bots) | Undated | PerplexityBot, Perplexity-User | High |
| [Apple: Applebot](https://support.apple.com/en-us/119829) | 2026-09-04 | Applebot-Extended | High |
| [Common Crawl: CCBot](https://commoncrawl.org/ccbot) | Undated | CCBot | High |
| [Bing: AI Performance report](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview) | 2026-02-10 | Copilot citations, guidance | High |
| [Microsoft: Optimizing content for AI search answers](https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers) | 2025-10-08 | Formatting guidance | High |
| [IndexNow](https://www.indexnow.org/) | Undated | Participating engines | High |
| [GEO paper, arXiv 2311.09735](https://arxiv.org/abs/2311.09735) / [ar5iv full text](https://ar5iv.labs.arxiv.org/html/2311.09735) | v3 2024-06-28; KDD 2024 | Citation and statistics effects | High |
| [Ahrefs: AI Overview citations vs rankings](https://ahrefs.com/blog/search-rankings-ai-citations/) | 2025-07-21 | 76% top-10 | Medium |
| [SEJ on Ahrefs re-run](https://www.searchenginejournal.com/google-ai-overview-citations-from-top-ranking-pages-drop-sharply/568637/) | 2026-03-02 | 38% top-10 | Medium |
| [Ahrefs: Most-cited domains in ChatGPT](https://ahrefs.com/blog/most-cited-domains-in-chatgpt/) | 2026-09-02 | Reddit, Wikipedia, YouTube, LinkedIn shares | Medium |
| [llmstxt.org](https://llmstxt.org/) | v2, 2026-08-10 | Spec | High |
| [PPC Land: llms.txt adoption](https://ppc.land/llms-txt-adoption-rises-8-8x-but-97-of-files-get-zero-ai-requests/) | 2026-07-02 | Ahrefs and Originality.ai figures | Medium |
| [SE Ranking: llms.txt study](https://seranking.com/blog/llms-txt/) | Shown 2026-10-15 | No citation correlation | Medium |
| [SEJ: Google llms.txt guidance by product](https://www.searchenginejournal.com/googles-llms-txt-guidance-depends-on-which-product-you-ask/575431/) | 2026-05-20 | Lighthouse audit | Medium |
| [schema.org NGO](https://schema.org/NGO), [PoliticalParty](https://schema.org/PoliticalParty), [DefinedTermSet](https://schema.org/DefinedTermSet), [DefinedTerm](https://schema.org/DefinedTerm) | n/a | Types and properties | High |
| [Open Graph protocol](https://ogp.me/) | n/a | OG tags | High |
| [LinkedIn: link preview requirements](https://www.linkedin.com/help/linkedin/answer/a521928) | Undated | 1200×627, 1.91:1, 5 MB | High |
| [Wikidata: Notability](https://www.wikidata.org/wiki/Wikidata:Notability) | n/a | Item criteria | High |
| [Wikipedia: Fourth-wave feminism](https://en.wikipedia.org/wiki/Fourth-wave_feminism) | Read 2026-10-24 | Topic landscape | Medium |
| [WRDA](https://wrda.net/), [NWCI](https://www.nwci.ie/), [Fawcett Society](https://www.fawcettsociety.org.uk/), [Jagori](https://www.jagori.org/) | Home pages, 2026 items | Existing organisations | High (existence) |
| [Netlify pricing](https://www.netlify.com/pricing/) | Undated (current) | Plans, credit rates | High |
| [Netlify: How credits work](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/how-credits-work/) | Updated 2026-08-12 | Credit costs, pause behaviour | High |
| [Netlify: Credit-based plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/) | Updated 2026-09-01 | Free plan features | High |
| [Netlify changelog: credit-based plans](https://www.netlify.com/changelog/netlify-pricing-update-introducing-credit-based-plans/) | 2025-09 (page updated 2026-10-23) | Original (superseded) rates | High (historical) |
| [Netlify: Legacy plans](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-legacy-plans/legacy-pricing-plans/) | Updated 2026-01-10 | Legacy free limits | High |
| [Netlify Forms setup](https://docs.netlify.com/manage/forms/setup/), [usage](https://docs.netlify.com/manage/forms/usage-and-billing/), [spam filters](https://docs.netlify.com/manage/forms/spam-filters/) | Updated 2026-09-16 | Forms | High |
| [Netlify Identity overview](https://docs.netlify.com/manage/security/secure-access-to-sites/identity/overview/) | Undated | Identity availability | High |
| [Netlify blog: Identity reversal](https://www.netlify.com/blog/auth0-extension-identity-changes/) | Update 2026-02-19 | Identity continues | High |
| [Netlify forum: Identity reversal summary](https://answers.netlify.com/t/netlify-identity-is-staying-feb-2026-reversal-what-changed-whos-affected-and-how-to-proceed/162733) | 2026-05-22 | Context (community) | Medium |
| [Netlify: Git Gateway](https://docs.netlify.com/security/secure-access-to-sites/git-gateway/) | Updated 2026-09-17 | Deprecated | High |
| [Netlify: OAuth provider tokens](https://docs.netlify.com/manage/security/secure-access-to-sites/oauth-provider-tokens/) | Updated 2026-09-17 | GitHub OAuth for CMS | High |
| [Netlify: Next.js](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/) | Updated 2026-02-04 | OpenNext, functions | High |
| [Astro: Deploy to Netlify](https://docs.astro.build/en/guides/deploy/netlify/), [Netlify adapter](https://docs.astro.build/en/guides/integrations-guide/netlify/), [Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Undated | Astro deploy | High |
| [Sanity pricing](https://www.sanity.io/pricing) | 2026 | Free plan limits | High |
| [Sveltia CMS backends](https://sveltiacms.app/en/docs/backends), [GitHub](https://github.com/sveltia/sveltia-cms) | Undated / 2026 | Backends, no Git Gateway | High |
| [Decap GitHub backend](https://decapcms.org/docs/github-backend/), [Choosing a backend](https://decapcms.org/docs/choosing-a-backend/) | Undated | Decap auth | High |
| [Keystatic GitHub mode](https://keystatic.com/docs/github-mode), [Cloud](https://keystatic.com/docs/cloud), [Astro install](https://keystatic.com/docs/installation-astro) | Undated | Keystatic requirements, free tier | High |
| [TinaCMS pricing](https://tina.io/pricing), [Self-hosted](https://tina.io/docs/self-hosted/overview) | 2026 | Tina limits | High |
| [Cloudflare Web Analytics about](https://developers.cloudflare.com/web-analytics/about/) / [FAQ](https://developers.cloudflare.com/web-analytics/faq/) | Undated | Analytics | High |
| [GoatCounter](https://www.goatcounter.com/) | Undated | Analytics | High |
| [Umami pricing](https://umami.is/pricing) | Undated | Analytics | High |
| [Buttondown pricing](https://buttondown.com/pricing) | Undated | Newsletter | High |
| [MailerLite pricing](https://www.mailerlite.com/pricing) | Undated (current) | Newsletter | High |
| [Brevo newsletter page](https://www.brevo.com/newsletter-software/) | Undated | "Free 9,000 emails a month" | Medium |
| [Substack going paid](https://substack.com/going-paid) | Undated | 10% fee | High |
| [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/) / [Functions pricing](https://developers.cloudflare.com/pages/functions/pricing/) | Updated 2026-09-05 | Fallback host | High |
| [culturalshockparty.com](https://culturalshockparty.com/) | 2026-10-24 | Parked domain (Hostinger) | High |

**Not verified in this pass** (search budget exhausted or page blocked):
- Which web index ChatGPT search and Claude web search query.
- X/Twitter card image specs.
- Exact AI referrer and UTM conventions.
- Gen Z search-behaviour statistics.
- Keyword search volumes.
- LCP/CLS "poor" thresholds.
- Next.js static export on Netlify.
- Pagefind.
- Netlify DNS setup.
- Wikipedia COI policy wording.
