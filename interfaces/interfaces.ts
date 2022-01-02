interface Humano {
  nome: string;
  idade?: number; // Parâmetro opcional
  [prop: string]: any; // Parâmetro dinâmico (sem um tipo específico)
}

function saudarComOlar(pessoa: Humano) {
  console.log("Olá, " + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "Nome";
}

const pessoa: Humano = {
  nome: "Nikolai",
};

saudarComOlar(pessoa);
mudarNome(pessoa);
saudarComOlar(pessoa);
saudarComOlar({ nome: "Alguém", idade: 18, peso: 75 });
