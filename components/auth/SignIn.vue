<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'

const email = ref('demo@gmail.com')
const password = ref('password')
const isLoading = ref(false)

function onSubmit(event: Event) {
  event.preventDefault()
  if (!email.value || !password.value)
    return

  isLoading.value = true

  setTimeout(() => {
    if (email.value === 'demo@gmail.com' && password.value === 'password') {
      console.log('Logged in')
      navigateTo('/')
    }

    isLoading.value = false
  }, 3000)
}
</script>

<template>
  <form class="grid gap-4" @submit="onSubmit">
    <div class="grid gap-2">
      <UILabel for="email">
        Email
      </UILabel>
      <UIInput
        id="email"
        v-model="email"
        type="email"
        placeholder="name@example.com"
        :disabled="isLoading"
        auto-capitalize="none"
        auto-complete="email"
        auto-correct="off"
      />
    </div>
    <div class="grid gap-2">
      <div class="flex items-center">
        <UILabel for="password">
          Password
        </UILabel>
        <NuxtLink
          to="/forgot-password"
          class="ml-auto inline-block text-sm underline"
        >
          Forgot your password?
        </NuxtLink>
      </div>
      <UIInput id="password" v-model="password" type="password" />
    </div>
    <UIButton type="submit" class="w-full" :disabled="isLoading">
      <Loader2 v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
      Login
    </UIButton>
    <UIButton variant="outline" class="w-full">
      Login with Google
    </UIButton>
  </form>
  <div class="mt-4 text-center text-sm text-muted-foreground">
    Don't have an account?
    <NuxtLink to="/register" class="underline">
      Sign up
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>
