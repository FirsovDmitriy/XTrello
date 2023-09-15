import { FC, useRef, useEffect } from 'react';
import { IProps } from './type';
import useOutside from '../../hooks/useOutside';
import { Context } from './Context';

import * as ST from './styled';

const Popover: FC<IProps> = ({ children, buttonTrigger, onClose, isShow }) => {
  const ref = useRef<HTMLDivElement>(null)
  const ref_2 = useRef<HTMLDivElement>(null) // TODO:
  useOutside(ref, onClose)

  const root = ref?.current // TODO:
  const offsetBottom = root?.getBoundingClientRect().bottom // TODO:
  const height = ref_2?.current?.getBoundingClientRect().height
  const diff = document.documentElement.clientHeight - offsetBottom
    console.log('Diff', diff)

  const setPositioningStyles = () => {
    console.log('Scroll')
    
    if(typeof(offsetBottom) !== 'number') {
      return
    }

    // const diff = document.documentElement.clientHeight - offsetBottom
    // console.log('Diff', diff)
    

    if(typeof(height) === 'number' && height > diff) {
      console.log('True!!!!')
      
      ref_2.current && (ref_2.current.style.bottom = '100%')
    } else {
      ref_2.current && (ref_2.current.style.top = '100%')
      console.log('False!!!!!')
    }
  }

  // ref_2.current && (ref_2.current.style.top = '100%')

  useEffect(() => {
    document.addEventListener('scroll', setPositioningStyles)
    // setPositioningStyles()

    return () => {
      document.removeEventListener('scroll', setPositioningStyles)
    }
  }, [])

  return (
    <ST.Popover ref={ref}>
      <ST.Trigger>
        { buttonTrigger }
      </ST.Trigger>
      <ST.Content
        $isShow={isShow}
        ref={ref_2}
        // style={setPositioningStyles()}
      >
        <Context.Provider value={{ onClose }}>
          { children }
        </Context.Provider>
      </ST.Content>
    </ST.Popover>
  );
};

export default Popover;
