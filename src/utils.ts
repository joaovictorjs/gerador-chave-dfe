export function atribuirValorSeNecessario(
  campo: HTMLInputElement | HTMLSelectElement,
  valor: string | number,
) {
  if (campo.value && campo.value !== '') return;
  campo.value = valor.toString();
}

function calcularDvCnpj(cnpjBase: string): string {
  const digitos = cnpjBase.split('').map(Number);

  const peso1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const soma1 = digitos.reduce(
    (acumulador, digito, i) => acumulador + digito * peso1[i],
    0,
  );
  const resto1 = soma1 % 11;
  const dv1 = resto1 < 2 ? 0 : 11 - resto1;

  const pesos2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const soma2 = [...digitos, dv1].reduce(
    (acumulador, digito, i) => acumulador + digito * pesos2[i],
    0,
  );
  const resto2 = soma2 % 11;
  const dv2 = resto2 < 2 ? 0 : 11 - resto2;

  return `${dv1}${dv2}`;
}

export function gerarCnpj(): string {
  let cnpjBase = '';
  for (let i = 0; i < 12; i++) {
    cnpjBase += Math.floor(Math.random() * 10);
  }

  const dv = calcularDvCnpj(cnpjBase);
  return cnpjBase + dv;
}

export function gerarCnpjFormatado(): string {
  const cnpj = gerarCnpj();
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
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
    return 0;
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

function sanitizarNumeros(valor: string): string {
  return valor.replace(/\D/g, '');
}

function montarChaveSemDv(dados: DadosChaveAcesso): string {
  return (
    dados.cUF.toString().padStart(2, '0') +
    sanitizarNumeros(dados.aamm) +
    sanitizarNumeros(dados.cnpj).padStart(14, '0') +
    sanitizarNumeros(dados.modelo) +
    dados.serie.toString().padStart(3, '0') +
    dados.numero.toString().padStart(9, '0') +
    dados.tpEmis +
    dados.cNF.toString().padStart(8, '0')
  );
}
