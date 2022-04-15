import { useEffect, useState } from "react";
import { 
    CartItem, 
    CartItemImageContainer, 
    CartItemsList, 
    Container, 
    Title, 
    Info, 
    Price,
    Checkout,
    ListOrders,
    Order,
    OrderContainer,
    CheckoutHeader,
    OrderButton, 
} from "src/styles/pages/CartStyles";


type CartItemProps = {
    id: string;
    name: string;
    price: number;
    image: string;
}


export function Cart() {

    const [cartItems, setCartItems] = useState<CartItemProps[]>([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let localCart = JSON.parse(localStorage.getItem('cart') as string)
        setCartItems(localCart)
        let price = 0
        localCart.forEach((item: { price: number; }) => {
            price = price + item.price
        })
        setTotalPrice(price)
    }, [])

    

    return (
        <Container>
            <CartItemsList>
                <>
                    {cartItems.map(item => (
                        <CartItem key={item.id}>
                            <CartItemImageContainer>
                                <img 
                                  src={`/images/${item.image}`} 
                                  alt={item.name} />

                            </CartItemImageContainer>
                            <Info>
                                <Title>{item.name}</Title>
                                <Price>
                                    {Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(item.price)}
                                </Price>
                            </Info>
                        </CartItem>
                    ))}
                </>
            </CartItemsList>
            <Checkout>
                <CheckoutHeader>
                    <h1 className="title">Checkout</h1>

                    <ListOrders>
                        {cartItems.map(item => (
                            <Order className="item" key={item.id}>
                                <h6 className="name">{item.name}</h6>

                                <h6 className="price">
                                    {Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(item.price)}
                                </h6>
                            </Order>
                        ))}
                    </ListOrders>
                </CheckoutHeader>

                <OrderContainer>
                    <h2 className="total">
                        Total: {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(totalPrice)}
                    </h2>

                    <OrderButton type="button">Finalizar Pedido</OrderButton>
                </OrderContainer>
            </Checkout>
        </Container>
    )
}


export default Cart;