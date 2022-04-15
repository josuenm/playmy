import { ThemeProvider } from 'styled-components'
import { theme } from 'src/styles/theme'
import { Header } from 'src/components/Header';
import GlobalStyle from './styles/GlobalStyle';
import Home from 'src/pages/Home';
import Cart from 'src/pages/Cart';
import { CartProvider } from './contexts/cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { makeServer } from './services/mirage';
import { useEffect, useState } from 'react';
import { getProducts } from './services/api';



function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
      async function loadProducts() {
          try {
              let response = await getProducts()
              setProducts(response.data)
          } catch(err) {
              console.log({ERROR: err})
          }
      }
      loadProducts()
  }, [])

  if(process.env.NODE_ENV === 'development') {
    makeServer()
  }

  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <Router>
                
          <GlobalStyle />
          <Header setProducts={setProducts} />

          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/carrinho" element={<Cart />} />
          </Routes>

        </Router>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
