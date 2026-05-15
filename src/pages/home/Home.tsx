import useClima
from "../../hooks/useClima";

function Home() {

  const {
    clima,
    carregando,
    erro,
  } = useClima();

  if (carregando) {
    return (
      <p>
        Carregando clima...
      </p>
    );
  }

  if (erro) {
    return (
      <p>
        {erro}
      </p>
    );
  }

  return (
    <div>

      <h1>
        AppTempo
      </h1>

      <pre>
        {JSON.stringify(
          clima,
          null,
          2
        )}
      </pre>

    </div>
  );
}

export default Home;