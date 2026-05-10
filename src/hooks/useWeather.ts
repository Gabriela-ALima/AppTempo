import { useEffect, useState } from "react";
import { getWeather } from "../services/api";
import type { WeatherData } from "../types/weather";

function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    getWeather().then(setWeather);
  }, []);

  return { weather };
}

export default useWeather;