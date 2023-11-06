export interface ITheme {
  pallete: {
    paper: {
      default: string,
      blackout: string
    },

    text: {
      primary: string,
      button: string,
      disabled: string
    },

    background: {
      hovered: string,
      disabled: string,
      default: string,
    },
    border: {
      primary: string,
      secondary: string,
      disabled: string,
    },
    error: string
  },

  transitions: {
    timingFunc: string,
    duration: string
  },
  borderRadius: string
}
