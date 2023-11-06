import { MouseEventHandler, ReactNode } from "react";

export type TypeProps = {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'square' | 'link'
  disabled?: boolean
  prependIcon?: ReactNode | null
  appendIcon?: ReactNode | null
  onClick: MouseEventHandler<HTMLButtonElement>
}
