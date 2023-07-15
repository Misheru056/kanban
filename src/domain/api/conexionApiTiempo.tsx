import axios from "axios";
import { WeatherData } from "../types/tiempo.dtos";

let datosUbicacion: GeolocationCoordinates;

const valores = async () => {
  navigator.geolocation.getCurrentPosition((posicion) => {
    const ubicacion = posicion.coords;
    datosUbicacion = ubicacion;
  });
};
valores();

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  timeout: 15000,
  params: {
    appid: "",
    units: "metric",
    lang: "es",
  },
});
const recogerDatos = async () => {
  if (!datosUbicacion) {
    valores();
  }

  const conexion = await instance.get<WeatherData>("/", {
    params: {
      lat: datosUbicacion.latitude,
      lon: datosUbicacion.longitude,
    },
  });

  return conexion;
};

export const tiempoService = { recogerDatos };
