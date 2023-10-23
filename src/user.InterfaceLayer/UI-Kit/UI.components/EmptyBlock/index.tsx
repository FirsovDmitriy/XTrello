import { FC } from 'react'
import { TypeProps } from './type'

import * as SC from './styled'

const EmptyBlock: FC<TypeProps> = ({ children }) => {
  return (
    <SC.EmptyBlock>
      <SC.EmptyBlockWrapper>
        <SC.EmptyBlockContent>
          { children }
        </SC.EmptyBlockContent>
      </SC.EmptyBlockWrapper>
    </SC.EmptyBlock>
  )
}

export default EmptyBlock