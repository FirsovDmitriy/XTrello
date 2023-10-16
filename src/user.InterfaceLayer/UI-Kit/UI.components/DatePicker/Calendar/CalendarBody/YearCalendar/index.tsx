import { FC } from 'react'
import dayjs from 'dayjs'

import * as SC from './styled'

const now = dayjs(new Date())

const YearCalendar: FC = () => {
  return (
    <SC.YearCalendar>
      <SC.Button>1111</SC.Button>
      <SC.Button>1111</SC.Button>
      <SC.Button>1111</SC.Button>
      <SC.Button>1111</SC.Button>
      <SC.Button>1111</SC.Button>
      <SC.Button>1111</SC.Button>
      <SC.Button>1111</SC.Button>
      <SC.Button>1111</SC.Button>
      <SC.Button>4444</SC.Button>
      <SC.Button>4444</SC.Button>
      <SC.Button>4444</SC.Button>
      <SC.Button>4444</SC.Button>
      <SC.Button>4444</SC.Button>
      <SC.Button>4444</SC.Button>
      <SC.Button>4444</SC.Button>
      <SC.Button>4444</SC.Button>
      <SC.Button>4444</SC.Button>
      <SC.Button>4444</SC.Button>
      <SC.Button>4444</SC.Button>
      <SC.Button>4444</SC.Button>
    </SC.YearCalendar>
  )
}

export default YearCalendar