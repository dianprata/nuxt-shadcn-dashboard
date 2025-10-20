<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Avatar
        </h2>
        <p class="text-muted-foreground">
          An image element with a fallback for representing the user.
        </p>
      </div>
      <div class="flex gap-2">
        <Badge variant="secondary" class="rounded-full" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/avatar"
            external
            target="_blank"
          >
            Component Source
            <Icon name="tabler:arrow-up-right" />
          </NuxtLink>
        </Badge>
        <Badge variant="secondary" class="rounded-full" as-child>
          <NuxtLink
            to="https://www.reka-ui.com/docs/components/avatar"
            external
            target="_blank"
          >
            API Reference
            <Icon name="tabler:arrow-up-right" />
          </NuxtLink>
        </Badge>
      </div>
    </div>
    <div class="flex flex-col gap-4 md:flex-row">
      <Card class="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="h-100px w-full flex items-center justify-center gap-4 overflow-hidden sm:h-200px">
            <Avatar>
              <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
              <AvatarFallback>UV</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80" alt="Colm Tuite" />
              <AvatarFallback>CT</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>DP</AvatarFallback>
            </Avatar>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
