import CamposDocumento from './CamposDocumento';
import CamposEmitente from './CamposEmitente';
import ChaveGerada from './ChaveGerada';

export default function App() {
  return (
    <form className="absolute top-1/2 left-1/2 flex w-2/5 -translate-1/2 flex-col gap-4">
      <CamposEmitente />
      <CamposDocumento />
      <ChaveGerada />
    </form>
  );
}
