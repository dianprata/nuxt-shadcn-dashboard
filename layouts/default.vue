<script setup lang="ts">
const store = useNavbar()
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
  <SidebarProvider>
    <LayoutAppSidebar />
    <SidebarInset>
      <LayoutHeader />
      <div class="flex-1 p-4 lg:p-6">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>

<style scoped>

</style>
