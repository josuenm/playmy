import { Container, Content, Logo, Search, Selected } from "./styles";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { Icon } from "src/components/Icon";


export function Header() {
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
                    <Icon IconElement={FavoriteSharpIcon} isNotification={false} />
                    <Icon IconElement={ShoppingCartIcon} isNotification={true} />
                </Selected>
            </Content>
        </Container>
    )
}