<script setup lang="ts">
import { cn } from '~/lib/utils'
import { buttonVariants } from '~/components/ui/button'

const breadcrumbLinks = ref([
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Components',
    href: '#',
  },
  {
    title: 'Avatar',
    href: '/components/avatar',
  },
])
</script>

<template>
  <div class="flex flex-col gap-4">
    <BaseBreadcrumbCustom :links="breadcrumbLinks" />
    <div class="grid gap-2">
      <h2 class="text-3xl font-bold tracking-tight">
        Avatar
      </h2>
      <p class="text-muted-foreground">
        An image element with a fallback for representing the user.
      </p>
      <div class="flex gap-2">
        <NuxtLink
          to="https://www.shadcn-vue.com/docs/components/avatar"
          external
          target="_blank"
          :class="cn(buttonVariants({ variant: 'outline', size: 'xs' }), 'text-xs')"
        >
          <span class="i-radix-icons-code mr-2" />
          Component Source
        </NuxtLink>
        <NuxtLink
          to="https://www.radix-vue.com/components/avatar"
          external
          target="_blank"
          :class="cn(buttonVariants({ variant: 'outline', size: 'xs' }), 'text-xs')"
        >
          Primitive API Reference
        </NuxtLink>
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
              <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
              <AvatarFallback>RV</AvatarFallback>
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
