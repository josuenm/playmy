import { ThemeProvider } from 'styled-components'
import { theme } from 'src/styles/theme'
import GlobalStyle from './styles/GlobalStyle';
import { Header } from 'src/components/Header';



function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
