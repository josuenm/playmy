import { Container, Content, Logo, Search } from "./styles";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Icon } from "src/components/Icon";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { findProduct } from "src/services/api";

interface HeaderProps {
    setProducts: (products: any) => void;
}


export function Header({ setProducts }: HeaderProps) {


    const url = useLocation()

    const isPath = url.pathname === '/carrinho' ? true : false

    const searchElement = useRef<HTMLInputElement>(null);
    const searchTimeOut = useRef<any>(null);

    function handleSearch() {
        clearTimeout(searchTimeOut.current)

        searchTimeOut.current = setTimeout(async () => {

            let value = ''

            if(searchElement.current?.value) value = searchElement.current?.value

            let newProducts = await findProduct(value)

            setProducts(newProducts)
        }, 1000)
    }

    return (
        <Container>
            <Content>
                <Link to="/">
                    <Logo>
                        play<span>my</span>
                    </Logo>
                </Link>

                {!isPath && (
                    <Search>
                        <input 
                          type="text" 
                          placeholder="Buscar..." 
                          ref={searchElement}
                          onChange={handleSearch} />
                    </Search>
                )}

                <Link to="carrinho">
                    <Icon 
                        IconElement={ShoppingCartIcon} 
                        isNotification={true}
                        hoverColor="#0094ff" />
                </Link>
            </Content>
        </Container>
    )
}