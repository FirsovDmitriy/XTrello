import { useState } from "react"
import { ThemeProvider } from "styled-components"
import Text from "./UI-Kit/UI.components/Typography"
import CssReset from "./UI-Kit/UI.components/BasicCss"
import Container from "./UI-Kit/UI.components/Container"
import Button from "./UI-Kit/UI.components/Button"
import ArrowDownIcon from "./UI-Kit/Icons/ArrowDownIcon"
import SearchIcon from "./UI-Kit/Icons/SearchIcon"
import { InputType } from "./UI-Kit/UI.components/TextField/enum"
import Select from "./UI-Kit/UI.components/SelectMenus"
import { options } from "./UI-Kit/UI.components/SelectMenus/mock"
import Switch from "./UI-Kit/UI.components/Switch"
import Checkbox from "./UI-Kit/UI.components/Checkbox"
import BasicLink from "./UI-Kit/UI.components/AppLink"
import Popover from "./UI-Kit/UI.components/Dropdowns"
import PopoverItem from "./UI-Kit/UI.components/Dropdowns/PopoverItem"
import Tooltip from "./UI-Kit/UI.components/Tooltip"
import Modal from "./UI-Kit/UI.components/Modal"
import ModalActions from "./UI-Kit/UI.components/Modal/ModalActions"
import RadioButton from "./UI-Kit/UI.components/RadioGroups"
import Typography from "./UI-Kit/UI.components/Typography"
import { Variant } from "./UI-Kit/UI.components/Typography/enum"
import TextField from "./UI-Kit/UI.components/TextField"
import Tag from "./UI-Kit/UI.components/Tag"
import Textarea from "./UI-Kit/UI.components/Textarea"
// import Preloader from "./UIkit/UI.components/Preloader"

const App = () => {
  const [isDark] = useState(false)
  const [selected, setSelected] = useState<string[]>([])
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

      <header>Header
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate cum minus, soluta facere eos quia vel, cumque maiores sed provident nostrum architecto quae nam dolore fugiat dolores hic. Possimus.
      </header>

      <ul>
        <li>Text 2</li>
        <li>Text 2</li>
        <li>Text 2</li>
        <li>Text 2</li>
      </ul>
      
      <Container>
        <Textarea
          placeholder="Add your comment"
        ></Textarea>
        <Tag bgColor="rgba(49, 151, 149, 0.6)">Завершена</Tag>
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

        <TextField placeholder="Name" Icon={{
          prepend: <SearchIcon />
        }} />

        <TextField placeholder="Phone" type={InputType.NUMBER} />

        <Select
          onChange={setSelected}
          value={selected}
          placeholder="Выберите значение..."
          options={options}
          multiple={true}
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

        {/* <Preloader /> */}

      </Container>

    </ThemeProvider>
  )
}

export default App
