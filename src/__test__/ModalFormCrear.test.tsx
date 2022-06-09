import { cleanup, render, screen, waitFor } from "@testing-library/react";
import ModalFormCrear from "../views/components/formularios/ModalFormCrear";
import user from "@testing-library/user-event";
import { Kanban } from "../views/kanban.view";
import { Context } from "../context/context";
import { act } from "react-dom/test-utils";
import { renderWithContext } from "./builder";

describe("ModalFormCrear", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the modal view", () => {
    render(<ModalFormCrear closeModal={jest.fn()} />);
    expect(getTitulo()).toBeInTheDocument();
  });

  it("new task created after submitting creation form", async () => {

    const setTareasNuevas = jest.fn((x) => {});
    const addTarea = jest.fn((x) => {
      let tareaMod = { ...x };
      tareaMod.id = 1;
      setTareasNuevas(tareaMod);
    });
    renderWithContext({
      children: <Kanban />,
      providerData: { setTareasNuevas, addTarea },
    });

    expect(screen.queryByTestId("input-titulo")).toBeNull();

    act(() => {
      user.click(getBtnNuevaTarea());
    });

    expect(getTitulo()).not.toBeNull();

    user.type(getTitulo(), "Tarea de prueba");
    user.type(getDescripcion(), "Descripción tarea de prueba");
    user.type(getSubtarea(), "Subtarea de prueba");

    await waitFor(() => {
      expect(getFormCreate()).toHaveFormValues({
        titulo: "Tarea de prueba",
        descripcion: "Descripción tarea de prueba",
        "subtareas[0].texto": "Subtarea de prueba",
      });
    });

    act(() => {
      user.click(getBtnCreate());
    });

    await waitFor(() => {
      expect(addTarea).toHaveBeenCalledWith({
        id: 0,
        titulo: "Tarea de prueba",
        descripcion: "Descripción tarea de prueba",
        estado: "nueva",
        subtareas: [{ id: 0, texto: "Subtarea de prueba", completada: false }],
        porcentajeSubtareas: 0,
      });

      expect(setTareasNuevas).toHaveBeenCalledWith({
        id: 1,
        titulo: "Tarea de prueba",
        descripcion: "Descripción tarea de prueba",
        estado: "nueva",
        subtareas: [{ id: 0, texto: "Subtarea de prueba", completada: false }],
        porcentajeSubtareas: 0,
      });
    });

    expect(screen.queryByTestId("input-titulo")).toBeNull();
  });

  it("new task with multiple subtasks", async () => {
    const setTareasNuevas = jest.fn((x) => {
    });
    const addTarea = jest.fn((x) => {
      let tareaMod = { ...x };
      tareaMod.id = 1;
      tareaMod.subtareas[0].id = 1;
      tareaMod.subtareas[1].id = 2;
      setTareasNuevas(tareaMod);
    }); 

    render(
      <Context.Provider
        value={{
          tareasNuevas: [],
          tareasEnProceso: [],
          tareasTerminadas: [],
          tareasBloqueadas: [],
          tareasVerificadas: [],
          setTareasNuevas: setTareasNuevas,
          setTareasEnProceso: jest.fn,
          setTareasTerminadas: jest.fn,
          setTareasBloqueadas: jest.fn,
          setTareasVerificadas: jest.fn,
          eliminarTarea: jest.fn,
          editarTarea: jest.fn,
          addTarea: addTarea,
          enviarAProceso: jest.fn,
          reutilizarTarea: jest.fn,
          terminarTarea: jest.fn,
          bloquearTarea: jest.fn,
          verificarTarea: jest.fn,
          cerrarSesion: jest.fn,
          toggleDivCrear: jest.fn,
          recolocarTarea: jest.fn,
          calcularPorcentajeComp: jest.fn,
        }}
      >
        <Kanban />
      </Context.Provider>
    );

    expect(screen.queryByTestId("input-titulo")).toBeNull();

    act(() => {
      user.click(getBtnNuevaTarea());
    });

    expect(getTitulo()).not.toBeNull();

    user.type(getTitulo(), "Tarea de prueba");
    user.type(getDescripcion(), "Descripción tarea de prueba");
    user.type(getSubtarea(), "Subtarea de prueba");

    user.click(getBtnAdd());

    user.type(screen.getByTestId("subtareas[1].id"), "Subtarea de prueba 2");

    await waitFor(() => {
      expect(getFormCreate()).toHaveFormValues({
        titulo: "Tarea de prueba",
        descripcion: "Descripción tarea de prueba",
        "subtareas[0].texto": "Subtarea de prueba",
        "subtareas[1].texto": "Subtarea de prueba 2",
      });
    });

    act(() => {
      user.click(getBtnCreate());
    });

    await waitFor(() => {
      expect(addTarea).toHaveBeenCalledWith({
        id: 0,
        titulo: "Tarea de prueba",
        descripcion: "Descripción tarea de prueba",
        estado: "nueva",
        subtareas: [
          { id: 1, texto: "Subtarea de prueba", completada: false },
          { id: 2, texto: "Subtarea de prueba 2", completada: false },
        ],
        porcentajeSubtareas: 0,
      });

      expect(setTareasNuevas).toHaveBeenCalledWith({
        id: 1,
        titulo: "Tarea de prueba",
        descripcion: "Descripción tarea de prueba",
        estado: "nueva",
        subtareas: [
          { id: 1, texto: "Subtarea de prueba", completada: false },
          { id: 2, texto: "Subtarea de prueba 2", completada: false },
        ],
        porcentajeSubtareas: 0,
      });
    });

    expect(screen.queryByTestId("input-titulo")).toBeNull();
  });

  it("title field should be required to submit creation form", async () => {
    const addTarea = jest.fn((x) => {
    });

    render(
      <Context.Provider
        value={{
          tareasNuevas: [],
          tareasEnProceso: [],
          tareasTerminadas: [],
          tareasBloqueadas: [],
          tareasVerificadas: [],
          setTareasNuevas: jest.fn,
          setTareasEnProceso: jest.fn,
          setTareasTerminadas: jest.fn,
          setTareasBloqueadas: jest.fn,
          setTareasVerificadas: jest.fn,
          eliminarTarea: jest.fn,
          editarTarea: jest.fn,
          addTarea: addTarea,
          enviarAProceso: jest.fn,
          reutilizarTarea: jest.fn,
          terminarTarea: jest.fn,
          bloquearTarea: jest.fn,
          verificarTarea: jest.fn,
          cerrarSesion: jest.fn,
          toggleDivCrear: jest.fn,
          recolocarTarea: jest.fn,
          calcularPorcentajeComp: jest.fn,
        }}
      >
        <Kanban />
      </Context.Provider>
    );

    act(() => {
      user.click(getBtnNuevaTarea());
    });

    expect(getTitulo()).not.toBeNull();

    user.type(getTitulo(), "Tarea de prueba");

    act(() => {
      user.click(getBtnCreate());
    });

    expect(getFormCreate()).toHaveFormValues({
      titulo: "Tarea de prueba",
    });

    await waitFor(() => {
      expect(addTarea).toHaveBeenCalled();
    });
  });
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
function getBtnAdd() {
  return screen.getByRole("button", {
    name: /🞧/i,
  });
}
function getBtnCreate() {
  return screen.getByRole("button", {
    name: /crear tarea/i,
  });
}
function getFormCreate() {
  return screen.getByTestId("formCreate");
}
function getBtnNuevaTarea() {
  return screen.getByTestId("btnNuevaTarea");
}
