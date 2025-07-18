<script setup>
import { useI18n, useRoute, useHead, useRuntimeConfig, useLocalePath } from '#imports'

const { locale, locales } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const config = useRuntimeConfig()

const baseUrl = config.public.siteUrl

const alternateLinks = locales.value.map((loc) => {
  return {
    rel: 'alternate',
    hreflang: loc.code,
    href: baseUrl + localePath(route.fullPath, loc.code)
  }
})

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
  link: alternateLinks,
})
</script>

<template>
  <div class="bg-white text-black dark:bg-zinc-900 dark:text-white">
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
