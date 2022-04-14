import { createContext, ReactNode, useEffect, useState } from "react"


interface CartProviderProps {
    children: ReactNode;
}


type CartContextData = {
    id: number;
    image: string;
    name: string;
    price: number;
}


export interface CartStateProps {
    cart: CartContextData[];
    setCart: React.Dispatch<React.SetStateAction<never[]>>;
    feedbackSuccess: boolean;
    setFeedbackSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}


export const CartContext = 
    createContext<CartStateProps | CartContextData[]>([])


export function CartProvider({ children }: CartProviderProps) {

    const [feedbackSuccess, setFeedbackSuccess] = useState(false)
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') as string))

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart') as string))
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart, setCart, feedbackSuccess, setFeedbackSuccess
        }}>
            {children}
        </CartContext.Provider>
    )
}