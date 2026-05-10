import useClima from "../../hooks/useClima";

import Header
from "../../components/header/Header";

import Footer
from "../../components/footer/Footer";

import {
  FaTemperatureHigh,
} from "react-icons/fa";

import {
  WiStrongWind,
  WiDayCloudy,
} from "react-icons/wi";

import {
  MdAccessTime,
} from "react-icons/md";

import { obterClima }
from "../../utils/clima";

import "./Dashboard.css";

function Dashboard() {

  const {
    clima,
    erro,
  } = useClima();

  const dadosClima =
    clima
      ? obterClima(
          clima.current_weather.weathercode
        )
      : null;

  if (erro) {
    return (
      <div className="carregando">
        {erro}
      </div>
    );
  }

  if (!clima) {
    return (
      <div className="carregando">

        <WiDayCloudy
          className="icone-loading"
        />

        <p>
          Carregando clima...
        </p>

      </div>
    );
  }

  const horarioFormatado =
    new Date(
      clima.current_weather.time
    ).toLocaleString("pt-BR");

  return (
    <>

      <Header />

      <div className="dashboard-container">

        <h1 className="dashboard-title">
          AppTempo Dashboard
        </h1>

        <div className="cidade-container">

          <h2>
            📍 Porto Alegre - RS
          </h2>

          <div className="clima-atual">

            {dadosClima && (
              <>
                <dadosClima.icone
                  className="icone-clima"
                />

                <p>
                  {dadosClima.descricao}
                </p>
              </>
            )}

          </div>
        </div>

        <div className="cards-container">

          <div className="clima-card">

            <FaTemperatureHigh
              className="icone"
            />

            <h2>Temperatura</h2>

            <p className="info-clima">
              {clima.current_weather.temperature}°C
            </p>

          </div>

          <div className="clima-card">

            <WiStrongWind
              className="icone"
            />

            <h2>Vento</h2>

            <p className="info-clima">
              {clima.current_weather.windspeed} km/h
            </p>

          </div>

          <div className="clima-card">

            <MdAccessTime
              className="icone"
            />

            <h2>Horário</h2>

            <p className="info-clima">
              {horarioFormatado}
            </p>

          </div>

        </div>

      </div>

      <Footer />

    </>
  );
}

export default Dashboard;