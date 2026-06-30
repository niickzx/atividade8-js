

function criarFichaCatalogacao(titulo, autor) {
  return `Livro: "${titulo}" — Autor: ${autor}`;
}

function processarAutores(autores, autorBusca, titulo) {
  const listaAutores = autores.split(",");

  // Exibir cada autor
  listaAutores.forEach((autor) => console.log(autor.trim()));
  console.log();

 
  const encontrado = listaAutores.some(
    (a) => a.trim().toLowerCase() === autorBusca.toLowerCase()
  );

  if (encontrado) {
    console.log("Autor encontrado");
  } else {
    console.log("Autor não encontrado");
  }

  
  const ficha = criarFichaCatalogacao(titulo, autorBusca);
  console.log(ficha);


  console.log();
  console.log(listaAutores.map((a) => a.trim()).join(", "));
}


const autores1 = "Machado de Assis,Clarice Lispector,Monteiro Lobato";
processarAutores(autores1, "Clarice Lispector", "A Hora da Estrela");

console.log("\n---\n");


const autores2 = "J. K. Rowling,J. R. R. Tolkien";
processarAutores(autores2, "Machado de Assis", "Dom Casmurro");
