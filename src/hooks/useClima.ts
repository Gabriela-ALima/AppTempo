import {
  useEffect,
  useState,
} from "react";

import {
  buscarClima,
} from "../services/api";

import type {
  DadosClima,
} from "../types/clima";

interface UseClimaRetorno {

  clima: DadosClima | null;

  erro: string;

  carregando: boolean;
}

function useClima(
  cidade: string
): UseClimaRetorno {

  const [clima, setClima] =
    useState<DadosClima | null>(null);

  const [erro, setErro] =
    useState("");

  const [carregando, setCarregando] =
    useState(true);

  useEffect(() => {

    async function carregarClima() {

      try {

        setCarregando(true);

        const dados =
          await buscarClima(
            cidade
          );

        setClima(dados);

        setErro("");

      } catch {

        setErro(
          "Erro ao carregar clima"
        );

      } finally {

        setCarregando(false);
      }
    }

    carregarClima();

  }, [cidade]);

  return {
    clima,
    erro,
    carregando,
  };
}

export default useClima;