<template>
  <div>
    <header class="w-3/12 fixed top-0 left-0 p-12">
      <h1 class="text-base font-medium">
        <NuxtLinkLocale class="hover:text-gray-500 ease-in-out duration-300" to="/">
          Matteo Chiti
          <span class="square-logo"></span>
        </NuxtLinkLocale>
      </h1>
      <h2 class="text-sm text-gray-400 pb-6">Digital Creative Director</h2>

      <div class="text-xs pb-6">
        <div>
          Founder of
          <a
            class="hover:text-gray-500 ease-in duration-200"
            href="https://we-rad.com"
            target="_blank"
            title="WE RAD — Communication Agency"
          >WE RAD</a>
        </div>
        <div>Communication Agency</div>
      </div>
    </header>
    <div class="fixed top-0 right-0 p-12 flex gap-4">
      <LanguageSwitcher />
      <ThemeToggle />
    </div>
  </div>
</template>

<script setup>

</script>
