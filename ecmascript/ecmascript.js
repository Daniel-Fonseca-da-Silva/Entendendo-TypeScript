"use strict";
// Let & Const
let seraQuePode = "?"; // Hoisting
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = "Colocar um casaco";
    console.log(acao);
}
const cpf = "000.000.000-00";
// cpf = "111.111.111-11";
console.log(cpf);
var segredo = "Externo";
function revelar() {
    const segredo = "Interno";
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    {
        const def = "def";
        console.log(def);
    }
}
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i);
// Arrow Function
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(3, 5));
console.log(somar(2, 50));
/*
Arrow function
  remova palavra function
  subtistua '{}' chaves e return por '=>' flecha
*/
// const subtrair = function (n1: number, n2: number) { n1 - n2 };
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(10, 5));
const somarArrow = (val1, val2) => val1 + val2;
console.log(somarArrow(25, 25));
const saudacao = () => console.log("Olá!");
saudacao();
const falarCom = (pessoa) => console.log("Olá " + pessoa);
falarCom("João");
// This
// function normalComThis() {
//   console.log(this);
// }
// normalComThis();
// const normalComThisEspecial = normalComThis.bind({ nome: "Nikolai" });
// normalComThisEspecial();
// // Quem é o this????
// console.log(this);
// const arrowComThis = () => console.log(this);
// arrowComThis();
// Parâmetros padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(3);
// Rest & Spread
const numbers = [1, 10, 99, -5, 1024];
// console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]));
console.log(Math.max(...numbers));
const turmaA = ["Daniel", "Nikolai", "Irina", "Josh"];
const turmaB = [
    "Pedro",
    "Kenzo Sato",
    ...turmaA,
    "Liu lee",
    "Enzo Garcia",
];
console.log(turmaA);
console.log(turmaB);
function retornaArray(...args) {
    return args;
}
const numeross = retornaArray(1, 2, 4, 5, 64, 1024);
console.log(numeross);
console.log(retornaArray(...numbers));
// Rest & Spead (Tupla)
const tupla = [1, "algo", false];
function tuplaParam1(a, b, c) {
    console.log(`1 ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(Array.isArray(params));
    console.log(`2 ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
//# sourceMappingURL=ecmascript.js.map