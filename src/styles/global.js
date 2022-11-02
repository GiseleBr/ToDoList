import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #121214;
        color: #c4c4cc;
        -webkit-font-smoothing: antialiased; //so funciona no MacOS
    }

    body, input, textarea, button {
        font-family: Verdana;
        font-weight: 400;
        font-size: 1rem; //16px
    }

    input, textarea, button {
        cursor: pointer;
    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 2px #5e60ce;
    }

    [disabled] {
        cursor: not-allowed;
        opacity: 0.7;
    }


`;