import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginRoute, PrivateRoute } from "./routes/routes";
import Inicio from "./views/Inicio";
import { Kanban } from "./views/kanban.view";
function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginRoute outlet={<Inicio /> } />} />
        <Route path="/organizador" element={<PrivateRoute outlet={<Kanban /> } />} />
      </Routes>
    </>
  );
}

export default App;
