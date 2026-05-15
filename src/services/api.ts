import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.open-meteo.com/v1",
});

export async function buscarClima(
  latitude: number,
  longitude: number
) {

  const response = await api.get(
    `/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );

  return response.data;
}