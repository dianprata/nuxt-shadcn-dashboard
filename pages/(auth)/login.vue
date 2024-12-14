<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <LayoutAuth reverse>
    <div class="mx-auto grid gap-6 max-w-sm">
      <div class="text-center grid gap-2">
        <h1 class="text-2xl font-semibold tracking-tight">
          Welcome back
        </h1>
        <p class="text-sm text-muted-foreground text-balance">
          Login with your Apple or Google account
        </p>
      </div>
      <AuthSignIn />
    </div>
  </LayoutAuth>
</template>
