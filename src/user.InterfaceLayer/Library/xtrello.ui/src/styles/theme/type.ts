export interface ITheme {
  pallete: {
    mode: 'dark' | 'light',
    paper: {
      default: string,
      blackout: string
    },
    text: string,

    button: {
      hovered: string,
      disabledBackground: string,
      background: string,
      text: string,
    },
    border: {
      primary: string,
      secondary: string
    },
    error: string
  },

  transitions: {
    //
  }
}
