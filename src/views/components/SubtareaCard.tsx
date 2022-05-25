import { useContext, useState } from "react";
import { Context } from "../../context/context";
import { Subtarea, Tarea } from "../../domain/types/types";
import { DivSubtarea } from "../styles/styles";

type SubtareaCardProps = { subtarea: Subtarea, tareaPadre: Tarea };

const SubtareaCard = ({ subtarea, tareaPadre }: SubtareaCardProps) => {
  const contexto = useContext(Context);
  const [completa, setCompleta] = useState(subtarea.completada);
  const handleChange = () => {
    let estadoComp: boolean = completa;
    estadoComp = !estadoComp;
    setCompleta(estadoComp);
    subtarea.completada = estadoComp;

    let completadas: number = 0;
    for(const element of tareaPadre.subtareas){
        if(element.completada)
            completadas++;
    }

    tareaPadre.porcentajeSubtareas = (completadas * 100) / tareaPadre.subtareas.length;

    contexto.editarTarea(tareaPadre);
  };

  return (
    <DivSubtarea>
      <form>
        <input
          type="checkbox"
          id={"sub" + subtarea.id}
          checked={subtarea.completada}
          onChange={handleChange}
        />
        <label
          htmlFor={"sub" + subtarea.id}
          className={subtarea.completada ? "completada" : ""}
        >
          {subtarea.texto}
        </label>
      </form>
    </DivSubtarea>
  );
};

export default SubtareaCard;
