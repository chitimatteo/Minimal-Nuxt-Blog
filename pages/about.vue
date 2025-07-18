<script setup>
const { data: posts, error } = await useFetch('https://beneficial-pleasure-403e16f960.strapiapp.com/api/articles?populate=cover')
</script>

<template>
  <main class="p-6 max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold text-indigo-600 mb-6">{{ $t('about.title') }}</h1>
  </main>
</template>
