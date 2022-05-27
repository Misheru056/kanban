import { DragEventHandler, useContext } from "react";
import { Context } from "../../context/context";
import { Tarea } from "../../domain/types/types";
import { Boton, BotonTarea, DivTarea } from "../styles/styles";
import SubtareaCard from "./SubtareaCard";

type TareaCardProps = {
  tarea: Tarea;
  setDataModal: Function;
  onStart: DragEventHandler<HTMLDivElement>;
  id: string;
};

const TareaCard = ({ tarea, setDataModal, onStart, id }: TareaCardProps) => {
  const contexto = useContext(Context);

  return (
    <DivTarea
      draggable={true}
      id={id}
      onDragStart={onStart}
    >
      <div>
        <h2 className="tituloTarea">{tarea.titulo}</h2>
        <p className="descripcion">{tarea.descripcion}</p>
        <div>
          {tarea.subtareas.map( (subtarea, index) => (
            <SubtareaCard key={index} tareaPadre={tarea} subtarea={subtarea} />
          ))}
          {tarea.subtareas.length > 0 ? <p>Subtareas: {tarea.porcentajeSubtareas?.toFixed(0)}%</p> : ''}
        </div>
      </div>
      {tarea.estado !== "bloqueada" && (
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
            {String.fromCodePoint(parseInt("128465")) /* Icono papelera */}
          </Boton>
        </BotonTarea>
      )}
    </DivTarea>
  );
};

export default TareaCard;
