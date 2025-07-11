import styled from "styled-components";

export const ProfileStyled = styled.div`
    grid-area: profile;
    /* background-color: #333; */

    .custom {
        /* border: 5px solid red; */
    }

    .avatar {
        border-radius: 50%;
        border: 1px solid var(--grey-1);
        overflow: hidden;
        box-sizing: border-box;
        margin-block-end: 1.5rem;
    }

    .name {
        margin: 0;
        font: var(--headline1);
        color: var(--white);
        margin-block-end: .5rem;
    }

    .username {
        margin-block-start: .5rem;
        margin-block-end: 1.5rem;
        font: var(--headline2-ligth);
    }

    .info {
        color: var(--grey-1);
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: .5rem;
        margin-block: 1rem;
        font: var(--body2-semi-bold);
    }

    a:hover {
        text-decoration: underline;
    }

    .buttons {
        margin-block: 1.5rem;
        display: flex;
        gap: .5rem;
    }

    .stars {
        margin-block-end: 1.5rem;
    }

`