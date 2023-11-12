import { styled, keyframes } from "styled-components"

const WIDTH_LINE = 4

const rotate = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`

export const Preloader = styled.svg`
  position: relative;
  place-self: center;
  fill: none;
  z-index: 999;
`

export const Circle = styled.circle`
  stroke-width: ${ WIDTH_LINE }px;
`

export const AnimationCircle = styled.circle`
  stroke-dasharray: 216;
  stroke-dashoffset: 216;
  stroke-linecap: round;
  animation: ${ rotate } 1.5s infinite cubic-bezier(.56,.23,.9,.51);
  stroke-width: ${ WIDTH_LINE }px;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  display: grid;
  width: 100%;
  height: 100%;
  background: ${ props => props.theme.pallete.paper.blackout };
`