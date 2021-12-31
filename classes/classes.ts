class Data {
  // Público por padrão!
  dia: number;
  public mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(25, 5, 1990);
aniversario.dia = 5;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data(); // Pode omitir os "()"
casamento.ano = 2022;
console.log(casamento);

class DataEsperta {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
}

const aniversarioEsperto = new DataEsperta(25, 5, 1990);
aniversarioEsperto.dia = 5;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta(); // Pode omitir os "()"
casamentoEsperto.ano = 2022;
console.log(casamentoEsperto);

// Desafio Classe Produto
// Atributos: nome, preco, desconto
// criar o construtor
// Obs 1.: Desconto é opcional (valor padrão 0)
// Obs 2.: Criar dois produtos: passando dois e três parâmetros

class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}

  // Também é public
  precoComDesconto(): number {
    return this.preco * (1 - this.desconto);
  }

  public resumo(): string {
    return `${this.nome} custa R$ ${this.precoComDesconto()} (${
      this.desconto * 100
    }% off)`;
  }
}

const monitor1 = new Produto("Monitor AOC 24 gamer", 959.85);
const monitor2 = new Produto("Monitor LG 24", 939.95, 0.5);
console.log(monitor1.resumo());
console.log(monitor2.resumo());

// Criar um método precoComDesconto
// Quais são os parâmetros e o retorno?
// Alterar método resumo para mostrar o preço com desconto

class Carro {
  private velocidadeAtual: number = 0;
  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeAtual : 0;
    }

    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

const carro1 = new Carro("Dodge", "Le Baron", 170);
Array(50)
  .fill(0)
  .forEach(() => carro1.acelerar());
console.log(carro1.acelerar());

console.log(carro1.frear());
console.log(carro1.frear());
Array(100)
  .fill(0)
  .forEach(() => carro1.frear());
console.log(carro1.frear());

class jeep extends Carro {
  constructor(modelo: string, velocidadeMaxma: number) {
    super("Lada", modelo, velocidadeMaxma);
  }

  public acelerar(): number {
    return this.alterarVelocidade(15);
  }

  public frear(): number {
    return this.alterarVelocidade(-10);
  }
}

const niva = new jeep("Niva 4x4", 165);
console.log(`Marca: ${niva.marca}, modelo: ${niva.modelo}`);
console.log(niva.acelerar());
console.log(niva.acelerar());
console.log(niva.acelerar());
console.log(niva.frear());

// Getters & setters
class Pessoa {
  idade: number = 0;

  // get idade(): number {
  //   return this._idade;
  // }

  // set idade(valor: number) {
  //   if (valor >= 0 && valor <= 120) {
  //     this._idade = valor;
  //   }
  // }
}

const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1);

pessoa1.idade - 3;
console.log(pessoa1.idade);

// Atributos e métodos estáticos
class Calc {
  static PI: number = 3.1416;

  static areaCirc(raio: number): number {
    return this.PI * raio * raio;
  }
}

// const calc1 = new Calc();
// calc1.PI = 4.2;
// console.log(calc1.areaCirc(4));

console.log(Calc.areaCirc(4));
// console.log(new Calc().areaCirc(4));

// Classe abstrata
abstract class Calculo {
  protected resultado: number = 0;
  abstract executar(...numeros: number[]): void;

  getResultado(): number {
    return this.resultado;
  }
}

class Somar extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t + a);
  }
}

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t * a);
  }
}
let c1: Calculo = new Somar();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

// Singleton
class Unico {
  private static instance: Unico = new Unico();
  private constructor() {}

  static getInstance(): Unico {
    return Unico.instance;
  }

  agora() {
    return new Date();
  }
}

// const errado = new Unico;
console.log(Unico.getInstance().agora());

// Somente leitura
class Aviao {
  public readonly modelo: string;
  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
  }
}

const turboHelice = new Aviao("Boing 777", "BR-045");
turboHelice.modelo = "Asa Delta";
turboHelice.prefixo = "Quebrado";
console.log(turboHelice);
