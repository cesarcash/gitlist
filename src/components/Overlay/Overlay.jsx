import styled from 'styled-components'

const OverlayStyled = styled.div`

    position: fixed;
    inset: 0;
    backdrop-filter: blur(10px);
    background-color: var(--backdrop-color);

`

function Overlay({children}) {
    return (
        <OverlayStyled>
            {children}
        </OverlayStyled>
    )
}

export default Overlay
