import { Link }
from "react-router-dom";

import {
  WiDaySunny,
} from "react-icons/wi";

import "./Register.css";

function Register() {

  return (

    <div className="register-container">

      <div className="register-imagem">

        <WiDaySunny
          className="icone-register"
        />

        <h1>
          AppTempo
        </h1>

        <p>
          Crie sua conta para acessar
          previsões climáticas.
        </p>

      </div>

      <div className="register-formulario">

        <div className="register-card">

          <h2>
            Criar Conta
          </h2>

          <form>

            <input
              type="text"
              placeholder="Digite seu nome"
            />

            <input
              type="email"
              placeholder="Digite seu email"
            />

            <input
              type="password"
              placeholder="Digite sua senha"
            />

            <button type="submit">
              Cadastrar
            </button>

          </form>

          <div className="voltar-login">

            <p>
              Já possui conta?
            </p>

            <Link to="/">
              Voltar para login
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;