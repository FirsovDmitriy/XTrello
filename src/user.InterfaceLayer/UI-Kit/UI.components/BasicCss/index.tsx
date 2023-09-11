import { createGlobalStyle } from "styled-components"

const Styles = createGlobalStyle`
  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 1rem;
  }

  body {
    min-height: 100vh;
    margin: 0;
    background: ${ props => props.theme.backColor };
    color: ${ props => props.theme.textColor };
  }

  #root {
    display: grid;
    grid-template-rows: 1fr max-content;
  }

  button {
    font-family: inherit;
    font-weight: inherit;
    cursor: pointer;
    padding: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  h1,
  h2 {
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  *::before, *::after {
    box-sizing: inherit;
  }
`

const BasicCss = () => <Styles />

export default BasicCss