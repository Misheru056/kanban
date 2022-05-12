import { Field, Form, Formik } from "formik";
import { Boton, ContenedorForm, DivFormGroup, Label, Modal } from "../styles/styles";
import { Tarea } from "../types/types";

type ModalFormCrearProps = {
    addTarea: Function;
};

const initialValues: Tarea = {
  id: 0,
  titulo: "",
  descripcion: "",
  estado: "nueva",
};

const ModalFormCrear = ({addTarea}:ModalFormCrearProps) => {

    const getId = (): number => new Date().getTime();

  return (
    <Modal>
      <ContenedorForm>
        <h2>Crear nueva tarea</h2>
        <hr/>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, {resetForm}) => {
            let nuevaTarea:Tarea = {
                id: getId(),
                titulo: values.titulo,
                descripcion: values.descripcion,
                estado: 'nueva'
            };
            addTarea(nuevaTarea);
            resetForm();
          }}
          validate={() => {}}
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
              <hr style={{'width': '100%'}}/>
              <Boton type="submit">Crear tarea</Boton>
            </Form>
          )}
        </Formik>
      </ContenedorForm>
    </Modal>
  );
};

export default ModalFormCrear;
