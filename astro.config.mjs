// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jeanmachuca.github.io',
  base: '/cognitive-os-website-beta',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
