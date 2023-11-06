import { styled } from 'styled-components'

export const Heading = styled.header`
  font-size: 24px;
  font-weight: 600;
  padding: 1rem;
  border-bottom: 1px solid ${ props => props.theme.pallete.border.secondary };
`