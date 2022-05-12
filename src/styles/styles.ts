import styled from "styled-components";

/*INICIO*/
export const StyledInicio = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #1b1b32;

  h1 {
    color: white;
  }
`;

export const Contenedor = styled.div`
  width: 400px;
  padding: 14px;
  background-color: #99c9ff;
  border-radius: 20px;
  border: 5px solid black;
  box-sizing: border-box;

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
  background-color: #85FFBD;
  border: none;


  :hover {
    background-color: #BD94DF;
  }
`;

export const ContenedorKanban = styled.div`
  background-color: black;
  color: white;
  display: grid;
  padding-left: 10%;
  grid-template-columns: 50% 50%;
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
  border: 1px solid white;
  padding: 2%;
  display: grid;
  grid-template-columns: 65% 35%;
  .tituloTarea {
    color: brown;
  }
  .descripcionTarea {
    padding: 1%;
    text-justify: auto;
  }
`;
export const BotonTarea = styled.div`
  display: flex;
  align-self: center;
  button {
    cursor: pointer;
    width: 25%;
    margin-left: 4%;
    border: 1px solid;
    background-color: transparent;
  }
  .editar {
    border-color: yellow;
    color: yellow;
  }
  .eliminar {
    border-color: red;
    color: red;
  }
  .terminada {
    border-color: green;
    color: green;
  }
  .enviarAProceso {
    border-color: blue;
    color: blue;
  }
`;

export const Modal = styled.div`
  background: rgba(56, 56, 56, 0.5);
  padding: auto;
  margin: auto;
  position: absolute;
  top: auto;
  left: auto;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContenedorForm = styled.div`
  padding: 14px;
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  border-radius: 20px;
  border: 2px solid black;
  box-sizing: border-box;
  min-width: 400px;
  position: absolute;

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
`;
