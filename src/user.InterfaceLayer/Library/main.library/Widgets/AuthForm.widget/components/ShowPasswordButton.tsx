import { FC } from 'react'
import HideIcon from '../../../assets/icons/HideIcon'
import ShowIcon from '../../../assets/icons/ShowIcon'

type FieldType = 'text' | 'password'

type TypeProps = {
  fieldType: FieldType
  setFieldType: (param: FieldType) => void
}

const ShowPasswordButton: FC<TypeProps> = ({ fieldType, setFieldType }) => {
  return (
    <button
      onClick={() => {
        fieldType === 'password'
          ? setFieldType('text')
          : setFieldType('password')
      }}
      className="grid"
    >
      {fieldType === 'password' ? <HideIcon /> : <ShowIcon />}
    </button>
  )
}

export default ShowPasswordButton
