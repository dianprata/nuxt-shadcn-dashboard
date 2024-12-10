<script setup lang="ts">
import type { NavLink } from '~/types/nav'
import type { SidebarMenuButtonVariants } from '~/components/ui/sidebar'

withDefaults(defineProps<{
  item: NavLink
  size?: SidebarMenuButtonVariants['size']
}>(), {
  size: 'default',
})
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <SidebarMenuButton as-child :tooltip="item.title" :size="size">
        <NuxtLink :to="item.link">
          <Icon :name="item.icon || ''" />
          <span>{{ item.title }}</span>
        </NuxtLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  </SidebarMenu>
</template>

<style scoped>

</style>
