import styled from "styled-components";

export const ProfileStyled = styled.div`
    grid-area: profile;
    /* background-color: #333; */

    .avatar {
        border-radius: 50%;
        border: 1px solid var(--grey-2);
        overflow: hidden;
        box-sizing: border-box;
    }

    .name {
        color: var(--white);
        font: var(--headline1);
        margin-block-start: 1.5rem;
        margin-block-end: .5rem;
    }

    .username {
        color: var(--grey-2);
        font: var(--headline2-ligth);
        margin: 0;
    }

    .buttons {
        margin-block: 1.5rem;
        display: flex;
        gap: .5rem;
    }

    .info {
        font: var(--body2-regular);
        color: var(--grey-2);
    }

    .bio {

    }

`