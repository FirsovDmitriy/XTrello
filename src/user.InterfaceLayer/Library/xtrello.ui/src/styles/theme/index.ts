import { alpha } from "../alpha";
import { Colors, Dark, Light } from "../colors";
import { ITheme } from "./type";

type TypeMode = 'light' | 'dark'

export const Theme = (mode: TypeMode): ITheme => ({
  pallete: {
    paper: {
      default: (mode === 'dark' ? Light.paper : Dark.paper),
      blackout: alpha(
        Colors.BLACK, 0.6
      )
    },
    text: {
      primary: (mode === 'dark' ? Light.text : Dark.text),
      button: '#1D2125',
      disabled: 'rgb(52, 58, 74)'
    },

    background: {
      default: Colors.BLUE_RUIN,
      hovered: alpha(Colors.DRIED_LAVENDER_FLOWERS, 0.2),
      disabled: alpha(
        Colors.NARWAL_GREY, 0.6
      )
    },

    border: {
      primary: Colors.BLUE_RUIN,
      secondary: alpha(
        Colors.DRIED_LAVENDER_FLOWERS, 0.8
      ),
      disabled: alpha(
        Colors.NARWAL_GREY, 0.6
      )
    },
    error: '#B3261E'
  },

  transitions: {
    timingFunc: 'cubic-bezier(0, 0, 0.2, 1)',
    duration: '0.3s'
  },

  borderRadius: '4px',
})
