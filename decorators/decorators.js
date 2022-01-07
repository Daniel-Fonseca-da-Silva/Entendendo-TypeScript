"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: "Guilherme Filho",
    email: "guigui@gmail.com",
    admin: true,
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log("Algo crítico foi alterado!");
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
function perfilAdmin(construtor) {
    return class extends construtor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error("Sem permissão");
            }
        }
    };
}
new MudancaAdministrativa().critico();
//# sourceMappingURL=decorators.js.map