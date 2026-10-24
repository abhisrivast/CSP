# CSP website: legal, privacy and safety compliance research

**Project:** Cultural Shock Party (CSP), culturalshockparty.com, a static site on Netlify's free plan
**Research date:** 24 October 2026
**Scope:** UK including Northern Ireland (primary), plus Ireland and India (brief)
**Status:** Research only

> **This is not legal advice.** It is desk research to help CSP brief a solicitor and build the website. Election law, data protection law and safeguarding law carry criminal and regulatory penalties. Have a qualified adviser review CSP's political status, donations approach and privacy notice before launch. Northern Ireland has its own adviser landscape (for example the Law Society of Northern Ireland). Where this document drafts wording, the wording is a starting point, not checked legal text.

---

## 0. How to read this document

- **Confidence levels:** *High* means I opened the primary or official source and it states the point directly. *Medium* means I opened a reputable secondary source, the official source is older, or the point comes from an official page's search excerpt because the page blocked automated reading. *Low* means the point is my inference, or it rests on a source I could not open. It is marked "not verified".
- **Source dates:** Each source is dated where the page shows a date. The source register in section 9 lists every URL I opened.
- **Research limitations (please read):**
  - Several primary sites blocked automated access (HTTP 403 or 202) during this research: electoralcommission.org.uk (HTML pages), legislation.gov.uk, sipo.ie, Commons Library, bills.parliament.uk and Hansard. Where a claim rests on those sites, it comes from search-result excerpts of the official page. It is marked *medium*, and you should confirm it on the live page.
  - The shared web-search budget for this workflow ran out partway through. After that I could only open URLs I already knew. As a result, these items were **not verified**:
    - whether any party or company already uses a name similar to "Cultural Shock Party";
    - the non-party campaigner spending thresholds;
    - Companies House rules on the word "party";
    - charity-law limits on political purposes;
    - the Equality Act "associations" provisions;
    - the Defamation Act (Northern Ireland) 2022;
    - India's accessibility law and its rape-victim anonymity provision.

  These are listed as open items in section 8.

---

## 1. Executive summary: decisions that matter most

1. **CSP can call itself "Cultural Shock Party" without registering. It just cannot behave like a registered party.**
   - In the UK, registration is what lets a party's name, descriptions and emblem appear on ballot papers. It also brings PPERA financial controls.
   - A party can only be registered if it will put up candidates.
   - Unregistered groups' candidates can only stand as independents, or with no description. In Ireland they appear as "non-party".
   - **Website action:** state plainly that CSP is "a feminist political-cultural movement, not currently a registered political party". Put this in the FAQ, About page and footer.
2. **Treat everyone who joins, subscribes or contacts CSP as giving you "political opinion" special-category data.** Signing up to a feminist political movement reveals a political view, and the ICO says inferred political opinions count.
   - CSP is not a registered party, so it **cannot** use the Data Protection Act 2018 condition reserved for registered parties (Schedule 1, paragraph 22).
   - **Use explicit consent** (UK GDPR Art. 9(2)(a)). The "not-for-profit body" condition (Art. 9(2)(d)) can support ongoing work with existing members and regular contacts, but not new sign-ups.
3. **Newsletter emails need opt-in consent.** The ICO says political parties and other not-for-profits cannot use the "soft opt-in", even for existing supporters. The new charity soft opt-in (from 5 February 2026) applies only to registered charities. Every email must say who it is from and include an unsubscribe link.
4. **You can avoid a cookie banner.** Since 5 February 2026, UK law exempts first-party statistical analytics from consent, if you give clear information and a simple, free way to object.
   - The cleanest route is analytics that set nothing on the device. Two options: Netlify's server-side Web Analytics (no client code, no cookies), or Cloudflare Web Analytics (no cookies or localStorage).
   - Do **not** embed Meta or TikTok pixels, YouTube or Instagram embeds, Google Fonts loaded from Google, or reCAPTCHA without a consent mechanism.
   - Ireland and the EU are stricter: the Irish regulator (DPC) says analytics *cookies* need consent. Cookieless analytics sidestep this.
5. **Netlify Forms stores data in the US.** Netlify's DPA (updated 9 June 2026) relies on the EU-US Data Privacy Framework and its UK Extension, with standard contractual clauses as fallback.
   - The DPA's annex lists **"Sensitive data transferred: None"**, so Netlify has not scoped its DPA for special-category data.
   - Akismet (Automattic, US) spam-filters every submission.
   - **Recommendation:** keep Netlify Forms to minimal fields (name, email, short message). Never use it for testimonies or file uploads. Export and delete submissions regularly.
6. **Imprints:**
   - **Paid** online political adverts (including boosted posts) need a digital imprint **at any time** under the Elections Act 2022. The imprint gives the name and postal address of the promoter and of anyone the material is published for.
   - **Unpaid** posts need one only if CSP becomes a registered party or a registered non-party campaigner and the post is election material. Adding one anyway is good practice.
   - A PO Box or mailbox address is acceptable, which is important for safety.
7. **Money:**
   - CSP is not a registered party, so the PPERA party donation rules do not apply directly today. Election spending above the legal thresholds would bring non-party campaigner rules.
   - The Representation of the People Bill was in the Lords as of October 2026, with committee stage due 2 November 2026. It would tighten "know your donor" and unincorporated-association rules.
   - **Ireland:** accepting more than €100 a year for "political purposes" (which includes policy campaigns) makes a group a SIPO "third party", with registration and foreign-donation restrictions.
   - **India:** foreign-contribution law bars "organisations of a political nature".
   - **Recommendation:** for now, adopt a voluntary donations policy that mirrors Electoral Commission permissibility rules. Take no foreign or anonymous money above £500, and get advice before taking donations.
8. **Minimum ages:**
   - **16+** for joining or newsletter in the UK and Ireland. Ireland's age of digital consent is 16. The UK's is 13, but explicit consent to political data plus Gen Alpha safeguarding justify 16. The UK votes-at-16 Bill is pending.
   - **18+** for testimony submission and for India sign-ups. India's DPDP Act needs verifiable parental consent below 18 and bans tracking or targeted advertising directed at children.
   - Gen Alpha content (resources, explainers) should work without any sign-up.
9. **Testimonies are the highest-risk feature.** Publishing anything that could identify a sexual-offence complainant can be a criminal offence in the UK and Ireland. Commenting on live court cases risks strict-liability contempt, and naming people risks defamation claims.
   - Collect testimonies through a separate, secure, EU/UK-hosted channel, never Netlify Forms.
   - Publish only after editorial and legal review, anonymised by default.
