<script setup>
import { useI18n, useLocalePath } from '#imports'
import { computed } from 'vue'
import { useCurrentArticle } from '~/composables/useCurrentArticle'

const localePath = useLocalePath()
const { locales, locale } = useI18n()
const { article } = useCurrentArticle() // <-- stato globale

// Nome route di pages/blog/[slug].vue (di solito è questo)
// Se lo hai personalizzato, aggiorna qui.
const BLOG_ROUTE_NAME = 'blog-slug'

const getLocaleLink = (code) => {
  // Se siamo su un articolo e abbiamo le localizzazioni
  if (article.value) {
    if (code === article.value.locale) {
      return localePath({ name: BLOG_ROUTE_NAME, params: { slug: article.value.slug } }, code)
    }
    const translated = article.value.localizations?.find(l => l.locale === code)
    if (translated) {
      return localePath({ name: BLOG_ROUTE_NAME, params: { slug: translated.slug } }, code)
    }

    // Se non esiste traduzione, porta almeno alla home della lingua scelta
    return localePath('/', code)
  }

  // Fallback generico (per pagine statiche, listing, ecc.)
  return localePath('/', code)
}
</script>

<template>
  <div class="flex items-center gap-2">
    <template v-for="loc in locales" :key="loc.code">
      <NuxtLink
        :to="getLocaleLink(loc.code)"
        :class="[
          'text-xs uppercase transition',
          loc.code === locale ? '' : 'text-gray-500 hover:text-black dark:hover:text-white'
        ]"
      >
        {{ loc.code }}
      </NuxtLink>
    </template>
  </div>
</template>
