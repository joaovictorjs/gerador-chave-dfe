import CamposDocumento from './CamposDocumento';
import CamposEmitente from './CamposEmitente';
import ChaveGerada from './ChaveGerada';

export default function App() {
  return (
    <div>
      <form className="absolute top-1/2 left-1/2 flex w-2/5 -translate-1/2 flex-col gap-4">
        <CamposEmitente />
        <CamposDocumento />
        <ChaveGerada />
      </form>

      <div className="absolute bottom-10 left-1/2 flex w-2/5 -translate-x-1/2 flex-col gap-2">
        <div role="alert" className="alert bg-base-100">
          <span>
            Os campos vazios serão preenchidos com dados aleatórios ao gerar a
            chave de acesso.
          </span>
        </div>

        <div role="alert" className="alert bg-base-100">
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
