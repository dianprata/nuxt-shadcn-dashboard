export interface Task {
  id: string
  title: string
  description?: string
  badge?: 'low' | 'medium' | 'high'
  createdAt: number
}

export interface Column {
  id: string
  title: string
  tasks: Task[]
}

export interface BoardState {
  columns: Column[]
}
