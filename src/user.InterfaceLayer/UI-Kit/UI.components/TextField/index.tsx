import { FC } from 'react';
import { IProps } from './type';
import { Variant } from './enum';

import * as ST from './styled';

const TextField: FC<IProps> = ({
  onChange,
  value,
  Icon,
  isError,
  variant = 'underlined',
  ...props
}) => {
  return (
    <ST.TextField>
      {Icon?.prepend ? <ST.IconPrepend>{Icon.prepend}</ST.IconPrepend> : null}

      {variant === Variant.OUTLINED ? (
        <ST.OutlinedInput
          value={value}
          onChange={onChange}
          isError={isError}
          {...props}
          $prepend={Boolean(Icon?.prepend)}
          $append={Boolean(Icon?.append)}
        />
      ) : (
        <ST.UnderlinedInput
          value={value}
          onChange={onChange}
          isError={isError}
          $prepend={Boolean(Icon?.prepend)}
          $append={Boolean(Icon?.append)}
          { ...props }
        />
      )}

      {isError ? <ST.InvalidFeedback>Текст ошибки</ST.InvalidFeedback> : null}

      {Icon?.append ? <ST.IconAppend>{Icon.append}</ST.IconAppend> : null}
    </ST.TextField>
  );
};

export default TextField;

// underlined
