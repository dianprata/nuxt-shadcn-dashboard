<script setup lang="ts">
import type { PrimitiveProps } from 'radix-vue'
import { Primitive, useForwardProps } from 'radix-vue'

const props = defineProps<PrimitiveProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
  <Primitive v-bind="forwardedProps">
    <slot>
      <Icon name="i-radix-icons-dash" />
    </slot>
  </primitive>
</template>
