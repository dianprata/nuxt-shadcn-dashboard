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
        500
      </h1>
      <span class="font-medium">Oops! Something went wrong :')</span>
      <p class="text-muted-foreground text-center">
        We apologize for the inconvenience. <br> Please try again later.
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
