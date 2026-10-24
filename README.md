# Cultural Shock Party: culturalshockparty.com

Website, brand assets and research for Cultural Shock Party, a Fourth Wave feminist movement.

| Folder | What's in it |
|---|---|
| `site/` | The website: Astro 7, fully static, deployed on Netlify |
| `brand/` | Logo (final badge, wordmark, favicon), fonts and logo tooling |
| `research/` | Sourced research behind every claim on the site, plus fact-checks |
| `docs/STRATEGY.md` | Strategy and build brief: voice, facts policy, design system, page plans |
| `CONTENT-TODO.md` | Everything the founder must confirm before launch |

Keep this repository **private**: `research/` includes internal notes about the founder and risks.

## Deploy on Netlify

`netlify.toml` already configures everything (base `site`, command `npm run build`, publish `dist`, Node 24,
security headers, redirects). In Netlify: **Add new project → Import from GitHub → this repo** and accept the
detected settings. Then:

1. **Forms**: enable form detection (Project configuration → Forms). Forms: `newsletter`, `join`, `contact`,
   `manifesto-sign`, `manifesto-feedback`. Add email notifications for each.
2. **Domain**: add `culturalshockparty.com` (and `.in`, `.org` as aliases; they redirect to `.com`). At
   Hostinger either switch nameservers to Netlify DNS, or set `A @ → 75.2.60.5` and `CNAME www → <site>.netlify.app`.
3. **Credits**: the Free plan pauses the site at 300 credits/month (15 per production deploy, 20 per GB).
   Batch content changes into few deploys; consider the Personal plan before big campaigns.

## Work on the site

```bash
cd site
npm install
npm run dev          # http://localhost:4321
npm run photos       # re-sync licensed photos from research manifests + make duotones
npm run build        # production build into site/dist (runs the duotone step first)
node scripts/shoot.mjs / --widths 390,1440 --axe   # screenshots + accessibility check of dist/
```

Photos: only images listed in `site/src/data/photos.json` (each with licence and credit) may be used, through
`src/components/media/Photo.astro`. Every statistic must carry its source and date (see `docs/STRATEGY.md` §4).
