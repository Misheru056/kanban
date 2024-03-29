import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Tarea } from "../domain/types/types";
import { Context } from "./context";

interface StateProps {
  children: React.ReactNode | React.ReactNode[];
}

export const State = ({ children }: StateProps) => {
  //control de tema
  const [userChange, setUserChange] = React.useState<boolean>(false);

  const [theme, controlTheme] = React.useState<string>("light");
  /*Datos y métodos que queremos que sean comunes a todos los componentes*/
  const [tareasNuevas, setTareasNuevas] = React.useState<Tarea[]>([
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

    {
      titulo: "Mi tarea 2",
      id: 2,
      descripcion: "Otra cosa mariposa",
      estado: "nueva",
      subtareas: [],
    },
  ]);
  const [tareasEnProceso, setTareasEnProceso] = React.useState<Tarea[]>([
    {
      titulo: "Mi tarea 3",
      id: 3,
      descripcion: "Esta tarea está en proceso",
      estado: "proceso",
      subtareas: [],
    },
  ]);
  const [tareasTerminadas, setTareasTerminadas] = React.useState<Tarea[]>([
    {
      titulo: "Mi tarea 4",
      id: 4,
      descripcion: "Tarea completamente terminada",
      estado: "terminada",
      subtareas: [],
    },
  ]);
  const [tareasBloqueadas, setTareasBloqueadas] = React.useState<Tarea[]>([
    {
      titulo: "Bloqueada 1",
      id: 5,
      descripcion: "Tarea bloqueada",
      estado: "bloqueada",
      subtareas: [],
    },
  ]);
  const [tareasVerificadas, setTareasVerificadas] = React.useState<Tarea[]>([
    {
      titulo: "Verificada 1",
      id: 6,
      descripcion: "Tarea verificada",
      estado: "verificada",
      subtareas: [],
    },
  ]);

  const navigate = useNavigate();

  /* Elimina una tarea */
  const eliminarTarea = (tarea: Tarea) => {
    let origen = tarea.estado;
    let ubicacion: number;
    let tareasActualizadas: Tarea[];

    switch (origen) {
      case "nueva":
        ubicacion = tareasNuevas.indexOf(tarea);

        tareasActualizadas = [...tareasNuevas];
        tareasActualizadas.splice(ubicacion, 1);

        setTareasNuevas(tareasActualizadas);
        break;
      case "proceso":
        ubicacion = tareasEnProceso.indexOf(tarea);

        tareasActualizadas = [...tareasEnProceso];
        tareasActualizadas.splice(ubicacion, 1);

        setTareasEnProceso(tareasActualizadas);
        break;
      case "terminada":
        ubicacion = tareasTerminadas.indexOf(tarea);

        tareasActualizadas = [...tareasTerminadas];
        tareasActualizadas.splice(ubicacion, 1);

        setTareasTerminadas(tareasActualizadas);
        break;
      case "bloqueada":
        ubicacion = tareasBloqueadas.indexOf(tarea);

        tareasActualizadas = [...tareasBloqueadas];
        tareasActualizadas.splice(ubicacion, 1);

        setTareasBloqueadas(tareasActualizadas);
        break;
      case "verificada":
        ubicacion = tareasVerificadas.indexOf(tarea);

        tareasActualizadas = [...tareasVerificadas];
        tareasActualizadas.splice(ubicacion, 1);

        setTareasVerificadas(tareasActualizadas);
        break;
    }
  };

  // Mover la tarea de sitio
  const recolocarTarea = (tarea: Tarea, lugar: string) => {
    let tareasActualizadas: Tarea[];

    switch (lugar) {
      case "nueva":
        tareasActualizadas = [...tareasNuevas];
        tarea.estado = "nueva";
        tareasActualizadas.push(tarea);
        setTareasNuevas(tareasActualizadas);
        break;
      case "proceso":
        tareasActualizadas = [...tareasEnProceso];
        tarea.estado = "proceso";
        tareasActualizadas.push(tarea);
        setTareasEnProceso(tareasActualizadas);
        break;
      case "terminada":
        tareasActualizadas = [...tareasTerminadas];
        tarea.estado = "terminada";
        tareasActualizadas.push(tarea);
        setTareasTerminadas(tareasActualizadas);
        break;
      case "bloqueada":
        tareasActualizadas = [...tareasBloqueadas];
        tarea.estado = "bloqueada";
        tareasActualizadas.push(tarea);
        setTareasBloqueadas(tareasActualizadas);
        break;
      case "verificada":
        tareasActualizadas = [...tareasVerificadas];
        tarea.estado = "verificada";
        tareasActualizadas.push(tarea);
        setTareasVerificadas(tareasActualizadas);
        break;
    }
  };

  /* Edita una tarea */
  const editarTarea = (tarea: Tarea) => {
    let estado = tarea.estado;
    let index: number;
    let tareasActualizadas: Tarea[];

    switch (estado) {
      case "nueva":
        index = tareasNuevas.findIndex((t) => t.id === tarea.id);
        if (index !== -1) {
          tareasActualizadas = [...tareasNuevas];
          tareasActualizadas.splice(index, 1, tarea);
          setTareasNuevas(tareasActualizadas);
        }
        break;
      case "proceso":
        index = tareasEnProceso.findIndex((t) => t.id === tarea.id);
        if (index !== -1) {
          tareasActualizadas = [...tareasEnProceso];
          tareasActualizadas.splice(index, 1, tarea);
          setTareasEnProceso(tareasActualizadas);
        }
        break;
      case "terminada":
        index = tareasTerminadas.findIndex((t) => t.id === tarea.id);
        if (index !== -1) {
          tareasActualizadas = [...tareasTerminadas];
          tareasActualizadas.splice(index, 1, tarea);
          setTareasTerminadas(tareasActualizadas);
        }
        break;
      case "bloqueada":
        index = tareasBloqueadas.findIndex((t) => t.id === tarea.id);
        if (index !== -1) {
          tareasActualizadas = [...tareasBloqueadas];
          tareasActualizadas.splice(index, 1, tarea);
          setTareasBloqueadas(tareasActualizadas);
        }
        break;
      case "verificada":
        index = tareasVerificadas.findIndex((t) => t.id === tarea.id);
        if (index !== -1) {
          tareasActualizadas = [...tareasVerificadas];
          tareasActualizadas.splice(index, 1, tarea);
          setTareasVerificadas(tareasActualizadas);
        }
        break;
    }
  };

  /* Genera un id utilizando la hora y fecha actual */
  const getId = (): number => new Date().getTime();

  /* Añade una tarea al array tareasNuevas */
  const addTarea = (tarea: Tarea) => {
    //Eliminar subtareas vacías
    for (let i = tarea.subtareas.length - 1; i >= 0; i--) {
      if (tarea.subtareas[i].texto !== "") {
        tarea.subtareas[i].id = getId() + i;
      } else {
        tarea.subtareas.splice(i, 1);
      }
    }

    tarea.id = getId();
    setTareasNuevas([...tareasNuevas, tarea]);
  };

  /* Mueve una tarea a la fase 'En proceso' */
  const enviarAProceso = (tarea: Tarea) => {
    eliminarTarea(tarea);
    setTareasEnProceso([...tareasEnProceso, tarea]);
    tarea.estado = "proceso";
  };

  /* Mueve una tarea a la fase 'Terminada' */
  const terminarTarea = (tarea: Tarea) => {
    eliminarTarea(tarea);
    setTareasTerminadas([...tareasTerminadas, tarea]);
    tarea.estado = "terminada";
  };

  /* Mueve una tarea terminada a la fase 'Nueva' */
  const reutilizarTarea = (tarea: Tarea) => {
    eliminarTarea(tarea);
    setTareasNuevas([...tareasNuevas, tarea]);
    tarea.estado = "nueva";
  };

  /* Bloquea una tarea */
  const bloquearTarea = (tarea: Tarea) => {
    eliminarTarea(tarea);
    tarea.estado = "bloqueada";
    setTareasBloqueadas([...tareasBloqueadas, tarea]);
  };

  /* Verifica una tarea */
  const verificarTarea = (tarea: Tarea) => {
    eliminarTarea(tarea);
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

  /* Calcula el porcentaje de subtareas completadas */
  const calcularPorcentajeComp = (tarea: Tarea) => {
    let completadas: number = 0;
    for (const element of tarea.subtareas) {
      if (element.completada) completadas++;
    }

    tarea.porcentajeSubtareas = (completadas * 100) / tarea.subtareas.length;
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
        theme: theme,
        userChange: userChange,
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
        recolocarTarea: recolocarTarea,
        calcularPorcentajeComp: calcularPorcentajeComp,
        controlTheme: controlTheme,
        setUserChange: setUserChange,
      }}
    >
      {children}
    </Context.Provider>
  );
};
