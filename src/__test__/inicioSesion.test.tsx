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
  it("Renders Inicio view and login form", () => {
    expect(screen.getByText("Pizarra Kanban")).toBeInTheDocument();
    expect(screen.getByText("Inicia sesión")).toBeInTheDocument();
    expect(screen.getByText("Usuario")).toBeInTheDocument();
    expect(screen.getByText("Contraseña")).toBeInTheDocument();
  });

  it("Login form fields are filled correctly", () => {
    user.type(screen.getByTestId("inputUsuario"), "Ana");
    expect(screen.getByDisplayValue("Ana")).toBeDefined();

    user.type(screen.getByTestId("inputPassword"), "Pru3ba.????");
    expect(screen.getByDisplayValue("Pru3ba.????")).toBeDefined();
  });

  it.skip("Unfilled required fields show error", () => {
    renderWithContext({ children: <Inicio /> });
    user.type(screen.getByTestId("inputPassword"), "Pru3ba.????");
    expect(screen.getByDisplayValue("Pru3ba.????")).toBeDefined();

    act(() => {
      user.click(screen.getByRole("button"));
    });

    expect(screen.getByTestId("error")).toBeInTheDocument();
  });
});
