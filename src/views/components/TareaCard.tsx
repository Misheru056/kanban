import { useContext } from "react";
import { Context } from "../../context/context";
import { Tarea } from "../../domain/types/types";
import { Boton, BotonTarea, DivTarea } from "../styles/styles";

type TareaCardProps = { tarea: Tarea; setDataModal: Function };

const TareaCard = ({ tarea, setDataModal }: TareaCardProps) => {
  const contexto = useContext(Context);
  return (
    <DivTarea>
      <div>
        <h2 className="tituloTarea">{tarea.titulo}</h2>
        <p className="descripcion">{tarea.descripcion}</p>
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
