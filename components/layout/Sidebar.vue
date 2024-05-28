<script setup lang="ts">
import { Triangle } from 'lucide-vue-next'
import { navMenu, navMenuBottom } from '~/constants/data'

const store = useNavbar()
const { toggle } = store

const { isOpen } = storeToRefs(store)

const { width } = useWindowSize()

watchEffect(() => {
  if (width.value < 768 && isOpen.value)
    toggle()
})
</script>

<template>
  <aside class="inset-y fixed left-0 z-20 h-full w-20 flex flex-col items-center border-r transition-width duration-300" :class="isOpen ? 'w-64' : 'w-20'">
    <div class="relative border-b px-3 py-2 text-center" :class="isOpen ? 'w-64' : 'w-20'">
      <div class="flex items-center gap-3" :class="isOpen ? 'justify-start' : 'justify-center'">
        <UIButton variant="outline" size="icon" aria-label="Home">
          <Triangle class="size-5 fill-foreground" />
        </UIButton>
        <span v-if="isOpen" class="text-xl font-semibold">Dashboard</span>
      </div>

      <UIButton variant="outline" class="absolute top-4 size-6 rounded-full p-0 -right-3" @click="toggle">
        <div :class="isOpen ? 'i-radix-icons-chevron-left' : 'i-radix-icons-chevron-right'" />
      </UIButton>
    </div>
    <nav class="grid w-full gap-1 p-2">
      <UITooltipProvider v-for="(nav, index) in navMenu" :key="index">
        <UITooltip>
          <UITooltipTrigger as-child>
            <NuxtLink :to="nav.link">
              <UIButton
                variant="ghost"
                size="icon"
                class="w-full rounded-lg px-4 font-normal"
                :class="[{ 'bg-muted': nav.link === $route.path }, isOpen ? 'justify-start' : 'justify-center']"
                :aria-label="nav.ariaLabel"
              >
                <component :is="nav.icon" class="size-5" />
                <span v-if="isOpen" class="ml-3">
                  {{ nav.label }}
                </span>
              </UIButton>
            </NuxtLink>
          </UITooltipTrigger>
          <UITooltipContent side="right" :side-offset="5">
            {{ nav.label }}
          </UITooltipContent>
        </UITooltip>
      </UITooltipProvider>
    </nav>
    <nav class="grid mt-auto w-full gap-1 p-2">
      <UITooltipProvider v-for="(nav, index) in navMenuBottom" :key="index">
        <UITooltip>
          <UITooltipTrigger as-child>
            <NuxtLink :to="nav.link">
              <UIButton
                variant="ghost"
                size="icon"
                class="w-full rounded-lg px-4 font-normal"
                :class="[{ 'bg-muted': nav.link === $route.path }, isOpen ? 'justify-start' : 'justify-center']"
                :aria-label="nav.ariaLabel"
              >
                <component :is="nav.icon" class="size-5" />
                <span v-if="isOpen" class="ml-3">
                  {{ nav.label }}
                </span>
              </UIButton>
            </NuxtLink>
          </UITooltipTrigger>
          <UITooltipContent side="right" :side-offset="5">
            {{ nav.label }}
          </UITooltipContent>
        </UITooltip>
      </UITooltipProvider>
    </nav>
  </aside>
</template>

<style scoped>

</style>
