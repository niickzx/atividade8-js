

function processarDisciplinas(disciplinas) {

  for (let i = 0; i < disciplinas.length; i++) {
    if (disciplinas[i] === "") {
      continue;
    }

    if (disciplinas[i] === "TCC") {
      console.log("TCC");
      console.log();
      console.log("Laço interrompido");
      return; // encerra após encontrar TCC
    }

    console.log(disciplinas[i]);
  }
}

function exibirMatricula(disciplinas) {
  
  disciplinas.forEach((d) => {
    if (d !== "") console.log(d);
  });

  console.log();
  const total = disciplinas.filter((d) => d !== "").length;
  console.log(`Total: ${total}`);

  if (disciplinas.includes("JavaScript")) {
    console.log();
    console.log("Aluno cursa JavaScript");
  }
}


const disciplinas1 = ["HTML", "CSS", "JavaScript"];
exibirMatricula(disciplinas1);

console.log("\n---\n");


const disciplinas2 = ["Banco de Dados", "", "TCC", "Redes"];
processarDisciplinas(disciplinas2);
