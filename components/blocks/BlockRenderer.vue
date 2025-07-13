<template>
  <div>
    <component
      v-for="block in blocks"
      :key="block.id"
      :is="getComponent(block.__component)"
      :block="block"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  blocks: any[]
}>()

const getComponent = (componentName: string) => {
  switch (componentName) {
    case 'shared.rich-text':
      return resolveComponent('blocks/RichTextBlock')
    case 'shared.quote':
      return resolveComponent('blocks/QuoteBlock')
    case 'shared.media':
      return resolveComponent('blocks/MediaBlock')
    case 'shared.slider':
      return resolveComponent('blocks/SliderBlock')
    default:
      return resolveComponent('blocks/UnknownBlock')
  }
}
</script>
