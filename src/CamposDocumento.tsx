export default function CamposDocumento() {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box flex w-full min-w-0 flex-row gap-4 border p-4">
      <legend className="fieldset-legend">Documento</legend>

      <div className="flex-1">
        <label htmlFor="modelo">Modelo</label>
        <select name="modelo" id="modelo" className="select w-full">
          <option disabled selected value="">
            Selecione o modelo
          </option>

          <option value="55">NF-e</option>
          <option value="57">CT-e</option>
          <option value="58">MDF-e</option>
          <option value="65">NFC-e</option>
        </select>
      </div>

      <div className="flex-1">
        <label htmlFor="serie">Série</label>
        <input name="serie" id="serie" className="input" type="number"></input>
      </div>

      <div className="flex-1">
        <label htmlFor="numero">Número</label>
        <input
          name="numero"
          id="numero"
          className="input"
          type="number"
        ></input>
      </div>

      <div className="flex-1">
        <label htmlFor="data">Data de emissão</label>
        <input name="data" id="data" className="input" type="date"></input>
      </div>
    </fieldset>
  );
}
