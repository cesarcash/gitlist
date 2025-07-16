import {FiltersStyled} from './Filters.styles'
import Icon from '../Icons';
import ModalContent from '../Modal/Modal';

function Filters() {
    return (
        <FiltersStyled>
            <ModalContent />
            <Icon name="home" />
            {/* <Icon name="github" /> */}
            <Icon name="twitter" />
        </FiltersStyled>
    )
}

export default Filters