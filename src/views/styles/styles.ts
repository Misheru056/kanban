import styled, { createGlobalStyle } from "styled-components";

/* GLOBAL */
export const GlobalStyle = createGlobalStyle`
  html, body{
    height: 100%;
  }
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
  overflow-y: auto;
  max-height: 600px;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

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

  @media screen and (max-width: 360px) {
    width: 325px;
    padding: 14px 3px;
  }
`;

export const DivFormGroup = styled.div`
  margin-bottom: 10px;
  width: 100%;
  user-select: none;

  div.subtareaForm {
    display: flex;
    align-items: center;
    margin: 5px 0;
  }

  input.inputSubtarea {
    line-height: 30px;
    font-size: 1rem;
    text-indent: 8px;
    flex-grow: 1;
  }

  button.addSubtarea,
  button.removeSubtarea {
    color: white;
    font-size: 1em;
    border: none;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    margin: 0 5px;
    box-shadow: 1px 1px 3px grey;
    cursor: pointer;
  }

  button.addSubtarea:hover,
  button.removeSubtarea:hover {
    background-color: #bd94df; //Lila
  }

  button.addSubtarea {
    background-color: #529ede; //Azul
    margin: 0 auto;
    width: 40px;
    height: 40px;
  }

  button.removeSubtarea {
    background-color: #de5252; //Rojo
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  text-align: center;
  font-size: 1.1rem;
`;

export const Boton = styled.button`
  width: 150px;
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
  user-select: none;

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
  padding: 2vh 3vw;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;

  button.btnAdd {
    position: fixed;
    bottom: 30px;
    right: 40px;
    background-color: #f2a552; //Naranja
    color: #2f2e2e;
  }

  button.btnAdd:hover {
    background-color: #ffc586;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 100%;
  }
`;
export const Lista = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  .tituloLista {
    text-align: center;
    font-size: 1.5em;
    margin-top: 0;
    min-height: 64px;
    display: grid;
    align-items: center;
    color: white;
  }



  @media screen and (max-width: 767px) {
    margin: 0 auto;

    .contenedor {
      max-height: 500px;
    }
  }
`;

export const DivTarea = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  display: grid;
  background-color: #c3e8d5;
  grid-template-columns: 100%;
  margin-bottom: 1rem;
  cursor: grab;

  .tituloTarea {
    color: #004b37;
    font-size: 1.2em;
  }
  .descripcion {
    padding: 1%;
    text-justify: auto;
    font-size: 0.9em;
  }
`;

export const BotonTarea = styled.div`
  border-top: 1px solid #373636; /*Casi negro*/
  padding: 5px;
  margin-top: 10px;
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
  width: 100%;
  height: 100%;
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
  }
`;

export const DivSubtarea = styled.div`
  color: black;
  text-indent: 10px;

  label.completada {
    text-decoration: line-through;
  }
`;
