import { useContext } from "react";
import { CartContext, CartStateProps } from "src/contexts/cart";
import { Container, FeedbackRequired } from "./styles";
import { Product } from "src/components/Product";


type ProductProps = {
    id: number;
    image: string;
    name: string;
    price: number;
    score: number;
}


interface ProductListProps {
    productList: ProductProps[];
}


export function ProductList({ productList }: ProductListProps) {

    const {
        feedbackSuccess,
    } = useContext(CartContext) as CartStateProps

    return (
        <Container>
            {productList.map((item, index) => (

                item !== undefined && (
                <Product 
                  image={item.image} 
                  title={item.name} 
                  price={item.price} 
                  score={item.score} 
                  id={item.id}
                  key={item.id} 
                  index={index}
                />)
            ))}

            <FeedbackRequired className={feedbackSuccess?'active':''}>
                Adicionado ao carrinho
            </FeedbackRequired>
        </Container>
    )
}