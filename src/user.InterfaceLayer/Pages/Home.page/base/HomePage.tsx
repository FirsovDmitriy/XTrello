import { FC, useState } from 'react';
import EmptyBlock from '../../../UI-Kit/UI.components/EmptyBlock';
import TextField from '../../../UI-Kit/UI.components/TextField';
import SelectMenus from '../../../UI-Kit/UI.components/SelectMenus';
import AddProject from './AddProject';
import Pagination from '../../../UI-Kit/UI.components/Pagination';
import BasicCard from '../../../Widgets/BasicCard.widget';

import { HomeRow, HomeGrid } from './styled';

const options = [
  {
    value: 'Option1',
    label: 'По названию',
  },
  {
    value: 'Option1',
    label: 'По автору',
  },
  {
    value: 'Option1',
    label: 'По дате создания',
  },
  {
    value: 'Option1',
    label: 'По дате обновления',
  },
];

const HomePage: FC = () => {
  const [isEmpty] = useState(false);

  return (
    <>
      {isEmpty ? (
        <EmptyBlock>Не создан ни один проект</EmptyBlock>
      ) : (
        <>
          <HomeRow>
            <TextField
              Icon={{
                append: <i className='icon Search-icon'></i>,
              }}
              placeholder='Поиск...'
            />
            <SelectMenus
              options={options}
              placeholder='По названию'
              onChange={() => ''}
              value={''}
            />
            <AddProject />
          </HomeRow>

          <HomeGrid>

            <BasicCard />

          </HomeGrid>

          <Pagination />
        </>
      )}
    </>
  );
};

export default HomePage;
