import { tiempoService } from "../domain/api/conexionApiTiempo";
import { DatosTiempo } from "../domain/types/tiempo.models";
export class TiempoPresenter {

  setearDatos: React.Dispatch<React.SetStateAction<DatosTiempo | null>>;
  constructor(
    setearDatos: React.Dispatch<React.SetStateAction<DatosTiempo | null>>
  ) {
    this.setearDatos = setearDatos;
  }
  establecerDatos() {

    tiempoService.recogerDatos().then((r) => {
      console.log("RECOGER DATOS -> ", JSON.stringify(r))
      this.setearDatos({
        nombreCiuedad: r.data.name,
        temperatura: r.data.main.temp,
        icono:r.data.weather[0].icon
      });
    })
      .catch(() => {
      this.setearDatos(null)
    })
  }
}
//convertir en clase
