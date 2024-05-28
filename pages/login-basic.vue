<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <div class="w-full flex items-center justify-center px-4 h-dvh">
    <UICard class="mx-auto max-w-sm">
      <UICardHeader>
        <UICardTitle class="text-2xl">
          Login
        </UICardTitle>
        <UICardDescription>
          Enter your email below to login to your account
        </UICardDescription>
      </UICardHeader>
      <UICardContent>
        <AuthSignIn />
      </UICardContent>
    </UICard>
  </div>
</template>
