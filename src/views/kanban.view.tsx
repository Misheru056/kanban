import { useContext, useState } from "react";
import ModalFormCrear from "../components/ModalFormCrear";
import ModalFormEditar from "../components/ModalFormEditar";
import BarraSuperior from "../components/BarraSuperior";
import {
  Boton,
  BotonTarea,
  ContenedorKanban,
  DivTarea,
  Lista,
} from "../styles/styles";
import { Context } from "../context/context";
import React from "react";
import { Tarea } from "../types/types";

export const Kanban = () => {
  const contexto = useContext(Context);
  const [tareas, setTarea] = useState<Tarea>({
    id: 0,
    titulo: "",
    descripcion: "",
    estado: "nueva",
  });
  return (
    <div>
      <BarraSuperior />
      <ContenedorKanban>
        <Lista>
          <h1 className="tituloLista">Nuevas Tareas</h1>
          {contexto.tareasNuevas.map((tarea) => (
            <DivTarea key={tarea.id}>
              <div>
                <h2 className="tituloTarea">{tarea.titulo}</h2>
                <p className="descripcion">{tarea.descripcion}</p>
              </div>
              <BotonTarea>
                <Boton
                  className="editar"
                  onClick={() => {
                    console.log(tarea);
                    setTarea(tarea);

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
        <Lista>
          <h1 className="tituloLista">En proceso</h1>
          {contexto.tareasEnProceso.map((tarea) => (
            <DivTarea key={tarea.id}>
              <div>
                <h2 className="tituloTarea">{tarea.titulo}</h2>
                <p className="descripcion">{tarea.descripcion}</p>
              </div>
              <BotonTarea>
                <Boton className="editar" title="Editar">
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
        <Lista>
          <h1 className="tituloLista">Terminadas</h1>
          {contexto.tareasTerminadas.map((tarea) => (
            <DivTarea key={tarea.id}>
              <div>
                <h2 className="tituloTarea">{tarea.titulo}</h2>
                <p className="descripcion">{tarea.descripcion}</p>
              </div>
              <BotonTarea>
                <Boton className="editar" title="Editar">
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
        {React.createElement("div", {
          id: "modalEditar",
          children: <ModalFormEditar {...tareas} />,
          style: { display: "none" },
        })}
      </ContenedorKanban>
    </div>
  );
};
