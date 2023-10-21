import { FC } from 'react'
import Button from '../Button'
import Variant from '../Button/enum'

import * as SC from './styled'

const Pagination: FC = () => {
  return (
    <SC.Pagination>
      
      <SC.PaginationNav>
        <Button variant={Variant.SQUARE}>
          <i className='icon ArrowBack-icon'></i>
        </Button>

        <Button variant={Variant.SQUARE}>
          <i className='icon ArrowForward-icon'></i>
        </Button>
      </SC.PaginationNav>

      <SC.PaginationForm>
        <SC.FormLabel>Перейти к странице</SC.FormLabel>
        <SC.FormInput />
      </SC.PaginationForm>

      <SC.PaginationDisplayedRow>21-27 из 27</SC.PaginationDisplayedRow>

    </SC.Pagination>
  )
}

export default Pagination