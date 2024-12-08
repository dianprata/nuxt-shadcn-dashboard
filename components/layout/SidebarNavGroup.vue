<script setup lang="ts">
import type { NavGroup } from '~/types/nav'

defineProps<{
  item: NavGroup
}>()
</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel>Platform</SidebarGroupLabel>
    <SidebarMenu>
      <Collapsible
        as-child
        class="group/collapsible"
      >
        <SidebarMenuItem>
          <CollapsibleTrigger as-child>
            <SidebarMenuButton :tooltip="item.title">
              <Icon :name="item.icon || ''" />
              <span>{{ item.title }}</span>
              <Icon name="i-lucide-chevron-right" class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              <SidebarMenuSubItem
                v-for="subItem in item.children"
                :key="subItem.title"
              >
                <SidebarMenuSubButton as-child>
                  <NuxtLink :to="subItem.link">
                    <span>{{ subItem.title }}</span>
                  </NuxtLink>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  </SidebarGroup>
</template>

<style scoped>

</style>
