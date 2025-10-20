<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Collapsible
        </h2>
        <p class="text-muted-foreground">
          An interactive component which expands/collapses a panel.
        </p>
      </div>
      <div class="flex gap-2">
        <Badge variant="secondary" class="rounded-full" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/collapsible"
            external
            target="_blank"
          >
            Component Source
            <Icon name="tabler:arrow-up-right" />
          </NuxtLink>
        </Badge>
        <Badge variant="secondary" class="rounded-full" as-child>
          <NuxtLink
            to="https://www.reka-ui.com/docs/components/collapsible"
            external
            target="_blank"
          >
            API Reference
            <Icon name="tabler:arrow-up-right" />
          </NuxtLink>
        </Badge>
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px">
            <Collapsible
              class="w-full md:w-[350px] space-y-2"
            >
              <CollapsibleTrigger as-child>
                <div class="flex cursor-pointer items-center justify-between px-4 space-x-4">
                  <h4 class="text-sm font-semibold">
                    @peduarte starred 3 repositories
                  </h4>
                  <Button variant="ghost" size="sm" class="w-9 p-0">
                    <Icon name="radix-icons:caret-sort" class="h-4 w-4" />
                    <span class="sr-only">Toggle</span>
                  </Button>
                </div>
              </CollapsibleTrigger>
              <div class="border rounded-md px-4 py-3 text-sm font-mono">
                @radix-ui/primitives
              </div>
              <CollapsibleContent class="space-y-2">
                <div class="border rounded-md px-4 py-3 text-sm font-mono">
                  @radix-ui/colors
                </div>
                <div class="border rounded-md px-4 py-3 text-sm font-mono">
                  @stitches/react
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
