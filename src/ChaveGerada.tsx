export default function ChaveGerada() {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box flex w-full min-w-0 flex-row gap-4 border p-4">
      <legend className="fieldset-legend">Chave gerada</legend>

      <div className="join flex w-full flex-row">
        <input
          name="chave"
          id="chave"
          className="join-item input input-neutral flex-10"
          readOnly
        />
        <button className="join-item btn btn-accent flex-3">
          Gerar e copiar
        </button>
      </div>
    </fieldset>
  );
}
