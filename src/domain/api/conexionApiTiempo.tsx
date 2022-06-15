import axios from "axios";
import { WeatherData } from "../types/tiempo.dtos";

let datosUbicacion: GeolocationCoordinates

const  valores = async() => {
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
    appid: "25dcd561efa2017aacc36379233fde3f",
    units: "metric",
    lang: "es",
  },
});
const recogerDatos = async () => {
  if (!datosUbicacion) {
     console.log(datosUbicacion);
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
