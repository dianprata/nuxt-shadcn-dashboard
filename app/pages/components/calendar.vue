<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import type { Ref } from 'vue'
import { getLocalTimeZone, today } from '@internationalized/date'

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="grid gap-2">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Calendar
        </h2>
        <p class="text-muted-foreground">
          A date field component that allows users to enter and edit date.
        </p>
      </div>
      <div class="flex gap-2">
        <Badge variant="secondary" class="rounded-full" as-child>
          <NuxtLink
            to="https://www.shadcn-vue.com/docs/components/calendar"
            external
            target="_blank"
          >
            Component Source
            <Icon name="tabler:arrow-up-right" />
          </NuxtLink>
        </Badge>
        <Badge variant="secondary" class="rounded-full" as-child>
          <NuxtLink
            to="https://www.reka-ui.com/docs/components/calendar"
            external
            target="_blank"
          >
            API Reference
            <Icon name="tabler:arrow-up-right" />
          </NuxtLink>
        </Badge>
      </div>
    </div>
    <div class="flex flex-col gap-4 md:flex-row">
      <Card class="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="w-full flex items-center justify-center gap-4 overflow-hidden">
            <Calendar v-model="value" weekday-format="short" class="border rounded-md" />
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>
