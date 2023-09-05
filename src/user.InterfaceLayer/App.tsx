import { useState } from "react"
import { ThemeProvider } from "styled-components"
import Text from "./UI/components/Typography"
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
import Popover from "./UI/components/Popover"
import PopoverItem from "./UI/components/Popover/PopoverItem"
import Tooltip from "./UI/components/Tooltip"
import Modal from "./UI/components/Modal"
import ModalActions from "./UI/components/Modal/ModalActions"
import RadioButton from "./UI/components/RadioButton"
import Typography from "./UI/components/Typography"
import { Variant } from "./UI/components/Typography/enum"

const App = () => {
  const [isDark] = useState(false)
  const [selected, setSelected] = useState<string>('')
  console.log('Selected', selected)
  const [open, setOpen] = useState(false)
  const [isShow, setShow] = useState<boolean>(false)
  
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

        <Popover
          buttonTrigger={
            <Button variant="square" onClick={() => setOpen(!open)}>D</Button>
          }
          isShow={open}
          onClose={setOpen}
        >
          <PopoverItem>Text</PopoverItem>
          <PopoverItem>Text 1</PopoverItem>
          <PopoverItem>Text xxxx</PopoverItem>
          <PopoverItem>Text 55</PopoverItem>
          <PopoverItem>Text xx</PopoverItem>
        </Popover>

        

        <div
          style={{
            // position: 'absolute',
            // left: 0,
            // width: '50px',
          }}
        >
          <Tooltip
          label="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis recusandae aut maiores excepturi, quae neque perferendis libero"
        >
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet distinctio nostrum repudiandae accusantium facere sequi voluptas excepturi. Placeat quos nemo possimus dolore similique, provident pariatur dignissimos porro quia eos. Omnis?</p>
        </Tooltip>
        </div>

        <Button onClick={() => setShow(true)}>
          Open modal
        </Button>
        <Modal onClose={() => setShow(false)} title="Редактирование проекта" isShow={isShow}>
          <p>Hello ReactJS</p>
          <ModalActions>
            <Button variant="outlined" onClick={() => setShow(false)}>Cancel</Button>
            <Button onClick={() => console.log('Click')}>add</Button>
          </ModalActions>
        </Modal>

        <RadioButton />
        <RadioButton />
        <RadioButton />

        <Typography variant={ Variant.h1 }>Редактирование профиля</Typography>
        <Typography variant={ Variant.h2 }>Редактирование фото</Typography>
        <Typography $color="green">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias ipsa rem at incidunt veniam mollitia nostrum debitis rerum, unde temporibus, consequatur modi aperiam. Dicta vero recusandae excepturi odit qui accusamus?
        </Typography>

      </Container>

    </ThemeProvider>
  )
}

export default App
