<script setup lang="ts">
import type { TagsInputItemDeleteProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { TagsInputItemDelete, useForwardProps } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<TagsInputItemDeleteProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItemDelete v-bind="forwardedProps" :class="cn('flex rounded bg-transparent mr-1', props.class)">
    <slot>
      <Icon name="i-radix-icons-cross-2" class="h-4 w-4" />
    </slot>
  </TagsInputItemDelete>
</template>
