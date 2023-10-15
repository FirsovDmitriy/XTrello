import { ReactNode } from "react"

export interface IProps {
  children: ReactNode
  onClose?: () => void
  open: boolean
  size?: 'sm' | 'lg'
}

export interface ISlot { children: ReactNode }
