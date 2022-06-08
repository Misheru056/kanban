import { DatosTiempo } from "../../../domain/types/tiempo.models";
import { DivTiempo, Img } from "./style";
interface datosTiempoProps {
  datosTiempo: DatosTiempo;
}
const Tiempo = ({ datosTiempo }: datosTiempoProps) => {
  return (
    <DivTiempo>
      <span>{datosTiempo?.nombreCiuedad}</span>
      <span>{datosTiempo?.temperatura}ºC</span>
      <Img
        src={`http://openweathermap.org/img/wn/${datosTiempo?.icono}@2x.png`}
      ></Img>
    </DivTiempo>
  );
};
export default Tiempo;
