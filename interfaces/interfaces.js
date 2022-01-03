"use strict";
function saudarComOlar(pessoa) {
    console.log("Olá, " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Gastrovisk";
}
const pessoa = {
    nome: "Nikolai",
    idade: 18,
    saudar(sobrenome) {
        console.log(`Olá meu nome é ${this.nome} e meu sobrenome é ${sobrenome}`);
    },
};
saudarComOlar(pessoa);
mudarNome(pessoa);
saudarComOlar(pessoa);
// saudarComOlar({ nome: "Alguém", idade: 18, peso: 75 });
pessoa.saudar("Gasparine");
// Usando classes...
class Cliente {
    constructor() {
        this.nome = "";
        this.ultimaCompra = new Date();
    }
    saudar(sobrenome) {
        console.log("Olá meu nome é " + this.nome + " e meu sobrenome é " + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "Marcus";
saudarComOlar(meuCliente);
meuCliente.saudar("Gaspar");
console.log(meuCliente.ultimaCompra);
//# sourceMappingURL=interfaces.js.map