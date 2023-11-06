import { styled } from "styled-components"

export const Modal = styled.div<{$open: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: ${ props => props.$open ? 'all' : 'none' };
  z-index: 99;
`

export const ModalContent = styled.section<{ $open: boolean }>`
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.10);
  background: ${ props => props.theme.backColor };
  visibility: ${ props => props.$open ? 'visible' : 'hidden' };
  transition: opacity 0.3s ease-in-out;
  z-index: 99;
  opacity: ${ props => props.$open ? 1 : 0 };

  width: 640px;
  border-radius: ${ props => props.theme.borderRadius };

  place-self: center;
`

export const ModalBackdrop = styled.div<{$open: boolean}>`
  background: ${ props => props.theme.blackout };
  opacity: ${ props => props.$open ? 1 : 0 };
  pointer-events: ${ props => props.$open ? 'all' : 'none' };
  transition: opacity 0.3s ${ props => props.theme.timingFunc };

  display: grid;
  height: 100%;
`

