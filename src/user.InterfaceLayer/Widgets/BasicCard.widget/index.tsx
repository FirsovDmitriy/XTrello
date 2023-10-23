import { FC } from 'react'
import Button from '../../UI-Kit/UI.components/Button'
import Variant from '../../UI-Kit/UI.components/Button/enum'

import * as SC from './styled'

const BasicCard: FC = () => {
  return (
    <SC.BasicCard href='#'>
      <SC.BasicCardMain>
        <SC.BasicCardRow>
          Г.Название
        </SC.BasicCardRow>
        <SC.BasicCardRow>
          <p>#22</p>
          <p>Иванов И.И. создал(а) 1 час назад</p>
        </SC.BasicCardRow>
      </SC.BasicCardMain>

      <SC.BasicCardActions>
        <Button variant={Variant.SQUARE}>
          <i className='icon MoreVert-icon'></i>
        </Button>
      </SC.BasicCardActions>
    </SC.BasicCard>
  )
}

export default BasicCard