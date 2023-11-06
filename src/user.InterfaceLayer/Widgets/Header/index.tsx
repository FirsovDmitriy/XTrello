import { FC, useState, MouseEvent } from 'react'
import AppLink from '../../UI-Kit/UI.components/AppLink'
import Button from '../../UI-Kit/UI.components/Button'
import Variant from '../../UI-Kit/UI.components/Button/enum'
import Avatar from '../../UI-Kit/UI.components/Avatar'
import Dropdowns from '../../UI-Kit/UI.components/Dropdowns'
import { useLocation, useNavigate } from 'react-router-dom'

import * as SC from './styled'

const Header: FC = () => {

  // const location = useLocation()
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [open, setOpen] = useState(false)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }

  // const handleClose = () => setOpen(false)

  return (
    <SC.Header>
      <SC.HeaderContainer>
        <SC.HeaderNav>
          <AppLink to='/'>
            Проекты
          </AppLink>
          <AppLink to='/tasks'>
            Задачи
          </AppLink>
          <AppLink to='#'>
            Пользователи
          </AppLink>
        </SC.HeaderNav>

        <Button
          onClick={ () => navigate('/tasks/create') }
          variant={Variant.LINK}
          style={{ gap: '8px' }}
        >
          Создать
          <span>
            <i className='icon ArowDropDown-icon'></i>
          </span>
        </Button>
        
        <Button
          variant={Variant.GHOST}
          onClick={ handleClick }
          style={{ gap: '8px' }}
        >
          <Avatar />
          {/* <i className='icon ArowDropDown-icon'></i> */}
        </Button>

        {/* <Dropdowns
          anchorEl={anchorEl}
          open={ open }
          onClose={ handleClose }
        >
          <DropdownElm>
            <a href="#">Профиль</a>
          </DropdownElm>
          <DropdownElm>
            <a href="#">
              Выход
            </a>
          </DropdownElm>
        </Dropdowns> */}

      </SC.HeaderContainer>
    </SC.Header>
  )
}

export default Header