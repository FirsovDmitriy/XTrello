import { styled, css } from "styled-components"

const styles = css`
  font-weight: 600;
  padding: 0 16px;
  height: 42px;
  /* height: 3rem; */
  border-radius: 4px;
  transition: all 0.3s ease-out;

  /* width: 100px; */
`

const media = css`
  @media (any-hover: hover) {
    &:hover {
      background: ${ props => props.theme.background.hovered };
    }
  }
`

export const Button = styled.button`

  ${ styles };
  
  background: ${ props => props.theme.background.primary };
  border: none;

  color: #FFF;

  @media (any-hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }

  &:disabled {
    pointer-events: none;
    background-color: ${ props => props.theme.background.disabled };
    color: ${ props => props.theme.text.disabled };
  }
`

export const GhostButton = styled.button<{$gap?: string}>`
  border: none;
  ${ styles };
  gap: ${ props => props.$gap };

  color: ${ props => props.theme.textColor };

  ${ media }

  &:disabled {
    pointer-events: none;
  }

`

export const SquareButton = styled.button`
  display: flex;
  width: 42px;
  height: 42px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${ props => props.theme.background.secondary };
  border-radius: 4px;

  ${ media };

  &:disabled {
    pointer-events: none;
  }
`

export const Prepend = styled.span`
  margin: 0 8px 0 0;
  display: flex;
`

export const Append = styled.span`
  margin: 0 0 0 8px;
  display: flex;
`