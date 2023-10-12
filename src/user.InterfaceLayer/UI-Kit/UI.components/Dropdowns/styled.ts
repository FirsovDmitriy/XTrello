import { styled } from "styled-components"

export const Dropdowns = styled.div<{$isShow: boolean}>`
  position: absolute;
  z-index: 9;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  visibility: ${ props => props.$isShow ? 'visible' : 'hidden' };
  opacity: ${ props => props.$isShow ? 1 : 0 };
  transition: opacity 0.3s cubic-bezier(0,0,.2,1);
  padding-top: 2px;
`

export const DropdownContent = styled.div`
  background: ${ props => props.theme.background.primary };
  min-width: 131px;
  width: max-content;
`