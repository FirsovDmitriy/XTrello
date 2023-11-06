import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
  }

  html {
    color: ${(props) => props.theme.pallete.text};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${(props) => props.theme.pallete.paper.default};
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: min-content 1fr;
  }

  button {
    font: inherit;
    cursor: pointer;
    padding: 0;
    background: inherit;
    color: inherit;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  h1, h2, h3, h4, p {
    margin: 0;
  }

  h1, h2, h3 {
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, textarea {
    box-sizing: border-box;
    font: inherit;
    outline: none;
    margin: 0;
  }

  *::before, *::after {
    box-sizing: inherit;
  }

  *::-webkit-scrollbar {
  width: 4px;
  height: 7px;
  border-radius: 10px;
}
*::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  border-radius: 10px;
}
*::-webkit-scrollbar-thumb {
  background: linear-gradient(to right top, #2E6CEE, #2E6CEE, #2E6CEE, #2E6CEE, #2E6CEE);
  border: 0 none #ffffff;
  border-radius: 10px;
}
*::-webkit-scrollbar-thumb:hover {
  background: #0505A9;
}
*::-webkit-scrollbar-thumb:active {
  background: #0505A9;
}
*::-webkit-scrollbar-track {
  background: transparent;
  border: 0 none #ffffff;
  border-radius: 50px;
}
*::-webkit-scrollbar-track:hover {
  background: transparent;
}
*::-webkit-scrollbar-track:active {
  background: transparent;
}
*::-webkit-scrollbar-corner {
  background: transparent;
}
`;

const BasicCss = () => <GlobalStyles />;

export default BasicCss;
