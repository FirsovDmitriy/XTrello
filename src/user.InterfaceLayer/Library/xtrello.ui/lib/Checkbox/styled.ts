import { styled } from "styled-components"

export const Checkbox = styled.label`
  position: relative;
  width: min-content;
  display: flex;
`

export const CheckboxCore = styled.span`
  width: 24px;
  height: 24px;
  border: 2px solid ${ props => props.theme.border.primary };
  border-radius: 4px;
  display: flex;
  transition: all 0.3s ${ props => props.theme.timingFunc };
  cursor: pointer;
`

export const Input = styled.input`
  appearance: none;
  &:checked {
    ~ ${ CheckboxCore } {

      background:
        url('src/user.InterfaceLayer/assets/img/check.svg')
        center / cover
        ${ props => props.theme.background.primary };

      border-color: ${ props => props.theme.border.primary };
    }
  }
  &:disabled {
    ~ ${ CheckboxCore } {
      background: ${ props => props.theme.background.disabled };
      border-color: ${ props => props.theme.background.disabled };
      cursor: default;
    }
  }
`