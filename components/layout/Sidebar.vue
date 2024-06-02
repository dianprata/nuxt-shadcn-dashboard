<script setup lang="ts">
import { Triangle } from 'lucide-vue-next'
import { navMenu, navMenuBottom } from '~/constants/menus'
import { cn } from '@/lib/utils'
import type { NavLink, NavSectionTitle } from '~/types/nav'

const store = useNavbar()
const { toggle } = store

const { isOpen } = storeToRefs(store)

function resolveNavItemComponent(item: NavLink | NavSectionTitle) {
  if ('heading' in item)
    return resolveComponent('LayoutNavHeading')

  return resolveComponent('LayoutNavLink')
}
</script>

<template>
  <aside
    class="inset-y fixed left-0 z-20 hidden h-full flex-col items-center border-r bg-background transition-width duration-300 sm:flex"
    :class="cn('w-20 lg:w-64', isOpen ? 'lg:w-64' : 'lg:w-20')"
  >
    <div
      class="relative border-b px-3 py-2 text-center"
      :class="cn('w-20 lg:w-64', isOpen ? 'lg:w-64' : 'lg:w-20')"
    >
      <div
        class="flex items-center gap-3"
        :class="cn('justify-center lg:justify-start', isOpen ? 'lg:justify-start' : 'lg:justify-center')"
      >
        <Button variant="outline" size="icon" aria-label="Home">
          <Triangle class="size-5 fill-foreground" />
        </Button>
        <span v-if="isOpen" class="hidden text-xl font-semibold lg:inline-block">Dashboard</span>
      </div>

      <Button variant="outline" class="absolute top-4 hidden size-6 rounded-full p-0 -right-3 lg:inline-flex" @click="toggle">
        <div :class="isOpen ? 'i-radix-icons-chevron-left' : 'i-radix-icons-chevron-right'" />
      </Button>
    </div>
    <ScrollArea class="w-full">
      <nav class="grid w-full gap-1 p-2">
        <component :is="resolveNavItemComponent(item)" v-for="(item, index) in navMenu" :key="index" :item="item" />
      </nav>
    </ScrollArea>
    <nav class="grid mt-auto w-full gap-1 p-2">
      <component :is="resolveNavItemComponent(item)" v-for="(item, index) in navMenuBottom" :key="index" :item="item" />
    </nav>
  </aside>
</template>

<style scoped>

</style>
