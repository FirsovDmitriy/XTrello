import { useState, MouseEvent } from "react"
import { ThemeProvider } from "styled-components"
import BasicCss from "./UI-Kit/UI.components/BasicCss"
import { darkTheme } from "./styles/themes/Dark"
import { lightTheme } from "./styles/themes/Light"
import Button from "./UI-Kit/UI.components/Button"
import Variant from "./UI-Kit/UI.components/Button/enum"
import TextField from "./UI-Kit/UI.components/TextField"
import Dropdowns from "./UI-Kit/UI.components/Dropdowns"
import Switch from "./UI-Kit/UI.components/Switch"
import SelectMenus from "./UI-Kit/UI.components/SelectMenus"
import { options } from "./UI-Kit/UI.components/SelectMenus/mock"
import Modal from "./UI-Kit/UI.components/Modal"
import AppLink from "./UI-Kit/UI.components/AppLink"
import DatePicker from "./UI-Kit/UI.components/DatePicker"

const App = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [open, setOpen] = useState(false)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(!open)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }

  const [openModal, setModal] = useState(false)

  const [isDark] = useState(false)

  const theme = isDark ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={ theme }>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia officiis ullam voluptatibus odit repudiandae vel ratione autem deleniti modi sint illum dolor laudantium, maxime, fuga libero, ea nisi. Dolorum, praesentium?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam praesentium repellat qui alias fugiat, architecto suscipit possimus deserunt omnis dolore quo doloribus ipsum atque blanditiis quibusdam ea iure voluptate eveniet dignissimos tenetur? Ducimus provident laudantium atque fugiat saepe eaque, autem esse consequatur blanditiis libero deleniti, labore velit in repudiandae ut cupiditate optio voluptatum nesciunt perferendis! Eum dolore commodi voluptates ad, atque, reprehenderit sit unde quis itaque, dolor iste illo molestiae qui eos dignissimos veniam! Animi, nostrum similique nesciunt dolorum nam sit sint ut voluptatem ducimus quasi odio molestiae! Quam necessitatibus, optio dolore quis in perspiciatis voluptatibus provident maiores ullam enim?</p>
      <BasicCss />
      <Button onClick={() => setModal(true)}>Primary</Button>
      <Button variant={Variant.GHOST}>Ghost</Button>
      <Button disabled>Disabled</Button>
      <TextField placeholder="Search..." />

      <AppLink to="#">Components</AppLink>

      <DatePicker />


      <SelectMenus
        options={options}
        placeholder="Search..."
        multiple
      />


      <Button
        onClick={handleClick}
        aria-controls="menu"
        aria-haspopup="true"
      >
        D
      </Button>
      <Dropdowns
        onClose={handleClose}
        open={open}
        anchorEl={anchorEl}
      >
        <Dropdowns.Elm>
          <a href="#">
          Anna
          </a>
        </Dropdowns.Elm>
        <Dropdowns.Elm>
          <a href="#">
            Alina
          </a>
        </Dropdowns.Elm>
        <Dropdowns.Elm>
          <a href="#">
            Julia
          </a>
        </Dropdowns.Elm>
        <Dropdowns.Elm>
          <a href="#">
            Arina
          </a>
        </Dropdowns.Elm>
      </Dropdowns>

      <TextField
        placeholder="Search..."
        Icon={{
          prepend: <i className='icon Search-icon'></i>, 
          append: <i className='icon Search-icon'></i>
        }}
      />

      <Modal
        open={ openModal }
        onClose={() => setModal(false)}
      >
        <Modal.Heading>React Bootstrap</Modal.Heading>

        <Modal.Body>
          <h4>Body</h4>
        </Modal.Body>

        <Modal.Footer>
          <Button variant={Variant.GHOST} onClick={() => setModal(false)}>
            Cancel
          </Button>
          <Button>Add</Button>
        </Modal.Footer>

      </Modal>

      <Switch />

      <TextField placeholder="Disabled"  disabled/>
      
    </ThemeProvider>
  )
}

export default App
