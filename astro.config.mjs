// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['images.ctfassets.net'],
    remotePatterns: [{ protocol: "https" }],
    responsiveStyles: true,
  },
  integrations: [
    AstroPWA({
      mode: 'production',
      base: '/',
      scope: '/',
      includeAssets: ['favicon.ico'],
      registerType: 'autoUpdate',
      manifest: {
        name: 'Manukau Tramping Club',
        short_name: 'MTC',
        theme_color: '#7dcde8',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        navigateFallback: '/404',
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\/$/],
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
    }),
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