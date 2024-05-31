<script setup lang="ts">
import type { NavSectionTitle } from '~/types/nav'

defineProps<{
  item: NavSectionTitle
}>()

const { isOpen } = storeToRefs(useNavbar())
</script>

<template>
  <div class="mx-3 mb-1 mt-4 hidden leading-4.5 lg:inline-block">
    <span v-if="isOpen" class="text-xs text-muted-foreground uppercase">{{ item.heading }}</span>
    <Separator v-else />
  </div>
</template>

<style scoped>

</style>
