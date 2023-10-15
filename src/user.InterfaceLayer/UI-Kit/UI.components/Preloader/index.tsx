import { FC } from 'react'
import { useTheme } from 'styled-components'

import * as ST from './styled'

const Preloader: FC = () => {

  const theme = useTheme()

  return (
    <ST.Overlay>
      <ST.Preloader
        width={'60'}
        height={'60'}
        viewBox='0 0 60 60'
        xmlns='http://www.w3.org/2000/svg'
      >
        <ST.Circle r={'20'} cx={'30'} cy={'30'} stroke={ 'none' } />
        <ST.AnimationCircle
          r={'20'}
          cx={'30'}
          cy={'30'}
          stroke={ theme.background.primary }
        />
      </ST.Preloader>
    </ST.Overlay>
  );
};

export default Preloader;
