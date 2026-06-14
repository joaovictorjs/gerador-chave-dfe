import { useEffect } from 'react';
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
      aamm: data,
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

  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box flex w-full min-w-0 flex-row gap-4 border p-4">
      <legend className="fieldset-legend">Chave gerada</legend>

      <div className="input w-full">
        <input name="chave" id="chave" readOnly />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-copy-icon lucide-copy h-[1em]"
        >
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      </div>
    </fieldset>
  );
}
