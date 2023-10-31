import { ReactNode } from "react";

export type TypeProps = {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'square' | 'link'
  disabled?: boolean
  prepend?: ReactNode | null
  append?: ReactNode | null
  onClick?: () => void
}
