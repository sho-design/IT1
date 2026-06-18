import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to the production domain before launch.
export default defineConfig({
  site: 'https://infusion.restorationmedical.ca',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
