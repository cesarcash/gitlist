import { SearchStyled } from "./Search.styles"
import Icon from '../Icons/search';
import {ButtonRounded} from '../Button/Button';

function Search({setModal}) {

    function handleModal(){
        setModal(true);
    }

    return (
        <SearchStyled onClick={handleModal}>
            <ButtonRounded icon={<Icon name="search" size={24} color="var(--white)" />} />
        </SearchStyled>
    )
}

export default Search
