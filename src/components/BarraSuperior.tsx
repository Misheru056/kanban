import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/context";
import { Boton, BarraHerramientas } from "../styles/styles";

const BarraSuperior = () => {
  const contexto = useContext(Context);

  return (
    <BarraHerramientas>
      <span>Hola, {localStorage.getItem("usuario")}</span>
      <Boton
        onClick={() => contexto.toggleDivCrear()}
        style={{ fontSize: "18px", width: "150px" }}
        className="btnAdd"
      >
        + Añadir tarea
      </Boton>
      <Boton onClick={() => contexto.cerrarSesion()} className="cerrarSesion">
        Cerrar sesión
      </Boton>
    </BarraHerramientas>
  );
};

export default BarraSuperior;
