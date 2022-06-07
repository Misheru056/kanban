import { tiempoService } from "../domain/api/conexionApiTiempo";
import { DatosTiempo } from "../domain/types/tiempo.models";
export class TiempoPresenter {
  setearDatos: React.Dispatch<React.SetStateAction<DatosTiempo | undefined>>;
  constructor(
    setearDatos: React.Dispatch<React.SetStateAction<DatosTiempo | undefined>>
  ) {
    this.setearDatos = setearDatos;
  }
  establecerDatos() {
    tiempoService
      .recogerDatos()
      .then((r) => { 
        this.setearDatos({
          nombreCiuedad: r.data.name,
          temperatura: r.data.main.temp,
          icono: r.data.weather[0].icon,
        });
      })
      .catch(() => {
        this.setearDatos(undefined);
      });
  }
}
//convertir en clase
