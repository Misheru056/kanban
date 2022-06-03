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

const ModalFormCrear: React.FC<{closeModal:()=>void}> = ({closeModal}) => {
  const contexto = useContext(Context);

  /* Genera un id utilizando la hora y fecha actual */
  const getId = (): number => new Date().getTime();

  return (
    <Modal>
      <ContenedorForm>
        <h2>Crear nueva tarea</h2>
        <hr />
        <Formik
          initialValues={{
            titulo: "",
            descripcion: "",
            subtareas: [{
              texto: ""
            }]
          }}
          onSubmit={(values, { resetForm }) => {
            console.log("valores formulario -> "+JSON.stringify(values))
            console.log("subtareas valores formulario -> "+JSON.stringify(values.subtareas))
            let nuevasSubtareas: Subtarea[] = [];
            values.subtareas.forEach(element => {
              nuevasSubtareas.push(
                { id: 0, texto: element.texto, completada: false }
              )
            });

            let nuevaTarea: Tarea = {
              id: 0,
              titulo: values.titulo,
              descripcion: values.descripcion,
              estado: "nueva",
              subtareas: nuevasSubtareas,
              porcentajeSubtareas: 0,
            };
            contexto.addTarea(nuevaTarea);
            resetForm();
            closeModal();
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
            <Form  
              className="formulario"
              data-testid="formCreate"
            >
              <DivFormGroup>
                <Label>Título</Label>
                <Field
                  type="text"
                  name="titulo"
                  id="titulo"
                  className="input"
                  data-testid="input-titulo"
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
                  data-testid="input-descripcion"
                />
              </DivFormGroup>
              <DivFormGroup>
                <FieldArray name="subtareas" data-testid="fieldArray">
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
                              id={`subtareas[${index}].texto`}
                              type="text"
                              className="inputSubtarea"
                              data-testid={`subtareas[${index}].id`}
                            />
                            <button
                              type="button"
                              onClick={() => remove(index)}
                              className="removeSubtarea"
                              data-testid="btn-remove"
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
                            data-testid="btn-add"
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
                  onClick={() => closeModal()}
                  className="cancelar"
                  data-testid="btn-cancel"
                >
                  Cancelar
                </Boton>
                <Boton 
                  type="submit"
                  data-testid="btn-create"
                >
                  Crear tarea
                </Boton>
              </div>
            </Form>
          )}
        </Formik>
      </ContenedorForm>
    </Modal>
  );
};

export default ModalFormCrear;
