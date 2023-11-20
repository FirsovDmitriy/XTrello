import { styled } from "styled-components";

export const RadioButton = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${ props => props.theme.pallete.text.primary };
`

export const RadioButtonControl = styled.span`
  position: relative;
  display: grid;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 2px solid ${ props => props.theme.pallete.border.primary };
  cursor: pointer;

  &::after {
    content: '';
    place-self: center;
    position: absolute;
    width: 0.625rem;
    height: 0.625rem;
    background: ${ props => props.theme.pallete.background.default };
    border-radius: 50%;
    transition: opacity 0.3s ${ props => props.theme.transitions.timingFunc };
    opacity: 0;
  }
`

export const RadioButtonInput = styled.input`
  appearance: none;
  &:checked {
    ~ ${ RadioButtonControl } {
      &::after {
        opacity: 1;
      }
    }
  }
`