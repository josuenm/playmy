import styled from 'styled-components';


export const Container = styled.header`
    padding: 1rem 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.blue90};
    box-shadow: 0px 0px 15px 0 #101010;
    border-bottom: 1px solid #1a242b;
`


export const Content = styled.div`
    margin: 0 auto;
    max-width: 1120px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`


export const Logo = styled.h1`
    text-align: center;
    color: #fff;
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    span {
        color: ${({ theme }) => theme.colors.primary};
    }
`


export const Search = styled.div`
    position: relative;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: .25rem;

    input {
        background: transparent;
        border: none;
        padding: .5rem 1rem;
        color: #fff;
        font-size: 1rem;
        outline: none;

        &::placeholder {
            color: ${({ theme }) => theme.colors.whiteDisabled};
        }
    }
`


export const Selected = styled.div`
    display: flex;
    gap: 0 2rem;
`