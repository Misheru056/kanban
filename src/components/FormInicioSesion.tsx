import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Boton, Contenedor, DivFormGroup, Label } from "../styles/styles";
import { Usuario } from "../types/types";

/*-- Variables --*/
const initialValues: Usuario = {
  username: "",
  passwd: "",
};

/*-- Componente --*/
const FormInicioSesion = () => {

  const navigate = useNavigate();

  return (
    <Contenedor>
      <h2>Inicia sesión</h2>

      <Formik 
        initialValues={initialValues} 
        onSubmit={(values) => {
          localStorage.setItem('usuario', values.username);
          navigate('/organizador');
        }}
        validate={(values) => {
            let errores:any = {};

            if(!values.username){
                errores.username = 'Introduce un nombre de usuario'
            }

            if(!values.passwd){
                errores.passwd = 'Introduce una contraseña'
            }

            return errores;
        }}>
        {({errors, touched}) => (<Form className="formulario">
          <DivFormGroup>
            <Label htmlFor="username">Usuario</Label>
            <Field
              type="text"
              name="username"
              id="username"
              className="input"
            />
            {touched.username && errors.username && <div className="error">{errors.username}</div>}
          </DivFormGroup>
          <DivFormGroup>
            <Label htmlFor="passwd">Contraseña</Label>
            <Field
              type="password"
              name="passwd"
              id="passwd"
              className="input"
            />
            {touched.passwd && errors.passwd && <div className="error">{errors.passwd}</div>}
          </DivFormGroup>
          <Boton type="submit">Entrar</Boton>
        </Form>)}
      </Formik>
    </Contenedor>
  );
};

export default FormInicioSesion;
