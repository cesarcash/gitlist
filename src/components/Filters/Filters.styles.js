import styled from "styled-components";

export const FiltersStyled = styled.div`

    grid-area: filters;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-block-end: 2.5rem;

    .filter__title {
        display: none;
    }
    
    .filter__form {
        display: flex;
        gap: 1rem;
        flex-direction: column;
    }

    .select__list {
        display: flex;
        gap: .5rem;
    }

    @media screen and (min-width: 768px){

        margin-block-end: 1.5rem;

        .filter__title {
            display: block;
            margin: 0;
            color: var(--white);
            font: var(--headline2-semi-bold);
        }

        .filter__form {
            flex-direction: row;
        }

    }

`