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

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
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
