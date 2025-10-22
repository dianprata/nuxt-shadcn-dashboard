<script lang="ts" setup>
const value = ref<string[]>([])
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Enter verification code</CardTitle>
      <CardDescription>We sent a 6-digit code to your email.</CardDescription>
    </CardHeader>
    <CardContent>
      <form>
        <FieldGroup>
          <Field>
            <FieldLabel html-for="otp">
              Verification code
            </FieldLabel>
            <PinInput
              id="pin-input"
              v-model="value"
            >
              <PinInputGroup class="gap-2.5 *:data-[slot=pin-input-slot]:rounded-md *:data-[slot=pin-input-slot]:border">
                <PinInputSlot
                  v-for="(id, index) in 6"
                  :key="id"
                  :index="index"
                />
              </PinInputGroup>
            </PinInput>
            <FieldDescription>
              Enter the 6-digit code sent to your email.
            </FieldDescription>
          </Field>
          <FieldGroup>
            <Button type="submit">
              Verify
            </Button>
            <FieldDescription class="text-center">
              Didn&apos;t receive the code? <a href="#">Resend</a>
            </FieldDescription>
          </FieldGroup>
        </FieldGroup>
      </form>
    </CardContent>
  </Card>
</template>

<style>

</style>
