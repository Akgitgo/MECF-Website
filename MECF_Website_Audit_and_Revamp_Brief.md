# MECF (mecfpune.com) — Website Audit & Revamp Brief
Prepared: August 2026

---

## ⚠️ 0. URGENT — Security Issue Found First

The **live homepage HTML is currently compromised** with a large-scale spam injection: hundreds of hidden/visible links to gambling and betting sites (1xBet, Mostbet, Pinco, Vavada, "casino non AAMS," etc.) in Russian, Italian, Polish, Azerbaijani, Danish, Swedish and other languages are embedded across the header, body, and footer of the homepage. This is a textbook symptom of a **hacked WordPress install** — usually via an outdated plugin/theme, a stolen admin login, or a malicious mu-plugin/htaccess redirect (this class of attack is often called a "Japanese SEO spam" or "pharma/casino spam" injection).

**Before any redesign work, this needs a security pass:**
1. Change all WordPress admin, hosting, and database passwords.
2. Update WordPress core, theme (Indofact — an industrial-services theme by ThemeChampion, still showing "Copyright 2019 Indofact" in the footer), and every plugin; remove unused plugins.
3. Scan for injected files/database entries (a malware scan via Wordfence/Sucuri or a hosting-provider scan) — the "sportwetten," "casino," "pinco," "1xbet" strings are keyword-searchable in the DB.
4. Submit the site for a Google Search Console security review once cleaned, and request re-indexing — spam injections like this get sites flagged/delisted from search.
5. Note: this injection appears to be on the **homepage only** — the subpages I fetched (About Us, Services, Contact, etc.) came back clean, so the payload is likely isolated to a homepage template file, a hijacked slider plugin, or a database option (widget/theme-mod) rather than every post.

This should be treated as a prerequisite, not a parallel task — a revamp built on a compromised install will just get reinfected.

---

## 1. Technical Snapshot

