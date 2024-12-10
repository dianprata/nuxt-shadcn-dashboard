<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { PanelLeft } from 'lucide-vue-next'
import { useSidebar } from './utils'
import Button from '@/components/ui/button/Button.vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { toggleSidebar } = useSidebar()

const { metaSymbol } = useShortcuts()
</script>

<template>
  <Tooltip>
    <TooltipTrigger as-child>
      <Button
        data-sidebar="trigger"
        variant="ghost"
        size="icon"
        :class="cn('h-4 w-4', props.class)"
        @click="toggleSidebar"
      >
        <PanelLeft />
        <span class="sr-only">Toggle Sidebar</span>
      </Button>
    </TooltipTrigger>
    <TooltipContent class="p-1 space-x-0.5">
      <BaseKbd>{{ metaSymbol }}</BaseKbd>
      <BaseKbd>B</BaseKbd>
    </TooltipContent>
  </Tooltip>
</template>
