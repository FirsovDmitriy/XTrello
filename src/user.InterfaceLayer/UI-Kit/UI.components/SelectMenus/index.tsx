import { useState, useRef, FC, useEffect } from 'react';
import useOutside from '../../hooks/useOutside';
import { IProps, Option } from './type';

import * as ST from './styled';

const SelectMenus: FC<IProps> = ({
  onChange,
  value,
  multiple,
  placeholder,
  options,
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  useOutside(ref, handleClose);
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filteredData, setFilteredData] = useState<Option[]>([])

  function handleClose() {
    setIsShow(false);
  }

  function handleChange(option: string) {
    if (multiple) {
      const isOptionIncluded = value?.includes(option);
      if (isOptionIncluded)
        onChange?.((value as string[]).filter((item) => item !== option));
      else {
        onChange?.([...(value as string[]), option]);
      }
    } else onChange?.(option);
    setIsShow(false);
  }

  function isOptionSelected(option: string): boolean {
    if (multiple) {
      return value?.includes(option) ?? false;
    } else {
      return option === value;
    }
  }

  function formatValueToString(): string {
    return Array.isArray(value) ? value.join(', ') : value;
  }

  useEffect(() => {
    const filteredOut = options.filter(({ label }) => {
      return label.includes(searchQuery)
    })
    setFilteredData(filteredOut)
  }, [searchQuery, options])

  return (
    <ST.SelectMenus ref={ref}>
      <ST.Base onClick={() => setIsShow(!isShow)} $isShow={isShow}>
        <ST.Content>{formatValueToString() || placeholder}</ST.Content>
        <ST.Arrow $isShow={isShow}>
          <i className='icon ArowDropDown-icon'></i>
        </ST.Arrow>
        <ST.NativeInput value={formatValueToString()} />
      </ST.Base>

      <ST.Container $isShow={isShow}>
        <ST.SearchForm role='search'>
          <ST.SearchField
            value={searchQuery}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSearchQuery(event.target.value);
            }}
            placeholder='Поиск...'
            type='search'
          />
          <i className='icon Search-icon'></i>
        </ST.SearchForm>

        {filteredData.length ? (
          <ST.List>
            {filteredData.map((option) => (
              <ST.Item
                role='option'
                onClick={() => handleChange(option.value)}
                $disabled={option?.disabled}
                key={option.value}
              >
                {option.label}
                {isOptionSelected(option.value) && <i className='icon Done-icon'></i>}
              </ST.Item>
            ))}
          </ST.List>
        ) : (
          <ST.NotFound>Ничего не найдено</ST.NotFound>
        )}
      </ST.Container>
    </ST.SelectMenus>
  );
};

export default SelectMenus;
