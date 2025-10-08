<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Hover Card
        </h2>
        <p class="text-muted-foreground">
          For sighted users to preview content available behind a link.
        </p>
      </div>
      <div class="flex gap-2">
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/hover-card"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-2" />
            Component Source
          </NuxtLink>
        </Button>
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://www.radix-vue.com/components/hover-card"
            external
            target="_blank"
          >
            Primitive API Reference
          </NuxtLink>
        </Button>
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px">
            <HoverCard>
              <HoverCardTrigger as-child>
                <Button variant="link">
                  @vuejs
                </Button>
              </HoverCardTrigger>
              <HoverCardContent class="w-80">
                <div class="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/vuejs.png" />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div class="space-y-1">
                    <h4 class="text-sm font-semibold">
                      @vuejs
                    </h4>
                    <p class="text-sm">
                      Progressive JavaScript framework for building modern web interfaces.
                    </p>
                    <div class="flex items-center pt-2">
                      <Icon name="radix-icons:calendar" class="mr-2 h-4 w-4 opacity-70" />
                      <span class="text-xs text-muted-foreground">
                        Joined January 2014
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
