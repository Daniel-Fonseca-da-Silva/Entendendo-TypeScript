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
