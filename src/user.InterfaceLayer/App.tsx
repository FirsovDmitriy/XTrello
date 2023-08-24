import { useState } from "react"
import { ThemeProvider } from "styled-components"
import Text from "./UI/components/Text"
import CssReset from "./UI/components/CssReset"
import Container from "./UI/components/Container"
import Button from "./UI/components/Button"
import ArrowDownIcon from "./UI/Icons/ArrowDownIcon"
import Input from "./UI/components/Input"
import SearchIcon from "./UI/Icons/SearchIcon"
import { InputType } from "./UI/components/Input/enum"
import Select from "./UI/components/Select"
import { options } from "./UI/components/Select/mock"
import Switch from "./UI/components/Switch"
import Checkbox from "./UI/components/Checkbox"
import BasicLink from "./UI/components/BasicLink"

const App = () => {
  const [isDark] = useState(false)
  const [selected, setSelected] = useState<string>('')
  console.log('Selected', selected)
  
  // TODO: convert colors to constant
  const theme = {
    backColor: isDark ? '#282828' : '#F4F4F4' ,
    textColor: isDark ? '#F4F4F4' : '#373737'
  }

  return (
    <ThemeProvider theme={ theme }>
      <CssReset />
      
      <Container>
        <Text>
          Hello React + TypeScript
        </Text>
        <Button
          variant='outlined'
        >
          Action
        </Button>
        <Button append={ <ArrowDownIcon /> }>button</Button>
        <Button variant='square'>4</Button>
        <Button
          variant='primary'
          disabled
        >
          Action
        </Button>

        <Input placeholder="Name" Icon={{
          prepend: <SearchIcon />,
        }} />

        <Input placeholder="Phone" type={InputType.NUMBER} />

        <Select
          onChange={setSelected}
          value={selected}
          placeholder="Выберите значение..."
          options={options}
        />

        <Switch />

        <Checkbox />

        <BasicLink to='/'>Доски Agile</BasicLink>

      </Container>

    </ThemeProvider>
  )
}

export default App
