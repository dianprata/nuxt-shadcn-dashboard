<script setup lang="ts">
import { CircleUser, Menu, Search, Triangle } from 'lucide-vue-next'
import { navMenu, navMenuBottom } from '~/constants/data'

function handleLogout() {
  navigateTo('/login')
}

const store = useNavbar()

const { showSidebar } = storeToRefs(store)
</script>

<template>
  <header class="sticky top-0 h-57px flex items-center gap-4 border-b bg-background px-4 md:px-6">
    <div class="w-full flex items-center gap-4">
      <Sheet v-if="!showSidebar">
        <SheetTrigger as-child>
          <Button size="icon" variant="outline">
            <Menu />
            <span class="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" class="flex flex-col">
          <SheetHeader>
            <SheetTitle class="flex items-center gap-3">
              <Triangle class="size-5 fill-foreground" />
              Dashboard
            </SheetTitle>
          </SheetHeader>
          <nav class="grid gap-2">
            <NuxtLink
              v-for="(nav, index) in navMenu" :key="index"
              :to="nav.link"
              :class="[
                { 'bg-muted text-foreground': nav.link === $route.path },
                { 'text-muted-foreground': nav.link !== $route.path },
              ]"
              class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 font-normal hover:text-foreground"
            >
              <component :is="nav.icon" />
              {{ nav.label }}
            </NuxtLink>
          </nav>
          <div class="mt-auto">
            <nav class="grid gap-2">
              <NuxtLink
                v-for="(nav, index) in navMenuBottom" :key="index"
                :to="nav.link"
                :class="[
                  { 'bg-muted text-foreground': nav.link === $route.path },
                  { 'text-muted-foreground': nav.link !== $route.path },
                ]"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 font-normal hover:text-foreground"
              >
                <component :is="nav.icon" />
                {{ nav.label }}
              </NuxtLink>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
      <form v-else class="flex-1">
        <div class="relative">
          <Search class="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            class="w-full pl-8 sm:w-[300px]"
          />
        </div>
      </form>
      <div class="ml-auto flex items-center gap-4">
        <DarkToggle />
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="secondary" size="icon" class="rounded-full">
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
