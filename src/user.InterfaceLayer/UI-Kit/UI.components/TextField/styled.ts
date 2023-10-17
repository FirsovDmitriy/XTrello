import { styled } from "styled-components"
import { Field } from "../../Atoms"

export const TextField = styled(Field)<{ $disabled?: boolean }>`
  border-width: ${ props => props.$disabled ? (
    0
  ) : 1 };

  &:focus-within {
    outline-color: ${ props => props.theme.border.primary };
  }

  /* TODO: test */
  /* margin-bottom: 50px; */
`

export const Input = styled.input<{ isError?: boolean }>`
  flex: auto;
  height: 100%;
  padding: 0 12px;
  color: ${ props => props.theme.textColor };
  border: none;
  background: transparent;
  &:disabled {
    background: ${ props => props.theme.background.disabled };
    &::placeholder {
      color: ${ props => props.theme.text.disabled };
    }
  }
`

export const IconPrepend = styled.span`
  display: flex;
  margin: 0 0 0 8px;
`

export const IconAppend = styled.span`
  display: flex;
  margin: 0 8px 0 0;
`

export const InvalidText = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  color: ${ props => props.theme.errorText };
`