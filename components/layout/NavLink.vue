<script setup lang="ts">
import { cn } from '~/lib/utils'
import type { NavLink } from '~/types/nav'

defineProps<{
  item: NavLink
}>()

const { isOpen } = storeToRefs(useNavbar())
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <NuxtLink :to="item.link">
          <Button
            variant="ghost"
            size="icon"
            class="w-full gap-3 rounded-lg px-4 font-normal"
            :class="[
              { 'bg-muted': item.link === $route.path },
              cn('justify-center lg:justify-start', isOpen ? 'lg:justify-start' : 'lg:justify-center'),
            ]"
            :aria-label="item.title"
          >
            <component :is="item.icon" v-if="item.icon" class="size-5" />
            <span v-if="isOpen" class="hidden lg:inline-block">
              {{ item.title }}
            </span>
          </Button>
        </NuxtLink>
      </TooltipTrigger>
      <TooltipContent side="right" :side-offset="5">
        {{ item.title }}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<style scoped>

</style>