| Item | Detail |
|---|---|
| CMS | WordPress 7.0.3 |
| Theme | "Indofact" by ThemeChampion (industrial/oil & gas/manufacturing template — visibly mismatched to MECF's actual electronics-testing business) |
| Slider | Slider Revolution 6.6.20 |
| Builder | Elementor (seen in image asset paths on some pages) |
| Domain | mecfpune.com |
| Footer copyright | Inconsistently reads either "Copyright 2019 Indofact" (unedited theme default) or "Copyright © 2024 MCCIA Electronic Cluster Foundation" depending on page — another sign of incomplete theme setup |
| Social | LinkedIn only: linkedin.com/company/mecfpune |

---

## 2. Site Map / Information Architecture (as built)

```
Home (/)
├── Overview (dropdown, no landing page of its own)
│   ├── Our Commitment (/commitment/)
│   ├── Background (/background/)          [BROKEN — redirect loop]
│   ├── About our Target Audience (/about-our-target-audience/)
│   └── Statutory & Compliance (/statutory-compliance/)  [BROKEN — redirect loop]
├── About Us (/about-us/)
│   ├── #Executive Board (anchor)
│   ├── #Executive Committee (anchor)
│   └── #Our Team (anchor)
├── Operating Partners (dropdown, no landing page)
│   ├── About our Operating Partners (/about-our-operating-partners/)
│   └── Services by Operating Partners (/services-by-operating-partners/)  [not yet verified]
├── Membership (dropdown, no landing page)
│   ├── Membership (/membership/)           [BROKEN — redirect loop]
│   └── Testimonials (/testimonials/)       [not yet verified]
├── Services (/our-services/)
│   ├── #Safety, #Reliability, #EMI/EMC, #Test & Measurement (all in-page anchors)
├── Verticals (dropdown, no landing page)
│   ├── Test and Certification (/environmental-test-certification-lab-by-tuv/)
│   ├── Test and Measurement (/test-measurement-lab-by-cyronics-instruments-private-limited/)
│   ├── EMI / EMC (/emi-emc/)
│   └── Design and Simulation (/design-and-simulation/)
└── Contact Us (/contact-us/)

Orphaned/legacy content (not in nav but live):
├── /portfolio/petro-chemicals/, /gas-pipeline/, /oil-plant-project/, /factory-farm/,
│   /electronic-project/, /power-project/, /electric-project/, /oil-refinery/,
│   /energy-project/  — all leftover DEMO PORTFOLIO CONTENT from the "Indofact" theme
├── 3 blog posts, all Lorem-ipsum placeholder text, dated "11 Jun," author "mecfuser"
```

**Structural problems this reveals:**
- Four nav dropdowns ("Overview," "Operating Partners," "Membership," "Verticals") have **no clickable parent page** — they only work as hover menus, which is bad for mobile/touch users and bad for SEO (no URL to rank).
- **Two key pages return redirect-loop errors**: `/background/`, `/statutory-compliance/`, `/membership/` — likely permalink or caching misconfiguration, or collateral damage from the hack.
- The **entire "Our Projects" portfolio section and 3 blog posts on the homepage are unedited demo content** from an industrial oil/gas/manufacturing theme — "Oil Industry," "CNC Industry," "Chemical Industry," "Petro Chemicals," "Gas & Pipeline," "Oil Refinery" have nothing to do with an electronics testing lab.
- Stats counters ("No. of Unique Clients," "No. of Services Available," "No. of Contributing Members") all show **"0"** — the counter widget was never wired to real numbers.
- The Testimonials carousel uses **six stock names with Lorem-ipsum quotes** (Gordon Bond, Nathan Gibson, Edward Brown, Alex Groh, Brian Cooper, Alex Stuart) — not real client testimonials.
- "Our Clients" logo strip uses **generic placeholder logo files** (logo1.png–logo5.png).
- The Vision/Values/Mission block is entirely **Lorem ipsum**.

---

## 3. Header (global, all pages)

- Logo: "MCCIA Electronic Cluster Foundation" (image lockup, also a stylised "MECF" wordmark graphic)
- Utility bar: LinkedIn link · Call Us `+020 2997 0416` (tel: link) · Address snippet "MECF, J/P-8, MIDC Bhosari, Telco Rd, Pimpri-Chinchwad, Pune, Maharashtra"
- Primary nav: Home / Overview / About Us / Operating Partners / Membership / Services / Verticals / (Contact Us button, right-aligned)
- Secondary info panel (shown in mobile/off-canvas menu): logo, phone, address, hours ("Monday–Friday, 09am–05pm"), LinkedIn

## 4. Footer (global, all pages)

- Column 1 — Contact block: address, phone `020 2997 0416`, email `info@mecf.in`, "9 To 5 Working Hours"
- Column 2 — About Us blurb (same boilerplate as the About Us page intro) + "Read More" link
- Column 3 — "Our Solutions" quick links: Our Commitment / Services / Test and Certification / Test and Measurement / EMI-EMC
- Column 4 — "Quick Links": About Us / Background / Target Audience / Statutory Compliance / Membership / Testimonials / Contact Us
- Column 5 — Social Info: LinkedIn
- Bottom bar: Logo + "Copyright © 2024 MCCIA Electronic Cluster Foundation. All Rights Reserved." (inconsistently "Copyright 2019 Indofact" on other pages) + "Developed by: ThemeChampion" (dead link, `#`)

---

## 5. Page-by-Page Content Inventory

### 5.1 Home (`/`)
- Hero slider (Slider Revolution — content not retrievable via fetch, likely image/text slides)
- **"Welcome to MECF"** intro block: description of MECF as a MeitY-approved CFC, the 10m Semi Anechoic Chamber, testing up to IP68
- **USPs** (3 bullets): Cutting-Edge Testing / Timely & Cost-Effective / Market-Competent Rates
- **"MCCIA Electronic Cluster Foundation (MECF)"** mini-panel — restates the MeitY/EMC scheme origin story
- **"Highlights"** panel — partnerships, training, on-demand equipment, MCCIA-designed industry solutions
- **"Empowering Innovation"** panel — "Operational INR 71 Crore Electronics Facility" in MCCIA Bhosari, tax incentives for R&D *(note: this contradicts the ₹67 crore figure from your brief — needs fact-check/reconciliation)*
- 8 industry "service" tiles with **generic stock-industry icons/copy that don't match MECF's actual scope**: Associate with MECF, Contribute to MECF (tiered sponsorship: ₹10L=20% discount/10-day priority, ₹50L=25%/5-day, ₹1Cr=30%/2-day priority), "Pune – Default Destination for Electronics Design," plus leftover Oil Industry / Material Engineering / Manufacturing / Energy Engineering / CNC Industry / Chemical Industry tiles (theme demo content, off-brand)
- "Our Projects" portfolio filter (Agriculture/Chemical/Energy/Industry/Manufacturing categories) — 9 demo project cards, all irrelevant to MECF
- "Impact Delivered FY 25-26" stat counters (Unique Clients / Services Available / Contributing Members / Total Projects Running) — **all rendering "0"**, plus a "Take a Virtual Tour of our Facility" link (`/ipanorama/virtualtour/1`) and "Get a Quote" CTA
- Vision / Values / Mission accordion — **Lorem ipsum placeholder**
- Testimonials carousel — **6 fake/stock testimonials**
- Latest News — 3 **Lorem-ipsum blog posts**
- Our Clients — **placeholder logo strip**

### 5.2 About Us (`/about-us/`)
- Intro: MECF established 2017, MCCIA-led, "self-reliant India" positioning
- Description: CFC for electronics industry, funded by MeitY (EMC Policy) + MIDC (Electronics Policy 2016) + industry; services = Testing, Certification, Calibration for Automotive, Medical, Electronics, Startups, SMEs
- "Company History" timeline — **Lorem ipsum placeholders** ("Humble Beginnings," "New Headquarters," "Opening 5 new locations," "World Wide Coverage" — the last two are absurd for a single-site Pune CFC and clearly unedited theme content)
- **Executive Board table** (12 members):
  1. Shri D G Karandikar — President, MCCIA
  2. Shri Prashant Girbane — DG, MCCIA
  3. Shri Pradeep Bhargava — Director and Chairman
  4. Shri Anup Sable — KPIT Technologies Ltd.
  5. Shri Aditya Paranjpe — Kloudq
  6. Shri Narayan Bedarkar — SBEM Pvt. Ltd.
  7. Shri Girish Ranade — Futuras Apsol Pvt. Ltd.
  8. Shri Sunil Sapre — Persistent Systems
  9. Ms. Manasi Bidkar — Melux Control Gears Pvt. Ltd.
  10. Shri Ajay Bhagwat — Renu Electronics Pvt. Ltd.
  11. Shri S M Gadgil — Director
  12. Shri Sadashiv Survase — Joint Director, Industries DIC, Govt. of Maharashtra
- **Executive Committee table** (4 members): Mr. Prashant Girbane (Director), Mr. Sunil Sapre (Director), Mr. Anand Bedarkar (Director), Mr. S M Gadgil (CEO)
  - *(Note: your brief names the CEO as Shrikrishna Gadgil at ceo@mecf.in — site lists "S M Gadgil, CEO" — worth reconciling which is current/correct for the revamp.)*
- **Our Team table** (3 staff): Mr. Sachin Ghokse (Maintenance Incharge), Mr. Arvind Kadam (Accounts), Ms. Pooja Shinde (Reception and Administration) — with emails/mobiles

### 5.3 Our Commitment (`/commitment/`)
- Alignment with EMC policy, MeitY, MIDC
- NABL-accredited facility; NABL certificates globally acceptable for export
- Support for compliance/statutory matters and technical problem-solving
- Focus on full product development cycle: Design → Certification
- Commitment to adopt new standards over time

### 5.4 Background (`/background/`)
- **Currently broken (redirect loop)** — could not retrieve; likely holds the EMC scheme / Brownfield cluster history matching your provided brief. Needs fixing and content verification.

### 5.5 About our Target Audience (`/about-our-target-audience/`)
- Framed as a non-profit Electronic Cluster Foundation focused on testing/calibration
- **10 audience segments**, each with icon + description:
  1. Electronic Manufacturers
  2. Research and Development Teams
  3. Academic Institutions
  4. Investors and Philanthropists
  5. Automotive
  6. Household Appliances
  7. IT & Audio-Video
  8. Laboratory Test & Measurement
  9. Medical & Healthcare Equipment
  10. Military & Aerospace Product Testing
  (Laboratory Test & Measurement and Medical & Healthcare Equipment appear twice with duplicate icon sets — a template duplication bug)

### 5.6 Statutory & Compliance (`/statutory-compliance/`)
- **Currently broken (redirect loop)** — could not retrieve. Given the org is a Section 8 not-for-profit funded by MeitY/state government, this page likely should carry registration numbers, accreditation certificates (NABL), and compliance disclosures — high-value content to fix.

### 5.7 Operating Partners
- **About our Operating Partners** (`/about-our-operating-partners/`) — three partners profiled:
  1. **Cyronics Instruments Private Limited** — Pune-based electrical/electronic manufacturer
  2. **TUV Rheinland India Pvt Ltd** — global TIC (testing, inspection, certification) firm; provides EMI/EMC and test & certification services
  3. **3D Engineering Automation LLP** — design/simulation partner (CAD/CAM/CAE, PLM, MES, IoT); channel partner for Ansys, Siemens Digital Industries Software, Siemens Machinum, AVEVA, EOS GmbH, iQ3 VR
- **Services by Operating Partners** (`/services-by-operating-partners/`) — not yet verified in this pass, recommend fetching directly when live.

### 5.8 Membership
- **Membership** (`/membership/`) — **currently broken (redirect loop)**. This is a conversion-critical page (pricing/tiers) and needs priority fixing — the homepage teases tiered contribution discounts (₹10L/₹50L/₹1Cr → 20%/25%/30% + priority turnaround) which likely belongs here.
- **Testimonials** (`/testimonials/`) — not yet verified; homepage carousel version is placeholder content as noted above.

### 5.9 Services (`/our-services/`)
- Intro: MECF as one of the largest MeitY-approved CFCs; pay-for-use model
- "Benefits of MECF Services": Advanced Electronics Testing / Efficient & Economical Solutions / Competitive Pricing Across Industries
- **Test & Certification — Safety** table:
  | Standard | Product |
  |---|---|
  | IEC 60950-1 | Information Technology Equipment |
  | IEC 61010-1 | Lab |
  | IEC 62368-1 | ITAV |
  | IEC 60335-1 | Household Appliances |
- **Test & Certification — Reliability / Environmental Test** table (10 rows): Dry Heat, Cold, Humidity Steady-State/Cyclic, Temp Cyclic tests across two chamber sizes (2000×2000×2000mm and 1000×1000×1000mm), plus Altitude and Thermal Shock tests, with full temperature/humidity ranges
- **IP & Mechanical Test** table: IP testing to IP68 (IEC 60529); Vibration, Mechanical Shock, Bump tests (chamber 1200×1200mm, shaker capacity 3.5 Ton)
- **Environmental + Mechanical Combined Test** table: Combined Vibration+Environmental, Shock+Environmental, Bump+Environmental (1200×1200×1000mm chamber)
- **EMI/EMC — Anechoic Chamber**: 10-metre Semi Anechoic Chamber rated to 40GHz, with Control Room, Amplifier Room, one Shielded Room; accessories include ground reference planes, test tables/jigs, RF cables, software/firmware
- **Test & Measurement services** table: Equipment Rental / Precompliance Testing / Test & Measurement / Calibration

### 5.10 Verticals
- **Test and Certification** (`/environmental-test-certification-lab-by-tuv/`) — nav shows sub-sections for Safety, Ingress Protection, Mechanical, Environmental, Photometry (page content not yet fetched — recommend a follow-up pass; this is likely the most detailed technical page on the site)
- **Test and Measurement** (`/test-measurement-lab-by-cyronics-instruments-private-limited/`) — Cyronics-branded page (not yet fetched)
- **EMI/EMC** (`/emi-emc/`) — not yet fetched
- **Design and Simulation** (`/design-and-simulation/`) — likely 3D Engineering Automation branded page (not yet fetched)

### 5.11 Contact Us (`/contact-us/`)
- **Location**: MECF, J/P-8, MIDC Bhosari, Telco Road, Ganesh Nagar, Pune 411026, Maharashtra, India
- **Phone**: +(020) 2997-0416
- **Email**: ceo@mecf.in
- **Team contact table**: Mr. Sachin Ghokse (Maintenance Incharge, project@mecf.in, 9665476290), Mr. Arvind Kadam (Accounts, accounts@mecf.in, 7776095169) — *note: Contact page omits Ms. Pooja Shinde who appears on the About Us team table — inconsistent*
- Enquiry form: Service dropdown (Safety / Reliability / Test and Measurement / Equipment on Rental / EMI-EMC), Organization Type dropdown (Registered MSME / MNC / Startup / Incubator / General Industry / Academic Institute)
- Embedded Google Map (generic query-based embed, not a precise pinned location)

---

## 6. Brand & Visual Assets Currently in Use

- Primary logo: `MECF_Logo_HD_04.jpg` + a transparent PNG wordmark (`cropped-1-removebg-preview-1-1.png`)
- Icon set: flat, colourful "flaticon"-style stock icons (key, favorite/heart, sustainability, connection, problem-solving, online-shopping) — generic, not electronics/testing-specific
- Target-audience icons: better-matched line icons (engineering, development, university, battery, washing-machine, computer, test-tube, medical-report, aeroplane) — reuse-worthy
- Photography: none of the fetched pages show real facility/lab/equipment photography — all imagery is iconography or theme-stock industrial photos (oil rigs, factories) unrelated to MECF's actual anechoic chamber / SMT line / labs

---

## 7. Content Gaps vs. Your Provided Background Brief

Comparing the site against the MECF organisational背景 you supplied, these elements are **missing or unreconciled** on the live site://
- No mention on-site of "**Brownfield Cluster since December 2013**" status
- No mention of the **Section 8 Company / Registrar of Companies** registration detail
- No breakdown of the **₹67 crore project cost** (MCCIA land grant of 2,500 sq mt, ₹10.30 Cr industry contribution, ₹50 Cr MeitY grant, ₹6.7 Cr Maharashtra Government assistance) — homepage instead cites an unreconciled "₹71 Crore" figure
- No mention of the **Designing Centre & Prototype** or **SMT Line** facilities from your brief (site emphasises the Anechoic Chamber and environmental/mechanical labs, but SMT Line and Design/Prototype centre aren't visible in what I could fetch — may be buried in unfetched Verticals pages)
- CEO named as **"S M Gadgil"** on-site vs. **"Shrikrishna Gadgil"** in your brief — same person, inconsistent name format, worth standardising
- No completion-date/timeline milestone content (brief cites originally-targeted 30 March 2020 completion — site should state current, up-to-date operational status instead, since the homepage already says the facility is "Operational")

---

## 8. Priority Recommendations for the Revamp

**Fix first (technical/trust):**
1. Clean the spam/malware injection and harden WP security (see §0)
2. Fix the three redirect-loop pages (`/background/`, `/statutory-compliance/`, `/membership/`)
3. Replace the "Indofact" industrial theme entirely — it is visibly a generic oil/gas/manufacturing template; none of its portfolio, blog, or industry-tile content applies to an electronics testing lab
4. Reconcile the ₹67 Cr vs ₹71 Cr project-cost figures, and the two CEO name formats

**Content to build fresh (real, not placeholder):**
5. Replace all Lorem-ipsum blocks (Vision/Values/Mission, Company History timeline, blog posts, testimonials)
6. Wire the stat counters to real, current numbers instead of "0"
7. Replace stock/theme photography with real facility photography — the 10m Semi Anechoic Chamber, SMT Line, labs, and equipment are strong visual assets that aren't being used at all
8. Give the four dropdown-only nav sections (Overview, Operating Partners, Membership, Verticals) real landing pages with their own URLs — better for SEO and mobile usability
9. Consolidate the Membership/Contribution pricing tiers (₹10L/₹50L/₹1Cr discount bands) into one clear, findable Membership page rather than a homepage teaser only
10. Add the EMC scheme origin story (Brownfield cluster since 2013, Section 8 registration, MeitY approval Dec 2017, funding breakdown) as a proper "Background"/"About the EMC Scheme" page — this is genuinely compelling, credibility-building content that's currently missing or broken

**Nice-to-haves:**
11. Real client logos (with permission) to replace the placeholder strip
12. A proper facility virtual-tour or photo gallery (there's already an `/ipanorama/virtualtour/1` link — verify it still works and feature it more prominently)
13. Consistent footer/copyright branding across every page

---

## 9. Pages Not Yet Fetched (recommend as next step)
For a complete inventory before final IA sign-off, pull these directly (some may also be spam-affected or broken, given the pattern above):
- `/services-by-operating-partners/`
- `/testimonials/`
- `/environmental-test-certification-lab-by-tuv/`
- `/test-measurement-lab-by-cyronics-instruments-private-limited/`
- `/emi-emc/`
- `/design-and-simulation/`
- The 9 leftover `/portfolio/*` pages (to confirm they're safe to delete outright)
