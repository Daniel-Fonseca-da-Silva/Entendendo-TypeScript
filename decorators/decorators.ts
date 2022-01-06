// @logarClasse
// @logarClasseSe(true)
@decorator({ a: "algo", b: 17 })
class Eletrodomestico {
  constructor() {
    console.log("novo!");
  }
}

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
