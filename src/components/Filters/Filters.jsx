import {FiltersStyled} from './Filters.styles'
import InputText from '../Input-text/Input-text'
import Selector from '../Selector/Selector'
import Separator from '../Separator/Separator'

function Filters({ repoListCount, setSearch }) {

    function handleSearch(evt){

        setSearch(evt.target.value)

    }

    return (
        <FiltersStyled>
            <h2 className="count">Repositorios ({repoListCount})</h2>
            <div className="action-list">
                <InputText type="serach" placeholder="Find a repository" onChange={handleSearch} />
                <div className="select-list">
                    <Selector>
                        <option value="type" disabled selected>Type</option>
                        <option value="all">All</option>
                        <option value="source">Source</option>
                        <option value="forks">Forks</option>
                        <option value="archived">Archived</option>
                        <option value="mirrors">Mirrors</option>
                    </Selector>
                    <Selector>
                        <option value="language" disabled selected>Language</option>
                        <option value="CSS">CSS</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="PHP">PHP</option>
                        <option value="HTML">HTML</option>
                    </Selector>
                    <Selector>
                        <option value="ordenar" disabled selected>Ordenar</option>
                        <option value="stars">Stars</option>
                        <option value="name">Name</option>
                    </Selector>
                </div>
            </div>
            <Separator />
        </FiltersStyled>
    )
}

export default Filters