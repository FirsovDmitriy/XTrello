import { styled, css } from "styled-components"
import { BasicButton } from "../Atoms/Button.atom"

const SIZE = '2.625rem'

const BasicStyles = css`
  padding: 0 1rem;
  height: ${ SIZE };
`

export const Button = styled(BasicButton)`
  ${ BasicStyles }
  background: ${ props => props.theme.pallete.background.default };
  color: ${ props => props.theme.pallete.text.button };

  @media (any-hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }

  &:disabled {
    pointer-events: none;
  }
`

export const GhostButton = styled(BasicButton)`
  ${ BasicStyles }
  color: ${ props => props.theme.pallete.text.primary };

  @media (any-hover: hover) {
    &:hover {
      background: ${ props => props.theme.pallete.background.hovered };
    }
  }

  &:disabled {
    pointer-events: none;
  }
`

export const SquareButton = styled(BasicButton)`
  width: ${ SIZE };
  height: ${ SIZE };
  border: 1px solid ${ props => props.theme.pallete.border.primary };

  @media (any-hover: hover) {
    &:hover {
      background: ${ props => props.theme.pallete.background.default };
      color: ${ props => props.theme.pallete.text.button };
    }
  }

  &:disabled {
    pointer-events: none;
  }
`

export const LinkButton = styled(BasicButton)`
  background-color: transparent;
  @media (any-hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }
`

export const PrependIcon = styled.span`
  margin: 0 0.5rem 0 0;
  display: flex;
`

export const AppendIcon = styled.span`
  margin: 0 0 0 0.5rem;
  display: flex;
`