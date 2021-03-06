import styled from 'styled-components'



interface ContainerProps {
    "data-hover": string;
}


export const Container = styled.div<ContainerProps>`
    position: relative;
    cursor: pointer;

    &:hover {
        svg {
            color: ${(props) => !!props['data-hover']? props['data-hover'] : ''};
        }
    }
    
    svg {
        color: #fff;
        width: 30px;
        height: 30px;
        transition: ease .2s all;
    }

    .notification {
        position: absolute;
        top: -3px;
        right: -5px;

        max-width: 15px;
        max-height: 15px;
        width: 10px;
        height: 10px;
        font-size: .7rem;
        border-radius: 50%;
        color: #fff;
        background: ${({ theme }) => theme.colors.primary};

        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`