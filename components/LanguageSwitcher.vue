<script setup>
import { useI18n, useRoute, useLocalePath } from '#imports'

const localePath = useLocalePath()
const { locales, locale } = useI18n()
const route = useRoute()

const getLocaleLink = (code) => {
  return localePath(route.path, code)
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
