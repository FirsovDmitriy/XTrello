import { FC, ReactNode, useContext } from 'react'
import { Context } from '../../Context'
import { styled } from 'styled-components'

export type TypeProps = {
  children?: ReactNode | string
}

export const StyledDropdownElm = styled.span`
  padding: 0.5rem 1rem;
  display: grid;
`

const DropdownElm: FC<TypeProps> = ({ children }) => {
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