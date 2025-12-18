// https://nuxt.com/docs/api/configuration/nuxt-config
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ name: 'description', content: 'My amazing site' }],
      link: [{ rel: 'icon', href: 'favicon.svg' }],
    },
  },

  nitro: {
    preset: 'static',
    prerender: {
      failOnError: false,
      // Ignore routes that fail (like missing images)
      ignore: ['/api', '/_ipx']
    }
  },

  image: {
    // For static site generation, use 'none' provider to disable runtime optimization
    // Images will be served as-is from the public folder
    provider: 'none',
  },

  devtools: { enabled: true },

  // base styles
  // css: ['@/assets/scss/styles.scss'],

  // variables, fonts, mixins, etc.
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `
            @use "${join(currentDir, './assets/scss/abstracts/_colors.scss')}" as *;
            @use "${join(currentDir, './assets/scss/abstracts/_fonts.scss')}" as *;
            @use "${join(currentDir, './assets/scss/abstracts/_mixins.scss')}" as *;
          `,
        },
      },
    },
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/eslint',
    'nuxt-delay-hydration',
    '@pinia/nuxt',
    'vue3-carousel-nuxt',
  ],

  colorMode: {
    preference: 'light',
  },

  carousel: {
    prefix: 'U',
  },

  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    // NOTE: you should disable this once you've finished testing, it will break HMR
    debug: process.env.NODE_ENV === 'development',
    mode: 'manual',
  },

  compatibilityDate: '2025-05-24',
});
