import { RepoListStyled } from "./Repo-list.styles"
import RepoItem from "../RepoItem/RepoItem"
import NotFound from "../NotFound/NotFound";

function RepoList({repoList,search,searchLanguage}) {
    
    let list = repoList;

    if(search !== ''){
        list = list.filter(item => item.name.toLowerCase().search(search.toLowerCase()) >= 0)
    }

    if(searchLanguage !== ''){
        list = list.filter((item) => {
            if(!item.language) return false
            return item.language.toLowerCase().search(searchLanguage.toLowerCase()) >= 0;
        })
    }

    return (

        list.length > 0 ? (
            <RepoListStyled>
                {list.map((item) => {
                    return <RepoItem {...item} key={item.id} />
                })}
            </RepoListStyled>
        ) : <NotFound />
        

    ) 

}

export default RepoList
