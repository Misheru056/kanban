import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Context } from "./context/context";
import { LoginRoute, PrivateRoute } from "./routes/routes";
import Inicio from "./views/Inicio.view";
import { Kanban } from "./views/kanban.view";
import {
  DarkTheme,
  GlobalStyle,
  LightTheme,
} from "./views/styles/stylesGeneral";
function App() {
  let contexto = useContext(Context);
  const hoy: Date = new Date();
  let hora = hoy.getHours();

  let intervalId;
  useEffect(() => {
    intervalId = setInterval(() => {
      hora = hoy.getHours();
      console.log("intervalo");
    }, 300000);
    if (!contexto.userChange && hoy.getHours() >= 13 && hoy.getHours() <= 6) {
      contexto.controlTheme("dark");
    } else if (
      !contexto.userChange &&
      hoy.getHours() < 13 &&
      hoy.getHours() > 6
    ) {
      contexto.controlTheme("light");
    }
  }, [contexto.theme, hora]);
  return (
    <>
      <ThemeProvider
        theme={contexto.theme === "light" ? LightTheme : DarkTheme}
      >
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginRoute outlet={<Inicio />} />} />
          <Route
            path="/organizador"
            element={<PrivateRoute outlet={<Kanban />} />}
          />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
