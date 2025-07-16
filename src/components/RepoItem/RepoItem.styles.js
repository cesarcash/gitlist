import styled from "styled-components";

export const RepoItemStyled = styled.div`

    padding-block: 1rem;
    border-block-end: 1px solid var(--grey-2);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    &:last-child {
        border-block-end: none;
    }
    &:first-child {
        border-block-start: 1px solid var(--grey);
    }

    .title {
        display: flex;
        gap: 1rem;
        margin: 0;
        a {
            color: var(--primary);
            text-decoration: none;
        }
    }    

    .public {
        border: 1px solid var(--grey);
        font: var(--caption-regular);
        color: var(--grey);
        padding: .125rem .5rem;
        border-radius: .5rem;
    }

    .description {
        font: var(--body2-regular);
        margin: 0;
    }

    .topicList {
        display: flex;
        gap: .25rem;
    }

    .topicItem {
        color: var(--primary);
        padding-block: .25rem;
        padding-inline: .75rem;
        font: var(--caption-medium);
        background: #15223A;
        border-radius: 2rem;
    }

    .details {

        display: flex;
        gap: 1rem;
        font: var(--caption-regular);

    }

    .details__item {

        display: flex;
        gap: .5rem;
        align-items: center;
        color: var(--grey-1);
        & span::first-letter {
            text-transform: uppercase;
        }

    }


` 