import type { DadosChaveAcesso } from "./types";
import { calcularDigitoVerificador } from "./calcularDigitoVerificador";

export function gerarChaveAcesso(dados: DadosChaveAcesso): string {
  const chaveSemDv = montarChaveSemDv(dados);
  const digitoVerificador = calcularDigitoVerificador(chaveSemDv);

  return `${chaveSemDv}${digitoVerificador}`;
}

function montarChaveSemDv(dados: DadosChaveAcesso): string {
  return (
    dados.cUF.toString().padStart(2, "0") +
    dados.aamm +
    dados.cnpj.padStart(14, "0") +
    dados.modelo +
    dados.serie.toString().padStart(3, "0") +
    dados.numero.toString().padStart(9, "0") +
    dados.tpEmis +
    dados.cNF.toString().padStart(8, "0")
  );
}
