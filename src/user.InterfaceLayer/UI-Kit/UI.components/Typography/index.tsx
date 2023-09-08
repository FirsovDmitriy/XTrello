import { FC } from 'react'
import { IProps } from './type'
import { Variant } from './enum'

import * as ST from './styled'

const Typography: FC<IProps> = ({ children, variant = 'p', $color }) => {
  switch(variant) {
    case Variant.h1:
      return <ST.Title1>
        { children }
      </ST.Title1>
    case Variant.h2:
      return <ST.Title2>
        { children }
      </ST.Title2>
    default:
      return <ST.Typography $color={$color}>
        { children }
      </ST.Typography>
  }
}

export default Typography