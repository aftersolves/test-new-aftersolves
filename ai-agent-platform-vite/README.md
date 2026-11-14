# Tessel AI Agent Platform — React + Vite

Production-ready **project structure** for the original Tessel landing component, preserving its React/TypeScript source, GSAP/ScrollTrigger animations, canvas pixel mosaics, responsive interactions, and demo flows.

## Original source
- Component: `src/components/ui/tessel-agent-landing.tsx`
- Optional alternate theme example: `src/components/ui/demo-ember.tsx`
- Original author: Kedhareswer Naidu (https://kedhar.pages.dev), source identified as MIT licensed in the supplied archive.
- Original live example: https://kedhar-components.pages.dev/#tessel-agent-landing

## Deploy to Cloudflare Pages from GitHub (no local terminal required)
1. Create a new GitHub repository.
2. In GitHub, choose **Add file → Upload files** and upload the **contents of this ZIP** (not the ZIP itself), including `package.json`, `index.html`, `vite.config.ts`, `src/`, and `public/`. Commit the files.
3. In Cloudflare Dashboard, open **Workers & Pages → Create application → Pages → Connect to Git** (wording may vary).
4. Authorize GitHub and select the repository.
5. Configure: **Framework preset: Vite**, **Build command: `npm run build`**, **Build output directory: `dist`**, **Root directory: repository root**.
6. If the build environment requires it, set `NODE_VERSION=22` under build environment variables. `.node-version` also specifies 22.
7. Deploy. Future commits trigger automatic redeploys.
8. Optional: In Pages project → Custom domains, attach a domain already managed through Cloudflare.

## Local development (optional)
```bash
npm install
npm run dev
npm run build
```

## What works and what does not
- The landing page's visual interactions and built-in agent simulation work without a backend.
- The default `onRun` behavior is **demo simulation**, not a real AI model.
- The default email sign-up is **simulated**; connect `onSignUp` to your own backend before collecting real signups.
- Pricing, logos, testimonials and content are sample marketing data, not real service guarantees.
- `public/_redirects` provides a SPA fallback for future client-side routes.

## Customization
Edit `src/main.tsx` and pass component props to `<TesselAgentLanding />`. See `src/components/ui/COMPONENT-README.md` for the full prop reference.
