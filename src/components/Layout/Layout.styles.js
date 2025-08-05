import styled from "styled-components";

export const LayoutStyled = styled.main`

    min-block-size: 100vh;
    max-inline-size: 75rem;
    margin: auto;
    padding-inline: 1.25rem;
    padding-block: 2.5rem;

    @media screen and (min-width: 768px){
    
        display: grid;
        grid-template-areas: "profile filters" "profile repo-list";
        grid-template-columns: 278px 1fr;
        grid-template-rows: auto 1fr;
        column-gap: 2rem;

    }

`