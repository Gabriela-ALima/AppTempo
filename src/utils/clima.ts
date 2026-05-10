import {
  WiDaySunny,
  WiCloud,
  WiFog,
  WiRain,
  WiSnow,
  WiDayCloudy,
} from "react-icons/wi";

export function obterClima(
  codigo: number
) {

  switch (codigo) {

    case 0:
      return {
        descricao: "Céu limpo",
        icone: WiDaySunny,
      };

    case 1:
    case 2:
      return {
        descricao: "Parcialmente nublado",
        icone: WiDayCloudy,
      };

    case 3:
      return {
        descricao: "Nublado",
        icone: WiCloud,
      };

    case 45:
    case 48:
      return {
        descricao: "Neblina",
        icone: WiFog,
      };

    case 51:
    case 53:
    case 55:
    case 61:
    case 63:
    case 65:
      return {
        descricao: "Chuva",
        icone: WiRain,
      };

    case 71:
    case 73:
    case 75:
      return {
        descricao: "Neve",
        icone: WiSnow,
      };

    default:
      return {
        descricao: "Clima desconhecido",
        icone: WiCloud,
      };
  }
}