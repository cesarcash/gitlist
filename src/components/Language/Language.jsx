import styled from 'styled-components'

const LanguageStyled = styled.div`

    display: flex;
    gap: .5rem;
    align-items: center;

    &:before {
        content: '';
        background-color: ${({color}) => color };
        inline-size: 1rem;
        block-size: 1rem;
        border-radius: 50%;
    }

`

function Language({name}) {

    const languages = {

        html: {
            color: '#f1692e',
        },
        javascript: {
            color: '#F1E05A',
        },
        ruby: {
            color: '#ef151a',
        },
        css: {
            color: '#3fa0d9',
        }

    }

    const formattedName = name.toLowerCase();
    const color = languages[formattedName] ? languages[formattedName]['color'] : 'white';

    return (
        <LanguageStyled color={color}>
            {name}
        </LanguageStyled>
    )

}

export default Language
