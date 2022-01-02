"use strict";
function saudarComOlar(pessoa) {
    console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Nome";
}
const pessoa = {
    nome: "Nikolai",
    idade: 20,
};
saudarComOlar(pessoa);
mudarNome(pessoa);
saudarComOlar(pessoa);
//# sourceMappingURL=interfaces.js.map