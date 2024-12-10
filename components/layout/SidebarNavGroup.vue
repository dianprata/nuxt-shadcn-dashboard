<script setup lang="ts">
import type { NavGroup } from '~/types/nav'
import type { SidebarMenuButtonVariants } from '~/components/ui/sidebar'

withDefaults(defineProps<{
  item: NavGroup
  size?: SidebarMenuButtonVariants['size']
}>(), {
  size: 'default',
})
</script>

<template>
  <SidebarMenu>
    <Collapsible
      as-child
      class="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger as-child>
          <SidebarMenuButton :tooltip="item.title" :size="size">
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
</template>

<style scoped>

</style>
