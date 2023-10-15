import { ChangeEvent, ReactNode } from "react";
import { InputType } from "./enum";

export interface IProps {
  value?: string
  placeholder?: string
  type?: InputType
  onChange?: (event: ChangeEvent) => void
  isError?: boolean
  Icon?: Icon
  disabled?: boolean
  errorText?: string,
}

export interface Icon {
  prepend?: ReactNode | undefined,
  append?: ReactNode | undefined
}
