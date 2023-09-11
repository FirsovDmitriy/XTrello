import { styled } from "styled-components"
import Colors from "../../constants/colors"
import zIndex from "../../constants/zIndex"

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

export const Container = styled.div<{ $isShow: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: ${ zIndex.SELECT };
  width: 100%;
  margin-top: 8px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  opacity: ${ props => props.$isShow ? 1 : 0 };
  transition: opacity 0.3s ease-out;
  visibility: ${props => (
    props.$isShow ? 'visible' : 'hidden'
  )};
  background: ${ props => props.theme.backColor };
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 216px;
  overflow-y: auto;
`

export const Item = styled.li<{ $disabled?: boolean }>`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  color: ${ props => (
    props.$disabled ? Colors.FONT_DISABLED : props.theme.textColor
  ) };
  pointer-events: ${({ $disabled }) => $disabled ? 'none' : 'all'};
  @media (any-hover: hover) {
    &:hover {
      background: ${ Colors.SECONDARY_BG };
    }
  }
`

export const NotFound = styled.span`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  color: ${ props => props.theme.textColor };
`

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 1px solid ${ Colors.BORDER };
`

export const SearchField = styled.input`
  font-family: inherit;
  font-size: inherit;
  width: 100%;
  background: transparent;
  border: none;
  &:focus {
    outline: none;
  }
`