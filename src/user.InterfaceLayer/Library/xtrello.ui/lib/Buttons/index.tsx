import { FC } from 'react';
import { TypeProps } from './type';

import * as SC from './styled';

const Button: FC<TypeProps> = ({
  children,
  variant = 'primary',
  prependIcon,
  appendIcon,
  ...props
}) => {
  switch (variant) {
    case 'primary':
      return (
        <SC.Button {...props}>
          {prependIcon ? (
            <SC.PrependIcon>{ prependIcon }</SC.PrependIcon>
          ) : null}
          { children}
          {appendIcon ? (
            <SC.AppendIcon> { appendIcon } </SC.AppendIcon>
          ) : null}
        </SC.Button>
      );
    case 'ghost':
      return (
        <SC.GhostButton {...props}>
          { children }
        </SC.GhostButton>
      )
    case 'square':
      return (
        <SC.SquareButton {...props}>
          { children }
        </SC.SquareButton>
      )
    case 'link':
      return (
        <SC.LinkButton {...props}>
          { children }
        </SC.LinkButton>
      )
  }
};

export default Button;
