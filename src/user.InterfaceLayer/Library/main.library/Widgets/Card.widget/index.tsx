import { FC, useState } from 'react'
import Button from '../../UI-Kit/Buttons'
import Dropdowns from '../../UI-Kit/Dropdowns'
import { NavLink } from 'react-router-dom'
import ModalWarning from './components/Modal.warning'

const Card: FC = () => {
  const [showEl, setShowEl] = useState<boolean>(false)

  return (
    <div className="group flex w-full border-b border-thirdColor cursor-pointer">
      <div className="flex w-full px-4 pb-2">
        <NavLink to={'#'} className='flex-auto text-[0.875rem]'>
          <p>В.Название</p>
          <div className="flex justify-between">
            <span className="flex gap-4">
              <p>#1</p>
              <p className='text-secondaryColor'>Иванов И.И. создал(а) 1 час назад</p>
            </span>

            <p className='text-secondaryColor'>Баранов В.В. изменил(а) 1 минуту назад</p>
          </div>
        </NavLink>
        <div className='pl-4 hidden group-hover:block'>
          <Dropdowns onClose={() => setShowEl(false)}>
            <Dropdowns.Toggle>
              <Button variant="square" onClick={() => setShowEl(!showEl)}>
                <i className="icon MoreVert-icon"></i>
              </Button>
            </Dropdowns.Toggle>
            <Dropdowns.Menu show={showEl}>
              <Dropdowns.Item>
                <NavLink to={'#'}>Редактировать</NavLink>
              </Dropdowns.Item>
              <Dropdowns.Item>
                <ModalWarning />
              </Dropdowns.Item>
            </Dropdowns.Menu>
          </Dropdowns>
        </div>
      </div>
    </div>
  )
}

export default Card
