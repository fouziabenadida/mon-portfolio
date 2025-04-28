// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    'vuetify/styles',
    '@fontsource-variable/inter',
    '~/assets/css/main.css',
    'animate.css/animate.min.css'
  ],
  build: {
    transpile: ['vuetify'],
  }
})
