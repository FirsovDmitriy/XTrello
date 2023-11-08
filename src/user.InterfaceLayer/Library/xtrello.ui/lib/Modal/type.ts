import { ReactNode } from "react"

export type TypeProps = {
  children: ReactNode
  onClose?: () => void
  show: boolean
  size?: 'sm' | 'lg'
}

export type TypeSlot = { children: ReactNode }
