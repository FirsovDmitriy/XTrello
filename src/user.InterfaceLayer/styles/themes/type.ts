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
    disabled: string,
    white: string
  },

  border: {
    primary: string
  },

  shadow: {
    primary: string
  },

  errorColor: string
}
