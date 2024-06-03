<script setup lang="ts">
import type { NavSectionTitle } from '~/types/nav'

defineProps<{
  item: NavSectionTitle
}>()
</script>

<template>
  <div class="mx-3 mb-1 mt-3 leading-4.5">
    <span class="text-xs text-muted-foreground uppercase">{{ item.heading }}</span>
  </div>
</template>

<style scoped>

</style>
