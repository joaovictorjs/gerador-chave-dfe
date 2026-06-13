import { createContext, useContext } from 'react';

type TipoAppContexto = {
  cnpj: string;
  setCnpj: (v: string) => void;
  uf: number | '';
  setUf: (v: number | '') => void;
  modelo: number | '';
  setModelo: (v: number | '') => void;
  serie: number | '';
  setSerie: (v: number | '') => void;
  numero: number | '';
  setNumero: (v: number | '') => void;
  data: string;
  setData: (v: string) => void;
  chave: string;
  setChave: (v: string) => void;
};

export const AppContexto = createContext<TipoAppContexto | undefined>(
  undefined,
);

export function useAppContexto() {
  const contexto = useContext(AppContexto);
  if (!contexto)
    throw new Error(
      'useAppContexto só deve ser chamado dentro de um AppContextoProvedor',
    );
  return contexto;
}
