// Let & Const
let seraQuePode = "?"; // Hoisting
console.log(seraQuePode);

let estaFrio = true;
if (estaFrio) {
  let acao = "Colocar um casaco";
  console.log(acao);
}

const cpf: string = "000.000.000-00";
// cpf = "111.111.111-11";
console.log(cpf);

var segredo = "Externo";

function revelar() {
  const segredo = "Interno";
  console.log(segredo);
}
revelar();
console.log(segredo);

{
  {
    const def = "def";
    console.log(def);
  }
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}
// console.log(i);

// Arrow Function
const somar = function (n1: number, n2: number): number {
  return n1 + n2;
};

console.log(somar(3, 5));
console.log(somar(2, 50));

/*
Arrow function
  remova palavra function
  subtistua '{}' chaves e return por '=>' flecha
*/
// const subtrair = function (n1: number, n2: number) { n1 - n2 };
const subtrair = (n1: number, n2: number) => n1 - n2;
console.log(subtrair(10, 5));
const somarArrow = (val1: number, val2: number) => val1 + val2;
console.log(somarArrow(25, 25));

const saudacao = () => console.log("Olá!");
saudacao();

const falarCom = (pessoa: string) => console.log("Olá " + pessoa);
falarCom("João");

// This
// function normalComThis() {
//   console.log(this);
// }
// normalComThis();

// const normalComThisEspecial = normalComThis.bind({ nome: "Nikolai" });
// normalComThisEspecial();

// // Quem é o this????
// console.log(this);

// const arrowComThis = () => console.log(this);
// arrowComThis();

// Parâmetros padrão
function contagemRegressiva(
  inicio: number = 5,
  fim: number = inicio - 5
): void {
  console.log(inicio);
  while (inicio > fim) {
    inicio--;
    console.log(inicio);
  }
  console.log("Fim!");
}

contagemRegressiva();
contagemRegressiva(3);

// Rest & Spread
const numbers = [1, 10, 99, -5, 1024];
// console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]));
console.log(Math.max(...numbers));

const turmaA: string[] = ["Daniel", "Nikolai", "Irina", "Josh"];
const turmaB: string[] = [
  "Pedro",
  "Kenzo Sato",
  ...turmaA,
  "Liu lee",
  "Enzo Garcia",
];

console.log(turmaA);
console.log(turmaB);

function retornaArray(...args: number[]): number[] {
  return args;
}

const numeross = retornaArray(1, 2, 4, 5, 64, 1024);
console.log(numeross);
console.log(retornaArray(...numbers));

// Rest & Spead (Tupla)
const tupla: [number, string, boolean] = [1, "algo", false];
function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1 ${a} ${b} ${c}`);
}

tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]) {
  console.log(Array.isArray(params));
  console.log(`2 ${params[0]} ${params[1]} ${params[2]}`);
}

tuplaParam2(...tupla);

// Destructuring (array)
const caracteristicas = ["Teclado Husky Blue Sky Dragon", 2022, 459];
// const marca = caracteristicas[0];
// const anoo = caracteristicas[1];
// const preco = caracteristicas[2];
const [marca, anoo, preco] = caracteristicas;
console.log(marca);
console.log(anoo);
console.log(preco);

// Destructuring (array)
const produtom = {
  nome: "Mouse Husky Black Hole",
  preco: 89,
  conexao: "wireless",
  origem: {
    br: "nacional",
    ch: "internactional",
  },
};

const nomeProdutom = produtom.nome;
const precoProdutom = produtom.preco;
const conexaoProdutom = produtom.conexao;
console.log(nomeProdutom);
console.log(precoProdutom);
console.log(precoProdutom);

// Apelido para atributos!
const {
  nome: n,
  preco: p,
  conexao: cn,
  origem: { br },
} = produtom;
console.log(n);
console.log(p);
console.log(cn);
console.log(br);

const usuarioId: string = "suporteEmpresa";
const notificacoes: string = "19";
// const boasVindas =
//   "Boas vindas " + usuarioId + " notificações: " + notificacoes;
const boasVindas = `Boas vindas ${usuarioId}, 
Notificações: ${parseInt(notificacoes) > 9 ? "+9" : notificacoes}
`;
console.log(boasVindas);
console.log(`${1 + 1}`);
console.log(`Nome: ${produtom.nome}`);

// Callback
// function espera3s(callback: (dado: string) => void) {
//   setTimeout(() => {
//     callback("3 segundos depois");
//   }, 3000);
// }
// espera3s(function (resultado: string) {
//   console.log(resultado);
// });

// // Promise
// function espera3sPromise() {
//   return new Promise((resolve: any) => {
//     setTimeout(() => {
//       resolve("3 segundos depois Promise!");
//     }, 3000);
//   });
// }

// espera3sPromise().then((dado) => console.log(dado));

fetch("https://swapi.dev/api/people/1")
  .then((res) => res.json())
  .then((personagem) => personagem.films)
  .then((films) => fetch(films[0]))
  .then((resFilm) => resFilm.json())
  .then((filme) => console.log(filme.title))
  .catch((err) => console.log("catch!!!!" + err.message));
