<script setup lang="ts">
import { Sonner } from '@/components/ui/sonner'
</script>

<template>
  <NuxtLayout vaul-drawer-wrapper>
    <NuxtPage />
  </NuxtLayout>

  <Toaster />
  <Sonner class="pointer-events-auto" />
</template>
