<script setup lang="ts">
const openCommand = ref(false)

defineShortcuts({
  Meta_K: () => openCommand.value = !openCommand.value,
})
</script>

<template>
  <Button variant="outline" size="sm" class="w-full flex-1 justify-between gap-1 font-normal md:w-56 md:flex-initial md:gap-3" @click="openCommand = !openCommand">
    <span class="hidden sm:inline-flex">Search documentation</span>
    <span class="sm:hidden">Search...</span>
    <kbd class="pointer-events-none hidden h-5 select-none items-center gap-1 border rounded bg-muted px-1.5 text-[10px] text-muted-foreground font-medium font-mono opacity-100 sm:inline-flex">
      <span class="text-xs">⌘</span>K
    </kbd>
  </Button>

  <CommandDialog v-model:open="openCommand">
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
</template>

<style scoped>

</style>
