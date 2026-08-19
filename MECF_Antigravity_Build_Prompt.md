# MECF Website Rebuild — Master Build Prompt for Antigravity

> Paste this whole prompt into Antigravity as the project brief. Attach `MECF_Website_Audit_and_Revamp_Brief.md` alongside it as reference content — pull real copy, tables, names, and numbers from that file instead of inventing placeholder text.

---

## 1. Project Summary

Build a clean, modern, professional marketing + informational website for **MECF (MCCIA Electronic Cluster Foundation)** — a Section 8 not-for-profit Common Facility Centre in Pune, India, approved under the Ministry of Electronics & IT's (MeitY) Electronics Manufacturing Cluster (EMC) scheme. MECF provides electronics product testing, certification, and calibration services (EMI/EMC, environmental, mechanical, safety, IP-rating, test & measurement) to manufacturers, startups, automotive, medical, and aerospace industries.

**Design direction: "Apple-simple."** Minimal, generous white space, restrained color, large confident typography, one clear action per screen, subtle motion — not corporate-industrial, not cluttered. Think apple.com/business or a modern certification-lab site (TÜV, UL, Bureau Veritas rebuilt with Apple-level restraint), not a generic WordPress industrial theme.

---

## 2. Tech Stack

- **Framework:** Next.js 14+ (App Router), TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion — used sparingly (fade/slide-in on scroll, smooth hover states, nothing gimmicky)
- **Images:** `next/image` with lazy loading and blur placeholders
- **Deployment target:** static export / Vercel-compatible
- **Fonts:** `Inter` (via `next/font`) as the primary typeface, weights 400/500/600/700 — clean, neutral, close to Apple's SF Pro in a webfont

---

## 3. Color Palette (use exactly these tokens — no other colors except semantic states)

```
--color-bg:            #FAFAFA   /* page background, off-white */
--color-surface:       #FFFFFF   /* cards, panels */
--color-surface-alt:   #F5F5F7   /* secondary section background, Apple-gray */
--color-text-primary:  #1D1D1F   /* near-black, headings & body */
--color-text-secondary:#6E6E73   /* muted text, captions, meta */
--color-border:        #D2D2D7   /* hairline borders, table lines */
--color-primary:       #0A2540   /* deep navy — brand anchor, header/footer, dark sections */
--color-accent:        #0066FF   /* signal blue — CTAs, links, active states, icons */
--color-accent-hover:  #0052CC
--color-success:       #1DB874   /* accreditation/status badges only */
--color-warning:       #FF9500   /* sparing use — e.g. "priority" membership tiers */
```

Usage rules:
- Backgrounds alternate between `--color-bg` and `--color-surface-alt` to create rhythm between sections — no more than that, no gradients, no busy patterns.
- `--color-primary` (navy) is reserved for the header, footer, and one or two full-bleed "statement" sections (e.g. the EMC scheme origin story) — not overused.
- `--color-accent` (blue) is the only color used for buttons, links, and interactive highlights — one accent color, consistently applied.
- Never introduce warm oranges/reds except the single `--color-warning` token for membership-tier badges.

---

## 4. Typography Scale

- H1: 56–64px / 700 weight / -0.02em tracking / `--color-text-primary`
- H2: 36–40px / 600 weight
- H3: 24–28px / 600 weight
- Body: 17px / 400 weight / 1.6 line-height / `--color-text-primary`
- Small/meta: 14px / 500 weight / `--color-text-secondary`
- Generous line-height and letter-spacing throughout — no cramped text blocks. Max content width for body copy: 720px.

---

## 5. Assets Folder Structure

Create this exact folder structure and reference images from it by relative path — do not hotlink external images, do not use stock photography. Every image slot must be a clearly labeled placeholder that I can swap by dropping a same-named file into the folder.

