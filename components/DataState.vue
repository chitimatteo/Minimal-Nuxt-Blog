<template>
  <div>
    <slot v-if="!pending && !error" />

    <div v-else-if="pending" class="text-center py-10">
      <p class="text-gray-400 text-sm animate-pulse">
        Loading fresh content from the cosmos... 🌌
      </p>
    </div>

    <div v-else class="text-center py-10">
      <p class="text-red-500">❌ {{ errorMessage || 'Something went wrong' }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  pending: boolean
  error: boolean
  errorMessage?: string
}>()
</script>
