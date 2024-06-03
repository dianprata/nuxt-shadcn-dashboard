<script setup lang="ts">
import type { NavSectionTitle } from '~/types/nav'

defineProps<{
  item: NavSectionTitle
}>()

const { isOpen } = storeToRefs(useNavbar())

const isDesktop = useMediaQuery('(min-width: 1024px)')
</script>

<template>
  <div v-if="isOpen && isDesktop" class="mx-3 mb-1 mt-4 leading-4.5">
    <span class="text-xs text-muted-foreground uppercase">{{ item.heading }}</span>
  </div>
  <div v-else class="mx-3 my-1">
    <Separator />
  </div>
</template>

<style scoped>

</style>
