import { useContext, useState } from "react";
import ModalFormCrear from "./components/ModalFormCrear";
import ModalFormEditar from "./components/ModalFormEditar";
import BarraSuperior from "./components/BarraSuperior";
import { Boton, ContenedorKanban, Lista } from "./styles/styles";
import { Context } from "../context/context";
import { Tarea } from "../domain/types/types";
import TareaCard from "./components/TareaCard";

export const Kanban = () => {
  const contexto = useContext(Context);

  const [dataModal, setDataModal] = useState<Tarea>({
    id: 0,
    titulo: "",
    descripcion: "",
    estado: "",
    subtareas: []
  });

  return (
    <div>
      <BarraSuperior />
      <ContenedorKanban>
        <Lista>
          <h1 className="tituloLista">Nuevas Tareas</h1>
          <div className="contenedor">
            {contexto.tareasNuevas.map((tarea) => (
              <TareaCard
                key={tarea.id}
                tarea={tarea}
                setDataModal={setDataModal}
              />
            ))}
          </div>
        </Lista>
        <Lista>
          <h1 className="tituloLista">En proceso</h1>
          <div className="contenedor">
            {contexto.tareasEnProceso.map((tarea) => (
              <TareaCard
                key={tarea.id}
                tarea={tarea}
                setDataModal={setDataModal}
              />
            ))}
          </div>
        </Lista>
        <Lista>
          <h1 className="tituloLista">Terminadas</h1>
          <div className="contenedor">
            {contexto.tareasTerminadas.map((tarea) => (
              <TareaCard
                key={tarea.id}
                tarea={tarea}
                setDataModal={setDataModal}
              />
            ))}
          </div>
        </Lista>
        <Lista>
          <h1 className="tituloLista">Verificadas</h1>
          <div className="contenedor">
            {contexto.tareasVerificadas.map((tarea) => (
              <TareaCard
                key={tarea.id}
                tarea={tarea}
                setDataModal={setDataModal}
              />
            ))}
          </div>
        </Lista>
        <Lista>
          <h1 className="tituloLista">Bloqueadas</h1>
          <div className="contenedor">
            {contexto.tareasBloqueadas.map((tarea) => (
              <TareaCard
                key={tarea.id}
                tarea={tarea}
                setDataModal={setDataModal}
              />
            ))}
          </div>
        </Lista>
        <div id="modalCrear" style={{ display: "none" }}>
          <ModalFormCrear />
        </div>
        <div id="modalEditar" style={{ display: "none" }}>
          <ModalFormEditar dataModal={dataModal} setDataModal={setDataModal} />
        </div>
        <Boton
          onClick={() => contexto.toggleDivCrear()}
          style={{ fontSize: "18px", width: "150px" }}
          className="btnAdd"
        >
          + Añadir tarea
        </Boton>
      </ContenedorKanban>
    </div>
  );
};
