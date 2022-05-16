import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikErrors,
  FormikValues,
} from "formik";
import { useContext } from "react";
import { Context } from "../context/context";
import {
  Boton,
  ContenedorForm,
  DivFormGroup,
  Label,
  Modal,
} from "../styles/styles";
import { Tarea } from "../types/types";

const initialValues: Tarea = {
  id: 0,
  titulo: "",
  descripcion: "",
  estado: "nueva",
};

const ModalFormCrear = () => {
  const contexto = useContext(Context);
  /* Genera un id utilizando la hora y fecha actual */
  const getId = (): number => new Date().getTime();

  return (
    <Modal >
      <ContenedorForm>
        <h2>Crear nueva tarea</h2>
        <hr />
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            let nuevaTarea: Tarea = {
              id: getId(),
              titulo: values.titulo,
              descripcion: values.descripcion,
              estado: "nueva",
            };
            contexto.addTarea(nuevaTarea);
            resetForm();
          }}
          validate={(values) => {
            let errores: FormikErrors<FormikValues> = {};

            if (!values.titulo) {
              errores.titulo = "El título es un campo obligatorio";
            }

            return errores;
          }}
        >
          {() => (
            <Form className="formulario">
              <DivFormGroup>
                <Label>Título</Label>
                <Field
                  type="text"
                  name="titulo"
                  id="titulo"
                  className="input"
                />
                <ErrorMessage
                  name="titulo"
                  render={(msg) => <div className="error">{msg}</div>}
                />
              </DivFormGroup>
              <DivFormGroup>
                <Label>Descripción</Label>
                <Field
                  type="text"
                  name="descripcion"
                  id="descripcion"
                  className="input"
                />
              </DivFormGroup>
              <hr style={{ width: "100%" }} />
              <div className="cajaBotones">
                <Boton
                  type="reset"
                  onClick={() => contexto.toggleDivCrear()}
                  className="cancelar"
                >
                  Cancelar
                </Boton>
                <Boton type="submit">Crear tarea</Boton>
              </div>
            </Form>
          )}
        </Formik>
      </ContenedorForm>
    </Modal>
  );
};

export default ModalFormCrear;
