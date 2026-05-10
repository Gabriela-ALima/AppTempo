import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.open-meteo.com/v1",
});

export async function getWeather() {
  const response = await api.get(
    "/forecast?latitude=-30.03&longitude=-51.23&current_weather=true"
  );

  return response.data;
}