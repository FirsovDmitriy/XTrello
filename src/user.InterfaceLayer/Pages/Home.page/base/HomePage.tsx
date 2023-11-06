import { FC, useState } from 'react';
import EmptyBlock from '../../../UI-Kit/UI.components/EmptyBlock';
import TextField from '../../../UI-Kit/UI.components/TextField';
// import SelectMenus from '../../../UI-Kit/UI.components/SelectMenus';
// import AddProject from './AddProject';
import Pagination from '../../../UI-Kit/UI.components/Pagination';
import BasicCard from '../../../Widgets/BasicCard.widget';

import { HomeRow, HomeGrid } from './styled';

const HomePage: FC = () => {
  const [isEmpty] = useState(false);

  return (
    <>
      {isEmpty ? (
        <EmptyBlock>Не создан ни один проект</EmptyBlock>
      ) : (
        <>
          <HomeRow>
            <h2>Проекты</h2>
            <TextField
              Icon={{
                append: <i className='icon Search-icon'></i>,
              }}
              placeholder='Поиск...'
            />
            {/* <AddProject /> */}
          </HomeRow>

          <HomeGrid>

            {/* <BasicCard /> */}

          </HomeGrid>

          <Pagination />
        </>
      )}
    </>
  );
};

export default HomePage;
