// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: {
    enabled: true,

    timeline: {
      enabled: false,
    },
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
  ],
  runtimeConfig: {
    public: {
      strapiURL: process.env.STRAPI_URL,
    }
  },
  image: {
    domains: [
      'beneficial-pleasure-403e16f960.media.strapiapp.com'
    ],
  },
  fonts: {
    families: [
      { name: 'Inter',
        provider: 'google',
        display: 'swap',
        weights: [400, 600, 700, 900],
        preload: true,
      },
    ],

  }
})
