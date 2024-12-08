<script setup lang="ts">
import type { NavLink } from '~/types/nav'

defineProps<{
  item: NavLink
}>()
</script>

<template>
  <SidebarGroup>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton as-child :tooltip="item.title">
          <NuxtLink :to="item.link">
            <Icon :name="item.icon || ''" />
            <span>{{ item.title }}</span>
          </NuxtLink>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>

<style scoped>

</style>
