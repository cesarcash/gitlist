import { RepoListStyled } from "./Repo-list.styles"
import RepoItem from "../RepoItem/RepoItem"

function RepoList({repoList}) {

    return (
        <RepoListStyled>
            {repoList.map((item) => {
                return <RepoItem {...item} key={item.id} />
            })}
        </RepoListStyled>
    )
}

export default RepoList
