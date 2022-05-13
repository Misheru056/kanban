import { useEffect, useState } from "react";
import ModalFormCrear from "../components/ModalFormCrear";
import {
  Boton,
  BotonTarea,
  ContenedorKanban,
  DivTarea,
  Lista,
} from "../styles/styles";
import { Tarea } from "../types/types";

export const Kanban = () => {
  /* Variables de estado */
  const [tareasNuevas, setTareasNuevas] = useState<Tarea[]>([
    {
      titulo: "Mi tarea 1",
      id: 1,
      descripcion: "YOLOYOLOYOLO",
      estado: "nueva",
    },
    {
      titulo: "Mi tarea 2",
      id: 2,
      descripcion: "Otra cosa mariposa",
      estado: "nueva",
    },
  ]);
  const [tareasEnProceso, setTareasEnProceso] = useState<Tarea[]>([
    {
      titulo: "Mi tarea 3",
      id: 3,
      descripcion: "Esta tarea está en proceso",
      estado: "proceso",
    },
  ]);
  const [tareasTerminadas, setTareasTerminadas] = useState<Tarea[]>([
    {
      titulo: "Mi tarea 4",
      id: 4,
      descripcion: "Tarea completamente terminada",
      estado: "terminada",
    },
  ]);

  /* Elimina una tarea */
  const eliminarTarea = (tarea: Tarea) => {
    let ubicacion: number = tareasNuevas.indexOf(tarea);
    let estado: string = tarea.estado;
    if (estado == "nueva") {
      let tareasActualizadas = [...tareasNuevas];
      tareasActualizadas.splice(ubicacion, 1);
      setTareasNuevas(tareasActualizadas);
    } else if (estado == "proceso") {
      let tareasActualizadas = [...tareasEnProceso];
      tareasActualizadas.splice(ubicacion, 1);
      setTareasEnProceso(tareasActualizadas);
    } else {
      let tareasActualizadas = [...tareasTerminadas];
      tareasActualizadas.splice(ubicacion, 1);
      setTareasTerminadas(tareasActualizadas);
    }
  };

  const editarTarea = (tarea: Tarea, nombre: string) => {};

  /* Añade una tarea al array tareasNuevas */
  const addTarea = (tarea: Tarea) => {
    setTareasNuevas([...tareasNuevas, tarea]);
    toggleDivCrear();
  };

  /* Mueve una tarea a la fase 'En proceso' */
  const enviarAProceso = (tarea: Tarea) => {
    let ubicacion: number = tareasNuevas.indexOf(tarea);
    let estado: string = tarea.estado;

    if (estado == "nueva") {
      let tareasActualizadas = [...tareasNuevas];
      tareasActualizadas.splice(ubicacion, 1);
      setTareasNuevas(tareasActualizadas);
    } else if (estado == "terminada") {
      let tareasActualizadas = [...tareasTerminadas];
      tareasActualizadas.splice(ubicacion, 1);
      setTareasTerminadas(tareasActualizadas);
    }

    setTareasEnProceso([...tareasEnProceso, tarea]);
    tarea.estado = "proceso";
  };

  /* Mueve una tarea a la fase 'Terminada' */
  const terminarTarea = (tarea: Tarea) => {
    let ubicacion: number = tareasNuevas.indexOf(tarea);
    let estado: string = tarea.estado;

    if (estado == "nueva") {
      let tareasActualizadas = [...tareasNuevas];
      tareasActualizadas.splice(ubicacion, 1);
      setTareasNuevas(tareasActualizadas);
    } else if (estado == "proceso") {
      let tareasActualizadas = [...tareasEnProceso];
      tareasActualizadas.splice(ubicacion, 1);
      setTareasEnProceso(tareasActualizadas);
    }

    setTareasTerminadas([...tareasTerminadas, tarea]);
    tarea.estado = "terminada";
  };

  /* Mueve una tarea terminada a la fase 'Nueva' */
  const reutilizarTarea = (tarea: Tarea) => {
    let ubicacion: number = tareasNuevas.indexOf(tarea);

    setTareasNuevas([...tareasNuevas, tarea]);

    let tareasActualizadas = [...tareasTerminadas];
    tareasActualizadas.splice(ubicacion, 1);
    
    setTareasTerminadas(tareasActualizadas);
    tarea.estado = "nueva";
  };

  /* Muestra u oculta el div que contiene el modal de creación de tareas*/
  const toggleDivCrear = () => {
    const divCrear = document.getElementById("modalCrear");
    if (divCrear !== null) {
      if (divCrear.style.display == "none") divCrear.style.display = "flex";
      else divCrear.style.display = "none";
    }
  };

  return (
    <ContenedorKanban>
      <Boton
        style={{ position: "absolute", top: "0", right: "10px" }}
        onClick={() => toggleDivCrear()}
      >
        Añadir tarea
      </Boton>
      <Lista>
        <h1 className="tituloLista">Nuevas Tareas</h1>
        {tareasNuevas.map((tarea) => (
          <DivTarea key={tarea.id}>
            <div>
              <h2 className="tituloTarea">Título: {tarea.titulo}</h2>{" "}
              <h3 className="descripcion">Descripción:</h3>
              <p className="descripcion">{tarea.descripcion}</p>
            </div>
            <BotonTarea>
              <Boton
                className="editar"
                role="button"
                onClick={() => editarTarea(tarea, "nueva")}
              >
                L
              </Boton>
              <Boton className="eliminar" onClick={() => eliminarTarea(tarea)}>
                E
              </Boton>
              <Boton className="terminada" onClick={() => terminarTarea(tarea)}>
                T
              </Boton>
              <Boton
                className="enviarAProceso"
                onClick={() => enviarAProceso(tarea)}
              >
                {"->"}
              </Boton>
            </BotonTarea>
          </DivTarea>
        ))}
      </Lista>
      <Lista>
        <h1 className="tituloLista">En proceso</h1>
        {tareasEnProceso.map((tarea) => (
          <DivTarea key={tarea.id}>
            <div>
              <h2 className="tituloTarea">Título: {tarea.titulo}</h2>{" "}
              <h3 className="descripcion">Descripción:</h3>
              <p className="descripcion">{tarea.descripcion}</p>
            </div>
            <BotonTarea>
              <Boton className="editar" role="button">
                L
              </Boton>
              <Boton className="eliminar" onClick={() => eliminarTarea(tarea)}>
                E
              </Boton>
              <Boton className="terminada" onClick={() => terminarTarea(tarea)}>
                T
              </Boton>
            </BotonTarea>
          </DivTarea>
        ))}
      </Lista>
      <Lista>
        <h1 className="tituloLista">Terminadas</h1>
        {tareasTerminadas.map((tarea) => (
          <DivTarea key={tarea.id}>
            <div>
              <h2 className="tituloTarea">Título: {tarea.titulo}</h2>{" "}
              <h3 className="descripcion">Descripción:</h3>
              <p className="descripcion">{tarea.descripcion}</p>
            </div>
            <BotonTarea>
              <Boton className="editar" role="button">
                L
              </Boton>
              <Boton className="eliminar" onClick={() => eliminarTarea(tarea)}>
                E
              </Boton>
              <Boton
                className="enviarAProceso"
                onClick={() => enviarAProceso(tarea)}
              >
                {"->"}
              </Boton>
              <Boton
                className="reutilizarTarea"
                onClick={() => reutilizarTarea(tarea)}
              >
                R
              </Boton>
            </BotonTarea>
          </DivTarea>
        ))}
      </Lista>
      <div id="modalCrear" style={{ display: "none" }}>
        <ModalFormCrear addTarea={addTarea} />
      </div>
    </ContenedorKanban>
  );
};
