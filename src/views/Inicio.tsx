import FormInicioSesion from '../components/FormInicioSesion';
import ModalFormCrear from '../components/ModalFormCrear';
import { StyledInicio } from '../styles/styles';

const Inicio = () => {

    return (
        <StyledInicio>
            <h1>Pizarra Kanban</h1>
            <FormInicioSesion />
            <ModalFormCrear />
        </StyledInicio>
    )
}
export default Inicio;
