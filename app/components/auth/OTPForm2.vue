<script lang="ts" setup>
const value = ref<string[]>([])
</script>

<template>
  <div class="flex flex-col gap-6 md:min-h-[450px]">
    <Card class="flex-1 overflow-hidden p-0">
      <CardContent class="grid flex-1 p-0 md:grid-cols-2">
        <form class="flex flex-col items-center justify-center p-6 md:p-8">
          <FieldGroup>
            <Field class="items-center text-center">
              <h1 class="text-2xl font-bold">
                Enter verification code
              </h1>
              <p class="text-muted-foreground text-sm text-balance">
                We sent a 6-digit code to your email
              </p>
            </Field>
            <Field>
              <FieldLabel html-for="otp" class="sr-only">
                Verification code
              </FieldLabel>
              <PinInput
                id="otp"
                v-model="value"
                class="justify-center"
              >
                <PinInputGroup class="gap-2.5 *:data-[slot=pin-input-slot]:rounded-md *:data-[slot=pin-input-slot]:border">
                  <PinInputSlot
                    v-for="(id, index) in 6"
                    :key="id"
                    :index="index"
                  />
                </PinInputGroup>
              </PinInput>
              <FieldDescription class="text-center">
                Enter the 6-digit code sent to your email.
              </FieldDescription>
            </Field>
            <Field>
              <Button type="submit">
                Verify
              </Button>
              <FieldDescription class="text-center">
                Didn&apos;t receive the code? <a href="#">Resend</a>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
        <div class="bg-muted relative hidden md:block">
          <img
            src="/placeholder.svg"
            alt="Image"
            class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          >
        </div>
      </CardContent>
    </Card>
    <FieldDescription class="text-center">
      By clicking continue, you agree to our <a href="#">Terms of Service</a>
      and <a href="#">Privacy Policy</a>.
    </FieldDescription>
  </div>
</template>

<style>

</style>
