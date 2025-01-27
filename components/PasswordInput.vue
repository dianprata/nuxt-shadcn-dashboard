<script setup lang="ts">
import type { ComponentFieldBindingObject } from 'vee-validate'
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  disabled?: boolean
  componentField?: ComponentFieldBindingObject<any>
  autocomplete?: string
  modelValue?: string
  placeholder?: string
}>()

const showModal = useModel(props, 'modelValue')

const showPassword = ref(false)
</script>

<template>
  <div class="relative">
    <Input
      v-model="showModal"
      :type="showPassword ? 'text' : 'password'"
      :class="cn('pr-10', props?.class)"
      :placeholder="props?.placeholder ? props.placeholder : 'Enter your password'"
      :disabled="props?.disabled"
      :autocomplete="props?.autocomplete"
      v-bind="props?.componentField"
    />
    <Button
      type="button"
      variant="ghost"
      size="icon"
      class="absolute right-0 top-0 h-full px-2 py-2 hover:bg-transparent"
      :disabled="props?.disabled"
      @click="showPassword = !showPassword"
    >
      <Icon
        v-if="showPassword"
        name="i-lucide-eye"
        class="size-4"
        aria-hidden="true"
      />
      <Icon v-else name="i-lucide-eye-off" class="size-4" aria-hidden="true" />
      <span class="sr-only">
        {{ showPassword ? "Show password" : "Hide password" }}
      </span>
    </Button>
  </div>
</template>
