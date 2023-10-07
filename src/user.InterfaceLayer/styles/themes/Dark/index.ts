import { ITheme } from "../type";

export const darkTheme: ITheme = {
  //
  backColor: 'hsl(212 18% 14%)',
  textColor: 'hsl(220 13% 69%)',

  background: {
    primary: 'hsl(262 80% 50%)',
    hovered: 'hsl(220 13% 69% / .2)',
    disabled: 'hsl(213 18% 20% / .2)'
  },
  text: {
    disabled: 'hsl(220 13% 69%/ .2)'
  },

  border: {
    primary: 'hsl(262 80% 50% / 1)'
  }
}
