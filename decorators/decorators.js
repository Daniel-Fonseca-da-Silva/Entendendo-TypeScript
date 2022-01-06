"use strict";
function logarClasse(construtor) {
    console.log(construtor);
}
// Decorator factory
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + "\n" + obj.b);
    };
}
function logarObjeto(construtor) {
    console.log("Carregando...");
    return class extends construtor {
        constructor(...args) {
            console.log("Antes...");
            super(...args);
            console.log("Depois...");
        }
    };
}
// @logarClasse
// @logarClasseSe(true)
// @decorator({ a: "algo", b: 17 })
// @logarObjeto
// @imprimivel
class Eletrodomestico {
    constructor() {
        console.log("novo!");
    }
}
function imprimivel(construtor) {
    construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
eletro.imprimir && eletro.imprimir();
eletro.imprimir && eletro.imprimir();
//# sourceMappingURL=decorators.js.map