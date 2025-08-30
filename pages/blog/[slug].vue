<template>
  <div class="max-w-xl mx-auto px-4">
    <article v-if="post">
      <div class="text-xs pb-2">
        <span class="text-gray-700 dark:text-gray-500">{{ post.category?.name }}</span>
        <span class="ml-2 text-gray-400">{{ formatDate(post.publishedAt) }}</span>
      </div>

      <h1 class="text-5xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        {{ post.title }}
      </h1>

      <NuxtImg
        v-if="post.cover"
        :src="post.cover.url"
        :alt="post.cover.alternativeText"
        width="1200"
        height="600"
        class="rounded-lg mb-16"
        loading="lazy"
        format="webp"
        placeholder
        blur="20"
      />

      <div>
        <BlockRenderer v-if="post.blocks?.length" :blocks="post.blocks" />
      </div>
    </article>

    <div v-else>
      <p class="text-red-600 font-medium">⚠️ Post not found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import { useI18n, useSeoMeta, createError } from '#imports'
import { useStrapi } from '~/composables/useStrapi'
import BlockRenderer from '~/components/blocks/BlockRenderer.vue'
import type { Article } from '~/types/article'
import { useCurrentArticle } from '~/composables/useCurrentArticle'

const route = useRoute()
const { locale } = useI18n()
const slug = route.params.slug as string

const { data } = await useStrapi<Article[]>('articles', {
  filters: { slug: { $eq: slug }, locale: { $eq: locale.value } },
  populate: {
    cover: { fields: ['url', 'alternativeText'] },
    category: { fields: ['name', 'slug'] },
    blocks: true,
    localizations: { fields: ['slug', 'locale'] }
  }
}, {
  key: `article-${slug}-${locale.value}`,
  serverOnly: true,
  revalidate: 60
})

const post = (data.value as Article[] | undefined)?.[0]
if (!post) {
  throw createError({ statusCode: 404, statusMessage: `Post not found in locale ${locale.value}`, fatal: true })
}

const { article } = useCurrentArticle()

// ✅ Salva stato articolo
article.value = {
  slug: post.slug,
  locale: (post as any).locale,
  localizations: (post as any).localizations || []
}

// ✅ Ripulisci stato quando lasci la pagina articolo
onBeforeRouteLeave(() => {
  article.value = null
})

// SEO
useSeoMeta({
  title: post.title,
  description: post.description || post.title,
  ogType: 'article',
  ogLocale: locale.value,
  ogImage: post.cover?.url
})

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString(locale.value === 'it' ? 'it-IT' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
