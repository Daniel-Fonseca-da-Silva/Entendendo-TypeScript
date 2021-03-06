interface Humano {
  nome: string;
  idade?: number; // Parâmetro opcional
  [prop: string]: any; // Parâmetro dinâmico (sem um tipo específico)

  saudar(sobrenome: string): void; // Função (pode se opcional!)
}

function saudarComOlar(pessoa: Humano) {
  console.log("Olá, " + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "Gastrovisk";
}

const pessoa: Humano = {
  nome: "Nikolai",
  idade: 18,
  saudar(sobrenome: string) {
    console.log(`Olá meu nome é ${this.nome} e meu sobrenome é ${sobrenome}`);
  },
};

saudarComOlar(pessoa);
mudarNome(pessoa);
saudarComOlar(pessoa);
// saudarComOlar({ nome: "Alguém", idade: 18, peso: 75 });
pessoa.saudar("Gasparine");

// Usando classes...
class Cliente implements Humano {
  nome: string = "";
  ultimaCompra: Date = new Date();
  saudar(sobrenome: string) {
    console.log(
      "Olá meu nome é " + this.nome + " e meu sobrenome é " + sobrenome
    );
  }
}

const meuCliente = new Cliente();
meuCliente.nome = "Marcus";
saudarComOlar(meuCliente);
meuCliente.saudar("Gaspar");
console.log(meuCliente.ultimaCompra);

// Interface Função
interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = function (base: number, exp: number): number {
  // Math.pow(3, 10)
  // 3 ** 10
  return Array(exp)
    .fill(base)
    .reduce((t, a) => t * a);
};

console.log(potencia(2, 8));
console.log(Math.pow(2, 8));
console.log(2 ** 8);

// Herança
interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  b(): void {}
  a(): void {}
}

class RealABC implements ABC {
  c(): void {}
  a(): void {}
  b(): void {}
}

abstract class AbstrataABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void;
}

interface Object {
  log(): void;
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
