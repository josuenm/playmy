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
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
}


export const CartContext = 
    createContext<CartStateProps | CartContextData[]>([])


export function CartProvider({ children }: CartProviderProps) {

    const [feedbackSuccess, setFeedbackSuccess] = useState(false)
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(cart.length)

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart') as string) || [])
    }, [])

    return (
        <CartContext.Provider value={{
            cart, setCart, feedbackSuccess, setFeedbackSuccess, total, setTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}