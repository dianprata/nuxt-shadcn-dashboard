<script setup lang="ts">
const stepsBasic = [{
  step: 1,
  title: 'Address',
  description: 'Add your address here',
  icon: 'i-lucide-book-user',
}, {
  step: 2,
  title: 'Shipping',
  description: 'Set your preferred shipping method',
  icon: 'i-lucide-truck',
}, {
  step: 3,
  title: 'Payment',
  description: 'Add any payment information you have',
  icon: 'i-lucide-credit-card',
}, {
  step: 4,
  title: 'Checkout',
  description: 'Confirm your order',
  icon: 'i-lucide-check',
}]

const steps = [
  {
    step: 1,
    title: 'Your details',
    description: 'Provide your name and email',
  },
  {
    step: 2,
    title: 'Company details',
    description: 'A few details about your company',
  },
  {
    step: 3,
    title: 'Invite your team',
    description: 'Start collaborating with your team',
  },
]
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Stepper
        </h2>
        <p class="text-muted-foreground">
          A set of steps that are used to indicate progress through a multi-step process.
        </p>
      </div>
      <div class="flex gap-2">
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/stepper"
            external
            target="_blank"
          >
            <span class="i-radix-icons-code mr-2" />
            Component Source
          </NuxtLink>
        </Button>
        <Button size="xs" variant="outline" class="text-xs" as-child>
          <NuxtLink
            to="https://www.radix-vue.com/components/stepper"
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
          <div class="flex gap-4 min-h-100px w-full justify-center items-center md:min-h-200px">
            <Stepper>
              <StepperItem
                v-for="item in stepsBasic"
                :key="item.step"
                class="basis-1/4"
                :step="item.step"
              >
                <StepperTrigger>
                  <StepperIndicator>
                    <Icon :name="item.icon" class="h-4 w-4" />
                  </StepperIndicator>
                  <div class="flex flex-col">
                    <StepperTitle>
                      {{ item.title }}
                    </StepperTitle>
                    <StepperDescription>
                      {{ item.description }}
                    </StepperDescription>
                  </div>
                </StepperTrigger>
                <StepperSeparator
                  v-if="item.step !== stepsBasic[stepsBasic.length - 1].step"
                  class="h-px w-full"
                />
              </StepperItem>
            </Stepper>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Horizontal</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex gap-4 min-h-100px w-full justify-center items-center md:min-h-200px">
            <Stepper class="flex gap-2 w-full items-start">
              <StepperItem
                v-for="step in steps"
                :key="step.step"
                v-slot="{ state }"
                class="flex flex-col relative w-full justify-center items-center"
                :step="step.step"
              >
                <StepperSeparator
                  v-if="step.step !== steps[steps.length - 1].step"
                  class="block bg-muted rounded-full shrink-0 absolute h-0.5 left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 group-data-[state=completed]:bg-primary"
                />

                <StepperTrigger as-child>
                  <Button
                    :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
                    size="icon"
                    class="rounded-full shrink-0 z-10"
                    :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
                  >
                    <Icon v-if="state === 'completed'" name="i-lucide-check" class="size-5" />
                    <Icon v-if="state === 'active'" name="i-lucide-circle" />
                    <Icon v-if="state === 'inactive'" name="i-lucide-dot" />
                  </Button>
                </StepperTrigger>

                <div class="mt-5 text-center flex flex-col items-center">
                  <StepperTitle
                    :class="[state === 'active' && 'text-primary']"
                    class="text-sm font-semibold transition lg:text-base"
                  >
                    {{ step.title }}
                  </StepperTitle>
                  <StepperDescription
                    :class="[state === 'active' && 'text-primary']"
                    class="text-xs text-muted-foreground transition sr-only lg:text-sm md:not-sr-only"
                  >
                    {{ step.description }}
                  </StepperDescription>
                </div>
              </StepperItem>
            </Stepper>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Vertical</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex gap-4 min-h-100px w-full justify-center items-center md:min-h-200px">
            <Stepper orientation="vertical" class="mx-auto flex flex-col gap-10 max-w-md w-full justify-start">
              <StepperItem
                v-for="step in steps"
                :key="step.step"
                v-slot="{ state }"
                class="flex gap-6 relative w-full items-start"
                :step="step.step"
              >
                <StepperSeparator
                  v-if="step.step !== steps[steps.length - 1].step"
                  class="block bg-muted rounded-full shrink-0 absolute h-[105%] w-0.5 left-[18px] top-[38px] group-data-[state=completed]:bg-primary"
                />

                <StepperTrigger as-child>
                  <Button
                    :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
                    size="icon"
                    class="rounded-full shrink-0 z-10"
                    :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
                  >
                    <Icon v-if="state === 'completed'" name="i-lucide-check" class="size-5" />
                    <Icon v-if="state === 'active'" name="i-lucide-circle" />
                    <Icon v-if="state === 'inactive'" name="i-lucide-dot" />
                  </Button>
                </StepperTrigger>

                <div class="flex flex-col gap-1">
                  <StepperTitle
                    :class="[state === 'active' && 'text-primary']"
                    class="text-sm font-semibold transition lg:text-base"
                  >
                    {{ step.title }}
                  </StepperTitle>
                  <StepperDescription
                    :class="[state === 'active' && 'text-primary']"
                    class="text-xs text-muted-foreground transition sr-only lg:text-sm md:not-sr-only"
                  >
                    {{ step.description }}
                  </StepperDescription>
                </div>
              </StepperItem>
            </Stepper>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
