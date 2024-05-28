<script setup lang="ts">
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import type { DateRange } from 'radix-vue'
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'

import { type Ref } from 'vue'

const df = new DateFormatter('en-US', {
  dateStyle: 'medium',
})

const calendarDate = new CalendarDate(2024, 0, 20)

const value = ref({
  start: calendarDate,
  end: calendarDate.add({ days: 20 }),
}) as Ref<DateRange>
</script>

<template>
  <div :class="cn('grid gap-2', $attrs.class ?? '')">
    <UIPopover>
      <UIPopoverTrigger as-child>
        <UIButton
            id="date"
            :variant="'outline'"
            :class="cn(
            'w-[300px] justify-start text-left font-normal',
            !value && 'text-muted-foreground',
          )"
        >
          <CalendarIcon class="mr-2 h-4 w-4" />

          <template v-if="value.start">
            <template v-if="value.end">
              {{ df.format(value.start.toDate(getLocalTimeZone())) }} - {{ df.format(value.end.toDate(getLocalTimeZone())) }}
            </template>

            <template v-else>
              {{ df.format(value.start.toDate(getLocalTimeZone())) }}
            </template>
          </template>
          <template v-else>
            Pick a date
          </template>
        </UIButton>
      </UIPopoverTrigger>
      <UIPopoverContent class="w-auto p-0" align="end">
        <UIRangeCalendar
            v-model="value"
            weekday-format="short"
            :number-of-months="2"
            initial-focus
            :placeholder="value.start"
            @update:start-value="(startDate: any) => value.start = startDate"
        />
      </UIPopoverContent>
    </UIPopover>
  </div>
</template>
