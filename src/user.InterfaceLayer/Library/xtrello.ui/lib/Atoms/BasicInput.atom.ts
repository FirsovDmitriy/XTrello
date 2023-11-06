import { styled } from 'styled-components'

export const BasicInput = styled.input`
  width: 100%;
  color: ${ props => props.theme.pallete.text.primary };
  background-color: transparent;
  border: none;
  &::placeholder {
    color: inherit;
  }
`
