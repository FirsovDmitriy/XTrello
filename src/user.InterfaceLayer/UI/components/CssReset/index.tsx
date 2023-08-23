import { createGlobalStyle } from "styled-components"

const Reset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background: ${ props => props.theme.backColor };
  }
  button {
    font-family: inherit;
    font-size: 14px;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  svg {
    display: flex;
  }
  ul {
    list-style: none;
  }
`

const CssReset = () => <Reset />

export default CssReset