import styled from 'styled-components';

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

  .input {
    width: 100%;
    line-height: 30px;
    font-size: 1.1rem;
  }
`;

export const DivFormGroup = styled.div`
  margin-bottom: 10px;
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