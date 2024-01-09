// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'My amazing site'}
      ],
      link: [
        { rel: 'icon', href: 'favicon.svg' },
      ],
    },
  },
  devtools: { enabled: true },
  css: [
    '~/assets/scss/main.scss'
  ],
  modules: [
    ['@nuxtjs/eslint-module', { cache: false }]
  ]
});
