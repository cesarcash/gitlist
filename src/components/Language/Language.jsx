import styled from 'styled-components'

const LanguageStyled = styled.div`

    background-color: ${({color}) => color };
    &:after {
        content: 'ola k ase';
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
        }

    }

    const formattedName = name.toLowerCase();
    const color = languages[formattedName] ? languages[formattedName][color] : 'white';

    return (
        <LanguageStyled color={color}>
            {name}
        </LanguageStyled>
    )

}

export default Language
