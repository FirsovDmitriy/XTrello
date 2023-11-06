export interface ITheme {
  backColor: string,
  textColor: string,

  background: {
    primary: string,
    secondary: string,
    hovered: string,
    disabled: string
  },

  text: {
    hovered: string,
    white: string,
    disabled: string,
    button: string
  },

  border: {
    primary: string
  },

  blackout: string,
  errorColor: string,

  timingFunc: string,
  durationTransition: string,

  borderRadius: string,
}
