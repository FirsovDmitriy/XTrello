import { FC } from 'react'
import { IProps } from './type'

import * as ST from './styled'
import Variant from './enum'

const Button: FC<IProps> = ({ children, variant = 'primary', prepend, append, ...props }) => {
  switch(variant) {
    case Variant.primary:
      return <ST.Button { ...props }>
          {prepend ? (
            <ST.Prepend>{ prepend }</ST.Prepend>
          ) : null}
          { children }
          {append ? (
            <ST.Append> { append } </ST.Append>
          ) : null}
        </ST.Button>
    case Variant.outlined:
      return <ST.OutlineButton { ...props }> { children } </ST.OutlineButton>
    case Variant.square:
      return <ST.SquareButton { ...props }> { children } </ST.SquareButton>

  }
}

export default Button