import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 10px;
        font-family: 'Segoe UI', 'Open Sans', sans-serif;
    }

    *, *:before, *:after {
        box-sizing: inherit
    }

    h1, h2, h3, h4, h5, p, button, ul, li {
        margin: 0;
        padding: 0;
    }
    ul {
        list-style: none;
    }
    button {
        background: transparent;
        outline: 0;
    }
    a { 
        text-decoration: none;
        color: #393939
    }

    body {
        padding: 0; 
        margin: 0 auto;
        max-width: 500px;
        background: #fefefe;
        height: 100vh;
        width: 100%;
        overscroll-behavior: none;
        font-size: 1.5rem;
    }

    #app {
        box-shadow: 0 0 10px rgba(0, 0, 0, .05);
        overflow-x: hidden;
        min-height: 100vh;
        padding-bottom: 10px;
    }
`;