import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://pavankrao-qlp.github.io/portfolio/',
  base: '/portfolio/',
  integrations: [mdx(), sitemap(), tailwind()]
});