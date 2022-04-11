import { createGlobalStyle } from 'styled-components';
import { theme } from 'src/styles/theme';


const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: ${theme.colors.blue90};
    }
`

export default GlobalStyle;