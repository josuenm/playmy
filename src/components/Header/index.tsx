import { Container, Content, Logo, Search, Selected } from "./styles";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Icon } from "src/components/Icon";
import { useContext, useEffect, useState } from "react";
import { CartContext, CartStateProps } from "src/contexts/cart";


export function Header() {

    const { cart } = useContext(CartContext) as CartStateProps

    const [inCart, setInCart] = useState(0)

    useEffect(() => setInCart(cart.length), [cart.length])

    return (
        <Container>
            <Content>
                <Logo>
                    play<span>my</span>
                </Logo>

                <Search>
                    <input type="text" placeholder="Buscar..." />
                </Search>

                <Selected>
                    <Icon 
                      IconElement={ShoppingCartIcon} 
                      isNotification={true}
                      notification={inCart}
                      hoverColor="#0094ff" />
                </Selected>
            </Content>
        </Container>
    )
}