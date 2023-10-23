import styled from 'styled-components'
import { Container } from '../Container/styled'

export const EmptyBlock = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: auto;
`
export const EmptyBlockWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  border: 1px solid ${ props => props.theme.border.secondary };
  border-radius: ${ props => props.theme.borderRadius };
`

export const EmptyBlockContent = styled.div`
  place-self: center;
`