

function calcularGastos(valores) {
  let total = 0;

  for (let i = 0; i < valores.length; i++) {
    const num = parseFloat(valores[i]);

    if (isNaN(num)) {
      continue; 
    }

    total += num;
  }

  return total;
}

function exibirRelatorio(valores) {
  const total = calcularGastos(valores);

 
  const totalFormatado = total % 1 === 0
    ? total.toFixed(0)
    : total.toFixed(2);

  console.log(`Total: R$ ${totalFormatado}`);
  console.log();

  if (total > 2000) {
    console.log("Limite ultrapassado");
  } else {
    console.log("Gastos dentro do limite");
  }
}


const gastos1 = ["500", "350.50", "1000"];
exibirRelatorio(gastos1);

console.log("\n---\n");


const gastos2 = ["800", "900", "700"];
exibirRelatorio(gastos2);
