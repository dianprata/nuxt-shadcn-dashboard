<script lang="ts" setup>
import type { CalendarPrevProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { CalendarPrev, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { buttonVariants } from '../button'

const props = defineProps<CalendarPrevProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarPrev
    :class="cn(
      buttonVariants({ variant: 'outline' }),
      'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot>
      <Icon name="radix-icons:chevron-left" class="h-4 w-4" />
    </slot>
  </CalendarPrev>
</template>
