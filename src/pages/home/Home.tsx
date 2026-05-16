import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  useState,
} from "react";

import {
  WiDayCloudy,
} from "react-icons/wi";

import "./Home.css";

function Home() {

  const navigate =
    useNavigate();

  const [cidade, setCidade] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [senha, setSenha] =
    useState("");

  return (

    <div className="home-container">

      <div className="home-imagem">

        <WiDayCloudy
          className="icone-clima-home"
        />

        <h1>
          AppTempo
        </h1>

        <p>
          Acompanhe o clima da sua cidade
          em tempo real.
        </p>

      </div>

      <div className="home-formulario">

        <div className="formulario-card">

          <h2>
            Entrar
          </h2>

          <p className="subtitulo">
            Faça login para acessar
            o dashboard climático.
          </p>

          <form
            onSubmit={(evento) => {

              evento.preventDefault();

              navigate("/dashboard", {
                state: {
                  cidade,
                },
              });
            }}
          >

            <input
              type="text"
              placeholder="Digite sua cidade"
              value={cidade}
              onChange={(evento) =>
                setCidade(
                  evento.target.value
                )
              }
            />

            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(evento) =>
                setEmail(
                  evento.target.value
                )
              }
            />

            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(evento) =>
                setSenha(
                  evento.target.value
                )
              }
            />

            <button type="submit">
              Entrar
            </button>

          </form>

          <div className="cadastro-link">

            <p>
              Ainda não possui conta?
            </p>

            <Link to="/register">
              Criar conta
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;