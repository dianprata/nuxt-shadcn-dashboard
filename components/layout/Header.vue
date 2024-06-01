<script setup lang="ts">
import { CircleUser, Menu, Triangle } from 'lucide-vue-next'
import { navMenu, navMenuBottom } from '~/constants/menus'

function handleLogout() {
  navigateTo('/login')
}
</script>

<template>
  <header class="sticky top-0 z-10 h-57px flex items-center gap-4 border-b bg-background px-4 md:px-6">
    <div class="w-full flex items-center gap-4">
      <Sheet>
        <SheetTrigger as-child>
          <Button size="icon" variant="outline" class="sm:hidden">
            <Menu />
            <span class="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" class="flex flex-col p-4">
          <SheetHeader>
            <SheetTitle class="flex items-center gap-3">
              <Triangle class="size-5 fill-foreground" />
              Dashboard
            </SheetTitle>
          </SheetHeader>
          <nav class="grid gap-2">
            <template v-for="(nav, index) in navMenu">
              <div v-if="'heading' in nav" :key="`heading-${index}`" class="mx-3 mb-1 mt-3 leading-4.5">
                <span class="text-xs text-muted-foreground uppercase">{{ nav.heading }}</span>
              </div>
              <NuxtLink
                v-else
                :key="`link-${index}`"
                :to="nav.link"
                :class="[
                  { 'bg-muted': nav.link === $route.path },
                ]"
                class="flex items-center gap-4 rounded-lg px-3 py-2 text-foreground font-normal hover:bg-muted"
              >
                <component :is="nav.icon" />
                {{ nav.label }}
              </NuxtLink>
            </template>
          </nav>
          <div class="mt-auto">
            <nav class="grid gap-2">
              <template v-for="(nav, index) in navMenuBottom">
                <div v-if="'heading' in nav" :key="`heading-${index}`" class="mx-3 mb-1 mt-3 leading-4.5">
                  <span class="text-xs text-muted-foreground uppercase">{{ nav.heading }}</span>
                </div>
                <NuxtLink
                  v-else
                  :key="`link-${index}`"
                  :to="nav.link"
                  :class="[
                    { 'bg-muted': nav.link === $route.path },
                  ]"
                  class="flex items-center gap-4 rounded-lg px-3 py-2 text-foreground font-normal hover:bg-muted"
                >
                  <component :is="nav.icon" />
                  {{ nav.label }}
                </NuxtLink>
              </template>
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      <Search />

      <div class="ml-auto flex items-center gap-4">
        <DarkToggle />
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
              <DropdownMenuItem>New Team</DropdownMenuItem>
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
