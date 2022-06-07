import axios from "axios";
import { WeatherData } from "../types/tiempo.dtos";
let datosUbicacion: GeolocationCoordinates;

let datosUbicacion: GeolocationCoordinates = {
  latitude: undefined as unknown as number,
  longitude: undefined as unknown as number,
  accuracy: undefined as unknown as number,
  altitude: undefined as unknown as number,
  altitudeAccuracy: undefined as unknown as number,
  heading: undefined as unknown as number,
  speed: undefined as unknown as number,
};

const valores = () => {
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


const recogerDatos = () => { 
  if (datosUbicacion) {
    return instance.get<WeatherData>("/", {
      params: {
        lat: datosUbicacion.latitude,
        lon: datosUbicacion.longitude,
      },
    });
  }

};
export const tiempoService = { recogerDatos };
