<script setup lang="ts">
import type { NavLink } from '~/types/nav'

defineProps<{
  item: NavLink
}>()
</script>

<template>
  <SheetClose as-child>
    <NuxtLink
      :to="item.link"
      :class="[
        { 'bg-muted': item.link === $route.path },
      ]"
      class="flex items-center gap-4 rounded-lg px-3 py-2 text-sm text-foreground font-normal hover:bg-muted"
    >
      <component :is="item.icon" size-4.5 />
      {{ item.title }}
    </NuxtLink>
  </SheetClose>
</template>

<style scoped>

</style>
