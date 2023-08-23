import { InputType } from "../enum";

export interface IProps {
  value?: string;
  placeholder?: string;
  type?: InputType;
  onChange?: () => void;
  isError?: boolean;
  Icon?: Icon;
}

export type Icon = {
  prepend?: JSX.Element | undefined,
  append?: JSX.Element | undefined
}
