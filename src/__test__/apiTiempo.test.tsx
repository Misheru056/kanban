import { screen, waitFor } from "@testing-library/react";
import { tiempoService } from "../domain/api/conexionApiTiempo";
import { Kanban } from "../views/kanban.view";
import { renderWithContext, tiempo } from "./builder";

describe("API Weather", () => {
  it("Search on the api is successfull", async () => {
    jest.spyOn(tiempoService, "recogerDatos").mockResolvedValue(tiempo as any);

    renderWithContext({
      children: <Kanban />,
    });

    await waitFor(() => {
      expect(screen.queryByText("Cargando...")).toBeNull();
      expect(screen.queryByText("No disponible...")).toBeNull();
    });

    expect(screen.getByText("Estación de Cártama")).toBeDefined();
  });

  it("While loading weather data, api shows 'Cargando...' message", async () => {
    jest.spyOn(tiempoService, "recogerDatos").mockResolvedValue(tiempo as any);

    renderWithContext({
      children: <Kanban />,
    });

    expect(screen.queryByText("Cargando...")).not.toBeNull();

    await waitFor(() => {
      expect(screen.getByText("Estación de Cártama")).toBeDefined();
    });
  });

  it("When offline, api shows 'No disponible...' message", async () => {
    const tiempoUndefined = {
      data: undefined,
    };

    jest
      .spyOn(tiempoService, "recogerDatos")
      .mockResolvedValue(tiempoUndefined as any);

    renderWithContext({
      children: <Kanban />,
    });

    await waitFor(() => {
      expect(screen.queryByText("Cargando...")).not.toBeNull();
    });

    expect(screen.queryByText("No disponible")).toBeDefined();
  });
});
