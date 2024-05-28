<script setup lang="ts">
const store = useNavbar()

const { isOpen } = storeToRefs(store)
</script>

<template>
  <div class="grid h-screen w-full transition-width duration-300" :class="isOpen ? 'pl-64' : 'pl-20'">
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
