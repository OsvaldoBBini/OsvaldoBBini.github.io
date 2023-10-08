import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/themes/global';
import defaultTheme from '../../assets/themes/default';

import { Container } from './styles';
import {useMemo, useState} from'react'

import Router from '../../Router';
import { PageContext } from '../../contexts/PageContext'

export default function App(): JSX.Element {

  const [page, setPage] = useState<string>('/')
  const value = useMemo(() => ({ page, setPage }), [page]);

  return (
      <PageContext.Provider value={value}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles/>
          <Container>
            <Router />
          </Container>
        </ThemeProvider>
      </PageContext.Provider>
  )
}
