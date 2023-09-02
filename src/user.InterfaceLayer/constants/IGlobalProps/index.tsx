import { ReactNode } from "react"

export interface IGlobalProps {
  children?: ReactNode | string
  isShow: boolean
  isLoading: boolean
  onClose: () => void
  isError: boolean
}