<script setup lang="ts">
import { cn } from '@/lib/utils'

const store = useNavbar()

const { isOpen } = storeToRefs(store)

const { isBgWhite } = storeToRefs(useAppConf())
</script>

<template>
  <div
    class="grid w-full transition-width duration-300 min-h-dvh"
    :class="cn('pl-0 lg:pl-64 sm:pl-20', isOpen ? 'lg:pl-64 sm:pl-20' : 'lg:pl-20')"
  >
    <LayoutSidebar />
    <div flex="~ col">
      <LayoutHeader />
      <main class="flex-1 p-4 lg:p-6" :class="isBgWhite ? 'bg-background' : 'bg-muted dark:bg-muted/50'">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>

</style>
