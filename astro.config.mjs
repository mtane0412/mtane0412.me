import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://mtane0412.me",
  integrations: [tailwind(), icon(), partytown({
    config: {
      forward: ['dataLayer.push'],
    },
  })]
});