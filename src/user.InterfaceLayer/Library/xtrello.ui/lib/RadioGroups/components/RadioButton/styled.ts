import { styled } from "styled-components";

export const RadioButton = styled.label`
  display: flex;
`

export const Core = styled.span`
  --size: 1.5rem;
  display: grid;
  position: relative;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  border: 2px solid ${ props => props.theme.pallete.border.primary };
  cursor: pointer;
  &::after {
    --size: 10px;
    place-self: center;
    content: '';
    position: absolute;
    width: var(--size);
    height: var(--size);
    background: ${ props => props.theme.pallete.background.default };
    border-radius: 50%;
    transition: opacity 0.3s ${ props => props.theme.transitions.timingFunc };
    opacity: 0;
  }
`

export const Input = styled.input`
  appearance: none;
  &:checked {
    ~ ${ Core } {
      &::after {
        opacity: 1;
      }
    }
  }
`