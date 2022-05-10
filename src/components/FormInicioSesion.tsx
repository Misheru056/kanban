import { Field, Form, Formik } from "formik";
import styled from "styled-components";
import { Usuario } from "../types/types";

/*--Estilo--*/
const Contenedor = styled.div`
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

const DivFormGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  text-align: center;
  font-size: 1.1rem;
`;

const Boton = styled.button`
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

/*-- Variables --*/
const initialValues: Usuario = {
  username: "",
  passwd: "",
};

/*-- Componente --*/
const FormInicioSesion = () => {
  return (
    <Contenedor>
      <h1>Inicia sesión</h1>
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <Form className="formulario">
          <DivFormGroup>
            <Label htmlFor="username">Usuario</Label>
            <Field
              type="text"
              name="username"
              id="username"
              className="input"
            />
          </DivFormGroup>
          <DivFormGroup>
            <Label htmlFor="passwd">Contraseña</Label>
            <Field
              type="password"
              name="passwd"
              id="passwd"
              className="input"
            />
          </DivFormGroup>
          <Boton>Entrar</Boton>
        </Form>
      </Formik>
    </Contenedor>
  );
};

export default FormInicioSesion;
