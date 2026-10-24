// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// Static build for Netlify. No adapter, no prefetch: every request and byte costs Netlify credits.
export default defineConfig({
  site: 'https://culturalshockparty.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin/') && !page.endsWith('/404/'),
    }),
    mdx(),
  ],
});
