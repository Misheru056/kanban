import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { clear } from "@testing-library/user-event/dist/clear";
import { Tarea } from "../../../domain/types/types";
import { renderWithContext } from "../../../__test__/builder";
import { Kanban } from "../../kanban.view";
import ModalFormEditar from "./ModalFormEditar";
import user from "@testing-library/user-event";

describe("ModalFormEditar renders", () => {
  beforeEach(() => {
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
  });
  afterEach(() => {
    cleanup();
  });

  it("renders the modal view", () => {
    expect(getTitulo()).toBeInTheDocument();
  });

  it("title field required before submitting form", async () => {
    let titulo = getTitulo() as HTMLInputElement;
    expect(titulo.value).toBe("Mi tarea 1");

    clear(getTitulo());

    user.click(getBtnEdit());

    await waitFor(() => {
      expect(screen.queryByTestId("error")).toBeDefined();
    });
  });
});

function getTitulo() {
  return screen.getByTestId("input-titulo");
}
function getBtnEdit() {
  return screen.getByRole("button", {
    name: /guardar/i,
  });
}
