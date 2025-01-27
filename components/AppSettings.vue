<script setup lang="ts">
const isDesktop = useMediaQuery('(min-width: 768px)')

const isOpen = ref(false)
</script>

<template>
  <Sheet v-if="isDesktop" v-model:open="isOpen">
    <SheetTrigger as-child>
      <Button class="fixed top-1/2 z-50 pr-6 -right-3">
        <Icon name="i-lucide-settings" class="animate-spin-slow" size="18" />
      </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Theme Customizer</SheetTitle>
        <SheetDescription>Customize & Preview in Real Time</SheetDescription>
      </SheetHeader>
      <div class="flex flex-col gap-6">
        <ThemeCustomize class="mt-4" />
      </div>
    </SheetContent>
  </Sheet>

  <Drawer v-else v-model:open="isOpen">
    <DrawerTrigger as-child>
      <Button class="fixed top-1/2 z-50 pr-6 -right-3">
        <Icon name="i-lucide-settings" class="animate-spin-slow" size="18" />
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader class="text-center sm:text-center">
        <DrawerTitle>Theme Customizer</DrawerTitle>
        <DrawerDescription>Customize & Preview in Real Time</DrawerDescription>
      </DrawerHeader>
      <div class="mx-auto max-w-md w-full">
        <ThemeCustomize class="p-4 pt-0" />
      </div>
    </DrawerContent>
  </Drawer>
</template>

<style scoped>

</style>
