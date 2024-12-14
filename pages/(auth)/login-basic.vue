<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <div class="p-6 bg-muted flex flex-col gap-6 justify-center items-center min-h-svh md:p-10">
    <div class="flex flex-col gap-6 max-w-sm w-full">
      <NuxtLink to="#" class="font-medium flex gap-2 items-center self-center">
        <div class="bg-primary rounded-md text-primary-foreground flex h-6 w-6 justify-center items-center">
          <Icon name="i-lucide-gallery-vertical-end" class="size-4" />
        </div>
        Acme Inc.
      </NuxtLink>
      <div class="flex flex-col gap-6">
        <Card>
          <CardHeader class="text-center">
            <CardTitle class="text-xl">
              Welcome back
            </CardTitle>
            <CardDescription>
              Login with your Apple or Google account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AuthSignIn />
          </CardContent>
        </Card>
        <div class="text-xs text-muted-foreground text-center text-balance [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
          By clicking continue, you agree to our <a href="#">Terms of Service</a>
          and <a href="#">Privacy Policy</a>.
        </div>
      </div>
    </div>
  </div>
</template>