10. **No open comments or forums at launch.** Services that let users share content with each other fall under the Online Safety Act 2023 (risk assessments and children's duties). A brochure site plus moderated, CSP-published content keeps the obligations lighter. Confirm with Ofcom's tools before adding community features.
11. **Accessibility:**
    - Build to **WCAG 2.2 AA**. The W3C Recommendation version in force is dated 12 December 2024.
    - All UK service providers must make reasonable adjustments under the Equality Act 2010. In Northern Ireland the equivalent is the Disability Discrimination Act 1995.
    - Publish an accessibility statement as good practice.
12. **Protect people:**
    - Use role-based email addresses or forms, never personal emails.
    - Use a PO Box for imprints and the registered address.
    - Keep domain WHOIS privacy on. Under ICANN's Registration Data Policy (effective 21 August 2025), names are published only with consent.
    - Turn on 2-step verification everywhere; NCSC guidance for high-risk individuals covers activists.
    - If CSP ever registers as a party, the public register will show its leadership and address. Plan for that.

---

## 2. Political status, the word "Party", imprints and money

### 2.1 United Kingdom (GB and Northern Ireland)

#### What registration is and is not

| Point | Finding | Confidence and source |
|---|---|---|
| Two registers | The Electoral Commission keeps a **Great Britain** register and a **Northern Ireland** register. The Commission has said the main difference concerns donations, because NI parties may also accept money from the Republic of Ireland. | Medium: Electoral Commission written evidence to Parliament (search excerpt; page returned 403). |
| What registration gives | Registration makes the party name, descriptions and emblems usable on ballot papers by its candidates. It also brings an obligation to comply with the financial controls in PPERA 2000. | Medium: Electoral Commission, "How political parties are registered" (search excerpt; 403). |
| Who can register | Parties can only be registered if they will put up candidates. Otherwise candidates stand as independents. | Medium: same Electoral Commission page (search excerpt). |
| Independents | Independent candidates may only use the word "Independent" ("Annibynnol" in Wales) next to their name. | Medium: Electoral Commission returning officer guidance (search excerpt). |
| Ballot-paper use | Only candidates authorised by a registered party's nominating officer may use its registered name or description on a ballot paper. | High: Electoral Commission RP2 explanatory notes (PDF, file dated Nov 2011). |
| Name rules (apply to names and descriptions) | The Commission can refuse a name or description that is: the same as another party's in the same part of the register; likely to cause confusion; more than six words; obscene or offensive; likely to lead to an offence if published; not wholly in Roman script; a prohibited word; or misleading to voters about the effect of their vote. "Cultural Shock Party" is three words and appears to fit these rules (my assessment). | High for the rules (RP2 notes, ~2011; check for later changes). Low for the name assessment, because I did not check the registers for conflicts. |
| What the public register shows | Each entry shows the party's name, leadership and address, the nations where it will stand candidates, up to 12 descriptions and up to 3 emblems. As of 1 August 2023 there were 404 registered parties: 374 in GB (21 of them minor parties) and 30 in NI. | Medium-high: Democracy Club blog, 15 Aug 2023. |
| What an application requires | The party's registered name, headquarters address, and the names and home addresses of the leader, nominating officer and treasurer. Each registered party must have these three officers. | Medium: Electoral Commission evidence (search excerpt; 403). |

**Implication for CSP:**

- Being unregistered is lawful and common for movements. I found nothing that bars an unregistered organisation from having "Party" in its name. That is an absence-of-evidence finding (*low-medium*), so ask a solicitor.
- The practical limits are these:
  - CSP's name cannot appear on a ballot paper.
  - Anyone CSP supports for election stands as an independent.
  - If CSP later decides to stand candidates, it must register, and the register will publish its leadership and address.

#### What CSP may and should not imply (guidance for site copy)

| CSP may | CSP should not |
|---|---|
| Call itself "Cultural Shock Party", "a movement" or "a feminist political-cultural movement" | Say or imply it is a *registered* political party, or that it is "on the ballot" |
| Publish a manifesto, positions and campaigns | Suggest that people can "vote CSP" or stand "as a CSP candidate" while unregistered |
| Invite people to *join as supporters or members* | Use another party's name, logo or emblem, or a confusingly similar one |
| Campaign on issues, hold street actions and push for institutional accountability | Imply endorsement by the Electoral Commission, An Coimisiún Toghcháin or the Election Commission of India |
| Endorse or celebrate individuals (with care) | Take money "for the election" or for paid ads without checking donor permissibility and imprint rules |

**Suggested positive wording** (FAQ, About page and footer): "Cultural Shock Party is a feminist political-cultural movement. We're not currently a registered political party in the UK, Ireland or India. We're building the ideas, research and people power first."

#### Digital imprints (Elections Act 2022, Part 6)

The source here is the Electoral Commission's draft statutory guidance on GOV.UK, updated 26 July 2023, *high* confidence for content. An Electoral Commission press item (search excerpt) says the final guidance has been in force since 1 November 2023, so confirm the final text.

- **Scope:** The rules apply **throughout the UK, including Northern Ireland**, to material made available in the UK, wherever the promoter is based.
- **Paid adverts:** Anyone who pays a platform to publish an advert that is *political material* needs an imprint, **at any time** and not only during elections. Boosting a post counts as a paid advert. Paying an influencer to post on their own channel does not, by itself, make it a paid advert.
- **Political material:** material whose main purpose can reasonably be seen as influencing support for or against parties, candidates, elected office-holders, certain policy- or opinion-linked groups, or referendums.
- **Organic (unpaid) material:** needs an imprint only if it is election, referendum or recall-petition material *and* is published by or for a "relevant entity". Relevant entities are registered parties, **registered non-party campaigners**, candidates and future candidates, elected office-holders, and registered referendum or recall campaigners.
  - **Issue-based material is not election material** unless it also influences votes for particular parties or candidates.
- **Imprint contents:** the name and postal address of the promoter and of anyone the material is published for. **A home, office, PO Box or mailbox address can be used.** It must be in text, legible, and ideally inside the material itself; otherwise it must be reachable directly (usually one click) and survive sharing.
- **Good practice:** the guidance says including imprints even where not legally required is "good practice".
- **Offence:** failing to include a required imprint is an offence under s.48(1). Enforcement is by the police and the Electoral Commission, with sanctions including civil sanctions and take-down orders.
- **CSP actions:**
  - Put a standard imprint on **every paid social post or ad**, for example "Promoted by [Name] on behalf of Cultural Shock Party, [PO Box address]".
  - Add the same line to the site footer as good practice.
  - Use a PO Box or virtual mailbox, not a home address.

#### Donations and money (UK)

- **Today:** CSP is not a registered party. The PPERA *party* donation regime does not apply to it directly (my reading, *medium*).
- **Non-party campaigning:** spending above set thresholds on election campaigning during a regulated period triggers registration as a non-party campaigner. Those rules include permissible-donor checks. *The current threshold figures were not verified*; see open questions.
- **Benchmark rules for registered parties** (useful for a voluntary policy):
  - Donations **over £500** may only be accepted from **permissible donors**: individuals on a UK electoral register; companies and LLPs incorporated, registered and trading in the UK; UK-based trade unions; and UK-based unincorporated associations. *High:* Green Party donation policy page, 2026, restating PPERA.
  - Reporting thresholds are **£11,180** (central party) and **£2,230** (accounting units). The central threshold rose from £7,500 on **1 January 2024**. *High:* Green Party page; MBM donations policy (May 2026), which cites SI 2023/1235.
- **Northern Ireland:** permissible sources for NI parties also include **Irish citizens and Irish companies**. *Medium:* 2018 news report on Electoral Commission NI data; NI Assembly Research Paper of 17 Nov 2010 on the historical background.
- **Pending reform:** the **Representation of the People Bill**.
  - **Progress:** Commons first reading 12 February 2026, third reading 2 September 2026. Lords second reading 14 September 2026, committee stage 2 November 2026. *Medium:* WestminsterBrief tracker.
  - **Content:** voting age 16; company donors would need a genuine UK connection (UK headquarters, UK ownership or control, enough UK revenue); tighter rules for unincorporated associations; "know your donor" guidance; Electoral Commission fines up to £500,000; tougher penalties for electoral intimidation; candidates acting as their own agent no longer having to publish a home address. *Medium:* Solicitor Advocates news, 22 Feb 2026; Wikipedia.
  - **It is not law yet.** Re-check the bill before launching any fundraising.
- **Model to copy:** Murray Blackburn Mackenzie, a non-party policy group, voluntarily applies the Electoral Commission permissibility rules: it checks donations of £500 and above and names donors above £11,180 a year. *High:* MBM policy, May 2026. This is a credible, transparent model for CSP.

### 2.2 Ireland

| Point | Finding | Confidence and source |
|---|---|---|
| Who keeps the register | The Register of Political Parties is kept by the Registrar. Since An Coimisiún Toghcháin (the Electoral Commission) was set up on 9 February 2023, the Registrar is its Chief Executive. | High: An Coimisiún Toghcháin, "Introduction to registering a political party" (8 June 2023). |
| Unregistered party candidates | Candidates of unregistered parties appear as **"non-party"** on the ballot paper. | High: same. |
| Name | No more than 6 words; not identical or confusingly similar to another registered party. | High: same. |
| Membership test | To contest Dáil or European elections across the State: 300 adult members, at least half registered to vote, or a sitting TD or MEP. For part of the State only, or local elections only: 100 adult members, or sitting representatives. Membership lists must be certified by a statutory auditor. | High: same. |
| What the register shows | Name, emblem, headquarters address, names of officers authorised to certify candidates, accounting units and responsible persons. | High: same. |
| SIPO "third party" rule | Anyone other than a registered party or candidate who accepts more than **€100** in a year for **"political purposes"** is a "third party". "Political purposes" includes campaigns to achieve a particular outcome on government or public-authority policy. Third parties must register, use a dedicated bank account and file annual returns. Foreign donations are prohibited, except from Irish citizens living abroad. | Medium: IHREC policy statement (Jan 2019); ICCL explainer (c.2018); SIPO third-party guidelines (Dec 2023, search excerpt only; sipo.ie blocked). |
| Donation limits (third parties and parties) | ICCL summarises: no foreign donations, no anonymous donations over €100, no cash over €200, and no more than €2,500 from a single source. | Medium: ICCL (c.2018). Confirm the current figures with SIPO. |
| EU political ads (TTPA, Reg. 2024/900) | **Fully applicable from 10 October 2025.** Political ads must be labelled and show who paid, the cost, and the targeted audience. Targeting with personal data needs data collected from the person and separate explicit consent, with **no profiling on special-category data**. Targeting people who will not reach voting age within a year is prohibited. The rules can reach issue-based groups. | High: European Commission page (2026). High: Polish DPA (UODO) summary (10 Oct 2025). Medium: Wikipedia. |
| Platform reaction | Meta said it would suspend political and issue-based ads in the EU from October 2025, and Google announced an exit from EU political ads. CSP may be unable to run paid issue ads aimed at Ireland at all. | Medium: Wikipedia. |

**Implications for CSP in Ireland:**

- Using "Party" while unregistered is fine, but any candidates appear as "non-party".
- If CSP takes Irish donations above €100 a year for advocacy, assume it must register with SIPO as a third party and refuse non-Irish foreign money. Get advice first.

### 2.3 India (brief)

The main source is the ECI "Guidelines and application format for registration of political parties under Section 29A". The copy I opened is undated (hosted by ACE Project), so confidence is *medium-high*.

- **Deadline:** an association of Indian citizens must apply to the ECI **within 30 days of formation**. Late applications are time-barred under s.29A(2)(b).
- **Fee:** a **₹10,000** demand draft processing fee, which is non-refundable.
- **Constitution:** a party constitution with prescribed articles:
  - the name must not contain religion or caste;
  - objectives must be in line with the Constitution of India;
  - membership must be open to all adult Indian citizens;
  - internal elections and fixed tenures are required;
  - accounts must be audited and filed with the ECI;
  - the mandatory s.29A(5) allegiance clause must be included.
- **Members:** electoral-roll extracts for at least 100 members, plus individual affidavits from 100 members saying they are not members of another registered party.
- **Publicity:** the applicant publishes its proposed name in **two national and two local dailies**, and objections are invited. The normal objection window is 30 days; the ECI granted a one-time cut to 7 days in March 2024. *High:* ECI Press Note 56/2024, 20 March 2024.
- **Foreign funding:** the FCRA bars an **"organisation of a political nature"** from receiving foreign contributions, under s.3(1)(f) and Rule 3 of the FCRA Rules 2011.
  - In March 2020 the Supreme Court (the INSAF case) read this down. It covers only organisations connected to **active politics or party politics**. Groups backing public causes, even through bandh or hartal, are not automatically caught. *Medium-high:* LiveLaw, 6 Mar 2020.
  - CSP's self-description as a "Party" could invite scrutiny under this provision if it ever operates in India. Get Indian legal advice before taking any money in India.

---

## 3. Data protection and privacy

### 3.1 Why political opinions are special-category data for CSP

- Under UK GDPR Art. 9, political opinions are special-category data. That includes opinions **inferred** by CSP or attributed to a person. *High:* ICO political campaigning guidance, "Special category data". The ICO says this guidance is under review following the Data (Use and Access) Act 2025.
- Anyone who joins, subscribes to or donates to a feminist political movement reveals a political view. Treat that data as special category.
- **Lawful bases available to CSP:**
  - **Art. 6 (lawful basis):** consent (6(1)(a)) for the newsletter and joining; legitimate interests (6(1)(f)) for replying to contact messages and for security or anti-abuse processing.
  - **Art. 9 (special-category condition):**
    - **Explicit consent, Art. 9(2)(a).** It must be a clear statement that names the type of data, kept separate from other consents, with records kept. *High:* ICO.
    - **Not-for-profit body with a political aim, Art. 9(2)(d).** This covers only members, former members and people in **regular contact** with CSP. It does **not** cover prospective members with no prior contact. It needs safeguards such as restricted access, shorter retention and an opt-out. Data **cannot be disclosed outside CSP without explicit consent**. *High:* ICO.
    - **Registered political parties condition (DPA 2018 Schedule 1, para 22).** This is **not available**: the ICO says it is limited to parties registered under PPERA s.23, and that others "need to rely on the explicit consent of the individual". *High:* ICO.
  - Ireland is equivalent. The Irish Data Protection Act 2018's provisions for political parties (s.39 communications; s.48 processing political opinions in electoral activities) are limited to registered parties, candidates and office-holders. s.2 defines "political party" as one registered in the Register of Political Parties. *High:* Irish Statute Book.
- **Practical conclusion:**
  - Use **explicit consent** for every form that adds someone to CSP's lists.
  - Rely on 9(2)(d) as a supporting condition for internal processing of member records.
  - Never share supporter lists, including with "allied" groups, without explicit consent.
- **No targeting with political data:** the ICO says special-category data, inferred or otherwise, should not be used to target political messaging without explicit consent.
  - Uploading supporter emails to Meta or Google for custom or lookalike audiences is high risk. It needs clear up-front information, explicit consent and joint-controller arrangements.
  - The ICO notes that hashing "is not an anonymisation technique".
  - Do not do this at launch. *High:* ICO "Political campaigning in the online world".
- **DPIA:** the ICO says online political targeting is likely high risk and calls for a DPIA. Do a short DPIA anyway for the join form and testimony channel, given the special-category data and young audience.

### 3.2 Form-by-form design: lawful basis, fields and consent

| Form | Purpose | Lawful basis (Art. 6 / Art. 9) | Required fields | Optional fields | Do NOT ask |
|---|---|---|---|---|---|
| **Join / supporter** | Supporter list, campaign updates, event invites | Consent / explicit consent (9(2)(a)); 9(2)(d) for ongoing member admin | First name; email; age confirmation (16+); explicit-consent tick | Country or region (dropdown: Northern Ireland, England, Scotland, Wales, Ireland, India, Other); interests (tick-list of CSP campaigns) | Full date of birth, gender, sexuality, ethnicity, religion, survivor status, phone, home address |
| **Newsletter only** | Email updates | Consent / explicit consent | Email; age confirmation; consent tick | First name | As above |
| **Contact** | Reply to enquiries | Legitimate interests; explicit consent if the person chooses to share sensitive information | Name (any name they want); email; message; topic dropdown (press, partnership, volunteer, other) | none | Anything identifying third parties. Add microcopy: "Please don't include details about other people." |
| **Press** | Media enquiries | Legitimate interests | Name; outlet; email; message | Deadline | |
| **Testimony / story** | Collect lived experience for research or publication | Explicit consent (separate consents to store and to publish) | **Not on Netlify Forms.** See section 4.4 | | |
| **Donations (future)** | Payments | Contract and legal obligation; explicit consent for list sign-up | Use a payment provider's hosted page; never collect card data on the site | Gift Aid is not applicable unless CSP is a charity | |

**Draft consent wording** (adapt; legal review needed):

- **Join form, single required tick (unticked by default):**
  > ☐ **Yes, add me to Cultural Shock Party's supporter list.** I'd like emails about CSP's campaigns, events and ways to get involved. I understand that joining shows I support CSP's feminist political aims, which is sensitive "political opinion" information, and I **explicitly consent** to CSP holding and using it for these purposes. I can unsubscribe or ask CSP to delete my details at any time. [Read our privacy notice]
- **Age, required:**
  > ☐ I'm 16 or older. *(If you're under 16, you're very welcome to use our resources. We just can't add you to our lists yet.)*
