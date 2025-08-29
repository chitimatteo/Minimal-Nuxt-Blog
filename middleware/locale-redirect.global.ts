// /middleware/locale-redirect.global.ts
export default defineNuxtRouteMiddleware((to) => {
  const nuxtApp = useNuxtApp()
  const i18n = nuxtApp.$i18n

  const currentLocale = i18n.locale.value
  const targetLocale = to.params.locale || i18n.defaultLocale

  if (currentLocale !== targetLocale) {
    i18n.setLocale(targetLocale)
  }
})
