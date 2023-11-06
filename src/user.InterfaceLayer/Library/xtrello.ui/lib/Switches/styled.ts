import { styled } from "styled-components"

export const SwitchTrack = styled.span`
  position: relative;
  width: 3rem;
  height: 1.5rem;
  border-radius: 10px;
  border: 1px solid ${ props => props.theme.pallete.border.secondary };
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;

  &::after {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${ props => props.theme.pallete.border.secondary };
    position: absolute;
    top: calc(50% - 10px);
    left: 2px;
    transition: all 0.3s ease-in-out;
  }
`

export const Switch = styled.label`
  display: inline-flex;
  position: relative;
`

export const SwitchInput = styled.input`
  appearance: none;
  opacity: 0;

  &:disabled {
    ~ ${ SwitchTrack } {
      cursor: default;
      border-color: ${ props => props.theme.pallete.border.disabled };
      &::after {
        opacity: 0;
        pointer-events: none;
      }
    }

    &:checked {
      ~ ${ SwitchTrack } {
        border-color: ${ props => props.theme.pallete.border.disabled };
        &::after {
            background: ${ props => props.theme.pallete.background.disabled };
            opacity: 1;
        }
      }
    }
  }

  &:checked {
    ~ ${ SwitchTrack } {
        border-color: ${ props => props.theme.pallete.border.primary };
        &::after {
          left: calc(100% - 22px);
          background: ${ props => props.theme.pallete.border.primary };
        }
    }
  }
`
