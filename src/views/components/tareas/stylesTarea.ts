import styled from "styled-components";
export const DivTarea = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  display: grid;
  background-color: ${(props) => props.theme.cardColor};
  grid-template-columns: 100%;
  margin-bottom: 1rem;
  .tituloTarea {
    color: ${(props) => props.theme.textColorC};
    font-size: 1.2em;
  }
  .descripcion {
    color: ${(props) => props.theme.textColorC};
    padding: 1%;
    text-justify: auto;
    font-size: 0.9em;
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