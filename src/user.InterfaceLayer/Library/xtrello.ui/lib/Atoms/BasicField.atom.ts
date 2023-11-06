import { styled } from 'styled-components'

export const BasicField = styled.div`
  width: 100%;
  border: 1px solid ${ props => props.theme.pallete.border.primary };
  border-radius: ${ props => props.theme.borderRadius };
  height: 2.625rem;
  display: flex;
  align-items: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
`
