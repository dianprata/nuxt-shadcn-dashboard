<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Button
        </h2>
        <p class="text-muted-foreground">
          Displays a button or a component that looks like a button.
        </p>
      </div>
      <div class="flex gap-2">
        <Badge variant="secondary" class="rounded-full" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/button"
            external
            target="_blank"
          >
            Component Source
            <Icon name="tabler:arrow-up-right" />
          </NuxtLink>
        </Badge>
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-3">
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Default</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px">
            <Button>Default</Button>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Secondary</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px">
            <Button variant="secondary">
              Secondary
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Outline</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px">
            <Button variant="outline">
              Outline
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Destructive</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px">
            <Button variant="destructive">
              Destructive
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Ghost</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px">
            <Button variant="ghost">
              Ghost
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Link</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px">
            <Button variant="link">
              Link
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full md:col-span-3">
        <CardHeader>
          <CardTitle>Size</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="w-full flex flex-wrap items-center justify-center gap-4 overflow-hidden sm:h-200px">
            <Button size="sm" variant="outline">
              Button xs
            </Button>
            <Button size="sm" variant="outline">
              Button sm
            </Button>
            <Button variant="outline">
              Button Default
            </Button>
            <Button size="lg" variant="outline">
              Button lg
            </Button>
            <Button size="icon" variant="outline">
              <Icon name="i-lucide-chevron-right" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
