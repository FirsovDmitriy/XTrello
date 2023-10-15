import { styled } from "styled-components"
import { Colors } from "../../../styles/colors"

export const Dropdowns = styled.div<{$open: boolean}>`
  position: fixed;
  z-index: 9;
  box-shadow: 0px 0px 30px 0px ${ props => props.theme.shadow.primary };
  visibility: ${ props => props.$open ? 'visible' : 'hidden' };
  opacity: ${ props => props.$open ? 1 : 0 };
  transition: opacity 0.3s cubic-bezier(0, 0, 0.2,1);
  padding-top: 2px;
`

export const DropdownsContent = styled.div`
  background: ${ props => props.theme.background.primary };
  color: ${ Colors.WHITE };
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