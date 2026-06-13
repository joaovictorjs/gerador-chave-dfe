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
          <button className="btn btn-primary">
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
              className="lucide lucide-wand-sparkles-icon lucide-wand-sparkles"
            >
              <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
              <path d="m14 7 3 3" />
              <path d="M5 6v4" />
              <path d="M19 14v4" />
              <path d="M10 2v2" />
              <path d="M7 8H3" />
              <path d="M21 16h-4" />
              <path d="M11 3H9" />
            </svg>
            Aleatorizar campos
          </button>
          <ChaveGerada />
        </form>
      </div>
    </AppProvedor>
  );
}
