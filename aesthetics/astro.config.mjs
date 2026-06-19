import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set this to the line's real domain before launch.
export default defineConfig({
  site: 'https://aesthetics.restorationmedical.ca',
  integrations: [sitemap()],
});
