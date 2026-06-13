import { useEffect } from 'react';
import { useAppContexto } from './contextos/appContexto';
import { gerarChaveAcesso } from './services/gerarChaveAcesso';

export default function ChaveGerada() {
  const { cnpj, uf, modelo, serie, numero, data, chave, setChave } =
    useAppContexto();

  useEffect(() => {
    if (
      !cnpj ||
      uf === '' ||
      modelo === '' ||
      serie === '' ||
      numero === '' ||
      !data
    ) {
      setChave('');
      return;
    }

    const cnpjLimpo = cnpj.replace(/\D/g, '');
    if (cnpjLimpo.length !== 14) {
      setChave('');
      return;
    }

    const [ano, mes] = data.split('-');
    const aamm = ano.slice(-2) + mes;

    const cNF = Math.floor(Math.random() * 100000000);

    const chaveGerada = gerarChaveAcesso({
      cUF: uf,
      aamm,
      cnpj: cnpjLimpo,
      modelo: modelo.toString(),
      serie,
      numero,
      tpEmis: 1,
      cNF,
    });

    setChave(chaveGerada);
  }, [cnpj, uf, modelo, serie, numero, data, setChave]);

  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box flex w-full min-w-0 flex-row gap-4 border p-4">
      <legend className="fieldset-legend">Chave gerada</legend>

      <input
        name="chave"
        id="chave"
        className="input w-full"
        readOnly
        value={chave}
      />
    </fieldset>
  );
}
