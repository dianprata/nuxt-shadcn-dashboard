<script setup lang="ts">
const store = useNavbar()

const router = useRouter()

defineShortcuts({
  'Meta_B': () => store.toggle(),
  'G-H': () => router.push('/'),
  'G-E': () => router.push('/email'),
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style scoped>

</style>
