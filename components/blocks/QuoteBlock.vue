<template>
  <blockquote class="border-l-4 pl-4 italic text-gray-700 my-8">
    <p class="mb-2">“{{ block.body }}”</p>
    <footer class="text-right font-semibold">— {{ block.title }}</footer>
  </blockquote>
</template>

<script setup lang="ts">
defineProps<{
  block: {
    title: string
    body: string
  }
}>()
</script>
