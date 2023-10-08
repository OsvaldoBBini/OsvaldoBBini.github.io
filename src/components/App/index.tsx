import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/themes/global';
import defaultTheme from '../../assets/themes/default';

import { Container } from './styles';

import Home from '../../pages/Home';

export default function App(): JSX.Element {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles/>
        <Container>
          <Home/>
        </Container>
      </ThemeProvider>
    </>
  )
}
