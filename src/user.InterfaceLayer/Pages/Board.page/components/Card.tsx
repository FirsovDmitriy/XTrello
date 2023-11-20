import { FC } from 'react'
import { Link } from 'react-router-dom'
import RoutesPath from '../../../router/routesPath'

const Card: FC = () => {
  return (
    <Link to={RoutesPath.CARD_TASK}>
      <div className="p-4 rounded bg-thirdColor">Card test, test</div>
    </Link>
  )
}

export default Card
