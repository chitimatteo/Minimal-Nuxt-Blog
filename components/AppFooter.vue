<template>
  <footer class="fixed w-3/12 px-12 py-6 bottom-0 right-0">
    <div class="text-xs text-right">© {{ currentYear }} {{ $t('copyright') }}.</div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
