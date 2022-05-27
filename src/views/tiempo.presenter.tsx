import { AxiosResponse } from "axios";
import { json } from "stream/consumers";
import { TransformationResult } from "typescript";
import recogerDatos from "../domain/api/conexionApiTiempo";
import { DatosTiempo } from "../domain/types/tiempo.models";
export const tiempoPresenter = (): Promise<AxiosResponse> => {
  return recogerDatos();
};
