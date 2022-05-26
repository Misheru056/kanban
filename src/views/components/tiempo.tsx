import { DatosTiempo } from "../../domain/types/tiempo.models";
interface datosTiempoProps {
  datosTiempo: DatosTiempo;
}
const Tiempo = ({ datosTiempo }: datosTiempoProps) => {
  return (
    <div>
      <span>{datosTiempo?.nombreCiuedad}</span>
      <img
        src={`http://openweathermap.org/img/wn/${datosTiempo?.icono}@2x.png`}
      ></img>
    </div>
  );
};
export default Tiempo;
