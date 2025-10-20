<script setup lang="ts">
import { toast } from 'vue-sonner'

const value = ref<string[]>([])
function handleComplete(e: string[]) {
  toast(`PIN Input : ${e.join('')}`)
}

const valueSeparator = ref<string[]>([])

function handleCompleteSeparator(e: string[]) {
  toast(`PIN Input : ${e.join('')}`)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          PIN Input
        </h2>
        <p class="text-muted-foreground">
          Allows users to input a sequence of one-character alphanumeric inputs.
        </p>
      </div>
      <div class="flex gap-2">
        <Badge variant="secondary" class="rounded-full" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/pin-input"
            external
            target="_blank"
          >
            Component Source
            <Icon name="tabler:arrow-up-right" />
          </NuxtLink>
        </Badge>
        <Badge variant="secondary" class="rounded-full" as-child>
          <NuxtLink
            to="https://www.reka-ui.com/docs/components/pin-input"
            external
            target="_blank"
          >
            API Reference
            <Icon name="tabler:arrow-up-right" />
          </NuxtLink>
        </Badge>
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <Card class="w-full">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px">
            <PinInput
              id="pin-input"
              v-model="value"
              placeholder="○"
              @complete="handleComplete"
            >
              <PinInputGroup>
                <PinInputInput
                  v-for="(id, index) in 5"
                  :key="id"
                  :index="index"
                />
              </PinInputGroup>
            </PinInput>
          </div>
        </CardContent>
      </Card>
      <Card class="w-full">
        <CardHeader>
          <CardTitle>With Separator</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="min-h-100px w-full flex items-center justify-center gap-4 md:min-h-200px">
            <PinInput
              id="pin-input"
              v-model="valueSeparator"
              placeholder="○"
              @complete="handleCompleteSeparator"
            >
              <PinInputGroup class="gap-1">
                <template v-for="(id, index) in 5" :key="id">
                  <PinInputInput
                    class="border rounded-md"
                    :index="index"
                  />
                  <template v-if="index !== 4">
                    <PinInputSeparator />
                  </template>
                </template>
              </PinInputGroup>
            </PinInput>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
