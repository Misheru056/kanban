import styled from "styled-components";

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