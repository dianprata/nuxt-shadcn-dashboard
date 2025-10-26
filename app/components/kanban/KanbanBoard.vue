<script setup lang="ts">
import type { Column, Task } from '~/types/kanban'
import Draggable from 'vuedraggable'
import { useKanban } from '~/composables/useKanban'
import CardFooter from '../ui/card/CardFooter.vue'

const { board, addTask, removeTask, setColumns, removeColumn, updateColumn } = useKanban()

const showNewTask = ref<{ open: boolean, columnId: string | null }>({ open: false, columnId: null })
const newTask = reactive<{ title: string, description: string, badge: 'low' | 'medium' | 'high' | undefined }>({
  title: '',
  description: '',
  badge: undefined,
})

function openNewTask(colId: string) {
  showNewTask.value = { open: true, columnId: colId }
  newTask.title = ''
  newTask.description = ''
  newTask.badge = undefined
}
function createTask() {
  if (!showNewTask.value.columnId || !newTask.title.trim())
    return
  addTask(showNewTask.value.columnId, { title: newTask.title.trim(), description: newTask.description?.trim(), badge: newTask.badge })
  showNewTask.value.open = false
}

function onColumnDrop(evt: any) {
  // Full columns re-ordered
  setColumns(evt.to.__draggable_component__.modelValue)
}

function renameColumn(id: string) {
  const titleRef = document.getElementById(`col-title-${id}`) as HTMLElement
  if (titleRef)
    setTimeout(() => titleRef.focus(), 500)
}

function onUpdateColumn(evt: any, id: string) {
  if (!evt.target.textContent?.trim())
    return
  updateColumn(id, evt.target.textContent?.trim())
}

function onTaskDrop() {
  // ensure state is persisted after any move (within or across columns)
  nextTick(() => setColumns([...board.value.columns]))
}

function badgeTone(b?: Task['badge']) {
  if (!b)
    return 'secondary'
  if (b === 'low')
    return 'secondary'
  if (b === 'medium')
    return 'outline'
  return 'destructive'
}
</script>

