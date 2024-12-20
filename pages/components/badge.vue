<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Badge
        </h2>
        <p class="text-muted-foreground">
          Displays a badge or a component that looks like a badge.
        </p>
      </div>
      <div class="flex gap-2">
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/badge"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-2" />
            Component Source
          </NuxtLink>
        </Button>
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Default</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px">
            <Badge>Badge</Badge>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Secondary</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px">
            <Badge variant="secondary">
              Badge
            </Badge>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Outline</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px">
            <Badge variant="outline">
              Badge
            </Badge>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Destructive</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px">
            <Badge variant="destructive">
              Badge
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
