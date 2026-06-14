import { useState, type ReactNode } from 'react';
import { AppContexto } from './appContexto';

export default function AppContextoProvedor({
  children,
}: {
  children: ReactNode;
}) {
  const [cnpj, setCnpj] = useState('');
  const [uf, setUf] = useState<number | null>(null);
  const [modelo, setModelo] = useState<number | null>(null);
  const [serie, setSerie] = useState<number | null>(null);
  const [numero, setNumero] = useState<number | null>(null);
  const [data, setData] = useState('');
  const [codigoNota, setCodigoNota] = useState<number | null>(null);
  const [tipoEmissao, setTipoEmissao] = useState<number | null>(null);
  const [chave, setChave] = useState('');

  return (
    <AppContexto.Provider
      value={{
        cnpj,
        setCnpj,
        uf,
        setUf,
        modelo,
        setModelo,
        serie,
        setSerie,
        numero,
        setNumero,
        data,
        setData,
        codigoNota,
        setCodigoNota,
        tipoEmissao,
        setTipoEmissao,
        chave,
        setChave,
      }}
    >
      {children}
    </AppContexto.Provider>
  );
}
