import { useState, useRef, FC } from 'react'
import useOutside from '../../hooks/useOutside'
import { IProps } from './type'
import DoneIcon from '../../Icons/DoneIcon'
import ArrowDownIcon from '../../Icons/ArrowDownIcon'

import * as ST from './styled'

const Select: FC<IProps> = ({ onChange, value, multiple, placeholder, options }) => {
  const [isVisible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  function handleClose() {
    setVisible(false)
  }

  function valueSelection(option: string) {
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
    setVisible(false)
  }

  function isOptionSelected(option: string) {
    return multiple ? value?.includes(option) : option === value
  }

  useOutside(ref, handleClose)

  return (
    <ST.Select ref={ref}>
      <ST.Base onClick={() => setVisible(!isVisible)}>
        <ST.Content>
          {/* TODO: */}
          { (Array.isArray(value) ? value.join(", ") : value) || placeholder }
        </ST.Content>
        <ST.Arrow $isVisible={isVisible}>
          <ArrowDownIcon />
        </ST.Arrow>
        <ST.NativeInput
          value={Array.isArray(value) ? value.join(", ") : value}
        />
      </ST.Base>

      <ST.List $isVisible={isVisible}>
        
        {options?.map(option => (
          <ST.Item
          role='option'
          onClick={() => valueSelection(option.value)}
          key={option.value}
        >
          <span> { option.label } </span>
          { isOptionSelected(option.value) && <DoneIcon /> }
        </ST.Item>
        ))}

      </ST.List>
      
    </ST.Select>
  )
}

export default Select