import React, { useContext, useRef, useState } from "react";
import ModalFormCrear from "./components/formularios/ModalFormCrear";
import ModalFormEditar from "./components/formularios/ModalFormEditar";
import BarraSuperior from "./components/BarraSuperior";
import { Boton, ContenedorKanban, Lista } from "./styles/stylesGeneral";
import { Context } from "../context/context";
import { Tarea } from "../domain/types/types";
import TareaCard from "./components/tareas/TareaCard";

export const Kanban = () => {
  const contexto = useContext(Context);
  const [dataModal, setDataModal] = useState<Tarea>({
    id: 0,
    titulo: "",
    descripcion: "",
    estado: "",
    subtareas: [{ id: 0, texto: "", completada: false }],
  });

  const [dragTarea, setDragTarea] = useState<Tarea>();

  const [showModalCrear, setShowModalCrear] = useState(false);
  const [showModalEditar, setShowModalEditar] = useState(false);

  //Constantes relacionadas con Drag & Drop
  const draggingItem = useRef<number>();
  const dragOverItem = useRef<string>();

  const inicioDrag = (event: React.DragEvent<HTMLDivElement>, tarea: Tarea) => {
    draggingItem.current = parseInt(event.currentTarget.id);
    setDragTarea(tarea);
  };

  //Por el que pasa por encima el elemento
  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    dragOverItem.current = event.currentTarget.id;
  };
  //cuanto suelto la tarea
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (dragOverItem.current !== dragTarea?.estado) {
      contexto.eliminarTarea(dragTarea);
      contexto.recolocarTarea(dragTarea, dragOverItem.current);
    }
  };
  return (
    <div>
      <BarraSuperior />
      <ContenedorKanban>
        <Lista
          id="nueva"
          onDragEnter={enableDropping}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            handleDrop(e);
          }}
        >
          <h1 className="tituloLista">Nuevas Tareas</h1>

          <div className="contenedor">
            {contexto.tareasNuevas.map((tarea) => (
              <TareaCard
                key={tarea.id}
                onStart={(e) => {
                  inicioDrag(e, tarea);
                }}
                id={tarea.id.toString()}
                tarea={tarea}
                setDataModal={setDataModal}
              />
            ))}
          </div>
        </Lista>
        <Lista
          id="proceso"
          onDragEnter={enableDropping}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            handleDrop(e);
          }}
        >
          <h1 className="tituloLista">En proceso</h1>
          <div className="contenedor">
            {contexto.tareasEnProceso.map((tarea) => (
              <TareaCard
                key={tarea.id}
                onStart={(e) => {
                  inicioDrag(e, tarea);
                }}
                id={tarea.id.toString()}
                tarea={tarea}
                setDataModal={setDataModal}
              />
            ))}
          </div>
        </Lista>
        <Lista
          id="terminada"
          onDragEnter={enableDropping}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            handleDrop(e);
          }}
        >
          <h1 className="tituloLista">Terminadas</h1>

          <div className="contenedor">
            {contexto.tareasTerminadas.map((tarea) => (
              <TareaCard
                key={tarea.id}
                onStart={(e) => {
                  inicioDrag(e, tarea);
                }}
                id={tarea.id.toString()}
                tarea={tarea}
                setDataModal={setDataModal}
              />
            ))}
          </div>
        </Lista>
        <Lista
          id="verificada"
          onDragEnter={enableDropping}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            handleDrop(e);
          }}
        >
          <h1 className="tituloLista">Verificadas</h1>
          <div className="contenedor">
            {contexto.tareasVerificadas.map((tarea) => (
              <TareaCard
                key={tarea.id}
                onStart={(e) => {
                  inicioDrag(e, tarea);
                }}
                id={tarea.id.toString()}
                tarea={tarea}
                setDataModal={setDataModal}
              />
            ))}
          </div>
        </Lista>
        <Lista
          id="bloqueada"
          onDragEnter={enableDropping}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            handleDrop(e);
          }}
        >
          <h1 className="tituloLista">Bloqueadas</h1>
          <div className="contenedor">
            {contexto.tareasBloqueadas.map((tarea) => (
              <TareaCard
                key={tarea.id}
                onStart={(e) => {
                  inicioDrag(e, tarea);
                }}
                id={tarea.id.toString()}
                tarea={tarea}
                setDataModal={setDataModal}
              />
            ))}
          </div>
        </Lista>
        {showModalCrear && (
          <div id="modalCrear">
            <ModalFormCrear closeModal={() => setShowModalCrear(false)} />
          </div>
        )}
        <div id="modalEditar" style={{ display: "none" }}>
          <ModalFormEditar dataModal={dataModal} setDataModal={setDataModal} />
        </div>
        <Boton
          onClick={() => setShowModalCrear(true)}
          style={{ fontSize: "18px", width: "150px" }}
          className="btnAdd"
          data-testid="btnNuevaTarea"
        >
          + Añadir tarea
        </Boton>
      </ContenedorKanban>
    </div>
  );
};
