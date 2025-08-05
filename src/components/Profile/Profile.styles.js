import styled from "styled-components";

export const ProfileStyled = styled.div`

    grid-area: profile;
    display: flex;
    flex-direction: column;

    .profile__header {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-block-end: 1.5rem;
    }

    .profile__avatar-container {
        line-height: 0;
    }

    .profile__avatar {
        border-radius: 50%;
        border: 1px solid var(--grey-1);
        overflow: hidden;
        box-sizing: border-box;
        inline-size: 80px;
        block-size: 80px;
    }

    .profile__info {
        display: flex;
        gap: .5rem;
        flex-direction: column;
    }

    .profile__name {
        margin: 0;
        font: var(--headline1);
        color: var(--white);
    }

    .profile__username {
        margin: 0;
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
        &:last-child{
            margin-block-end: 0;
        }
        &:first-child {
            margin-block-start: 0;
        }
    }

    a:hover {
        text-decoration: underline;
    }

    .profile__buttons {
        margin-block-start: 1.5rem;
        margin-block-end: 2.5rem;
        display: flex;
        justify-content: center;
        gap: .5rem;
        order: 1;
    }

    .stars {
        margin-block-end: 1.5rem;
    }

    @media screen and (min-width: 768px){

        .profile__header {
            flex-direction: column;
            align-items: initial;
            margin-block-end: 0;
        }

        .profile__avatar {
            inline-size: 278px;
            block-size: 278px;
            /* margin-block-end: 1.5rem; */
        }

        .profile__name {
            margin-block-end: .5rem;
        }

        .profile__username {
            /* margin-block-start: .5rem;
            margin-block-end: 1.5rem; */
        }

        .profile__buttons {
            order: 0;
            margin-block-end: 1.5rem;
        }

        .info {
            &:first-child {
                margin-block-start: 0;

            }
        }

    }

`