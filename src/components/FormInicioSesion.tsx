import { Field, Form, Formik } from "formik";
import { Boton, Contenedor, DivFormGroup, Label } from '../styles/styles';
import { Usuario } from "../types/types";

/*-- Variables --*/
const initialValues: Usuario = {
  username: "",
  passwd: "",
};

type FormInicioSesionProps = {
  usuario: Usuario;
  setUsuario: Function;
};

/*-- Componente --*/
const FormInicioSesion = ({setUsuario, usuario}:FormInicioSesionProps) => {
  return (
    <Contenedor>
      <h1>Inicia sesión</h1>
      <Formik 
        initialValues={initialValues} 
        onSubmit={({username, passwd}) => {
            setUsuario({
              username: username,
              passwd: passwd
            });
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
