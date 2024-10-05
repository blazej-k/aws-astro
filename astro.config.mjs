// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: `https://test.io`,
  integrations: [sitemap()],
  output: "static",

  // output: 'hybrid',
});
