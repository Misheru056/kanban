import styled, { createGlobalStyle } from "styled-components";
import { Tema } from "./ThemeContext";

//Tema oscuro
export const DarkTheme = {
  bgColor: '#09242E',
  textColor: 'white',
  botonColor: '#2e5234',
  botonColorAdd: "#EE964B",
  bgColorBarra: '#19647E',
  cardColor: '#2288AA',
  textColorC: 'black',
  colorButtonEdit: '#F4D35E',
  colorButtonDel: '#FFFFFF',
  bottonAddHover: ' #ffc586'

}

//Tema claro
export const LightTheme = {
  bgColor: '#7fd6cb',
  textColor: 'black',
  botonColor: '#56e38f',
  botonColorAdd: "#A71B11",
  bgColorBarra: '#0098b0',
  cardColor: '#fdfcdc',
  textColorC: 'black',
  textColorWhite: 'white',
  colorButtonEdit: '#44B028',
  colorButtonDel: '#B800AE',
  bottonAddHover: '#E72517'
}


/* GLOBAL */
export const GlobalStyle = createGlobalStyle<{ theme: Tema }>`
  html, body{
    height: 100%;
  }
  body {
    background-color: ${(props) => props.theme.bgColor};
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
    color:  ${(props) => props.theme.textColor};
  }
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
  background-color:  ${(props) => props.theme.botonColor};
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

export const ContenedorKanban = styled.main`
  height: 100vh;
  padding: 2vh 3vw;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;

  button.btnAdd {
    position: fixed;
    bottom: 30px;
    right: 40px;
    background-color: ${(props) => props.theme.botonColorAdd};
    color: ${(props) => props.theme.textColorWhite};
  }

  button.btnAdd:hover {
    background-color: ${(props) => props.theme.bottonAddHover};
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
    color: ${(props) => props.theme.textColor};
  }

  @media screen and (max-width: 767px) {
    margin: 0 auto;
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

export const BarraHerramientas = styled.header`
  border-bottom: 1px solid silver;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background-color:  ${(props) => props.theme.bgColorBarra};

  span {
    color:  ${(props) => props.theme.textColor};
    font-size: 1.3rem;
  }
 button.cerrarSesion:hover{
    background-color: ${(props) => props.theme.bottonAddHover}
 }
  button.cerrarSesion {
    font-size: 14px;
    width: 110px;
    height: 30px;
    box-shadow: 1px 1px 3px black;
    background-color: ${(props) => props.theme.botonColorAdd};
    border: 1px solid black;

    @media screen and (max-width: 480px) {
      height: 40px;
      margin-left: 10px;
    }
  }

  .label {
      width: 20px;
      height: 5px;
      background-color:#111;
      display: flex;
      border-radius:50px;
      align-items: center;
      justify-content: space-between;
      padding: 5px;
      position: relative;
      transform: scale(1.5);
      cursor: pointer;
    }

    .bola {
      width: 12px;
      height: 12px;
      background-color: white;
      position: absolute;
      top: 2px;
      left: 2px;
      border-radius: 50%;
      transition: transform 0.2s linear;
    }

    .checkbox{
      display: none;
    }

    /*  target the elemenent after the label*/
    .checkbox:checked + .label .bola{
      transform: translateX(14px);
    }

    i{
      color: white;
      font-size: 11px;
      position: absolute;
      user-select: none;
    }

    i.luna{
      left: 4px;
    }

    i.sol{
      right: 3px;
    }

  @media screen and (max-width: 480px) {
    padding: 0 10px;
  }
`;

export const DivSubtarea = styled.div`
  color: ${(props) => props.theme.textColorC};
  text-indent: 10px;

  label.completada {
    text-decoration: line-through;
  }
`;
