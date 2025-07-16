import {isValidElement} from 'react';
import styled from 'styled-components'


const ButtonStyled = styled.button`

    color: var(--white);
    background-color: var(--buttonBG);
    border: 1px solid var(--grey);
    font: var(--button-text);
    text-decoration: none !important;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    min-inline-size: 135px;
    border-radius: .5rem;
    padding-block: .25rem;
    &:hover {
        background-color: var(--white);
        color: var(--buttonBG);
    }

`

function Button({text, link, className, icon}) {
    const component = link ? 'a' : '';
    let IconComponent = null;
    if(icon){
        if(isValidElement(icon)){
            IconComponent = icon;
        }
    }
    return (
        <ButtonStyled as={component} href={link} className={className} >
            {IconComponent}
            {text}
        </ButtonStyled>
    )
}

export const ButtonContrast = styled(Button)`
    background: var(--white);
    color: var(--buttonBG);
    &:hover{
        background: var(--buttonBG);
        color: var(--white);
    }
`

export default Button
