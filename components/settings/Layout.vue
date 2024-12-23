<script setup lang="ts">

</script>

<template>
  <div class="pb-16 space-y-6">
    <div class="space-y-0.5">
      <h2 class="text-2xl font-bold tracking-tight">
        Settings
      </h2>
      <p class="text-muted-foreground">
        Manage your account settings and set e-mail preferences.
      </p>
    </div>
    <Separator class="my-6" />
    <div class="flex flex-col lg:flex-row space-y-8 lg:space-x-12 lg:space-y-0">
      <ScrollArea class="lg:w-1/6">
        <SettingsSidebarNav />
      </ScrollArea>
      <div class="flex-1 lg:max-w-2xl">
        <div class="space-y-6">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
