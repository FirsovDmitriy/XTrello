import { ITheme } from "./type";


export const Theme = (mode: 'light' | 'dark'): ITheme => ({
  pallete: {
    paper: {
      default: '',
      blackout: ''
    },
    text: '',

    button: {
      background: '',
      text: '',
      hovered: '',
      disabledBackground: ''
    }
  }
})
