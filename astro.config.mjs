// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: import.meta.env.SITE_URL || 'https://convite-manu.vercel.app',
  trailingSlash: 'never',
});
