import styled from 'styled-components'


export const Container = styled.div`
    position: relative;
    width: 250px;
    height: 270px;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: .25rem;

    @media (max-width: 575.98px) {
        width: 280px;
    }
`


export const ImageContainer = styled.div`
    border-radius: .25rem;
    background: #fff;
    padding: .5rem 0;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    overflow: hidden;
`


export const Info = styled.div`
    height: 120px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


export const Title = styled.h3`
    padding: 1rem;
    color: #fff;
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    
    @media (max-width: 575.98px) {
        padding: 1rem .5rem;
        font-size: .9rem;
    }
`


export const BottomContainer = styled.div`
    display: flex;
`


export const Price = styled.h3`
    padding: .5rem 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    background: ${({ theme }) => theme.colors.blue75};
    border: 1px solid ${({ theme }) => theme.colors.line70};
    color: #fff;
    width: 100%;
    text-align: center;
`


export const Buy = styled.button`
    width: 90px;
    background: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.line70};

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;

    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
    cursor: pointer;

    transition: ease .3s all;
    &:hover {
        filter: brightness(1.2);
    }

    svg {
        animation: svgAnime .5s linear 1 forwards;
    }

    &.active {
        background: #00a13b;

        svg {
            animation: svgAnime .5s linear 1 forwards;
        }
    }

    @keyframes svgAnime {
        0% {
            transform: scale(0);
        } 
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }
`

export const Score = styled.div`
    width: 90px;
    background: #e84f4f;
    color: #fff;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
    border: 1px solid ${({ theme }) => theme.colors.line70};

    transition: ease .3s all;
    @media (min-width: 991.99px) {
        &:hover {
            filter: brightness(1.2);

            .feedback {
                visibility: visible;
                opacity: 1;
                bottom: calc(-30px - .4rem);
            }
        }
    }

    @media (max-width: 575.98px) {
        &.active {
            filter: brightness(1.2);

            .feedback {
                visibility: visible;
                opacity: 1;
                bottom: calc(-30px - .4rem);
            }
        }
    }
`

export const FeedbackRequired = styled.div`
    position: absolute;
    right: 0;
    bottom: calc(-30px - .4rem);
    background-color: #e84f4f;
    color: #fff;
    padding: .2rem .5rem;
    border-radius: .25rem;

    font-size: .9rem;
    text-align: center;

    transition: ease .2s all;
    opacity: 0;
    bottom: 0;
    visibility: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -.3rem;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        width: 10px;
        height: 10px;
        background: #e84f4f;
    }
`