import {
  ErrorMessage,
  Field,
  FieldArray,
  Form,
  Formik,
  FormikErrors,
  FormikValues,
} from "formik";
import React, { useContext } from "react";
import { Context } from "../../../context/context";
import { ContenedorForm, DivFormGroup, Label } from "./styles";
import { Boton, Modal } from "../../styles/stylesGeneral";
import { Subtarea,Tarea } from "../../../domain/types/types";


const initialValues: Tarea = {
  id: 0,
  titulo: "",
  descripcion: "",
  estado: "nueva",
  subtareas: [{ id: 0, texto: "", completada: false }],
};

const ModalFormCrear: React.FC = () => {
  const contexto = useContext(Context);

  /* Genera un id utilizando la hora y fecha actual */
  const getId = (): number => new Date().getTime();

  return (
    <Modal>
      <ContenedorForm>
        <h2>Crear nueva tarea</h2>
        <hr />
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            //Eliminar subtareas vacías
            for (let i = values.subtareas.length - 1; i >= 0; i--) {
              if (values.subtareas[i].texto !== "") {
                values.subtareas[i].id = getId() + i;
              } else {
                values.subtareas.splice(i, 1);
              }
            }
            let nuevaTarea: Tarea = {
              id: getId(),
              titulo: values.titulo,
              descripcion: values.descripcion,
              estado: "nueva",
              subtareas: values.subtareas,
              porcentajeSubtareas: 0,
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
                <Label>Descripción (opcional)</Label>
                <Field
                  type="text"
                  name="descripcion"
                  id="descripcion"
                  className="input"
                />
              </DivFormGroup>
              <DivFormGroup>
                <FieldArray name="subtareas">
                  {(fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { subtareas } = values;
                    return (
                      <div>
                        <Label>
                          Subtareas (opcional)
                        </Label>
                        {subtareas.map((_subtarea: Subtarea, index: number) => (
                          <div 
                            key={`subtareas[${index}]`} 
                            className='subtareaForm'
                          >
                            <Field
                              name={`subtareas[${index}].texto`}
                              type="text"
                              className="inputSubtarea"
                            />
                            <button
                              type="button"
                              onClick={() => remove(index)}
                              className="removeSubtarea"
                            >
                              {
                                String.fromCodePoint(
                                  parseInt("9866")
                                ) /* Icono resta */
                              }
                            </button>
                          </div>
                        ))}
                        <div style={{'display':'flex'}}>
                          <button
                            type="button"
                            onClick={() =>
                              push({ id: 0, texto: "", completada: false })
                            }
                            className="addSubtarea"
                          >
                            {
                              String.fromCodePoint(
                                parseInt("128935")
                              ) /* Icono suma */
                            }
                          </button>
                        </div>
                        
                      </div>
                    );
                  }}
                </FieldArray>
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
