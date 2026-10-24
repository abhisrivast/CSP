# India compliance: legal, privacy and safety requirements for the CSP website and movement

Research date: **2026-10-24**. Scope: Cultural Shock Party (CSP), culturalshockparty.com, a static Astro site on Netlify Free, founded by Rubby Singh and based in India (most likely New Delhi; see `founder.md`).

> **This is research, not legal advice.** It is a map of what the law says and where the risks are. Before launch, a Delhi-based lawyer (data protection, election and FCRA) and a chartered accountant (tax and entity choice) should review sections 3, 4 and 9. Statutory text is quoted only where the exact words matter.

**Method.** I read primary texts wherever I could get them: the DPDP Act 2023 and Rules 2025 (MeitY gazette PDFs), the consolidated IT Rules 2021 as amended on 10 Feb 2026, MeitY's 2026 IT Rules FAQ and its NCII SOP, the FCRA 2010 text, the ECI registration guidelines and press notes, the RPwD Act 2016, the POSH Act 2013, the SPDI Rules 2011 and the IT Act. Where a government site blocked automated access, I relied on law-firm or news sources and marked them so. **Confidence: H** = primary text or official source, **M** = reputable secondary source, or primary text that needs interpreting, **L** = single secondary source, or my own inference.

**Relationship to the earlier research.** `audience.md` §8 already covers under-18 safeguarding in general (UK, Ireland and Australia, plus a one-line note on India). This file goes deeper on India and does not repeat that material. `compliance.md` and `case-studies.md` do not exist yet. `seo-aeo-stack.md` picked GoatCounter for analytics and Buttondown or Substack for the newsletter, and this file assumes that stack.

---

## 0. TL;DR: the 12 things that matter most

1. **DPDP is law, but most of it starts on 13 May 2027.**
   - The Rules were gazetted on **13 Nov 2025** (G.S.R. 846(E); published 14 Nov).
   - Rules on the Board apply now. **Consent Manager registration starts 13 Nov 2026.**
   - **Notice, consent, children's data, security, breach reporting and data-principal rights start 13 May 2027.**
   - MeitY floated cutting this to 12 months, but as of 8 Oct 2026 no amendment had been gazetted.
   - Build to the 2027 standard now: it costs almost nothing on a static site, and the audience will judge CSP on privacy.
2. **The DPDP Act has no "sensitive data" tier, so political opinion gets no special legal category in India.** It does count indirectly: "risk to electoral democracy" is a factor for designating a *Significant* Data Fiduciary. The EU GDPR does treat political opinions as special-category data, which matters for EU-based supporters. Treat every supporter record as sensitive by design.
3. **Under 18 is a "child" under DPDP.** From May 2027 that means verifiable parental consent, and **no tracking, behavioural monitoring or targeted advertising directed at children**. There is a narrow exemption for accounts whose use is limited to email communication; it may cover a newsletter-only sign-up, but that needs a legal view. Gen Alpha and younger Gen Z should get a "learn, don't join" path.
4. **Calling yourself a "Party" is not, by itself, illegal.** I found no statute that bans it. Registration under s.29A RPA is optional and only needed for party privileges.
   - Registration needs 100 elector-members with affidavits, a ₹10,000 fee, and an application **within 30 days of the party's formation**.
   - Registered parties must contest within 5 years. The ECI delisted **808** registered unrecognised parties in Aug–Sep 2025.
   - CSP must never imply that it is registered, has a symbol, or fields candidates.
5. **Name-grab risk.** A Haryana lawyer applied in May 2026 to register the "Cockroach Janta Party" with the ECI in his own name, and others filed trademark applications for that name. Anyone could try the same with "Cultural Shock Party". **File a trademark early.** The ECI requires new party names to be "clearly different" from existing ones.
6. **Foreign money: assume none is allowed.**
   - FCRA s.3 bars political parties and "organisations of a political nature" from accepting any foreign contribution.
   - Even an ordinary social organisation needs FCRA registration (3+ years old) or prior permission.
   - Foreign citizens, including **OCI and PIO card holders**, are "foreign sources". Indian-passport NRIs giving from personal savings through banking channels are not.
   - **The Donate button must be India-only and Indian-citizens-only.**
7. **No tax-deductible receipts unless CSP builds a registered charitable entity.** Under the **Income-tax Act 2025, in force since 1 Apr 2026**, the old 80G deduction is now **section 133**, and the political-party deduction (old 80GGC) is **section 137** (concordance from a secondary source). Neither helps an unregistered movement.
8. **Do not host public user content at launch.**
   - Comments or open testimonies make CSP an "intermediary" under the IT Act. That brings IT Rules 2021 duties: a named Grievance Officer, 24-hour acknowledgement, 7-day resolution, **2-hour takedown on intimate-image and impersonation complaints**, 3-hour takedown on court or government orders, and user notices every 3 months.
   - Collect testimonies privately and publish them editorially instead.
9. **Accountability content carries defamation risk.** Criminal defamation still exists (BNS s.356: up to 2 years, a fine or community service). Survivors' identities are protected by law: BNS s.72, *Nipun Saxena* (SC 2018) and POCSO s.23 (children).
10. **Women activists' safety.** The 2026 IT Rules amendments give victims a 2-hour takedown route on platforms, and MeitY's NCII SOP sets out reporting channels.
    - Publish an India helpline block: 112, 181, NCW 14490, 1930 and cybercrime.gov.in, 1098, Tele-MANAS 14416.
    - Design the site so it never exposes volunteers' names, faces or locations by default.
    - Context: three women journalists alleged police sexual harassment at the Oct 2026 Jantar Mantar protests.
11. **POSH and POCSO.** Political parties have been held *not* to be POSH "workplaces" (Kerala HC 2022; the SC declined to interfere on 15 Sep 2025). But a society, trust or NGO is covered, and "employee" includes volunteers. Adopt a POSH-style Internal Committee anyway. POCSO s.19/21 make reporting of child sexual abuse mandatory for adults.
12. **Accessibility.**
    - The RPwD Act 2016 covers "private establishments", which includes associations, trusts and organisations.
    - Rule 15 (amended 2023) points websites to **IS 17802**. The SC (*Rajive Raturi*, 8 Nov 2024) ordered mandatory rules, and a **draft** RPwD Amendment Rules 2026 (S.O. 3962(E), 16 Jul 2026) would require published Accessibility Conformance Reports.
    - Build to WCAG 2.2 AA, which is a superset of IS 17802/WCAG 2.1 and of GIGW 3.0. Publish an accessibility statement.

---

## 1. Where things stand on 24 Oct 2026 (dated timeline)

