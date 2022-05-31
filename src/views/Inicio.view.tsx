import FormInicioSesion from './components/formularios/FormInicioSesion';
import { StyledInicio } from './styles/stylesGeneral';

const Inicio = () => {

    return (
        <StyledInicio>
            <h1>Pizarra Kanban</h1>
            <FormInicioSesion />
        </StyledInicio>
    )
}
export default Inicio;