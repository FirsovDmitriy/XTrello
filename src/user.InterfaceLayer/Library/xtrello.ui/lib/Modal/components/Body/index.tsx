import { FC } from 'react'
import styled from 'styled-components'
import { TypeSlot } from '../../type'

const StyledBody = styled.div`
  padding: 1.5rem;
`

const Body: FC<TypeSlot> = ({ children }) => (
  <StyledBody> { children } </StyledBody>
)

export default Body