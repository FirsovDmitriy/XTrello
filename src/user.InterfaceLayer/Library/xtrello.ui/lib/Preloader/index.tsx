import { FC, useEffect } from 'react'
import { useTheme } from 'styled-components'

import * as SC from './styled'

const Preloader: FC = () => {

  const theme = useTheme()

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.documentElement.style.overflow = 'visible'
    }
  })

  return (
    <SC.Overlay>
      <SC.Preloader
        width={'60'}
        height={'60'}
        viewBox='0 0 60 60'
        xmlns='http://www.w3.org/2000/svg'
      >
        <SC.AnimationCircle
          r={'20'}
          cx={'30'}
          cy={'30'}
          stroke={ theme.background.primary }
        />
      </SC.Preloader>
    </SC.Overlay>
  );
};

export default Preloader;
