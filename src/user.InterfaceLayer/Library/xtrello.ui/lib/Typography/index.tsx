import { FC } from 'react'
import { TypeProps } from './type'

import * as SC from './styled'

const Typography: FC<TypeProps> = ({ children, variant = 'p', $color, $fontSize }) => {
  switch(variant) {
    case 'h1':
      return (
        <SC.Title1>
          { children }
        </SC.Title1>
      )
    case 'h2':
      return (
        <SC.Title2>
          { children }
        </SC.Title2>
      )
    case 'span':
      return (
        <SC.Span>
          { children }
        </SC.Span>
      )
    default:
      return (
        <SC.Typography
          $fontSize={$fontSize}
          $color={$color}
        >
          { children }
        </SC.Typography>
      )
  }
}

export default Typography