// string
let nome: string = "Nikolai";
console.log(nome);
// nome = 28;

let idade = 28;
// idade = "Daniel";

// idade 28.5;

console.log(idade);

let habilidades: boolean = false;
// habilidades = 1;
console.log(habilidades);

// Tipos explícitos
let minhaIdade: number;
minhaIdade = 28;
console.log(typeof minhaIdade);

// minhaIdade = "28";
console.log(typeof minhaIdade);

// Array
let atividades: any[] = ["Modelagem", "Passear", "Viajar", "Namorar", "Malhar"];
console.log(atividades[4]);
console.log(typeof atividades);

atividades = [100, 200, 300];
// atividades = 100;
console.log(atividades);

// Tuplas
let endereco: [string, number, string] = ["Av principal", 117, ""];
console.log(endereco);

endereco = ["Centro", 1993, "Aranha céu New York"];

console.log(endereco);

// enums
enum Estado {
  mg, // 0
  es, // 1
  sp, // 2
  rj = 100, // 100
  bh = 4, // 4
  am, // 5
  sc, // 6
}

let meuEstado: Estado = Estado.mg;
console.log(meuEstado);

console.log(Estado.bh);

// Anny
let carro: any = "Ford";
console.log(carro);
carro = { marca: "Ford", ano: 1978 };
console.log(carro);

// Funcões
function retornaUmNome(): string {
  return nome;
  // return minhaIdade;
}

console.log(retornaUmNome());

function semRetorno(): void {
  console.log("Sem retorno ~.~");
  // return nome;
}

semRetorno();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

console.log(multiplicar(2, 25));

// Tipo função
let calculo: (x: number, y: number) => number;

calculo = multiplicar;
console.log(calculo(50, 50));

// Objetos
let usuario: { nome: string, idade: number } = {
  nome: 'Daniel',
  idade: 28
}

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
}

console.log(usuario);

// Alias
type Funcionario = {
  supervisores: string[],
  baterPonto: (horas: number) => string }

let funcionario: Funcionario =  {
  supervisores: ['Daniel', 'Nikolai'],
  baterPonto(horas: number): string {
    return horas == 8 ? 'Ponto normal' : 'Fora do horário';
  }
}

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

// Union types
let ano: number | string = 2022;
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
function falha(msg: string): never {
  throw new Error(msg);
}

const produto = {
  nome: 'Vinho',
  preco: 1,
  validarProduto() {
    if(!this.nome || this.nome.trim().length == 0) {
      falha('Precisa ter um nome')
    }
    if(this.preco <= 0) {
      falha('Preço inválido');
    }
  }
}

produto.validarProduto()

// Valores opcionais
let altura = 90;
// altura = null;

let alturaOpcional: null | number = 90;
alturaOpcional = null;

type Contato = {
  nome: string;
  idade: number;
  telefone: number | null;
}

const contato1: Contato = {
  nome: "Daniel",
  idade: 28,
  telefone: null
}

console.log(contato1);

let podeSerNulo = null; // any!
podeSerNulo = 1;
console.log(podeSerNulo);
podeSerNulo = 'algo';
console.log(podeSerNulo);

// Desafio JS para TS
type ContaBancaria = {
  saldo: number,
  depositar: (valor: number) => void;
}

let contaBancaria: ContaBancaria = {
  saldo: 150189,
  depositar(valor: number) {
    this.saldo += valor;
  }
}

type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: string[] | number[]; 
}

let correntista: Correntista = {
  nome: 'Daniel',
  contaBancaria: contaBancaria,
  contatos: ['9845215512', '9434327935'] 
}

correntista.contaBancaria.depositar(20000);
console.log(correntista);

