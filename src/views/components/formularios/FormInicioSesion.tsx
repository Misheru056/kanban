import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Boton } from "../../styles/stylesGeneral";
import { ContenedorForm, DivFormGroup, Label } from "./styles";
import { Usuario } from "../../../domain/types/types";

/*-- Variables --*/
const initialValues: Usuario = {
  username: "",
  passwd: "",
};

/*-- Componente --*/
const FormInicioSesion = () => {

  const navigate = useNavigate();

  return (
    <ContenedorForm>
      <h2>Inicia sesión</h2>
      <hr/>
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
          <hr style={{'width': '100%'}}/>
          <Boton type="submit">Entrar</Boton>
        </Form>)}
      </Formik>
    </ContenedorForm>
  );
};

export default FormInicioSesion;
