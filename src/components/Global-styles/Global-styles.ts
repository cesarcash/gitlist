import {createGlobalStyle} from "styled-components";

const GlobalStylesStyled = createGlobalStyle`

    :root {
        --bg: #0d1117;
        --white: #fffffe;
        --grey-1: #c5ced7;
        --grey-2: #3f4954;
        --buttonBG: #22262c;
        --badge: #15223A;
        --primary: #57a6ff;
        --icon: #fff;
        --pink: #cc68a0;
        --backdrop-color: rgba(255,255,255,.1);

        --black: #141414;
        --black-1: #171b21;
        --grey: #8b949e;
        --yellow: #f1e05a;
        --purple: #563d7c;
        --headline1: 600 1.625rem/2rem Inter;
        --button-text: 500 0.875rem/1.5rem Inter;
        --headline2-semi-bold: 600 1.25rem/1.5rem Inter;
        --headline2-ligth: 300 1.25rem/1.5rem Inter;
        --body1-regular: 400 1rem/1.5rem Inter;
        --body1-semi-bold: 700 1rem/1.5rem Inter;
        --body2-regular: 400 0.875rem/1.5rem Inter;
        --body2-semi-bold: 600 0.875rem/1.5rem Inter;
        --caption-regular: 400 0.75rem/1.125rem Inter;
        --caption-medium: 500 0.75rem/1.125rem Inter;
    }

    body {
        margin: 0;
        font: var(--body1-regular);
        background-color: var(--bg);
        color: var(--grey);
    }

    @media screen and (prefers-color-scheme: light){

        :root {
            --bg: #fffffe;
            --white: #50565c;
            --grey-1: #92949e;
            --grey-2: #cad4dfff;
            --buttonBG: #dddddd;
            --badge: #d5d5d5;
            --primary: #5c5c5c;
            --icon: #92949e;
            --pink: #bf0dae;
            --backdrop-color: rgba(0,0,0,.1);
        }

    }

`

export default GlobalStylesStyled;