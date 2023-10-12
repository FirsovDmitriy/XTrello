import { ReactNode } from "react"

export interface IProps {
  children?: ReactNode | ReactNode[]
  onClose: () => void
  open: boolean
  anchorEl: HTMLButtonElement
}
