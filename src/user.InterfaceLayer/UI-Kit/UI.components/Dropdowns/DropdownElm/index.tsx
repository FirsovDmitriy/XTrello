import { FC, ReactNode, useContext } from 'react'
import { Context } from '../Context'
import { styled } from 'styled-components'

export interface IProps {
  children?: ReactNode | string
}

export const StyledDropdownElm = styled.span`
  padding: 8px 16px;
  display: grid;
`

const DropdownElm: FC<IProps> = ({ children }) => {
  const { onClose } = useContext(Context)

  return (
    <StyledDropdownElm
      onClick={ () => onClose?.() }
      role='menuitem'
    >
      { children }
    </StyledDropdownElm>
  )
}

export default DropdownElm