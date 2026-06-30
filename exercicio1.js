

function exibirProduto(produto) {
  const preco = parseFloat(produto.preco);

  if (isNaN(preco)) {
    console.log("Preço inválido.");
    return;
  }

  const precoFormatado = preco % 1 === 0
    ? preco.toFixed(0)
    : preco.toFixed(2);

  console.log(`Produto: ${produto.nome}`);
  console.log(`Categoria: ${produto.categoria}`);
  console.log(`Preço: R$ ${precoFormatado}`);
  console.log();

  if (produto.estoque < 10) {
    console.log("Estoque baixo");
  } else {
    console.log("Estoque adequado");
  }
}


const produto1 = {
  nome: "Monitor",
  categoria: "Informática",
  preco: "899.90",
  estoque: 5,
};

exibirProduto(produto1);
console.log();
console.log(Object.keys(produto1));

console.log("\n---\n");


const produto2 = {
  nome: "Cadeira",
  categoria: "Escritório",
  preco: "450",
  estoque: 30,
};

exibirProduto(produto2);
