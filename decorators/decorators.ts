function logarClasse(construtor: Function) {
  console.log(construtor);
}

// Decorator factory

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: Boolean) {
  return valor ? logarClasse : decoratorVazio;
}

function decorator(obj: { a: string; b: number }) {
  return function (_: Function): void {
    console.log(obj.a + "\n" + obj.b);
  };
}

// @logarClasse
// @logarClasseSe(true)
// @decorator({ a: "algo", b: 17 })

type Construtor = { new (...args: any[]): {} };

function logarObjeto(construtor: Construtor) {
  console.log("Carregando...");
  return class extends construtor {
    constructor(...args: any[]) {
      console.log("Antes...");
      super(...args);
      console.log("Depois...");
    }
  };
}

// new Eletrodomestico();
// new Eletrodomestico();

// @logarClasse
// @logarClasseSe(true)
// @decorator({ a: "algo", b: 17 })
// @logarObjeto

interface Eletrodomestico {
  imprimir?(): void;
}

@imprimivel
class Eletrodomestico {
  constructor() {
    console.log("novo!");
  }
}

function imprimivel(construtor: Function) {
  construtor.prototype.imprimir = function () {
    console.log(this);
  };
}

const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
