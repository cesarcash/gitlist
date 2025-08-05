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
    inline-size: 100%;
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

export const ButtonRounded = styled(Button)`
    border: 2px solid var(--grey-1);
    min-inline-size: initial;
    border-radius: 50%;
    padding: .75rem;
    transition: .2s ease-in all;
    &:hover {
        background-color: var(--buttonBG);
        transform: scale(1.1);
    }
`

export default Button
