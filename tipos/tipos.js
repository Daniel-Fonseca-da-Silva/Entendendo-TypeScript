"use strict";
// string
let nome = "Nikolai";
console.log(nome);
// nome = 28;
let idade = 28;
// idade = "Daniel";
// idade 28.5;
console.log(idade);
let habilidades = false;
// habilidades = 1;
console.log(habilidades);
// Tipos explícitos
let minhaIdade;
minhaIdade = 28;
console.log(typeof minhaIdade);
// minhaIdade = "28";
console.log(typeof minhaIdade);
// Array
let atividades = ["Modelagem", "Passear", "Viajar", "Namorar", "Malhar"];
console.log(atividades[4]);
console.log(typeof atividades);
atividades = [100, 200, 300];
// atividades = 100;
console.log(atividades);
// Tuplas
let endereco = ["Av principal", 117, ""];
console.log(endereco);
endereco = ["Centro", 1993, "Aranha céu New York"];
console.log(endereco);
// enums
var Estado;
(function (Estado) {
    Estado[Estado["mg"] = 0] = "mg";
    Estado[Estado["es"] = 1] = "es";
    Estado[Estado["sp"] = 2] = "sp";
    Estado[Estado["rj"] = 100] = "rj";
    Estado[Estado["bh"] = 4] = "bh";
    Estado[Estado["am"] = 5] = "am";
    Estado[Estado["sc"] = 6] = "sc";
})(Estado || (Estado = {}));
let meuEstado = Estado.mg;
console.log(meuEstado);
console.log(Estado.bh);
// Anny
let carro = "Ford";
console.log(carro);
carro = { marca: "Ford", ano: 1978 };
console.log(carro);
// Funcões
function retornaUmNome() {
    return nome;
    // return minhaIdade;
}
console.log(retornaUmNome());
function semRetorno() {
    console.log("Sem retorno ~.~");
    // return nome;
}
semRetorno();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 25));
// Tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(50, 50));
// Objetos
let usuario = {
    nome: 'Daniel',
    idade: 28
};
console.log(usuario);
console.log(typeof usuario);
// usuario = {}
// usuario = {
//   name: 'Nikolai',
//   idade: 18
// }
usuario = {
    nome: 'Nikolai',
    idade: 18
};
console.log(usuario);
let funcionario = {
    supervisores: ['Daniel', 'Nikolai'],
    baterPonto(horas) {
        return horas == 8 ? 'Ponto normal' : 'Fora do horário';
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// Union types
let ano = 2022;
console.log(`O ano atual é ${ano}`);
ano = '2022';
console.log(`O ano atual é ${ano}`);
// Checando tipos
let valor = 28;
// valor = false;
// // JavaScript
// if(typeof valor === "number") {
//   console.log("É number");
// } else {
//   console.log(typeof valor);
// }
// Never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Vinho',
    preco: 1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
// Valores opcionais
let altura = 90;
// altura = null;
let alturaOpcional = 90;
alturaOpcional = null;
const contato1 = {
    nome: "Daniel",
    idade: 28,
    telefone: null
};
console.log(contato1);
let podeSerNulo = null; // any!
podeSerNulo = 1;
console.log(podeSerNulo);
podeSerNulo = 'algo';
console.log(podeSerNulo);
let contaBancaria = {
    saldo: 150189,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Daniel',
    contaBancaria: contaBancaria,
    contatos: ['9845215512', '9434327935']
};
correntista.contaBancaria.depositar(20000);
console.log(correntista);
