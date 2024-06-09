<script setup lang="ts">
import { CircleUser, Menu, Triangle } from 'lucide-vue-next'
import { navMenu, navMenuBottom } from '~/constants/menus'
import type { NavGroup, NavLink, NavSectionTitle } from '~/types/nav'

function handleLogout() {
  navigateTo('/login')
}

function resolveNavItemComponent(item: NavLink | NavGroup | NavSectionTitle) {
  if ('heading' in item)
    return resolveComponent('LayoutNavHeadingMobile')
  else if ('children' in item)
    return resolveComponent('LayoutNavGroupMobile')

  return resolveComponent('LayoutNavLinkMobile')
}

const color = useColorMode()
</script>

<template>
  <header class="sticky top-0 z-10 h-53px flex items-center gap-4 border-b bg-background px-4 md:px-6">
    <div class="w-full flex items-center gap-4">
      <Sheet>
        <SheetTrigger as-child>
          <Button size="icon" variant="outline" class="sm:hidden">
            <Menu />
            <span class="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent aria-describedby="radix-vue-dialog-description-1" side="left" class="flex flex-col p-4">
          <SheetHeader>
            <SheetTitle class="flex items-center gap-3">
              <Triangle class="size-5 fill-foreground" />
              Dashboard
            </SheetTitle>
          </SheetHeader>
          <ScrollArea class="w-full">
            <nav class="grid gap-2">
              <component :is="resolveNavItemComponent(item)" v-for="(item, index) in navMenu" :key="index" :item="item" />
            </nav>
          </ScrollArea>
          <div class="mt-auto">
            <nav class="grid gap-2">
              <component :is="resolveNavItemComponent(item)" v-for="(item, index) in navMenuBottom" :key="index" :item="item" />
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      <Search />

      <div class="ml-auto flex items-center gap-4">
        <ThemePopover />
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button id="radix-vue-dropdown-menu-trigger-1" variant="secondary" size="icon" class="rounded-full">
              <CircleUser class="h-5 w-5" />
              <span class="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-56" align="end">
            <DropdownMenuLabel class="flex font-normal">
              <div class="flex flex-col space-y-1">
                <p class="text-sm font-medium leading-none">
                  John Doe
                </p>
                <p class="text-xs text-muted-foreground leading-none">
                  demo@gmail.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <span>Theme</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem @click="color.preference = 'light'">
                      <Icon name="i-ph-sun-dim-duotone" size="16" />
                      <span class="ml-2">Light</span>
                      <Icon v-if="color.preference === 'light'" name="i-radix-icons-check" size="16" class="ml-auto" />
                    </DropdownMenuItem>
                    <DropdownMenuItem @click="color.preference = 'dark'">
                      <Icon name="i-ph-moon-stars-duotone" size="16" />
                      <span class="ml-2">Dark</span>
                      <Icon v-if="color.preference === 'dark'" name="i-radix-icons-check" size="16" class="ml-auto" />
                    </DropdownMenuItem>
                    <DropdownMenuItem @click="color.preference = 'system'">
                      <Icon name="i-lucide-monitor" size="16" />
                      <span class="ml-2">System</span>
                      <Icon v-if="color.preference === 'system'" name="i-radix-icons-check" size="16" class="ml-auto" />
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="handleLogout">
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
