import styled from 'styled-components'

const NotFoundStyled = styled.div`

    display: flex;
    justify-content: center;
    padding-block-start: 5rem;
    .title {
        font: var(--headline2-semi-bold);
        margin: 0;
    }

`

function NotFound() {
    return (
        <NotFoundStyled>
            <h2 className="title">There are no repositories</h2>
        </NotFoundStyled>
    )
}

export default NotFound
