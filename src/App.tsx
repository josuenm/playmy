import { ThemeProvider } from 'styled-components'
import { theme } from 'src/styles/theme'
import { Header } from 'src/components/Header';
import GlobalStyle from './styles/GlobalStyle';
import Home from 'src/pages/Home';
import { CartProvider } from './contexts/cart';



function App() {

  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Home />
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
