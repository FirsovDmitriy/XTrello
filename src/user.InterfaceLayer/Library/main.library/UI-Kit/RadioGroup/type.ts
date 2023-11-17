import { ChangeEvent, ReactNode } from "react"

type ChildrenProps = {
  children?: ReactNode 
}

export type TypeProps = ChildrenProps & {
  name: string
  onChange: (parametr: ChangeEvent<HTMLInputElement>) => void
  value: string | number
}
