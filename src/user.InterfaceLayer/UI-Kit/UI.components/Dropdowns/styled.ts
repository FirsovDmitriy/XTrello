import { styled } from "styled-components"

export const Dropdowns = styled.div<{$open: boolean}>`
  position: fixed;
  right: 0;
  z-index: 9;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  visibility: ${ props => props.$open ? 'visible' : 'hidden' };
  opacity: ${ props => props.$open ? 1 : 0 };
  transition: opacity 0.3s ${ props => props.theme.timingFunc };
  padding-top: 2px;
`

export const DropdownsContent = styled.div`
  background: ${ props => props.theme.backColor };
  color: ${ props => props.theme.textColor };
  min-width: 131px;
  width: max-content;
`

export const DropdownsBackdrop = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  width: 100%;
  height: 100%;
  visibility: ${ props => props.$open ? 'visible' : 'hidden' };
`