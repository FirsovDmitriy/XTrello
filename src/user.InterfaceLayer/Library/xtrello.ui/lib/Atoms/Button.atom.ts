import { styled } from 'styled-components'

export const BasicButton = styled.button`
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${ props => props.theme.borderRadius };
  border: none;
  color: ${ props => props.theme.pallete.text.primary };
  transition: all 0.367s ${ props => props.theme.transitions.timingFunc };
`
