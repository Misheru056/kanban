import { cleanup, render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import ModalFormCrear from "./ModalFormCrear";

describe("ModalFormCrear renders", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the modal view", () => {
    render(<ModalFormCrear closeModal={jest.fn()} />);
    expect(getTitulo()).toBeInTheDocument();
  });

  it("title field should be required to submit creation form", async () => {
    render(<ModalFormCrear closeModal={jest.fn()} />);

    act(() => {
      user.click(getBtnCreate());
    });

    await waitFor(() => {
        expect(screen.queryByTestId("error")).toBeDefined();
    });

  });
});

function getTitulo() {
  return screen.getByTestId("input-titulo");
}
function getBtnCreate() {
  return screen.getByRole("button", {
    name: /crear tarea/i,
  });
}