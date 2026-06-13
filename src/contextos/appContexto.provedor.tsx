import { useState, type ReactNode } from 'react';
import { AppContexto } from './appContexto';

export default function AppContextoProvedor({
  children,
}: {
  children: ReactNode;
}) {
  const [cnpj, setCnpj] = useState('');
  const [uf, setUf] = useState<number | ''>('');
  const [modelo, setModelo] = useState<number | ''>('');
  const [serie, setSerie] = useState<number | ''>('');
  const [numero, setNumero] = useState<number | ''>('');
  const [data, setData] = useState('');
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
        chave,
        setChave,
      }}
    >
      {children}
    </AppContexto.Provider>
  );
}
