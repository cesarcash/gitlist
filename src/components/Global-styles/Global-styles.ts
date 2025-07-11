import {createGlobalStyle} from "styled-components";

const GlobalStylesStyled = createGlobalStyle`

    @font-face {
        font-family: 'Inter Light';
        src: url('./src/vendor/fonts/Inter_18pt-Light.ttf');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter Regular';
        src: url('./src/vendor/fonts/Inter_18pt-Regular.ttf');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter Medium';
        src: url('./src/vendor/fonts/Inter_24pt-Medium.ttf');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter SemiBold';
        src: url('./src/vendor/fonts/Inter_24pt-SemiBold.ttf');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter Bold';
        src: url('./src/vendor/fonts/Inter_28pt-Bold.ttf');
        font-weight: 700;
        font-style: normal;
    }

    :root {
        --primary: #57a6ff;
        --buttonBG: #22262c;
        --white: #fffffe;
        --bg: #0d1117;
        --black: #141414;
        --black-1: #171b21;
        --grey: #8b949e;
        --grey-1: #c5ced7;
        --grey-2: #3f4954;
        --pink: #cc68a0;
        --yellow: #f1e05a;
        --purple: #563d7c;
        --headline1: 600 1.625rem/2rem Inter SemiBold;
        --button-text: 500 0.875rem/1.5rem Inter Medium;
        --headline2-semi-bold: 600 1.25rem/1.5rem Inter SemiBold;
        --headline2-ligth: 300 1.25rem/1.5rem Inter Light;
        --body1-regular: 400 1rem/1.5rem Inter Regular;
        --body1-semi-bold: 700 1rem/1.5rem Inter Bold;
        --body2-regular: 400 0.875rem/1.5rem Inter Regular;
        --body2-semi-bold: 600 0.875rem/1.5rem Inter SemiBold;
        --caption-regular: 400 0.75rem/1.125rem Inter Regular;
        --caption-medium: 500 0.75rem/1.125rem Inter Medium;
    }

    body {
        font: var(--body1-regular);
        background-color: var(--bg);
        color: var(--grey);
        border: 10px solid pink;
    }

`

export default GlobalStylesStyled;