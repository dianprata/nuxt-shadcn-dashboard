<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Links {
  title: string
  href: string
}
withDefaults(defineProps<{
  links: Links[]
  separator?: string
}>(), {
  separator: 'lucide:chevron-right',
})
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <template v-for="(link, index) in links" :key="index">
        <BreadcrumbItem>
          <BreadcrumbLink :href="link.href">
            {{ link.title }}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator v-if="index < links.length - 1">
          <Icon :icon="separator" />
        </BreadcrumbSeparator>
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>

<style scoped>

</style>
