<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col gap-6">
    <form>
      <FieldGroup>
        <div class="flex flex-col items-center gap-1 text-center">
          <h1 class="text-2xl font-bold">
            Enter verification code
          </h1>
          <p class="text-muted-foreground text-sm text-balance">
            We sent a 6-digit code to your email.
          </p>
        </div>
        <Field>
          <FieldLabel html-for="otp" class="sr-only">
            Verification code
          </FieldLabel>
          <PinInput id="otp" class="justify-center">
            <PinInputGroup class="gap-1 *:data-[slot=pin-input-slot]:rounded-md *:data-[slot=pin-input-slot]:border">
              <template v-for="(id, index) in 6" :key="id">
                <PinInputSlot :index="index" />
                <template v-if="index !== 5">
                  <PinInputSeparator />
                </template>
              </template>
            </PinInputGroup>
          </PinInput>
          <FieldDescription class="text-center">
            Enter the 6-digit code sent to your email.
          </FieldDescription>
        </Field>
        <Button type="submit">
          Verify
        </Button>
        <FieldDescription class="text-center">
          Didn&apos;t receive the code? <a href="#">Resend</a>
        </FieldDescription>
      </FieldGroup>
    </form>
  </div>
</template>

<style>

</style>
