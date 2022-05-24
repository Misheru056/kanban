import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikErrors,
  FormikValues,
} from "formik";
import { useContext} from "react";
import {
  Boton,
  ContenedorForm,
  DivFormGroup,
  Label,
  Modal,
} from "../styles/styles";
import { Context } from "../../context/context";
import { Tarea } from "../../domain/types/types";

const ModalFormEditar = (props: {
  dataModal: Tarea;
  setDataModal: Function;
}) => {
  const datosTareas = useContext(Context);

  //Permite y maneja los cambios realizados en el formulario de edición
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setDataModal({
      ...props.dataModal,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal>
      <ContenedorForm>
        <h2>Editar tarea </h2>
        <hr />
        <Formik
          initialValues={{
            id: props.dataModal.id,
            titulo: props.dataModal.titulo,
            descripcion: props.dataModal.descripcion,
            estado: props.dataModal.estado,
          }}
          enableReinitialize={true}
          onSubmit={() => {
            datosTareas.editarTarea(props.dataModal);
          }}
          validate={(values) => {
            let error: FormikErrors<FormikValues> = {};
            if (!values.titulo) {
              error.titulo = "No puede estar este campo vacío";
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
                  value={props.dataModal.titulo}
                  onChange={handleChange}
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
                  value={props.dataModal.descripcion}
                  onChange={handleChange}
                />
                {
                  <ErrorMessage
                    name="descripcion"
                    render={(msg) => <div className="error">{msg}</div>}
                  />
                }
              </DivFormGroup>
              <hr style={{ width: "100%" }} />
              <div className="cajaBotones">
                <Boton
                  type="reset"
                  onClick={() => {
                    let md = document.getElementById("modalEditar");
                    md!.style.display = "none"
                  }}
                  className="cancelar"
                >
                  Cancelar
                </Boton>
                <Boton type="submit">Guardar</Boton>
              </div>
            </Form>
          )}
        </Formik>
      </ContenedorForm>
    </Modal>
  );
};

export default ModalFormEditar;
