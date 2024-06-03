<script setup lang="ts">
import { ConfigProvider } from 'radix-vue'
import type { NavGroup } from '~/types/nav'

defineProps<{
  item: NavGroup
}>()

const { isOpen } = storeToRefs(useNavbar())

const isOpenCollapsible = ref(false)

// Solving Hydration Nuxt
const useIdFunction = () => useId()
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger as-child>
          <Collapsible
            v-model:open="isOpenCollapsible"
            class="w-full space-y-1"
          >
            <CollapsibleTrigger as-child>
              <Button
                variant="ghost"
                size="icon"
                class="w-full gap-3 rounded-lg px-4 font-normal"
                :class="[
                  cn('justify-center lg:justify-start', isOpen ? 'lg:justify-start' : 'lg:justify-center'),
                ]"
                :aria-label="item.title"
              >
                <Icon v-if="item.icon" :name="item.icon" class="size-5" />
                <span v-show="isOpen" class="hidden lg:inline-block">
                  {{ item.title }}
                </span>
                <Icon
                  v-if="isOpen"
                  :name="isOpenCollapsible ? 'radix-icons:chevron-up' : 'radix-icons:chevron-down'"
                  class="ml-auto h-4 w-4 !hidden !lg:inline-block"
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent class="space-y-2">
              <NuxtLink v-for="(nav, index) in item.children" :key="index" :to="nav.link">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger as-child>
                      <Button
                        variant="ghost"
                        size="icon"
                        class="w-full gap-4 rounded-lg px-5 font-normal"
                        :class="[
                          { 'bg-muted': nav.link === $route.path },
                          cn('justify-center lg:justify-start', isOpen ? 'lg:justify-start' : 'lg:justify-center'),
                        ]"
                        :aria-label="nav.title"
                      >
                        <Icon v-if="nav.icon" :name="nav.icon" class="size-3.5" />
                        <span v-if="isOpen" class="hidden lg:inline-block">
                          {{ nav.title }}
                        </span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right" :side-offset="5">
                      {{ nav.title }}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </NuxtLink>
            </CollapsibleContent>
          </Collapsible>
        </TooltipTrigger>
        <TooltipContent v-if="!isOpenCollapsible" side="right" :side-offset="5">
          {{ item.title }}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </ConfigProvider>
</template>

<style scoped>

</style>
