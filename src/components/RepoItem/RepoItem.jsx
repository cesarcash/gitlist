import { RepoItemStyled } from "./RepoItem.styles"

function RepoItem({name}) {
    return (
        <RepoItemStyled>
            {name}
        </RepoItemStyled>
    )
}

export default RepoItem