- **Optional, separate:**
  > ☐ I'd also like to hear about volunteering or local actions near me.
- **Contact form microcopy (no tick needed if you discourage sensitive content):**
  > We'll only use this to reply to you, and we delete messages after 12 months. Please don't share sensitive details about yourself or anyone else here. If you want to tell us about an experience, use our [secure stories channel]. [Privacy notice]
- **Rules the wording must follow** (*high*, ICO PECR email guidance and ICO consent conditions):
  - no pre-ticked boxes;
  - name CSP and say "email";
  - keep records of who consented, when, how and to what wording (store the consent text version with each record);
  - withdrawing consent must be as easy as giving it.

### 3.3 Email marketing (PECR in the UK; ePrivacy rules in Ireland)

- Promoting an organisation's aims and ideals, including political campaigns, is "direct marketing". *Medium:* older ICO direct marketing guidance as reported in commentary. *High* for the current ICO view that online political messages directed at individuals are direct marketing.
- **Consent is required for marketing emails.** The ICO says charities, political parties and other not-for-profits must not use the products-and-services soft opt-in for campaigning or fundraising emails, **"even to existing supporters"**. *High:* ICO "How do we comply with the PECR electronic mail marketing rules?".
- The **charitable-purposes soft opt-in** (DUAA 2025, in force **5 February 2026**) is available **only to charities**, and only for contact details collected on or after that date. CSP is not a charity, so this does not help. *High:* ICO.
- **Every email must:**
  - not disguise the sender;
  - give a valid address for opting out;
  - offer an opt-out in every message. *High:* ICO.
- **Penalties:** since 5 February 2026, PECR fines match UK GDPR levels: up to £17.5m or 4% of global turnover. The ICO no longer needs to show "substantial damage or distress". *Medium-high:* Mishcon de Reya, 12 Feb 2026; Clifford Chance, 6 Feb 2026.
- **Practical:**
  - Use double opt-in: a confirmation email with a link.
  - Keep a suppression list of unsubscribed addresses so they are never re-added.
  - Choose an email platform with UK or EU data residency and a DPA that covers special-category data. Check before signing; I did not compare providers.

### 3.4 Cookies, tracking and analytics: avoiding a banner

**UK position (PECR as amended by DUAA 2025, in force 5 Feb 2026):**

- Storing or accessing information on a user's device needs consent unless an exception applies. *High:* ICO storage and access technologies guidance. The ICO finalised the guidance on 29 April 2026 (*medium:* Costello Advisory, May 2026).
- **Exceptions (ICO):**
  - communication;
  - **strictly necessary** (including security used *solely* for that purpose; never advertising);
  - **statistical purposes (analytics)**;
  - **appearance or functionality** (for example remembering a dark-mode or language choice);
  - emergency assistance.
