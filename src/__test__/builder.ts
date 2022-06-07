import React from "react";

const mockValue = {
  tareasNuevas: [
    {
      titulo: "Mi tarea 1",
      id: 1,
      descripcion: "YOLOYOLOYOLO",
      estado: "nueva",
      subtareas: [
        { id: 1, texto: "Subtarea 1", completada: false },
        { id: 2, texto: "Subtarea 2", completada: true },
      ],
      porcentajeSubtareas: 50,
    },
  ],
  tareasEnProceso: [
    {
      titulo: "Mi tarea 3",
      id: 3,
      descripcion: "Esta tarea está en proceso",
      estado: "proceso",
      subtareas: [],
    },
  ],
  tareasTerminadas: [
    {
      titulo: "Mi tarea 4",
      id: 4,
      descripcion: "Tarea completamente terminada",
      estado: "terminada",
      subtareas: [],
    },
  ],
  tareasBloqueadas: [
    {
      titulo: "Bloqueada 1",
      id: 5,
      descripcion: "Tarea bloqueada",
      estado: "bloqueada",
      subtareas: [],
    },
  ],
  tareasVerificadas: [
    {
      titulo: "Verificada 1",
      id: 6,
      descripcion: "Tarea verificada",
      estado: "verificada",
      subtareas: [],
    },
  ],
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
}
export const Contexto = React.createContext(mockValue);
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
}

