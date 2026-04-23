// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mrenne.github.io',
  base: '/nomadic-learning',
  vite: {
    plugins: [tailwindcss()]
  }
});
