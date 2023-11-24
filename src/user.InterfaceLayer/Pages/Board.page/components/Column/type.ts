export type TypeProps = {
  title?: string
  tasks: task[]
  id: string
}

type task = {
  id: string
  text: string
}