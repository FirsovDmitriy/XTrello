import { FC, useContext } from 'react'
import { DateContext } from '../../Context'

import * as SC from './styled'

const YearCalendar: FC = () => {

  const rootDate = useContext(DateContext)

  const prevYears = [...Array(8)].map((_, index) => {
    return rootDate.subtract((index+1), 'year')
  }).reverse()

  const nextYears = [...Array(8)].map((_, index) => {
    return rootDate.add(index, 'year')
  })

  const allYears = prevYears.concat(nextYears)

  return (
    <SC.YearCalendar>
      {allYears.map(year => (
        <SC.Button
          key={year.format('YYYY')}
          $thisYear={year.isSame(rootDate, 'year') ? true : false}
          onClick={() => console.log('Click')}
        >
          { year.format('YYYY') }
        </SC.Button>
      ))}
    </SC.YearCalendar>
  )
}

export default YearCalendar