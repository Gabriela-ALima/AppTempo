import { Link }
from "react-router-dom";

import "./Header.css";

function Header() {

  return (
    <header className="header">

      <h1 className="logo">
        🌤️ AppTempo
      </h1>

      <Link
        to="/login"
        className="botao-login"
      >
        Voltar para Login
      </Link>

    </header>
  );
}

export default Header;