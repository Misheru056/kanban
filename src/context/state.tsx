import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Tarea } from "../domain/types/types";
import { Context } from "./context";

interface StateProps {
  children: React.ReactNode | React.ReactNode[];
}

export const State = ({ children }: StateProps) => {
  /*Datos y métodos que queremos que sean comunes a todos los componentes*/

  const [tareasNuevas, setTareasNuevas] = React.useState<Tarea[]>([
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
  const [tareasEnProceso, setTareasEnProceso] = React.useState<Tarea[]>([
    {
      titulo: "Mi tarea 3",
      id: 3,
      descripcion: "Esta tarea está en proceso",
      estado: "proceso",
    },
  ]);
  const [tareasTerminadas, setTareasTerminadas] = React.useState<Tarea[]>([
    {
      titulo: "Mi tarea 4",
      id: 4,
      descripcion: "Tarea completamente terminada",
      estado: "terminada",
    },
  ]);
  const [tareasBloqueadas, setTareasBloqueadas] = React.useState<Tarea[]>([
    {
      titulo: "Bloqueada 1",
      id: 5,
      descripcion: "Tarea bloqueada",
      estado: "bloqueada",
    },
  ]);
  const [tareasVerificadas, setTareasVerificadas] = React.useState<Tarea[]>([
    {
      titulo: "Verificada 1",
      id: 6,
      descripcion: "Tarea verificada",
      estado: "verificada",
    },
  ]);
  const navigate = useNavigate();

  /* Elimina una tarea */
  const eliminarTarea = (tarea: Tarea) => {
    let ubicacion: number = tareasNuevas.indexOf(tarea);
    let estado: string = tarea.estado;
    if (estado === "nueva") {
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

  const editarTarea = (tarea: Tarea) => {
    let estado = tarea.estado;

    if (estado === "nueva") {
      let index: number = tareasNuevas.findIndex((t) => t.id === tarea.id);
      if (index !== -1) {
        let tareasActualizadas = [...tareasNuevas];
        tareasActualizadas.splice(index, 1, tarea);
        setTareasNuevas(tareasActualizadas);
      }
    } else if (estado === "proceso") {
      let index: number = tareasEnProceso.findIndex((t) => t.id === tarea.id);
      if (index !== -1) {
        let tareasActualizadas = [...tareasEnProceso];
        tareasActualizadas.splice(index, 1, tarea);
        setTareasEnProceso(tareasActualizadas);
      }
    } else {
      let index: number = tareasTerminadas.findIndex((t) => t.id === tarea.id);
      if (index !== -1) {
        let tareasActualizadas = [...tareasTerminadas];
        tareasActualizadas.splice(index, 1, tarea);
        setTareasTerminadas(tareasActualizadas);
      }
    }

    //Ocultar modal tras la actualización
    let md = document.getElementById("modalEditar");
    md!.style.display = "none";
  };

  /* Añade una tarea al array tareasNuevas */
  const addTarea = (tarea: Tarea) => {
    setTareasNuevas([...tareasNuevas, tarea]);
    toggleDivCrear();
  };

  /* Mueve una tarea a la fase 'En proceso' */
  const enviarAProceso = (tarea: Tarea) => {
    let ubicacion: number = tareasNuevas.indexOf(tarea);
    let estado: string = tarea.estado;

    if (estado === "nueva") {
      let tareasActualizadas = [...tareasNuevas];
      tareasActualizadas.splice(ubicacion, 1);
      setTareasNuevas(tareasActualizadas);
    } else if (estado === "terminada") {
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

    if (estado === "nueva") {
      let tareasActualizadas = [...tareasNuevas];
      tareasActualizadas.splice(ubicacion, 1);
      setTareasNuevas(tareasActualizadas);
    } else if (estado === "proceso") {
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

  /* Bloquea una tarea */
  const bloquearTarea = (tarea: Tarea) => {
    let estado: string = tarea.estado;

    if (estado === "nueva") {   
      let ubicacion: number = tareasNuevas.indexOf(tarea);

      let tareasActualizadas = [...tareasNuevas];
      tareasActualizadas.splice(ubicacion, 1);

      setTareasNuevas(tareasActualizadas);
    }
    else if (estado == "proceso") {
      let ubicacion: number = tareasEnProceso.indexOf(tarea);

      let tareasActualizadas = [...tareasEnProceso];
      tareasActualizadas.splice(ubicacion, 1);

      setTareasEnProceso(tareasActualizadas);
    }
    else if (estado == "terminada") {
      let ubicacion: number = tareasTerminadas.indexOf(tarea);

      let tareasActualizadas = [...tareasTerminadas];
      tareasActualizadas.splice(ubicacion, 1);

      setTareasTerminadas(tareasActualizadas);
    }
    else {
      let ubicacion: number = tareasVerificadas.indexOf(tarea);

      let tareasActualizadas = [...tareasBloqueadas];
      tareasActualizadas.splice(ubicacion, 1);

      setTareasVerificadas(tareasActualizadas);
    }
    tarea.estado = "bloqueada";
    setTareasBloqueadas([...tareasBloqueadas, tarea]);
  };

  /* Verifica una tarea */
  const verificarTarea = (tarea: Tarea) => {
    let estado: string = tarea.estado;

    if (estado === "nueva") {   
      let ubicacion: number = tareasNuevas.indexOf(tarea);

      let tareasActualizadas = [...tareasNuevas];
      tareasActualizadas.splice(ubicacion, 1);

      setTareasNuevas(tareasActualizadas);
    }
    else if (estado == "proceso") {
      let ubicacion: number = tareasEnProceso.indexOf(tarea);

      let tareasActualizadas = [...tareasEnProceso];
      tareasActualizadas.splice(ubicacion, 1);

      setTareasEnProceso(tareasActualizadas);
    }
    else if (estado == "terminada") {
      let ubicacion: number = tareasTerminadas.indexOf(tarea);

      let tareasActualizadas = [...tareasTerminadas];
      tareasActualizadas.splice(ubicacion, 1);

      setTareasTerminadas(tareasActualizadas);
    }
    else {
      let ubicacion: number = tareasBloqueadas.indexOf(tarea);

      let tareasActualizadas = [...tareasBloqueadas];
      tareasActualizadas.splice(ubicacion, 1);

      setTareasBloqueadas(tareasActualizadas);
    }

    tarea.estado = "verificada";
    setTareasVerificadas([...tareasVerificadas, tarea]);
  };

  /* Muestra u oculta el modal de creación de tarea */
  const toggleDivCrear = () => {
    const divCrear = document.getElementById("modalCrear");
    if (divCrear !== null) {
      if (divCrear.style.display === "none") divCrear.style.display = "flex";
      else divCrear.style.display = "none";
    }
  };

  /* Elimina el usuario guardado en localStorage (cierra sesión) */
  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    navigate("/");
  };

  return (
    //Pasar con value a qué se tendrá acceso
    <Context.Provider
      value={{
        tareasNuevas: tareasNuevas,
        tareasEnProceso: tareasEnProceso,
        tareasTerminadas: tareasTerminadas,
        tareasBloqueadas: tareasBloqueadas,
        tareasVerificadas: tareasVerificadas,
        setTareasNuevas: setTareasNuevas,
        setTareasEnProceso: setTareasEnProceso,
        setTareasTerminadas: setTareasTerminadas,
        setTareasBloqueadas: setTareasBloqueadas,
        setTareasVerificadas: setTareasVerificadas,
        eliminarTarea: eliminarTarea,
        editarTarea: editarTarea,
        addTarea: addTarea,
        enviarAProceso: enviarAProceso,
        reutilizarTarea: reutilizarTarea,
        terminarTarea: terminarTarea,
        bloquearTarea: bloquearTarea,
        verificarTarea: verificarTarea,
        cerrarSesion: cerrarSesion,
        toggleDivCrear: toggleDivCrear,
      }}
    >
      {children}
    </Context.Provider>
  );
};
