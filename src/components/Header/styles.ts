import styled from 'styled-components';


export const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;

    padding: 1rem 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.blue90};
    box-shadow: 0px 0px 15px 0 #101010;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line90};
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
    width: 400px;
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