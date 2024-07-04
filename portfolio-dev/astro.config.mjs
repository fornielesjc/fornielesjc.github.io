import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://fornielesjc.github.io',
  base:'portfolio-dev',
  integrations: [tailwind()]
});