import {useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Overlay from '../Overlay/Overlay';
import {ButtonContrast} from '../Button/Button';
import InputText from '../Input-text/Input-text';

const ModalStyled = styled.form`

    background-color: var(--bg);
    color: var(--white);
    padding: 1.5rem;
    border-radius: .5rem;
    position: fixed;
    inset-block-start: 50%;
    transform: translateY(-50%) translateX(-50%);
    inset-inline-start: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    inline-size: 24rem;

    .title {
        font: var(--headline2-semi-bold);
        margin: 0;
    }

`

function ModalContent(){

    const form = useRef(null);
    const navigate = useNavigate();
    
    function handleSubmit(e){
        e.preventDefault();

        const formData = new FormData(form.current);
        const username = formData.get('username');
        navigate(`/${username}`)

    }

    return (
        <Overlay>
            <ModalStyled ref={form} onSubmit={handleSubmit}>
                <h2 className="title">Ingresa usuario</h2>
                <InputText autoComplete='off' type="text" name="username" placeholder="Username" />
                <ButtonContrast text="Buscar" />
            </ModalStyled>
        </Overlay>
    );
}

export default ModalContent;