import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInicioSesion from '../components/FormInicioSesion';
import { StyledInicio } from '../styles/styles';

const Inicio = () => {

    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        let usuario = localStorage.getItem('usuario');
        if(usuario !== ''){
            navigate('/organizador');
        }
            
    })
    
    return (
        <StyledInicio>
            <h1>Pizarra Kanban</h1>
            <FormInicioSesion setUsername={setUsername} />
        </StyledInicio>
    )
}
export default Inicio;
