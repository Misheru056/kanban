import { act, cleanup, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import user from "@testing-library/user-event";
import { renderWithContext, tiempo } from "./builder";
import { Kanban } from "../views/kanban.view";
import { tiempoService } from "../domain/api/conexionApiTiempo";

describe("Login", () => {
  beforeEach(() => {
    renderWithContext({
      children: (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      ),
    });
  });
  afterEach(() => {
    cleanup();
  });
  it("Inserting correct login data navigates to Kanban panel", () => {
    user.type(screen.getByTestId("inputUsuario"), "Ana");
    user.type(screen.getByTestId("inputPassword"), "Pru3ba.????");

    act(() => {
      user.click(screen.getByRole("button"));
    });

    jest.spyOn(tiempoService, "recogerDatos").mockResolvedValue(tiempo as any);

    renderWithContext({
      children: <Kanban />,
    });

    expect(screen.getAllByText("Nuevas Tareas")).toBeDefined();
  });
});
