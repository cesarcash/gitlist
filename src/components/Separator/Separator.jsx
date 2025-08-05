import styled from 'styled-components'

const SeparatorStyled = styled.div`

    border-block-end: none;
    display: none;
    
    @media screen and (min-width: 768px){
        display: block;
        border-block-end: 1px solid var(--grey-2);
    }

`

function Separator() {
    return (
        <SeparatorStyled>
        </SeparatorStyled>
    )
}

export default Separator
