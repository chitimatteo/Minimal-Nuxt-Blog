<template>
  <div class="max-w-xl mx-auto px-4">
    <article v-if="post">

      <div class="max-w-xl mx-auto text-xs pb-2">
        <span class="text-gray-700 dark:text-gray-500">{{ post.category.name }}</span> <span class="ml-2 text-gray-400">{{ formatDate(post.publishedAt) }}</span>
      </div>
      <h1 class="max-w-xl mx-auto text-6xl font-bold mb-8 text-gray-900 dark:text-gray-100">{{ post.title }}</h1>

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

      <div class="max-w-xl mx-auto">
        <BlockRenderer v-if="post.blocks?.length" :blocks="post.blocks" />
      </div>
    </article>

    <div v-else>
      <p class="text-red-600 font-medium">⚠️ Post not found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useStrapi } from '~/composables/useStrapi'
import type { Article } from '~/types/article'
import BlockRenderer from '~/components/blocks/BlockRenderer.vue'
import type { Block } from '~/types/blocks'

// 1. Prendo lo slug dalla route
const route = useRoute()
const slug = route.params.slug as string

// 2. Chiamata a Strapi filtrando per slug
const { data, error } = await useStrapi<Article[]>('articles', {
  filters: { slug: { $eq: slug } },
  populate: {
    cover: { fields: ['url', 'alternativeText'] },
    category: { fields: ['name', 'slug'] },
    blocks: true
  },
}, {
  key: `article-${slug}`,
  serverOnly: true,
  revalidate: 60
})

// 3. Ricavo il primo post della lista
const post = data.value?.[0]

if (!post) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found',
    fatal: true
  })
}

// 4. SEO meta
useSeoMeta({
  title: post?.title,
  description: post?.description || post?.title,
  ogType: 'article'
})

// 5. Funzione per formattare la data
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
