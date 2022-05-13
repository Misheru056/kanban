import { render } from "@testing-library/react";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Boton,
  ContenedorForm,
  DivFormGroup,
  Label,
  Modal,
} from "../styles/styles";
import { Tarea } from "../types/types";

const ModalFormCrear = (tarea: Tarea) => {

  render (
    <Modal id="modalEditar">
      <ContenedorForm>
        <h2>Editar tarea </h2>
        <hr />
        <Formik
          initialValues={tarea}
          onSubmit={(values, { resetForm }) => {}}
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
