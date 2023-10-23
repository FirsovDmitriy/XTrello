import { ReactNode } from "react";

export interface IProps {
  children: ReactNode | string;
  variant?: string;
  disabled?: boolean;
  prepend?: JSX.Element;
  append?: JSX.Element;
  onClick?: () => void
  gap?: string
}