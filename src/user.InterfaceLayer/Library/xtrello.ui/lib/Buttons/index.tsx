import { FC } from 'react';
import { TypeProps } from './type';

import * as SC from './styled';

const Button: FC<TypeProps> = ({
  children,
  variant = 'primary',
  prepend,
  append,
  ...props
}) => {
  switch (variant) {
    case 'primary':
      return (
        <SC.Button {...props}>
          {prepend ? (
            <SC.PrependIcon>{ prepend }</SC.PrependIcon>
          ) : null}
          { children}
          {append ? (
            <SC.AppendIcon> { append } </SC.AppendIcon>
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
  }
};

export default Button;
