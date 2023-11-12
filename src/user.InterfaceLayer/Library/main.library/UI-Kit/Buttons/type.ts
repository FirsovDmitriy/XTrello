import { ReactNode } from "react"

export type TypeProps = {
  children: string | ReactNode
  variant?: 'primary' | 'outlined' | 'square'
  onClick?: () => void
  disabled?: boolean
  prependIcon?: ReactNode,
  appendIcon?: ReactNode
}
