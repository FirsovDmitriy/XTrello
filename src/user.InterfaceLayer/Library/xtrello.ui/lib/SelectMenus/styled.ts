import { styled } from "styled-components"

export const Field = styled.div`
  width: 100%;
  border: 1px solid ${ props => props.theme.pallete.border.primary };
  border-radius: 4px;
  height: 2.625rem;
  display: flex;
  align-items: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
`

export const SelectMenus = styled.div`
  position: relative;
  width: 100%;
`

export const Base = styled(Field)<{ $isShow: boolean }>`
  position: relative;
  grid-template-columns: 1fr min-content;
  cursor: pointer;
  outline-color: ${ props => props.$isShow ? (
    props.theme.pallete.border.primary
  ) : 'transparent' };
`

export const Content = styled.span`
  padding: 10px 12px;
  font: inherit;
  color: ${ props => props.theme.pallete.text.primary };
  width: 100%;
  white-space: nowrap;
`

export const Arrow = styled.span<{ $isShow: boolean }>`
  transform: ${ props => props.$isShow ? (
    'rotate(180deg)' 
  ) : 'rotate(0)' };
  transition: transform 0.3s ${ props => props.theme.transitions.timingFunc };
  margin: 0 8px 0 0;
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
  /* background: ${ props => props.theme.pallete.paper.default }; */
  background-color: #101418;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 244px;
  overflow-y: auto;
  padding: 8px 0;
`

export const Item = styled.li<{ $disabled?: boolean }>`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  color: ${ props => (
    props.$disabled ? props.theme.pallete.text.disabled : props.theme.pallete.text.primary
  ) };
  pointer-events: ${({ $disabled }) => $disabled ? 'none' : 'all'};
  @media (any-hover: hover) {
    &:hover {
      background: ${ props => props.theme.pallete.background.hovered };
    }
  }
`

export const NotFound = styled.span`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  /* color: ${ props => props.theme.textColor }; */
`