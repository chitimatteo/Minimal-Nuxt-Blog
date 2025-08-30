<script setup>
import { useI18n, useLocalePath, useRoute } from '#imports'
import { useCurrentArticle } from '~/composables/useCurrentArticle'

const localePath = useLocalePath()
const { locales, locale } = useI18n()
const { article } = useCurrentArticle()
const route = useRoute()

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
    // Nessuna traduzione → home di quella lingua
    return localePath('/', code)
  }

  // ✅ Fallback: stessa pagina (route attuale) nella nuova lingua
  return localePath(route.fullPath, code)
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
      {{getLocaleLink(loc.code)}}
    </template>
  </div>
</template>
