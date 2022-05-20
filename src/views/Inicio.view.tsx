import FormInicioSesion from './components/FormInicioSesion';
import { StyledInicio } from './styles/styles';

const Inicio = () => {

    return (
        <StyledInicio>
            <h1>Pizarra Kanban</h1>
            <FormInicioSesion />
        </StyledInicio>
    )
}
export default Inicio;