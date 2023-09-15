import { FC } from 'react';
import { IProps } from './type';

import * as ST from './styled';

const TextField: FC<IProps> = ({
  onChange,
  value,
  Icon,
  isError,
  errorMessage,
  ...props
}) => {
  return (
    <ST.TextField>
      {Icon?.prepend ? <ST.IconPrepend>{Icon.prepend}</ST.IconPrepend> : null}

      <ST.Input
          value={value}
          onChange={onChange}
          isError={isError}
          {...props}
          $prepend={Boolean(Icon?.prepend)} // TODO:
          $append={Boolean(Icon?.append)} // TODO:
        />

      {isError ? <ST.InvalidFeedback>
        { errorMessage }
      </ST.InvalidFeedback> : null}

      {Icon?.append ? (
        <ST.IconAppend>
          {Icon.append}
        </ST.IconAppend>
      ) : null}
    </ST.TextField>
  );
};

export default TextField;
