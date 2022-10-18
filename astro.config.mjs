import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

import sitemap from "@astrojs/sitemap";

import { BASE_URL } from './src/env';

// https://astro.build/config
export default defineConfig({
  integrations: [// Enable Preact to support Preact JSX components.
  preact(), // Enable React for the Algolia search component.
  react(), sitemap()],
  site: BASE_URL
});