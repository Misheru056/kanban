import { DragEventHandler, useContext } from "react";
import { BotonTarea, DivTarea } from "./stylesTarea";
import { Context } from "../../../context/context";
import { Tarea } from "../../../domain/types/types";
import { Boton } from "../../styles/stylesGeneral";
import SubtareaCard from "./SubtareaCard";

type TareaCardProps = {
  tarea: Tarea;
  setDataModal: Function;
  onStart: DragEventHandler<HTMLDivElement>;
  id: string;
  showModal: Function;
};

const TareaCard = ({
  tarea,
  setDataModal,
  onStart,
  id,
  showModal,
}: TareaCardProps) => {
  const contexto = useContext(Context);

  return (
    <DivTarea draggable={true} id={id} onDragStart={onStart}>
      <div>
        <h2 className="tituloTarea">{tarea.titulo}</h2>
        <p className="descripcion">{tarea.descripcion}</p>
        <div>
          {tarea.subtareas.map((subtarea, index) => (
            <SubtareaCard key={index} tareaPadre={tarea} subtarea={subtarea} />
          ))}
          {tarea.subtareas.length > 0 ? (
            <p>Subtareas: {tarea.porcentajeSubtareas?.toFixed(0)}%</p>
          ) : (
            ""
          )}
        </div>
      </div>
      {tarea.estado !== "bloqueada" && (
        <BotonTarea>
          <Boton
            className="editar"
            data-testid={tarea.id.toString() + "buttoneditar"}
            onClick={() => {
              showModal(true);
              setDataModal(tarea);
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
            {String.fromCodePoint(parseInt("128465")) /* Icono papelera */}
          </Boton>
        </BotonTarea>
      )}
    </DivTarea>
  );
};

export default TareaCard;
