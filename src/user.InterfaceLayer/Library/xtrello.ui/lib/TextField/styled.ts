import { styled } from "styled-components"
import { BasicInput } from "../Atoms/BasicInput.atom"
import { BasicField } from "../Atoms/BasicField.atom"

export const TextField = styled(BasicField)<{ $disabled?: boolean, variant: boolean }>`
  width: 100%;
  border: 1px solid ${ props => props.theme.pallete.border.primary };
  border-radius: ${ props => props.theme.borderRadius };
  height: 2.625rem;
  display: flex;
  align-items: center;
  outline: 2px solid transparent;
  outline-offset: 2px;

  border-color: ${ props => {
    return props.$disabled ? (
      props.theme.pallete.background.disabled
    ) : (
      props.theme.pallete.border.primary
    )}
  };

  &:focus-within {
    outline-color: ${ props => props.theme.pallete.border.primary };
  }
`

export const Input = styled(BasicInput)<{ isError?: boolean }>`
  flex: auto;
  padding: 0 0.75rem;
  
  &:disabled {
    background: ${ props => props.theme.pallete.background.disabled };
    &::placeholder {
      color: ${ props => props.theme.pallete.text.disabled };
    }
  }
`

export const IconPrepend = styled.span`
  display: flex;
  margin: 0 0 0 0.5rem;
`

export const IconAppend = styled.span`
  display: flex;
  margin: 0 0.5rem 0 0;
`

export const InvalidText = styled.span`
  position: absolute;
  top: 100%;
  left: 0;
  color: ${ props => props.theme.pallete.error };
`