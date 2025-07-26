import styled from 'styled-components'

const SelectorStyled = styled.select`
    background-color: var(--buttonBG);
    border: none;
    padding-inline: 1rem;
    padding-block: .5rem;
    color: var(--white);
    font: var(--body2-semi-bold);
    border-radius: .5rem;
`

function Selector({children}) {
    return (
        <SelectorStyled>
            {children}
        </SelectorStyled>
    )
}

export default Selector
