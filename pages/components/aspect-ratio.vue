<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Aspect Ratio
        </h2>
        <p class="text-muted-foreground">
          Displays content within a desired ratio.
        </p>
      </div>
      <div class="flex gap-2">
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/aspect-ratio"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-2" />
            Component Source
          </NuxtLink>
        </Button>
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://www.radix-vue.com/components/aspect-ratio"
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
          <CardTitle>Ratio 16/9</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="mx-auto w-full flex items-center justify-center overflow-hidden rounded-lg md:w-300px">
            <AspectRatio :ratio="16 / 9">
              <img
                class="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                alt="Landscape photograph by Tobias Tullius"
              >
            </AspectRatio>
          </div>
        </CardContent>
      </Card>
      <Card class="flex-1">
        <CardHeader>
          <CardTitle>Ratio 1/1</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="mx-auto w-full flex items-center justify-center overflow-hidden rounded-lg md:w-300px">
            <AspectRatio :ratio="1">
              <img
                class="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                alt="Landscape photograph by Tobias Tullius"
              >
            </AspectRatio>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
