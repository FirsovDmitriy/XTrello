import { FC } from 'react'
import { IProps } from './type'

import * as ST from './styled'

const Input: FC<IProps> = ({ onChange, value, Icon,  ...props }) => {

  return (
    <ST.Wrapper>
      {Icon?.prepend ? (
        <ST.IconPrepend>
          { Icon.prepend }
        </ST.IconPrepend>
      ) : null}

      <ST.Input
        value={value}
        onChange={ onChange }
        { ...props }
      />

      {Icon?.append ? (
        <ST.IconAppend>
          { Icon.append }
        </ST.IconAppend>
      ) : null}
    </ST.Wrapper>
  )
}

export default Input