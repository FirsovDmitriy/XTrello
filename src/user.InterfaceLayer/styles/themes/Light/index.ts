import { Colors } from "../../colors";
import { rgba } from "../../utilities/rgba";
import { ITheme } from "../type";


export const lightTheme: ITheme = {
  //
  backColor: '#ECE6F0',
  textColor: '#1F2937',

  background: {
    primary: Colors.PRIMARY,
    secondary: Colors.SECONDARY,

    hovered: rgba(Colors.SECONDARY, 0.2),
    disabled: rgba(
      Colors.BLACK, 0.2
    )
  },

  text: {
    disabled: rgba(
      Colors.TERTIARY, 0.6
    )
  },

  border: {
    primary: rgba(
      Colors.PRIMARY, 0.9
    )
  },

  shadow: {
    primary: Colors.BLACK
  },

  errorColor: Colors.ERROR
}
