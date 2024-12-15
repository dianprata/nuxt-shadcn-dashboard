<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Accordion
        </h2>
        <p class="text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a section of content.
        </p>
      </div>
      <div class="flex gap-2">
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/accordion"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-2" />
            Component Source
          </NuxtLink>
        </Button>
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://www.radix-vue.com/components/accordion"
            external
            target="_blank"
          >
            Primitive API Reference
          </NuxtLink>
        </Button>
      </div>
    </div>
    <div class="flex flex-col gap-4 md:flex-row">
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
</template>

<style scoped>

</style>
