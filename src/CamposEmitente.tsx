import { useMask } from '@react-input/mask';
import { estados } from './constantes';

export default function CamposEmitente() {
  const cnpjRef = useMask({
    mask: '__.___.___/____-++',
    replacement: { '+': /\d/, _: /\w/ },
  });

  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box flex w-full min-w-0 flex-col gap-4 border p-4 sm:flex-row">
      <legend className="fieldset-legend">Emitente</legend>

      <div className="flex flex-1 flex-col">
        <label htmlFor="cnpj">CNPJ do emitente</label>
        <input
          id="cnpj"
          name="cnpj"
          ref={cnpjRef}
          type="text"
          className="input w-full"
          placeholder=""
        />
      </div>

      <div className="flex flex-1 flex-col">
        <label htmlFor="uf">Estado</label>
        <select name="uf" id="uf" className="select w-full">
          <option selected disabled value="">
            Selecione o estado
          </option>
          {estados.map((estado) => (
            <option value={estado.codigo}>{estado.uf}</option>
          ))}
        </select>
      </div>
    </fieldset>
  );
}
