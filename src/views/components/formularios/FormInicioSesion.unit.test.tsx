import { act, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import user from "@testing-library/user-event";
import App from "../../../App";

describe("Login renders", () => {
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

  it("Unfulfilled required fields show error", async () => {
    user.type(screen.getByTestId("inputPassword"), "Pru3ba.????");
    expect(screen.getByDisplayValue("Pru3ba.????")).toBeDefined();

    act(() => {
      user.click(screen.getByRole("button"));
    });

    await waitFor(() => {
      expect(screen.getByTestId("error")).toBeDefined();
    });
  });

});