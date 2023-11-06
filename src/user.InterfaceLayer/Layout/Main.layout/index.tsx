import { FC, useState } from 'react'
import { Outlet } from 'react-router-dom'
import BasicCss from '../../UI-Kit/UI.components/BasicCss'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '../../styles/themes/Dark'
import { lightTheme } from '../../styles/themes/Light'
import Header from '../../Widgets/Header'

import { PageContent } from './styled'

const MainLayout: FC = () => {

  const [isDark] = useState<boolean>(false)
  const theme = isDark ? darkTheme : lightTheme

  return <ThemeProvider theme={ theme }>
    <BasicCss />
    <Header />
    <PageContent>
      <Outlet />
    </PageContent>
  </ThemeProvider>
}

export default MainLayout