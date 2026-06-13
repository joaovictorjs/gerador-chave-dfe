export function atribuirValorSeNecessario(
  campo: HTMLInputElement | HTMLSelectElement,
  valor: string | number,
) {
  if (campo.value && campo.value !== '') return;
  campo.value = valor.toString();
}

export function gerarCnpj() {
  let cnpj = '';
  for (let i = 0; i < 14; i++) {
    cnpj += Math.floor(Math.random() * 10);
  }
  return cnpj;
}

export function obterItemAleatorio(colecao: { codigo: number }[]): number {
  const indice = Math.floor(Math.random() * colecao.length);
  return colecao[indice].codigo;
}

export function obterDataAtual(): string {
  const agora = new Date();
  return agora.toISOString().split('T')[0];
}
export function calcularDigitoVerificador(chaveSemDv: string): number {
  if (!chaveSemDv || !/^\d{43}$/.test(chaveSemDv)) {
    throw new Error(
      "A chave deve conter exatamente 43 dígitos numéricos.",
    );
  }

  let soma = 0;
  let pesoAtual = 2;

  for (let i = chaveSemDv.length - 1; i >= 0; i--) {
    const digito = Number(chaveSemDv[i]);
    soma += digito * pesoAtual;

    pesoAtual++;
    if (pesoAtual > 9) {
      pesoAtual = 2;
    }
  }

  const resto = soma % 11;
  const digitoVerificador = 11 - resto;

  return digitoVerificador >= 10 ? 0 : digitoVerificador;
}

export interface DadosChaveAcesso {
  cUF: number;
  aamm: string;
  cnpj: string;
  modelo: string;
  serie: number;
  numero: number;
  tpEmis: number;
  cNF: number;
}

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
