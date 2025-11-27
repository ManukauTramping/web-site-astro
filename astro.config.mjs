// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
//import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  image: {
    domains: ['images.ctfassets.net'],
    remotePatterns: [{ protocol: "https" }],
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
  redirects: {
    '/': '/index',
  },
  site: 'https://www.manukautrampingclub.co.nz',
});