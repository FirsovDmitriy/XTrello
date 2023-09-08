import { useState, useRef, FC } from 'react'
import useOutside from '../../hooks/useOutside'
import { IProps } from './type'
import DoneIcon from '../../Icons/DoneIcon'
import ArrowDownIcon from '../../Icons/ArrowDownIcon'

import * as ST from './styled'

const Select: FC<IProps> = ({ onChange, value, multiple, placeholder, options }) => {
  const [isShow, setIsShow] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  function handleClose() {
    setIsShow(false)
  }

  function handleChange(option: string) {
    if(multiple) { 
      const isOptionIncluded = value?.includes(option)
      if(isOptionIncluded) onChange?.(
        (value as string[])
          .filter(item => item !== option)
      )
      else {
        onChange?.([...(value as string[]), option])
      }
    } else onChange?.(option)
    setIsShow(false)
  }

  function isOptionSelected(option: string): boolean {
    if(multiple) {
      return ( value?.includes(option) ) ?? false
    } else {
      return option === value
    }
  }

  function formatValueToString(): string {
    return Array.isArray(value) ? (
      value.join(', ')
    ) : value
  }

  useOutside(ref, handleClose)

  return (
    <ST.Select ref={ref}>
      <ST.Base onClick={() => setIsShow(!isShow)} $isShow={isShow}>
        <ST.Content>
          { formatValueToString() || placeholder }
        </ST.Content>
        <ST.Arrow $isShow={isShow}>
          <ArrowDownIcon />
        </ST.Arrow>
        <ST.NativeInput
          value={ formatValueToString() }
        />
      </ST.Base>

      <ST.List $isShow={isShow}>
        
        {options?.map(option => (
          <ST.Item
            role='option'
            onClick={() => handleChange(option.value)}
            $disabled={ option?.disabled }
            key={option.value}
          >
            { option.label }
            { isOptionSelected(option.value) && <DoneIcon /> }
          </ST.Item>
        ))}

      </ST.List>
      
    </ST.Select>
  )
}

export default Select