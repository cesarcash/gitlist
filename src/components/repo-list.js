import styled from 'styled-components'
import Icon from './icon/index'

const RepoListStyled = styled.div`

    grid-area: repo-list;
    background-color: #2352ff;

`

function RepoList() {
    return (
        <RepoListStyled>
            <Icon name='arrow-down' />
            <Icon name='book' />
            <Icon name='branch' />
            <Icon name='cancel' />
            <Icon name='check' />
            <Icon name='github' />
            <Icon name='heart' />
            <Icon name='home' />
            <Icon name='link' />
            <Icon name='location' />
            <Icon name='search' />
            <Icon name='star' />
            <Icon name='twitter' />
            <Icon name='user' />
        </RepoListStyled>
    )
}

export default RepoList
