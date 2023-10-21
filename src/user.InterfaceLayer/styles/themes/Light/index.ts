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
    hovered: Colors.PRIMARY_2,
    white: Colors.WHITE,
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
  blackout: rgba(
    Colors.BLACK, 0.5
  ),
  errorColor: Colors.ERROR,

  timingFunc: 'cubic-bezier(0, 0, 0.2,1)',
  durationTransition: '0.3s',
  borderRadius: '4px'
}
