import { useState } from "react"
import { ThemeProvider } from "styled-components"
import Text from "./user.InterfaceLayer/UI/components/Text"
import CssReset from "./user.InterfaceLayer/UI/components/CssReset"
import Container from "./user.InterfaceLayer/UI/components/Container"
import Button from "./user.InterfaceLayer/UI/components/Button"
import ArrowDownIcon from "./user.InterfaceLayer/UI/Icons/ArrowDownIcon"
import Input from "./user.InterfaceLayer/UI/components/Input"
import SearchIcon from "./user.InterfaceLayer/UI/Icons/SearchIcon"
import { InputType } from "./user.InterfaceLayer/UI/components/Input/enum"
import Select from "./user.InterfaceLayer/UI/components/Select"
import { options } from "./user.InterfaceLayer/UI/components/Select/mock"
import Switch from "./user.InterfaceLayer/UI/components/Switch"
import Checkbox from "./user.InterfaceLayer/UI/components/Checkbox"
// import BasicLink from "./user.InterfaceLayer/UI/components/BasicLink"

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

        {/* <BasicLink to='/'>Доски Agile</BasicLink> */}

      </Container>

    </ThemeProvider>
  )
}

export default App
