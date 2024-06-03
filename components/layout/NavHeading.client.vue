<script setup lang="ts">
import type { NavSectionTitle } from '~/types/nav'

defineProps<{
  item: NavSectionTitle
}>()

const { isOpen } = storeToRefs(useNavbar())

const isDesktop = useMediaQuery('(min-width: 1024px)')
</script>

<template>
  <div class="mx-3 mb-1 mt-2 leading-4.5">
    <span v-if="isOpen && isDesktop" class="text-xs text-muted-foreground uppercase">{{ item.heading }}</span>
    <Separator v-else />
  </div>
</template>

<style scoped>

</style>
