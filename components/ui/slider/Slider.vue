<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<SliderRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<SliderRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SliderRoot
    :class="cn(
      'relative flex w-full touch-none select-none items-center',
      props.class,
    )"
    v-bind="forwarded"
  >
    <SliderTrack class="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderRange class="absolute h-full bg-primary" />
    </SliderTrack>
    <SliderThumb
      v-for="(_, key) in modelValue"
      :key="key"
      class="block h-5 w-5 border-2 border-primary rounded-full bg-background ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
    />
  </SliderRoot>
</template>
