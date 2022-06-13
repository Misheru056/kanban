import { screen, waitFor } from "@testing-library/react";
import { tiempoService } from "../domain/api/conexionApiTiempo";
import { Kanban } from "../views/kanban.view";
import { renderWithContext, tiempo } from "./builder";

it("Search on the api", async () => {
  jest.spyOn(tiempoService, "recogerDatos").mockResolvedValue(tiempo as any);
  renderWithContext({
    children: <Kanban />,
  });

  await waitFor(() => {
    expect(screen.queryByText("Cargando...")).toBeNull();
  });

  expect(screen.getByText("Estación de Cártama")).toBeDefined();
});
