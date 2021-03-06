"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
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
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
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
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    // Também é public
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custa R$ ${this.precoComDesconto()} (${this.desconto * 100}% off)`;
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
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeAtual : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
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
    constructor(modelo, velocidadeMaxma) {
        super("Lada", modelo, velocidadeMaxma);
    }
    acelerar() {
        return this.alterarVelocidade(15);
    }
    frear() {
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
    constructor() {
        this.idade = 0;
        // get idade(): number {
        //   return this._idade;
        // }
        // set idade(valor: number) {
        //   if (valor >= 0 && valor <= 120) {
        //     this._idade = valor;
        //   }
        // }
    }
}
const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1);
pessoa1.idade - 3;
console.log(pessoa1.idade);
// Atributos e métodos estáticos
class Calc {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Calc.PI = 3.1416;
// const calc1 = new Calc();
// calc1.PI = 4.2;
// console.log(calc1.areaCirc(4));
console.log(Calc.areaCirc(4));
// console.log(new Calc().areaCirc(4));
// Classe abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Somar extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Somar();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
// Singleton
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date();
    }
}
Unico.instance = new Unico();
// const errado = new Unico;
console.log(Unico.getInstance().agora());
// Somente leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao("Boing 777", "BR-045");
turboHelice.modelo = "Asa Delta";
turboHelice.prefixo = "Quebrado";
console.log(turboHelice);
//# sourceMappingURL=classes.js.map