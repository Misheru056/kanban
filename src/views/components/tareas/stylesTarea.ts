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
    border-color: ${(props) => props.theme.colorButtonEdit};
    color:  ${(props) => props.theme.colorButtonEdit};
  }

  .eliminar {
    border-color:  ${(props) => props.theme.colorButtonDel};
    color: ${(props) => props.theme.colorButtonDel};
  }
  .editar:hover {
    background-color: ${(props) => props.theme.colorButtonEdit};
    color: black;
  }
  .eliminar:hover {
    background-color:  ${(props) => props.theme.colorButtonDel};
    color: black;
  }
  @media (max-width: 960px) {
    grid-template-columns: 100%;
  }
`;