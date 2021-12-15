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
