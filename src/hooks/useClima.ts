import { useEffect, useState }
from "react";

import { buscarClima }
from "../services/api";

import type { DadosClima }
from "../types/clima";

interface UseClimaRetorno {
  clima: DadosClima | null;

  erro: string;

  carregando: boolean;
}

function useClima():
UseClimaRetorno {

  const [clima, setClima] =
    useState<DadosClima | null>(null);

  const [erro, setErro] =
    useState("");

  const [carregando, setCarregando] =
    useState(true);

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

      } finally {

        setCarregando(false);
      }
    }

    carregarClima();

  }, []);

  return {
    clima,
    erro,
    carregando,
  };
}

export default useClima;