import { styled } from "styled-components"

export const SwitchCore = styled.span`
  position: relative;
  width: 48px;
  border-radius: 10px;
  background: ${ props => props.theme.background.secondary };
  height: 24px;
  display: inline-block;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  &::after {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #FFF;
    position: absolute;
    top: calc(50% - 10px);
    left: 2px;
    transition: all 0.3s ease-in-out;
  }
`

export const Switch = styled.label`
  position: relative;
  


  margin-top: 10px;
  display: inline-flex;
`

export const SwitchInput = styled.input`
  appearance: none;
  opacity: 0;

  &:disabled {
    ~ ${ SwitchCore } {
      cursor: default;
      &::after {
        opacity: 0;
        pointer-events: none;
      }
    }
  }

  &:checked {
    ~ ${ SwitchCore } {
        background: ${ props => props.theme.background.primary };
        &::after {
          left: calc(100% - 22px);
        }
        &:disabled {
          background: #8E8E8E;
          &::after {
            background: #DCDCDE;
          }
        }
    }
  }
`
