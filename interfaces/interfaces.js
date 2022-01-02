"use strict";
function saudarComOlar(pessoa) {
    console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Nome";
}
const pessoa = {
    nome: "Nikolai",
};
saudarComOlar(pessoa);
mudarNome(pessoa);
saudarComOlar(pessoa);
saudarComOlar({ nome: "Alguém", idade: 18, peso: 75 });
//# sourceMappingURL=interfaces.js.map