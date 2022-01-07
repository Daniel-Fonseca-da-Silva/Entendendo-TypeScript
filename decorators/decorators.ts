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

interface Eletrodomestico {
  imprimir?(): void;
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

function imprimivel(construtor: Function) {
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

@perfilAdmin
class MudancaAdministrativa {
  critico() {
    console.log("Algo crítico foi alterado!");
  }
}

function perfilAdmin<T extends Construtor>(construtor: T) {
  return class extends construtor {
    constructor(...args: any[]) {
      super(...args);
      if (!usuarioLogado || !usuarioLogado.admin) {
        throw new Error("Sem permissão");
      }
    }
  };
}

new MudancaAdministrativa().critico();

class ContaCorrente {
  private saldo: number;

  constructor(saldo: number) {
    this.saldo = saldo;
  }

  @congelar
  sacar(valor: number) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    } else {
      return false;
    }
  }

  @congelar
  getSaldo() {
    return this.saldo;
  }
}

const conta = new ContaCorrente(1000.86);
conta.sacar(500.5);
console.log(conta.getSaldo());

// conta.getSaldo = function () {
//   return this["saldo"] + 7000;
// };
console.log(conta.getSaldo());

// Object.freeze
function congelar(
  alvo: any,
  nomeMetodo: string,
  descritor: PropertyDescriptor
) {
  console.log(alvo);
  console.log(nomeMetodo);
  descritor.writable = false;
}
