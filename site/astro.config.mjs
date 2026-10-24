// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { readdirSync, readFileSync, statSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Photos are imported through a glob, so Astro copies every original (and every duotone) into dist/_astro
// even when no page uses it. Delete image files nothing references: smaller deploys, same pages.
const pruneUnusedImages = {
  name: 'csp:prune-unused-images',
  hooks: {
    'astro:build:done': ({ dir, logger }) => {
      const root = fileURLToPath(dir);
      const texts = [];
      const walk = (d) => {
        for (const f of readdirSync(d)) {
          const p = join(d, f);
          if (statSync(p).isDirectory()) walk(p);
          else if (/\.(html|css|js|xml|txt|json|webmanifest)$/.test(f)) texts.push(readFileSync(p, 'utf8'));
        }
      };
      walk(root);
      const haystack = texts.join('\n');
      const assets = join(root, '_astro');
      let removed = 0, bytes = 0;
      for (const f of readdirSync(assets)) {
        if (!/\.(jpe?g|png|webp|avif)$/i.test(f) || haystack.includes(f)) continue;
        const p = join(assets, f);
        bytes += statSync(p).size;
        unlinkSync(p);
        removed++;
      }
      logger.info(`removed ${removed} unreferenced images (${Math.round(bytes / 1048576)} MB)`);
    },
  },
};

// Static build for Netlify. No adapter, no prefetch: every request and byte costs Netlify credits.
export default defineConfig({
  site: 'https://culturalshockparty.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
  image: {
    // AVIF effort 2 builds ~3× faster than the default with files only a few % larger.
    service: { entrypoint: 'astro/assets/services/sharp', config: { avif: { effort: 2 }, webp: { effort: 4 } } },
  },
  integrations: [
    sitemap({
      // noindex pages stay out of the sitemap (a submitted noindex URL is flagged in Search Console)
      filter: (page) => !page.includes('/admin/') && !page.endsWith('/404/') && !page.endsWith('/thanks/'),
    }),
    mdx(),
    pruneUnusedImages,
  ],
});
