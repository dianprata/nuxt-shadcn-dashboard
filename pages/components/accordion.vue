<script setup lang="ts">
import { ConfigProvider } from 'radix-vue'
import { cn } from '@/lib/utils'
import { buttonVariants } from '~/components/ui/button'

const breadcrumbLinks = ref([
  {
    title: 'Components',
    href: '#',
  },
  {
    title: 'Accordion',
    href: '/components/accordion',
  },
])

// Solving Hydration Nuxt
const useIdFunction = () => useId()
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
    <div class="flex flex-col gap-4">
      <BaseBreadcrumbCustom :links="breadcrumbLinks" />
      <div class="grid gap-2">
        <h2 class="text-3xl font-bold tracking-tight">
          Accordion
        </h2>
        <p class="text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a section of content.
        </p>
        <div class="flex gap-2">
          <NuxtLink
            to="https://www.radix-vue.com/components/accordion" external
            target="_blank"
            :class="cn(buttonVariants({ variant: 'outline', size: 'xs' }), 'text-xs')"
          >
            <span class="i-radix-icons-code mr-2" />
            Primitive API Reference
          </NuxtLink>
        </div>
      </div>
      <div class="flex gap-4">
        <Card class="flex-1">
          <CardHeader>
            <CardTitle>Basic</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem v-for="i in 4" :key="i" :value="`item-${i}`">
                <AccordionTrigger>Item {{ i }}</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut cum dolorem mollitia praesentium quis quo! Id officia, veniam.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        <Card class="flex-1">
          <CardHeader>
            <CardTitle>Expand Multiple</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" collapsible>
              <AccordionItem v-for="i in 4" :key="i" :value="`item-${i}`">
                <AccordionTrigger>Item {{ i }}</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at aut cum dolorem mollitia praesentium quis quo! Id officia, veniam.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  </ConfigProvider>
</template>

<style scoped>

</style>
