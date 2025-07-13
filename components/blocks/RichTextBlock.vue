<template>
  <div
    class="prose prose-neutral dark:prose-invert max-w-none mb-8"
    v-html="parsed"
  />
</template>

<script setup lang="ts">
import { useMarkdown } from '#imports'

const props = defineProps<{
  block: {
    body: string
  }
}>()

const { parsed } = useMarkdown(props.block.body)
</script>