- **Conditions for the statistical (analytics) exception:**
  - the analytics must be the sole purpose;
  - users get clear and comprehensive information;
  - users get a **"simple and free" means to object**, which the ICO suggests can be a default-on toggle;
  - you must stop if a user objects;
  - a third-party provider may be used only as a **processor**, not a joint controller;
  - **no tracking of individuals, profiling or advertising measurement**. *High:* ICO.
- **In scope as well as cookies:** localStorage and sessionStorage, pixels, fingerprinting, link decoration, and scripts and tags. *High:* ICO. So "cookieless" tools that fingerprint are not exempt by default.
- Advertising pixels, social plugins and similar tags used for targeting **need prior consent**. Legitimate interests cannot be used for them. *High:* ICO political campaigning online guidance.

**Ireland and EU position:**

- The DPC says **analytics cookies require consent**. It adds that first-party aggregate analytics with a clear opt-out are "unlikely" to be an enforcement priority.
- Banners must give "reject" equal prominence to "accept". Pre-ticked boxes and sliders are not allowed. Consent should be re-confirmed after no more than 6 months.
- *High:* DPC guidance note on cookies (April 2020). The UK's DUAA analytics exception does **not** apply under Irish law.

**Recommended set-up (no banner needed in UK or Ireland, my assessment):**

| Need | Recommended option | Why |
|---|---|---|
| Visitor statistics | **Netlify Web Analytics** (server-side, from CDN logs, "no client-side code", "without cookies"; counts unique IP addresses per day). *High:* Netlify docs. **Or** Cloudflare Web Analytics: free, "does not use any client-side state, such as cookies or localStorage", no fingerprinting. *High:* Cloudflare. **Or** Plausible: paid, no cookies or localStorage, EU-hosted. *High:* Plausible data policy, Sept 2026. | Nothing is stored on or read from the device for server-side analytics, which keeps it outside the consent rule (my reading). Cookieless JS tools rely on the UK statistical exception: add an opt-out toggle on the privacy page and describe the tool. Netlify Web Analytics pricing and plan availability were **not verified**. |
| Fonts | **Self-host** fonts in the site bundle | Avoids sending visitor IPs to Google on every page load |
| Video | Use a click-to-load placeholder ("This loads YouTube, which may set cookies") or link out. Or use youtube-nocookie with click-to-load | Embeds set third-party storage |
| Instagram or TikTok embeds | Link out with a static image and a button | Embeds load trackers |
| Spam protection | Netlify **honeypot** plus Akismet (built in) first. **Avoid reCAPTCHA by default** | Google's privacy policy (effective 16 Oct 2026) says embedded Google services share information with Google and that it collects "IP addresses and cookie data" to protect against abuse. The PECR security exception applies only where the technology is used *solely* for security, so reCAPTCHA is a consent risk (my assessment). |
| Social ads pixels | **Do not install** at launch | Need prior opt-in consent and a consent tool |

If CSP later adds anything that needs consent, use a banner where "Reject all" is as prominent as "Accept all", with no pre-ticked categories and consent records kept.

### 3.5 Netlify Forms: data location, contracts and spam handling

| Point | Finding | Confidence and source |
|---|---|---|
| Storage location | Netlify staff: "we store form submissions with our backing store(s) ONLY… At present, that is in the US." No EU data centre had been announced by 2023. | Medium: Netlify Support Forum, Nov 2021 to Sept 2023 (older; ask Netlify to confirm). |
| Transfer mechanism | The Netlify DPA (Last Updated **9 June 2026**) says Netlify is certified under the **EU-US Data Privacy Framework and the UK Extension**. EU SCCs and the UK IDTA apply as fallback. The DPA "forms part of" the Self-Serve Subscription Agreement, which I read as covering free self-serve accounts. | High for the text; medium for coverage of the free plan. |
| Special-category data | DPA Exhibit I, "Sensitive data transferred": **"None"**. | High: Netlify DPA. **Implication:** Netlify has not scoped its processing for special-category data. Keep political-opinion data and testimony out of Netlify Forms where possible, or minimise and delete it quickly. |
| Sub-processors | Automattic (Akismet), "spam filtering for comments, forms, and text submissions", US. Also AWS and Google Cloud (US), SendGrid (email, US) and others; all listed locations are US. | High: Netlify Trust Center (updated 23 Oct 2026). |
| Spam filtering | All submissions are filtered by **Akismet**. Optional **honeypot** (`netlify-honeypot="bot-field"` plus a CSS-hidden input) and **reCAPTCHA 2** (`data-netlify-recaptcha="true"`). Honeypot and reCAPTCHA rejections are not stored at all. | High: Netlify docs. |
| Free-plan limits | Since **14 April 2026** form submissions are free and unlimited on all Credit plans, including Free. Previously each submission cost 1 credit. | High: Netlify changelog. |

**Netlify Forms recommendations:**

1. Use Netlify Forms only for **contact, press and newsletter or join** forms with minimal fields. Always add the **honeypot**.
2. **Never** enable file uploads. Never collect testimonies, health, sexual-violence or identity details through Netlify Forms.
3. Turn off or minimise email notifications. Notification emails copy the data into inboxes via SendGrid. If you keep notifications, send them to a role inbox with 2-step verification.
4. **Export and delete** submissions on a schedule. A suggestion: move join and newsletter entries to the email platform weekly, then delete them from Netlify. Clear the spam folder every 30 days.
5. **Better architecture (phase 2):** post the join form straight to an email platform's UK- or EU-hosted API through a Netlify Function, so the data never sits in Netlify Forms. Vendor residency claims are **not verified** here.
6. Name Netlify and Akismet as processors, and the US transfer and its safeguard, in the privacy notice.

### 3.6 Governance and admin (UK)

- **ICO data protection fee:** organisations processing personal data generally must pay unless exempt, under the Data Protection (Charges and Information) Regulations 2018. *High:* ICO. Some not-for-profit exemptions exist, but **I could not open the exemption details**, so use the ICO's self-assessment.
- **Records of processing, DPIA, breach plan:** keep a one-page register of what CSP holds, why, where and for how long. Do a DPIA for the join list and stories channel. Have a 72-hour breach-reporting plan (UK GDPR standard; *medium*, general knowledge).
- **Complaints:** from **19 June 2026** (DUAA), people can complain directly to controllers, and controllers must acknowledge complaints within 30 days. *Medium-high:* Clifford Chance, 6 Feb 2026. Give a privacy-complaints contact in the privacy notice.
- **Privacy notice content:** must cover the ICO's Art. 13 list: identity and contact details; purposes; lawful basis; legitimate interests; recipients; international transfers and safeguards; retention; rights; right to withdraw consent; right to complain to the ICO; whether data provision is required; automated decisions. The right to object must be stated clearly and separately. *High:* ICO. Drafts are in section 7.

### 3.7 Ireland and India: data protection notes

- **Ireland:** the age of digital consent is **16** (Data Protection Act 2018 s.31). The DPC's "Fundamentals for a child-oriented approach to data processing" set child-specific expectations (DPC, final c. Dec 2021). The cookie rules are stricter than the UK's (see 3.4). *High.*
- **India: Digital Personal Data Protection Act 2023** (Gazette, 11 Aug 2023; *high*):
  - **Reach:** applies to digital personal data processed in India, *and* outside India where it is connected with offering goods or services to people in India.
  - **Children:** "child" means **under 18**. Before processing a child's data, organisations must obtain **verifiable consent of a parent**. There must be no processing likely to harm a child, and **no tracking, behavioural monitoring or targeted advertising directed at children**.
  - **Penalties:** up to ₹200 crore for breaching the children's obligations and up to ₹250 crore for security failures.
  - **Commencement (Rules 2025):** some provisions from 13 Nov 2025, more from 13 Nov 2026, and the rest from **13 May 2027**. *Medium:* Wikipedia.
  - **CSP action:** for visitors who say they are in India, accept sign-ups from **18+ only**.

---

## 4. Safety: protecting CSP, its team and contributors

### 4.1 Threat model (what to design against)

Feminist and political organisations attract:

- coordinated harassment and pile-ons;
- doxxing (publishing home addresses, workplaces or family details);
- impersonation and fake accounts;
- phishing aimed at organisers;
- form spam and abuse sent through contact forms;
- malicious data-subject requests used to probe for information;
- hostile reuse of published testimonies.

The NCSC's guidance for high-risk individuals covers people in political life, **including activists**. It warns that spear-phishing and social engineering are the common attack routes and names state-linked campaigns. *High:* NCSC, published 7 Dec 2023, reviewed 29 May 2024.

### 4.2 Website and account hardening

- **No personal emails or phone numbers on the site.** Use forms plus role addresses (hello@, press@, safeguarding@, privacy@). These can forward to individuals without revealing them.
- **Addresses:**
  - Use a **PO Box or mailbox** for imprints; the Elections Act guidance permits it.
  - If CSP ever registers as a party, the public register will show leadership and address. In Ireland it shows headquarters and authorised officers. Plan a non-residential headquarters address.
  - The pending UK Bill would stop candidates who act as their own agent from having to publish a home address (*medium*).
