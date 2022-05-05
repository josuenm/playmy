import { 
    BottomContainer, 
    Buy, 
    Container, 
    FeedbackRequired, 
    ImageContainer, 
    Info, 
    Price, 
    Score, 
    Title 
} from "./styles";
import DoneIcon from '@mui/icons-material/Done';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Icon } from "src/components/Icon";
import { useContext, useEffect, useState } from "react";
import { CartContext, CartStateProps } from "src/contexts/cart";



interface ProductProps {
    image: string;
    title: string;
    price: number;
    score: number;
    id: number;
    index: number;
}


export function Product(
    { image: Img, title, price, score, id, index, ...rest }: ProductProps) {

    const [inCart, setInCart] = useState(false)
    
    const { cart, addToCart, removeToCart } = useContext(CartContext) as CartStateProps

    useEffect(() => {
        setInCart(cart.filter(item => item.id === id).length > 0?true:false)
    }, [cart, id])

    function handleCart() {
        setInCart(!inCart)

        if(inCart) {
            removeToCart(id)
        } else {
            addToCart({id,price,image: Img,name: title,})
        }

    }

    const [mobileScore, setMobileScore] = useState(false)
    
    return (
        <Container {...rest}>
            <ImageContainer>
                <img src={`/images/${Img}`} alt={title} />
            </ImageContainer>

            <Info>
                <Title>{title.length < 43?title:title.slice(0, 25) + '...'}</Title>

                <BottomContainer>
                    <Buy 
                      type="button" 
                      onClick={handleCart} 
                      className={inCart?'active':''}>
                        {
                            inCart ? (
                                <Icon 
                                  IconElement={DoneIcon} 
                                  isNotification={false} />
                            ) : (
                                <Icon 
                                  IconElement={AddShoppingCartIcon} 
                                  isNotification={false} />
                            )
                        }
                    </Buy>

                    <Price>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(price)}
                    </Price>

                    <Score 
                      className={mobileScore?'active':''} 
                      onClick={() => setMobileScore(!mobileScore)}
                    >
                        {score}

                        <FeedbackRequired className="feedback">
                            Score
                        </FeedbackRequired>
                    </Score>
                </BottomContainer>
            </Info>
        </Container>
    )
}