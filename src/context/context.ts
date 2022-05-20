import { createContext } from "react";
import { Tarea } from "../domain/types/types";

type ContextProps = {
  tareasNuevas: Tarea[];
  tareasEnProceso: Tarea[];
  tareasTerminadas: Tarea[];
  setTareasNuevas: Function;
  setTareasEnProceso: Function;
  setTareasTerminadas: Function;
  eliminarTarea: Function;
  editarTarea: Function;
  addTarea: Function;
  enviarAProceso: Function;
  reutilizarTarea: Function;
  terminarTarea: Function;
  cerrarSesion: Function;
  toggleDivCrear: Function;
};

export const Context = createContext({} as ContextProps);
