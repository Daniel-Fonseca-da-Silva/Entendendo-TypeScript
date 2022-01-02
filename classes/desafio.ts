// Exercício 1 - Classe
class Moto {
  public velocidade: number = 0;

  constructor(public nome: string) {}

  buzinar(): void {
    console.log("Piiiiiiiiiiii!");
  }
  acelerar(delta: number) {
    this.velocidade += delta;
  }
}
//   function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0

//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }

//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }

const moto = new Moto("Ducati");
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);

// Exercício 2 - Herança
abstract class Objeto2D {
  constructor(public base: number = 0, public altura: number = 0) {}

  abstract area(): number;
}

class Retangulo extends Objeto2D {
  area(): number {
    return this.base * this.altura;
  }
}

const retangulo = new Retangulo(5, 7);
retangulo.base = 10;
// retangulo.altura = 7;
console.log(retangulo.area());

// Exercício 3 - Getters & Setters
class Estagiario {
  private _primeiroNome: string = "";

  get primeiroNome() {
    return this._primeiroNome;
  }
  set primeiroNome(valor) {
    if (valor.length >= 3) {
      this._primeiroNome = valor;
    } else {
      this._primeiroNome = "";
    }
  }
}
const estagiario = new Estagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Da";
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = "Daniel";
console.log(estagiario.primeiroNome);
