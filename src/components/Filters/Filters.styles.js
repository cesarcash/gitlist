import styled from "styled-components";

export const FiltersStyled = styled.div`
    grid-area: filters;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .count {
        margin: 0;
        color: var(--white);
        font: var(--headline2-semi-bold);
    }
    .action-list {
        display: flex;
        gap: 1rem;
    }
    .select-list {
        display: flex;
        gap: .5rem;
    }
`