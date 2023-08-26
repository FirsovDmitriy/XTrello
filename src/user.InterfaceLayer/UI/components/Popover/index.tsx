import { FC, useRef, useEffect, useCallback } from 'react';
import { IProps } from './type';
import useOutside from '../../hooks/useOutside';
import { Context } from './Context';

import * as ST from './styled';

const Popover: FC<IProps> = ({ children, buttonTrigger, onClose, isShow }) => {
  const ref = useRef<HTMLDivElement>(null)
  const ref_2 = useRef<HTMLDivElement>(null) // TODO:

  const root = ref?.current // TODO:
  const offsetBottom = root?.getBoundingClientRect().bottom // TODO:
  const height = ref_2?.current?.getBoundingClientRect().height

  const setPositioningStyles = useCallback(() => {
    if(typeof(offsetBottom) !== 'number') {
      return
    }

    const diff = document.documentElement.clientHeight - offsetBottom

    if(typeof(height) === 'number' && height > diff) {
      return {
        bottom: '100%'
      }
    } else return {
      top: '100%'
    }
  }, [height, offsetBottom])

  useEffect(() => {
    document.addEventListener('scroll', setPositioningStyles)

    return () => {
      document.removeEventListener('scroll', setPositioningStyles)
    }
  }, [])

  useOutside(ref, onClose)

  return (
    <ST.Popover ref={ref}>
      <ST.Trigger>
        { buttonTrigger }
      </ST.Trigger>
      <ST.Content
        $isShow={isShow}
        ref={ref_2}
        style={setPositioningStyles()}
      >
        <Context.Provider value={onClose}>
          { children }
        </Context.Provider>
      </ST.Content>
    </ST.Popover>
  );
};

export default Popover;
