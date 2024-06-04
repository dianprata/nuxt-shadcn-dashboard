<script setup lang="ts">
import { Primitive, type PrimitiveProps, useForwardProps } from 'radix-vue'

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
