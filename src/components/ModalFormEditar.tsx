import { render } from "@testing-library/react";
import { ErrorMessage, Field, Form, Formik, FormikErrors, FormikValues } from "formik";
import { useContext } from "react";
import {
  Boton,
  ContenedorForm,
  DivFormGroup,
  Label,
  Modal,
} from "../styles/styles";
import { Context } from "../context/context";
const ModalFormCrear = (tarea: number) => {
  const datosTareas = useContext(Context);
  render(
    <Modal id="modalEditar">
      <ContenedorForm>
        <h2>Editar tarea </h2>
        <hr />
        <Formik
          initialValues={{ titulo: "", descripcion: "" }}
          onSubmit={() => {}}
          validate={(values) => {
            let error: FormikErrors<FormikValues> = {};
            if (!values.titulo) {
              error.titulo = "No puede estar este campo vacío";
            }
            if (!values.descripcion) {
              error.descripcion = "No puede estar este campo vacío";
            }
            return error;
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
                <ErrorMessage
                  name="descripcion"
                  render={(msg) => <div className="error">{msg}</div>}
                />
              </DivFormGroup>
              <hr style={{ width: "100%" }} />
              <Boton
                type="submit"
                onClick={() => {
                  let md = document.getElementById("modalEditar");
                  md!.style.display = "none";
                }}
              >
                Editar
              </Boton>
            </Form>
          )}
        </Formik>
      </ContenedorForm>
    </Modal>
  );
};

export default ModalFormCrear;
