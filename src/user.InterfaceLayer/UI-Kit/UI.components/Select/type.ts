type Option = {
  label: string,
  value: string,
  disabled: boolean
}

export interface IProps {
  onChange: (value: string | string[]) => void; // TODO:
  value: string | string[];
  options: Option[];
  multiple?: boolean;
  placeholder?: string;
}
