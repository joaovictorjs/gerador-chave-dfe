import { useEffect, useState } from 'react';
import { useAppContexto } from './contextos/appContexto';
import { gerarChaveAcesso } from './utils';

export default function ChaveGerada() {
  const {
    uf,
    data,
    cnpj,
    modelo,
    serie,
    numero,
    tipoEmissao,
    codigoNota,
    setChave,
    chave,
  } = useAppContexto();

  useEffect(() => {
    if (
      !uf ||
      !data ||
      !cnpj ||
      !modelo ||
      !serie ||
      !numero ||
      !tipoEmissao ||
      !codigoNota
    )
      return;

    const chave = gerarChaveAcesso({
      cUF: uf,
      aamm: data.slice(2, 4) + data.slice(5, 7),
      cnpj: cnpj,
      modelo: modelo.toString(),
      serie: serie,
      numero: numero,
      tpEmis: tipoEmissao,
      cNF: codigoNota,
    });

    setChave(chave);
  }, [
    uf,
    data,
    cnpj,
    modelo,
    serie,
    numero,
    tipoEmissao,
    codigoNota,
    setChave,
  ]);

  const [copiado, setCopiado] = useState(false);

  function copiar(): void {
    navigator.clipboard.writeText(chave);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 1500);
  }

  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box flex w-full min-w-0 flex-row gap-4 border p-4">
      <legend className="fieldset-legend">Chave gerada</legend>

      <div className="input w-full">
        <input
          name="chave"
          id="chave"
          readOnly
          value={chave}
          onClick={copiar}
          className="cursor-pointer"
        />

        {copiado ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-check text-success h-[1em]"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ) : (
          <svg
            onClick={copiar}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-copy-icon lucide-copy h-[1em] cursor-pointer"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        )}
      </div>

      {copiado && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-soft alert-success">
            <span>Chave copiada!</span>
          </div>
        </div>
      )}
    </fieldset>
  );
}
