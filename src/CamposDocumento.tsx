import { modelos } from './constantes';

export default function CamposDocumento() {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box grid w-full min-w-0 grid-cols-2 gap-4 border p-4 sm:grid-cols-4">
      <legend className="fieldset-legend">Documento</legend>

      <div>
        <label htmlFor="modelo">Modelo</label>
        <select name="modelo" id="modelo" className="select w-full">
          <option disabled selected value="" className="truncate">
            Selecione o modelo
          </option>

          {modelos.map((modelo) => (
            <option value={modelo.codigo}>{modelo.modelo}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="serie">Série</label>
        <input
          name="serie"
          id="serie"
          className="input w-full"
          type="number"
        ></input>
      </div>

      <div>
        <label htmlFor="numero">Número</label>
        <input
          name="numero"
          id="numero"
          className="input w-full"
          type="number"
        ></input>
      </div>

      <div>
        <label htmlFor="data">Data de emissão</label>
        <input
          name="data"
          id="data"
          className="input w-full"
          type="date"
        ></input>
      </div>
    </fieldset>
  );
}