| Date | Event | Source | Conf. |
|---|---|---|---|
| 11 Aug 2023 | DPDP Act enacted (assent; gazette dated 11 Aug 2023) | [DPDP Act PDF (MeitY)](https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf); [PIB backgrounder 17 Nov 2025](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf) | H |
| 1 Jul 2024 | Bharatiya Nyaya Sanhita (BNS) replaces the IPC | [PIB MHA Year-End Review, 30 Dec 2024](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2088945&reg=48&lang=2) | H |
| 8 Nov 2024 | SC in *Rajive Raturi v UoI* holds RPwD Rule 15 ultra vires and orders mandatory accessibility rules within 3 months | [LiveLaw, 9 Nov 2024](https://www.livelaw.in/amp/top-stories/supreme-court-directs-union-to-frame-mandatory-rules-under-rights-of-persons-with-disabilities-act-for-accessibility-of-public-spaces-274704) | H |
| 9 Aug and 18 Sep 2025 | ECI delists 334, then 474 registered unrecognised political parties (808 in total) for not contesting for 6 years | [ECI Press Note ECI/PN/307/2025, 19 Sep 2025](https://ceodelhi.gov.in/PDFFolders/delisting_in_respect_of_Registered_Unrecognized_Political_Parties22Sept2025.pdf) | H |
| 15 Sep 2025 | SC (CJI Gavai bench) refuses to interfere with the Kerala HC ruling that political parties are not POSH "workplaces" | [SCC Online, 17 Sep 2025](https://www.scconline.com/blog/post/2025/09/17/supreme-court-kerala-hc-political-parties-not-workplace-posh-act-2013/) | H |
| 22 Sep 2025 | Justice Sundresh (SC), orally: "time has come to decriminalise" defamation. Not a ruling | [The Leaflet, 23 Sep 2025](https://theleaflet.in/leaflet-reports/the-time-has-come-to-decriminalise-defamation-law-mulls-justice-sundresh-while-hearing-the-wires-plea) | H |
| 11 Nov 2025 | MeitY SOP on non-consensual intimate imagery (NCII) | [MeitY SOP PDF](https://www.meity.gov.in/static/uploads/2025/11/a2c9500ef5f8b62a43bfc68747de592d.pdf); [SCC Online, 12 Nov 2025](https://www.scconline.com/blog/post/2025/11/12/meity-non-consensual-intimate-imagery-sop-24-hour-takedown-policy-scctimes/) | H |
| 13 Nov 2025 | DPDP Rules 2025 notified (G.S.R. 846(E), dated 13 Nov, published 14 Nov). Rules 1, 2 and 17–21 in force | [Rules gazette PDF (MeitY)](https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf); [PIB, 14 Nov 2025](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014&reg=3&lang=2) | H |
| 22 Jan 2026 | MeitY proposes cutting the DPDP runway from 18 to 12 months. **Proposal only** | [ThePrivacyLabs, 8 Oct 2026](https://theprivacylabs.com/blogs/dpdp-13-november-2026-what-starts); [Mondaq](https://www.mondaq.com/india/data-protection/1773554/meity-plans-to-cut-short-dpdp-compliance-timeline-and-notify-cross-border-restrictions-for-sdfs) (search listing) | M |
| 10 Feb 2026 (in force 20 Feb) | IT (Intermediary Guidelines) Amendment Rules 2026 (G.S.R. 120(E)): synthetic-media labelling and much shorter takedown timelines | [MeitY FAQ, 10 Feb 2026](https://www.meity.gov.in/static/uploads/2025/10/065b6deb585441b5ccdf8be42502a49c.pdf); [Consolidated IT Rules (MeitY)](https://www.meity.gov.in/static/uploads/2026/02/550681ab908f8afb135b0ad42816a1c9.pdf) | H |
| 25 Mar 2026 | FCRA (Amendment) Bill 2026 introduced in the Lok Sabha (asset vesting, appeals, penalties). **Pending** | [PIB FCRA FAQ, 22 Jul 2026](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jul/doc2026722928801.pdf) | H |
| 30 Mar 2026 | MeitY publishes a *draft* IT Rules Second Amendment 2026. Status not verified | [MeitY draft](https://www.meity.gov.in/static/uploads/2026/03/30591fc6e322dcbcc9dae84a0f02e9e7.pdf) (search listing only) | L |
| 1 Apr 2026 | **Income-tax Act 2025 in force**, replacing the 1961 Act. Income-tax Rules 2026 notified 20 Mar 2026 | [TaxGuru (reproduces the CBDT press release of 1 Apr 2026), 4 Apr 2026](https://taxguru.in/income-tax/income-tax-act-2025-force-1st-april-2026.html) | H |
| 16 May 2026 | Cockroach Janta Party (CJP) launched online. **Not ECI-registered.** A third party applied to register it in his own name in May 2026 | [Wikipedia: CJP](https://en.wikipedia.org/wiki/Cockroach_Janta_Party); [The Week, 26 May 2026](https://www.theweek.in/news/india/2026/05/26/trouble-in-cockroach-paradise-cockroach-janta-party-heading-for-a-split-as-lawyer-moves-ec-to-register-cjp.html) | M |
| 22 Jun 2026 | FCRA Amendment Rules 2026 notified: purpose and State on the certificate, ₹10 lakh utilisation for renewal, ultimate-donor disclosure, and the organisation's website and social handles disclosed | [PIB FCRA FAQ, 22 Jul 2026](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jul/doc2026722928801.pdf) | H |
| 16 Jul 2026 (published 20 Jul) | **Draft** RPwD (Amendment) Rules 2026 (S.O. 3962(E)): IS 17802 compliance plus Accessibility Conformance Reports | [IndiaLaw, 29 Jul 2026](https://www.indialaw.in/blog/regulatory/rpwd-amendment-rules-2026/) | M |
| 2–5 Oct 2026 | Jantar Mantar protests against the CEC. More than 700 detained on 2 Oct. Three women journalists allege police harassment. Prohibitory orders under BNSS s.163 | [Brut India, 6 Oct 2026](https://www.brut.media/in/articles/india/politics/jantar-mantar-protest-why-are-people-demanding-gyanesh-kumar-s-resignation-who-was-detained-and-why-are-journalists-alleging-harassment) | H |
| 7 Oct 2026 | Government tells the Kerala HC that the Data Protection Board is constituted but "yet to be made functional". No Chairperson or Members appointed | [IndiaDataLaw tracker (verified Oct 2026)](https://indiadatalaw.org/is-the-board-operational/); [LiveLaw, 1 Aug 2026](https://www.livelaw.in/articles/india-data-protection-board-established-law-543751) | M |
| **13 Nov 2026** | **DPDP Rule 4 (Consent Manager registration) in force** | Rule 1(3), Rules gazette | H |
| Feb–Apr 2027 (expected) | Assembly elections in UP, Punjab, Uttarakhand, Goa and Manipur. MCD Delhi date TBD. No ECI schedule yet | [Wikipedia: 2027 elections in India](https://en.wikipedia.org/wiki/2027_elections_in_India); [UNI, 13 Oct 2026](https://www.uniindia.com/north-india/polls-up-assembly/212028) (search listing) | M |
| **13 May 2027** | **DPDP Rules 3, 5–16, 22, 23 and Act ss.3–17, 27–28, 33–34 in force** (core duties and penalties) | Rule 1(4); [ThePrivacyLabs, 8 Oct 2026](https://theprivacylabs.com/blogs/dpdp-13-november-2026-what-starts) | H |

---

## 2. Digital Personal Data Protection Act 2023 and DPDP Rules 2025

### 2.1 Does DPDP apply to CSP?
- **Yes.** A "Data Fiduciary" is any "person" who decides the purpose and means of processing. "Person" expressly includes "an association of persons or a body of individuals, **whether incorporated or not**" (Act s.2(i), 2(s)(v)). An unregistered movement is therefore covered. [Act PDF](https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf). **H**
- It applies to **digital** personal data collected in India, and to processing outside India connected with offering goods or services to people in India (s.3). Netlify, Buttondown and Substack servers abroad do not take CSP out of scope. **H**
- **Not covered:**
  - personal or domestic processing by individuals;
  - personal data **made public by the person themselves**, as in the Act's own example of a blogger posting about herself (s.3(c)(ii)).
  
  This matters for case studies that quote public posts by public figures. **H**
- **Research exemption:** the Act does not apply to processing "necessary for research, archiving or statistical purposes" if the data is not used to take a decision about an individual and the processing meets the Second Schedule standards (s.17(2)(b), Rule 16). This may help CSP's research arm. Surveys that collect identifiable data should still use consent. **H** for the text, **M** for how it applies.
- **No journalism exemption.** The Editors Guild of India said on 19 Nov 2025 that the Rules still have no explicit exemption. MeitY reportedly gave an informal assurance in July 2025, but nothing binding has followed. [MediaNama, 20 Nov 2025](https://www.medianama.com/2025/11/223-egi-journalists-indias-digital-data-protection-rules/). **M**. For CSP this means editorial content that names private individuals has no data-protection shield.

### 2.2 Notice: what every consent request must carry
Act s.5 and Rule 3 (from 13 May 2027). The notice must:
- be **standalone**, understandable "independently of any other information" (Rule 3(a));
- be in clear and plain language and give, at minimum, an **itemised description of the personal data** and the **specified purpose(s)**, with a description of the goods, services or uses enabled (Rule 3(b));
- give **the specific link** (website or app) and any other means through which the person can:
  - **withdraw consent**, "with the ease of doing so being comparable" to giving it;
  - **exercise their rights**;
  - **complain to the Data Protection Board** (Rule 3(c)).
- offer the notice and the consent request **in English or any Eighth Schedule language** (s.5(3), s.6(3)). For CSP, that means English plus Hindi at minimum.
- give the contact details of a DPO, where applicable, or of "any other person authorised" to respond on rights (s.6(3)). **H** (all from the gazette text)

### 2.3 Consent standard
- Consent must be "free, specific, informed, unconditional and unambiguous with a clear affirmative action", and limited to the data necessary for the purpose (s.6(1)). **No pre-ticked boxes and no bundled purposes.** The Act's own example strikes down consent to unnecessary contact-list access. **H**
- Consent can be withdrawn at any time, as easily as it was given (s.6(4)). Once it is withdrawn, CSP must stop processing and have its processors stop too (s.6(6)). **H**
- **CSP carries the burden of proof** that notice was given and consent obtained (s.6(10)). **Keep a consent log**: timestamp, notice version, checkboxes ticked, source page. **H**
- There is no "legitimate interests" basis. There is a narrow **"voluntarily provided" legitimate use** (s.7(a)): if someone gives data for a specified purpose and has not said they object, it can be used for that purpose. This fits a **contact form** ("reply to my message"), but not adding that person to a mailing list. [Hogan Lovells/HLC, 17 Nov 2025](https://www.hlc.com/en/publications/indias-digital-personal-data-protection-act-2023-brought-into-force-) also notes there is no contractual-necessity or legitimate-interests ground. **H**

### 2.4 Consent Managers
- A Consent Manager is a Board-registered entity that lets individuals give, manage, review and withdraw consent through an interoperable platform (s.2(g), s.6(7)–(9)).
- Registration opens **13 Nov 2026** (Rule 4). The applicant must be an **Indian company with net worth of at least ₹2 crore** (First Schedule, Part A).
- **CSP does not need to use or become one.** It only needs to honour consent given through one if a supporter uses a registered Consent Manager. **H**

### 2.5 Data-principal rights CSP must support
| Right | Source | What CSP must do |
|---|---|---|
| Access a summary of data and processing, plus the identities of other fiduciaries and processors it was shared with | s.11 | Answer via an email or form route |
| Correction, completion, updating, erasure | s.12 | Erase unless the law requires retention |
| Grievance redressal | s.13; Rule 14(3) | **Publish a response period of no more than 90 days.** The person must use this before going to the Board |
| Nominate someone to act on death or incapacity | s.14; Rule 14(4) | Accept a nomination |
| Publish how to exercise rights, and what identifier is needed (e.g. email) | Rule 14(1) | On the privacy page |
| Publish a contact person for data questions, and quote it in every rights response | s.8(9); Rule 9 | A named role and email |

All **H** from the Act and Rules text. PIB confirms the 90-day ceiling ([PIB, 14 Nov 2025](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014&reg=3&lang=2)).

Data principals have duties too (s.15), for example not to file false or frivolous complaints. The penalty for breaching those duties is up to ₹10,000. **H**

### 2.6 Children (under 18)
- A **"child" is anyone under 18** (s.2(f)).
- Before processing a child's data, CSP needs the **verifiable consent of a parent or lawful guardian** (s.9(1)).
- No processing likely to cause a **"detrimental effect on the well-being of a child"** (s.9(2)).
- **No "tracking or behavioural monitoring of children or targeted advertising directed at children"** (s.9(3)). **H**
- How "verifiable" works (Rule 10), as set out in the Rule's four illustrations: CSP must check that the person consenting is an identifiable **adult** by one of these routes:
  - reliable identity and age details CSP already holds;
  - details the parent volunteers;
  - a **virtual token from an authorised entity, e.g. DigiLocker**. **H**
- **Exemptions (Fourth Schedule, Part B)** from s.9(1) and 9(3) that matter to CSP:
  - **creating a user account "for communicating by email"**, restricted to what is needed for an account "the use of which is limited to communication by email";
  - processing to **confirm someone is not a child** (age-gating);
  - processing to keep detrimental content or ads away from children.
  
  **H** for the text.
- **My reading (L–M, get a legal view):** "user account" is defined to include an "email address" (Rule 2(1)(c)). An under-18's **newsletter-only** subscription *may* fall within the email exemption. Even so:
  - s.9(2) still applies;
  - email open and click tracking would be unwise, given the tracking ban;
  - anything beyond email (volunteering, WhatsApp groups, events, photos) needs parental consent.
- **Disability guardians:** if an adult with a disability cannot make legally binding decisions even with support, consent must come from a guardian appointed by a court or designated authority (s.9(1), Rule 11). **H**
- These obligations start **13 May 2027**. `audience.md` §8 already recommends an age-band question on every form.

### 2.7 Security, breach and retention
- **Security (Rule 6) minimums:**
  - encryption, obfuscation or masking;
  - access control;
  - access logs and monitoring;
  - backups;
  - **retaining logs and personal data for 1 year** for breach investigation;
  - security clauses in contracts with processors.
  
  **H**
- **Processors** (Netlify, the email tool, form tools) need "a valid contract" (s.8(2)). Use the vendors' standard data processing agreements (DPAs). **H**
- **Breach (Rule 7):**
  - Tell **each affected person** "without delay", covering: what happened, likely consequences, mitigation, safety steps they can take, and a contact.
  - Tell **the Board** "without delay", then send a **detailed report within 72 hours**: facts, causes, mitigation, findings on who caused it, remedial steps, and a report on the notices sent.
  
  **H**
- **Erasure:**
  - Erase on withdrawal of consent, or once the purpose is no longer served, whichever is earlier, and make processors erase too (s.8(7)).
  - The fixed 3-year inactivity erasure periods in the Third Schedule apply only to large e-commerce, gaming and social platforms, **not to CSP**.
  - Before erasing for inactivity, a fiduciary covered by Rule 8(1) must give 48 hours' notice. **H**
- **Minimum 1-year retention (Rule 8(3), Seventh Schedule).** *Every* fiduciary must keep personal data, traffic data and processing logs for **at least one year** for the State purposes listed in the Seventh Schedule: sovereignty and security, legal functions, and Significant Data Fiduciary assessment. Rule 23 lets the Government call for such information. **H**
  - **Implication for a political movement (my analysis, M):** whatever CSP collects can be requisitioned for at least a year. **Data minimisation is the main protection for supporters.** Do not collect caste, religion, exact address, phone number (unless needed), school or employer.
- **CERT-In Directions (28 Apr 2022)** require reporting listed cyber incidents **within 6 hours** and keeping ICT logs for 180 days in India. They apply to "service providers, intermediaries, data centres, body corporate and Government organisations". They would reach CSP if it becomes a company, or an intermediary hosting user content. [Mondaq summary](https://www.mondaq.com/india/it-and-internet/1202576/everything-you-need-to-know-about-indias-new-guidelines-related-to-cyber-incident-reporting-by-cert-in). **M**

### 2.8 Penalties (Act Schedule, enforced from 13 May 2027)
| Breach | Maximum penalty |
|---|---|
| Failing to take reasonable security safeguards | ₹250 crore |
| Failing to notify the Board or affected people of a breach | ₹200 crore |
| Breaching children's obligations (s.9) | ₹200 crore |
| Significant Data Fiduciary obligations | ₹150 crore |
| Any other breach of the Act or Rules | ₹50 crore |
| Data-principal duties (s.15) | ₹10,000 |

**H** ([Act Schedule](https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf); [PIB backgrounder](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf)).

These are maximums, and the Board is not yet functional. The real near-term risks are reputational, and weaponised complaints from opponents.

### 2.9 Do political opinions get special treatment in India?
- **DPDP: no special category.** The Act defines only "personal data" (s.2(t)) and has no sensitive-data tier. Law-firm analysis says the same: no heightened categories "such as health or political beliefs" ([HLC, 17 Nov 2025](https://www.hlc.com/en/publications/indias-digital-personal-data-protection-act-2023-brought-into-force-)). **H**
- **The indirect link:** the Government can designate a **Significant Data Fiduciary** based on factors that include "**risk to electoral democracy**", "volume and sensitivity" of data, and "public order" (s.10(1)). SDFs need an India-based DPO, an independent audit and annual DPIAs (s.10(2), Rule 13). A small movement is unlikely to be designated soon, but a large supporter database plus electoral activity is exactly what the factor describes. **H** for the text, **L** for the likelihood.
- **SPDI Rules 2011** (under IT Act s.43A; still in force until DPDP fully commences):
  - The "sensitive personal data" list covers passwords, financial data, health, **sexual orientation**, medical records and biometrics. **Political opinion is not on it.** [SPDI Rules (PRS)](https://prsindia.org/files/bills_acts/bills_parliament/2011/IT_Rules_2011.pdf). **H**
  - The rules bind a "**body corporate**", defined as a company, firm, sole proprietorship "or other association of individuals **engaged in commercial or professional activities**" (IT Act s.43A Explanation). [IT Act (India Code)](https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf). **H**
  - A non-commercial movement is probably outside them (**M**). A Section 8 company might not be.
- **EU/UK GDPR:** "political opinions" *are* special-category data (Art. 9(1)). There is an exception for not-for-profit bodies with a political aim processing **members'** data with safeguards and no outside disclosure (Art. 9(2)(d)). GDPR applies to non-EU organisations that offer services to, or monitor, people in the EU (Art. 3(2)). [Art. 9](https://gdpr-info.eu/art-9-gdpr/), [Art. 3](https://gdpr-info.eu/art-3-gdpr/). **H**
  - With a "global outlook" and an international supporter base, the Join form is very likely processing political-opinion data about EU residents. Use the stricter standard for everyone.
- **Practical conclusion:** in India the law does not single out political opinion, but the risks are real: surveillance, doxxing, and the Rule 8(3) retention requirement. Design every Join record as if it were sensitive.

### 2.10 What the Join, Newsletter and Contact forms must say and collect

| Form | Legal basis (DPDP) | Collect (minimum) | Do not collect | Must show |
|---|---|---|---|---|
| **Contact** | s.7(a) voluntary provision, for replying only | Name (or "what should we call you?"), email, message, optional topic | Phone, address, age (unless the topic needs it) | A one-line notice: "We use this only to reply. Deleted after [X] months." Link to the privacy notice and the contact person |
| **Newsletter** | Consent (s.6) | Email; optional first name; age band (to apply the child rules) | Anything else | Itemised notice; purpose; unsubscribe link in every email; link to rights and to the Board complaint route; Hindi option |
| **Join / Volunteer** | Consent per purpose (s.6), separate checkboxes | Name, email, age band, State/city (not full address), interests; phone **only if** the person opts into calls or WhatsApp | Caste, religion, Aadhaar, voter ID, exact address, employer or school, photos | Everything in Rule 3, plus a separate tick for each purpose, withdrawal link, retention period, processors list, Board complaint route, contact person |
| **Donate** (later) | Legitimate use for the receipt, plus legal retention for accounts | Name, email, amount, **citizenship declaration**, PAN only if a tax receipt is legally needed | Card or bank data (leave it with the payment gateway) | FCRA declaration (section 4), refund policy, who the money goes to |
| **Testimony / "Share your story"** | Explicit consent per use (publish or not, named or anonymous) | Story, chosen display name or "anonymous", age band, consent to edit | Real names of third parties (ask people not to name them), location details | Clear warning about not identifying survivors (BNS s.72); a "we will never publish your identity without written consent" promise; a withdrawal route |

---

## 3. Election Commission of India and the word "Party"

### 3.1 What registration under s.29A RPA 1951 involves
From the [ECI Guidelines and Application Format](https://aceproject.org/ero-en/regions/asia/IN/india-registration-for-political-parties-under) (official ECI document hosted by ACE; undated) and [ECI Press Note 56/Guideline/2024/PPS-IV, 20 Mar 2024](https://elections24.eci.gov.in/docs/tnBnRp3Pt7.pdf). **H**
- **Who applies:** any association or body of individual citizens of India "calling itself a political party" that wants the benefits of Part IV-A.
- **When:** **within 30 days of the party's formation.** Later applications are "time-barred under s.29A(2)(b)".
- **Fee:** ₹10,000 (non-refundable demand draft).
- **Constitution must include:**
  - the s.29A(5) oath of allegiance to the Constitution and to "socialism, secularism and democracy";
  - internal elections at least every 4–5 years;
  - no veto powers;
  - no more than one-third nominated members;
  - audited accounts filed with the ECI;
  - a non-violence clause;
  - **a commitment to contest an ECI election within 5 years** (delisting after 6 years of not contesting).
- **Membership proof:**
  - certified electoral-roll extracts or attested EPICs for **at least 100 members**;
  - a notarised affidavit from each member that they are an elector and belong to no other registered party;
  - office bearers' PAN, ITRs, assets, liabilities and criminal-antecedent affidavits;
  - NOCs for the party office.
- **Name:** "clearly different from the name of existing parties", with no religious, communal or caste connotation.
- **Public notice:** publish the proposed name in **two national and two local dailies**, with 30 days for objections. The 2024 cut to 7 days was a one-off tied to that year's elections.
- **Verification is real.** In Feb 2026 the Delhi HC upheld the ECI's verification of member affidavits after 10 of 20 sampled members denied membership ([Delhi HC, *Hari Rajmanikkam v ECI*, 2 Feb 2026](https://delhihighcourt.nic.in/app/showFileJudgment/ABL02022026CW13612026_172831.txt)). **H**
- **Benefits of registering:** privileges under **ss.29B/29C RPA**, the Income-tax Act and the Symbols Order, which delisted parties lose ([ECI/PN/307/2025](https://ceodelhi.gov.in/PDFFolders/delisting_in_respect_of_Registered_Unrecognized_Political_Parties22Sept2025.pdf)). **H**
- **Scale:** 808 registered unrecognised parties were delisted in 2025, and 359 more were under show-cause for missing accounts. **H**

### 3.2 What an unregistered movement called "Party" may and may not do

**What I found:**
- **No statute prohibits** an unregistered association from using "Party" in its name. Section 29A applies to associations "intending to avail" themselves of registration.
- **Precedent:** India's best-known 2026 youth movement, the **Cockroach Janta Party, is not ECI-registered** and has operated nationally since May 2026 ([Wikipedia, citing Reuters, May 2026](https://en.wikipedia.org/wiki/Cockroach_Janta_Party)). **M** (I found no statute either way; absence of evidence, so treat as M or L.)

| May | Must not (or high-risk) |
|---|---|
| Campaign on issues, publish a manifesto, research, run petitions, hold lawful protests (with police permission), recruit supporters | Say or imply it is **"registered"** or "recognised", or show an election symbol or the ECI logo |
| Encourage people to register and vote, and run non-partisan voter education | Ask people to "vote CSP", or put up candidates "on the CSP ticket". You cannot appear on the ballot as a party without registration. **Setting up candidates also makes CSP a "political party" under FCRA s.2(1)(n)(i)(B)** (section 4) |
| Endorse values; publish scorecards of parties' records (with care, see 3.4 and 6.2) | Spend money promoting a specific candidate without that candidate's written authority: **BNS s.176** (successor to IPC s.171H, "illegal payments in connection with an election") ([UP Police BNS–IPC comparative](https://uppolice.gov.in/site/writereaddata/siteContent/Three%20New%20Major%20Acts/202406281710564823BNS_IPC_Comparative.pdf)). **H** for the mapping |
| Take Indian-citizen donations (section 4) | Issue receipts implying tax deductibility (section 4.4) |

**Strategic points (my analysis):**
- **The 30-day time bar and the "formation" date (L):** if CSP might one day register, the date of formation of *the association that applies* starts the 30-day clock. Keep the movement and any future electoral vehicle legally distinct, and document the dates. Ask an election lawyer before announcing any "party formation".
- **Name-grab (M):** in the CJP case a Panipat lawyer filed a s.29A application in May 2026 to register CJP "in his own name", and at least three trademark applications for the name were filed ([The Week, 26 May 2026](https://www.theweek.in/news/india/2026/05/26/trouble-in-cockroach-paradise-cockroach-janta-party-heading-for-a-split-as-lawyer-moves-ec-to-register-cjp.html); [Wikipedia, citing HT, 21 May 2026](https://en.wikipedia.org/wiki/Cockroach_Janta_Party)). The ECI rejects names that are not "clearly different" from existing parties. Recommendations:
  - **file trademarks for "Cultural Shock Party", "CSP" plus the logo** (IP India, in the classes for education, publishing and social-advocacy services; the lawyer will choose the classes);
  - keep dated evidence of first use.
- **Independence:** `founder.md` records a hostile 2024 X thread labelling the founder ex-Congress, and the clash with the Congress Socialist Party acronym. An "independent, non-electoral movement" posture reduces both ECI-impersonation and FCRA "political nature" risk.

### 3.3 Political advertising and paid content
- **Pre-certification by the Media Certification and Monitoring Committee (MCMC).**
  - During elections, political advertisements on TV, cable, radio, cinema, **social media, websites, bulk SMS** and voice calls need MCMC pre-certification.
  - Registered parties and candidates apply **3 days** ahead. **"Any person or unregistered political parties"** must apply **7 days** ahead, with two copies of the ad and an attested transcript.
  - Editors and platforms are told to insist on the certificate for ads from "any party, candidate, person, group, association, organization, or trust".
  - Sources: [North Goa Collector advisory, 26 Mar 2024](https://dip.goa.gov.in/collector-north-issues-advisory-to-media/); [Thoothukudi advisory for the TN 2026 polls, 8 Apr 2026](https://english.punjabkesari.com/india/pre-certification-mandatory-for-political-ads-in-thoothukudi-ahead-of-tn-polls-collector-issues-guidelines/); the ECI order for the Bihar 2025 polls ([Storyboard18, 14 Oct 2025](https://www.storyboard18.com/how-it-works/eci-mandates-pre-certification-for-political-ads-candidates-to-declare-social-media-accounts-82518.htm)). **M** (district notices restating ECI instructions; I could not open the ECI master instruction).
- **Platforms:**
  - **Google** requires identity verification for all India election ads, plus an ECI pre-certificate unless the advertiser qualifies for its exemption letter (policy update 15 Feb 2024, effective Mar 2024) ([Google Ads policy](https://support.google.com/adspolicy/answer/14576989?hl=en)). **H**
  - **Meta** requires authorisation and a "Paid for by" disclaimer for ads about **social issues**, elections or politics in covered countries ([Meta Business Help](https://www.facebook.com/business/help/208949576550051)). **L**: I could not read the India-specific page, so verify in Ads Manager. Expect CSP's feminist issue ads to fall into the "social issues" category.
- **Silence period (RPA s.126):** for the **48 hours** before polls close, no "election matter" may be shown by TV or similar apparatus. ECI guidance treats social-media political ads as banned in that window, with penalties up to 2 years ([The Mooknayak, 18 Nov 2024](https://en.themooknayak.com/amp/story/governance/maharashtra-polls-eci-outlines-guidelines-for-silence-period)). **M**. **Recommendation:** pause all paid and boosted political content in any State in its silence period.
- **Printed material (RPA s.127A):** election pamphlets and posters must show the printer's and publisher's names and addresses. The ECI reads "pamphlet or poster" broadly and has enforced this on hoardings ([Nagaland IPR / ECI direction, Apr 2024](https://ipr.nagaland.gov.in/index.php/eci-directs-disclosure-publishers-and-printers-traceability-and-accountability), search listing). **M**. **Recommendation:** put "Published by Cultural Shock Party, [address]; printed by [printer]" on all printables and downloadable posters.
- **Synthetic media:** the 2026 IT Rules require platforms to label synthetically generated content ([MeitY FAQ](https://www.meity.gov.in/static/uploads/2025/10/065b6deb585441b5ccdf8be42502a49c.pdf)). **H**. **Recommendation:** CSP should label any AI-generated or altered imagery itself.

### 3.4 Model Code of Conduct (MCC) and a non-party
- The MCC is a non-statutory consensus code enforced by the ECI under Art. 324. It binds **political parties, candidates and governments** from the announcement of the schedule until results ([Drishti IAS, 20 Mar 2026](https://www.drishtiias.com/daily-updates/daily-news-analysis/model-code-of-conduct-6/print_manually)). **M**
- It does not bind CSP directly. But during MCC periods:
  - statutory rules (s.126, s.127A, MCMC pre-certification, BNS election offences) still apply to everyone;
  - the ECI and police scrutinise "proxy" pages and influencers;
  - platforms run an expedited takedown channel for ECI requests during the silence period (the 2019 voluntary code, per the same source). **M**
- **Practical points:**
  - Publish an **"Elections policy"** page: CSP does not endorse candidates, runs no paid political ads during MCC periods without MCMC certification, and observes silence periods.
  - Avoid appeals to caste or religion; the MCC norms and BNS make these risky for anyone.
  - Get police permission for events (Delhi used **BNSS s.163** prohibitory orders in Oct 2026).

---

## 4. Money: FCRA, domestic donations and legal structures

### 4.1 FCRA 2010: who may never take foreign contributions
From the FCRA text ([PRS copy of the 2010 Act](https://prsindia.org/files/bills_acts/acts_parliament/2010/the-foreign-contribution-(regulation)-act,-2010.pdf)). **H**
- **Section 3(1)** bars these from accepting *any* foreign contribution:
  - (a) election candidates;
  - (b) people linked to registered newspapers;
  - (c) judges and government servants (public servants were added in 2020);
  - (d) legislators;
  - **(e) a political party or its office-bearers**;
  - **(f) an "organisation of a political nature" specified under s.5**;
  - **(g) an association or company producing or broadcasting audio or audio-visual news or current-affairs programmes** by any electronic mode, and (h) its editors, columnists and owners.
- **"Political party" (s.2(1)(n))** means either a party *to be registered* under s.29A, **or one "which has set up candidates for election to any Legislature" without being registered**. "Legislature" includes Parliament, State assemblies, **municipalities and panchayats** (s.2(1)(k)).
- **Section 5** lets the Centre, by gazette order, declare an organisation "of a political nature" based on:
  - its activities, ideology or programme;
  - its association with any political party.
  
  The organisation gets written notice and 30 days to respond, and an order must follow within 120 days (+60).
- **FCRA Rules 2011, Rule 3 grounds** (as described by [SC Observer, 4 Jun 2020](https://www.scobserver.in/journal/revisiting-fcra-judgment/)), **M**:
  - (i) avowed political objectives in the memorandum or bylaws;
  - (v) student, youth and similar groups advancing political interests;
  - (vi) organisations that **habitually** use bandh, hartal, rasta roko, rail roko or jail bharo.
- **The INSAF ruling:** in *Indian Social Action Forum v UoI* (6 Mar 2020) the SC read down (v) and (vi). They reach only organisations connected with **"active politics or party politics"**. An organisation supporting citizens "agitating for their rights" through legitimate dissent is not "political" on that ground alone ([LiveLaw, 6 Mar 2020](https://www.livelaw.in/amp/top-stories/fcra-no-ban-on-organisations-supporting-public-causes-without-political-affiliations-foreign-contributions-153554)). **H**
- **Even non-political organisations** with a "definite cultural, economic, educational, religious or social programme" may accept foreign contributions only with **FCRA registration** (for organisations at least 3 years old) or **prior permission** (s.11; [PIB FCRA FAQ, 22 Jul 2026](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jul/doc2026722928801.pdf)). Funds must arrive in a single **SBI New Delhi Main Branch** FCRA account; there is a 20% admin cap, no sub-granting, and annual FC-4 returns. The 2026 Rules add ultimate-donor and website disclosure. **H**
- **Penalty:** accepting in breach is punishable with up to 5 years' imprisonment and/or a fine (s.35). The 2026 Bill would reduce this to 1 year, but it is pending. **H**

**Applying this to CSP (my analysis, M):**
- A body named "Party", with a manifesto, "collective political action" and protest activity, is at **high risk under Rule 3(i)** (avowed political objectives), even after *INSAF*.
- If it ever puts up candidates, including in municipal or panchayat polls, it becomes a **"political party"** under FCRA outright.
- A CSP podcast or YouTube current-affairs channel run as an organisation could also engage s.3(1)(g). **(L)**: ask the lawyer.
- In any case CSP is too new for FCRA registration (3 years).
- **Bottom line: CSP should accept no foreign contribution of any kind**, including in-kind (paid tools, travel or hospitality funded by foreign sources). The 2026 political context makes this reputational as well as legal: Union ministers alleged foreign backing of CJP, and CJP publicly denied it and agreed to refuse anonymous donations ([Wikipedia: CJP](https://en.wikipedia.org/wiki/Cockroach_Janta_Party)). **M**

### 4.2 Who counts as a "foreign source"
- **"Foreign source"** includes foreign governments, companies, trusts, foundations, foreign-registered societies, foreign trade unions, and **"a citizen of a foreign country"** (s.2(1)(j)). Indian companies more than 50% foreign-held are included. **H**
- **Indian citizens abroad (NRIs with Indian passports)** giving from **personal savings through normal banking channels** are not foreign contribution. The Delhi HC applied this in 2015 and advised collecting passport details to confirm Indian citizenship ([LiveLaw, 1 Dec 2015](https://www.livelaw.in/amp/delhi-hc-quashes-fcra-proceedings-against-former-punjab-mla-holds-contribution-made-by-nris-through-proper-banking-channels-not-foreign-contribution)). **H** for the case. The MHA FAQ line that **OCI/PIO holders are foreigners** comes from secondary reproductions only, so treat it as **M**.
- **Indians abroad may not collect foreign money for CSP.** s.3(2)(a) bars any "citizen of India resident outside India" from accepting foreign contribution **on behalf of** a political party or s.3(1) person. Diaspora "chapters" must not pass the hat among foreign friends. **H**

### 4.3 What this means for the Donate button and for international supporters
**Donate (design recommendations; M, from the law above):**
1. **Launch without Donate** until there is a legal entity with its own bank account and PAN. Never route donations to a personal UPI or account; this protects the founder and the audit trail.
2. When live:
   - Use a domestic payment gateway that takes **Indian payment methods only** (UPI, Indian cards, netbanking). **Disable international cards and PayPal.**
   - Make a **mandatory declaration** checkbox (see 9.3 wording) part of every transaction.
   - Record citizenship for donors above a threshold (the lawyer to set it), passport details for NRIs, and keep records. I could not verify Razorpay's or other gateways' rules on political organisations, so confirm onboarding with the provider. **L**
3. **Refuse anonymous donations.**
   - Publish donor categories and totals quarterly.
   - Publish names for large gifts with consent.
   - Publish a refund policy for any donation later found to be from a foreign source.
4. **Receipts** should say "This contribution is not eligible for any income-tax deduction" until a registered charity or party structure exists (4.4).

**International supporters may:**
- sign up for the newsletter (GDPR applies to EU residents: section 2.9);
- share content, translate, and attend online events;
- support **their own local feminist organisations**;
- buy the founder's book through normal retail.

**They may not:**
- donate money or anything in kind;
- pay for CSP ads, tools or travel.

Make this a short FAQ: **"I live outside India. Can I donate?"** Answer: "Thank you, but no. Indian law (FCRA) doesn't let us accept money from foreign citizens or organisations. Here's how you can help instead."

**Merchandise or paid events for foreigners:** these are a grey area that could be seen as disguised contributions. Ask the lawyer before selling to buyers outside India. **L**

### 4.4 Domestic donations, tax and receipts
- **Income-tax Act 2025** has been in force since **1 Apr 2026**, and the Income-tax Rules 2026 were notified 20 Mar 2026 ([TaxGuru reproducing the CBDT press release, 4 Apr 2026](https://taxguru.in/income-tax/income-tax-act-2025-force-1st-april-2026.html)). **H**
- **Section concordance** (per [TaxClue, 5 Sep 2026](https://www.taxclue.in/blog/section-80g-income-tax-act-2025-section-133/); secondary, **M**):

| Old (1961 Act) | New (2025 Act) | Subject |
|---|---|---|
| 80G | **s.133** | Donor deduction for gifts to approved institutions |
| 80GGB | s.136 | Company contributions to political parties |
| 80GGC | **s.137** | Any person's contributions to political parties |
| 12A/12AB and related charity provisions | Chapter XVII, ss.332–355 | Registration and conditions for non-profits |

- **In plain terms:**
  - Donors to an **unregistered movement** get no deduction.
  - Donors to a **registered charitable trust, society or Section 8 company** with approval get the s.133 deduction (old regime only, per secondary sources, **L**).
  - Donors to a **registered political party** get s.137 (old 80GGC).
- **Political-party funding background:** the SC struck down Electoral Bonds on 15 Feb 2024 (*ADR v UoI*, 2024 INSC 113), including the related amendments to Companies Act s.182 and to the RPA and Income Tax Act that had made donations anonymous ([Wikipedia summary](https://en.wikipedia.org/wiki/Association_for_Democratic_Reforms_v._Union_of_India); [The News Minute](https://www.thenewsminute.com/news/supreme-court-strikes-down-electoral-bond-scheme-calls-it-unconstitutional); both search listing only, not opened). **M**
- **Not verified, so ask a CA:**
  - the current cash-donation limits;
  - whether an unregistered association owes tax on voluntary contributions;
  - whether political advocacy would jeopardise a charity's registration.

### 4.5 Legal structures: what each allows politically
| Structure | How formed | Political activity | Money | Fit for CSP |
|---|---|---|---|---|
| **Unregistered association (today)** | Nothing to file | Unrestricted, subject to general law | Hard to bank; founders personally liable; no deductions; still a DPDP "person" | OK for a pre-launch movement. Founders carry personal risk |
| **Society** (Societies Registration Act 1860, which Delhi uses) | 7+ persons sign a memorandum and register | s.20 lists permissible purposes, **including "the diffusion of political education"** ([Act text, Tripura copy](https://cooperation.tripura.gov.in/sites/default/files/document%20%281%29%20%283%29.pdf)). **H** | Can seek charity registration (s.332) and s.133 approval; FCRA only after 3 years and not if "political nature" | **Good fit for a research and education arm** ("CSP Institute/Foundation"), kept separate from electoral work |
| **Public charitable trust** | Trust deed registered with the sub-registrar | Must pursue charitable objects. Advocacy limits are untested here, so **ask a CA (L)** | As for the society | Simpler governance (trustees), less democratic. Good for holding IP and content |
| **Section 8 company** (Companies Act 2013) | MCA licence | Objects such as education, research, social welfare and charity; **no dividends**; income applied to objects ([TaxGuru, 11 Apr 2020](https://taxguru.in/company-law/section-8-companies-complete-background.html)). **M** | Strongest credibility with funders; CERT-In and SPDI duties likely apply as a "body corporate" | Heavier compliance. Good later for research grants from Indian CSR or philanthropy |
| **Registered political party** (s.29A RPA) | Section 3.1 above | Full electoral rights: symbol, candidates | Indian donations only (**total FCRA bar**); s.137 deductions for donors; audited accounts to the ECI; must contest within 5 years | Only if CSP decides to fight elections. Would also stop the research arm from taking foreign grants if the two are linked |

**Recommended architecture (my analysis, M):**
1. **CSP the movement** stays an independent, non-electoral campaign, with no foreign money.
2. **A separately governed society or Section 8 company** handles research and public education under a firewall policy (section 9.4). Its objects should be education and research, not party politics, so it can keep the *option* of FCRA registration after 3 years.
3. **Decide explicitly, and publicly, whether CSP will ever contest elections.** If yes, plan a separate s.29A association with its own formation date.

---

## 5. Online speech: IT Act and IT Rules 2021 (as amended 2026)

### 5.1 When CSP becomes an "intermediary"
- An **"intermediary"** is anyone who "on behalf of another person receives, stores or transmits" an electronic record or provides a service for it (IT Act s.2(1)(w)). A website hosting **comments, forums, open testimonies or uploads** is an intermediary *for that third-party content*. [IT Act (India Code)](https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf). **H**
- **Safe harbour (s.79)** protects it only if it observes due diligence and **removes content expeditiously on actual knowledge or government notice**. **H**
- Content CSP writes and publishes itself, including edited testimonies, is CSP's own speech. Safe harbour does not cover it, so the defamation and identity rules (section 6) apply to CSP directly.

### 5.2 IT Rules 2021 due diligence (consolidated after G.S.R. 120(E), 10 Feb 2026, in force 20 Feb 2026)
Source: [consolidated IT Rules PDF (MeitY)](https://www.meity.gov.in/static/uploads/2026/02/550681ab908f8afb135b0ad42816a1c9.pdf); [MeitY FAQ](https://www.meity.gov.in/static/uploads/2025/10/065b6deb585441b5ccdf8be42502a49c.pdf). **H**

| Duty | Requirement |
|---|---|
| Publish rules and regulations, privacy policy and user agreement | Prominently, in English or an Eighth Schedule language (Rule 3(1)(a)) |
| Tell users what's prohibited | Defamatory, obscene, gender-harassing, privacy-invading, child-harmful, impersonating content, etc. (Rule 3(1)(b)) |
| Periodic user notice | **At least once every three months** (Rule 3(1)(c), tightened in 2026) |
| Takedown on court order or authorised government notice | **Within 3 hours** (Rule 3(1)(d), previously 36 hours). Police notices must come from DIG rank or above |
| Grievance Officer | **Name and contact details "prominently published"** on the home page or one click from it (Rule 3(2)(a)) |
| Acknowledge and resolve grievances | Acknowledge within **24 hours**. Resolve within **7 days** (previously 15). Certain Rule 3(1)(b) removal requests within **36 hours** (previously 72) |
| Intimate images, nudity, sexual acts, impersonation and morphed images (complaint by the person or someone on their behalf) | Remove or disable **within 2 hours** (Rule 3(2)(b), previously 24 hours) |
| Appeal | Users can go to the Grievance Appellate Committee (Rule 3A) |
| Synthetic content | Label it; never strip labels or metadata (Rule 3(3)); heavier duties for platforms that create synthetic content |

A further **draft Second Amendment (30 Mar 2026)** was published for comment. I could not confirm whether it has been notified. **L**

### 5.3 Recommendation for the Astro/Netlify build
- **Phase 1 (launch):**
  - **No public UGC.** No comments, open forums or public uploads.
  - Testimonies come in through a private Netlify Form and are reviewed, edited and published by CSP with written consent. This avoids intermediary duties.
- **Even so,** publish a **Grievance and Takedown contact** for anyone who says CSP content is about them or harms them. It is good practice, helps with defamation risk, and is needed later anyway.
- **If comments or community features come later,** budget for:
  - a named Grievance Officer;
  - a monitored inbox with a 24-hour SLA;
  - a 2-hour emergency NCII and impersonation procedure;
  - quarterly user notices;
  - a CERT-In 6-hour incident process.
  
  This is a lot for volunteers. **Prefer off-site community spaces** that carry the intermediary burden themselves (Discord, WhatsApp communities, with `audience.md` §8.2 age rules).
- **Blocking risk:** the Government can order content blocked under IT Act s.69A. **CJP's X account was "withheld" in May 2026** and reportedly restored after court orders in July 2026 ([Wikipedia: CJP](https://en.wikipedia.org/wiki/Cockroach_Janta_Party)). **M**. Keep the website as CSP's **owned channel**, with a mirror and backup plan (the `seo-aeo-stack.md` fallback host), and keep an email list rather than relying on social platforms.

---

## 6. Defamation, survivor identity and accountability content

### 6.1 Defamation
- **Criminal:** BNS **s.356** (replacing IPC ss.499–502) punishes defamation with simple imprisonment up to 2 years, a fine, **or community service** ([devgan.in BNS s.356](https://devgan.in/bns/section/356/)). **M**. The SC upheld criminal defamation in 2016, and an SC bench suggested decriminalisation in Sep 2025, but **it is still law** ([The Leaflet, 23 Sep 2025](https://theleaflet.in/leaflet-reports/the-time-has-come-to-decriminalise-defamation-law-mulls-justice-sundresh-while-hearing-the-wires-plea)). **H**
- **Exceptions that matter for CSP's research and case studies** (s.356 exceptions, per [devgan.in](https://devgan.in/bns/section/356/)), **M**:
  - **truth for the public good** (Exc. 1);
  - good-faith opinion on a **public servant's official conduct** (Exc. 2);
  - good-faith opinion on anyone's conduct touching a **public question** (Exc. 3);
  - accurate **court reporting** (Exc. 4);
  - good-faith accusations to a lawful authority (Exc. 8).
- **Civil defamation suits and injunctions (often SLAPP-style)** are the more common threat to small organisations. **M** (general knowledge, not separately sourced)
- **Editorial rules** (my recommendations):
  1. Focus case studies on **systems, institutions and public office-holders' public acts**, not private individuals.
  2. Every factual claim gets a source link, and an archive.org copy kept in the CMS.
  3. Clearly separate **fact / analysis / opinion**, and label opinion.
  4. Offer a **right of reply** to named institutions or officials before publishing, and record it.
  5. Run a pre-publication legal check for anything naming a person.
  6. Publish a corrections policy with a visible correction log.
  7. Never repost unverified allegations from social media.

### 6.2 Survivors' and children's identity: absolute rules
- **BNS s.72:** disclosing the identity of victims of certain sexual offences is an offence (successor to IPC s.228A) ([UP Police BNS–IPC comparative](https://uppolice.gov.in/site/writereaddata/siteContent/Three%20New%20Major%20Acts/202406281710564823BNS_IPC_Comparative.pdf)). **H** for the mapping.
- ***Nipun Saxena v UoI* (SC, 11 Dec 2018):** no one may print or publish the victim's name, or facts from which she could be identified "even in a remote manner". This holds even with next-of-kin consent if she is deceased or of unsound mind, unless the Sessions Judge authorises it. Rape and POCSO FIRs are not to be put in the public domain ([The Leaflet, 12 Dec 2018](https://theleaflet.in/supreme-court/firs-in-cases-of-rape-cannot-be-put-in-public-domain-to-avoid-disclosing-the-victims-identity-supreme-court-issues-fresh-guidelines)). **H**
- **POCSO s.23:** no media report may disclose a child victim's identity, including name, address, photograph, family details, school or neighbourhood, without Special Court permission. The penalty is 6 months to 1 year ([Vidhi Judicial, POCSO ss.19–23](https://vidhijudicial.com/sec-19-to-23-chapter-v-(procedure-for-reporting-of-cases)-the-protection-of-children-from-sexual-offences-act,-2012.html)). **M**
- **CSP rules:**
  - Anonymise all survivor stories by default.
  - Remove place, institution, dates and distinctive details.
  - Never use photos of survivors.
  - Strip EXIF metadata from every uploaded image at build time.
  - Treat a survivor's own request to be named with legal review, especially in active cases.

---

## 7. Protecting women activists from online harassment and doxxing

### 7.1 Laws that can be used (BNS in force since 1 Jul 2024)
BNS section numbers per the [UP Police BNS–IPC comparative](https://uppolice.gov.in/site/writereaddata/siteContent/Three%20New%20Major%20Acts/202406281710564823BNS_IPC_Comparative.pdf). **H** for the mapping.

| Harm | Provision |
|---|---|
| Sexual harassment, including sexually coloured remarks | BNS s.75 (old IPC 354A) |
| Voyeurism, including sharing private images | BNS s.77 (old 354C); IT Act s.66E (privacy violation), ss.67/67A (obscene or sexually explicit material) ([IT Act](https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf)) |
| **Stalking, including monitoring a woman's internet or electronic communications** | BNS s.78 (old 354D) ([Vidhi Judicial s.78 summary](https://www.vidhijudicial.com/section-78-of-the-bharatiya-nyaya-sanhita-(bns)-of-2023.html), search listing, **M**) |
| Words or gestures insulting a woman's modesty | BNS s.79 (old 509) |
| Threats, **including anonymous threats** | BNS s.351(1)–(4) (old 503/506/507) |
| Disclosure of a victim's identity | BNS s.72 |
| Defamation by trolls | BNS s.356 |

- **There is no dedicated "doxxing" offence.** Doxxing is usually prosecuted as stalking, intimidation or privacy violation. **M** (inference from the provisions above)
- **Platform takedowns:**
  - Victims or someone on their behalf can demand removal of intimate, sexual, nude, impersonating or morphed content within **2 hours** (IT Rules 3(2)(b), 2026).
  - Other unlawful content can be raised with the platform's Grievance Officer: 7 days, or 36 hours for certain removal requests. **H**
- **MeitY NCII SOP (Oct/Nov 2025)** sets out the reporting routes:
  - the nearest **One Stop Centre** (Mission Shakti portal), which helps with the complaint, counselling and legal aid;
  - the platform's Grievance Officer or report button;
  - the NCRP's integrated social-media abuse reporting;
  - **cybercrime.gov.in or 1930**;
  - local police.
  
  Big platforms must use hash-matching, and I4C keeps a hash bank ([MeitY SOP](https://www.meity.gov.in/static/uploads/2025/11/a2c9500ef5f8b62a43bfc68747de592d.pdf)). **H**
- **StopNCII.org** (launched in India Dec 2021 with Social Media Matters, Centre for Social Research and Red Dot Foundation) hashes images on the user's own device so participating platforms can block re-uploads ([Scroll, 3 Dec 2021](https://scroll.in/latest/1012020/meta-launches-platform-in-india-to-help-in-removal-of-non-consensual-intimate-photos)). **H**

### 7.2 Helpline block for the site (verify again before launch)
| Need | Number or link | Source | Conf. |
|---|---|---|---|
| Emergency (police, fire, ambulance) | **112** | [NCW Other Helplines (last updated 25 Nov 2025)](https://www.ncw.gov.in/other-useful-helplines/) | H |
| National Women Helpline | **181** | same | H |
| NCW 24×7 Women Helpline (for women and girls **over 18**) | **14490** | [NCW Women Helpline page](https://www.ncw.gov.in/ncw-cells/ncw-women-helpline/) | H |
| Cybercrime | **1930** and **cybercrime.gov.in** | NCW page; [MeitY NCII SOP](https://www.meity.gov.in/static/uploads/2025/11/a2c9500ef5f8b62a43bfc68747de592d.pdf) | H |
| Child Helpline | **1098** (integrated with ERSS-112) | NCW page; [PIB on 1098–112 integration](https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1933794) (search listing) | H/M |
| Mental health | **Tele-MANAS 14416** or 1800-891-4416 | [Tele-MANAS (MoHFW)](https://telemanas.mohfw.gov.in/home) and PIB factsheet (both search listing only) | M |
| One Stop Centre locator | Mission Shakti portal | [MeitY NCII SOP footnote](https://www.meity.gov.in/static/uploads/2025/11/a2c9500ef5f8b62a43bfc68747de592d.pdf) | H |

PIB has also cited an earlier NCW WhatsApp number (7827170170) from 2021. The NCW site now lists **14490**, so use 14490.

### 7.3 Practical site measures (recommendations)
1. **No personal data of team or volunteers by default.**
   - First names or chosen names only.
   - Photos only with written consent, and opt-in for faces.
   - No home cities for individuals.
   - Use a role email (e.g. `privacy@`, `grievance@`), never personal numbers.
2. **The founder's public bio** names only public professional facts she has approved (see `founder.md`).
3. **Strip EXIF and GPS** from all images in the Astro build (e.g. with `sharp`), and blur protest crowds unless everyone has consented.
4. **Event pages:**
   - Never publish exact meeting points for women's gatherings publicly. Send them only to registered, verified attendees close to the time.
   - Publish safety briefs, a buddy system and legal-aid numbers.
5. **Forms:** spam protection (Netlify honeypot), rate limiting, and **no auto-reply that confirms someone's membership** to whoever typed in the email.
6. **A "Digital safety for activists" resource page:** 2FA, Signal, privacy settings, how to report on each platform, StopNCII, the NCII SOP routes, and how to document abuse (screenshots with URL and time).
7. **An internal incident protocol:**
   - a named safety lead;
   - a log template;
   - escalation to platform Grievance Officers (2-hour NCII route), 1930 and police;
   - a pro bono lawyer list;
   - mental-health referral (14416).
8. **Moderation of CSP's own social accounts:** keyword filters, a no-DMs-with-minors rule, and documented blocking.
9. **Context to put in the risk register:**
   - Oct 2026: three women journalists alleged police harassment at Jantar Mantar ([Brut India, 6 Oct 2026](https://www.brut.media/in/articles/india/politics/jantar-mantar-protest-why-are-people-demanding-gyanesh-kumar-s-resignation-who-was-detained-and-why-are-journalists-alleging-harassment)).
   - CJP leaders were detained on 10 Oct 2026 and later held 7 days in judicial custody ([Wikipedia: CJP](https://en.wikipedia.org/wiki/Cockroach_Janta_Party), **M**).
   - Publish **"Know your rights at a protest (Delhi)"** with a legal-aid hotline.

---

## 8. POSH, POCSO and safeguarding minors

### 8.1 POSH Act 2013
Sources: POSH Act text (s.2(f), 2(o)(ii), s.6), [IIM Shillong-hosted copy](https://www.iimshillong.ac.in/wp-content/uploads/2024/06/3.-Sexual-Harassment-of-Women-at-Workplace-Act-2013.pdf), **H**; Kerala HC and SC history, [SCC Online, 17 Sep 2025](https://www.scconline.com/blog/post/2025/09/17/supreme-court-kerala-hc-political-parties-not-workplace-posh-act-2013/), **H**.
- **"Employee"** covers anyone working "whether for remuneration or not, or **working on a voluntary basis**", including trainees and interns (s.2(f)).
- **"Workplace"** includes any "society, trust, non-governmental organisation" carrying on educational, professional or other listed activities (s.2(o)(ii)).
- An **Internal Committee** is needed where there are **10 or more workers**. Below that, complaints go to the district **Local Committee** (s.6).
- **Political parties:** the Kerala HC held in 2022 that parties have no employer–employee relationship with members and are not "workplaces". The SC refused to interfere on **15 Sep 2025**. An earlier PIL was sent to the ECI in Dec 2024.
- **For CSP (M):**
  - As an unregistered "party" movement, CSP may fall outside POSH, like political parties.
  - As a **society, trust or Section 8 company with 10+ workers including volunteers**, it is very likely inside.
  - Either way, **adopt a POSH-standard policy and an Internal Committee voluntarily**, with an external member from an NGO, as the Act requires. It is a feminist movement's credibility test.
  - Publish the policy and a confidential reporting route. Point people to the **SHe-Box** portal for workplace complaints ([SCC Online, 20 Sep 2025](https://www.scconline.com/blog/post/2025/09/20/posh-act-complaints-guide-shebox-initiative-india-legal-update/), search listing; **M**).

### 8.2 POCSO and minors
- **s.19:** any person, including a child, with **knowledge or apprehension** of a sexual offence against a child must inform the Special Juvenile Police Unit or local police.
- **s.21:** failure to report is punishable by up to 6 months. A person in charge of an institution who fails to report a subordinate's offence faces up to 1 year.
- **s.23:** media must not identify child victims.
- Source: [Vidhi Judicial](https://vidhijudicial.com/sec-19-to-23-chapter-v-(procedure-for-reporting-of-cases)-the-protection-of-children-from-sexual-offences-act,-2012.html) (secondary text), **M**. Courts have held that internal inquiries cannot replace mandatory reporting ([SCC Online, 17 Jul 2026](https://www.scconline.com/blog/post/2026/07/17/suppression-of-child-sexual-abuse-attracts-section-21-pocso-act/), search listing), **M**.
- **CSP safeguarding policy (adds India specifics to `audience.md` §8.2):**
  1. A named **Designated Safeguarding Lead**, plus a written **POCSO reporting protocol**: report to the police or SJPU; never investigate internally first.
  2. **Under-18s:** no adult-to-minor one-to-one DMs; two adults at any activity; parental consent for events and photos (DPDP from May 2027; best practice now).
  3. **No collection of school names** (identity risk under s.23 and *Nipun Saxena*).
  4. Train volunteers in the duty to report.
  5. Publish **1098** and **112** on the safeguarding page.

---

## 9. Accessibility: RPwD Act 2016, Rule 15, IS 17802, GIGW 3.0

- **Scope:**
  - "Establishment" includes private establishments.
  - A **"private establishment"** is "a company, firm, cooperative or other society, **associations, trust, agency, institution, organisation, union**…" (s.2(v)).
  - **s.46:** service providers "whether Government or private" must provide services in line with the s.40 accessibility rules.
  - **s.42:** the Government must ensure that electronic media content is accessible (audio description, sign language, captions).
  - **s.89 penalties:** up to ₹10,000 for a first contravention; ₹50,000 to ₹5 lakh for later ones.
  - Source: [RPwD Act text (MP HC-hosted gazette copy)](https://mphc.gov.in/PDF/web_pdf/JJC/LAW%20&%20POLICY/ACT%20&%20RULES/Other%20Child%20related%20Legislations/The%20Rights%20of%20Persons%20with%20Disabilities%20Act,%202016.pdf). **H**
- **Rule 15 (as amended 11 May 2023)** requires websites, apps and ICT services to comply with **IS 17802 Part 1 (requirements) and Part 2 (conformance)** ([SCC Online, 12 May 2023](https://scconline.com/blog/?p=291941)). **M**
- ***Rajive Raturi* (SC, 8 Nov 2024)** found Rule 15's "guidelines" unenforceable, ordered mandatory rules, and stressed "accessible digital interfaces". **H**
- **Draft RPwD (Amendment) Rules 2026, S.O. 3962(E) (16 Jul 2026, still a draft)** would require:
  - IS 17802 conformance;
  - **free, published Accessibility Conformance Reports** (human- and machine-readable), re-tested after major changes and reviewed at least every 2 years;
  - compliance within 12–18 months, depending on turnover.
  
  Source: [IndiaLaw, 29 Jul 2026](https://www.indialaw.in/blog/regulatory/rpwd-amendment-rules-2026/). **M**
- **GIGW 3.0 (2023)**, the government-website standard, is built on **WCAG 2.1 AA** (88 checkpoints, over half of them on accessibility) ([Digit](https://www.digit.in/features/general/what-is-gigw-3-0-indian-govts-design-guidelines-for-official-websites-and-apps.html), search listing only). **M**. It is binding on government sites only; for CSP it is a useful benchmark.
- **Recommendation:**
  - Build to **WCAG 2.2 AA**, which covers WCAG 2.1 and therefore IS 17802's web clauses.
  - Publish an **Accessibility statement** shaped like a simple ACR: standard, known issues, contact, date tested.
  - Provide **Hindi** alongside English; DPDP and the IT Rules also expect language choice.
  - Caption every video and provide transcripts.
  - Use alt text and avoid text baked into images.
  - Test with NVDA and TalkBack, and **at 200% zoom on low-end Android**. This is the main device for much of the Indian Gen Z audience; `audience.md` has the data.

---

## 10. Concrete website checklist (Astro on Netlify)

**Launch blockers (P0):**
- [ ] **Privacy notice page** (`/privacy`, with a Hindi version `/hi/privacy`) built from 11.1. Each form links to it *and* shows a short notice next to the form (Rule 3 "standalone" notice).
- [ ] **Separate, unticked checkboxes for each purpose** on Join (newsletter / volunteer contact / WhatsApp or phone / local events). No bundled consent. A submit button that says what happens.
- [ ] **A consent log.** Store timestamp, notice version, ticked purposes and page URL with each submission. Netlify Forms keeps the submission; add hidden fields for `notice_version` and `consent_purposes`.
- [ ] **An age band question** (Under 13 / 13–17 / 18+). Under 18 goes to a "Learn with us" path: newsletter only, no volunteer data, no WhatsApp, no tracking.
- [ ] **Data minimisation:** no caste, religion, Aadhaar, voter ID, exact address, school or employer anywhere.
- [ ] **Withdrawal as easy as sign-up:** an unsubscribe link in every email, plus a `/privacy/withdraw` form or email that takes no more steps than joining did.
- [ ] **A data contact and grievance route** on the privacy page and footer. Use a role email (e.g. `privacy@culturalshockparty.com`), a named role ("Data & Grievance Lead"), and a promised response time of **30 days** (the law's ceiling is 90).
- [ ] **A Board complaint statement:** "If you're not satisfied with our response, you can complain to the Data Protection Board of India."
- [ ] **Analytics with no cookies and no personal data** (GoatCounter per `seo-aeo-stack.md`). No Meta Pixel, Google Ads tags, TikTok pixel or embedded social feeds. **Click-to-load YouTube** (privacy-enhanced mode) to avoid third-party tracking of minors.
- [ ] **A processors list** in the privacy notice (Netlify, newsletter tool, email provider, analytics) with countries, and a signed or accepted DPA for each.
- [ ] **Security:**
  - HTTPS and HSTS;
  - a strict Content-Security-Policy in `netlify.toml`;
  - 2FA on Netlify, GitHub, the domain registrar (Hostinger) and email;
  - least-privilege access to form submissions;
  - export to an encrypted store, and purge from Netlify on a schedule.
- [ ] **A breach plan (one page):** who decides, a template notice to affected people, Board notice within 72 hours (once the Board is functional), and a CERT-In 6-hour check if CSP is then a body corporate or intermediary.
- [ ] **A retention schedule:**
  - contact messages: 6 months;
  - newsletter: until unsubscribe;
  - volunteer records: 12 months after last activity, with a reminder email first;
  - logs: 1 year (Rule 6/8(3)).
- [ ] **Independence and funding page** (`/funding`) built from 11.4, plus an FAQ entry: "Is CSP linked to any political party? Is CSP registered with the Election Commission?"
- [ ] **Accurate party-status language everywhere:** "CSP is an independent movement. It is not a registered political party and does not contest elections." Wording is the founder's choice. Never use ECI symbols or logos.
- [ ] **No public comments or UGC.** Testimonies come in through a private form with consent options (11.3).
- [ ] **Safeguarding page:** policy, Designated Safeguarding Lead, POCSO reporting duty, helplines (7.2).
- [ ] **Accessibility:** WCAG 2.2 AA, an accessibility statement, Hindi toggle, captions.
- [ ] **EXIF stripping** in the image pipeline. No faces without consent.

**Before any money changes hands (P1):**
- [ ] A legal entity, a bank account and PAN, and a lawyer's sign-off on FCRA.
- [ ] An India-only payment gateway with international cards disabled, the mandatory FCRA declaration, no anonymous gifts, receipts that state tax status, and quarterly funding disclosures.
- [ ] Trademark applications filed for the name, "CSP" and the logo.

**Before paid ads or election-season content (P1):**
- [ ] Meta "social issues" authorisation and Google verification. A calendar of MCC and silence periods by State (UP, Punjab, Uttarakhand, Goa and Manipur expected Feb–Apr 2027).
- [ ] An MCMC pre-certification workflow (apply 7+ days ahead) for any paid political ad during elections.
- [ ] A s.127A imprint on all downloadable posters.
- [ ] Labels on AI-generated imagery.

**Before community features (P2):**
- [ ] IT Rules package: Grievance Officer, 24-hour acknowledgement, 7-day resolution, 2-hour NCII procedure, 3-hour order compliance, quarterly user notice, Grievance Appellate Committee information.

**Ongoing:**
- [ ] Re-check DPDP status on **13 Nov 2026** (Consent Managers) and before **13 May 2027**, and watch for a gazetted timeline cut.
- [ ] Re-check the IT Rules second amendment, the FCRA Amendment Bill 2026, and the final RPwD Amendment Rules 2026.
- [ ] Hold an annual privacy and accessibility review, and publish the date.

---

## 11. Drafts

### 11.1 Draft privacy-notice bullets (DPDP-aligned; plain language; have a lawyer review)
**Who we are**
- Cultural Shock Party ("CSP", "we") is an independent feminist movement based in [New Delhi], India. For data protection purposes, CSP is the "Data Fiduciary" for the information you give us. [Name the legal entity once one exists.]
- **Questions or complaints about your data:** [Data & Grievance Lead], privacy@culturalshockparty.com. We reply within **30 days** at the latest (the law allows up to 90).

**What we collect, form by form** (an itemised list, per Rule 3)
- *Newsletter:* your email address, your first name if you choose to give it, and your age band.
- *Join / volunteer:* your name, email, age band, State and city, the interests you tick, and your phone number only if you ask us to call or WhatsApp you.
- *Contact:* your name, email and message.
- *Share your story:* your story, the display name you choose (or "anonymous"), your age band, and your publishing choices.
- *Website visits:* we count visits with GoatCounter, which uses **no cookies** and does not store personal data. We don't use advertising trackers or pixels.

**What we never collect**
- Caste, religion, Aadhaar, voter ID, your home address, your school or employer, or card and bank details. Payment details, if any, are handled only by our payment provider.

**Why we use it** (each purpose separately, only if you tick it)
- To send you the newsletter.
- To contact you about volunteering.
- To add you to a local WhatsApp group.
- To invite you to events in your State.
- To reply to your message, which is the only use of contact-form data.

We never sell or rent your data. We never use it for political advertising targeting, and we never share it with any political party or candidate.

**Who processes it for us**
- [Netlify (website and forms, USA); newsletter provider (country); email provider (country); GoatCounter (analytics, country)]. Each is bound by a contract to protect your data and use it only on our instructions.

**How long we keep it**
- Contact messages: 6 months.
- Newsletter: until you unsubscribe.
- Volunteer records: 12 months after your last activity. We'll email you before deleting.
- Some technical logs are kept for 1 year, as Indian law requires.
- After that, we delete or anonymise.

**Your rights**
- You can ask for a summary of your data and who we've shared it with.
- You can ask us to correct, update or erase it.
- You can nominate someone to act for you if you die or can't act yourself.
- You can withdraw consent at any time, as easily as you gave it: the unsubscribe link, [withdraw form], or email us.
- To use these rights, email privacy@… from the address you signed up with.
- If you're unhappy with our answer, you can complain to the **Data Protection Board of India**. You need to try our grievance process first.

**Under-18s**
- If you're under 18, you can read everything and get our newsletter. Volunteering, events and WhatsApp groups need a parent or guardian's verified consent. We never track, profile or target ads at under-18s.

**Security and breaches**
- We protect your data with encryption, access controls, two-factor login and regular deletion.
- If a breach affects you, we'll tell you promptly what happened, what it means for you, what we're doing and what you can do. We'll also report it to the Data Protection Board as the law requires.

**Language and accessibility**
- This notice is available in English and हिन्दी [and other languages as added]. Contact us for an accessible format.

**Version:** v1.0, [date]. When we make meaningful changes, we'll ask for your consent again.

### 11.2 Draft consent wording for the Join form
> **Join Cultural Shock Party**
> We'll only use your details for the things you tick below. Untick or withdraw any time. [Read how we use your data →](/privacy) · [हिन्दी में पढ़ें](/hi/privacy)
>
> **How old are you?** ( ) Under 13 ( ) 13–17 ( ) 18 or over
> *(If you're under 18: you can get our newsletter. For volunteering, events and WhatsApp we'll need a parent or guardian's verified consent first.)*
>
> **What would you like?** *(tick any, none are pre-ticked)*
> [ ] **Send me the CSP newsletter** (about 2 emails a month). *We use: your email and first name.*
> [ ] **Contact me about volunteering.** *We use: your name, email, State/city and the interests you choose.* *(18+ only, or with verified parental consent)*
> [ ] **Add me to my local CSP WhatsApp group.** *We use: your phone number. Group members will see your number.* *(18+ only)*
> [ ] **Invite me to events in my State.** *We use: your email and State/city.*
>
> [ ] I've read the [privacy notice](/privacy). I understand CSP is an independent movement, not a registered political party, and that **CSP will never share my details with any political party, candidate or advertiser.**
>
> **Your control:** withdraw any time via the link in every email, at [culturalshockparty.com/privacy/withdraw](/privacy/withdraw), or by writing to privacy@culturalshockparty.com. Questions or complaints: [Data & Grievance Lead], privacy@… (reply within 30 days). You can also complain to the Data Protection Board of India.
>
> [ **Join with the choices I ticked** ]

Implementation notes:
- Show the WhatsApp warning *before* the box is ticked.
- Store `notice_version`, `ticked_purposes`, `age_band` and a timestamp with each submission.
- For under-18s, hide the volunteer and WhatsApp options until a parental-consent flow exists. From May 2027 that flow must use a Rule 10 route, e.g. a DigiLocker token.

**Contact form (one line):** *"We'll use your name, email and message only to reply to you, and delete them after 6 months. [Privacy notice](/privacy)."*

**Story form (extra consents):**
- [ ] Publish my story **anonymously**
- [ ] Publish under the display name I chose
- [ ] Don't publish; use only (anonymised) for CSP research
- [ ] I've removed names and identifying details of any other person, and I understand CSP will edit further to protect identities.

### 11.3 Testimony intake rule (for editors)
- Never publish any detail that could identify a survivor of sexual violence or a child (BNS s.72; *Nipun Saxena*; POCSO s.23).
- Get written consent for every publication choice. Withdrawal before publication is always honoured; after publication, take the story down within 48 hours on request.

### 11.4 "How we're funded / Independence" policy outline
1. **Our promise.** CSP is independent. No political party, candidate, government, corporation or foreign entity directs or funds us.
2. **Who we are and aren't.** CSP is a movement, not a registered political party. We do not contest elections, endorse candidates or share supporter data with any party. [If this changes, we'll say so publicly before it happens.] Past personal affiliations of any team member are disclosed on the About page. *(This is a founder decision; see `founder.md` §5.)*
3. **Who can give.**
   - Only Indian citizens, including NRIs holding Indian passports giving from their own savings through Indian banking channels.
   - We **do not accept any money or in-kind support from foreign citizens (including OCI/PIO card holders), foreign organisations or governments, or Indian companies that are majority foreign-owned**, consistent with FCRA 2010.
   - We **refuse anonymous donations** and cash.
4. **What we won't take.**
   - Money from political parties, candidates or their office-bearers.
   - Money from government bodies, unless a public grant is disclosed and has no strings attached.
   - Corporate money that comes with editorial conditions.
   - Money from donors whose interests conflict with our mission (a published exclusion list).
5. **Caps and conflicts.** No single donor provides more than [X]% of annual income. Any donor above ₹[Y] is named (with consent) and checked for conflicts. Donors get no say over research findings or campaigns.
6. **Tax status, honestly stated.** Donations to CSP are **not tax-deductible** [until the CSP research society or company gets s.332/s.133 approval under the Income-tax Act 2025].
7. **Where the money goes.** Quarterly breakdowns of income by category, top expenses, and volunteer hours, plus an annual report. Audited accounts once a legal entity exists.
8. **Firewall.** The [CSP Research & Education entity] and the CSP movement have separate accounts, separate decision-makers for spending, and a written cost-sharing agreement. The research entity's work is non-partisan.
9. **In-kind and tools.** Software donated or discounted (e.g. non-profit discounts) is listed. No foreign-funded travel or hospitality.
10. **Refunds and errors.** Any gift found to breach this policy is refunded within 30 days and the case logged.
11. **Contact and complaints.** funding@… Policy version and date.

---

## 12. What I could not verify (treat as gaps)
- **Any statute or ECI rule that expressly forbids or allows an unregistered body calling itself a "Party".** None found. The conclusion that it is not prohibited rests on s.29A's wording and the CJP precedent. **L–M**
- **The ECI master instruction text on MCMC pre-certification for "any person".** I relied on district-level restatements (2024 and 2026).
- **Meta's India-specific authorisation page** (blocked). **Razorpay's and other gateways' policies on political organisations.**
- **The FCRA Rules 2011 Rule 3 full text, as amended** (could not download), and the MHA FAQ on OCI and NRI donors (site unreachable). I used secondary reproductions and the 2015 Delhi HC ruling.
- **Income-tax Act 2025 section numbers** (the official site blocked automated access). The concordance comes from TaxClue (Sep 2026). Also unverified: whether charity registration tolerates political advocacy, cash limits, and how an association of persons (AOP) is taxed on voluntary contributions.
- **Whether the IT Rules Second Amendment (draft of 30 Mar 2026) has been notified.**
- **Whether the DPDP Board had appointed members after early Oct 2026.** Kerala HC was told on 7 Oct 2026 that it is "yet to be made functional".
- **Any notified list of countries restricted for transfers under DPDP s.16.** None found.
- **The exact Uttarakhand assembly term end date** (sources disagree) and the 2027 election schedule (not yet announced).

## 13. Open questions for the founder
1. **Electoral intent.** Will CSP ever contest elections, at any level including municipal or panchayat? This decides FCRA status, ECI registration timing and the structure.
2. **Legal vehicle.** Would you set up a society or Section 8 company for research and education now, with the movement separate? Who are the 7 founding members or directors?
3. **The word "Party".** Keep it as a cultural statement, with "an independent movement" in every tagline? Or change the descriptor before trademark filing?
4. **Prior affiliation.** How should the About and FAQ pages describe the founder's past freelance role (see `founder.md` §5)?
5. **Volunteers and money.** Expected number of volunteers and paid staff in year one (this triggers the POSH 10-worker threshold)? When do you want donations to start?
6. **Under-18s.** Should 13–17s get only the newsletter-only path at launch, with parental-consent flows built before May 2027?
7. **International reach.** Will there be diaspora chapters? They need written FCRA rules about not collecting money.
8. **Languages.** Hindi from day one? Which others (Punjabi, Bengali, Tamil…) and when?
9. **Counsel.** Is there a lawyer, or a pro bono network (e.g. through women lawyers' collectives), to review sections 3, 4, 6 and 11 before launch?

---

## 14. Source register (all opened 2026-10-23/24 unless marked "search listing")
**Primary and official**
- DPDP Act 2023 (gazette, 11 Aug 2023): https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf
- DPDP Rules 2025, G.S.R. 846(E), 13 Nov 2025: https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf
- PIB, "Government notifies DPDP Rules", 14 Nov 2025: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014&reg=3&lang=2
- PIB backgrounder "DPDP Rules, 2025 Notified", 17 Nov 2025: https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf
- PIB, simplified compliance for start-ups (Lok Sabha answer), 3 Dec 2025: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2198217&reg=48&lang=2
- IT Rules 2021, consolidated after the 2026 amendment: https://www.meity.gov.in/static/uploads/2026/02/550681ab908f8afb135b0ad42816a1c9.pdf
- MeitY FAQ on IT Amendment Rules 2026 (10 Feb 2026): https://www.meity.gov.in/static/uploads/2025/10/065b6deb585441b5ccdf8be42502a49c.pdf
- IT Rules 2021, consolidated as of 6 Apr 2023: https://www.meity.gov.in/static/uploads/2024/02/Information-Technology-Intermediary-Guidelines-and-Digital-Media-Ethics-Code-Rules-2021-updated-06.04.2023-.pdf
- MeitY SOP on NCII (Oct/Nov 2025): https://www.meity.gov.in/static/uploads/2025/11/a2c9500ef5f8b62a43bfc68747de592d.pdf
- IT Act 2000 (updated, India Code): https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf
- SPDI Rules 2011 (G.S.R. 313(E), 11 Apr 2011, PRS copy): https://prsindia.org/files/bills_acts/bills_parliament/2011/IT_Rules_2011.pdf
- FCRA 2010 (PRS copy of the original Act): https://prsindia.org/files/bills_acts/acts_parliament/2010/the-foreign-contribution-(regulation)-act,-2010.pdf
- PIB FCRA FAQs, 22 Jul 2026: https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jul/doc2026722928801.pdf
- ECI Guidelines and Application Format, s.29A (official ECI document, hosted by ACE): https://aceproject.org/ero-en/regions/asia/IN/india-registration-for-political-parties-under
- ECI Press Note on the public notice period, 20 Mar 2024: https://elections24.eci.gov.in/docs/tnBnRp3Pt7.pdf
- ECI Press Note ECI/PN/307/2025 (delisting), 19 Sep 2025: https://ceodelhi.gov.in/PDFFolders/delisting_in_respect_of_Registered_Unrecognized_Political_Parties22Sept2025.pdf
- Delhi HC, *Hari Rajmanikkam v ECI*, 2 Feb 2026: https://delhihighcourt.nic.in/app/showFileJudgment/ABL02022026CW13612026_172831.txt
- UP Police BNS–IPC comparative (2024): https://uppolice.gov.in/site/writereaddata/siteContent/Three%20New%20Major%20Acts/202406281710564823BNS_IPC_Comparative.pdf
- PIB MHA Year-End Review 2024 (BNS in force 1 Jul 2024), 30 Dec 2024: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2088945&reg=48&lang=2
- RPwD Act 2016 (gazette copy hosted by MP HC): https://mphc.gov.in/PDF/web_pdf/JJC/LAW%20&%20POLICY/ACT%20&%20RULES/Other%20Child%20related%20Legislations/The%20Rights%20of%20Persons%20with%20Disabilities%20Act,%202016.pdf
- POSH Act 2013 (gazette copy hosted by IIM Shillong): https://www.iimshillong.ac.in/wp-content/uploads/2024/06/3.-Sexual-Harassment-of-Women-at-Workplace-Act-2013.pdf
- Societies Registration Act 1860 (Tripura-amended copy): https://cooperation.tripura.gov.in/sites/default/files/document%20%281%29%20%283%29.pdf
- NCW Other Helplines: https://www.ncw.gov.in/other-useful-helplines/ ; NCW Women Helpline: https://www.ncw.gov.in/ncw-cells/ncw-women-helpline/
- Google Ads, India election ads policy update (15 Feb 2024): https://support.google.com/adspolicy/answer/14576989?hl=en
- GDPR Arts. 3 and 9: https://gdpr-info.eu/art-3-gdpr/ , https://gdpr-info.eu/art-9-gdpr/

**Secondary (law firms, legal media, news)**
- HLC (Hogan Lovells), 17 Nov 2025: https://www.hlc.com/en/publications/indias-digital-personal-data-protection-act-2023-brought-into-force-
- ThePrivacyLabs, "DPDP 13 November 2026: what starts", 8 Oct 2026: https://theprivacylabs.com/blogs/dpdp-13-november-2026-what-starts
- LiveLaw, "Data Protection Board: Established in law, absent in fact", 1 Aug 2026: https://www.livelaw.in/articles/india-data-protection-board-established-law-543751
- IndiaDataLaw Board tracker (Oct 2026): https://indiadatalaw.org/is-the-board-operational/
- MediaNama, EGI on DPDP Rules, 20 Nov 2025: https://www.medianama.com/2025/11/223-egi-journalists-indias-digital-data-protection-rules/
- Mondaq, CERT-In directions (2022): https://www.mondaq.com/india/it-and-internet/1202576/everything-you-need-to-know-about-indias-new-guidelines-related-to-cyber-incident-reporting-by-cert-in
- LiveLaw, *INSAF* FCRA ruling, 6 Mar 2020: https://www.livelaw.in/amp/top-stories/fcra-no-ban-on-organisations-supporting-public-causes-without-political-affiliations-foreign-contributions-153554
- SC Observer, "Revisiting FCRA judgment", 4 Jun 2020: https://www.scobserver.in/journal/revisiting-fcra-judgment/
- LiveLaw, Delhi HC on NRI contributions, 1 Dec 2015: https://www.livelaw.in/amp/delhi-hc-quashes-fcra-proceedings-against-former-punjab-mla-holds-contribution-made-by-nris-through-proper-banking-channels-not-foreign-contribution
- TaxGuru, Income-tax Act 2025 in force, 4 Apr 2026: https://taxguru.in/income-tax/income-tax-act-2025-force-1st-april-2026.html
- TaxClue, s.133 and concordance, 5 Sep 2026: https://www.taxclue.in/blog/section-80g-income-tax-act-2025-section-133/
- TaxGuru, Section 8 companies, 11 Apr 2020: https://taxguru.in/company-law/section-8-companies-complete-background.html
- The Week, CJP registration bid, 26 May 2026: https://www.theweek.in/news/india/2026/05/26/trouble-in-cockroach-paradise-cockroach-janta-party-heading-for-a-split-as-lawyer-moves-ec-to-register-cjp.html
- Wikipedia, Cockroach Janta Party (accessed 2026-10-24): https://en.wikipedia.org/wiki/Cockroach_Janta_Party
- Wikipedia, 2027 elections in India (accessed 2026-10-24): https://en.wikipedia.org/wiki/2027_elections_in_India
- Drishti IAS, Model Code of Conduct, 20 Mar 2026: https://www.drishtiias.com/daily-updates/daily-news-analysis/model-code-of-conduct-6/print_manually
- Storyboard18, ECI pre-certification order (Bihar), 14 Oct 2025: https://www.storyboard18.com/how-it-works/eci-mandates-pre-certification-for-political-ads-candidates-to-declare-social-media-accounts-82518.htm
- Goa DIP, North Goa MCMC advisory, 26 Mar 2024: https://dip.goa.gov.in/collector-north-issues-advisory-to-media/
- Punjab Kesari, Thoothukudi MCMC advisory, 8 Apr 2026: https://english.punjabkesari.com/india/pre-certification-mandatory-for-political-ads-in-thoothukudi-ahead-of-tn-polls-collector-issues-guidelines/
- The Mooknayak, ECI silence-period guidance, 18 Nov 2024: https://en.themooknayak.com/amp/story/governance/maharashtra-polls-eci-outlines-guidelines-for-silence-period
- devgan.in, BNS s.356: https://devgan.in/bns/section/356/
- The Leaflet, SC remark on decriminalising defamation, 23 Sep 2025: https://theleaflet.in/leaflet-reports/the-time-has-come-to-decriminalise-defamation-law-mulls-justice-sundresh-while-hearing-the-wires-plea
- The Leaflet, *Nipun Saxena* directions, 12 Dec 2018: https://theleaflet.in/supreme-court/firs-in-cases-of-rape-cannot-be-put-in-public-domain-to-avoid-disclosing-the-victims-identity-supreme-court-issues-fresh-guidelines
- Vidhi Judicial, POCSO ss.19–23: https://vidhijudicial.com/sec-19-to-23-chapter-v-(procedure-for-reporting-of-cases)-the-protection-of-children-from-sexual-offences-act,-2012.html
- SCC Online, *Yogamaya* (POSH and political parties), 17 Sep 2025: https://www.scconline.com/blog/post/2025/09/17/supreme-court-kerala-hc-political-parties-not-workplace-posh-act-2013/
- SCC Online, NCII SOP, 12 Nov 2025: https://www.scconline.com/blog/post/2025/11/12/meity-non-consensual-intimate-imagery-sop-24-hour-takedown-policy-scctimes/
- Scroll, StopNCII India launch, 3 Dec 2021: https://scroll.in/latest/1012020/meta-launches-platform-in-india-to-help-in-removal-of-non-consensual-intimate-photos
- Brut India, Jantar Mantar protests, 6 Oct 2026: https://www.brut.media/in/articles/india/politics/jantar-mantar-protest-why-are-people-demanding-gyanesh-kumar-s-resignation-who-was-detained-and-why-are-journalists-alleging-harassment
- LiveLaw, *Rajive Raturi*, 9 Nov 2024: https://www.livelaw.in/amp/top-stories/supreme-court-directs-union-to-frame-mandatory-rules-under-rights-of-persons-with-disabilities-act-for-accessibility-of-public-spaces-274704
- SCC Online, RPwD Amendment Rules 2023, 12 May 2023: https://scconline.com/blog/?p=291941
- IndiaLaw, Draft RPwD Amendment Rules 2026, 29 Jul 2026: https://www.indialaw.in/blog/regulatory/rpwd-amendment-rules-2026/
- Digit, GIGW 3.0 (search listing only): https://www.digit.in/features/general/what-is-gigw-3-0-indian-govts-design-guidelines-for-official-websites-and-apps.html
- Search listing only, not opened: Mondaq on the DPDP timeline cut; Wikipedia and The News Minute on *ADR v UoI*; Vidhi Judicial on BNS s.78; Tele-MANAS and the PIB factsheet; PIB on 1098–112; UNI 13 Oct 2026; Nagaland IPR (s.127A); SCC Online on SHe-Box and on POCSO s.21; the MeitY draft second amendment.
