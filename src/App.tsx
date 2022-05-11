import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Inicio from "./views/Inicio";
import { Kanban } from "./views/kanban.view";
function App() {
  let iniciado: boolean = false;
  let usuario: string | null = "";
  useEffect(() => {
    usuario = localStorage.getItem("usuario");
  }, [!localStorage.getItem("usuario")]);
  return (
    <>
      <Routes>
        <Route
          element={usuario ? <Navigate to="/organizador" /> : <Inicio />}
          path={"/"}
        ></Route>
        <Route
          element={
            !localStorage.getItem("usuario") ? <Navigate to="/" /> : <Kanban />
          }
          path="/organizador"
        ></Route>
      </Routes>
    </>
  );
}

export default App;
