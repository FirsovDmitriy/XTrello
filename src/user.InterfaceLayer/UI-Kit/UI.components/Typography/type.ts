import Colors from "../../constants/colors";
import { Variant } from "./enum";

export interface IProps extends IColor {
  children: string
  variant?: Variant
}

export interface IColor {
  $color?: Colors | string
}