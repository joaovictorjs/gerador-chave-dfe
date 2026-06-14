import { modelos, tiposEmissao, numeroSerieMaximo, numeroMaximo, codigoNotaMaximo } from './constantes';
import { useAppContexto } from './contextos/appContexto';

export default function CamposDocumento() {
  const {
    modelo,
    setModelo,
    serie,
    setSerie,
    numero,
    setNumero,
    data,
    setData,
    codigoNota,
    setCodigoNota,
    tipoEmissao,
    setTipoEmissao,
  } = useAppContexto();

  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box grid w-full min-w-0 grid-cols-2 grid-rows-3 gap-4 border p-4 sm:grid-cols-3 sm:grid-rows-2">
      <legend className="fieldset-legend">Documento</legend>

      <div>
        <label htmlFor="modelo">Modelo</label>
        <select
          name="modelo"
          id="modelo"
          className="select w-full"
          value={modelo ?? ''}
          onChange={(e) =>
            setModelo(e.target.value ? Number(e.target.value) : null)
          }
        >
          {modelos.map((m) => (
            <option value={m.codigo}>{m.modelo}</option>
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
          min={0}
          max={numeroSerieMaximo}
          value={serie ?? ''}
          onChange={(e) => {
            if (!e.target.value) return setSerie(null);
            setSerie(Math.min(Number(e.target.value), numeroSerieMaximo));
          }}
        />
      </div>

      <div>
        <label htmlFor="numero">Número</label>
        <input
          name="numero"
          id="numero"
          className="input w-full"
          type="number"
          min={0}
          max={numeroMaximo}
          value={numero ?? ''}
          onChange={(e) => {
            if (!e.target.value) return setNumero(null);
            setNumero(Math.min(Number(e.target.value), numeroMaximo));
          }}
        />
      </div>

      <div>
        <label htmlFor="data">Data de emissão</label>
        <input
          name="data"
          id="data"
          className="input w-full"
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="cNF">Código da nota</label>
        <input
          name="cNF"
          id="cNF"
          className="input w-full"
          type="number"
          min={0}
          max={codigoNotaMaximo}
          value={codigoNota ?? ''}
          onChange={(e) => {
            if (!e.target.value) return setCodigoNota(null);
            setCodigoNota(Math.min(Number(e.target.value), codigoNotaMaximo));
          }}
        />
      </div>

      <div>
        <label htmlFor="tpEmis">Tipo de emissão</label>
        <select
          name="tpEmis"
          id="tpEmis"
          className="select w-full"
          value={tipoEmissao ?? ''}
          onChange={(e) =>
            setTipoEmissao(e.target.value ? Number(e.target.value) : null)
          }
        >
          {tiposEmissao.map((tipo) => (
            <option value={tipo.codigo}>{tipo.tipoEmissao}</option>
          ))}
        </select>
      </div>
    </fieldset>
  );
}