- **Domain privacy:**
  - Under ICANN's Registration Data Policy (effective **21 Aug 2025**), registrant name, street, postcode and phone are redacted for natural persons where redaction applies. The name is published only with consent, and email is replaced by a contact form or anonymised address. *High:* ICANN.
  - Check that the culturalshockparty.com registrar shows the record redacted, and use the registrar's privacy service.
- **Founder and team pages:**
  - Publish chosen names, roles and professional photos only.
  - Never include location details (street, school, workplace), children, or metadata (strip EXIF from images).
  - Link only to accounts each person chooses to make public.
  - Get written consent from each team member before listing them.
- **Accounts:**
  - Turn on 2-step verification (authenticator app, not SMS) on Netlify, GitHub, the domain registrar, the email platform and all social accounts.
  - Use a password manager and unique passwords.
  - Use a social-media management tool rather than sharing passwords.
  - Deny unexpected 2SV prompts. *High:* NCSC.
- **Security headers via Netlify `_headers`** (technical recommendation): Content-Security-Policy that allows only self and your analytics endpoint; HSTS; `X-Content-Type-Options: nosniff`; `Referrer-Policy: strict-origin-when-cross-origin`; `Permissions-Policy` disabling camera, microphone and geolocation.
- **Forms:**
  - Honeypot on every form, with Akismet on by default.
  - Server-side length limits.
  - No HTML rendering of submissions.
  - Never auto-publish anything submitted.
  - A thank-you page that reveals nothing.
  - Optional rate limiting with an edge function later.
- **Data requests:** verify identity before answering subject access or erasure requests, so the process cannot be used to fish for other people's data.
- **Harassment response plan (offline document):**
  - who triages;
  - when to screenshot and log evidence;
  - reporting routes (platform tools; Report Harmful Content, run by SWGfL with the UK Safer Internet Centre; police for threats);
  - aftercare for targeted members.
  - Report Harmful Content does not take terrorism content or sexual images of under-18s; those go to Action Counters Terrorism and the IWF. *High:* reportharmfulcontent.com.

### 4.3 Moderation and the Online Safety Act

