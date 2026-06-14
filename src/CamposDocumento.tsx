import { modelos, tiposEmissao } from './constantes';

export default function CamposDocumento() {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box grid w-full min-w-0 grid-cols-2 grid-rows-3 gap-4 border p-4 sm:grid-cols-3 sm:grid-rows-2">
      <legend className="fieldset-legend">Documento</legend>

      <div>
        <label htmlFor="modelo">Modelo</label>
        <select name="modelo" id="modelo" className="select w-full">
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

      <div>
        <label htmlFor="cNF">Código da nota</label>
        <input name="cNF" id="cNF" className="input w-full"></input>
      </div>

      <div>
        <label htmlFor="tpEmis">Tipo de emissão</label>
        <select name="tpEmis " id="tpEmis" className="select w-full">
          {tiposEmissao.map((tipo) => (
            <option value={tipo.codigo}>{tipo.tipoEmissao}</option>
          ))}
        </select>
      </div>
    </fieldset>
  );
}
