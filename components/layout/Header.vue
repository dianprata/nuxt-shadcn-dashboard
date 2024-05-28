<script setup lang="ts">
import { CircleUser, Search } from 'lucide-vue-next'

function handleLogout() {
  navigateTo('/login')
}
</script>

<template>
  <header class="sticky top-0 h-57px flex items-center gap-4 border-b bg-background px-6">
    <div class="w-full flex items-center gap-4">
      <form class="flex-1">
        <div class="relative">
          <Search class="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
          <UIInput
            type="search"
            placeholder="Search products..."
            class="w-full pl-8 sm:w-[300px]"
          />
        </div>
      </form>
      <div class="ml-auto flex items-center gap-4">
        <DarkToggle />
        <UIDropdownMenu>
          <UIDropdownMenuTrigger as-child>
            <UIButton variant="secondary" size="icon" class="rounded-full">
              <CircleUser class="h-5 w-5" />
              <span class="sr-only">Toggle user menu</span>
            </UIButton>
          </UIDropdownMenuTrigger>
          <UIDropdownMenuContent class="w-56" align="end">
            <UIDropdownMenuLabel class="flex font-normal">
              <div class="flex flex-col space-y-1">
                <p class="text-sm font-medium leading-none">
                  John Doe
                </p>
                <p class="text-xs text-muted-foreground leading-none">
                  demo@gmail.com
                </p>
              </div>
            </UIDropdownMenuLabel>
            <UIDropdownMenuSeparator />
            <UIDropdownMenuGroup>
              <UIDropdownMenuItem>
                Profile
                <UIDropdownMenuShortcut>⇧⌘P</UIDropdownMenuShortcut>
              </UIDropdownMenuItem>
              <UIDropdownMenuItem>
                Billing
                <UIDropdownMenuShortcut>⌘B</UIDropdownMenuShortcut>
              </UIDropdownMenuItem>
              <UIDropdownMenuItem>
                Settings
                <UIDropdownMenuShortcut>⌘S</UIDropdownMenuShortcut>
              </UIDropdownMenuItem>
              <UIDropdownMenuItem>New Team</UIDropdownMenuItem>
            </UIDropdownMenuGroup>
            <UIDropdownMenuSeparator />
            <UIDropdownMenuItem @click="handleLogout">
              Log out
              <UIDropdownMenuShortcut>⇧⌘Q</UIDropdownMenuShortcut>
            </UIDropdownMenuItem>
          </UIDropdownMenuContent>
        </UIDropdownMenu>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
