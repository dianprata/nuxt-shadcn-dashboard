<script setup lang="ts">
import { useNavbar } from '~/composables/useNavbar'

const store = useNavbar()

const { isOpen } = storeToRefs(store)
</script>

<template>
  <div class="grid h-screen w-full transition-all duration-300" :class="isOpen ? 'pl-64' : 'pl-20'">
    <LayoutAside />
    <div flex="~ col">
      <LayoutHeader />
      <main class="flex-1 p-4 lg:p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>

</style>
