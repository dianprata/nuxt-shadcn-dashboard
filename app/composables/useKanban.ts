import type { BoardState, Column, Task } from '~/types/kanban'
import { nanoid } from 'nanoid'

const isClient = import.meta.client

const STORAGE_KEY = 'kanban.board.v1'

const defaultBoard: BoardState = {
  columns: [
    { id: 'todo', title: 'To Do', tasks: [] },
    { id: 'in-progress', title: 'In Progress', tasks: [] },
    { id: 'done', title: 'Done', tasks: [] },
  ],
}

export function useKanban() {
  const board = useState<BoardState>('kanban-board', () => load())

  onMounted(() => {
    board.value = load()
  })

  function load(): BoardState {
    if (isClient) {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        try { return JSON.parse(raw) as BoardState }
        catch { }
      }
    }
    return defaultBoard
  }

  function persist() {
    if (isClient) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(board.value))
    }
  }

  function addColumn(title: string) {
    const newCol: Column = { id: nanoid(6), title, tasks: [] }
    board.value.columns.push(newCol)
    persist()
  }

  function removeColumn(id: string) {
    board.value.columns = board.value.columns.filter(c => c.id !== id)
    persist()
  }

  function updateColumn(id: string, title: string) {
    const col = board.value.columns.find(c => c.id === id)
    if (!col)
      return
    col.title = title
    persist()
  }

  function addTask(columnId: string, payload: Pick<Task, 'title' | 'description' | 'badge'>) {
    const col = board.value.columns.find(c => c.id === columnId)
    if (!col)
      return
    col.tasks.unshift({ id: nanoid(8), createdAt: Date.now(), ...payload })
    persist()
  }

  function updateTask(columnId: string, taskId: string, patch: Partial<Task>) {
    const col = board.value.columns.find(c => c.id === columnId)
    if (!col)
      return
    const t = col.tasks.find(t => t.id === taskId)
    if (!t)
      return
    Object.assign(t, patch)
    persist()
  }

  function removeTask(columnId: string, taskId: string) {
    const col = board.value.columns.find(c => c.id === columnId)
    if (!col)
      return
    col.tasks = col.tasks.filter(t => t.id !== taskId)
    persist()
  }

  function setColumns(next: Column[]) {
    board.value.columns = next
    persist()
  }

  return { board, addColumn, removeColumn, updateColumn, addTask, updateTask, removeTask, setColumns, persist }
}
