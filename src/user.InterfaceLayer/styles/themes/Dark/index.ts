import { Colors } from "../../colors";
import { rgba } from "../../utilities/rgba";
import { ITheme } from "../type";

export const darkTheme: ITheme = {
  backColor: '#111', /// #2A323C
  textColor: '#f4f4f4', // #A6ADBB

  background: {
    primary: Colors.PRIMARY,
    secondary: Colors.SECONDARY,
    hovered: rgba(Colors.SECONDARY, 0.2),
    disabled: rgba(
      Colors.TERTIARY_2, 0.6
    )
  },

  text: {
    white: Colors.WHITE,
    hovered: rgba(Colors.PRIMARY_2, 1),
    disabled: rgba(
      Colors.TERTIARY, 0.6
    ),
    button: '#1D2125'
  },

  border: {
    primary: rgba(
      Colors.PRIMARY, 0.9
    )
  },

  blackout: rgba(
    Colors.BLACK, 0.5
  ),

  errorColor: Colors.ERROR,

  timingFunc: 'cubic-bezier(0, 0, 0.2,1)',
  durationTransition: '0.3s',
  borderRadius: '4px'
}
