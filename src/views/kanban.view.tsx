import { useEffect, useState } from "react";
import ModalFormCrear from "../components/ModalFormCrear";
import ModalFormEditar from "../components/ModalFormEditar";
import {
  Boton,
  BotonTarea,
  ContenedorKanban,
  DivTarea,
  Lista,
} from "../styles/styles";
import { Tarea } from "../types/types";

export const Kanban = () => {
  const [tareasNuevas, setTareasNuevas] = useState<Tarea[]>([
    { titulo: "Mi tarea", id: 1, descripcion: "YOLOYOLOYOLO", estado: "nueva" },
    {
      titulo: "Mi tarea 2",
      id: 2,
      descripcion: "Otra cosa mariposa",
      estado: "nueva",
    },
  ]);
  let tareasEnProceso: Tarea[] = [
    { titulo: "Mi tarea", id: 1, descripcion: "YOLOYOLOYOLO", estado: "nueva" },
    {
      titulo: "Mi tarea 2",
      id: 2,
      descripcion: "Otra cosa mariposa",
      estado: "nueva",
    },
  ];
  let tareasTerminadas: Tarea[] = [
    { titulo: "Mi tarea", id: 1, descripcion: "YOLOYOLOYOLO", estado: "nueva" },
    {
      titulo: "Mi tarea 2",
      id: 2,
      descripcion: "Otra cosa mariposa",
      estado: "nueva",
    },
  ];
  const eliminarTarea = (tarea: Tarea, nombre: string) => {
    if (nombre === "nueva") {
      let ubicacion: number = tareasNuevas.indexOf(tarea);
      console.log(ubicacion);
      console.log(tareasNuevas.splice(ubicacion, 1));
    } else if (nombre === "proceso") {
      let ubicacion: number = tareasEnProceso.indexOf(tarea);
      tareasEnProceso.splice(ubicacion, 1);
    } else {
      let ubicacion: number = tareasTerminadas.indexOf(tarea);
      tareasTerminadas.splice(ubicacion, 1);
    }
  };
  const editarTarea = (tarea: Tarea) => {};

  /* Añade una tarea al array tareasNuevas */
  const addTarea = (tarea: Tarea) => {
    setTareasNuevas([...tareasNuevas, tarea]);
    toggleDivCrear();
  };

  // const [tocado, setTocado] = useState(false);
  // useEffect(() => {
  //   console.log("fszs");
  //    setTocado(false);
  // }, [tocado]);
  // document.addEventListener("click", (e) => {
  //   if (e.target == document.querySelector("#modalEditar")) {
  //     document.getElementById("modalEditar")!.style.display = "none";
  //   } else {
     
  //   }
  // });
  /* Muestra u oculta el div que contiene el modal de creación de tareas*/
  const toggleDivCrear = () => {
    const divCrear = document.getElementById("modalCrear");
    if (divCrear !== null) {
      if (divCrear.style.display === "none") divCrear.style.display = "flex";
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
          <DivTarea key={tareasNuevas.indexOf(tarea)}>
            <div>
              <h2 className="tituloTarea">Título: {tarea.titulo}</h2>{" "}
              <h3 className="descripcion">Descripción:</h3>
              <p className="descripcion">{tarea.descripcion}</p>
            </div>
            <BotonTarea>
              <Boton
                className="editar"
                onClick={() => {
                  ModalFormEditar(tarea);
                  // setTocado(true);
                }}
              >
                L
              </Boton>
              <Boton
                className="eliminar"
                onClick={() => eliminarTarea(tarea, "nueva")}
              >
                E
              </Boton>
              <Boton className="terminada">T</Boton>
              <Boton className="enviarAProceso">{"->"}</Boton>
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
              <button className="editar">L</button>
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
        <h1 className="tituloLista">Terminadas</h1>
        {tareasTerminadas.map((tarea) => (
          <DivTarea key={tareasTerminadas.indexOf(tarea)}>
            <div>
              <h2 className="tituloTarea">Título: {tarea.titulo}</h2>{" "}
              <h3 className="descripcion">Descripción:</h3>
              <p className="descripcion">{tarea.descripcion}</p>
            </div>
            <BotonTarea>
              <button className="editar">L</button>
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
      <div id="modalCrear" style={{ display: "none" }}>
        <ModalFormCrear addTarea={addTarea} />
      </div>
    </ContenedorKanban>
  );
};
