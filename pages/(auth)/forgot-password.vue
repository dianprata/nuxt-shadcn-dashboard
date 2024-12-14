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
          <Icon name="i-lucide-gallery-vertical-end" class-name="size-4" />
        </div>
        Acme Inc.
      </NuxtLink>
      <Card>
        <CardHeader class="text-center">
          <CardTitle class="text-xl">
            Forgot Password
          </CardTitle>
          <CardDescription>
            Enter your email below to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="mx-auto grid gap-6 max-w-sm">
            <AuthForgotPassword />
            <p class="text-sm text-muted-foreground text-center">
              Already have an account?
              <NuxtLink
                to="/login"
                class="underline underline-offset-4 hover:text-primary"
              >
                Login
              </NuxtLink>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
