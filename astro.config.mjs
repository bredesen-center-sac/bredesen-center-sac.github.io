// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Commented out for local development - uncomment and update for GitHub Pages deployment
  // site: 'https://your-username.github.io',
  // base: '/sac-website',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});