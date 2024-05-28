<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'

const isLoading = ref(false)
async function onSubmit(event: Event) {
  event.preventDefault()
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}
</script>

<template>
  <form @submit="onSubmit">
    <div class="grid gap-4">
      <div class="grid gap-2">
        <UILabel for="email">
          Email
        </UILabel>
        <UIInput
          id="email"
          placeholder="name@example.com"
          type="email"
          auto-capitalize="none"
          auto-complete="email"
          auto-correct="off"
          :disabled="isLoading"
        />
      </div>
      <UIButton :disabled="isLoading">
        <Loader2 v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
        Submit
      </UIButton>
    </div>
  </form>
</template>

<style scoped>

</style>
