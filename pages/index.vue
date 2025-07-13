<template>
  <div class="max-w-2xl mx-auto px-4">

    <DataState :pending="pending" :error="!!error" :errorMessage="error?.message">
      <div>
        <PostCard
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
      </div>
    </DataState>

  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import DataState from '~/components/DataState.vue'
import PostCard from '~/components/PostCard.vue'
import type { Article } from '~/types/article'

// 1. Leggo il parametro `page` dalla URL (default: 1)
const route = useRoute()
const page = parseInt(route.query.page as string || '1')

// 2. Fetch con pagination
const { data, pending, error } = await useStrapi<Article[]>('articles', {
  populate: {
    cover: {
      fields: ['url', 'alternativeText'],
    },
      category: {
        fields: ['name', 'slug'], // 👈 aggiunto per ottenere la categoria
      },
  },
  sort: ['publishedAt:desc'],
}, {
  key: 'articles-list',
  lazy: false,
  revalidate: 60,
  serverOnly: true
})

if (error.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Error fetching posts from Strapi',
    fatal: true,
  })
}

const posts = data.value || []

useSeoMeta({
  title: 'Matteo Chiti – Blog',
  description: 'Personal thoughts, experiments and case studies from my creative journey.',
  ogType: 'website'
})

</script>
