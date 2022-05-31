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

    contexto.calcularPorcentajeComp(tareaPadre);
    contexto.editarTarea(tareaPadre);
  };

  return (
    <DivSubtarea>
      <form>
        <label className={subtarea.completada ? "completada" : ""}>
        <input
          type="checkbox"
          id={subtarea.id.toString()}
          checked={subtarea.completada}
          onChange={handleChange}
        />
          {subtarea.texto}
        </label>
      </form>
    </DivSubtarea>
  );
};

export default SubtareaCard;