<template>
  <div class="flex gap-4 overflow-x-auto overflow-y-hidden pb-4">
    <!-- Columns Draggable wrapper -->
    <Draggable
      v-model="board.columns"
      class="flex gap-4 min-w-max"
      item-key="id"
      :animation="180"
      handle=".col-handle"
      ghost-class="opacity-50"
      @end="onColumnDrop"
    >
      <template #item="{ element: col }: { element: Column }">
        <Card class="w-[272px] shrink-0 py-2 gap-4 self-start">
          <CardHeader class="flex flex-row items-center justify-between gap-2 px-2">
            <CardTitle class="font-semibold text-base flex items-center gap-2">
              <Icon name="lucide:grip-vertical" class="col-handle cursor-grab opacity-60" />
              <span
                :id="`col-title-${col.id}`"
                contenteditable="true" class="hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 px-1 rounded"
                @blur="onUpdateColumn($event, col.id)" @keydown.enter.prevent
              >{{ col.title }}</span>
              <Badge variant="secondary" class="h-5 min-w-5 px-1 font-mono tabular-nums">
                {{ col.tasks.length }}
              </Badge>
            </CardTitle>
            <CardAction class="flex">
              <Button size="icon-sm" variant="ghost" class="size-7 text-muted-foreground" @click="openNewTask(col.id)">
                <Icon name="lucide:plus" />
              </Button>
              <DropdownMenu modal>
                <DropdownMenuTrigger as-child>
                  <Button size="icon-sm" variant="ghost" class="size-7 text-muted-foreground">
                    <Icon name="lucide:ellipsis-vertical" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-20" align="start">
                  <DropdownMenuItem @click="renameColumn(col.id)">
                    <Icon name="lucide:edit-2" class="size-4" />
                    Rename
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive" class="text-destructive" @click="removeColumn(col.id)">
                    <Icon name="lucide:trash-2" class="size-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardAction>
          </CardHeader>
          <CardContent class="px-2 overflow-y-auto overflow-x-hidden flex-1">
            <!-- Tasks within the column -->
            <Draggable
              v-model="col.tasks"
              :group="{ name: 'kanban-tasks', pull: true, put: true }"
              item-key="id"
              :animation="180"
              class="flex flex-col gap-3 min-h-[24px] p-0.5"
              ghost-class="opacity-50"
              @end="onTaskDrop"
            >
              <template #item="{ element: t }: { element: Task }">
                <ContextMenu>
                  <ContextMenuTrigger>
                    <div class="rounded-xl border bg-card px-3 py-2 shadow-sm hover:bg-accent/50 cursor-pointer">
                      <div class="flex items-start justify-between gap-2">
                        <div class="font-medium leading-5">
                          {{ t.title }}
                        </div>
                        <div class="flex items-center gap-1">
                          <Badge v-if="t.badge" :variant="badgeTone(t.badge)">
                            {{ t.badge }}
                          </Badge>
                          <DropdownMenu>
                            <DropdownMenuTrigger as-child>
                              <Button size="icon-sm" variant="ghost" class="size-7 text-muted-foreground" title="More actions">
                                <Icon name="lucide:ellipsis-vertical" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent class="w-20" align="start">
                              <DropdownMenuItem>
                                <Icon name="lucide:edit-2" class="size-4" />
                                Edit card
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Icon name="lucide:copy" class="size-4" />
                                Copy card
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Icon name="lucide:link" class="size-4" />
                                Copy link
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem variant="destructive" class="text-destructive" @click="removeTask(col.id, t.id)">
                                <Icon name="lucide:trash-2" class="size-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                      <p v-if="t.description" class="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {{ t.description }}
                      </p>
                      <div class="mt-1 flex items-center gap-1">
                        <Icon name="lucide:users" class="text-muted-foreground" />
                        <div className="*:data-[slot=avatar]:ring-card flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale cursor-default">
                          <Avatar class="size-6">
                            <AvatarFallback class="text-[10px]">
                              CN
                            </AvatarFallback>
                          </Avatar>
                          <Avatar class="size-6">
                            <AvatarFallback class="text-[10px]">
                              DP
                            </AvatarFallback>
                          </Avatar>
                          <Avatar class="size-6">
                            <AvatarFallback class="text-[10px]">
                              NS
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      </div>
                      <div class="mt-3 flex items-center justify-between gap-2">
                        <div class="flex items-center gap-2">
                          <div class="flex items-center text-sm text-muted-foreground gap-1">
                            <Icon name="lucide:folder" />
                            <span>4</span>
                          </div>
                          <div class="flex items-center text-sm text-muted-foreground gap-1">
                            <div class="size-3">
                              <svg class="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200 dark:text-neutral-700" stroke-width="3" />
                                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current" stroke-width="3" stroke-dasharray="100" stroke-dashoffset="90" stroke-linecap="round" />
                              </svg>
                            </div>
                            <span>10%</span>
                          </div>
                          <div class="flex items-center text-sm text-muted-foreground gap-1">
                            <Icon name="lucide:message-square" />
                            <span>2</span>
                          </div>
                        </div>
                        <div class="flex items-center text-sm text-muted-foreground gap-1">
                          <Icon name="lucide:clock-fading" />
                          <span>2d</span>
                        </div>
                      </div>
                    </div>
                  </ContextMenuTrigger>
                  <ContextMenuContent class="w-20">
                    <ContextMenuItem>
                      <Icon name="lucide:edit-2" class="size-4" />
                      Edit card
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>
                      <Icon name="lucide:copy" class="size-4" />
                      Copy card
                    </ContextMenuItem>
                    <ContextMenuItem>
                      <Icon name="lucide:link" class="size-4" />
                      Copy link
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem variant="destructive" class="text-destructive" @click="removeTask(col.id, t.id)">
                      <Icon name="lucide:trash-2" class="size-4" />
                      Delete
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </template>
            </Draggable>
          </CardContent>
          <CardFooter class="px-2 mt-auto">
            <Button size="sm" variant="ghost" class="text-muted-foreground" @click="openNewTask(col.id)">
              <Icon name="lucide:plus" />
              Add Task
            </Button>
          </CardFooter>
        </Card>
      </template>
    </Draggable>
  </div>

  <!-- New Task Dialog -->
  <Dialog v-model:open="showNewTask.open">
    <DialogContent class="sm:max-w-[520px]">
      <DialogHeader>
        <DialogTitle>New Task</DialogTitle>
        <DialogDescription class="sr-only">
          Add a new task to the board
        </DialogDescription>
      </DialogHeader>
      <div class="flex flex-col gap-3">
        <Input v-model="newTask.title" placeholder="Title" />
        <Textarea v-model="newTask.description" placeholder="Description (optional)" rows="4" />
        <div class="grid grid-cols-3 gap-2">
          <Button :variant="newTask.badge === 'low' ? 'default' : 'outline'" @click="newTask.badge = 'low'">
            Low
          </Button>
          <Button :variant="newTask.badge === 'medium' ? 'default' : 'outline'" @click="newTask.badge = 'medium'">
            Medium
          </Button>
          <Button :variant="newTask.badge === 'high' ? 'default' : 'outline'" @click="newTask.badge = 'high'">
            High
          </Button>
        </div>
      </div>
      <DialogFooter>
        <Button variant="secondary" @click="showNewTask.open = false">
          Cancel
        </Button>
        <Button @click="createTask">
          Create
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
