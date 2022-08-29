import { isValidElement } from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
    border-radius: .5rem;
    min-inline-size: 8.4375rem;
    border: 1px solid var(--grey);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    background: var(--buttonBG);
    gap: .5rem;
    cursor: pointer;
    text-decoration: none !important;
    font: var(--button);
    padding-block: .25rem;
    &:hover {
        background-color: var(--white);
        color: var(--button);
    }
`

function Button({text,link,className,icon}) {

    const component = link ? 'a' : 'button'
    let IconComponent = null
    if(icon){
        if(isValidElement(icon)){
            IconComponent = icon
        }
    }

    return (
        <ButtonStyled as={component} href={link} className={className}>
            {IconComponent}
            {text}
        </ButtonStyled>
    )
}

export default Button;