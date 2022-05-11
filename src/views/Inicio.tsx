import styled from "styled-components";
import FormInicioSesion from "../components/FormInicioSesion";

const StyledInicio = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inicio = () => {
  return (
    <StyledInicio>
      <FormInicioSesion/>
    </StyledInicio>
  );
};

export default Inicio;
