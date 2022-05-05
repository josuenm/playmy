import { Container } from "./styles";
import { CartContext, CartStateProps } from "src/contexts/cart";
import { useContext } from "react"



interface IconProps {
    IconElement: any;
    isNotification: boolean;
    hoverColor?: string;
}


export function Icon({ 
    IconElement, isNotification, hoverColor = ''}: IconProps) {


    const { cartTotal } = useContext(CartContext) as CartStateProps


    return (
        <Container data-hover={hoverColor}>
            {isNotification && cartTotal > 0 && (
                <div className="notification">{cartTotal}</div>
            )}

            <IconElement className="icon" />
        </Container>
    )
}