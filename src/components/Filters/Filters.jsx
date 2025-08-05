import {FiltersStyled} from './Filters.styles'
import InputText from '../Input-text/Input-text'
import Selector from '../Selector/Selector'
import Separator from '../Separator/Separator'

function Filters({ repoListCount, setSearch, setSearchLanguage }) {

    function handleSearch(evt){

        setSearch(evt.target.value)

    }

    function handleSearchLanguage(evt){
        
        setSearchLanguage(evt.target.value);

    }

    return (
        <FiltersStyled className="filter">
            <h2 className="filter__title">Repositorios ({repoListCount})</h2>
            <div className="filter__form">
                <InputText type="serach" placeholder="Find a repository" onChange={handleSearch} />
                <div className="select__list">
                    <Selector>
                        <option value="" disabled >Type</option>
                        <option value="all">All</option>
                        <option value="source">Source</option>
                        <option value="forks">Forks</option>
                        <option value="archived">Archived</option>
                        <option value="mirrors">Mirrors</option>
                    </Selector>
                    <Selector onChange={handleSearchLanguage} name="language" title="titulo">
                        {/* <option value="" disabled >Language</option> */}
                        <option value="" >All Language</option>
                        <option value="CSS">CSS</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="PHP">PHP</option>
                        <option value="HTML">HTML</option>
                    </Selector>
                    <Selector>
                        <option value="" disabled >Ordenar</option>
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