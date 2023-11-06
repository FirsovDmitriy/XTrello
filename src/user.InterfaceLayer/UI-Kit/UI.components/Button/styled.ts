import { styled, css } from "styled-components"

const styles = css`
  font-weight: 600;
  padding: 0 16px;
  height: 42px;
  border-radius: ${ props => props.theme.borderRadius };
  transition: all ${ props => props.theme.durationTransition } ${ props => props.theme.timingFunc };
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

  color: ${ props => props.theme.text.button };

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

export const LinkButton = styled.button`
  font-weight: 600;
  transition: all ${ props => props.theme.durationTransition } ${ props => props.theme.timingFunc };
  border: none;
  background-color: transparent;

  @media (any-hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`

export const SquareButton = styled.button`
  --square-button-size: 42px;
  width: var(--square-button-size);
  height: var(--square-button-size);
  border: 1px solid ${ props => props.theme.background.primary };
  border-radius: 4px;

  transition: background ${ props => props.theme.durationTransition } ${ props => props.theme.timingFunc };
  
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