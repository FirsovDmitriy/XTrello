import { FC, useState } from 'react'
import HeaderNav from './components/HeaderNav'
import Container from '../../UI-Kit/Container'
import Dropdowns from '../../UI-Kit/Dropdowns'
import Button from '../../UI-Kit/Buttons'
import { NavLink } from 'react-router-dom'
import RoutesPath from '../../../../router/routesPath'

const Header: FC = () => {

  const [showEl, setShowEl] = useState<boolean>(false)

  return (
    <header className='bg-[#111]'>
      <Container className='flex justify-end items-center gap-6'>
        <HeaderNav />
        {/*    Dropdown    */}
        <Dropdowns onClose={() => setShowEl(false)}>
          <Dropdowns.Toggle>
            <Button
              onClick={() => setShowEl(!showEl)}
            >
              AB
              <i className='icon ArowDropDown-icon'></i>
            </Button>
          </Dropdowns.Toggle>
          <Dropdowns.Menu
            show={showEl}
          >
            <Dropdowns.Item>
              <NavLink to={RoutesPath.PROFILE}>
                Profile
              </NavLink>
            </Dropdowns.Item>
            <Dropdowns.Item>Exit</Dropdowns.Item>
          </Dropdowns.Menu>
        </Dropdowns>

      </Container>
    </header>
  )
}

export default Header