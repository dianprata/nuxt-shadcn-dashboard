<script setup lang="ts">
import { columns } from '@/components/tasks/components/columns'
import DataTable from '@/components/tasks/components/DataTable.vue'
import tasks from '@/components/tasks/data/tasks.json'
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <div class="flex flex-wrap gap-2 justify-between items-end">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">
          Tasks
        </h2>
        <p class="text-muted-foreground">
          Here&apos;s a list of your tasks for this month!
        </p>
      </div>
    </div>
    <DataTable :data="tasks.data" :columns="columns" />
  </div>
</template>

<style scoped>

</style>
