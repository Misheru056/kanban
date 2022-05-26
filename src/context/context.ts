import { createContext } from "react";
import { Tarea } from "../domain/types/types";

type ContextProps = {
  tareasNuevas: Tarea[];
  tareasEnProceso: Tarea[];
  tareasTerminadas: Tarea[];
  tareasBloqueadas: Tarea[];
  tareasVerificadas: Tarea[];
  setTareasNuevas: Function;
  setTareasEnProceso: Function;
  setTareasTerminadas: Function;
  setTareasBloqueadas: Function;
  setTareasVerificadas: Function;
  eliminarTarea: Function;
  editarTarea: Function;
  addTarea: Function;
  enviarAProceso: Function;
  reutilizarTarea: Function;
  terminarTarea: Function;
  bloquearTarea: Function;
  verificarTarea: Function;
  cerrarSesion: Function;
  toggleDivCrear: Function;
  recolocarTarea: Function

};

export const Context = createContext({} as ContextProps);
