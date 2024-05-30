<script setup lang="ts">
const color = useColorMode()

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => color.value === 'dark' ? '#000000' : '#ffffff',
  }],
})

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <Button variant="ghost" size="icon" class="rounded-full" title="Toggle Color Scheme" aria-label="button dark toggle" @click="toggleDark">
    <div class="i-ph-sun-dim-duotone dark:i-ph-moon-stars-duotone" />
  </Button>
</template>
