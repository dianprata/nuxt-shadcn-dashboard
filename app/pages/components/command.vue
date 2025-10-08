<script setup lang="ts">
const open = ref(false)

const { metaSymbol } = useShortcuts()

defineShortcuts({
  Meta_J: () => handleOpenChange(),
})

function handleOpenChange() {
  open.value = !open.value
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Command
        </h2>
        <p class="text-muted-foreground">
          Fast, composable, unstyled command menu.
        </p>
      </div>
      <div class="flex gap-2">
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/command"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-2" />
            Component Source
          </NuxtLink>
        </Button>
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://www.radix-vue.com/components/combobox"
            external
            target="_blank"
          >
            Primitive API Reference
          </NuxtLink>
        </Button>
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px">
            <Command class="max-w-[450px] border rounded-lg shadow-md">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem value="Calendar">
                    <Icon name="radix-icons:calendar" class="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem value="Search Emoji">
                    <Icon name="radix-icons:face" class="mr-2 h-4 w-4" />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem value="Launch">
                    <Icon name="radix-icons:rocket" class="mr-2 h-4 w-4" />
                    <span>Launch</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem value="Profile">
                    <Icon name="radix-icons:person" class="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="Mail">
                    <Icon name="radix-icons:envelope-closed" class="mr-2 h-4 w-4" />
                    <span>Mail</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="Settings">
                    <Icon name="radix-icons:gear" class="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>With Dialog</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px">
            <div>
              <div class="flex flex-col items-center gap-4">
                <p class="text-sm text-muted-foreground">
                  Press
                  <BaseKbd>{{ metaSymbol }}J</BaseKbd>
                </p>
                <span class="text-sm text-muted-foreground">or</span>
                <Button size="sm" @click="handleOpenChange">
                  Click Here
                </Button>
              </div>
              <CommandDialog v-model:open="open">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem value="calendar">
                      Calendar
                    </CommandItem>
                    <CommandItem value="search-emoji">
                      Search Emoji
                    </CommandItem>
                    <CommandItem value="calculator">
                      Calculator
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem value="profile">
                      Profile
                    </CommandItem>
                    <CommandItem value="billing">
                      Billing
                    </CommandItem>
                    <CommandItem value="settings">
                      Settings
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </CommandDialog>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
