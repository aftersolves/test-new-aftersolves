# Aftersolves Website — Update Notes (new-aftersolves-v2.5)

**Date:** 7 November 2026
**Base:** `new-aftersolves-v2.4` (the previous build in this series)
**Scope:** Two changes requested in one update. (1) The six "Learn more"
links on the booking page pointed to `/contact`; each now goes to a real,
content-rich industry page. (2) The intro paragraph on the quote and
contact pages sat directly against the form below it — no gap — and the
same tight-spacing pattern affected thirteen other pages. Both are fixed.

Naming continues the series: `v2.5`; the next revision becomes `v2.6`.

---

## 1. Six new industry pages (the "Learn more" cards)

### The problem

`booking.html` has a "Who it is for" feature-grid of six industry cards —
Clinics & healthcare, Restaurants & cafés, Salons & barbershops, Car wash
businesses, Consultants & professionals, and Other appointment businesses.
Each card ended with a `Learn more →` link that pointed to `/contact`. The
link promised more detail and delivered the contact form.

### The fix

Six dedicated pages were created under `/industries/`, one per card, and
the six `Learn more` links on `booking.html` were repointed to them (the
repoint is matched by each card's `<h3>` title, so the order is unambiguous
and no other `/contact` link on the page was touched — the 4 remaining
`/contact` links are the legitimate nav/footer CTAs):

| Card | New page |
| --- | --- |
| Clinics & healthcare | `/industries/clinics-and-healthcare` |
| Restaurants & cafés | `/industries/restaurants-and-cafes` |
| Salons & barbershops | `/industries/salons-and-barbershops` |
| Car wash businesses | `/industries/car-wash` |
| Consultants & professionals | `/industries/consultants-and-professionals` |
| Other appointment businesses | `/industries/other-appointment-businesses` |

### Page structure (every page, ~2,800 words of tailored content)

Each industry page is generated from `booking.html`'s `<head>` (which
carries the inline `<style>` block defining `.feature-card`, `.step-list`,
`.faq-list`, `.lead`, etc.) plus its `<nav>` and `<footer>` template parts,
so the new pages share the exact chrome and styles of the rest of the site.
Only the `<title>`/`<meta>`/`<canonical>` and the `<main>` body change per
industry. Each page has seven sections:

1. **Page head** — a "← Back to Aftersolves Booking" link, an eyebrow
   (`Industries · Aftersolves Booking`), the industry `<h1>`, and a tailored
   intro paragraph.
2. **The day-to-day problem** — ~180 words on the scheduling pain specific
   to that industry (e.g. practitioner + room + recall constraints for
   clinics; table/seat/turn-time dependencies for restaurants).
3. **How Aftersolves Booking fits** — ~180 words on how the platform's
   resource/duration/schedule model maps onto that industry.
4. **What you get** — a feature-grid of 4–6 capability cards tailored to the
   industry (e.g. "Practitioner schedules", "Rooms & resources" for clinics;
   "Table & seat management", "Multiple services" for restaurants).
5. **How it works** — a 4-step process (Discuss → Configure → Launch →
   Support) with industry-specific descriptions.
