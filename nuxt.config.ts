// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ name: 'description', content: 'My amazing site' }],
      link: [{ rel: 'icon', href: 'favicon.svg' }],
    },
  },

  devtools: { enabled: true },

  // base styles
  css: ['@/assets/scss/styles.scss'],

  // variables, fonts, mixins, etc.
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/main.scss" as *;',
        },
      },
    },
  },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/eslint-module',
    'nuxt-delay-hydration',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxt/content',
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
});
