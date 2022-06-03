import {
  ErrorMessage,
  Field,
  FieldArray,
  Form,
  Formik,
  FormikErrors,
  FormikValues,
} from "formik";
import { useContext, useEffect, useState } from "react";
import {
  ContenedorForm,
  DivFormGroup,
  Label
} from "./styles";
import { Boton,Modal } from "../../styles/stylesGeneral";
import { Context } from "../../../context/context";
import {Subtarea, Tarea } from "../../../domain/types/types";

const ModalFormEditar = (props: {
  dataModal: Tarea;
  setDataModal: Function;
}) => {
  const datosTareas = useContext(Context);
  const [subtareasTemp, setSubtareasTemp] = useState(props.dataModal.subtareas);

  useEffect(() => {
    setSubtareasTemp(JSON.parse(JSON.stringify(props.dataModal.subtareas)));
  }, [props.dataModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name.includes("subtareas")) {
      let index = e.target.id.substring(1);
      editarSubtarea(parseInt(index), e.target.value);
    } else {
      props.setDataModal({
        ...props.dataModal,
        [e.target.name]: e.target.value,
      });
    }
  };

  const editarSubtarea = (index: number, valor: string) => {
    let subtarea = subtareasTemp[index];
    switch (valor) {
      case "true":
        subtarea.completada = false;
        break;
      case "false":
        subtarea.completada = true;
        break;
      default:
        subtarea.texto = valor;
        break;
    }

    props.setDataModal({
      ...props.dataModal,
      subtareas: subtareasTemp,
    });
  };

  const nuevaSubtarea = () => {
    let subtareas = subtareasTemp;
    subtareas.push({
      id: 0,
      texto: "",
      completada: false,
    });

    props.setDataModal({
      ...props.dataModal,
      subtareas: subtareasTemp,
    });
  };

  const eliminarSubtarea = (index: number) => {
    let subtareas = subtareasTemp;
    subtareas.splice(index, 1);

    props.setDataModal({
      ...props.dataModal,
      subtareas: subtareasTemp,
    });
  };

  return (
    <Modal>
      <ContenedorForm>
        <h2>Editar tarea </h2>
        <hr />
        <Formik
          initialValues={{
            titulo: props.dataModal.titulo,
            descripcion: props.dataModal.descripcion,
            subtareas: props.dataModal.subtareas
          }}
          enableReinitialize={true}
          onSubmit={(values) => {
            //Eliminar subtareas vacías del array del form y del temporal
            for (let i = subtareasTemp.length - 1; i >= 0; i--) {
              if (values.subtareas[i].texto === "") {
                values.subtareas.splice(i, 1);
                subtareasTemp.splice(i, 1);
              }
            }
            datosTareas.calcularPorcentajeComp(props.dataModal);
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
          {() => {
            return (
              <Form className="formulario">
                <DivFormGroup>
                  <Label>Título</Label>
                  <Field
                    type="text"
                    name="titulo"
                    id="titulo"
                    className="input"
                    onChange={handleChange}
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
                    onChange={handleChange}
                  />
                  {
                    <ErrorMessage
                      name="descripcion"
                      render={(msg) => <div className="error">{msg}</div>}
                    />
                  }
                </DivFormGroup>
                <DivFormGroup>
                  <FieldArray name="subtareas">
                    {(fieldArrayProps) => {
                      const { push, remove, form } = fieldArrayProps;
                      const { values } = form;
                      const { subtareas } = values;
                      return (
                        <div>
                          <Label>Subtareas (opcional)</Label>
                          {subtareas.map(
                            (_subtarea: Subtarea, index: number) => (
                              <div
                                key={`subtareas[${index}]`}
                                className="subtareaForm"
                              >
                                <Field
                                  name={`subtareas[${index}].completada`}
                                  type="checkbox"
                                  onChange={handleChange}
                                  id={`c${index}`}
                                  title="Marcar Completada/No completada"
                                />
                                <Field
                                  name={`subtareas[${index}].texto`}
                                  type="text"
                                  className="inputSubtarea"
                                  onChange={handleChange}
                                  id={`s${index}`}
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    remove(index);
                                    eliminarSubtarea(index);
                                  }}
                                  className="removeSubtarea"
                                  title="Eliminar subtarea"
                                >
                                  {
                                    String.fromCodePoint(
                                      parseInt("9866")
                                    ) /* Icono resta */
                                  }
                                </button>
                              </div>
                            )
                          )}
                          <div style={{ display: "flex" }}>
                            <button
                              type="button"
                              onClick={() => {
                                push({ id: 0, texto: "", completada: false });
                                nuevaSubtarea();
                              }}
                              className="addSubtarea"
                              title="Añadir subtarea"
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
                    onClick={() => {
                      let md = document.getElementById("modalEditar");
                      md!.style.display = "none";
                    }}
                    className="cancelar"
                  >
                    Cancelar
                  </Boton>
                  <Boton type="submit">Guardar</Boton>
                </div>
              </Form>
            );
          }}
        </Formik>
      </ContenedorForm>
    </Modal>
  );
};

export default ModalFormEditar;
