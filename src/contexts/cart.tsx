import { createContext, ReactNode, useEffect, useRef, useState } from "react"


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
    feedbackSuccess: boolean;
    addToCart: (data: CartContextData) => void;
    removeToCart: (id: number) => void;
    cartTotal: number;
}


export const CartContext = 
    createContext<CartStateProps | CartContextData[]>([])


export function CartProvider({ children }: CartProviderProps) {

    const [feedbackSuccess, setFeedbackSuccess] = useState(false)
    const [cart, setCart] = useState<CartContextData[]>([])
    const [cartTotal, setCartTotal] = useState(0)
    const feedbackRef = useRef<any>(null);

    function handleTotal(total: number) {
        setCartTotal(total)
    }

    function handleFeedback() {
        setFeedbackSuccess(true)

        clearTimeout(feedbackRef.current)

        feedbackRef.current = setTimeout(
            () => {
                setFeedbackSuccess(false)
            }, 1800
        )
    }


    function setCartStorage() {
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    function addToCart(data: CartContextData) {
        let newCart = cart
        newCart.push(data)
        setCart(newCart)

        setCartStorage()
        handleFeedback()
        handleTotal(newCart.length)
    }


    function removeToCart(id: number) {
        let index = cart.findIndex((item) => item.id === id)
        let newCart = cart
        newCart.splice(index)
        setCart(newCart)
        
        setCartStorage()
        handleTotal(newCart.length)
    }


    useEffect(() => {
        if(!!localStorage.getItem('cart') === false) {
            localStorage.setItem('cart', JSON.stringify([]))
        }

        let initialCart = JSON.parse(localStorage.getItem('cart') as string)

        setCart(initialCart)
        setCartTotal(initialCart.length)

    }, [])



    return (
        <CartContext.Provider value={{
            cart, feedbackSuccess, addToCart, removeToCart, cartTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}