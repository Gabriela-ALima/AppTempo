import useWeather from "../../hooks/useWeather";

function Dashboard() {
  const { weather } = useWeather();

  return (
    <div>
      <h1>Dashboard Climafy</h1>

      <p>
        Temperatura:
        {weather?.current_weather.temperature}°C
      </p>

      <p>
        Velocidade do vento:
        {weather?.current_weather.windspeed} km/h
      </p>

      <p>
        Horário:
        {weather?.current_weather.time}
      </p>
    </div>
  );
}

export default Dashboard;