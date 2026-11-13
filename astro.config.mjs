import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mkappraisals.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      // Form confirmation page stays out of the sitemap.
      filter: (page) => !new URL(page).pathname.startsWith('/thank-you'),
    }),
  ],
});
