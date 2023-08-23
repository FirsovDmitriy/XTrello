import { styled, css } from "styled-components"
import Colors from "../../constants/colors"
import Style from "../../constants/style"

const styles = css`
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 42px;
  border-radius: ${ Style.radius };
  text-transform: uppercase;
`

const media = css`
  @media (any-hover: hover) {
    &:hover {
      border-color: ${ Colors.PRIMARY };
    }
  }
`

export const Button = styled.button`

  ${ styles };
  
  background: ${ Colors.PRIMARY };

  color: #FFF;

  @media (any-hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }

  margin-left: 8px;

  &:disabled {
    pointer-events: none;
    background: ${ Colors.BG_DISABLED };
    color: ${ Colors.FONT_DISABLED };
  }
`

export const OutlineButton = styled.button`
  border: 1px solid ${ Colors.BORDER };
  
  ${ styles };

  color: ${ props => props.theme.textColor };

  ${ media }

  &:disabled {
    pointer-events: none;
    color: ${ Colors.FONT_DISABLED };
  }

  
`

export const SquareButton = styled.button`
  display: flex;
  width: 42px;
  height: 42px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${ Colors.BORDER };
  border-radius: 4px;

  ${ media };

  &:disabled {
    pointer-events: none;
    color: ${ Colors.FONT_DISABLED };
  }

  margin-top: 8px;
`

export const Prepend = styled.span`
  margin: 0 8px 0 0;
  display: flex;
`

export const Append = styled.span`
  margin: 0 0 0 8px;
  display: flex;
`