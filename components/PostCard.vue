<template>
  <article class="pb-20">
    <NuxtLink
      :to="`/blog/${post.slug}`"
      class="block hover:opacity-90 ease-in-out duration-300"
    >
      <NuxtImg
        v-if="post.cover"
        :src="post.cover.url"
        :alt="post.cover.alternativeText"
        width="800"
        height="400"
        loading="lazy"
        decoding="async"
        class="rounded-md mb-3"
        placeholder
        densities="[1, 2]"
        format="webp"
        blur="20"
      />
    </NuxtLink>

    <NuxtLink
      :to="`/blog/${post.slug}`"
      class="block"
    >
      <h2 class="text-base font-semibold hover:text-gray-700 hover:dark:text-gray-300 ease-in-out duration-300">
        {{ post.id }} {{ post.title }}
      </h2>
    </NuxtLink>
    <p
      v-if="post.description && post.description.trim()"
      class="text-gray-700 dark:text-gray-500 text-sm"
    >
      {{ post.description }}
    </p>
    <div class="text-xs pt-2">
      <span class="text-gray-700 dark:text-gray-500">{{ post.category.name }}</span> <span class="ml-2 text-gray-400">{{ formatDate(post.publishedAt) }}</span>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Article } from '~/types/article'

defineProps<{
  post: Article
}>()

// Funzione per formattare la data
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}
</script>
