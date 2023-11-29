import { ReactNode } from "react"

export type TypeProps = {
  children: string | ReactNode
  variant?: 'primary' | 'ghost' | 'square' | 'text'
  onClick?: () => void
  disabled?: boolean
  prependIcon?: ReactNode
  appendIcon?: ReactNode
  className?: string
  type?: string
}
