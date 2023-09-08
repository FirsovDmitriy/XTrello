import { styled } from "styled-components"
import Colors from "../../constants/colors"

export const Select = styled.div`
  position: relative;
`

export const Base = styled.div<{ $isShow: boolean }>`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  position: relative;
  padding: 0 8px;
  border: 1px solid ${ props => (
    props.$isShow ? Colors.PRIMARY : Colors.BORDER
  )};
  border-radius: 4px;
  cursor: pointer;
  box-shadow: ${ props => (
    props.$isShow ? '0px 0px 0px 4px rgba(2, 149, 254, 0.25)' : 'none'
  )};
`

export const Content = styled.span`
  padding: 10px 12px;
  color: ${ props => props.theme.textColor };
`

export const Arrow = styled.span<{ $isShow: boolean }>`
  transform: ${ props => props.$isShow ? (
    'rotate(180deg)' 
  ) : 'rotate(0)' };
  transition: transform 0.3s ease-in-out;
`

export const NativeInput = styled.input`
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  width: 100%;
`

export const List = styled.ul<{ $isShow: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  width: 100%;
  margin-top: 8px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  opacity: ${ props => props.$isShow ? 1 : 0 };
  transition: opacity 0.3s ease-out;
  pointer-events: ${ props => props.$isShow ? 'all' : 'none' };
  background: ${ props => props.theme.backColor };
`

export const Item = styled.li<{ $disabled?: boolean }>`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  padding: 8px 16px;
  cursor: ${ ({ $disabled }) => $disabled ? 'default' : 'pointer' };
  transition: background 0.3s ease-in-out;
  color: ${ props => (
    props.$disabled ? Colors.FONT_DISABLED : props.theme.textColor
  ) };
  @media (any-hover: hover) {
    &:hover {
      background: ${ ({ $disabled }) => (
        $disabled ? 'transparent' : Colors.SECONDARY_BG 
      ) };
    }
  }
`