import { ReactNode } from "react";
import { InputType } from "./enum";

export interface IProps {
  value?: string
  placeholder?: string
  type?: InputType
  onChange?: () => void
  isError?: boolean
  Icon?: Icon
  disabled?: boolean
}

export interface Icon {
  prepend?: ReactNode | undefined,
  append?: ReactNode | undefined
}
