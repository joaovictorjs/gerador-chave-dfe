import CamposDocumento from './CamposDocumento';
import CamposEmitente from './CamposEmitente';
import ChaveGerada from './ChaveGerada';
import AppProvedor from './contextos/appContexto.provedor';

export default function App() {
  return (
    <AppProvedor>
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 py-8">
        <form
          className="flex w-full flex-col gap-4 xl:w-1/2"
          onSubmit={(e) => e.preventDefault()}
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
    </AppProvedor>
  );
}
