interface Humano {
  nome: string;
  idade: number;
}

function saudarComOlar(pessoa: Humano) {
  console.log("Olá, " + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "Nome";
}

const pessoa: Humano = {
  nome: "Nikolai",
  idade: 20,
};

saudarComOlar(pessoa);
mudarNome(pessoa);
saudarComOlar(pessoa);
