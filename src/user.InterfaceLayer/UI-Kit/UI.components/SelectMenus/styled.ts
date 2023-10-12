import { styled } from "styled-components"
import { Field } from "../../Atoms"

export const SelectMenus = styled.div`
  position: relative;
`

export const Base = styled(Field)<{ $isShow: boolean }>`
  position: relative;
  grid-template-columns: 1fr min-content;
  align-items: center;
  cursor: pointer;
  outline-color: ${ props => props.$isShow ? (
    props.theme.border.primary
  ) : 'transparent' };
`

export const Content = styled.span`
  padding: 10px 12px;
  font: inherit;
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
  z-index: 55;
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
    props.$disabled ? props.theme.text.disabled : props.theme.textColor
  ) };
  pointer-events: ${({ $disabled }) => $disabled ? 'none' : 'all'};
  @media (any-hover: hover) {
    &:hover {
      background: ${ props => props.theme.background.secondary };
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
  height: 3rem;
  padding: 0 12px;
  border-bottom: 1px solid ${ props => props.theme.border.primary };
`

export const SearchField = styled.input`
  font-family: inherit;
  font-size: inherit;
  width: 100%;
  background: transparent;
  color: inherit;
  border: none;
  &::placeholder {
    font-size: 1rem;
    color: ${ props => props.theme.textColor };
  }
  &:focus {
    outline: none;
  }
`