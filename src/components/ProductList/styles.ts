import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;

    @media (max-width: 575.98px) {
        gap: 3.5rem 1rem;
    }
`

export const FeedbackRequired = styled.div`
    width: 250px;
    height: 50px;
    border-radius: .25rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    position: fixed;
    bottom: -100px;
    right: 1rem;
    transition: ease .2s all;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: ${({ theme }) => theme.colors.success};
    border: 3px solid ${({ theme }) => theme.colors.lineSuccess};
    color: #fff;
    
    &.active {
        bottom: 1rem;
    }
`