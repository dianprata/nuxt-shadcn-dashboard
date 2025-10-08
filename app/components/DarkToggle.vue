<script setup lang="ts">
const color = useColorMode()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="icon" title="Toggle Color Scheme" aria-label="button dark toggle">
        <div class="i-ph-sun-dim-duotone dark:i-ph-moon-stars-duotone" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuGroup>
        <DropdownMenuItem
          flex="~ gap-2"
          :class="{ 'bg-accent text-accent-foreground': color.preference === 'light' }"
          @click="color.preference = 'light'"
        >
          <Icon name="i-ph-sun-dim-duotone" size="16" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          flex="~ gap-2"
          :class="{ 'bg-accent text-accent-foreground': color.preference === 'dark' }"
          @click="color.preference = 'dark'"
        >
          <Icon name="i-ph-moon-stars-duotone" size="16" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          flex="~ gap-2"
          :class="{ 'bg-accent text-accent-foreground': color.preference === 'system' }"
          @click="color.preference = 'system'"
        >
          <Icon name="i-lucide-monitor" size="16" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
