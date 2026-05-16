import axios
from "axios";

export const api =
  axios.create({

    baseURL:
      "https://geocoding-api.open-meteo.com/v1",
  });

export async function buscarClima(
  cidade: string
) {

  const geoResponse =
    await api.get(
      `/search?name=${cidade}&count=1&language=pt&format=json`
    );

  const local =
    geoResponse.data.results?.[0];

  if (!local) {

    throw new Error(
      "Cidade não encontrada"
    );
  }

  const climaResponse =
  await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${local.latitude}&longitude=${local.longitude}&current_weather=true&timezone=auto`
  );

  return climaResponse.data;
}