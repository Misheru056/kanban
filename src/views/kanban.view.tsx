import React, { useContext, useRef, useState } from "react";
import ModalFormCrear from "./components/ModalFormCrear";
import ModalFormEditar from "./components/ModalFormEditar";
import BarraSuperior from "./components/BarraSuperior";
import {
  Boton,
  BotonTarea,
  ContenedorKanban,
  DivTarea,
  Lista,
} from "./styles/styles";
import { Context } from "../context/context";
import { Tarea } from "../domain/types/types";
import { parseJsonText } from "typescript";
import { stringify } from "querystring";

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
          {contexto.tareasNuevas.map((tarea) => (
            <DivTarea
              key={tarea.id}
              id={tarea.id.toString()}
              draggable={true}
              onDragStart={(e) => {
                inicioDrag(e, tarea);
              }}
            >
              <div>
                <h2 className="tituloTarea">{tarea.titulo}</h2>
                <p className="descripcion">{tarea.descripcion}</p>
              </div>
              <BotonTarea>
                <Boton
                  className="editar"
                  onClick={() => {
                    setDataModal(tarea);

                    let md = document.getElementById("modalEditar");
                    md!.style.display = "flex";
                  }}
                  title="Editar"
                >
                  {String.fromCodePoint(parseInt("9998")) /* Icono lápiz */}
                </Boton>
                <Boton
                  className="eliminar"
                  onClick={() => {
                    contexto.eliminarTarea(tarea);
                  }}
                  title="Eliminar"
                >
                  {
                    String.fromCodePoint(
                      parseInt("128465")
                    ) /* Icono papelera */
                  }
                </Boton>
                <Boton
                  className="terminada"
                  onClick={() => contexto.terminarTarea(tarea)}
                  title="Marcar como terminada"
                >
                  {String.fromCodePoint(parseInt("10004")) /* Icono check */}
                </Boton>
                <Boton
                  className="enviarAProceso"
                  onClick={() => contexto.enviarAProceso(tarea)}
                  title="Marcar como 'En proceso'"
                >
                  {String.fromCodePoint(parseInt("129154")) /* Icono flecha */}
                </Boton>
              </BotonTarea>
            </DivTarea>
          ))}
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
          {contexto.tareasEnProceso.map((tarea) => (
            <DivTarea
              key={tarea.id}
              id={tarea.id.toString()}
              draggable={true}
              onDragStart={(e) => {
                inicioDrag(e, tarea);
              }}
            >
              <div>
                <h2 className="tituloTarea">{tarea.titulo}</h2>
                <p className="descripcion">{tarea.descripcion}</p>
              </div>
              <BotonTarea>
                <Boton
                  className="editar"
                  onClick={() => {
                    setDataModal(tarea);

                    let md = document.getElementById("modalEditar");
                    md!.style.display = "flex";
                  }}
                  title="Editar"
                >
                  {String.fromCodePoint(parseInt("9998")) /* Icono lápiz */}
                </Boton>
                <Boton
                  className="eliminar"
                  onClick={() => contexto.eliminarTarea(tarea)}
                  title="Eliminar"
                >
                  {
                    String.fromCodePoint(
                      parseInt("128465")
                    ) /* Icono papelera */
                  }
                </Boton>
                <Boton
                  className="terminada"
                  onClick={() => contexto.terminarTarea(tarea)}
                  title="Marcar como terminada"
                >
                  {String.fromCodePoint(parseInt("10004")) /* Icono check */}
                </Boton>
              </BotonTarea>
            </DivTarea>
          ))}
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
          {contexto.tareasTerminadas.map((tarea) => (
            <DivTarea
              key={tarea.id}
              id={tarea.id.toString()}
              draggable={true}
              onDragStart={(e) => {
                inicioDrag(e, tarea);
              }}
            >
              <div>
                <h2 className="tituloTarea">{tarea.titulo}</h2>
                <p className="descripcion">{tarea.descripcion}</p>
              </div>
              <BotonTarea>
                <Boton
                  className="editar"
                  onClick={() => {
                    setDataModal(tarea);

                    let md = document.getElementById("modalEditar");
                    md!.style.display = "flex";
                  }}
                  title="Editar"
                >
                  {String.fromCodePoint(parseInt("9998")) /* Icono lápiz */}
                </Boton>
                <Boton
                  className="eliminar"
                  onClick={() => contexto.eliminarTarea(tarea)}
                  title="Eliminar"
                >
                  {
                    String.fromCodePoint(
                      parseInt("128465")
                    ) /* Icono papelera */
                  }
                </Boton>
                <Boton
                  className="enviarAProceso"
                  onClick={() => contexto.enviarAProceso(tarea)}
                  title="Marcar como 'En proceso'"
                >
                  {String.fromCodePoint(parseInt("129152")) /* Icono flecha */}
                </Boton>
                <Boton
                  className="reutilizarTarea"
                  onClick={() => contexto.reutilizarTarea(tarea)}
                  title="Reutilizar"
                >
                  {String.fromCodePoint(parseInt("9851")) /* Icono reciclaje */}
                </Boton>
              </BotonTarea>
            </DivTarea>
          ))}
        </Lista>
        <div id="modalCrear" style={{ display: "none" }}>
          <ModalFormCrear />
        </div>
        <div id="modalEditar" style={{ display: "none" }}>
          <ModalFormEditar dataModal={dataModal} setDataModal={setDataModal} />
        </div>
      </ContenedorKanban>
    </div>
  );
};
