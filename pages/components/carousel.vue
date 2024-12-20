<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Carousel
        </h2>
        <p class="text-muted-foreground">
          A carousel with motion and swipe built using Embla.
        </p>
      </div>
      <div class="flex gap-2">
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/carousel"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-2" />
            Component Source
          </NuxtLink>
        </Button>
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://www.radix-vue.com/components/carousel"
            external
            target="_blank"
          >
            Primitive API Reference
          </NuxtLink>
        </Button>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="w-full flex items-center justify-center gap-4">
            <Carousel class="relative max-w-xs w-full">
              <CarouselContent>
                <CarouselItem v-for="(_, index) in 5" :key="index">
                  <div class="p-1">
                    <Card>
                      <CardContent class="aspect-square flex items-center justify-center p-6">
                        <span class="text-4xl font-semibold">{{ index + 1 }}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="min-h-200px w-full flex items-center justify-center gap-4">
            <Carousel
              class="relative max-w-xs w-full"
              :opts="{
                align: 'start',
              }"
            >
              <CarouselContent>
                <CarouselItem v-for="(_, index) in 5" :key="index" class="lg:basis-1/3 md:basis-1/2">
                  <div class="p-1">
                    <Card>
                      <CardContent class="aspect-square flex items-center justify-center p-6">
                        <span class="text-2xl font-semibold">{{ index + 1 }}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Orientation Vertical</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="min-h-350px w-full flex items-center justify-center gap-4">
            <Carousel
              orientation="vertical"
              class="relative max-w-xs w-full"
              :opts="{
                align: 'start',
              }"
            >
              <CarouselContent class="h-150px -mt-1 md:h-200px">
                <CarouselItem v-for="(_, index) in 5" :key="index" class="p-1 md:basis-1/2">
                  <div class="p-1">
                    <Card>
                      <CardContent class="flex items-center justify-center p-6">
                        <span class="text-2xl font-semibold">{{ index + 1 }}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
