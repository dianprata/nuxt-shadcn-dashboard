<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <LayoutAuth>
    <div class="grid mx-auto max-w-sm gap-6">
      <div class="grid gap-2 text-center">
        <h1 class="text-2xl font-semibold tracking-tight">
          Forgot Password
        </h1>
        <p class="text-balance text-sm text-muted-foreground">
          Enter your email below to reset your password
        </p>
      </div>
      <AuthForgotPassword />
      <p class="text-center text-sm text-muted-foreground">
        Already have an account?
        <NuxtLink
          to="/login"
          class="underline underline-offset-4 hover:text-primary"
        >
          Login
        </NuxtLink>
      </p>
    </div>
  </LayoutAuth>
</template>

<style scoped>

</style>
