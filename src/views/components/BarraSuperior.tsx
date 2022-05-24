import { useContext } from "react";
import { Context } from "../../context/context";
import { Boton, BarraHerramientas } from "../styles/styles";

const BarraSuperior = () => {
  const contexto = useContext(Context);

  return (
    <BarraHerramientas>
      <span>Hola, {localStorage.getItem("usuario")}</span>
      <Boton onClick={() => contexto.cerrarSesion()} className="cerrarSesion">
        Cerrar sesión
      </Boton>
    </BarraHerramientas>
  );
};

export default BarraSuperior;
