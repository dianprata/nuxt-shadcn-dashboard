<script setup>
definePageMeta({
  layout: 'blank',
})

const router = useRouter()
</script>

<template>
  <div class="h-svh">
    <div class="m-auto flex flex-col gap-2 h-full w-full justify-center items-center">
      <h1 class="text-[7rem] font-bold leading-tight">
        403
      </h1>
      <span class="font-medium">Access Forbidden</span>
      <p class="text-muted-foreground text-center">
        You don't have necessary permission <br>
        to view this resource.
      </p>
      <div class="mt-6 flex gap-4">
        <Button variant="outline" @click="router.back()">
          Go Back
        </Button>
        <Button @click="router.push('/')">
          Back to Home
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
