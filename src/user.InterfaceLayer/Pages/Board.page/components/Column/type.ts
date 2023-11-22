export type TypeProps = {
  title?: string
  tasks: task[]
}

type task = {
  id: string
  text: string
}