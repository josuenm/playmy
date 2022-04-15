import { Container } from "src/styles/pages/HomeStyles";
import { ProductList } from "src/components/ProductList";
import { Head } from "src/components/Head";


type ProductProps = {
    id: number;
    image: string;
    name: string;
    price: number;
    score: number;
}


interface HomeProps {
    products: ProductProps[];
}


export default function Home({ products }: HomeProps) {
    return(
        <Container>
            <Head 
              title="Home - PLAYMY" 
              description="Os melhores preços dos mercado, peça já o seu." 
            />

            <ProductList productList={products} />
        </Container>
    )
}