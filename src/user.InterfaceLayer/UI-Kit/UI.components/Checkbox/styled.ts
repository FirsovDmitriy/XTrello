import { styled } from "styled-components"
import Colors from "../../constants/colors"

export const Checkbox = styled.label`
  position: relative;
  display: inline-flex;
  cursor: pointer;
`

export const CheckboxCore = styled.span`
  width: 24px;
  height: 24px;
  border: 2px solid ${ Colors.BORDER };
  border-radius: 4px;
  display: flex;
  transition: all 0.3 ease-in-out;
`

export const Input = styled.input`
  /* position: absolute; */
  appearance: none;
  /* width: 0;
  height: 0;
  opacity: 0; */
  &:checked {
    ~ ${ CheckboxCore } {
      background: url('src/user.InterfaceLayer/assets/img/done.svg') center / cover ${ Colors.PRIMARY };
      border-color: ${ Colors.PRIMARY };
    }
  }
  &:disabled {
    ~ ${ CheckboxCore } {
      background: grey;
      cursor: default;
    }
  }
`