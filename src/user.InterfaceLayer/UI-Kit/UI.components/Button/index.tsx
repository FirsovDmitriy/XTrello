import { FC } from 'react'
import { IProps } from './type'
import Variant from './enum'

import * as ST from './styled'

const Button: FC<IProps> = ({ children, variant = 'primary', prepend, append, ...props }) => {
  switch(variant) {
    case Variant.PRIMARY:
      return <ST.Button { ...props }>
          {prepend ? (
            <ST.Prepend>{ prepend }</ST.Prepend>
          ) : null}
          { children }
          {append ? (
            <ST.Append> { append } </ST.Append>
          ) : null}
        </ST.Button>
    case Variant.GHOST:
      return <ST.GhostButton { ...props }>
        { children }
      </ST.GhostButton>
    case Variant.SQUARE:
      return <ST.SquareButton { ...props }>
        { children }
      </ST.SquareButton>

  }
}

export default Button