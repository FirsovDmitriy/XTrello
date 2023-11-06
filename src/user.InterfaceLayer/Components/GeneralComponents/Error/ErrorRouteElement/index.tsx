import { FC } from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const Error: FC = () => {

  const error = useRouteError()
  console.log(error)

  const isRouteError = isRouteErrorResponse(error)

  if(isRouteError) {
    if(error.status === 404) {
      return <div>This page doesn't exist!</div>;
    }

    if(error.status === 401) {
      return <div>You aren't authorized to see this</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
  }

}

export default Error