```
/public
  /assets
    /images
      /hero
        hero-facility-01.jpg        <!-- PLACEHOLDER: wide shot of MECF facility/anechoic chamber -->
        hero-facility-02.jpg
      /facility
        anechoic-chamber.jpg
        smt-line.jpg
        design-prototype-center.jpg
        environmental-lab.jpg
        emi-emc-lab.jpg
      /team
        ceo-headshot.jpg
        team-placeholder.jpg        <!-- generic silhouette used until real headshots are added -->
      /partners
        cyronics-logo.png
        tuv-rheinland-logo.png
        3d-engineering-logo.png
      /clients
        client-logo-01.png … client-logo-06.png   <!-- placeholder gray logo boxes until real client logos are supplied -->
      /icons
        icon-safety.svg
        icon-reliability.svg
        icon-emi-emc.svg
        icon-test-measurement.svg
        icon-design-simulation.svg
    /docs
      nabl-certificate.pdf          <!-- placeholder slot for accreditation documents -->
```

**Placeholder behavior (important):**
- Every `<Image>` component must reference a path in this structure (e.g. `/assets/images/hero/hero-facility-01.jpg`) — never an external URL.
- If a real file isn't present at build time, render a soft gray placeholder box (`bg-[--color-surface-alt]` with a centered icon + the label "Add: hero-facility-01.jpg — recommended 1920×1080") — this makes it obvious to me which file to drop in and at what size, without breaking the build.
- Component name each image slot clearly in code comments (`{/* IMAGE SLOT: facility hero, 16:9, real photo of anechoic chamber */}`) so I know exactly what to shoot/source for each one.

---

## 6. Site Map (fixed — replaces the current broken dropdown-only nav)

Every nav item must be a real page with its own URL — no dead dropdown parents, no anchor-only sections that break on mobile.

```
/                          Home
/about                     About Us (mission, history, Executive Board, Executive Committee, team)
/background                The EMC Scheme & MECF's Origin (Brownfield cluster since Dec 2013, Section 8 registration, MeitY approval, funding breakdown)
/services                  Services overview (Safety / Reliability / EMI-EMC / Test & Measurement)
/services/test-certification    Test & Certification vertical (Safety, Ingress Protection, Mechanical, Environmental, Photometry)
/services/test-measurement      Test & Measurement vertical (Cyronics partnership)
/services/emi-emc               EMI/EMC vertical + 10m Semi Anechoic Chamber detail
/services/design-simulation     Design & Simulation vertical (3D Engineering Automation partnership)
/operating-partners        Operating Partners (Cyronics, TÜV Rheinland, 3D Engineering Automation)
/membership                Membership & Contribution tiers (₹10L/₹50L/₹1Cr discount bands), Testimonials
/statutory-compliance       Registration details, NABL accreditation, compliance disclosures
/contact                   Contact info, team directory, enquiry form, map
```

Global header nav: Home / About / Services / Verticals (with real dropdown linking to the 4 pages above, each a working link, not just a hover trigger) / Membership / Contact — with a persistent "Contact Us" / "Get a Quote" button on the right.

---

## 7. Page-by-Page Content Requirements

Use `MECF_Website_Audit_and_Revamp_Brief.md` as the source of truth for real content — do not generate Lorem ipsum, fake testimonials, fake client logos, or unrelated stock-industry content (no oil & gas, no chemical plants, no CNC/manufacturing tiles — this is an electronics testing lab, not an industrial conglomerate).

**Home**
- Hero: full-bleed facility image placeholder + one-line positioning statement + primary CTA ("Get a Quote") + secondary CTA ("Take the Virtual Tour")
- Short "What is MECF" block (MeitY-approved CFC, EMC scheme, pay-per-use model)
- 3 USP cards: Cutting-Edge Testing / Timely & Cost-Effective / Market-Competitive Rates
- 4 core service categories as clickable cards linking to the 4 verticals — icon + 1-line description each, sourced from real service list (Safety, Reliability, EMI/EMC, Test & Measurement)
- Stat strip with real, current numbers (Unique Clients, Services Available, Contributing Members, Total Projects) — never render "0" placeholders; if numbers aren't final, mark clearly as `[NUMBER TBD]` in a code comment
- "Associate with MECF" section — membership value props
- "Contribute to MECF" — the 3 sponsorship tiers with discount/priority-turnaround table
- Operating Partners logo strip (Cyronics, TÜV Rheinland, 3D Engineering Automation) — real logos only
- CTA banner → Contact

