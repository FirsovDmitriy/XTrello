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
    white: string,
    hovered: string,
    disabled: string,
  },

  border: {
    primary: string
  },

  shadow: {
    primary: string
  },

  blackout: string,
  errorColor: string,

  timingFunc: string,
  durationTransition: string,

  borderRadius: string,
}
