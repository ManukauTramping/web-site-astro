// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
//import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['images.ctfassets.net'],
    remotePatterns: [{ protocol: "https" }],
    responsiveStyles: true,
  },
  integrations: [
    // AstroPWA({
    //   devOptions: {
    //     enabled: true,
    //   }
    // }),
    react({
      experimentalReactChildren: true,
    })
  ],
  output: 'static',
  prefetch: {
    prefetchAll: true,
  },
  site: 'https://www.manukautrampingclub.co.nz',
});