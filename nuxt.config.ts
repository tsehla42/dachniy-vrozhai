// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ name: 'description', content: 'My amazing site' }],
      link: [
        { rel: 'icon', href: 'favicon.svg' },
        { rel: 'stylesheet', href: '/fonts/fonts.css' },
      ],
    },
  },

  nitro: {
    static: true,
  },

  image: {
    provider: 'none',
  },

  devtools: { enabled: true },

  // base styles
  css: ['@/assets/css/tailwind.css', '@/assets/scss/styles.scss'],

  // variables, fonts, mixins, etc.
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/abstracts/colors" as *; @use "@/assets/scss/abstracts/fonts" as *; @use "@/assets/scss/abstracts/mixins" as *;`,
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
