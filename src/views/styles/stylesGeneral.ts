import styled, { createGlobalStyle } from "styled-components";
// import theme from 'styled-theming';

// export const GlobalTheme = theme('mode', {
//   light: { button: '#fff' },
//   dark: '#000',
// });
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
`
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
