import axios, { AxiosResponse } from "axios";
import { DatosTiempo } from "../types/tiempo.dtos";
const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  timeout: 15000,
  params: {
    appid: "25dcd561efa2017aacc36379233fde3f",
    units: "metric",
    lang: "es",
  },
});

//  navigator.geolocation.getCurrentPosition((posicion: GeolocationPosition) => {
//    latitud = posicion.coords.latitude;
//    longitud = posicion.coords.longitude;
//    recogerDatos(latitud, longitud).then((r) => {
//      setNombre(r.data.name);
//      setTiempo(r.data.weather[0].description);
//      setTemperatura(r.data.main);
//      setIcon(r.data.weather[0].icon);
//    });
//  });
export async function recogerDatos(
  latitud: number,
  longitud: number
): Promise<AxiosResponse<DatosTiempo>> {
  const r = await instance.get<DatosTiempo>("/", {
    params: {
      lat: latitud,
      lon: longitud,
    },
  });
  return r;
}