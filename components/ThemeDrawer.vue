<script setup lang="ts">
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <Button variant="ghost" size="icon">
        <Icon name="i-lucide-paintbrush" size="16" />
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <div class="mx-auto max-w-sm w-full">
        <ThemeCustomize class="p-4" />
      </div>
    </DrawerContent>
  </Drawer>
</template>

<style scoped>

</style>
