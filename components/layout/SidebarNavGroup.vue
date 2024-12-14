<script setup lang="ts">
import type { NavGroup } from '~/types/nav'
import type { SidebarMenuButtonVariants } from '~/components/ui/sidebar'

withDefaults(defineProps<{
  item: NavGroup
  size?: SidebarMenuButtonVariants['size']
}>(), {
  size: 'default',
})

const openCollapsible = ref(false)
</script>

<template>
  <SidebarMenu>
    <Collapsible
      :key="item.title"
      v-model:open="openCollapsible"
      as-child
      class="group"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger as-child>
          <SidebarMenuButton :tooltip="item.title" :size="size">
            <Icon :name="item.icon || ''" />
            <span>{{ item.title }}</span>
            <span v-if="item.new" class="px-1.5 py-0.5 bg-#adfa1d rounded-md text-xs text-black leading-none no-underline group-hover:no-underline">
              New
            </span>
            <Icon name="i-lucide-chevron-right" class="ml-auto transition-transform duration-200 group-data-[state=open]:rotate-90" />
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
                  <span v-if="subItem.new" class="px-1.5 py-0.5 bg-#adfa1d rounded-md text-xs text-black leading-none no-underline group-hover:no-underline">
                    New
                  </span>
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
