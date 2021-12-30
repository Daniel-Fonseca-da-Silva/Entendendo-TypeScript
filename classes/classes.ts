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

  private alterarVelocidade(delta: number): number {
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
