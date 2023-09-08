import { ReactNode } from "react";

export interface IProps {
  children: ReactNode
  title: string,
  onClose?: () => void
  isShow: boolean,
  size?: 'small', // TODO:
}

export enum sizes {
  SMALL = '500px'
}