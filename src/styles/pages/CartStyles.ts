import styled from 'styled-components'



export const Container = styled.div`
    max-width: 1120px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;

    @media (max-width: 991.98px) {
        flex-direction: column;
    }
`


export const CartItemsList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 10rem;
`


export const CartItem = styled.div`
    width: 100%;
    display: flex;
    gap: 3rem;
    padding: 1rem 0;
    
    border-bottom: 1px solid ${({ theme }) => theme.colors.line70};
    
    &:first-of-type {
        border-top: 1px solid ${({ theme }) => theme.colors.line70};
    }

    @media (max-width: 991.98px) {
        padding: 1rem;
    }
`


export const CartItemImageContainer = styled.div`
    width: 60px;
    background: #fff;
    padding: .25rem 0;
    border-radius: .25rem;
    overflow: hidden;

    img {
        width: 100%;
    }
`


export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;
`


export const Title = styled.h2`
    color: #fff;
    font-size: 1.1rem;
`


export const Price = styled.p`
    color: #eee;
    font-size: .9rem;
`


export const Checkout = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5rem 0 1rem 0;
    padding-left: 1rem;
    box-shadow: -10px 0px 15px -10px #101010;
    width: 50%;
    color: #fff;

    .title {
        font-size: 3rem;
        padding: 0;
        margin: 0;
        margin-bottom: 3rem;
    }

    @media (max-width: 991.98px) {
        box-shadow: none;
        padding: 3rem 1rem;
        margin: 0 auto;
        justify-content: flex-start;
        gap: 3rem;
        width: 100%;
    }
`


export const CheckoutHeader = styled.div``


export const ListOrders = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`


export const Order = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: .5rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line70};

    .name {
        font-size: 1rem;
        margin-left: .8rem;
    }
    
    .price {
        font-size: .8rem;
        font-weight: ${({ theme }) => theme.fontWeight.regular};
        margin-right: .8rem;
    }
`


export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .total {
        padding-bottom: .8rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.line70};
    }
`


export const OrderButton = styled.button`
    border: none;
    padding: 1rem 0;
    border-radius: .25rem;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    font-size: 1.3rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    cursor: pointer;

    transition: ease all .4s;
    &:hover {
        filter: brightness(1.2);
    }

    &:disabled {
        pointer-events: none;
        opacity: .4;
    }
`