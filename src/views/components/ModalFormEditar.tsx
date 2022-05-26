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
  Boton,
  ContenedorForm,
  DivFormGroup,
  Label,
  Modal,
} from "../styles/styles";
import { Context } from "../../context/context";
import { Subtarea, Tarea } from "../../domain/types/types";

const ModalFormEditar = (props: {
  dataModal: Tarea;
  setDataModal: Function;
}) => {
  const datosTareas = useContext(Context);
  const [subtareasTemp, setSubtareasTemp] = useState(props.dataModal.subtareas);
  
  useEffect(() => {
    setSubtareasTemp(JSON.parse(JSON.stringify(props.dataModal.subtareas)));
  }, [props.dataModal]);
  

  //Permite y maneja los cambios realizados en el formulario de edición
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (e.target.name.includes("subtareas")) {
      let index = e.target.id.substring(1);
      editarSubtarea(parseInt(index), e.target.value);
    } else{
      props.setDataModal({
        ...props.dataModal,
        [e.target.name]: e.target.value,
      });
    }
  };

  const editarSubtarea = (index: number, texto: string) => {
    let subtarea = subtareasTemp[index];
    subtarea.texto = texto;

    props.setDataModal({
      ...props.dataModal,
      subtareas: subtareasTemp,
    });
  };

  const nuevoInputSubtarea = () => {
    // let subtareas = subtareasTemp;
    // subtareas.push({
    //   id: 0,
    //   texto: "",
    //   completada: false,
    // });
    // setSubtareasTemp(subtareas);
  };

  const eliminarInputSubtarea = (index: number) => {
    // let subtareas = props.dataModal.subtareas;
    // subtareas.splice(index, 1);
    // setSubtareasTemp(subtareas);
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
            subtareas: props.dataModal.subtareas,
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
                  <Label>Lista de subtareas (opcional)</Label>
                  <div>
                    {subtareasTemp.map((subtarea: Subtarea, index: number) => (
                      <div key={index}>
                        <Field
                          name={`subtareas[${index}].texto`}
                          type="text"
                          className="inputSubtarea"
                          onChange={handleChange}
                          id={`s${index}`}
                        />
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => eliminarInputSubtarea(index)}
                            className="removeSubtarea"
                          >
                            {
                              String.fromCodePoint(
                                parseInt("9866")
                              ) /* Icono resta */
                            }
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={() => nuevoInputSubtarea()}
                          className="addSubtarea"
                        >
                          {
                            String.fromCodePoint(
                              parseInt("128935")
                            ) /* Icono suma */
                          }
                        </button>
                      </div>
                    ))}
                  </div>
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
