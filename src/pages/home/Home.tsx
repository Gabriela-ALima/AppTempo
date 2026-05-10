import useWeather from "../../hooks/useClima";

function Home() {
  const { weather } = useWeather();

  return (
    <div>
      <h1>Climafy</h1>

      <pre>
        {JSON.stringify(weather, null, 2)}
      </pre>
    </div>
  );
}

export default Home;