6. **Questions** — 2–3 industry-specific FAQs (e.g. "Can patients book a
   specific practitioner?", "Can it handle different seating durations per
   service?").
7. **Next steps** — a CTA with `Explore Aftersolves Booking` and
   `Get a quote` buttons.
8. **Other industries** — a feature-grid linking to the other five industry
   pages, so a visitor on one page can jump to any other.

The content is tailored, not templated: the clinics page talks about
practitioners, rooms and recall cycles; the car-wash page talks about bays,
throughput and walk-in balance; the consultants page talks about paid
consultations and time zones. No two pages share body copy.

### A depth-2 asset-path bug, found and fixed

The industry pages live at `/industries/<slug>/` (depth 2), but the
template parts were copied from `booking.html` (depth 1), which references
`./style.css`, `./pages.css` and `./scripts.js`. At depth 2 those resolve to
`/industries/<slug>/style.css` — which does not exist — so on the first
build the stylesheets 404'd and the nav/footer logos rendered at their
1024px natural width, causing horizontal overflow on mobile. The generator
was fixed to rewrite the three asset refs to root-relative (`/style.css`,
`/pages.css`, `/scripts.js`) so they resolve correctly at any depth, both on
the deployed site and the local preview server. (The inline `<style>` block
uses only a `data:` URI for its one `url()`, so no other relative path
needed adjusting.)

The generator is `scripts/v25_generate_industry_pages.py` and the link
repointer is `scripts/v25_repoint_booking_links.py`; both are idempotent.

---

## 2. The intro-to-content gap fix

### The problem

On the quote and contact pages, the page-intro paragraph ("Share a few
details and we will come back with a recommendation…") sat directly against
the form below it — **zero pixels of gap**. The cause was a combination:

- `.page-head` had `padding-top: 80px` but `padding-bottom: 0`.
- The first `<section>` after it commonly carried an inline
  `style="padding-top:0"` (used to pull a section up tight under the hero on
  certain pages).

Together the two left no space between the intro and whatever followed. The
same pattern affected **fifteen pages** in total: `contact`, `get-a-quote`,
`booking`, `about`, `services`, `website-development`, the four legal pages
(`legal`, `privacy`, `terms`, `refund`, `payment`, `partnership-terms`),
`leaderships`, `project`, and the Mory Coffee case study.

### The fix

A single universal rule in `pages.css`:

```css
.page-head{padding-bottom:40px}
@media (max-width:809.98px){.page-head{padding-bottom:28px}}
```

This adds bottom padding to `.page-head` on every page, so the intro
paragraph always has a real gap below it regardless of the next section's
inline `padding-top`. No per-page markup change was needed, and pages that
already had generous spacing (e.g. `about.html`, whose first section has
its own top padding) are unaffected — the rule only guarantees a minimum
gap, it does not reduce existing space.

### Verified

| Page | Gap before | Gap after |
| --- | --- | --- |
| `get-a-quote.html` (intro → form) | 0px | 40px |
| `contact.html` (intro → form) | 0px | 40px |
| `booking.html` (intro → about-story) | 0px | 40px |
| `about.html` (intro → first section) | already 247px | 247px (unchanged) |
| `privacy.html` (intro → legal block) | 0px | 40px |

---

## 3. CSS additions (`pages.css`)

A new `v2.5 INDUSTRY PAGES + INTRO GAP` section appended to `pages.css`:

- `.page-head{padding-bottom:40px}` (+ 28px at `<=809.98px`) — the gap fix.
- `.back-link` — the mono-uppercase "← Back to Aftersolves Booking" link in
  each industry page head, with a hover underline.
- `.btn-row` — a flex row for the CTA buttons on the industry pages, full-
  width buttons on mobile.
- `.feature-card--link` — a link-styled variant of `.feature-card` for the
  "Other industries" grid at the foot of each industry page.

No existing rule was edited; the additions are purely additive.

---

## 4. Asset cache-bust bumped to `?v=20261112`

Because `pages.css` changed, the asset version was bumped `?v=20261111` →
`?v=20261112` across **51 files** (the 45 v2.4 pages plus the 6 new industry
pages). 0 files remain on the old version. The new industry pages reference
`/style.css`, `/pages.css` and `/scripts.js` as root-relative paths (see
§1) so they work at their depth-2 location.

---

## Files changed

| File / location | Change |
| --- | --- |
| `industries/clinics-and-healthcare/index.html` | NEW — industry page (~2,900 words) |
| `industries/restaurants-and-cafes/index.html` | NEW — industry page (~2,870 words) |
| `industries/salons-and-barbershops/index.html` | NEW — industry page (~2,880 words) |
| `industries/car-wash/index.html` | NEW — industry page (~2,870 words) |
| `industries/consultants-and-professionals/index.html` | NEW — industry page (~2,830 words) |
| `industries/other-appointment-businesses/index.html` | NEW — industry page (~2,860 words) |
| `booking.html` | 6 `Learn more` links repointed from `/contact` to `/industries/*`; asset cache-bust `?v=20261111` → `?v=20261112` |
| All other 44 existing HTML files | asset cache-bust `?v=20261111` → `?v=20261112` only |
| `pages.css` | NEW `v2.5 INDUSTRY PAGES + INTRO GAP` section (gap fix + industry-page utilities) |
| `scripts.js` | **Unchanged** |

No form fields, the v2.4 footer, the v2.3 success-page logic, the worker
integration, or the nav were touched. v2.5 is purely the six industry pages,
the link repoint, and the universal intro-gap fix.

---

## Verification (local, headless Chromium via agent-browser)

- **Gap fix:** 40px visible gap between intro text and form/content on
  `get-a-quote`, `contact`, `booking` (was 0px on all three); `about`
  unchanged at 247px; `privacy` now 40px. ✓
- **Industry pages — structure:** all 6 return HTTP 200; each has the
  correct `<h1>` and `<title>`, 7 `<section>`s, 11 feature-cards (6
  capabilities + 5 cross-industry links), 4 process steps, 3 FAQs, a back
  link to `/booking`, and 5 links to the other industry pages. ✓
- **Industry pages — layout:** desktop 1440px renders a 3-column
  feature-grid (`461px × 3` on clinics) with no horizontal overflow; mobile
  390px stacks to a single 350px column with no overflow on all 6 pages.
  Three stylesheets load on each page. ✓
- **Learn-more links:** `booking.html` has exactly 6 `.feature-card .card-link`
  elements, all pointing to `/industries/*` (first → `clinics-and-healthcare`,
  last → `other-appointment-businesses`); all 6 resolve to HTTP 200. ✓
- **Asset version:** 51/51 files on `?v=20261112`, 0 on `?v=20261111`. ✓
- **Regression:** v2.3 success pages (`/booking/starter/successfully/`,
  `/contact/successfully/`, `/get-a-quote/successfully/`) still return 200;
  v2.4 footer (`footer-top`, 4 social links) intact on the new industry
  pages. ✓

## Deployment

Unchanged from v2.4: drag the `new-aftersolves-v2.5/` directory into
Cloudflare Pages (pure static site, no build step). The six new
`/industries/*/index.html` pages are picked up automatically. The worker
stays at `apimail.aftersolves.com` with `RESEND_API_KEY` set.
