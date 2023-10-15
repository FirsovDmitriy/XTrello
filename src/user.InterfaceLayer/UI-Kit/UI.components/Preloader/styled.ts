import { styled, keyframes } from "styled-components"

const widthLine = 4

const rotate = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`

export const Preloader = styled.svg`
  place-self: center;
  fill: none;
`

export const Circle = styled.circle`
  stroke-width: ${ widthLine }px;
`

export const AnimationCircle = styled.circle`
  stroke-dasharray: 288;
  stroke-dashoffset: 288;
  stroke-linecap: round;
  animation: ${ rotate } 2.5s infinite cubic-bezier(.56,.23,.9,.51);
  stroke-width: ${ widthLine }px;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${ 999 };
  display: grid;
  width: 100%;
  height: 100%;
  background: ${ props => props.theme.background.hovered };
`