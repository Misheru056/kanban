import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { Context } from "../context/context";
import { tiempoService } from "../domain/api/conexionApiTiempo";
import { Kanban } from "../views/kanban.view";
import { tiempo } from "./builder";

it("Search on the api", async () => {
  jest.spyOn(tiempoService, "recogerDatos").mockResolvedValue(tiempo as any);

  render(
    <Context.Provider
      value={{
        tareasNuevas: [
          {
            titulo: "Mi tarea 1",
            id: 1,
            descripcion: "YOLOYOLOYOLO",
            estado: "nueva",
            subtareas: [
              { id: 1, texto: "Subtarea 1", completada: false },
              { id: 2, texto: "Subtarea 2", completada: true },
            ],
            porcentajeSubtareas: 50,
          },
        ],
        tareasEnProceso: [
          {
            titulo: "Mi tarea 3",
            id: 3,
            descripcion: "Esta tarea está en proceso",
            estado: "proceso",
            subtareas: [],
          },
        ],
        tareasTerminadas: [
          {
            titulo: "Mi tarea 4",
            id: 4,
            descripcion: "Tarea completamente terminada",
            estado: "terminada",
            subtareas: [],
          },
        ],
        tareasBloqueadas: [
          {
            titulo: "Bloqueada 1",
            id: 5,
            descripcion: "Tarea bloqueada",
            estado: "bloqueada",
            subtareas: [],
          },
        ],
        tareasVerificadas: [
          {
            titulo: "Verificada 1",
            id: 6,
            descripcion: "Tarea verificada",
            estado: "verificada",
            subtareas: [],
          },
              ],
        
        setTareasNuevas: jest.fn,
        setTareasEnProceso: jest.fn,
        setTareasTerminadas: jest.fn,
        setTareasBloqueadas: jest.fn,
        setTareasVerificadas: jest.fn,
        eliminarTarea: jest.fn,
        editarTarea: jest.fn,
        addTarea: jest.fn,
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


  await waitFor(() => {
    expect(screen.queryByText("Cargando...")).toBeNull();
  });

  expect(screen.getByText("Estación de Cártama")).toBeDefined();
});
