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

    navigator.geolocation.getCurrentPosition(

      async (posicao) => {

        try {

          const latitude =
            posicao.coords.latitude;

          const longitude =
            posicao.coords.longitude;

          const dados =
            await buscarClima(
              latitude,
              longitude
            );

          setClima(dados);

        } catch {

          setErro(
            "Erro ao carregar clima"
          );

        } finally {

          setCarregando(false);
        }
      },

      () => {

        setErro(
          "Permissão de localização negada"
        );

        setCarregando(false);
      }
    );

  }, []);

  return {
    clima,
    erro,
    carregando,
  };
}

export default useClima;