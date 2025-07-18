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
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
  ],
  runtimeConfig: {
    public: {
      strapiURL: process.env.STRAPI_URL,
      siteUrl: process.env.MAIN_URL
    }
  },
  i18n: {
    baseUrl: process.env.MAIN_URL,
    strategy: 'prefix_except_default', // / per IT, /en per EN
    defaultLocale: 'it',
    lazy: true,
    langDir: 'locales/',
    detectBrowserLanguage: false,
    customRoutes: "config",
    pages: {
      about: {
        it: "/chi-sono",
        en: "/about",
      },
    },
    locales: [
      {
        code: 'it',
        iso: 'it-IT',
        name: 'Italiano',
        file: 'it.json'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json'
      }
    ],
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
