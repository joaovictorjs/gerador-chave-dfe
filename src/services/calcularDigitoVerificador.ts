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
