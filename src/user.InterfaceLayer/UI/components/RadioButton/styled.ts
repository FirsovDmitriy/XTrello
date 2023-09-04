import { styled } from "styled-components";
import Colors from "../../constants/colors";

export const RadioButton = styled.label`
  display: flex;
`

export const Core = styled.span`
  --size: 24px;
  display: grid;
  position: relative;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  border: 2px solid ${ Colors.BORDER };
  cursor: pointer;
  &::after {
    --size: 10px;
    place-self: center;
    content: '';
    position: absolute;
    width: var(--size);
    height: var(--size);
    background: ${ Colors.PRIMARY };
    border-radius: 50%;
    transition: opacity 0.3s ease-out;
    opacity: 0;
  }
`

export const Input = styled.input`
  appearance: none;
  &:checked {
    ~ ${ Core } {
      border-color: ${ Colors.PRIMARY };
      &::after {
        opacity: 1;
      }
    }
  }
`