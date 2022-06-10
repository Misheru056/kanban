import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import user from "@testing-library/user-event";

describe("Login", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
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
    user.type(screen.getByTestId("inputPassword"), "Pru3ba.????");
    expect(screen.getByDisplayValue("Pru3ba.????")).toBeDefined();

    act(() => {
      user.click(screen.getByRole('button'));
    });
    
    expect(screen.getByTestId("error")).toBeInTheDocument();
  });
});
