import CamposDocumento from './CamposDocumento';
import CamposEmitente from './CamposEmitente';
import ChaveGerada from './ChaveGerada';
import { estados, modelos } from './constantes';
import {
  atribuirValorSeNecessario,
  gerarCnpj,
  obterDataAtual,
  obterItemAleatorio,
} from './utils';

export default function App() {
  const lidarComEnvio = (evento: React.SubmitEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const formulario = evento.currentTarget;
    if (!formulario) return;

    const cnpj = formulario.cnpj;
    const uf = formulario.uf;
    const modelo = formulario.modelo;
    const serie = formulario.serie;
    const numero = formulario.numero;
    const data = formulario.data;

    if (!cnpj || !uf || !modelo || !serie || !numero || !data) return;

    atribuirValorSeNecessario(cnpj, gerarCnpj());
    atribuirValorSeNecessario(uf, obterItemAleatorio(estados));
    atribuirValorSeNecessario(modelo, obterItemAleatorio(modelos));
    atribuirValorSeNecessario(serie, Math.floor(Math.random() * 10));
    atribuirValorSeNecessario(numero, Math.floor(Math.random() * 99999));
    atribuirValorSeNecessario(data, obterDataAtual());
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 py-8">
      <form
        className="flex w-full flex-col gap-4 xl:w-1/2"
        onSubmit={lidarComEnvio}
      >
        <CamposEmitente />
        <CamposDocumento />
        <ChaveGerada />
      </form>

      <div className="flex w-full flex-col gap-2 xl:w-1/2">
        <div role="alert" className="alert bg-base-100">
          <span>
            Os campos vazios serão preenchidos com dados aleatórios ao gerar a
            chave de acesso.
          </span>
        </div>

        <div role="alert" className="alert bg-base-100 hidden lg:block">
          <span>
            Pressione <kbd className="kbd">Ctrl</kbd> +{' '}
            <kbd className="kbd">Enter</kbd> para gerar e copiar uma chave de
            acesso.
          </span>
        </div>
      </div>
    </div>
  );
}
