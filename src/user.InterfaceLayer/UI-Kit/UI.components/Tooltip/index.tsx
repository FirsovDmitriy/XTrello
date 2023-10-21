import { FC, useEffect, useRef } from 'react'
import SolidArrow from '../../../assets/img/solid_arrow.svg'
import { IProps } from './type'

import * as ST from './styled'

const Tooltip: FC<IProps> = ({ children, label }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const rest = ref.current?.getBoundingClientRect()
    const wDocument = document.documentElement.clientWidth
    const part = rest?.width / 2 - 10
    if(typeof(rest?.left) === 'number' && rest.left < 0) {
      console.log('<---', rest.left)
      ref.current?.style && (ref.current.style.left = `${part}px`)
    }

    if(typeof(rest?.right) === 'number' && rest?.right > wDocument) {
      console.log('--->',)
      ref.current?.style && (ref.current.style.right = `${part}px`)
    }
  }, [])

  return (
    <ST.Tooltip>
      <ST.Content >
        <ST.Wrapper >
          <ST.Img src={SolidArrow} />
          <ST.Text ref={ref} style={{ position: 'relative', left: '0' }}>
          { label }
          </ST.Text>
        </ST.Wrapper>
      </ST.Content>
      { children }
    </ST.Tooltip>
  )
}

export default Tooltip