import { Container, Content, Logo, Search } from "./styles";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Icon } from "src/components/Icon";
import { useContext } from "react";
import { CartContext, CartStateProps } from "src/contexts/cart";
import { Link } from "react-router-dom";


export function Header() {

    const { total } = useContext(CartContext) as CartStateProps

    return (
        <Container>
            <Content>
                <Link to="/">
                    <Logo>
                        play<span>my</span>
                    </Logo>
                </Link>

                <Search>
                    <input type="text" placeholder="Buscar..." />
                </Search>

                <Link to="carrinho">
                    <Icon 
                        IconElement={ShoppingCartIcon} 
                        isNotification={true}
                        notification={total}
                        hoverColor="#0094ff" />
                </Link>
            </Content>
        </Container>
    )
}