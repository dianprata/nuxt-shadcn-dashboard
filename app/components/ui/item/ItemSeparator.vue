<script setup lang="ts">
import type { SeparatorProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const props = defineProps<
  SeparatorProps & { class?: HTMLAttributes['class'] }
>()
</script>

<template>
  <Separator
    data-slot="item-separator"
    orientation="horizontal"
    :class="cn('my-0', props.class)"
  />
</template>
