<script setup>
import { useI18n, useRoute, useHead, useRuntimeConfig, useLocalePath } from '#imports'
import { useCurrentArticle } from '~/composables/useCurrentArticle'

const { locale, locales } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const config = useRuntimeConfig()

const { public: { siteUrl } } = useRuntimeConfig()
const { article } = useCurrentArticle()

const baseUrl = config.public.siteUrl

const links = computed(() => {
  // Se siamo su articolo, costruisci gli alternate con gli slug corretti
  if (article.value) {
    return locales.value.map((loc) => {
      const target = loc.code === article.value.locale
        ? article.value
        : article.value.localizations?.find(l => l.locale === loc.code)

      const href = target
        ? siteUrl + localePath({ name: 'blog-slug', params: { slug: target.slug } }, loc.code)
        : siteUrl + localePath('/', loc.code)

      return { rel: 'alternate', hreflang: loc.code, href }
    })
  }
  // altrimenti, alternates generici per la pagina corrente
  return locales.value.map((loc) => ({
    rel: 'alternate',
    hreflang: loc.code,
    href: siteUrl + localePath('/', loc.code)
  }))
})

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
  link: links,
})
</script>

<template>
  <div class="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
