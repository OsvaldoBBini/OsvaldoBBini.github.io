import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../assets/themes/global';
import defaultTheme from '../../assets/themes/default';

import { Container } from './styles';

import Router from '../../Router';

export default function App(): JSX.Element {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles/>
        <Container>
          <Router />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}
