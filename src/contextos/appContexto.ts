import { createContext, useContext } from 'react';

type TipoAppContexto = {
  cnpj: string;
  setCnpj: (v: string) => void;
  uf: number | null;
  setUf: (v: number | null) => void;
  modelo: number | null;
  setModelo: (v: number | null) => void;
  serie: number | null;
  setSerie: (v: number | null) => void;
  numero: number | null;
  setNumero: (v: number | null) => void;
  data: string;
  setData: (v: string) => void;
  codigoNota: number | null;
  setCodigoNota: (v: number) => void;
  tipoEmissao: number | null;
  setTipoEmissao: (v: number | null) => void;
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
