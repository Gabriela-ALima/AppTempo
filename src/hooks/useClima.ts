import { useEffect, useState } from "react";

import { buscarClima }
from "../services/api";

import type { DadosClima }
from "../types/clima";

function useClima() {

  const [clima, setClima] =
    useState<DadosClima | null>(null);

  const [erro, setErro] =
    useState("");

  useEffect(() => {

    async function carregarClima() {

      try {

        const dados =
          await buscarClima();

        setClima(dados);

      } catch {

        setErro(
          "Erro ao carregar clima"
        );

      }
    }

    carregarClima();

  }, []);

  return {
    clima,
    erro,
  };
}

export default useClima;