import { render } from "@testing-library/react";
import React from "react";
import { Context, ContextProps } from "../context/context";

interface ProviderProps {
  children: React.ReactNode;
  providerData?: Partial<ContextProps>;
}
export const renderWithContext = ({
  children,
  providerData,
}: ProviderProps) => {
  return render(
    <Context.Provider
      value={{
        tareasNuevas: [],
        tareasEnProceso: [],
        tareasTerminadas: [],
        tareasBloqueadas: [],
        tareasVerificadas: [],
        theme: "light",
        userChange: undefined as unknown as boolean,
        setTareasNuevas: jest.fn,
        setTareasEnProceso: jest.fn,
        setTareasTerminadas: jest.fn,
        setTareasBloqueadas: jest.fn,
        setTareasVerificadas: jest.fn,
        eliminarTarea: jest.fn,
        editarTarea: jest.fn,
        addTarea: jest.fn,
        enviarAProceso: jest.fn,
        reutilizarTarea: jest.fn,
        terminarTarea: jest.fn,
        bloquearTarea: jest.fn,
        verificarTarea: jest.fn,
        cerrarSesion: jest.fn,
        toggleDivCrear: jest.fn,
        recolocarTarea: jest.fn,
        calcularPorcentajeComp: jest.fn,
        controlTheme: jest.fn,
        setUserChange: jest.fn,
        ...providerData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const tiempo = {
  data: {
    coord: { lon: -4.5482, lat: 36.746 },
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "algo de nubes",
        icon: "02d",
      },
    ],
    base: "stations",
    main: {
      temp: 24.67,
      feels_like: 24.39,
      temp_min: 24.04,
      temp_max: 26.6,
      pressure: 1013,
      humidity: 46,
    },
    visibility: 10000,
    wind: { speed: 5.14, deg: 260 },
    clouds: { all: 20 },
    dt: 1654249809,
    sys: {
      type: 2,
      id: 2010336,
      country: "ES",
      sunrise: 1654232425,
      sunset: 1654284754,
    },
    timezone: 7200,
    id: 2520053,
    name: "Estación de Cártama",
    cod: 200,
  },
  status: 200,
  statusText: "OK",
  headers: {
    "content-length": "485",
    "content-type": "application/json; charset=utf-8",
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    transformRequest: [null],
    transformResponse: [null],
    timeout: 15000,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: null },
    headers: { Accept: "application/json, text/plain, /" },
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
    params: {
      appid: "25dcd561efa2017aacc36379233fde3f",
      units: "metric",
      lang: "es",
      lat: 36.7460352,
      lon: -4.5481984,
    },
    method: "get",
    url: "/",
  },
  request: {},
};
