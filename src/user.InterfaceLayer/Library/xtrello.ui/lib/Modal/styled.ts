import { styled } from "styled-components"

export const Modal = styled.div<{$show: boolean}>`
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: ${ props => props.$show ? 'all' : 'none' };
  z-index: 99;
`

export const ModalContainer = styled.section<{ $show: boolean }>`
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.10);
  background: ${ props => props.theme.backColor };
  visibility: ${ props => props.$show ? 'visible' : 'hidden' };
  transition: transform 0.3s ease-in-out;
  z-index: 999;
  opacity: ${ props => props.$show ? 1 : 0 };

  transform: translateX(${ props => props.$show ? '0' : '-4rem' });

  width: 640px;

  border-radius: ${ props => props.theme.borderRadius };
  background: ${ props => props.theme.pallete.paper.default };

  place-self: center;
`

export const ModalBackdrop = styled.div<{$show: boolean}>`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  background: ${ props => props.theme.pallete.paper.blackout };
  opacity: ${ props => props.$show ? 1 : 0 };
  pointer-events: ${ props => props.$show ? 'all' : 'none' };
  transition: opacity 0.3s ${ props => props.theme.timingFunc };
`
