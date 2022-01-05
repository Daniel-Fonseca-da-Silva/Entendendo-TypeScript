"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo("Nikolai").length);
console.log(echo(27).length);
console.log(echo({ nome: "Nikolai", idade: 20 }));
// Usando generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado("Nikolai").length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: "Nikolai", idade: 20 }));
// Generics disponíveis na API
const avaliacoes = [10, 9.5, 4.5];
avaliacoes.push(8.4);
// avaliacoes.push('3.5');
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach((elemento) => console.log(elemento));
}
imprimir([5, 3, 8, 12]);
imprimir([6, 18, 24, 32]);
imprimir(["3", "6", "12", "24"]);
imprimir([
    { nome: "Nikolai", peso: 80 },
    { nome: "Gasparine", peso: 95 },
    { nome: "Josh", peso: 75 },
]);
imprimir([
    { nome: "Nikolai", peso: 80 },
    { nome: "Gasparine", peso: 95 },
    { nome: "Josh", peso: 75 },
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho("Alguma coisa"));
// classe com generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria("Bom ", "dia").executar());
// console.log(new OperacaoBinaria(3, 9).executar());
// console.log(new OperacaoBinaria(3, 9).executar());
// console.log(new OperacaoBinaria("17", "28").executar());
// console.log(new OperacaoBinaria({}, null).executar());
// class SomaBinaria extends OperacaoBinaria<number, number> {
//   executar(): number {
//     return this.operando1 + this.operando2;
//   }
// }
// console.log(new SomaBinaria(25, 25).executar());
// class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
//   getTime(data: Data): number {
//     let { dia, mes, ano } = data;
//     return new Date(`${mes}/${dia}/${ano}`).getTime();
//   }
//   executar(): string {
//     const t1 = this.getTime(this.operando1);
//     const t2 = this.getTime(this.operando2);
//     const diferenca = Math.abs(t1 - t2);
//     // Um dia em milissegundos
//     const dia = 1000 * 60 * 24;
//     return `${Math.ceil(diferenca / dia)} dia(s)`;
//   }
// }
// const d1 = new Data(1, 2, 2022);
// const d2 = new Data(5, 2, 2022);
// console.log(new DiferencaEntreDatas(d1, d2).executar());
// Desafio classe fila
// Attributo: fila (Array)
// Métodos: entrar, próximo, imprimir
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila("Nikolai", "Josh", "Lucca", "Cornnelius", "Julli");
fila.imprimir();
fila.entrar("Gasparini");
fila.imprimir();
fila.proximo();
fila.imprimir();
fila.proximo();
fila.proximo();
fila.proximo();
fila.proximo();
fila.imprimir();
fila.proximo();
fila.imprimir();
//# sourceMappingURL=generics.js.map