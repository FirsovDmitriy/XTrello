export interface IProps {
  children: JSX.Element | string;
  variant?: string;
  disabled?: boolean;
  prepend?: JSX.Element;
  append?: JSX.Element;
  onClick?: () => void
}