**About Us**
- Mission/history narrative (real, from audit doc — no placeholder "Humble Beginnings" timeline)
- Executive Board table (12 members, from audit doc)
- Executive Committee table (4 members)
- Our Team cards (3 staff, with role + contact)

**Background (EMC Scheme)**
- Full origin story: Brownfield cluster status since Dec 2013, MCCIA's SPV formation, Section 8 registration, MeitY approval Dec 2017, project cost breakdown (₹67 Cr total: ₹50 Cr MeitY grant, ₹6.7 Cr Maharashtra Govt, ₹10.3 Cr industry contribution, 2,500 sq mt MCCIA land grant) — reconcile against the homepage's "₹71 Cr operational" figure and present one consistent number with a note on what it includes

**Services (overview) + 4 Vertical pages**
- Render every spec table from the audit doc (Safety standards, Environmental test parameters, IP/Mechanical test specs, Combined Environmental+Mechanical specs, Anechoic Chamber specs, Test & Measurement service list) as clean, responsive tables — not cramped WordPress tables. Use collapsible/tabbed layout on mobile if tables are wide.

**Operating Partners**
- 3 partner profiles (Cyronics, TÜV Rheinland India, 3D Engineering Automation) with logo, description, and services provided — from audit doc

**Membership**
- Clear tiered contribution table (₹10L → 20% discount / 10-day priority; ₹50L → 25% / 5-day; ₹1Cr → 30% / 2-day priority)
- Membership benefits (pay-per-use pricing, priority access, streamlined certification)
- Testimonials section — leave as a clearly-labeled placeholder component ("Real client testimonials to be added") rather than fabricated quotes

**Statutory & Compliance**
- Registration/accreditation content placeholder section, structured to hold NABL certificate references, Section 8 registration number, and compliance documents (PDF download slots from `/assets/docs/`)

**Contact**
- Address, phone, email (from audit doc)
- Team directory table
- Enquiry form: Service dropdown (Safety / Reliability / Test and Measurement / Equipment on Rental / EMI-EMC), Organization Type dropdown (Registered MSME / MNC / Startup / Incubator / General Industry / Academic Institute), Name/Email/Phone/Message fields
- Embedded map, precisely pinned to: MECF, J/P-8, MIDC Bhosari, Telco Road, Ganesh Nagar, Pune 411026, Maharashtra

---

## 8. Components to Build

- Sticky header with real dropdown nav (keyboard/touch accessible, not hover-only)
- Footer (navy background, `--color-primary`) with sitemap columns, contact block, LinkedIn link, and a single consistent copyright line
- Reusable Card component (service card, partner card, team card)
- Reusable Spec Table component (responsive, sortable-ready, zebra striping using `--color-surface-alt`)
- Stat Counter component (animates count-up on scroll into view)
- CTA Banner component
- Image Placeholder component (per §5 behavior)
- Enquiry Form component with validation

---

## 9. Explicit "Do Not" List

- No Lorem ipsum anywhere, in any language
- No unrelated stock industry content (oil rigs, chemical plants, gas pipelines, CNC/manufacturing tiles)
- No fabricated testimonials or fake client logos
- No stat counters frozen at "0"
- No hover-only nav items without a real linked page
- No more than one accent color; no gradients; no drop-shadows heavier than a subtle 1–2px soft shadow
- No inconsistent footer copyright text across pages

---

## 10. Non-Functional Requirements

- Fully responsive, mobile-first (test at 375px, 768px, 1280px, 1920px)
- WCAG AA contrast compliance for all text/background combinations in the palette above
- Semantic HTML, proper heading hierarchy, alt text on every image (even placeholders)
- SEO: unique meta title/description per page, Open Graph tags, `sitemap.xml`, `robots.txt`
- Lighthouse targets: 90+ on Performance, Accessibility, Best Practices, SEO
- All forms functional with client-side validation (backend submission can be a stub/TODO if no endpoint is provided yet)
