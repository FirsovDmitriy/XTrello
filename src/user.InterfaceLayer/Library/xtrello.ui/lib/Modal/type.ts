import { ReactNode } from "react"

export type TypeProps = {
  children: ReactNode
  onClose?: () => void
  open: boolean
  size?: 'sm' | 'lg'
}

export type TypeSlot = { children: ReactNode }
