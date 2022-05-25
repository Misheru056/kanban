import React, { useContext, useRef, useState } from "react";
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
  });

  const [dragTarea, setDragTarea] = useState<Tarea>();
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
    console.log(dragOverItem.current);
  };

  //cuanto suelto la tarea
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    contexto.eliminarTarea(dragTarea);
    contexto.recolocarTarea(dragTarea, dragOverItem.current);
  };
  console.log(contexto.tareasEnProceso);
  return (
    <div>
      <BarraSuperior />
      <ContenedorKanban>
        <Lista
          id="Nuevas"
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
                // id={tarea.id.toString()}
                // draggable={true}
                // onDragStart={(e) => {
                //   inicioDrag(e, tarea);
                // }}
                tarea={tarea}
                setDataModal={setDataModal}
              />
            ))}
          </div>
        </Lista>
        <Lista
          id="Proceso"
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
                // id={tarea.id.toString()}
                // draggable={true}
                // onDragStart={(e) => {
                //   inicioDrag(e, tarea);
                // }}
                 tarea={tarea}
                setDataModal={setDataModal}
              />
            ))}
          </div>
        </Lista>
        <Lista
          id="Terminadas"
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
                // id={tarea.id.toString()}
                // draggable={true}
                // onDragStart={(e) => {
                //   inicioDrag(e, tarea);
                // }}
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
