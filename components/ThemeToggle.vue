<template>
  <div :class="[theme === 'dark' ? 'dark-state' : 'light-state', 'flex gap-2 items-center']">
    <button @click="toggleTheme" class="group text-xs text-gray-400 border border-black dark:border-white rounded-full inline-block w-8 h-5 p-[1px] text-left dark:text-right hover:bg-slate-200 hover:dark:bg-gray-700 duration-300 ease-in-out">
      <span class="inline-block w-4 h-4 rounded-full bg-black dark:bg-white duration-300 ease-in-out relative group-hover:opacity-90"></span>
    </button>
  </div>
</template>

<script setup lang="ts">
const { theme, setTheme } = useTheme()

const toggleTheme = () => {
  setTheme(theme.value === 'dark' ? 'light' : 'dark')
}
</script>