- The Online Safety Act 2023 applies to search services and to services that let **users post content or interact with each other**: social media, forums, file-sharing, messaging and similar. The illegal-content duties have been in force since 17 March 2025, and children's risk assessments were due by 24 July 2025. *High:* GOV.UK OSA explainer, updated 24 Apr 2025.
- **CSP at launch:** no comments, forums, user profiles or user-to-user messaging. Content goes up only after CSP editors review it. On that basis CSP is likely outside the user-to-user regime (my assessment; *low-medium*, since I could not open Ofcom's checker). Run Ofcom's online-safety regulation checker before adding any community feature.
- **If you add community features later,** budget for an illegal-content risk assessment, a children's access assessment, reporting tools and moderation staffing.

### 4.4 Testimony and story submissions: the highest-risk feature

**Legal hazards:**

- **Anonymity of sexual-offence complainants:**
  - **UK:** the CPS notes that publications breaching reporting restrictions may be offences, for example under **s.5 Sexual Offences (Amendment) Act 1992**. *High:* CPS legal guidance, revised 15 Oct 2024.
  - That Act gives complainants of sexual offences lifelong anonymity. That is my understanding; I could not open the statute (*medium*). How it applies in Northern Ireland was **not verified**.
  - **Ireland:** the Criminal Law (Rape) Act 1981 s.7 bars publishing matter likely to identify a complainant. I opened the original enacted text; later amendments were not verified.
  - **India:** I understand Indian law also restricts disclosing the identity of rape victims (Bharatiya Nyaya Sanhita), but **this was not verified**.
- **Contempt of court (UK):** under the strict-liability rule, a publication about **active** proceedings that creates a "substantial risk" of serious prejudice can be contempt, whatever the publisher intended. *High:* CPS. Never publish testimony about a live case.
- **Defamation:** naming or identifying an alleged perpetrator or institution exposes CSP to claims. The law differs between England and Wales, Northern Ireland, Ireland and India; the Defamation Act (Northern Ireland) 2022 was **not verified**. Take legal review before publishing any allegation about an identifiable person or organisation.
- **Data protection:** testimonies often contain health, sex-life and criminal-allegation data about the author *and third parties*. You need explicit consent from the author. Third-party data should be removed unless there is a clear legal basis.

**Process safeguards (recommended):**

1. **Separate channel:** not Netlify Forms. Use an end-to-end encrypted or UK/EU-hosted secure form or inbox, with access limited to two trained people.
2. **Age gate:** 18+ only. Under-18s are shown support routes such as Childline, the NSPCC and local services, and no data is collected.
3. **Consent layers, each recorded separately:**
   - (a) CSP may store and read the story for research;
   - (b) CSP may **publish** an edited version;
   - (c) credit: anonymous, pseudonym or first name;
   - (d) CSP may quote it in reports or media.
   - Each can be withdrawn. Promise takedown of published versions within a set time, for example 7 days.
4. **Collection guidance:** "Please don't name or describe anyone in a way that could identify them, including yourself if you want to stay anonymous. Don't tell us about cases currently going through the courts."
5. **Editorial checklist before publishing:**
   - remove names, places, dates, employers, schools, unique details and image metadata;
   - check that no live proceedings are involved;
   - get legal review for any allegation;
   - show the author the final text before it goes out.
6. **Trauma-informed design:** a content note at the top, a quick-exit button on the stories pages, support links on every story page, and no comments under stories.
7. **Retention:** delete unpublished raw submissions after an agreed period, for example 12 months, unless the author agrees to longer for research. Keep consent records for as long as the story is published.

### 4.5 Under-18s (Gen Alpha) and safeguarding

- **UK:** a child of **13+** can consent to an information society service themselves; below 13, parental consent is needed. Verification effort should match the risk. *High:* ICO.
- **Children's Code (Age Appropriate Design Code):** applies to information society services **likely to be accessed by children** (under 18). This includes non-profit services where the service is the kind usually provided commercially. "Likely" means more probable than not. If you decide children are unlikely to use the site, document why. The code has **15 standards**, including best interests, DPIA, transparency, **high-privacy defaults**, **data minimisation**, no data sharing, **geolocation off**, profiling off by default and **no nudge techniques**. *High:* ICO.
  - CSP's stated audience includes Gen Alpha, so assume the code is relevant and design to it, even though a non-commercial brochure site's ISS status is arguable.
- **Ireland:** digital consent age **16**; DPC Fundamentals.
- **EU political ads:** no targeting of people who will not reach voting age within a year. *High:* UODO.
- **India:** under 18 requires verifiable parental consent, with no tracking or targeted advertising.
- **Recommended age policy (CSP decision):**
  - Joining and newsletter: **16+** (UK, NI and Ireland).
  - India: **18+**.
  - Testimonies: **18+**.
  - Under-16s: full access to resources, explainers and the manifesto with **no sign-up and no tracking**. Ask only "Are you 16 or over?", never date of birth.
- **Events and offline work with under-18s:**
  - Adopt a short **safeguarding policy statement** and name a safeguarding lead. NSPCC says any organisation or group working with children, including voluntary and community groups, needs one. It sets out contents: purpose, scope, legal context, commitments, named leads, NSPCC Helpline and Childline contacts, and review dates. *High:* NSPCC Learning, updated 1 Sept 2026.
  - In NI, the Department of Health's *Co-operating to safeguard children and young people in Northern Ireland* (2026) and the SBNI procedures apply to voluntary and community organisations (per NSPCC).
  - Criminal record checks: DBS covers England and Wales, **AccessNI** covers Northern Ireland, and Disclosure Scotland covers Scotland. *High:* GOV.UK.
  - Ireland: Tusla's Children First framework (not reviewed in detail).
- **Site design for young visitors:** plain-language privacy notice (a "short version" box at the top), no autoplay, no streaks or urgency nudges, and support links for young people.

---

## 5. Accessibility

- **Standard:** build to **WCAG 2.2 Level AA**. W3C Recommendation; the current version is dated 12 December 2024. *High:* W3C.
  - New criteria at A and AA: 2.4.11 Focus Not Obscured (Minimum), 2.5.7 Dragging Movements, 2.5.8 Target Size (Minimum), 3.2.6 Consistent Help, 3.3.7 Redundant Entry, and 3.3.8 Accessible Authentication (Minimum).
  - 4.1.1 Parsing was removed.
- **UK law:**
  - The Public Sector Bodies Accessibility Regulations 2018, which require WCAG 2.2 AA and an accessibility statement, apply to public bodies. Non-government organisations are exempt unless mostly publicly funded, providing essential public services, or targeting disabled people.
  - **"All UK service providers have a legal obligation to make reasonable adjustments"** under the **Equality Act 2010**, or the **Disability Discrimination Act 1995 in Northern Ireland**. *High:* GOV.UK, updated 30 Sept 2024.
  - The Equality Act's provisions on *associations* (for membership organisations) may also be relevant. **Not verified.**
- **Ireland and EU:** the European Accessibility Act covers e-commerce, banking, e-books, transport and similar services. *High:* European Commission. A non-commercial advocacy site is unlikely to be covered (my assessment), but a **merchandise shop selling to EU consumers** could be. I could not verify the EAA's start date or micro-enterprise exemption from the page I opened; check before adding a shop.
- **India:** disability-rights and digital-accessibility duties exist, but they were **not verified** in this research.
- **Gen Z and Gen Alpha specifics:**
  - captions and transcripts for all video;
  - alt text on campaign graphics;
  - text, not images of text, for slogans;
  - sufficient contrast for bold brand palettes;
  - motion-reduction support (`prefers-reduced-motion`);
  - clear focus states;
  - 24×24px minimum targets.
- **Accessibility statement (good practice):** standard met, known gaps, contact for alternative formats, and a response time.

---

## 6. Website implementation checklist

Tick these off before launch. "Owner" is for the CSP team to fill in.

### A. Political status and transparency

- [ ] FAQ and About page say plainly: "CSP is a movement, not currently a registered political party (UK, Ireland or India)".
- [ ] Footer line: "Cultural Shock Party is a feminist political-cultural movement. Not a registered political party." plus the imprint line "Promoted by [Name] on behalf of Cultural Shock Party, [PO Box]". The imprint is good practice on the site and **required on paid political ads**.
- [ ] Imprint template saved for every paid or boosted social post. Social team trained.
- [ ] No "vote CSP" or "CSP candidate" language. No other party's names or emblems.
- [ ] Before launch, check the Electoral Commission (GB and NI), Irish and ECI registers for similar names (**not done in this research**).
- [ ] No donate button until a donations policy is adopted and advice is taken (UK permissibility over £500; SIPO third-party rules for Ireland; FCRA for India). If added, link to a hosted payment page and publish the donations policy, using MBM as the model.

### B. Forms and personal data

- [ ] Join, newsletter, contact and press forms use **minimal fields** as listed in 3.2.
- [ ] **Unticked** explicit-consent checkbox with the special-category wording. The consent text is versioned and stored with each record.
- [ ] Age confirmation "I'm 16 or over" is required. Country "India" adds an 18+ check.
- [ ] Double opt-in confirmation email.
- [ ] Every form has `netlify-honeypot` plus a hidden field. **No reCAPTCHA** unless consent is handled.
- [ ] **No file uploads** on any Netlify form.
- [ ] **No testimony collection through Netlify Forms.** A separate secure channel is set up (see 4.4).
- [ ] Netlify form notifications go to a role inbox with 2-step verification, or are turned off.
- [ ] Retention schedule in place (section 7), with a calendar reminder to export, delete and clear spam.
- [ ] Privacy notice linked beside every form submit button.
- [ ] Record of processing, DPIA (join list, stories) and breach plan written.
- [ ] ICO data protection fee checked (pay or confirm exemption).

### C. Email

- [ ] Email platform chosen with UK or EU residency and a DPA covering special-category data (verify).
- [ ] Every email names CSP, has a working unsubscribe link and a postal or contact address.
- [ ] Suppression list maintained. No buying, renting or sharing lists. No uploads to ad platforms.

### D. Cookies and analytics (no banner)

- [ ] Analytics: Netlify Web Analytics (server-side), or Cloudflare Web Analytics or Plausible (cookieless). No Google Analytics, Meta pixel or TikTok pixel.
- [ ] Privacy page explains analytics and gives an **opt-out** toggle or link. This is needed for the UK statistical exception if any client-side script is used.
- [ ] Fonts self-hosted. No Google Fonts CDN.
- [ ] YouTube, Instagram and TikTok embeds replaced with click-to-load placeholders or links.
- [ ] Theme or language preference stored in localStorage only (covered by the appearance exception) and described in the privacy notice.
- [ ] Audit with browser dev tools: **zero** cookies or storage set before interaction, apart from the documented preference key.

### E. Security and hosting

- [ ] 2-step verification on Netlify, GitHub, the registrar, the email platform and socials. Password manager in use.
- [ ] Domain WHOIS shows redacted data, with registrar privacy service on.
- [ ] `_headers`: CSP, HSTS, nosniff, Referrer-Policy and Permissions-Policy.
- [ ] Netlify deploy previews password-protected or not shared publicly (they can expose drafts).
- [ ] No personal emails, phone numbers or home addresses anywhere in the site or repository. Scan the git history.
- [ ] Image EXIF metadata stripped in the build pipeline.

### F. Safety, testimonies and moderation

- [ ] No comments, forums or user-to-user features at launch. Re-assess against the Online Safety Act before adding any.
- [ ] Stories pages: content note, quick-exit button, support links, no comments.
- [ ] Testimony consent layers (store, publish, credit, quote, withdraw) and a published takedown promise.
- [ ] Editorial and legal review checklist: anonymisation, live-proceedings check, defamation review.
- [ ] Team page: consented names and roles only, no locations.
- [ ] Harassment and incident response plan, including evidence logging and Report Harmful Content and police routes.

### G. Children and young people

- [ ] Resources usable with **no sign-up**. No tracking.
- [ ] Short-version privacy summary in plain language.
- [ ] Children's Code self-assessment documented (best interests, high-privacy defaults, no nudges, geolocation off).
- [ ] Safeguarding policy statement and named lead **before** any event or programme involving under-18s. DBS or AccessNI checks where roles need them.

### H. Accessibility

- [ ] WCAG 2.2 AA audit: automated (axe or Lighthouse) plus manual keyboard and screen-reader checks.
- [ ] Captions and transcripts, alt text, contrast, focus visible, reduced-motion support, 24px targets, consistent help link (a contact link in the same place on every page).
- [ ] Accessibility statement page published with an alternative-format contact.

### I. Legal pages to publish

- [ ] Privacy notice (section 7)
- [ ] Cookies and analytics section (can sit inside the privacy notice)
- [ ] Accessibility statement
- [ ] Safeguarding statement (short public version)
- [ ] Stories and testimony policy (how CSP handles submissions, consent and takedown)
- [ ] Donations policy (only if fundraising)
- [ ] Imprint and "who we are" (legal or contact entity, PO Box)

---

## 7. Draft-ready privacy notice bullet points

> Draft content for a solicitor to review. Square-bracketed items are decisions CSP must make. Use plain language, with a two-to-three-line "short version" at the top for young readers.

**Short version (top of page):**

- We collect as little as we can: usually your first name and email.
- Joining CSP shows you support feminist politics, so we treat your details as sensitive and only use them with your clear permission.
- We never sell or share your details, and we don't use advertising trackers. You can leave at any time.

**Who we are**

- Cultural Shock Party ("CSP", "we") is a feminist political-cultural movement. We are **not currently a registered political party**.
- Data controller: [legal entity name or unincorporated association, plus the responsible individuals' role titles]. Contact: privacy@culturalshockparty.com; postal address: [PO Box].
- [If appointed: data protection lead or DPO contact.]
- [If CSP is based outside the UK but targets UK users, or vice versa: representative details. Decision depends on the country base.]

**What we collect and why** (one row per purpose)

- **Joining or newsletter:**
  - Data: first name, email, [region], [interests], your age confirmation, and a record of your consent.
  - Purpose: to send campaign updates, invitations and ways to take part.
  - Lawful basis: your **consent**, and your **explicit consent**, because your support reveals a political opinion.
  - Withdrawing: you can withdraw at any time.
- **Contact and press messages:**
  - Data: your name, email and message.
  - Purpose: to reply to you.
  - Lawful basis: our **legitimate interests** in responding to enquiries. If you choose to share sensitive information, we rely on your explicit consent.
- **Stories and testimonies:**
  - Data: what you choose to tell us, and your consent choices.
  - Lawful basis: your **explicit consent**, given separately for storing, publishing and quoting.
  - Controls: we remove identifying details before publishing, and you can withdraw.
- **Members' records** [if a formal membership exists]: we may also rely on the condition for not-for-profit bodies with political aims, for members and people in regular contact with us. Data is not disclosed outside CSP without explicit consent.
- **Website statistics:** [Netlify Web Analytics or chosen tool] tells us how many people visit which pages.
  - It does not use advertising cookies or follow you across sites.
  - [If a client-side tool is used: you can switch it off here: (toggle).]
  - Lawful basis: legitimate interests in improving the site.
- **Security and spam prevention:** form submissions are checked automatically for spam. Lawful basis: legitimate interests in keeping CSP and its supporters safe.
- **Device storage:** we store your [theme or language] choice on your device so the site looks the way you chose. [We set no other cookies.]

**What we never do**

- We never sell, rent or swap your details.
- We don't upload supporter lists to social media advertising tools, and we don't use your data to target political ads.
- We don't use your data for automated decisions about you.

**Who processes data for us** (processors, under contract)

- **Netlify, Inc.** (website hosting and forms, USA).
- **Automattic Inc. / Akismet** (spam filtering of form submissions, USA, via Netlify).
- [Email platform, location.]
- [Analytics provider, location.]
- [Secure stories platform, location.]
- [Payment provider, if fundraising.]

**International transfers**

- Some providers store data in the **USA**. Netlify relies on the **EU-US Data Privacy Framework and its UK Extension**, with standard contractual clauses or the UK International Data Transfer Addendum as backup. [Add the safeguards for each other provider.] You can ask us for a copy of the relevant safeguards.

**How long we keep it** (suggested, for CSP to confirm)

- Newsletter or supporter list: until you unsubscribe. We then keep only your email on a "do not contact" list, so we don't add you again.
- Inactive supporters: removed after [24] months without opening emails, after a re-permission email.
- Contact and press messages: [12] months after the conversation ends.
- Spam: deleted within [30] days. Form submissions on Netlify: exported and deleted within [7–30] days.
- Unpublished stories: [12] months unless you agree to longer. Published stories: while published, plus consent records for [6 years] (to be confirmed with a solicitor).
- Analytics: aggregated statistics only; [retention period of the chosen tool].

**Young people**

- You must be **16 or over** to join our lists (**18+** if you live in India) and **18 or over** to send us a story.
- If you're younger, you're welcome to use everything else on the site without giving us any information.
- If we learn we've collected data from someone under the age limit, we delete it.

**Your rights**

You can ask us to:

- show you a copy of your data;
- correct it;
- delete it;
- restrict how we use it;
- give it to you in a portable format.

You can also **object** to how we use it. You can **withdraw consent at any time**, and that is as easy as giving it: use the unsubscribe link or email privacy@. We may ask you to confirm your identity first, to protect your data. *(The right to object must be stated clearly and separately; ICO.)*

**Complaints**

- Please tell us first (privacy@). We'll acknowledge within 30 days. *(DUAA complaint handling, from 19 June 2026.)*
- You can complain to:
  - the **Information Commissioner's Office (ICO)** in the UK, at ico.org.uk;
  - in Ireland, the **Data Protection Commission** (dataprotection.ie);
  - in India, the **Data Protection Board of India**.

**Changes**

- Version number, date, and a summary of what changed. We'll email supporters about significant changes.

---

## 8. Open questions and items not verified

1. **Country base and legal form.** Is CSP an unincorporated association, a company limited by guarantee, a CIC or something else, and in which country? This decides the controller identity, ICO or DPC registration, the representative rules, and which election regulator matters most.
2. **Will CSP ever stand candidates?** If yes, plan for party registration: officers, financial scheme, a public headquarters address, and PPERA donation and reporting rules. In Ireland, 300 members or a sitting TD/MEP. In India, a filing deadline of 30 days from formation.
3. **Money.** Will CSP take donations or crowdfunding, from where, and for what? Confirm UK non-party campaigner thresholds (**not verified**), current SIPO third-party guidance (sipo.ie was blocked), and Indian FCRA exposure.
4. **Name conflicts.** Not checked, because the search budget ran out. Search the GB and NI registers, the Irish Register, the ECI list, Companies House and UK IPO trade marks for "Cultural Shock" names.
5. **Charity status.** CSP may want charity status for funding. Political purposes are generally incompatible with charitable status (my understanding; **not verified**), and the charity soft opt-in would not apply to a non-charity.
6. **Equality Act "associations" duties** and the **Defamation Act (Northern Ireland) 2022**: **not verified**.
7. **UK sexual-offence anonymity statute text**, its Northern Ireland application, and the **Indian anonymity provision**: **not verified** from primary text.
8. **Netlify:** ask Netlify in writing to confirm where Forms data is stored, and whether its DPA's "Sensitive data: None" annex makes special-category processing out of scope. Also confirm Web Analytics availability and retention on the free plan.
9. **Email and stories providers:** choose and verify their UK or EU residency and DPA terms.
10. **Representation of the People Bill:** re-check its stage and final donation and imprint rules before fundraising. Lords committee stage was due 2 November 2026.
11. **India:** accessibility law and how the DPDP Rules apply to a non-Indian controller with Indian supporters. **Not verified.**

---

## 9. Source register (all opened during this research unless marked)

| # | Source | Date shown | Used for | Confidence |
|---|---|---|---|---|
| 1 | ICO: Political campaigning guidance, Special category data. https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-for-the-use-of-personal-data-in-political-campaigning-1/special-category-data/ | Undated; "under review" due to DUAA | Political opinions, Art. 9 conditions, para 22 for registered parties only | High |
| 2 | ICO: Political campaigning in the online world. https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-for-the-use-of-personal-data-in-political-campaigning-1/political-campaigning-in-the-online-world/ | Undated; under review | Pixels need consent, custom audiences, DPIA | High |
| 3 | ICO: What are the conditions for processing (special category). https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/special-category-data/what-are-the-conditions-for-processing/ | Undated | Explicit consent, 9(2)(d), appropriate policy document | High |
| 4 | ICO: How do we comply with the PECR electronic mail marketing rules? https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-direct-marketing-using-electronic-mail/how-do-we-comply-with-the-pecr-electronic-mail-marketing-rules/ | Mentions 5 Feb 2026 | No soft opt-in for parties and not-for-profits; consent rules | High |
| 5 | ICO: DUAA summary, PECR changes. https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/the-data-use-and-access-act-2025-duaa-summary-of-the-changes/privacy-and-electronic-communications/ | 19 Jun 2025 | Charity soft opt-in, enforcement alignment | High |
| 6 | ICO: Storage and access technologies, exceptions. https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-the-exceptions/ | Undated (final 29 Apr 2026 per #8) | Analytics exception conditions | High |
| 7 | ICO: What are storage and access technologies? https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-storage-and-access-technologies/ | Undated | Scope covers localStorage, pixels, fingerprinting | High |
| 8 | Costello Advisory: ICO cookie guidance 2026. https://costello-advisory.com/articles/ico-cookie-guidance-2026.html | May 2026 | Exemptions from 5 Feb 2026; ICO final guidance 29 Apr 2026 | Medium |
| 9 | Clifford Chance: Key aspects of DUAA take effect. https://www.cliffordchance.com/insights/resources/blogs/talking-tech/en/articles/2026/02/key-aspects-of-the-data--use-and-access--act-take-effect.html | 6 Feb 2026 | Commencement No. 6 Regs; complaints from 19 Jun 2026 | Medium-high |
| 10 | Mishcon de Reya: Unlawful cookies, a new avenue for ICO fines. https://www.mishcon.com/news/unlawful-cookies-a-new-avenue-for-the-ico-to-issue-fines | 12 Feb 2026 | PECR fines up to £17.5m or 4% | Medium-high |
| 11 | ICO: What privacy information should we provide? https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/the-right-to-be-informed/what-privacy-information-should-we-provide/ | Undated; under review | Privacy notice contents | High |
| 12 | ICO: Children and UK GDPR, ISS and consent. https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/children-and-the-uk-gdpr/what-are-the-rules-about-an-iss-and-consent/ | Undated | Age 13, parental consent | High |
| 13 | ICO: Children's code, services covered. https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/services-covered-by-this-code/ | Undated | Scope, "likely to be accessed" | High |
| 14 | ICO: Age appropriate design code (main page). https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/ | Undated | 15 standards | High |
| 15 | ICO: Data protection fee. https://ico.org.uk/for-organisations/data-protection-fee/ | Undated | Fee generally payable unless exempt | High (exemptions not verified) |
| 16 | GOV.UK: Draft statutory guidance on digital imprints. https://www.gov.uk/government/publications/digital-imprints-draft-statutory-guidance/draft-statutory-guidance-on-digital-imprints | Updated 26 Jul 2023 | Imprint rules, PO Box allowed, UK-wide | High (draft; final in force 1 Nov 2023 per Commission press excerpt) |
| 17 | Electoral Commission: RP2 Descriptions explanatory notes (PDF). https://www.electoralcommission.org.uk/sites/default/files/pdf_file/enote-rp2d.pdf | File dated Nov 2011 | Name and description rules, ballot use | Medium-high |
| 18 | Electoral Commission pages (search excerpts only; site returned 403): "How political parties are registered", "Use of party names and party descriptions", written evidence to Parliament (committees.parliament.uk/writtenevidence/139435) | Various | Two registers, registration benefits, candidates-only rule, application details | Medium |
| 19 | Democracy Club: Opening the register of political parties. https://democracyclub.org.uk/blog/2023/08/15/opening-the-register-of-political-parties/ | 15 Aug 2023 | Register contents, party counts | Medium-high |
| 20 | Green Party: Donation Policy. https://donatetothe.greenparty.org.uk/?p=22 | 2026 footer | Permissible donors, £500, £11,180, £2,230 | High |
| 21 | Murray Blackburn Mackenzie: Donations policy (PDF). https://murrayblackburnmackenzie.org/wp-content/uploads/2026/05/MBM-donations-policy-May-2026.pdf | 15 May 2026 (updated 20 Feb 2024 text) | Voluntary model; £7,500 to £11,180 from 1 Jan 2024 | High |
| 22 | Cool FM / Hello Rayo: NI party donations. https://hellorayo.co.uk/cool-fm/local/news/revealed-how-much-money-did-political-parties-receive/ | 30 May 2018 | NI permissible sources incl. Irish citizens and companies | Medium |
| 23 | NI Assembly RaISe: Political donations and loans in NI (PDF). https://www.niassembly.gov.uk/globalassets/documents/raise/publications/2010/standards-privileges/17410.pdf | 17 Nov 2010 | Historical NI regime | Medium (historic) |
| 24 | WestminsterBrief: Representation of the People Bill tracker. https://westminsterbrief.co.uk/bill/representation-of-the-people-bill | Latest stage 2 Nov 2026 | Bill stages | Medium |
| 25 | Solicitor Advocates: Representation of the People Bill. https://solicitoradvocates.org/news/22-feb-2026-representation-of-the-people-bill/ | 22 Feb 2026 | Bill contents | Medium |
| 26 | Wikipedia: Representation of the People Bill. https://en.wikipedia.org/wiki/Representation_of_the_People_Bill | Accessed Oct 2026 | Bill overview, votes at 16 | Medium-low |
| 27 | An Coimisiún Toghcháin: Introduction to registering a political party (DOCX). https://www.electoralcommission.ie/app/uploads/2024/05/INTRODUCTION-TO-REGISTERING-A-POLITICAL-PARTY-08062023-FINAL-1.docx | 8 Jun 2023 (uploaded May 2024) | Irish register rules | High |
| 28 | IHREC: Policy statement on the Electoral Acts and civil society space (PDF). https://www.ihrec.ie/downloads/Policy-Statement-on-the-Electoral-Acts-and-Civil-Society-Space-in-Ireland_2025-05-12-124116_ljvm.pdf | Jan 2019 | "Political purposes" and "third party" definitions | Medium |
| 29 | ICCL: What is the Electoral Act? https://iccl.ie/?p=3759 | c.2018 (undated) | Donation limits summary | Medium |
| 30 | Irish Statute Book: Data Protection Act 2018 ss.2, 31, 39, 48. https://www.irishstatutebook.ie/eli/2018/act/7/section/31/enacted/en/html (and /section/2, /39, /48) | Enacted text | Age 16; party-only political-data provisions | High |
| 31 | Irish Statute Book: Criminal Law (Rape) Act 1981 s.7. https://www.irishstatutebook.ie/eli/1981/act/10/section/7/enacted/en/html | Enacted text (amendments not checked) | Complainant anonymity | Medium |
| 32 | DPC: Guidance note on cookies (PDF). https://www.dataprotection.ie/sites/default/files/uploads/2020-04/Guidance%20note%20on%20cookies%20and%20other%20tracking%20technologies.pdf | Apr 2020 | Analytics cookies need consent in Ireland; banner rules | High |
| 33 | DPC: Fundamentals for a child-oriented approach. https://www.dataprotection.ie/en/dpc-guidance/fundamentals-child-oriented-approach-data-processing | Draft Dec 2020; final c. Dec 2021 | Irish children's guidance | Medium-high |
| 34 | European Commission: Transparency and targeting of political advertising. https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/democracy-eu-citizenship-anti-corruption/democracy-and-electoral-rights/transparency-and-targeting-political-advertising_en | 2026 content | TTPA full application 10 Oct 2025, labelling | High |
| 35 | UODO (Polish DPA): New regulations on political advertising. https://uodo.gov.pl/en/553/2049 | 10 Oct 2025 | TTPA targeting conditions, minors | High |
| 36 | Wikipedia: TTPA Regulation. https://en.wikipedia.org/wiki/Transparency_and_Targeting_of_Political_Advertising_Regulation | Accessed Oct 2026 | Dates, Meta and Google responses | Medium |
| 37 | ECI: Guidelines and application format, s.29A (PDF via ACE Project). https://aceproject.org/ero-en/regions/asia/IN/india-registration-for-political-parties-under | Undated | Indian registration requirements | Medium-high |
| 38 | ECI Press Note 56/2024 (PDF). https://elections24.eci.gov.in/docs/tnBnRp3Pt7.pdf | 20 Mar 2024 | Newspaper notice and objection period | High |
| 39 | DPDP Act 2023, Gazette (MeitY PDF). https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf | 11 Aug 2023 | Children s.9, reach s.3, penalties | High |
| 40 | Wikipedia: DPDP Act 2023. https://en.wikipedia.org/wiki/Digital_Personal_Data_Protection_Act,_2023 | Accessed Oct 2026 | Commencement dates | Medium |
| 41 | LiveLaw: FCRA, organisations supporting public causes (INSAF). https://www.livelaw.in/amp/top-stories/fcra-no-ban-on-organisations-supporting-public-cause-without-political-affiliations-foreign-contributions-153554 | 6 Mar 2020 | FCRA "organisation of a political nature" | Medium-high |
| 42 | Netlify Docs: Spam filters. https://docs.netlify.com/manage/forms/spam-filters/ | Current (Oct 2026) | Honeypot, reCAPTCHA, Akismet | High |
| 43 | Netlify Support Forums: Forms data centre location. https://answers.netlify.com/t/netlify-forms-data-center-location/24588 | 2020–2023 | US storage | Medium |
| 44 | Netlify DPA (PDF). https://www.netlify.com/pdf/netlify-dpa.pdf | Last Updated 9 Jun 2026 | DPF and UK Extension, SCCs, "Sensitive data: None" | High |
| 45 | Netlify Trust Center: Sub-processors. https://netlify.com/trust-center?itemUid=e3fae2ca-94a9-416b-b577-5c90e382df57 | Updated 23 Oct 2026 | Akismet, AWS, GCP, SendGrid (US) | High |
| 46 | Netlify Changelog: Pricing updates April 2026. https://www.netlify.com/changelog/2026-04-14-pricing-updates-april-2026/ | 14 Apr 2026 | Unlimited free form submissions | High |
| 47 | Netlify Docs: Site or web analytics, and How web analytics works. https://docs.netlify.com/monitor-sites/site-analytics/ ; https://docs.netlify.com/manage/monitoring/web-analytics/how-web-analytics-works/ | Current | Server-side, no cookies, unique IPs | High (pricing not verified) |
| 48 | Cloudflare Web Analytics. https://www.cloudflare.com/web-analytics/ | Current | Free, no cookies or localStorage, no fingerprinting | High |
| 49 | Plausible: Data policy. https://plausible.io/data-policy | Sept 2026 | No cookies, EU hosting | High |
| 50 | Google Privacy Policy. https://policies.google.com/privacy | Effective 16 Oct 2026 | Embedded services and abuse-protection data | High |
| 51 | NCSC: Guidance for high-risk individuals. https://www.ncsc.gov.uk/collection/defending-democracy/guidance-for-high-risk-individuals | 7 Dec 2023; reviewed 29 May 2024 | Account security for activists | High |
| 52 | ICANN: Registration Data Policy. https://www.icann.org/resources/pages/registration-data-policy-2024-02-21-en | Effective 21 Aug 2025 | WHOIS redaction | High |
| 53 | Report Harmful Content (SWGfL). https://reportharmfulcontent.com/ | Current | Harassment reporting route | High |
| 54 | CPS: Contempt of court, reporting restrictions. https://www.cps.gov.uk/legal-guidance/contempt-court-reporting-restrictions-and-restrictions-public-access-hearings | Revised 15 Oct 2024 | Strict-liability contempt; s.5 SO(A)A 1992 offences | High |
| 55 | GOV.UK: Online Safety Act explainer. https://www.gov.uk/government/publications/online-safety-act-explainer/online-safety-act-explainer | Updated 24 Apr 2025 | OSA scope and dates | High |
| 56 | NSPCC Learning: Writing safeguarding policies. https://learning.nspcc.org.uk/safeguarding-child-protection/writing-a-safeguarding-policy-statement | Updated 1 Sept 2026 | Safeguarding statement contents, NI notes | High |
| 57 | GOV.UK: Find out which DBS check is right. https://www.gov.uk/find-out-dbs-check | Undated | DBS for England and Wales; AccessNI for NI | High |
| 58 | W3C: WCAG 2.2. https://www.w3.org/TR/WCAG22/ | REC 12 Dec 2024 | Standard and new criteria | High |
| 59 | GOV.UK: Accessibility requirements for public sector websites. https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps | Updated 30 Sept 2024 | WCAG 2.2 AA; Equality Act and DDA 1995 (NI) duty | High |
| 60 | European Commission: European Accessibility Act. https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en | 2026 content | EAA covered services | High (date and exemptions not verified) |

*End of document. Research compiled 24 October 2026. Not legal advice.*
