import { ReactNode, FC } from "react"

type TypeIcon = {
  element: ReactNode
}

const Icon: FC<TypeIcon> = ({element}) => (
  element
    ? <span className="flex">
        { element }
      </span>
    : null
)

export default Icon