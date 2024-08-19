<script setup lang="ts">
const store = useNavbar()
const { isOpen } = storeToRefs(store)
const { isBgWhite } = storeToRefs(useAppConf())
const { theme, radius } = useCustomize()

useServerHead({
  bodyAttrs: {
    class: `theme-${theme.value}`,
    style: `--radius: ${radius.value}rem;`,
  },
})

const router = useRouter()

defineShortcuts({
  'Meta_B': () => store.toggle(),
  'G-H': () => router.push('/'),
  'G-E': () => router.push('/email'),
})
</script>

<template>
  <div
    class="grid w-full transition-width duration-300 min-h-dvh"
    :class="cn('pl-0 lg:pl-64 sm:pl-20', isOpen ? 'lg:pl-64 sm:pl-20' : 'lg:pl-20')"
  >
    <LayoutSidebar />
    <div flex="~ col" of-hidden>
      <LayoutHeader />
      <main class="flex-1 p-4 lg:p-6" :class="isBgWhite ? 'bg-background' : 'bg-muted dark:bg-muted/20'">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>

</style>
