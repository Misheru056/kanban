import { useEffect, useState } from 'react';
import FormInicioSesion from '../components/FormInicioSesion';
import { StyledInicio } from '../styles/styles';

const Inicio = () => {

    const [username, setUsername] = useState('');

    useEffect(() => {
        localStorage.setItem('usuario', username);
    });
    
    return (
        <StyledInicio>
            <FormInicioSesion setUsername={setUsername} />
        </StyledInicio>
    )
}

export default Inicio
