import styled, { createGlobalStyle } from "styled-components";

/* GLOBAL */
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #322F33;
  }
`;

/*INICIO*/
export const StyledInicio = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: white;
  }
`;

/* FORMULARIOS */

export const ContenedorForm = styled.div`
  width: 400px;
  padding: 14px;
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  border-radius: 20px;
  border: 2px solid black;
  box-sizing: border-box;
  color: black;

  h2 {
    text-align: center;
  }

  .formulario {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .formulario .error {
    color: #c12020;
    font-style: italic;
  }

  .input {
    width: 98%;
    line-height: 30px;
    font-size: 1.1rem;
  }

  div.cajaBotones {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

export const DivFormGroup = styled.div`
  margin-bottom: 10px;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  text-align: center;
  font-size: 1.1rem;
`;

export const Boton = styled.button`
  width: 170px;
  height: 55px;
  font-size: 21px;
  font-weight: bold;
  color: white;
  box-shadow: 1px 1px 3px grey;
  border-radius: 15px;
  margin: 0.67rem 0;
  cursor: pointer;
  background-color: #56e38f; //Verde
  border: none;

  :hover {
    background-color: #bd94df; //Lila
  }

  &.cancelar {
    background-color: #de5252; //Rojo
  }

  &.cancelar:hover {
    background-color: #bd94df; //Lila
  }
`;

/* PIZARRA KANBAN */

export const ContenedorKanban = styled.div`
  height: 100vh;
  color: white;
  display: grid;
  padding-left: 10%;
  grid-template-columns: 50% 50%;
  .tituloLista {
    text-align: center;
  }
  @media (min-width: 1080px) {
    grid-template-columns: 32% 32% 32%;
  }

  @media (max-width: 960px) {
    grid-template-columns: 100%;
  }
`;
export const Lista = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const DivTarea = styled.div`
  border-radius: 15px;
  padding-left: 5%;
  padding-right: 5%;
  display: grid;
  background-color: #c3e8d5;
  grid-template-columns: 100%;
  margin-bottom: 1rem;
  .tituloTarea {
    color: #004b37;
  }
  .descripcion {
    color: black;
    padding: 1%;
    text-justify: auto;
  }
`;
export const BotonTarea = styled.div`
  border-top: 1px solid #373636; /*Casi negro*/
  padding: 5px;
  button {
    width: 31px;
    margin: 5px;
    border: 1px solid;
    border-radius: 100%;
    height: fit-content;
    font-size: 1em;
    background-color: transparent;
  }
  :hover {
    color: black;
  }
  .editar {
    border-color: #c900ff;
    color: #c900ff;
  }

  .eliminar {
    border-color: #f58f8f;
    color: #f58f8f;
  }
  .terminada {
    border-color: green;
    color: green;
  }
  .enviarAProceso {
    border-color: blue;
    color: blue;
  }
  .reutilizarTarea {
    border-color: #d67427;
    color: #d67427;
  }

  .editar:hover {
    background-color: #df71fd;
    color: black;
  }
  .eliminar:hover {
    background-color: #f58f8f;
    color: black;
  }
  .terminada:hover {
    background-color: green;
    color: black;
  }
  .enviarAProceso:hover {
    background-color: blue;
    color: black;
  }

  .reutilizarTarea:hover {
    background-color: #d67427;
    color: black;
  }

  @media (max-width: 960px) {
    grid-template-columns: 100%;
  }

`;

export const Modal = styled.div`
  display: none;
  background: rgba(56, 56, 56, 0.5);
  padding: auto;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BarraHerramientas = styled.div`
  border-bottom: 1px solid silver;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background-color: #201f21;

  span {
    color: white;
    font-size: 1.3rem;
  }

  button.cerrarSesion {
    font-size: 14px;
    width: 110px;
    height: 30px;
    background-color: transparent;
    border: 1px solid grey;

    @media screen and (max-width: 480px) {
      height: 40px;
      margin-left: 10px;
    }
  }

  @media screen and (max-width: 480px) {
      padding: 0 10px;

      span{
        display: none;
      }
  }
`;
