<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Separator
        </h2>
        <p class="text-muted-foreground">
          Visually or semantically separates content.
        </p>
      </div>
      <div class="flex gap-2">
        <Badge variant="secondary" class="rounded-full" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/separator"
            external
            target="_blank"
          >
            Component Source
            <Icon name="tabler:arrow-up-right" />
          </NuxtLink>
        </Badge>
        <Badge variant="secondary" class="rounded-full" as-child>
          <NuxtLink
            to="https://www.reka-ui.com/docs/components/separator"
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
            <div>
              <div class="space-y-1">
                <h4 class="text-sm font-medium leading-none">
                  Radix Primitives
                </h4>
                <p class="text-sm text-muted-foreground">
                  An open-source UI component library.
                </p>
              </div>
              <Separator class="my-4" />
              <div class="h-5 flex items-center text-sm space-x-4">
                <div>Blog</div>
                <Separator orientation="vertical" />
                <div>Docs</div>
                <Separator orientation="vertical" />
                <div>Source</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
