import { ReactNode } from "react"

export type TypeProps = {
  children: ReactNode
  className?: string
  onClose: () => void
}