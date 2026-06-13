export default function ChaveGerada() {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box flex w-full min-w-0 flex-row gap-4 border p-4">
      <legend className="fieldset-legend">Chave gerada</legend>

      <input name="chave" id="chave" className="input w-full" readOnly />
    </fieldset>
  );
}
