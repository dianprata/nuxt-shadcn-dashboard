<script setup lang="ts">
import { Icon } from '@iconify/vue'

import type { NavGroup } from '~/types/nav'

defineProps<{
  item: NavGroup
}>()

const isOpenCollapsible = ref(false)
</script>

<template>
  <Collapsible
    v-model:open="isOpenCollapsible"
    class="w-full space-y-1"
  >
    <CollapsibleTrigger as-child>
      <Button
        variant="ghost"
        size="icon"
        class="w-full gap-3 rounded-lg px-4 font-normal"
        :aria-label="item.title"
      >
        <component :is="item.icon" v-if="item.icon" class="size-5" />
        <span>{{ item.title }}</span>
        <Icon :icon="isOpenCollapsible ? 'radix-icons:chevron-up' : 'radix-icons:chevron-down'" class="ml-auto h-4 w-4" />
      </Button>
    </CollapsibleTrigger>
    <CollapsibleContent class="space-y-2">
      <template v-for="(nav, index) in item.children" :key="`link-children-${index}`">
        <SheetClose as-child>
          <NuxtLink
            :to="nav.link"
            :class="[
              { 'bg-muted': nav.link === $route.path },
            ]"
            class="flex items-center gap-4 rounded-lg px-5 py-2 text-sm text-foreground font-normal hover:bg-muted"
          >
            <component :is="nav.icon" size-3 />
            {{ nav.title }}
          </NuxtLink>
        </SheetClose>
      </template>
    </CollapsibleContent>
  </Collapsible>
</template>

<style scoped>

</style>
