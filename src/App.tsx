import { ThemeProvider } from 'styled-components'
import { theme } from 'src/styles/theme'
import { Header } from 'src/components/Header';
import GlobalStyle from './styles/GlobalStyle';
import Home from 'src/pages/Home';
import Cart from 'src/pages/Cart';
import { CartProvider } from './contexts/cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <Router>
                
          <GlobalStyle />
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho" element={<Cart />} />
          </Routes>

        </Router>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
