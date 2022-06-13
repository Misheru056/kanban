import { act, cleanup, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import user from "@testing-library/user-event";
import { renderWithContext } from "./builder";
import Inicio from "../views/Inicio.view";
import { clear } from "@testing-library/user-event/dist/clear";

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
  })

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
