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
let potencia;
potencia = function (base, exp) {
    // Math.pow(3, 10)
    // 3 ** 10
    return Array(exp)
        .fill(base)
        .reduce((t, a) => t * a);
};
console.log(potencia(2, 8));
console.log(Math.pow(2, 8));
console.log(Math.pow(2, 8));
class RealA {
    a() { }
}
class RealAB {
    b() { }
    a() { }
}
class RealABC {
    c() { }
    a() { }
    b() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
console.log(x);
console.log(y);
console.log(z);
x.log();
y.log();
z.log();
const cli = {
    name: "Erik",
    toString() {
        return this.name;
    },
};
cli.log();
//# sourceMappingURL=interfaces.js.map