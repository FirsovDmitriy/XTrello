import { styled } from "styled-components"
import Colors from "../../constants/colors"

export const Select = styled.div`
  position: relative;
`

export const Base = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  padding: 0 8px;
  position: relative;
  border: 1px solid ${ Colors.BORDER };
  border-radius: 4px;
  cursor: pointer;
`

export const Content = styled.span`
  padding: 10px 12px;
`

export const Arrow = styled.span<{ $isVisible: boolean }>`
  transform: ${ props => props.$isVisible ? (
    'rotate(180deg)' 
  ) : 'rotate(0)' };
  transition: transform 0.3s ease-in-out;
`

export const NativeInput = styled.input`
  bottom: 0;
  left: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 100%;
`

export const List = styled.ul<{ $isVisible: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  width: 100%;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  opacity: ${ props => props.$isVisible ? 1 : 0 };
  transition: opacity 0.3s ease-out;
  pointer-events: ${ props => props.$isVisible ? 'all' : 'none' };
  background: ${ props => props.theme.backColor };
`

export const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  color: ${ props => props.theme.textColor };
  @media (any-hover: hover) {
    &:hover {
      background: rgba(0, 0, 0, 0.30);
    }
  }
`