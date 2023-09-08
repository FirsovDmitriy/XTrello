import { FC } from 'react';
import Colors from '../../constants/colors';

import * as ST from './styled';
const Preloader: FC = () => {
  return (
    <ST.Overlay>
      <ST.Preloader
        width={'60'}
        height={'60'}
        viewBox='0 0 60 60'
        xmlns='http://www.w3.org/2000/svg'
      >
        <ST.Circle r={'20'} cx={'30'} cy={'30'} stroke={ Colors.SECONDARY_BG } />
        <ST.AnimationCircle
          r={'20'}
          cx={'30'}
          cy={'30'}
          stroke={Colors.PRIMARY}
        />
      </ST.Preloader>
    </ST.Overlay>
  );
};

export default Preloader;
