import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { Kanban } from "../views/kanban.view";
import { Context } from "../context/context";
import ModalFormEditar from "../views/components/formularios/ModalFormEditar";
import user from "@testing-library/user-event";
import { Tarea } from "../domain/types/types";
import { clear } from "@testing-library/user-event/dist/clear";
import { renderWithContext } from "./builder";

describe("ModalFormEditar", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the modal view", () => {
    render(
      <ModalFormEditar
        setDataModal={jest.fn()}
        dataModal={{
          titulo: "Mi tarea 1",
          id: 1,
          descripcion: "YOLOYOLOYOLO",
          estado: "nueva",
          subtareas: [
            { id: 1, texto: "Subtarea 1", completada: false },
            { id: 2, texto: "Subtarea 2", completada: true },
          ],
          porcentajeSubtareas: 50,
        }}
        closeModal={jest.fn()}
      />
    );
    expect(getTitulo()).toBeInTheDocument();
  });
});
it.only("Edited taks", async () => {
  let tareaPrueba: Tarea = {
    titulo: "Mi tarea 1",
    id: 1,
    descripcion: "YOLOYOLOYOLO",
    estado: "nueva",
    subtareas: [
      { id: 1, texto: "Subtarea 1", completada: false },
      { id: 2, texto: "Subtarea 2", completada: true },
    ],
    porcentajeSubtareas: 50,
  };
  let tareasNuevasPrueba: Tarea[] = [tareaPrueba];
  const editarTarea = jest.fn((tarea: Tarea) => {
    tareaPrueba = tarea;
    tareasNuevasPrueba.push(tareaPrueba);
  });
  renderWithContext({
    children: <Kanban />,
    providerData: { editarTarea, tareasNuevas: tareasNuevasPrueba},
  });

  expect(screen.queryByTestId("input-titulo")).toBeNull();

  user.click(screen.getByTestId("1buttoneditar"));

  expect(screen.queryByTestId("input-titulo")).not.toBeNull();

  let titulo = getTitulo() as HTMLInputElement;
  expect(titulo.value).toBe("Mi tarea 1");
  let descripcion = getDescripcion() as HTMLInputElement;
  expect(descripcion.value).toBe("YOLOYOLOYOLO");
  let subtarea0 = screen.queryByTestId("subtareas[0].id") as HTMLInputElement;

  expect(subtarea0.value).toBe("Subtarea 1");

  clear(getTitulo());
  clear(getDescripcion());
  clear(getSubtarea());
  clear(screen.getByTestId("subtareas[1].id"));

  user.type(getTitulo(), "Tarea de sustitucion");
  user.type(getDescripcion(), "Descripción tarea de sustitucion");
  user.type(getSubtarea(), "Subtarea de prueba de sustitucion");

  await waitFor(() => {
    expect(getFormEdit()).toHaveFormValues({
      titulo: "Tarea de sustitucion",
      descripcion: "Descripción tarea de sustitucion",
      "subtareas[0].texto": "Subtarea de prueba de sustitucion",
    });
  });
  user.click(getBtnEdit());
  await waitFor(() => {
    expect(editarTarea).toHaveBeenCalledWith({
      titulo: "Tarea de sustitucion",
      id: 1,
      descripcion: "Descripción tarea de sustitucion",
      estado: "nueva",
      subtareas: [
        {
          id: 1,
          texto: "Subtarea de prueba de sustitucion",
          completada: false,
        },
      ],
      porcentajeSubtareas: 50,
    });
  });
  expect(screen.queryByTestId("input-titulo")).toBeNull();

  expect(editarTarea).toBeCalledWith(
    (tareaPrueba = {
      titulo: "Tarea de sustitucion",
      id: 1,
      descripcion: "Descripción tarea de sustitucion",
      estado: "nueva",
      subtareas: [
        {
          id: 1,
          texto: "Subtarea de prueba de sustitucion",
          completada: false,
        },
      ],
      porcentajeSubtareas: 50,
    })
  );
  expect(screen.getByText("Tarea de sustitucion"));
});

function getTitulo() {
  return screen.getByTestId("input-titulo");
}
function getDescripcion() {
  return screen.getByTestId("input-descripcion");
}
function getSubtarea() {
  return screen.getByTestId("subtareas[0].id");
}
function getBtn() {
  return screen.getByRole("button", {
    name: /🞧/i,
  });
}
function getBtnEdit() {
  return screen.getByRole("button", {
    name: /guardar/i,
  });
}
function getFormEdit() {
  return screen.getByTestId("form-edit");
}
