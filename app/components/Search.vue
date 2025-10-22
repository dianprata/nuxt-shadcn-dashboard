<script setup lang="ts">
import type { NavGroup, NavMenu } from '~/types/nav'
import { navMenu } from '@/constants/menus'

const { metaSymbol } = useShortcuts()

const openCommand = ref(false)
const router = useRouter()

defineShortcuts({
  Meta_K: () => openCommand.value = true,
})

const componentsNav = computed<NavGroup | undefined>(() => {
  return navMenu
    .flatMap((nav: NavMenu) => nav.items)
    // @ts-expect-error - We know that the title is unique
    .find((item: NavGroup) => item.title === 'Components')
})

function handleSelectLink(link: string) {
  router.push(link)
  openCommand.value = false
}
</script>

<template>
  <SidebarMenuButton as-child tooltip="Search">
    <Button variant="outline" size="sm" class="text-xs" @click="openCommand = !openCommand">
      <Icon name="i-lucide-search" />
      <span class="font-normal group-data-[collapsible=icon]:hidden">Search documentation</span>
      <div class="ml-auto flex items-center space-x-0.5 group-data-[collapsible=icon]:hidden">
        <Kbd>{{ metaSymbol }}</Kbd>
        <Kbd>K</Kbd>
      </div>
    </Button>
  </SidebarMenuButton>

  <CommandDialog v-model:open="openCommand">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem value="Home" @select="handleSelectLink('/')">
          Home
          <CommandShortcut>
            <Kbd>G</Kbd>
            <Kbd>H</Kbd>
          </CommandShortcut>
        </CommandItem>
        <CommandItem value="email" @select="handleSelectLink('/email')">
          Email
          <CommandShortcut>
            <Kbd>G</Kbd>
            <Kbd>E</Kbd>
          </CommandShortcut>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Components">
        <CommandItem
          v-for="nav in componentsNav?.children"
          :key="nav.title"
          :value="nav.title"
          class="gap-2"
          @select="handleSelectLink(nav.link)"
        >
          <Icon name="i-radix-icons-circle" />
          {{ nav.title }}
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
</template>

<style scoped>

</style>
