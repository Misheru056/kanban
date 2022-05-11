import { useEffect, useState } from 'react';
import FormInicioSesion from '../components/FormInicioSesion';
import { StyledInicio } from '../styles/styles';
import { Usuario } from '../types/types';

const Inicio = () => {

    const [usuario, setUsuario] = useState({} as Usuario);

    useEffect(() => {
        localStorage.setItem('usuario', usuario.username);
    });
    
    return (
        <StyledInicio>
            <FormInicioSesion setUsuario={setUsuario} usuario={usuario} />
        </StyledInicio>
    )
}

export default Inicio
