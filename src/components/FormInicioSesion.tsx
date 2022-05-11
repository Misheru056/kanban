import { Field, Form, Formik } from "formik";
import { NavigateFunction, NavigateProps, useNavigate } from "react-router-dom";
import { Boton, Contenedor, DivFormGroup, Label } from "../styles/styles";
import { Usuario } from "../types/types";

/*-- Variables --*/
const initialValues: Usuario = {
  username: "",
  passwd: "",
};

/*-- Componente --*/
const FormInicioSesion = () => {
  const irA: NavigateFunction = useNavigate();
  return (
    <Contenedor>
      <h1>Inicia sesión</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          localStorage.setItem("usuario", values.username);
          // irA('/organizador');
        }}
      >
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
          <Boton type="submit">Entrar</Boton>
        </Form>
      </Formik>
    </Contenedor>
  );
};

export default FormInicioSesion;
