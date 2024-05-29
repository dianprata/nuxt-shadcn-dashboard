<script setup lang="ts">
const store = useNavbar()

const { isOpen, isOpenCookie, showSidebar, showSidebarCookie } = storeToRefs(store)

const { width } = useWindowSize()

function windowResized() {
  showSidebarCookie.value = width.value >= 576

  if (width.value < 768 && isOpen.value)
    isOpenCookie.value = false
}

useEventListener('resize', () => {
  windowResized()
})
</script>

<template>
  <div
    class="grid w-full transition-width duration-300 min-h-dvh" :class="[
      { 'pl-64': isOpen && showSidebar },
      { 'pl-20': !isOpen && showSidebar },
    ]"
  >
    <LayoutSidebar />
    <div flex="~ col">
      <LayoutHeader />
      <main class="flex-1 bg-muted/50 p-4 lg:p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>

</style>
