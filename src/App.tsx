import { Route, Routes } from "react-router-dom";
import { State } from "./context/state";
import { LoginRoute, PrivateRoute } from "./routes/routes";
import Inicio from "./views/Inicio.view";
import { Kanban } from "./views/kanban.view";
function App() {
  return (
    <>
      <State>
        <Routes>
          <Route path="/" element={<LoginRoute outlet={<Inicio />} />} />
          <Route
            path="/organizador"
           
            
            element={<PrivateRoute outlet={<Kanban />} />}
          />
        </Routes>
      </State>
    </>
  );
}

export default App;