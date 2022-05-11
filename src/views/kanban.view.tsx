import { useEffect } from "react";
import {
  BotonTarea,
  ContenedorKanban,
  DivTarea,
  Lista,
} from "../styles/styles";
import { Tarea } from "../types/types";

export const Kanban = () => {
  let tareasNuevas: Tarea[] = [
    { titulo: "tarea1", id: 1, descripcion: "blablabla", estado: "nueva" },
  ];
  let tareasEnProceso: Tarea[] = [];
  let tareasTerminadas: Tarea[] = [];

  const eliminarTarea = (tarea: Tarea, nombre: string) => {
    if (nombre == "nueva") {
      let ubicacion: number = tareasNuevas.indexOf(tarea);
      tareasNuevas.splice(ubicacion, 1);
    } else if (nombre == "proceso") {
      let ubicacion: number = tareasEnProceso.indexOf(tarea);
      tareasEnProceso.splice(ubicacion, 1);
    } else {
      let ubicacion: number = tareasTerminadas.indexOf(tarea);
      tareasTerminadas.splice(ubicacion, 1);
    }
  };
  const editarTarea = (tarea: Tarea, nombre: string) => {};
  useEffect(() => {}, [tareasNuevas, tareasEnProceso, tareasTerminadas]);

  return (
    <ContenedorKanban>
      <Lista>
        <h1>Nuevas Tareas</h1>
        {tareasNuevas.map((tarea) => (
          <DivTarea key={tareasTerminadas.indexOf(tarea)}>
            <div>
              <h2 className="tituloTarea">Título: {tarea.titulo}</h2>{" "}
              <h3>Descripción:</h3>
              <p className="descripcion">{tarea.descripcion}</p>
            </div>
            <BotonTarea>
              <button
                className="editar"
                role="button"
                onClick={() => editarTarea(tarea, "nueva")}
              >
                L
              </button>
              <button
                className="eliminar"
                onClick={() => eliminarTarea(tarea, "nueva")}
              >
                E
              </button>
              <button className="terminada">T</button>
              <button className="enviarAProceso">{"->"}</button>
            </BotonTarea>
          </DivTarea>
        ))}
      </Lista>
      <Lista>
        <h1>En proceso</h1>
        {tareasEnProceso.map((tarea) => (
          <DivTarea key={tareasTerminadas.indexOf(tarea)}>
            <div>
              <h2 className="tituloTarea">Título: {tarea.titulo}</h2>{" "}
              <h3>Descripción:</h3>
              <p className="descripcion">{tarea.descripcion}</p>
            </div>
            <BotonTarea>
              <button className="editar" role="button">
                L
              </button>
              <button
                className="eliminar"
                onClick={() => eliminarTarea(tarea, "proceso")}
              >
                E
              </button>
              <button className="terminada">T</button>
              <button className="enviarAProceso">{"->"}</button>
            </BotonTarea>
          </DivTarea>
        ))}
      </Lista>
      <Lista>
        <h1>Terminadas</h1>
        {tareasTerminadas.map((tarea) => (
          <DivTarea key={tareasTerminadas.indexOf(tarea)}>
            <div>
              <h2 className="tituloTarea">Título: {tarea.titulo}</h2>{" "}
              <h3>Descripción:</h3>
              <p className="descripcion">{tarea.descripcion}</p>
            </div>
            <BotonTarea>
              <button className="editar" role="button">
                L
              </button>
              <button
                className="eliminar"
                onClick={() => eliminarTarea(tarea, "terminadas")}
              >
                E
              </button>
              <button className="terminada">T</button>
              <button className="enviarAProceso">{"->"}</button>
            </BotonTarea>
          </DivTarea>
        ))}
      </Lista>
    </ContenedorKanban>
  );
};
