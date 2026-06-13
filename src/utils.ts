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
