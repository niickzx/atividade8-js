

function formatarData(data) {
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

function exibirEvento(evento) {
  console.log(`Evento: ${evento.nome}`);

  if ("local" in evento && evento.local) {
    console.log(`Local: ${evento.local}`);
  }

  console.log();
  console.log(formatarData(evento.data));
  console.log();
  console.log(`Participantes: ${evento.participantes.length}`);

  if (evento.participantes.length === 0) {
    console.log();
    console.log("Nenhum participante cadastrado");
  }

  console.log();
  console.log(`Local cadastrado: ${"local" in evento}`);
}


const evento1 = {
  nome: "Semana da Tecnologia",
  local: "Auditório",
  data: new Date("2026-08-20"),
  participantes: ["Ana", "Carlos", "Marcos"],
};

exibirEvento(evento1);

console.log("\n---\n");


const evento2 = {
  nome: "Workshop Angular",
  local: "Laboratório 5",
  data: new Date("2026-09-10"),
  participantes: [],
};

exibirEvento(evento2);
