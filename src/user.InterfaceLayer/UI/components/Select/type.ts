type Option = {
  label: string,
  value: string
}

export interface IProps {
  onChange?: (value: string | string[]) => void; // TODO:
  value?: string | string[];
  options: Option[];
  multiple?: boolean;
  placeholder?: string;
}
