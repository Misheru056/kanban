import styled from 'styled-components';

/*INICIO*/
export const StyledInicio = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Contenedor = styled.div`
  width: 400px;
  padding: 14px;
  background-color: #99c9ff;
  border-radius: 20px;
  border: 5px solid black;
  box-sizing: border-box;

  h1 {
    text-align: center;
  }

  .formulario {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .formulario .error{
    color: #c12020;
    font-style: italic;
  }

  .input {
    width: 100%;
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
  width: 140px;
  height: 55px;
  font-size: 25px;
  font-weight: bold;
  color: white;
  border: 2px solid white;
  border-radius: 15px;
  margin: 0.67rem 0;
  cursor: pointer;
  background-color: #5a01a7;

  :hover {
    background-color: #97359c;
  }
`;

export const ContenedorKanban = styled.div`
background-color:black;
color:white;
display: grid;
padding-left:10%;
grid-template-columns: 50% 50%; 
@media (min-width: 1080px) {
grid-template-columns: 32% 32% 32%;
}

@media (max-width: 960px) {
  grid-template-columns: 100%;
}
`
export const Lista = styled.div`
width: 90%;
display: flex;
flex-direction: column;
`

export const DivTarea = styled.div`
border: 1px solid white;
padding: 2%;
display: grid;
grid-template-columns: 65% 35%;
.tituloTarea{  color: brown;
}
.descripcionTarea{
 
  padding: 1%;
  text-justify: auto;
}
`
export const BotonTarea = styled.div`
display: flex;
align-self: center;
button{
  cursor:pointer;
  width: 25%;margin-left:4%;
  border: 1px solid;
  background-color: transparent;
}
.editar{
  border-color: yellow;
color:yellow;
}
.eliminar{
  border-color: red;
  color:red;
}
.terminada{
  border-color: green;
  color :green;
}
.enviarAProceso{
  border-color: blue;
  color :blue;
}
`