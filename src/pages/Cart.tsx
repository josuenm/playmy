import { useContext, useEffect, useState } from "react";
import { Head } from "src/components/Head";
import { Icon } from "src/components/Icon";
import DeleteIcon from '@mui/icons-material/Delete';
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
    Trash, 
} from "src/styles/pages/CartStyles";
import { CartContext, CartStateProps } from "src/contexts/cart";


export function Cart() {

    const [totalPrice, setTotalPrice] = useState(0)
    const { cart, removeToCart, cartTotal } = useContext(CartContext) as CartStateProps


    useEffect(() => {
        let price = 0
        cart.forEach((item: { price: number; }) => {
            price = price + item.price
        })
        setTotalPrice(price)
    }, [cart, cartTotal])


    return (
        <Container>
            <Head 
              title="Carrinho - PLAYMY" 
              description="Pagamentos seguros e rápidos." 
            />

            <CartItemsList>
                <>
                    {cart.map(item => (
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
                            <Trash onClick={() => removeToCart(Number(item.id))}>
                                <Icon 
                                    isNotification={false}
                                    IconElement={DeleteIcon} />
                            </Trash>
                        </CartItem>
                    ))}
                </>
            </CartItemsList>
            <Checkout>
                <CheckoutHeader>
                    <h1 className="title">Checkout</h1>

                    <ListOrders>
                        {cart.map(item => (
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

                    <OrderButton type="button" disabled={totalPrice === 0}>
                        Finalizar Pedido
                    </OrderButton>
                </OrderContainer>
            </Checkout>
        </Container>
    )
}


export default Cart;