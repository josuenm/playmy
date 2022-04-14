import { Container } from "src/styles/pages/HomeStyles";
import { ProductList } from "src/components/ProductList";
import { api } from "src/services/products";
import { useEffect, useState } from "react";



export default function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function loadProducts() {
            let response = await api.getProducts()
            setProducts(response.data)
        }
        loadProducts()
    }, [])

    return(
        <Container>
            <ProductList productList={products} />
        </Container>
    )
}