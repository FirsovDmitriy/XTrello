import { useState } from "react"
import { ThemeProvider } from "styled-components"
import BasicCss from "./UI-Kit/UI.components/BasicCss"
import { darkTheme } from "./styles/themes/Dark"
import { lightTheme } from "./styles/themes/Light"
import Button from "./UI-Kit/UI.components/Button"
import Variant from "./UI-Kit/UI.components/Button/enum"
import TextField from "./UI-Kit/UI.components/TextField"

const App = () => {
  const [isDark] = useState(true)

  const theme = isDark ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={ theme }>
      <BasicCss />
      
      <Button>Button</Button>

      <Button variant={Variant.GHOST}>Button</Button>

      <TextField placeholder="Search..." />
      
    </ThemeProvider>
  )
}

export default App
