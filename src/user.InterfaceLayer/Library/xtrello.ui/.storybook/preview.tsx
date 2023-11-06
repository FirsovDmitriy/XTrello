import React from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from '../src/styles/theme'

import BasicCss from '../lib/BasicCss'

// const XTheme = Theme('dark')

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};


export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <BasicCss />
      <Story />
    </ThemeProvider>
  ),
];
