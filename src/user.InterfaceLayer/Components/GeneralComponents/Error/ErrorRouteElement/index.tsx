import { FC } from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const Error: FC = () => {

  const error = useRouteError()
  console.log(error)

  const isRouteError = isRouteErrorResponse(error)

  if(isRouteError) {
    switch(error.status) {
      case 404:
        return <div>This page doesn't exist!</div>
      case 401:
        return <div>You aren't authorized to see this</div>
      case 503:
        return <div>Looks like our API is down</div>
      case 418:
        return <div>🫖</div>
    }
  }

}

export default Error