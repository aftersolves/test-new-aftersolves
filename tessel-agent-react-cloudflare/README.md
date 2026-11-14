# Tessel Agent Landing — Cloudflare Pages

Original landing page by Kedhareswer Naidu (MIT license). The original React component, GSAP animations, mosaic canvas, UI, and demo interactions are preserved.

## Source project
- `src/components/ui/tessel-agent-landing.tsx`: original landing page component
- `src/main.tsx`: React entry point
- `src/components/ui/demo-ember.tsx`: original alternate demo (optional)
- `index.html`: Vite entry point
- `public/_headers`: Cloudflare Pages response headers

## Cloudflare Pages — Git integration (no local terminal)
1. Upload this source project to a GitHub repository using GitHub's web interface.
2. In Cloudflare Dashboard > Workers & Pages > Create > Pages > Connect to Git, choose the repository.
3. Framework preset: Vite; build command: `npm run build`; output directory: `dist`.
4. Deploy. Cloudflare installs dependencies and builds automatically.

## Cloudflare Pages — Direct Upload
Direct Upload requires **compiled** files from `dist`, not the source ZIP. Build this project with `npm install` and `npm run build` in an online IDE/build environment, then upload the contents of `dist` to Cloudflare Pages > Direct Upload.

## Demo-only features
Agent prompt replies are simulated until `onRun` is wired to a secure API. Email signup is simulated until `onSignUp` is wired to a backend. Do not put API secrets in frontend code.
