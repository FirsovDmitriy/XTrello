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
    disabled: string
  },

  border: {
    primary: string
  },

  shadow: {
    primary: string
  },

  errorColor: string
}
