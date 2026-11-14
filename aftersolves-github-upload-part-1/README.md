# Aftersolves — Tessel design integration

This is a complete Vite/React/TypeScript source project based on the existing Tessel Agent Landing design, with content migrated from `new-aftersolves-v2.6-system-theme(2).zip`. Original GSAP and pixel-mosaic components are preserved.

## Migrated content
- Aftersolves brand, homepage headline and introduction
- Booking and website development offerings
- Booking Starter RM49/month and Growth RM129/month, plus Custom/Enterprise
- Industries, website development prices and enquiry links
- Existing static source pages and assets are preserved at `/original/...` (including legal pages, company, booking, contact, industry pages, projects and pricing). These secondary pages retain the original visual design; only the React homepage uses the Tessel layout.

## Limitations
- Hero workflow prompt is a **simulation**, not a live AI integration.
- Booking and contact functionality remains as provided in the original website, and may depend on its original backend/configuration.
- The original static secondary pages are linked under `/original/`, not yet converted to React/Tessel design.
- Original case studies/testimonials with unverified demo metrics have been disabled in the homepage.
- The React pricing component has its annual discount selector disabled, because these Aftersolves prices are monthly.

## Cloudflare Pages Git deployment (no local terminal)
Upload the contents of this folder to your GitHub repository. If the repository has this folder as a subdirectory, set **Root directory** to its name. Use **Build command** `npm run build` and **Build output directory** `dist`. Cloudflare builds automatically.

## Development
`npm install` then `npm run build` (Cloudflare runs these automatically).
