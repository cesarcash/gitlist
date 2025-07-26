import { RepoListStyled } from "./Repo-list.styles"
import RepoItem from "../RepoItem/RepoItem"

function RepoList({repoList,search}) {
    
    let list = repoList;

    if(search !== ''){
        // list = list.filter((item) => {
        //     return item.name.search(search) >= 0;
        // })
        list = list.filter(item => item.name.search(search) >= 0)
    }

    return (
        <RepoListStyled>
            {list.map((item) => {
                return <RepoItem {...item} key={item.id} />
            })}
        </RepoListStyled>
    )
}

export default RepoList
